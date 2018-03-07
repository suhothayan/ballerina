// Copyright (c) 2018 WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
//
// WSO2 Inc. licenses this file to you under the Apache License,
// Version 2.0 (the "License"); you may not use this file except
// in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

package ballerina.auth.jwtAuth;

import ballerina.net.http;

@Description {value:"Authentication header name"}
const string AUTH_HEADER = "Authorization";
@Description {value:"Bearer authentication scheme"}
const string AUTH_SCHEME = "Bearer";

@Description {value:"JWT authenticator instance"}
JWTAuthenticator authenticator;

@Description {value:"Representation of JWT Auth handler for HTTP traffic"}
public struct HttpJwtAuthnHandler {
}

@Description {value:"Intercepts a HTTP request for authentication"}
@Param {value:"req: InRequest object"}
@Return {value:"boolean: true if authentication is a success, else false"}
public function <HttpJwtAuthnHandler authnHandler> canHandle (http:InRequest req) (boolean) {
    string authHeader = req.getHeader(AUTH_HEADER);
    if (authHeader != null && authHeader.hasPrefix(AUTH_SCHEME)) {
        string[] authHeaderComponents = authHeader.split(" ");
        if (lengthof authHeaderComponents == 2) {
            string[] jwtComponents = authHeaderComponents[1].split("\\.");
            if (lengthof jwtComponents == 3) {
                return true;
            }
        }
    }
    return false;
}

@Description {value:"Checks if the provided HTTP request can be authenticated with JWT authentication"}
@Param {value:"req: InRequest object"}
@Return {value:"boolean: true if its possible to authenticate with JWT auth, else false"}
public function <HttpJwtAuthnHandler authnHandler> handle (http:InRequest req) (boolean) {
    string jwtToken = extractJWTToken(req);
    if (authenticator == null) {
        authenticator = createAuthenticator();
    }
    return authenticator.authenticate(jwtToken);
}

function extractJWTToken (http:InRequest req) (string) {
    string authHeader = req.getHeader(AUTH_HEADER);
    string[] authHeaderComponents = authHeader.split(" ");
    return authHeaderComponents[1];
}
