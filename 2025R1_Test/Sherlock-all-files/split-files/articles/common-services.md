# Sherlock Common Service- SherlockCommonService.proto

[Click here to return to the main index to Sherlock's APIs.](introduction.md
"Index to the Sherlock APIs")

This section contains health checks and exit APIs shared by all services.
Clicking on the active links in the table below will take you to the selected
API.

Table 1.41. Index to Sherlock Common Service APIs

Method Name| Request Type| Response Type| Description  
---|---|---|---  
For display purposes, the long strings in columns one through three are broken
into multiple lines. Example: .IsSherlockClientLoadingRequest  
check| [.HealthCheck Request](ch01s04s06.md#sherlock_ug_HealthCheckRequest
"HealthCheckRequest")| .[HealthCheck Response](ch01s04s06s02.md
"HealthCheckResponse")| Returns health status of gRPC server.  
exit| .[ExitRequest](common-services.md#sherlock_ug_ExitRequest "ExitRequest")|
.[ReturnCode](ch01s04s04.md "Return Code")| Signals for gRPC connection to
shutdown.  
isSherlock ClientLoading| [.IsSherlockClient LoadingRequest](ch01s04s02.md
"IsSherlockClientLoadingRequest")| [ReturnCode](ch01s04s04.md "Return
Code")| Check if SherlockClient is still loading.  
listUnits| [.ListUnitsRequest](ch01s04s03.md#sherlock_ug_ListUnitsRequest
"ListUnitsRequest")| [.ListUnits Response](ch01s04s03s03.md
"ListUnitsResponse")| Returns a list of valid units of the provided unit type.  
getSolders| [.GetSoldersRequest](ch01s04s05.md#sherlock_ug_GetSoldersRequest
"GetSoldersRequest")| [.GetSoldersResponse](ch01s04s05s02.md
"GetSoldersResponse")| Returns a list of valid solder materials.  
  
  

## Exit Request

Empty request to exit the gRPC connection.

Links:

### ExitRequest

Table 1.42. ExitRequest

Field| Type| Label| Description  
---|---|---|---  
closeSherlockClient| [bool](scalar-values.md "gRPC Scalar Value Types")|  | If set to true, exits the Sherlock client if it is opened. Otherwise, just closes the gRPC connection.  
  
  

### Examples: Exit

#### Proto Request Example

    
    
    {
      "closeSherlockClient": true
    }
    Python Example:
    import SherlockCommonService_pb2
    import SherlockCommonService_pb2_grpc
    import grpc
    
    channel = grpc.insecure_channel('localhost:9090')
    stub = SherlockCommonService_pb2_grpc.SherlockCommonServiceStub(channel)
    
    message = SherlockCommonService_pb2.ExitRequest()
    message.closeSherlockClient = True
    
    response = stub.exit(message)
    
    print(str(response))

#### Python Example:

For a Python example, refer to the online [PySherlock
Reference](https://sherlock.docs.pyansys.com/version/stable/api/index.md).

* * *

[Prev](ch01s03s25.md) |   / [Contents](index.md) / [Home](../../index.htm)|  [Next](ch01s04s02.md)  
---|---|---

