package org.ballerinalang.openapi.cmd;

import org.ballerinalang.launcher.BLauncherCmd;
import org.ballerinalang.launcher.LauncherUtils;
import org.ballerinalang.openapi.CodeGenerator;
import org.ballerinalang.openapi.utils.GeneratorConstants;
import picocli.CommandLine;

import java.io.PrintStream;
import java.util.List;

/**
 * This class will implement the "openapi" sub-command "gen-client" for Ballerina OpenApi tool.
 *
 * Ex: ballerina openapi (gen-client) [moduleName]:clientName -o[output directory name]
 */
@CommandLine.Command(name = "gen-client")
public class OpenApiGenClientCmd implements BLauncherCmd {
    private static final String CMD_NAME = "openapi";

    private static final PrintStream outStream = System.err;

    @CommandLine.Parameters(index = "0", split = ":")
    private List<String> moduleArgs;

    @CommandLine.Parameters(index = "1..*")
    private List<String> argList;

    @CommandLine.Option(names = { "-o", "--output" }, description = "where to write the generated " +
            "files (current dir by default)")
    private String output = "";

    @CommandLine.Option(names = { "-h", "--help" }, hidden = true)
    private boolean helpFlag;

    @Override
    public void execute() {
        CodeGenerator generator = new CodeGenerator();

        //Help flag check
        if (helpFlag) {
            String commandUsageInfo = BLauncherCmd.getCommandUsageInfo(getName());
            outStream.println(commandUsageInfo);
            return;
        }

        if (moduleArgs == null) {
            throw LauncherUtils.createLauncherException("Client name is mandatory to generate the ballerina client." +
                    " \nE.g. ballerina openapi gen-client [<module>]:<servicename> <openapicontract>");
        }

        //Check if relevant arguments are present
        if (argList == null) {
            throw LauncherUtils.createLauncherException("An OpenApi definition file is required to " +
                    "generate the client. \nE.g: ballerina openapi gen-client " + moduleArgs.get(0) + ":"
                    + moduleArgs.get(1) + " <OpenApiContract>");
        }

        if (moduleArgs.size() > 2) {
            generator.setSrcPackage(moduleArgs.get(0));
        }

        try {
            generator.generate(GeneratorConstants.GenType.valueOf("GEN_CLIENT"), argList.get(0), output);
        } catch (Exception e) {
            throw LauncherUtils.createLauncherException(
                    "Error occurred when generating service for openapi contract at " + argList.get(0)
                            + ". " + e.getMessage() + ".");
        }


    }

    @Override
    public String getName() {
        return null;
    }

    @Override
    public void printLongDesc(StringBuilder out) {

    }

    @Override
    public void printUsage(StringBuilder out) {

    }

    @Override
    public void setParentCmdParser(CommandLine parentCmdParser) {

    }

}
