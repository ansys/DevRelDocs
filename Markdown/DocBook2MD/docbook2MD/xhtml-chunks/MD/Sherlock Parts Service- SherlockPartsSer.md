Sherlock Parts Service- SherlockPartsService.proto

Sherlock Parts Service- SherlockPartsService.proto

[Prev](ch01s07.xhtml) 

 

 [Next](ch01s09.xhtml)

* * *

Sherlock Parts Service- SherlockPartsService.proto
--------------------------------------------------

[Click here to return to the main index to Sherlock's APIs.](ch01s02.xhtml "Index to the Sherlock APIs")

In this section you will find APIs that allow you to import and export parts lists, see the user-configured part libraries, to see a list of parts with properties different than those in the Sherlock Part Library, and to update the Parts List for a given project. Clicking on the active links in the table below will take you to the selected API.

**Table 1.152. Index to Sherlock Parts Service APIs**

**Method Name**

**Request Type**

**Response Type**

**Description**

_For display purposes, strings in the first three columns are broken into multiple lines and should be read as continuous. For example, the first string in column two should be interpreted as: **.ListPartsLibrariesRequest**_

exportPartsList

[.ExportParts ListRequest](ch01s08.xhtml#sherlock_ug_updateleadmodelingrequest "UpdateLeadModelingRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Export parts list for all parts given a project's CCA.

getBoardSides

[.GetBoard SidesRequest](ch01s08.xhtml#sherlock_ug_GetBoardSidesRequest "Examples: Get Board Sides")

[.GetBoard SidesResponse](ch01s08.xhtml#sherlock_ug_GetBoardSidesResponse "GetBoardSidesResponse")

Get a list of valid board side values.

importPartsList

[.ImportParts ListRequest](ch01s08.xhtml#sherlock_ug_importpartslistrequest "ImportPartsListRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Import a parts list for a given a project's CCA.

getPart Location

[.GetPart LocationRequest](ch01s08.xhtml#sherlock_ug_GetPartLocationResponse "GetPartLocationResponse")

[.GetPart LocationResponse](ch01s08.xhtml#sherlock_ug_GetPartLocationResponse "GetPartLocationResponse")

Get the location properties for a part.

getPart LocationUnits

[GetPartLocation UnitsRequest](ch01s08.xhtml#sherlock_ug_GetPartLocationUnitsRequest "GetPartLocationUnitsRequest")

[.GetPartLocation UnitsResponse](ch01s08.xhtml#sherlock_ug_GetPartLocationUnitsResponse "GetPartLocationUnitsResponse")

Get a list of valid part location units.

listParts Libraries

[.ListParts LibrariesRequest](ch01s08.xhtml#sherlock_ug_ListPartsLibrariesRequest "ListPartsLibrariesRequest")

[.ListParts LibrariesResponse](ch01s08.xhtml#sherlock_ug_GetBoardSidesRequest "Examples: Get Board Sides")

List the available parts libraries.

listParts NotUpdated

[.ListPartsNot UpdatedRequest](ch01s08.xhtml#sherlock_ug_ListPartsNotUpdatedRequest "ListPartsNotUpdatedRequest")

[.ListPartsNot UpdatedResponse](ch01s08.xhtml#sherlock_ug_ListPartsNotUpdatedResponse "ListPartsNotUpdatedResponse")

List the parts that have not been updated from the Sherlock Part Library.

update PartsList

[.Update PartsListRequest](ch01s08.xhtml#sherlock_ug_UpdatePartsListRequest "UpdatePartsListRequest")

[.UpdateParts ListResponse](ch01s08.xhtml#sherlock_ug_UpdatePartsListResponse "UpdatePartsListResponse")

Update the parts list for a project's CCA.

updateParts Locations

[.UpdateParts LocationsRequest](ch01s08.xhtml#sherlock_ug_UpdatePartsLocationsRequest "UpdatePartsLocationsRequest")

[.UpdateParts LocationsResponse](ch01s08.xhtml#sherlock_ug_UpdatePartsLocationsResponse "UpdatePartsLocationsResponse")

Upate one or more parts' locations using a .csv file.

updateParts LocationsByFile

[.UpdatePartsLocations ByFileRequest](ch01s08.xhtml#sherlock_ug_UpdatePartsLocationsByFileResponse "UpdatePartsLocationsByFileResponse")

[.UpdatePartsLocations ByFileResponse](ch01s08.xhtml#sherlock_ug_UpdatePartsLocationsByFileResponse "UpdatePartsLocationsByFileResponse")

Update one or more parts' locations using a CSV file.

update LeadModeling

[.UpdateLead ModelingRequest](ch01s08.xhtml#sherlock_ug_updateleadmodelingrequest "UpdateLeadModelingRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Enable lead modeling for all non LEADLESS parts leads in a project's CCA.

  

### Export/Import Parts List

In this section:

#### ExportPartsListRequest

Request to export the parts list for all parts for a project CCA.

**Table 1.153. ExportPartsListRequest**

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

exportFile

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Full file path to the export parts list .csv file.

  

#### Examples: Export Parts List

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "exportFile": "C:\\\\temp\\\\test.csv"
}

##### Python Example

import SherlockPartsService\_pb2
import SherlockPartsService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockPartsService\_pb2\_grpc.SherlockPartsServiceStub(channel)

message = SherlockPartsService\_pb2.ExportPartsListRequest()

message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.exportFile = os.getcwd() + "\\\\test.csv"

response = stub.exportPartsList(message)

print(str(response))

### Import Parts List

In this section:

#### ImportPartsListRequest

Request to import a parts list for a project CCA.

**Table 1.154. ImportPartsListRequest**

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

importFile

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Full file path to the parts list .csv file.

importAsUserSrc

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

If true, set the data source of the properties to "User". Otherwise, set the data source tot he name of the importFile.

  

#### Examples: SherlockPartsService.importPartsList()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "importFile": "C:\\\\Temp\\\\test.csv",
  "importAsUserSrc": true
}

##### Python Example

import SherlockPartsService\_pb2
import SherlockPartsService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockPartsService\_pb2\_grpc.SherlockPartsServiceStub(channel)

message = SherlockPartsService\_pb2.ImportPartsListRequest()

message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.importFile = os.getcwd() + "\\\\test.csv"
message.importAsUserSrc = True

response = stub.importPartsList(message)

print(str(response))

### Get Boards Sides

In this section:

#### GetBoardSidesRequest

Empty request to list valid board sides.

#### GetBoardSidesResponse

Represents a list of valid board sides.

**Table 1.155. GetBoardSidesResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

boardSides

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Board sides

  

#### Examples: Get Board Sides

##### Proto Request Example

{
}

##### Python Example

import SherlockPartsService\_pb2
import SherlockPartsService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockPartsService\_pb2\_grpc.SherlockPartsServiceStub(channel)

message = SherlockPartsService\_pb2.GetBoardSidesRequest()

response = stub.getBoardSides(message)

print(str(response))

### Get Part Location

In this section:

#### GetPartLocationRequest

Request to get a part's location.

**Table 1.156. GetPartLocationRequest**

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

refDes

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Ref Des of the part.

locationUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Unit of length for the part location. Supported values are IN, MM, M, MIL, MICRON, and NM.

  

#### GetPartLocationResponse

Represents one or multiple parts' location properties

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

 

Status code of response.

locationData

[GetPartLocationResponse.LocationData](ch01s08.xhtml#sherlock_ug_GetPartLocationResponse.LocationData "GetPartLocationResponse.LocationData")

repeated

 

#### GetPartLocationResponse.LocationData

**Table 1.157. GetPartLocationResponse.LocationData**

**Field**

**Type**

**Label**

**Description**

x

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Location of the part along the X axis.

y

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Location of the part along the Y axis.

rotation

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Orientation of the part on the board in degrees.

locationUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Unit of length for the part location.

boardSide

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Side of board on which the component exists.

mirrored

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

Indicates if the component is mirrored across the Y-axis.

refDes

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

RefDes for the corresponding part.

  

#### Examples: Get Part Location

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "refDes": "C1",
  "locationUnits": "in"
}

##### Python Example

import SherlockPartsService\_pb2
import SherlockPartsService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockPartsService\_pb2\_grpc.SherlockPartsServiceStub(channel)

message = SherlockPartsService\_pb2.GetPartLocationRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.refDes = "C1"
message.locationUnits = "in"

response = stub.getPartLocation(message)

print(str(response))

### Get Part Location Units

In this section:

#### GetPartLocationUnitsRequest

Empty request to list valid location units.

#### GetPartLocationUnitsResponse

Represents a list of valid location units.

**Table 1.158. GetPartLocationUnitsResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

units

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Location units

  

#### Examples: Get Part Location Units

##### Proto Request Example

{
}

##### Python Example

import SherlockPartsService\_pb2
import SherlockPartsService\_pb2\_grpc
import grpc
import os

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockPartsService\_pb2\_grpc.SherlockPartsServiceStub(channel)

message = SherlockPartsService\_pb2.GetPartLocationUnitsRequest()

response = stub.getPartLocationUnits(message)

print(str(response))

### List Parts Libraries

In this section:

#### ListPartsLibrariesRequest

Empty request to list the available parts libraries.

#### ListPartsLibrariesResponse

Represents a list of available parts libraries.

**Table 1.159. ListPartsLibrariesResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

partLibrary

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Parts library name.

  

#### Examples: List Parts Libraries

##### Proto Request Example

{ }

##### Python Example

import SherlockPartsService\_pb2
import SherlockPartsService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockPartsService\_pb2\_grpc.SherlockPartsServiceStub(channel)

message = SherlockPartsService\_pb2.ListPartsLibrariesRequest()

response = stub.listPartsLibraries(message)

print(str(response))

### List Parts Not Updated

In this section:

#### ListPartsNotUpdatedRequest

Request to get a list of parts not updated from the Sherlock Part Library.

**Table 1.160. ListPartsNotUpdatedRequest**

**Field**

**Type**

**Label**

**Description**

projectDir

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The full path to the Sherlock project directory.

  

#### ListPartsNotUpdatedResponse

Represents a list of parts not updated from the Sherlock Part Library.

**Table 1.161. ListPartsNotUpdatedResponse**

**Field**

**Type**

**Label**

**Description**

_For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as: **ListPartsNotUpdatedResponse.CCA**_

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

ccas

[ListPartsNotUpdated Response.CCA](ch01s08.xhtml#sherlock_ug_ListPartsNotUpdatedResponse.CCA "ListPartsNotUpdatedResponse.CCA")

repeated

  

#### ListPartsNotUpdatedResponse.CCA

**Table 1.162. ListPartsNotUpdatedResponse.CCA**

**Field**

**Type**

**Label**

**Description**

_For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as: **ListPartsNotUpdatedResponse.CCA.Part**_

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the CCA.

parts

[ListPartsNotUpdated Response.CCA.Part](ch01s08.xhtml#sherlock_ug_ListPartsNotUpdatedResponse.CCA.Part "ListPartsNotUpdatedResponse.CCA.Part")

repeated

  

#### ListPartsNotUpdatedResponse.CCA.Part

**Table 1.163. ListPartsNotUpdatedResponse.CCA.Part**

**Field**

**Type**

**Label**

**Description**

refDes

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Reference Designator for the part.

partNumber

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Part number.

  

#### Examples: List Parts Not Updated

##### Proto Request Example

{
  "project": "Tutorial Project"
}

##### Python Example

import SherlockPartsService\_pb2
import SherlockPartsService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockPartsService\_pb2\_grpc.SherlockPartsServiceStub(channel)

message = SherlockPartsService\_pb2.ListPartsNotUpdatedRequest()

message.project = "Tutorial Project"

response = stub.listPartsNotUpdated(message)

print(str(response))

### Update Lead Modeling

Request to enable lead modeling for all non LEADLESS parts leads.

In this section:

#### UpdateLeadModelingRequest

**Table 1.164. UpdateLeadModelingRequest**

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

  

#### Examples: Update Lead Modeling

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board"
}

##### Python Example

import SherlockPartsService\_pb2
import SherlockPartsService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockPartsService\_pb2\_grpc.SherlockPartsServiceStub(channel)

message = SherlockPartsService\_pb2.UpdateLeadModelingRequest()

message.project = "Tutorial Project"
message.ccaName = "Main Board"

response = stub.updateLeadModeling(message)

print(str(response))

### Update Parts List

In this section:

#### UpdatePartsListRequest

Request to update a parts list based on matching and duplication preference provided.

**Table 1.165. UpdatePartsListRequest**

**Field**

**Type**

**Label**

**Description**

_For display purposes, some strings in the second column are broken into multiple lines and should be read as continuous. For example, the last string should be interpreted as: **UpdatePartsList Request.DuplicationMode**_

projectDir

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The full path to the Sherlock project directory.

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA name.

partLibrary

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Parts library name.

matching

[UpdatePartsList Request.MatchingMode](ch01s08.xhtml#sherlock_ug_UpdatePartsListRequest.MatchingMode "UpdatePartsListRequest.MatchingMode")

Designates the matching mode for updates.

duplication

[UpdatePartsList Request.DuplicationMode](ch01s08.xhtml#sherlock_ug_UpdatePartsListRequest.DuplicationMode "UpdatePartsListRequest.DuplicationMode")

Designates how to handle duplications during update.

  

#### UpdatePartsListRequest.DuplicationMode

**Table 1.166. UpdatePartsListRequest.DuplicationMode**

**Name**

**Number**

**Description**

First

0

Uses first matched when there is duplication.

Error

1

Generates an error when there is duplication.

Ignore

2

Ignore the matches when there is duplication.

  

#### UpdatePartsListRequest.MatchingMode

**Table 1.167. UpdatePartsListRequest.MatchingMode**

**Name**

**Number**

**Description**

Both

0

Matches both part number and manufacturer.

Part

1

Matches part number only.

  

#### UpdatePartsListResponse

Contains the status of the update as well as all the update error messages.

**Table 1.168. UpdatePartsListResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

updateError

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Parts update error messages.

  

#### Examples: Update Parts List

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "partLibrary": "Local Part Library",
  "matching": 0,
  "duplication": 1
}

##### Python Example

import SherlockPartsService\_pb2
import SherlockPartsService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockPartsService\_pb2\_grpc.SherlockPartsServiceStub(channel)

message = SherlockPartsService\_pb2.UpdatePartsListRequest()

message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.partLibrary = "Local Part Library"
message.matching = 0
message.duplication = 1

response = stub.updatePartsList(message)

print(str(response))

### Update Parts Locations by File Request

#### UpdatePartsLocationsByFileRequest

Request to update one or more parts' locations using a CSV file.

**Table 1.169. UpdatePartsLocationsByFileRequest**

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

numericFormat

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Numeric format for the file. If not provided, it will default to "English (United States)".

filePath

[string](ch01s11.xhtml "gRPC Scalar Value Types")

File that contains the components and location properties.

  

#### UpdatePartsLocationsByFileResponse

Contains the status of the parts locations update as well as all the update error messages.

**Table 1.170. UpdatePartsLocationsByFileResponse**

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

Parts locations update error messages.

  

#### Examples: SherlockPartsService.updatePartsLocationsByFile()

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "numericFormat": "",
  "filePath": "C:\\\\Dir\\\\AM\\\\SHERLOCK\\\\Tutorial\\\\updatePartsLocations.csv"
}

##### Python Example

import SherlockPartsService\_pb2
import SherlockPartsService\_pb2\_grpc
import grpc
import os

ANSYS\_ROOT = os.getenv('ANSYS\_ROOT')

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockPartsService\_pb2\_grpc.SherlockPartsServiceStub(channel)

message = SherlockPartsService\_pb2.UpdatePartsLocationsByFileRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.numericFormat = ""
message.filePath = os.getenv("PARTSDIR") + "\\\\AM\\\\SHERLOCK\\\\Tutorial\\\\updatePartsLocations.csv"

response = stub.updatePartsLocationsByFile(message)

print(str(response))

### UpdatePartsLocationsRequest

#### UpdatePartsLocationsRequest

Request to set a part's location.

**Table 1.171. UpdatePartsLocationsRequest**

**Field**

**Type**

**Label**

**Description**

_For display purposes, some strings in the second column are broken into multiple lines and should be read as continuous. For example, the last string should be interpreted as: **UpdatePartsLocationsRequest.PartLocation**_

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sherlock project name.

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

The CCA name.

partLoc

[UpdatePartsLocations Request.PartLocation](ch01s08.xhtml#sherlock_ug_UpdatePartsLocationsRequest.PartLocation "UpdatePartsLocationsRequest.PartLocation")

repeated 

  

#### UpdatePartsLocationsRequest.PartLocation

**Table 1.172. UpdatePartsLocationsRequest.PartLocation**

**Field**

**Type**

**Label**

**Description**

refDes

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Ref Des of the part.

x

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Location of the part along the X axis.

y

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Location of the part along the Y axis.

rotation

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Orientation of the part on the board in degrees.

locationUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Unit of length for the part location. Supported values are IN, MM, M, MIL, MICRON, and NM.

boardSide

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Side of board on which the component exists. Supported values are TOP, BOT, and BOTTOM.

mirrored

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Indicates if the component is mirrored across the Y-axis. Supported values are Y, and N.

  

#### UpdatePartsLocationsResponse

Contains the status of the parts locations update as well as all the update error messages.

**Table 1.173. UpdatePartsLocationsResponse**

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

Parts locations update error messages.

  

* * *

[Prev](ch01s07.xhtml) 

 

 [Next](ch01s09.xhtml)

Sherlock Model Services- SherlockModelServices.proto 

[Home](index.xhtml)

 Sherlock Project Service- SherlockProjectService.proto