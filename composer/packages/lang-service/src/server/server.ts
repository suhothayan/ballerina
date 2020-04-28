import { ChildProcess, spawn } from "child_process";
import * as path from "path";
import * as treekill from "tree-kill";
import { toSocket } from "vscode-ws-jsonrpc";
// tslint:disable-next-line:no-submodule-imports
import * as serverRPC from "vscode-ws-jsonrpc/lib/server";
import { Server } from "ws";

export function spawnStdioServer(ballerinaHome: string): ChildProcess {
    const cmd = path.join(ballerinaHome, "bin", "ballerina");
    const args = ["start-language-server"];
    return spawn(cmd, args);
}

export function spawnWSServer(ballerinaHome: string, port: number)
            : Server {
    // start web-server
    const wsServer = new Server({ port });
    wsServer.on("connection", (socket: WebSocket) => {
        // start lang-server process
        const lsProcess = spawnStdioServer(ballerinaHome);
        const serverConnection = serverRPC.createProcessStreamConnection(lsProcess);
        // forward websocket messages to stdio of ls process
        const clientConnection = serverRPC.createWebSocketConnection(toSocket(socket));
        serverRPC.forward(clientConnection, serverConnection);
        const killLSProcess = () => {
            treekill.default(lsProcess.pid);
            clientConnection.dispose();
        };
        socket.onclose = killLSProcess;
        socket.onerror = killLSProcess;
    });
    return wsServer;
}
