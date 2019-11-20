/*
*  Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
*  WSO2 Inc. licenses this file to you under the Apache License,
*  Version 2.0 (the "License"); you may not use this file except
*  in compliance with the License.
*  You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing,
*  software distributed under the License is distributed on an
*  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
*  KIND, either express or implied.  See the License for the
*  specific language governing permissions and limitations
*  under the License.
*/

package org.ballerinalang.mime.nativeimpl;

import org.ballerinalang.jvm.values.ObjectValue;
import org.ballerinalang.mime.util.EntityBodyHandler;
import org.ballerinalang.mime.util.MimeUtil;
import org.ballerinalang.stdlib.io.utils.IOConstants;

import static org.ballerinalang.mime.util.MimeConstants.ENTITY_BYTE_CHANNEL;
import static org.ballerinalang.mime.util.MimeConstants.MESSAGE_DATA_SOURCE;
import static org.ballerinalang.mime.util.MimeConstants.OCTET_STREAM;

/**
 * Set byte channel as entity body.
 *
 * @since 0.963.0
 */
public class SetByteChannel {

    public static void setByteChannel(ObjectValue entityObj, ObjectValue byteChannel,
                                      String contentType) {
        entityObj.addNativeData(ENTITY_BYTE_CHANNEL, byteChannel.getNativeData(IOConstants.BYTE_CHANNEL_NAME));
        Object dataSource = EntityBodyHandler.getMessageDataSource(entityObj);
        if (dataSource != null) { //Clear message data source when the user set a byte channel to entity
            entityObj.addNativeData(MESSAGE_DATA_SOURCE, null);
        }
        MimeUtil.setMediaTypeToEntity(entityObj, contentType != null ? contentType : OCTET_STREAM);
    }
}
