Sherlock Project Service- SherlockProjectService.proto

Sherlock Project Service- SherlockProjectService.proto

[Prev](ch01s08.xhtml) 

 

 [Next](ch01s10.xhtml)

* * *

Sherlock Project Service- SherlockProjectService.proto
------------------------------------------------------

[Click here to return to the main index to Sherlock's APIs.](ch01s02.xhtml "Index to the Sherlock APIs")

The APIs in this section perform project level functions such as generating reports and importing ECAD files. Clicking on the active links in the table below will take you to the selected API.

**Table 1.174. Index to Sherlock Project Service APIs**

**Method Name**

**Request Type**

**Response Type**

**Description**

_For display purposes, the long strings in columns two and three are broken into multiple lines. For example, the first string in column two should be interpreted as: **.GenReportRequest**_

genReport

[.GenReport Request](ch01s09.xhtml#sherlock_ug_GenReportRequest "GenReportRequest")

[.GenReport Response](ch01s09.xhtml#sherlock_ug_GenReportResponse "GenReportResponse") stream

Generates the project report and return it via streaming.

genCCAReport

[.GenCCAReportRequest](ch01s09.xhtml#sherlock_ug_GenCCAReportRequest "GenCCAReportRequest")

[.GenCCAReportResponse](ch01s09.xhtml#sherlock_ug_GenCCAReportResponse "GenCCAReportResponse") stream

Generates the project CCA report and return it via streaming.

importODBArchive

[.ImportODB Request](ch01s09.xhtml#sherlock_ug_import_ODB_Request "Import ODB")

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Imports an ODB++ archive.

importIPC2581 Archive

[.ImportIPC2581 Request](ch01s09.xhtml#sherlock_ug_import_IPC2581_Req "Import IPC2581")

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Imports an ODB++ archive.

deleteProject

[.DeleteProjectRequest](ch01s09.xhtml#sherlock_ug_DeleteProjectRequest "DeleteProjectRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Delete a project from Sherlock

addStrainMap

[.AddStrainMapRequest](ch01s09.xhtml#sherlock_ug_AddStrainMapRequest "AddStrainMapRequest")

[.AddStrainMapResponse](ch01s09.xhtml#sherlock_ug_AddStrainMapResponse "AddStrainMapResponse")

Add a strain map to a Sherlock project

listStrainMaps

[.ListStrainMapsRequest](ch01s09.xhtml#sherlock_ug_ListStrainMapsRequest "ListStrainMapsRequest")

[.ListStrainMapsResponse](ch01s09.xhtml#sherlock_ug_ListStrainMapsResponse "ListStrainMapsResponse")

Returns a list of circuit cards and their assigned strain maps for a given Sherlock project.

listCCAs

[.ListCCAsRequest](ch01s09.xhtml#sherlock_ug_ListCCAsRequest "ListCCAsRequest")

[.ListCCAsResponse](ch01s09.xhtml#sherlock_ug_ListCCAsResponse.CCA "ListCCAsResponse.CCA")

Returns a list of circuit cards, their properties, and sub-assemblies for a given Sherlock project.

  

### Add Strain Map

#### AddStrainMapRequest

Request to add a strain map CSV file

**Table 1.175. AddStrainMapRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sherlock project name.

strainMapFiles

[AddStrainMapRequest.StrainMapFile](ch01s09.xhtml#sherlock_ug_AddStrainMapRequest.StrainMapFile "AddStrainMapRequest.StrainMapFile")

repeated

Strain map files and associated properties to be added.

  

#### AddStrainMapRequest.StrainMapFile

**Table 1.176. AddStrainMapRequest.StrainMapFile**

**Field**

**Type**

**Label**

**Description**

strainMapFile

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Full path to the strain map file to be added.

fileComment

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

File comment text.

headerRowCount

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

 

Number of rows before the column header in the file.

referenceIDColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Reference ID column name.

strainColumn

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Strain column name.

strainUnits

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Strain units used in the strain map file. Valid units: µε, ε

cca

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Project CCA names to add the file to.

  

#### AddStrainMapResponse

Response from adding strain map CSV files

**Table 1.177. AddStrainMapResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

 

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of validation errors.

  

#### Example: Add Strain Map

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "strainMapFiles": \[
    {
      "strainMapFile": "C:\\\\ANSYSDev\\\\ANSYS Inc\\\\v232\\\\sherlock\\\\tutorial\\\\StrainMaps\\\\StrainMap.csv",
      "fileComment": "test comment",
      "headerRowCount": 0,
      "referenceIDColumn": "SolidID",
      "strainColumn": "PCB Strain",
      "strainUnits": "µε",
      "cca": \[
        "Main Board"
      \]
    }
  \]
}

##### Python Example:

import SherlockProjectService\_pb2
import SherlockProjectService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockProjectService\_pb2\_grpc.SherlockProjectServiceStub(channel)

message = SherlockProjectService\_pb2.AddStrainMapRequest()
message.project = 'Tutorial Project'
strainMapFile = SherlockProjectService\_pb2.AddStrainMapRequest().StrainMapFile()
strainMapFile.strainMapFile = 'C:\\\\ANSYSDev\\\\ANSYS Inc\\\\v232\\\\sherlock\\\\tutorial\\\\StrainMaps\\\\StrainMap.csv'
strainMapFile.fileComment = "test comment"
strainMapFile.headerRowCount = 0
strainMapFile.referenceIDColumn = "SolidID"
strainMapFile.strainColumn = "PCB Strain"
strainMapFile.strainUnits = "µe"
strainMapFile.cca.extend(\['Main Board'\])
message.strainMapFiles.extend(\[strainMapFile\])
response = stub.addStrainMap(message)
	
print(str(response))

### DeleteProjectRequest

Request for deleting project

**Table 1.178. DeleteProjectRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Project name of project to be deleted

  

### Generate CCA Report

In this section:

#### GenCCAReportRequest

Request a project CCA report.

**Table 1.179. GenCCAReportRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

cca

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Project CCA name.

author

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the author who generates the report.

company

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of author's company.

  

#### GenCCAReportResponse

Streams the project CCA report in chunks.

**Table 1.180. GenCCAReportResponse**

**Field**

**Type**

**Label**

**Description**

content

[bytes](ch01s11.xhtml "gRPC Scalar Value Types")

A chunk of the project CCA report being returned in increments.

size

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

Size of the chunk returned.

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

  

#### Example: Generate CCA Report

##### Proto Request Example

{
  "project": "Tutorial Project",
  "cca": "Main Board",
  "author": "Testing",
  "company": "Ansys"
}

##### Python Example

import SherlockProjectService\_pb2
import SherlockProjectService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockProjectService\_pb2\_grpc.SherlockProjectServiceStub(channel)

message = SherlockProjectService\_pb2.GenCCAReportRequest()
message.project = 'Tutorial Project'
message.cca = 'Main Board'
message.author = 'Testing'
message.company = 'Ansys'

# response = stub.genCCAReport(message)

for feature in stub.genCCAReport(message):
	print("CCA Report Generated")

### Request a Project Report

In this section:

#### GenReportRequest

Request a project report.

**Table 1.181. GenReportRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

author

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of the author who generates the report.

company

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of author's company.

  

#### GenReportResponse

Streams the project report in chunks.

**Table 1.182. GenReportResponse**

**Field**

**Type**

**Label**

**Description**

content

[bytes](ch01s11.xhtml "gRPC Scalar Value Types")

A chunk of the project report being returned in increments.

size

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

Size of the chunk returned.

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

  

#### Example: Generate Report

##### Proto Request Example

{
  "project": "Tutorial Project",
  "author": "Testing",
  "company": "Ansys"
}

##### Python Example

import SherlockProjectService\_pb2
import SherlockProjectService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockProjectService\_pb2\_grpc.SherlockProjectServiceStub(channel)

message = SherlockProjectService\_pb2.GenReportRequest()
message.project = 'Tutorial Project'
message.author = 'Testing'
message.company = 'Ansys'

# response = stub.genReport(message)

for feature in stub.genReport(message):
	print("Project Report Generated")

### Import IPC2581

In this section:

#### ImportIPC2581Request

Request for importing an IPC-2581 archive

**Table 1.183. ImportIPC2581Request**

**Field**

**Type**

**Label**

**Description**

archiveFile

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Full path to the IPC-2581 arhicve file to be imported.

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name. If empty, the filename will be used for the project name.

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Project CCA name. If empty, the filename will be used for the CCA name.

includeOtherLayers

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

Option to include other layers.

guessPartProperties

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

Option to guess part properties.

  

#### Examples: Import IPC 2581

##### Proto Request Example

{
  "archiveFile": "C:\\\\ANSYSDev\\\\SherlockUnitTestData\\\\IPC-2581\\\\IPC2581A-TestCase2.cvg",
  "project": "Test IPC-2581 API Import",
  "ccaName": "IPC-2581 API Import",
  "includeOtherLayers": false
}

##### Python Example

import SherlockProjectService\_pb2
import SherlockProjectService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockProjectService\_pb2\_grpc.SherlockProjectServiceStub(channel)

stub = SherlockProjectService\_pb2\_grpc.SherlockProjectServiceStub(channel)

message = SherlockProjectService\_pb2.ImportIPC2581Request()
message.archiveFile = 'C:\\\\ANSYSDev\\\\SherlockUnitTestData\\\\IPC-2581\\\\IPC2581A-TestCase2.cvg'
message.project = 'Test IPC-2581 API Import'
message.ccaName = 'IPC-2581 API Import'
message.includeOtherLayers = 0

returnCode = stub.importIPC2581Archive(message)

print(str(returnCode))

### Import ODB

In this section:

#### ImportODBRequest

Request for importing an ODB++ archive.

**Table 1.184. ImportODBRequest**

**Field**

**Type**

**Label**

**Description**

archiveFile

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Full path to the ODB++ archive file to be imported.

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name. If empty, the filename will be used for the project name.

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Project CCA name. If empty, the filename will be used for the CCA name.

processLayerThickness

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

Option to assign stackup thickness.

includeOtherLayers

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

Option to include other layers.

processCutoutFile

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

Option to process cutouts.

guessPartProperties

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

 

Option to guess part properties.

  

#### Examples: Import ODB

##### Proto Request Example

{
  "archiveFile": "C:\\\\Program Files\\\\ANSYS Inc\\\\v211\\\\sherlock\\\\tutorial\\\\ODB++ Tutorial.tgz",
  "project": "Test ODB API Import",
  "ccaName": "ODB++ Tutorial",
  "processLayerThickness": true,
  "includeOtherLayers": false,
  "processCutoutFile": false
}

##### Python Example

import SherlockProjectService\_pb2
import SherlockProjectService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockProjectService\_pb2\_grpc.SherlockProjectServiceStub(channel)

message = SherlockProjectService\_pb2.ImportODBRequest()
message.archiveFile = 'C:\\\\Program Files\\\\ANSYS Inc\\\\v211\\\\sherlock\\\\tutorial\\\\ODB++ Tutorial.tgz'
message.project = 'Test ODB API Import'
message.ccaName = 'ODB++ Tutorial'
message.processLayerThickness = 1
message.includeOtherLayers = 0
message.processCutoutFile = 0

returnCode = stub.importODBArchive(message)

print(str(returnCode))

### List CCAs

#### ListCCAsRequest

Request to list CCA's and sub-assembly CCA's for a project

**Table 1.185. ListCCAsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sherlock project name.

cca

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Optional project CCA names to return.

  

#### ListCCAsResponse.CCA

**Field**

**Type**

**Label**

**Description**

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Name of the CCA.

subAssemblies

[ListCCAsResponse.CCA](ch01s09.xhtml#sherlock_ug_ListCCAsResponse.CCA "ListCCAsResponse.CCA")

repeated

Sub-assemblies assigned to the CCA.

#### Example: List CCAs

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "cca": \[
    "Main Board"
  \]
}

##### Python Example:

import SherlockProjectService\_pb2
import SherlockProjectService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockProjectService\_pb2\_grpc.SherlockProjectServiceStub(channel)

message = SherlockProjectService\_pb2.ListCCAsRequest()
message.project = 'Tutorial Project'
message.cca.extend(\['Main Board'\])
response = stub.listCCAs(message)
	
print(str(response))

### List Strain Maps

#### ListStrainMapsRequest

Request to list CCA strain maps for a project

**Table 1.186. ListStrainMapsRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Sherlock project name.

cca

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Optional project CCA names to list strain maps for.

  

#### ListStrainMapsResponse

Lists the strain maps assigned to the project CCA's.

**Table 1.187. ListStrainMapsResponse**

**Field**

**Type**

**Label**

**Description**

_For display purposes, some strings in the column two are broken into multiple lines and should be read as continous. For example, the string in column two should be interpreted as: **ListStrainMapsResponse.CcaStrainMap**_

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

 

Status code of response.

errors

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

List of errors encountered.

ccaStrainMaps

[ListStrainMaps Response.CcaStrainMap](ch01s09.xhtml#sherlock_ug_ListStrainMapsResponse.CcaStrainMap "ListStrainMapsResponse.CcaStrainMap")

repeated

CCA strain maps assigned to the project.

  

#### ListStrainMapsResponse.CcaStrainMap

**Table 1.188. ListStrainMapsResponse.CcaStrainMap**

**Field**

**Type**

**Label**

**Description**

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Name of the CCA.

strainMaps

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Strain map names assigned to the CCA.

  

#### Example: List Strain Maps

##### Proto Request Example:

{
  "project": "Tutorial Project",
  "cca": \[
    "Main Board"
  \]
}

##### Python Example:

import SherlockProjectService\_pb2
import SherlockProjectService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockProjectService\_pb2\_grpc.SherlockProjectServiceStub(channel)

message = SherlockProjectService\_pb2.ListStrainMapsRequest()
message.project = 'Tutorial Project'
message.cca.extend(\['Main Board'\])
response = stub.listStrainMaps(message)
	
print(str(response))

* * *

[Prev](ch01s08.xhtml) 

 

 [Next](ch01s10.xhtml)

Sherlock Parts Service- SherlockPartsService.proto 

[Home](index.xhtml)

 Sherlock Stackup Service- SherlockStackupService.proto