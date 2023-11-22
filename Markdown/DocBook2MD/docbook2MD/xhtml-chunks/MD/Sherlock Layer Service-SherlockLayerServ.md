Sherlock Layer Service-SherlockLayerService.proto

Sherlock Layer Service-SherlockLayerService.proto

[Prev](ch01s04.xhtml) 

 

 [Next](ch01s06.xhtml)

* * *

Sherlock Layer Service-SherlockLayerService.proto
-------------------------------------------------

[Click here to return to the main index to Sherlock's APIs.](ch01s02.xhtml "Index to the Sherlock APIs")

The APIs in this section allow you to perform different layer view operations to a board. Clicking on the active links in the table below will take you to the selected API.

**Table 1.34. Index to Sherlock Layer Service APIs**

**Method Name**

**Request Type**

**Response Type**

**Description**

_For display purposes, strings in the first three columns are broken into multiple lines and should be read as continuous. For example, the first string in column two should be interpreted as: **.DeleteAllMountPointsRequest**_

deleteAllICTFixtures

[.DeleteAllICTFixtures Request](ch01s05.xhtml#sherlock_ug_DeleteAllICTFixturesRequest "DeleteAllICTFixturesRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Delete all ICT fixtures in specific cca of specific project.

deleteAllMount Points

[.DeleteAllMount PointsRequest](ch01s05.xhtml#sherlock_ug_DeleteAllMountPointsRequest "DeleteAllMountPointsRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Request to delete all mount points in a specific CCA of a specific project.

deleteAllTestPoints

[.DeleteAllTestPoints Request](ch01s05.xhtml#sherlock_ug_DeleteAllTestPointsRequest "DeleteAllTestPointsRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Delete all test points in specific cca of specific project.

exportAllMount Points

[.ExportAllMount PointsRequest](ch01s05.xhtml#sherlock_ug_ExportAllMountPointsRequest "ExportAllMountPointsRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Request to export all mount points and their properties into a .csv formatted file.

exportAllICT Fixtures

[.ExportAllICTFixtures Request](ch01s05.xhtml#sherlock_ug_ExportAllICTFixturesRequest "ExportAllICTFixturesRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Export all ICT fixtures andtheir properties into a CSVformatted file.

exportAllTestPoints

[.ExportAllTest PointsRequest](ch01s05.xhtml#sherlock_ug_ExportAllTestPointsRequest "ExportAllTestPointsRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Export all test points and their properties into a CSV formatted file.

getMountPoint Boundaries

[.GetMountPoint BoundariesRequest](ch01s05.xhtml#sherlock_ug_GetMountPointBoundariesRequest "GetMountPointBoundariesRequest")

[.GetMountPoint Boundaries Response](ch01s05.xhtml#sherlock_ug_GetMountPointBoundariesResponse "GetMountPointBoundariesResponse")

Get a list of valid Mount Point Boundaries.

getMountPoint ChassisMaterials

[.GetMountPoint ChassisMaterials Request](ch01s05.xhtml#sherlock_ug_GetMountPointBoundariesRequest "GetMountPointBoundariesRequest")

[.GetMountPoint ChassisMaterials Response](ch01s05.xhtml#sherlock_ug_GetMountPointChassisMaterialsResponse "GetMountPointChassisMaterialsResponse")

Get a list of valid Mount Point chassis materials.

getMountPoints Properties

[.GetMountPoints PropertiesRequest](ch01s05.xhtml#sherlock_ug_GetMountPointsPropertiesRequest "GetMountPointsPropertiesRequest")

[.GetMountPoints PropertiesResponse](ch01s05.xhtml#sherlock_ug_GetMountPointsPropertiesResponse "GetMountPointsPropertiesResponse")

Get a list of valid Mount Point Properties.

getMountPoint ShapeTypes

[.GetMountPoint ShapeTypesRequest](ch01s05.xhtml#sherlock_ug_GetMountPointShapeTypesRequest "GetMountPointShapeTypesRequest")

[.GetMountPoint ShapeTypes Response](ch01s05.xhtml#sherlock_ug_GetMountPointShapeTypesResponse "GetMountPointShapeTypesResponse")

Get a list of valid Mount Point Shape Type values.

getMountPoint Sides

[.GetMountPoint SidesRequest](ch01s05.xhtml#sherlock_ug_GetMountPointSidesRequest "GetMountPointSidesRequest")

[.GetMountPoint SidesResponse](ch01s05.xhtml#sherlock_ug_GetMountPointSidesResponse "GetMountPointSidesResponse")

Get a list of valid Mount Point Sides.

getMountPoint Types

[.GetMountPoint TypesRequest](ch01s05.xhtml#sherlock_ug_GetMountPointShapeTypesRequest "GetMountPointShapeTypesRequest")

[.GetMountPoint TypesResponse](ch01s05.xhtml#sherlock_ug_GetMountPointTypesResponse "GetMountPointTypesResponse")

Get a list of valid Mount Point Type values.

getMount PointUnits

[.GetMountPoint UnitsRequest](ch01s05.xhtml#sherlock_ug_GetMountPointUnitsRequest "GetMountPointUnitsRequest")

[.GetMountPoint UnitsResponse](ch01s05.xhtml#sherlock_ug_GetMountPointUnitsResponse "GetMountPointUnitsResponse")

Get a list of valid Mount Point Units.

updateICTFixtures ByFile

[.UpdateICTFixtures ByFileRequest](ch01s05.xhtml#sherlock_ug_UpdateICTFixturesByFileRequest "UpdateICTFixturesByFileRequest")

[.UpdateICT FixturesResponse](ch01s05.xhtml#sherlock_ug_UpdateICTFixturesResponse "UpdateICTFixturesResponse")

See note below.

**updateICTFixturesByFile**: Update the ICT fixtures properties of a CCA from a CSV formatted file. This API could be used to add new ICT fixtures or update existing ones depending on the file contents. If the ID specified already exists, then the properties for that ICT fixture will be updated. If the ID specified does not already exist, or if the field is empty, then a new ICT fixture will be added with the specified properties. The file format should be the same as the one produced from CCA > Export ICT Fixtures.

updateMountPoints

[.UpdateMount PointsRequest](ch01s05.xhtml#sherlock_ug_UpdateMountPointsRequest "UpdateMountPointsRequest")

[.UpdateMount PointsResponse](ch01s05.xhtml#sherlock_ug_UpdateMountPointsResponse "UpdateMountPointsResponse")

Update mount points with specified properties

updateMount PointsByFile

[.UpdateMountPoints ByFileRequest](ch01s05.xhtml#sherlock_ug_UpdateMountPointsByFileRequest "UpdateMountPointsByFileRequest")

[.UpdateMount PointsResponse](ch01s05.xhtml#sherlock_ug_UpdateMountPointsResponse "UpdateMountPointsResponse")

See note below.

**updateMountPointsByFile**: Update the mount points properties of a CCA from a CSV formatted file. This API could be used to add new mount points or update existing ones depending on the file contents. If the ID specified already exists, then the properties for that mount point will be updated. If the ID specified does not already exist, or if the field is empty, then a new mount point will be added with the specified properties. The file format should be the same as the one produced from CCA > ExportMountPoints.

updateTest PointsByFile

[.UpdateTest PointsByFileRequest](ch01s05.xhtml#sherlock_ug_UpdateTestPointsByFileRequest "UpdateTestPointsByFileRequest")

[.UpdateTest PointsResponse](ch01s05.xhtml#sherlock_ug_UpdateTestPointsResponse "UpdateTestPointsResponse")

See note below.

**updateTestPointsByFile**: Update the test points properties of a CCA from a CSV formatted file. This API could be used to add new test points or update existing ones depending on the file contents. If the ID specified already exists, then the properties for that test point will be updated. If the ID specified does not already exist, or if the field is empty, then a new test point will be added with the specified properties. The file format should be the same as the one produced from CCA > ExportTestPoints.

  

### Delete All ICT Fixtures

#### DeleteAllICTFixturesRequest

Request to delete all ICT Fixtures in a specific CCA of a specific project.

**Table 1.35. DeleteAllICTFixturesRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA Name

  

#### Examples: SherlockLayerService.deleteAllITestPoints()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board"
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.DeleteAllICTFixturesRequest()

message.project = "Tutorial Project"
message.ccaName = "Main Board"

response = stub.deleteAllICTFixtures(message)

print(str(response))

### Delete All Mount Points

#### DeleteAllMountPointsRequest

Request to delete all mount points in a specific CCA of a specific project.

**Table 1.36. DeleteAllMountPointsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA Name

  

#### Examples: SherlockLayerService.deleteAllMountPoints()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.DeleteAllMountPointsRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"

response = stub.deleteAllMountPoints(message)

print(str(response))

### Delete All Test Points

#### DeleteAllTestPointsRequest

Request to delete all test points in specific CCA of specific project.

**Table 1.37. DeleteAllTestPointsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA Name

  

#### Examples: SherlockLayerService.deleteAllITestPoints()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board"
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.DeleteAllTestPointsRequest()

message.project = "Tutorial Project"
message.ccaName = "Main Board"

response = stub.deleteAllTestPoints(message)

print(str(response))

### Export All ICT Fixtures

#### ExportAllICTFixturesRequest

Request to export all ICT fixtures and their properties into a CSV formatted file

**Table 1.38. ExportAllICTFixturesRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA Name

units

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Units used in exporting

filePath

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The filepath of the .csv file to be exported

  

#### Examples: SherlockLayerService.exportAllICTFixtures()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "units": "mm",
  "filePath": "C:\\\\Temp\\\\ICTFixtures.csv"
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc
import os

ANSYS\_ROOT = os.getenv('ANSYS\_ROOT')

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.ExportAllICTFixturesRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.units = "mm"
message.filePath = os.getcwd() + "ICTFixtures.csv"

response = stub.exportAllICTFixtures(message)

print(str(response))

### Export All Mount Points

In this section:

#### ExportAllMountPointsRequest

Request to export all mount points and their properties into a .csv formatted file.

**Table 1.39. ExportAllMountPointsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA Name

units

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Units used in exporting

filePath

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The filepath of the .csv file to be exported

  

#### Examples: SherlockLayerService.exportAllMountPoints()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board,
  "units": "mm",
  "filePath": "C:\\\\Temp\\\\export.csv"
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.ExportAllMountPointsRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.units = "mm"
message.filePath = os.getcwd() + "\\\\export.csv"

response = stub.exportAllMountPoints(message)
print(str(response))

### Export All Test Points

#### ExportAllTestPointsRequest

Request to export all test points and their properties into a CSV formatted file

**Table 1.40. ExportAllTestPointsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The cca Name

lengthUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Length Units used in exporting

displacementUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Displacement Units used in exporting

forceUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Force Units used in exporting

filePath

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The filepath of the CSV file to be exported

  

#### Examples: SherlockLayerService.exportAllTestPoints()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "lengthUnits": "mm",
  "displacementUnits": "mm",
  "forceUnits": "n",
  "filePath": "C:\\\\Temp\\\\TestPointsExport.csv"
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.ExportAllTestPointsRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.lengthUnits = "mm"
message.displacementUnits = "mm"
message.forceUnits = "n"
message.filePath = os.getcwd() + "\\\\TestPointsExport.csv"

response = stub.exportAllTestPoints(message)

print(str(response))

### Get Mount Point Boundaries

In this section:

#### GetMountPointBoundariesRequest

Empty request to list the valid mount point boundaries.

#### GetMountPointBoundariesResponse

Represents a list of valid mount point boundaries.

**Table 1.41. RunAnalysisRequest**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

 

Status code of response.

boundary

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Mount Point boundary.

  

#### Examples: Get Mount Point Boundaries

##### Proto Request Example

{
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.GetMountPointBoundariesRequest()

response = stub.getMountPointBoundaries(message)

print(str(response))

### Get Mount Point Chassis Materials

In this section:

#### GetMountPointChassisMaterialsRequest

Empty request to list the valid mount point chassis materials.

#### GetMountPointChassisMaterialsResponse

Represents a list of valid mount point chassis materials.

**Table 1.42. GetMountPointChassisMaterialsResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

 

Status code of response.

chassisMaterial

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Mount Point chassis material.

  

#### Examples: Get Mount Point Chassis Materials

##### Proto Request Example

{
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.GetMountPointChassisMaterialsRequest()

response = stub.getMountPointChassisMaterials(message)

print(str(response))

### Get Mount Point Shape Types

In this section:

#### GetMountPointShapeTypesRequest

Empty request to list the valid mount point shape types.

**Table 1.43. GetMountPointShapeTypesRequest**

**Field**

**Type**

**Label**

**Description**

mountPointType

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Mount Point Type. Supported values are: Mount Hole, Mount Pad, Standoff, and Support Pin.

  

#### GetMountPointShapeTypesResponse

Represents a list of valid mount point shape types.

**Table 1.44. GetMountPointShapeTypesResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

 

Status code of response.

type

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Mount Point Shape Type.

  

#### Examples: Get Mount Point Shape Types

##### Proto Request Example

{
  "mountPointType": "Mount Hole"
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.GetMountPointShapeTypesRequest()

message.mountPointType = input("Specify the mount point type (Mount Hole, Mount Pad, Standoff, Support Pin): \\n")

response = stub.getMountPointShapeTypes(message)

print(str(response))

### Get Mount Point Sides

In this section:

#### GetMountPointSidesRequest

Empty request to list the valid mount point sides.

#### GetMountPointSidesResponse

Represents a list of valid mount point sides.

**Table 1.45. GetMountPointSidesResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

 

Status code of response.

side

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Mount Point side.

  

#### Examples: Get Mount Point Sides

##### Proto Request Example

{
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.GetMountPointSidesRequest()

response = stub.getMountPointSides(message)

print(str(response))

### Get Mount Point Types

In this section:

#### GetMountPointTypesRequest

Empty request to list the valid mount point types.

#### GetMountPointTypesResponse

Represents a list of valid mount point types.

**Table 1.46. GetMountPointTypesResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

 

Status code of response.

type

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Mount Point Type.

  

#### Examples: Get Mount Point Types

##### Proto Request Example

{
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.GetMountPointTypesRequest()

response = stub.getMountPointTypes(message)

print(str(response))

### Get Mount Point Units

In this section:

#### GetMountPointUnitsRequest

Empty request to list the valid mount point units.

#### GetMountPointUnitsResponse

Represents a list of valid mount point units.

**Table 1.47. GetMountPointUnitsResponse**

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

Mount Point units.

  

#### Examples: Get Mount Point Units

##### Proto Request Example

{
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.GetMountPointUnitsRequest()

response = stub.getMountPointUnits(message)

print(str(response))

### Get Mount Points Properties

In this section:

#### GetMountPointsPropertiesRequest

Empty request to list the valid mount point chassis materials.

**Table 1.48. GetMountPointsPropertiesRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA name.

mountPointIDs

[string](ch01s11.xhtml "gRPC Scalar Value Types")

A comma separated list of mount point ID's for a list of mount points or a mount ID for one part.

  

#### GetMountPointsPropertiesResponse

Represents a list of valid mount point properties.

**Table 1.49. GetMountPointsPropertiesResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

mountPointsProperties

[MountPointProperties](ch01s05.xhtml#sherlock_ug_MountPointProperties "Mount Point Properties")

repeated

Mount Point properties.

  

#### Mount Point Properties

Properties of mount point. The properties may vary with the mount point type and mount point shape.

**Table 1.50. MountPointProperties**

**Field**

**Type**

**Label**

**Description**

ID

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Mount Point ID

type

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Mount Point Type

shape

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Shape Type

units

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Mount Point Units

x

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Center X

y

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Center Y

length

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Length

width

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Width

diameter

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Diameter

nodes

[string](ch01s11.xhtml "gRPC Scalar Value Types")

\# of Nodes

rotation

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Rotation (degrees)

side

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Mount Point Side

height

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Mount Point Height

material

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Mount Point Material

boundary

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Boundary Pt(s)

constraints

[string](ch01s11.xhtml "gRPC Scalar Value Types")

FEA Constraints

polygon

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Coordinates of Points

state

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Mount Point State

chassisMaterial

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Chassis Material

  

#### Examples: SherlockLayerService.getMountPointsProperties()

##### Proto Request

{
  "project": "Tutorial Project",
  "ccaName": "Main Board,
  "mountPointIDs": "MP1, MP2, MP3, MP4"
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.GetMountPointsPropertiesRequest()

message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.mountPointIDs = "MP1, MP2, MP3, MP4"

response = stub.getMountPointsProperties(message)

print(str(response))

### Update ICT Fixtures By File

In this section:

#### UpdateICTFixturesByFileRequest

Request to update ICT fixtures properties of a CCA from a CSV formatted file

**Table 1.51. UpdateICTFixturesByFileRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA Name

filePath

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The filepath of the CSV file containing the ICT fixtures properties

  

#### UpdateICTFixturesResponse

Contains the status of the update as well as all the update error messages.

**Table 1.52. UpdateICTFixturesResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

updateError

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

ICT fixtures update error messages.

  

#### Examples: SherlockLayerService.updateICTFixturesByFile()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "filePath": "C:\\\\PartsDir\\\\AM\\\\Sherlock\\\\ICTFixtures.csv"
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.UpdateICTFixturesByFileRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.filePath = os.getenv("PARTSDIR") + "\\\\AM\\\\Sherlock\\\\ICTFixtures.csv"
response = stub.updateICTFixturesByFile(message)

print(str(response))

### Update Mount Points

#### UpdateMountPointsRequest

Request to update mount points properties of a CCA from a CSV formatted file

**Table 1.53. UpdateMountPointsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA Name

mountPointsProperties

[MountPointProperties](ch01s05.xhtml#sherlock_ug_MountPointProperties "Mount Point Properties")

repeated

Mount Point properties

  

#### UpdateMountPointsResponse

Contains the status of the update as well as all the update error messages.

**Table 1.54. UpdateMountPointsResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

updateError

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Mount Points update error messages.

  

#### Examples: SherlockLayerService.updateMountPoints()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "mountPointsProperties": \[
    {
      "ID": "MP1",
      "type": "Mount Hole",
      "shape": "Circular",
      "units": "mm",
      "x": "0",
      "y": "0",
      "length": "3.56",
      "width": "3.56",
      "diameter": "3.56",
      "nodes": "8",
      "rotation": "0",
      "side": "TOP",
      "height": "0",
      "material": "DEFAULT",
      "boundary": "Outline",
      "constraints": "X-axis translation|Y-axis translation|Z-axis translation",
      "polygon": "",
      "state": "Enabled",
      "chassisMaterial": "ALUMINUM"
    }
  \]
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.UpdateMountPointsRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
mp1  = SherlockLayerService\_pb2.MountPointProperties()
mp2  = SherlockLayerService\_pb2.MountPointProperties()
mp3  = SherlockLayerService\_pb2.MountPointProperties()
mp4  = SherlockLayerService\_pb2.MountPointProperties()
mp1.ID = "MP1"
mp1.type = "Mount Hole"
mp1.shape = "Circular"
mp1.units = "mm"
mp1.x = "0"
mp1.y = "0"
mp1.length = "3.56"
mp1.width = "3.56"
mp1.diameter = "3.56"
mp1.nodes = "8"
mp1.rotation = "0"
mp1.side = "TOP"
mp1.height = "0"
mp1.material = "DEFAULT"
mp1.boundary = "Outline"
mp1.constraints = "X-axis translation|Y-axis translation|Z-axis translation"
mp1.polygon = ""
mp1.state = "Enabled"
mp1.chassisMaterial = "ALUMINUM"

message.mountPointsProperties.extend(\[mp1\])

response = stub.updateMountPoints(message)

print(str(response))

### Update Mount Points By File

In this section:

#### UpdateMountPointsByFileRequest

Request to update mount points properties of a CCA from a .csv formatted file.

**Table 1.55. UpdateMountPointsByFileRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA Name

filePath

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The filepath of the .csv file containing the mount points properties

  

#### Examples: SherlockLayerService.updateMountPointsByFile()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "filePath": "C:\\\\PartsDir\\\\AM\\\\Sherlock\\\\updateMountPoints.csv"
}

##### Python Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.UpdateMountPointsByFileRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.filePath = os.getenv("PARTSDIR") + "\\\\AM\\\\Sherlock\\\\updateMountPoints.csv"

response = stub.updateMountPointsByFile(message)

print(str(response))

### Update Test Points By File

In this section:

#### UpdateTestPointsByFileRequest

Request to update test points properties of a CCA from a CSV formatted file

**Table 1.56. UpdateMountPointsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA Name

filePath

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The filepath of the CSV file containing the test points properties

  

#### UpdateTestPointsResponse

Contains the status of the update as well as all the update error messages.

**Table 1.57. UpdateTestPointsResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

updateError

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Test Points update error messages.

  

#### Examples: SherlockLayerService.updateTestPointsByFile()

##### Python Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "filePath": "C:\\\\Temp\\\\TestPoints.csv"
}

##### Proto Request Example

import SherlockLayerService\_pb2
import SherlockLayerService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockLayerService\_pb2\_grpc.SherlockLayerServiceStub(channel)

message = SherlockLayerService\_pb2.UpdateTestPointsByFileRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.filePath = os.getcwd() + "\\\\TestPoints.csv"

response = stub.updateTestPointsByFile(message)

print(str(response))

* * *

[Prev](ch01s04.xhtml) 

 

 [Next](ch01s06.xhtml)

Sherlock Common Service- SherlockCommonService.proto 

[Home](index.xhtml)

 Sherlock Life Cycle Service- SherlockLifeCycleService.proto