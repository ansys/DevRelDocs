Sherlock Common Service- SherlockCommonService.proto

Sherlock Common Service- SherlockCommonService.proto

[Prev](ch01s03.xhtml) 

 

 [Next](ch01s05.xhtml)

* * *

Sherlock Common Service- SherlockCommonService.proto
----------------------------------------------------

[Click here to return to the main index to Sherlock's APIs.](ch01s02.xhtml "Index to the Sherlock APIs")

This section contains health checks and exit APIs shared by all services. Clicking on the active links in the table below will take you to the selected API.

**Table 1.26. Index to Sherlock Common Service APIs**

**Method Name**

**Request Type**

**Response Type**

**Description**

_For display purposes, the long strings in columns one through three are broken into multiple lines. Example: **.IsSherlockClientLoadingRequest**_

check

[.HealthCheck Request](ch01s04.xhtml#sherlock_ug_HealthCheckRequest "HealthCheckRequest")

.[HealthCheck Response](ch01s04.xhtml#sherlock_ug_HealthCheckResponse "HealthCheckResponse")

Returns health status of gRPC server.

exit

.[ExitRequest](ch01s04.xhtml#sherlock_ug_ExitRequest "ExitRequest")

.[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Signals for gRPC connection to shutdown.

isSherlock ClientLoading

[.IsSherlockClient LoadingRequest](ch01s04.xhtml#sherlock_ug_IsSherlockClientLoadingRequest "IsSherlockClientLoadingRequest")

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Check if SherlockClient is still loading.

listUnits

[.ListUnitsRequest](ch01s04.xhtml#sherlock_ug_ListUnitsRequest "ListUnitsRequest")

[.ListUnits Response](ch01s04.xhtml#sherlock_ug_ListUnitsResponse "ListUnitsResponse")

Returns a list of valid units of the provided unit type.

  

### Exit Request

In this section:

#### ExitRequest

Empty request to exit the gRPC connection.

**Table 1.27. ExitRequest**

**Field**

**Type**

**Label**

**Description**

closeSherlockClient

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

If set to true, exits the Sherlock client if it is opened. Otherwise, just closes the gRPC connection.

  

#### Examples: Exit

##### Proto Request Example

{
  "closeSherlockClient": true
}
Python Example:
import SherlockCommonService\_pb2
import SherlockCommonService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockCommonService\_pb2\_grpc.SherlockCommonServiceStub(channel)

message = SherlockCommonService\_pb2.ExitRequest()
message.closeSherlockClient = True

response = stub.exit(message)

print(str(response))

##### Python Example

import SherlockCommonService\_pb2
import SherlockCommonService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockCommonService\_pb2\_grpc.SherlockCommonServiceStub(channel)
response = stub.exit(SherlockCommonService\_pb2.HealthCheckRequest())

print(str(response))

### IsSherlockClientLoadingRequest

 

### List Units

#### ListUnitsRequest

Request for a list of valid units of the provided unit type.

**Table 1.28. ListUnitsRequest**

**Field**

**Type**

**Label**

**Description**

unitType

[ListUnitsRequest.UnitType](ch01s04.xhtml#sherlock_ug_ListUnitsRequest.UnitType "ListUnitsRequest.UnitType")

 

Unit type to request valid units of.

  

#### ListUnitsRequest.UnitType

**Table 1.29. ListUnitsRequest.UnitType**

**Name**

**Number**

**Description**

UNKNOWN

0

Indicates an unknown unit type.

ACCEL\_DENSITY

1

Units used for acceleration density.

ACCELERATION

2

Units used for acceleration.

AREA

3

Units used for area.

BANDWIDTH

4

Units used for bandwidth.

CAPACITANCE

5

Units used for electrical capacitance.

CTE

6

Units used for material CTE.

CURRENT

7

Units used for electrical current.

DENSITY

8

Units used for density.

DISP\_DENSITY

9

Units used for displacement density.

FORCE

10

Units used for force.

FREQUENCY

11

Units used for frequency.

INDUCTANCE

12

Units used for inductance.

LENGTH

13

Units used for length.

POWER

14

Units used for electrical power.

RESISTANCE

15

Units used for electrical resistance.

SIZE

16

Units used for size.

SPECIFIC\_HEAT

17

Units used for specific heat.

STRAIN

18

Units used for strain.

STRESS

19

Units used for stress.

TEMPERATURE

20

Units used for temperature.

THERMAL\_CONDUCTIVITY

21

Units used for thermal conductivity.

THERMAL\_RESISTANCE

22

Units used for thermal resistance.

TIME

23

Units used for time.

VELOCITY

24

Units used for velocity.

VELOCITY\_DENSITY

25

Units used for velocity density.

VOLTAGE

26

Units used for electrical voltage.

VOLUME

27

Units used for volume.

WEIGHT

28

Units used for weight.

  

#### ListUnitsResponse

Represents a list of valid units for the provided unit type.

**Table 1.30. ListUnitsResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

 

Status code of response.

units

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of valid units for the requested type.

  

### Return Code

Status response of a message. A value of 0 indicates a successful request.

**Table 1.31. ReturnCode**

**Field**

**Type**

**Label**

**Description**

value

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

 

Status code of response. A value of 0 indicates success.

message

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Message indicating the status of response including any error.

  

### Health Check

In this section:

#### HealthCheckRequest

Empty request to check if the gRPC connection is open.

#### HealthCheckResponse

Represents whether the gRPC connection is open.

**Table 1.32. HealthCheckResponse**

**Field**

**Type**

**Label**

**Description**

status

[HealthCheckResponse.ServingStatus](ch01s04.xhtml#sherlock_ug_HealthCheckResponse.ServingStatus "HealthCheckResponse.ServingStatus")

 

 

port

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

 

Listening port number on server.

  

#### HealthCheckResponse.ServingStatus

**Table 1.33. HealthCheckResponse.ServingStatus**

**Name**

**Number**

**Description**

UNKNOWN

0

Indicates an unknown connection status.

SERVING

1

Indicates the connection is up and server is listening.

NOT\_SERVING

2

Indicates connection with server is closed.

  

#### Examples: Health Check

##### Proto Request Example

{ }

##### Python Example

import SherlockCommonService\_pb2
import SherlockCommonService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockCommonService\_pb2\_grpc.SherlockCommonServiceStub(channel)
response = stub.check(SherlockCommonService\_pb2.HealthCheckRequest())

print(str(response))

#### Example: List Units

##### Proto Request Example:

{
  "unitType": 13
}

##### Python Example:

import SherlockCommonService\_pb2
import SherlockCommonService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockCommonService\_pb2\_grpc.SherlockCommonServiceStub(channel)

message = SherlockCommonService\_pb2.ListUnitsRequest()
message.unitType = SherlockCommonService\_pb2.ListUnitsRequest.UnitType.LENGTH;

response = stub.listUnits(message)

print(str(response))

* * *

[Prev](ch01s03.xhtml) 

 

 [Next](ch01s05.xhtml)

Sherlock Analysis Service- SherlockAnalysisService.proto 

[Home](index.xhtml)

 Sherlock Layer Service-SherlockLayerService.proto