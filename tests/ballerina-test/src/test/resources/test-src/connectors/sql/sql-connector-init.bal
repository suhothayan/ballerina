import ballerina.data.sql;

sql:ConnectionProperties properties = {url:"jdbc:hsqldb:file:./target/tempdb/TEST_SQL_CONNECTOR_INIT",
                  driverClassName:"org.hsqldb.jdbc.JDBCDriver", maximumPoolSize:1,
                  idleTimeout:600000, connectionTimeout:30000, autoCommit:true, maxLifetime:1800000,
                  minimumIdle:1, poolName:"testHSQLPool", isolateInternalQueries:false,
                  allowPoolSuspension:false, readOnly:false, validationTimeout:5000, leakDetectionThreshold:0,
                  connectionInitSql:"SELECT 1 FROM INFORMATION_SCHEMA.SYSTEM_USERS",
                  transactionIsolation:"TRANSACTION_READ_COMMITTED", catalog:"PUBLIC",
                  connectionTestQuery:"SELECT 1 FROM INFORMATION_SCHEMA.SYSTEM_USERS"};

sql:ConnectionProperties Properties2 = {url:"jdbc:hsqldb:file:./target/tempdb/TEST_SQL_CONNECTOR_INIT"};

map propertiesMap = {"loginTimeout":109, "url":"jdbc:hsqldb:file:./target/tempdb/TEST_SQL_CONNECTOR_INIT"};
sql:ConnectionProperties properties3 = {dataSourceClassName:"org.hsqldb.jdbc.JDBCDataSource",
                                          datasourceProperties:propertiesMap};

map propertiesMap2 = {"loginTimeout":109};
sql:ConnectionProperties properties4 = {dataSourceClassName:"org.hsqldb.jdbc.JDBCDataSource",
                                          datasourceProperties:propertiesMap2};

sql:ConnectionProperties properties5 = {dataSourceClassName:"org.hsqldb.jdbc.JDBCDataSource"};

map propertiesMap3 = {"url":"jdbc:hsqldb:file:./target/tempdb/TEST_SQL_CONNECTOR_INIT"};
sql:ConnectionProperties properties6 = {dataSourceClassName:"org.hsqldb.jdbc.JDBCDataSource",
                                          datasourceProperties:propertiesMap3};

function testConnectionPoolProperties1 () (string firstName) {
    endpoint<sql:ClientEndpoint> testDBEP {
        database: sql:DB.HSQLDB_FILE,
        host: "",
        port: 0,
        name: "",
        username: "SA",
        password: "",
        options: properties
    }
    var testDB = testDBEP.getConnector();

    table dt = testDB -> select("SELECT  FirstName from Customers where registrationID = 1", null, null);
    var j, _ = <json>dt;
    firstName = j.toString();
    testDB -> close();
    return;
}

function testConnectionPoolProperties2 () (string firstName) {
    endpoint<sql:ClientEndpoint> testDBEP {
        username: "SA",
        options: properties
    }
    var testDB = testDBEP.getConnector();

    table dt = testDB -> select("SELECT  FirstName from Customers where registrationID = 1", null, null);
    var j, _ = <json>dt;
    firstName = j.toString();
    testDB -> close();
    return;
}

function testConnectionPoolProperties3 () (string firstName) {
    endpoint<sql:ClientEndpoint> testDBEP {
        database: sql:DB.HSQLDB_FILE,
        host: "./target/tempdb/",
        name: "TEST_SQL_CONNECTOR_INIT",
        username: "SA"
    }
    var testDB = testDBEP.getConnector();

    table dt = testDB -> select("SELECT  FirstName from Customers where registrationID = 1", null, null);
    var j, _ = <json>dt;
    firstName = j.toString();
    testDB -> close();
    return;
}


function testConnectorWithDefaultPropertiesForListedDB () (string firstName) {
    endpoint<sql:ClientEndpoint> testDBEP {
        database: sql:DB.HSQLDB_FILE,
        host: "./target/tempdb/",
        name: "TEST_SQL_CONNECTOR_INIT",
        username: "SA",
        password: "",
        options: null
    }
    var testDB = testDBEP.getConnector();

    table dt = testDB -> select("SELECT  FirstName from Customers where registrationID = 1", null, null);
    var j, _ = <json>dt;
    firstName = j.toString();
    testDB -> close();
    return;
}


function testConnectorWithDirectUrl () (string firstName) {
    endpoint<sql:ClientEndpoint> testDBEP {
        username: "SA",
        options: Properties2
    }
    var testDB = testDBEP.getConnector();

    table dt = testDB -> select("SELECT  FirstName from Customers where registrationID = 1", null, null);
    var j, _ = <json>dt;
    firstName = j.toString();
    testDB -> close();
    return;
}

function testConnectorWithDataSourceClass () (string firstName) {
    endpoint<sql:ClientEndpoint> testDBEP {
        database: sql:DB.GENERIC,
        username: "SA",
        options: properties3
    }
    var testDB = testDBEP.getConnector();

    table dt = testDB -> select("SELECT  FirstName from Customers where registrationID = 1", null, null);
    var j, _ = <json>dt;
    firstName = j.toString();
    testDB -> close();
    return;
}

function testConnectorWithDataSourceClassAndProps () (string firstName) {
    endpoint<sql:ClientEndpoint> testDBEP {
        database: sql:DB.HSQLDB_FILE,
        host: "./target/tempdb/",
        name: "TEST_SQL_CONNECTOR_INIT",
        username: "SA",
        password: "",
        options: properties4
    }
    var testDB = testDBEP.getConnector();

    table dt = testDB -> select("SELECT  FirstName from Customers where registrationID = 1", null, null);
    var j, _ = <json>dt;
    firstName = j.toString();
    testDB -> close();
    return;
}

function testConnectorWithDataSourceClassWithoutURL () (string firstName) {
    endpoint<sql:ClientEndpoint> testDBEP {
        database: sql:DB.HSQLDB_FILE,
        host: "./target/tempdb/",
        name: "TEST_SQL_CONNECTOR_INIT",
        username: "SA",
        password: "",
        options: properties5
    }
    var testDB = testDBEP.getConnector();

    table dt = testDB -> select("SELECT  FirstName from Customers where registrationID = 1", null, null);
    var j, _ = <json>dt;
    firstName = j.toString();
    testDB -> close();
    return;
}

function testConnectorWithDataSourceClassURLPriority () (string firstName) {
    endpoint<sql:ClientEndpoint> testDBEP {
        database: sql:DB.HSQLDB_FILE,
        host: "./target/tempdb/",
        name: "INVALID_DB_NAME",
        username: "SA",
        password: "",
        options: properties6
    }
    var testDB = testDBEP.getConnector();

    table dt = testDB -> select("SELECT  FirstName from Customers where registrationID = 1", null, null);
    var j, _ = <json>dt;
    firstName = j.toString();
    testDB -> close();
    return;
}
