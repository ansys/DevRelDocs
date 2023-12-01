Sherlock Stackup Service- SherlockStackupService.proto

Sherlock Stackup Service- SherlockStackupService.proto

[Prev](ch01s09.xhtml) 

 

 [Next](ch01s11.xhtml)

* * *

Sherlock Stackup Service- SherlockStackupService.proto
------------------------------------------------------

[Click here to return to the main index to Sherlock's APIs.](ch01s02.xhtml "Index to the Sherlock APIs")

The APIs in this section allow you to perform updates on laminate layers. Clicking on the active links in the table below will take you to the selected API.

**Table 1.189. Index to Sherlock Stackup Service APIs**

**Method Name**

**Request Type**

**Response Type**

**Description**

_For display purposes, some strings in the first three columns are broken into multiple lines and should be read as continous. For example, the first string in column two should be interpreted as: **.ListLaminatesRequest**_

listLaminates

[.ListLaminates Request](ch01s10.xhtml#sherlock_ug_ListLaminatesRequest "ListLaminatesRequest")

[.List Laminates Response](ch01s10.xhtml#sherlock_ug_ListLaminatesResponse "ListLaminatesResponse")

Returns a list of project's CCAs and their laminates.

updateLaminate

[.Update Laminate Request](ch01s10.xhtml#sherlock_ug_UpdateLaminateRequest "UpdateLaminateRequest")

[.ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Update properties for a given laminate layer.

listLaminate ThicknessUnits

[.ListLaminate Thickness UnitsRequest](ch01s10.xhtml#sherlock_ug_ListLaminateThicknessUnitsRequest "ListLaminateThicknessUnitsRequest")

[.ListLaminate Thickness Units Response](ch01s10.xhtml#sherlock_ug_ListLaminateThicknessUnitsResponse "ListLaminateThicknessUnitsResponse")

List all the supported laminate layer thickness units.

listConductor Materials

[.ListConductor Materials Request](ch01s10.xhtml#sherlock_ug_ListConductorMaterialsRequest "ListConductorMaterialsRequest")

[.ListConductor Materials Response](ch01s10.xhtml#sherlock_ug_ListConductorMaterialsResponse "ListConductorMaterialsResponse")

List all conductor materials.

listFiber Materials

[.ListFiber Materials Request](ch01s10.xhtml#sherlock_ug_ListFiberMaterialsRequest "ListFiberMaterialsRequest")

[.ListFiber Materials Response](ch01s10.xhtml#sherlock_ug_ListFiberMaterialsResponse "ListFiberMaterialsResponse")

List all fiber materials.

listLaminate Materials Manufacturers

[.ListLaminate Materials Manufacturers Request](ch01s10.xhtml#sherlock_ug_ListLaminateMaterialsManufacturersRequest "ListLaminateMaterialsManufacturersRequest")

[.ListLaminate Materials Manufacturers Response](ch01s10.xhtml#sherlock_ug_ListLaminateMaterialsManufacturersResponse "ListLaminateMaterialsManufacturersResponse")

List all laminate materials manufacturers

listLaminate Materials

[.ListLaminate Materials Request](ch01s10.xhtml#sherlock_ug_ListLaminateMaterialsRequest "ListLaminateMaterialsRequest")

[.ListLaminate Materials Response](ch01s10.xhtml#sherlock_ug_ListLaminateMaterialsResponse "ListLaminateMaterialsResponse")

See note below.

**listLaminate Materials**: List all laminate materials (both based on manufacturer specified or without). If manufacturer is empty or not provided, then all manufacturers and their laminate materials will be returned. If a manufacturer is provided, then only that manufacturer's laminate materials will be returned.

listConstruction Styles

[.ListConstruction StylesRequest](ch01s10.xhtml#sherlock_ug_ListConstructionStylesRequest "ListConstructionStylesRequest")

[.List Construction Styles Response](ch01s10.xhtml#sherlock_ug_ListConstructionStylesResponse "ListConstructionStylesResponse")

List all construction styles.

listConductorLayers

[.ListConductor LayersRequest](ch01s10.xhtml#sherlock_ug_GetLayerCountRequest "GetLayerCountRequest")

[.ListConductor LayersResponse](ch01s10.xhtml#sherlock_ug_ListConductorLayersResponse "ListConductorLayersResponse")

Returns a list of project's CCAs and their conductor layers.

updateConductor Layer

[.UpdateConductor LayerRequest](ch01s10.xhtml#sherlock_ug_UpdateConductorLayerRequest "UpdateConductorLayerRequest")

[.ReturnCode](ch01s11.xhtml "gRPC Scalar Value Types")

Update properties for a given conductor layer.

getLayerCount

[.GetLayer CountRequest](ch01s10.xhtml#sherlock_ug_GetLayerCountRequest "GetLayerCountRequest")

[.GetLayer CountResponse](ch01s10.xhtml#sherlock_ug_GetTotalConductorThicknessResponse "GetTotalConductorThicknessResponse")

Returns the number of stackup layers.

getTotal ConductorThickness

[.GetTotalConductor ThicknessRequest](ch01s10.xhtml#sherlock_ug_GetTotalConductorThicknessRequest "GetTotalConductorThicknessRequest")

[.GetTotalConductor ThicknessResponse](ch01s10.xhtml#sherlock_ug_GetTotalConductorThicknessResponse "GetTotalConductorThicknessResponse")

Returns the total thickness for all conductor layers.

getStackupProps

[.GetStackup PropsRequest](ch01s10.xhtml#sherlock_ug_GetStackupPropsRequest "GetStackupPropsRequest")

[.GetStackup PropsResponse](ch01s10.xhtml#sherlock_ug_GetStackupPropsResponse "GetStackupPropsResponse")

Returns a summary of the stackup properties

genStackup

[.GenStackupRequest](ch01s10.xhtml#sherlock_ug_genstackuprequest "GenStackupRequest")

[.ReturnCode](ch01s11.xhtml "gRPC Scalar Value Types")

Generate stackup layers.

  

### Generate Stackup

In this section:

#### GenStackupRequest

Represents the properties of a new stackup to be generated.

**Table 1.190. GenStackupRequest**

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

boardThickness

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Board thickness.

boardThicknessUnit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Board thickness unit.

pcbMaterialManufacturer

[string](ch01s11.xhtml "gRPC Scalar Value Types")

PCB material manufacturer.

pcbMaterialGrade

[string](ch01s11.xhtml "gRPC Scalar Value Types")

PCB material grade.

pcbMaterial

[string](ch01s11.xhtml "gRPC Scalar Value Types")

PCB material.

conductorLayersCnt

[int32](ch01s11.xhtml "gRPC Scalar Value Types")

Number of conductor layers.

signalLayerThickness

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Signal layer thickness.

signalLayerThicknessUnit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Signal layer thickness unit.

minLaminateThickness

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Minimum laminate layer thickness.

minLaminateThicknessUnit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Minimum laminate layer thickness unit.

maintainSymmetry

[bool](ch01s11.xhtml "gRPC Scalar Value Types")

If set to true, maintain symmetry.

powerLayerThickness

[double](ch01s11.xhtml "gRPC Scalar Value Types")

 

Power layer thickness.

powerLayerThicknessUnit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

 

Power layer thickness unit.

  

#### Examples: Generate Stackup

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "boardThickness": 1.4,
  "boardThicknessUnit": "mil",
  "pcbMaterialManufacturer": "Grace",
  "pcbMaterialGrade": "FR-4",
  "pcbMaterial": "FR4-97",
  "conductorLayersCnt": 8,
  "signalLayerThickness": 0.5,
  "signalLayerThicknessUnit": "oz",
  "minLaminateThickness": 0.5,
  "minLaminateThicknessUnit": "mil",
  "maintainSymmetry": true,
  "powerLayerThickness": 0.8,
  "powerLayerThicknessUnit": "oz"
} 

##### Python Example

import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)

message = SherlockStackupService\_pb2.GenStackupRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.boardThickness = 1.4
message.boardThicknessUnit = "mil"
message.pcbMaterialManufacturer = "Grace"
message.pcbMaterialGrade = "FR-4"
message.pcbMaterial = "FR4-97"
message.conductorLayersCnt = 8
message.signalLayerThickness = .5
message.signalLayerThicknessUnit = "oz"
message.minLaminateThickness = .5
message.minLaminateThicknessUnit = "mil"
message.maintainSymmetry = 1
message.powerLayerThickness = .8
message.powerLayerThicknessUnit = "oz"

response = stub.genStackup(message)

print(str(response))

### Get Layer Count

In this section:

#### GetLayerCountRequest

Requests the number of layers in the stackup.

**Table 1.191. GetLayerCountRequest**

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

  

#### GetLayerCountResponse

Represents the number of layers in the stackup.

**Table 1.192. GetLayerCountResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

count

[int32](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Number of stackup layers.

  

#### Exampes: Get Layer Count

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board"
} 

##### Python Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board"
} 

Python Example:
import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)

message = SherlockStackupService\_pb2.GetLayerCountRequest()

message.project = "Tutorial Project"
message.ccaName = "Main Board"

response = stub.getLayerCount(message)

print(str(response)) 

### Get Stackup Properties

In this section:

#### GetStackupPropsRequest

Requests a summary of the stackup properties.

**Table 1.193. GetStackupPropsRequest**

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

  

#### GetStackupPropsResponse

Represents a summary of the stackup properties.

**Table 1.194. GetStackupPropsResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s11.xhtml "gRPC Scalar Value Types")

Status code of response.

boardDimension

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Board dimension.

boardThickness

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Board thickness.

density

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Board density.

conductorLayersCnt

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Number of conductor layers.

ctExy

[string](ch01s11.xhtml "gRPC Scalar Value Types")

CTExy.

ctEz

[string](ch01s11.xhtml "gRPC Scalar Value Types")

CTEz.

exy

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Exy.

ez

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Ez.

  

#### Example: Get Stackup Properties

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board"
}

##### Python Example

import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)

message = SherlockStackupService\_pb2.GetStackupPropsRequest()

message.project = "Tutorial Project"
message.ccaName = "Main Board"

response = stub.getStackupProps(message)

print(str(response))

### Get Conductor Thickness

In this section:

#### GetTotalConductorThicknessRequest

Requests the total thickness on all conductor layers in a stackup.

**Table 1.195. GetTotalConductorThicknessRequest**

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

thicknessUnit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Conductor layer thickness unit.

  

#### GetTotalConductorThicknessResponse

Represents the number of layers in the stackup.

**Table 1.196. GetTotalConductorThicknessResponse**

**Field**

**Type**

**Label**

**Description**

returnCode

[ReturnCode](ch01s11.xhtml "gRPC Scalar Value Types")

Status code of response.

totalThickness

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Total thickness.

  

#### Example: Get Total Conductor Thickness

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "thicknessUnit": "mm"
} 

##### Python Example

import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)

message = SherlockStackupService\_pb2.GetTotalConductorThicknessRequest()

message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.thicknessUnit = "mm"
response = stub.getTotalConductorThickness(message)

print(str(response)) 

### List Conductor Layers

In this section:

#### ListConductorLayersRequest

Request for a list of conductor layers.

**Table 1.197. ListConductorLayersRequest**

**Field**

**Type**

**Label**

**Description**

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

  

#### ListConductorLayersResponse

Represents the properties for all CCAs and their corresponding conductor layers.

**Table 1.198. ListConductorLayersResponse**

**Field**

**Type**

**Label**

**Description**

_For display purposes, some strings in the first two columns are broken into multiple lines and should be read as continuous. For example, the last string in column one should be interpreted as: **ccaConductorLayerProps**_

returnCode

[ReturnCode](ch01s11.xhtml "gRPC Scalar Value Types")

Status code of response.

ccaConductor LayerProps

[ListConductorLayersResponse. CCAConductorLayerProp](ch01s10.xhtml#sherlock_ug_ListConductorLayersResponse.CCAConductorLayerProp "ListConductorLayersResponse.CCAConductorLayerProp")

repeated

  

#### Examples: List Conductor Layers

##### Proto Request Example

{
  "project": "Tutorial Project"
} 

Python Example:
import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)

message = SherlockStackupService\_pb2.ListConductorLayersRequest()

message.project = "Tutorial Project"

response = stub.listConductorLayers(message)

print(str(response)) 

### List CCA Conductor Layer Properties

In this section:

#### ListConductorLayersResponse.CCAConductorLayerProp

Represents a CCA and its conductor layers.

**Table 1.199. ListConductorLayersResponse.CCAConductorLayerProp**

**Field**

**Type**

**Label**

**Description**

_For display purposes, some strings in the first two columns are broken into multiple lines and should be read as continuous. For example, the last string in column one should be interpreted as:_

**ListConductorLayersResponse.CCAConductorLayerProp.ConductorLayerProp**

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA name.

conductorLayerProps

[ListConductorLayersResponse. CCAConductorLayerProp. ConductorLayerProp](ch01s10.xhtml#sherlock_ug_ListConductorLayersResponse.CCAConductorLayerProp.CLP "ListConductorLayersResponse. CCAConductorLayerProp.ConductorLayerProp")

repeated

  

#### ListConductorLayersResponse. CCAConductorLayerProp.ConductorLayerProp

ListConductorLayersResponse.CCAConductorLayerProp.ConductorLayerProp

Represents a conductor layer and its properties.

**Table 1.200. ListConductorLayersResponse.CCAConductorLayerProp.ConductorLayerProp**

**Field**

**Type**

**Label**

**Description**

layer

[string](ch01s11.xhtml "gRPC Scalar Value Types")

An internal layer ID associated with this conductor layer.

type

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Layer type (i.e. SIGNAL, POWER, SUBSTRATE).

material

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of this conductor material.

thickness

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Conductor layer thickness.

thicknessUnit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Conductor layer thickness unit.

conductorPercent

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Conductor percentage.

resinMaterial

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Resin material.

density

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Layer density.

CTExy

[double](ch01s11.xhtml "gRPC Scalar Value Types")

CTExy.

CTEz

[double](ch01s11.xhtml "gRPC Scalar Value Types")

CTEz.

Exy

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Exy.

Ez

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Ez.

  

### List Conductor Materials

In this section:

#### ListConductorMaterialsRequest

Empty request to list valid conductor materials.

#### ListConductorMaterialsResponse

Represents a list of valid conductor materials.

**Table 1.201. ListConductorMaterialsResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

conductorMaterial

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Conductor material name.

  

#### Examples: List Conductor Materials

##### Proto Request Example

{ }

##### Python Example

import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)

message = SherlockStackupService\_pb2.ListConductorMaterialsRequest()

response = stub.listConductorMaterials(message)

print(str(response))

### List Construction Styles

In this section:

#### ListConstructionStylesRequest

Empty request to list valid construction styles.

#### ListConstructionStylesResponse

Represents a list of valid construction styles.

**Table 1.202. ListConstructionStylesResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

constructionStyle

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Construction style.

  

#### Examples: List Construction Styles

##### Proto Request Example

{ }

##### Python Example

import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)

message = SherlockStackupService\_pb2.ListConstructionStylesRequest()

response = stub.listConstructionStyles(message)

print(str(response))

### List Fiber Materials

In this section:

#### ListFiberMaterialsRequest

Empty request to list valid fiber materials.

#### ListFiberMaterialsResponse

Represents a list of valid fiber materials.

**Table 1.203. ListFiberMaterialsResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

fiberMaterial

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Fiber material name.

  

#### Examples: List Fiber Materials

##### Proto Request Example

{ }

##### Python Example

import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)

message = SherlockStackupService\_pb2.ListFiberMaterialsRequest()

response = stub.listFiberMaterials(message)

print(str(response))

### List Laminate Materials Manufacturers

In this section:

#### ListLaminateMaterialsManufacturersRequest

Empty request to list valid materials manufacturers names.

#### ListLaminateMaterialsManufacturersResponse

Represents a list of valid materials manufacturers names.

**Table 1.204. ListLaminateMaterialsManufacturersResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

manufacturer

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Manufacturer name.

  

#### Examples: List Laminate Materials Manufacturers

##### Proto Request Example

{ }

##### Python Example

import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)

message = SherlockStackupService\_pb2.ListLaminateMaterialsManufacturersRequest()

response = stub.listLaminateMaterialsManufacturers(message)

print(str(response))

### List Laminate Materials

In this section:

#### ListLaminateMaterialsRequest

Request a list of materials from a given manufacturer.

If manufacturer is empty, all manufacturers and their materials will be returned.

**Table 1.205. ListLaminateMaterialsRequest**

**Field**

**Type**

**Label**

**Description**

manufacturer

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Manufacturer name.

  

#### ListLaminateMaterialsResponse

Represents a list of manufacturers materials.

**Table 1.206. ListLaminateMaterialsResponse**

**Field**

**Type**

**Label**

**Description**

_For display purposes, some strings in the first two columns are broken into multiple lines and should be read as continuous. For example, the last string in column one should be interpreted as: **manufacturerMaterials**_

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

manufacturer Materials

[ListLaminateMaterialsResponse .ManufacturerMaterials](ch01s10.xhtml#sherlock_ug_ListLaminateMaterialsResponse.ManufacturerMaterials "ListLaminateMaterialsResponse.ManufacturerMaterials")

repeated

  

#### ListLaminateMaterialsResponse.ManufacturerMaterials

**Table 1.207. ListLaminateMaterialsResponse.ManufacturerMaterials**

**Field**

**Type**

**Label**

**Description**

For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as: _**ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials**_

manufacturer

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Manufacturer name.

gradeMaterials

[ListLaminateMaterialsResponse. ManufacturerMaterials.GradeMaterials](ch01s10.xhtml#sherlock_ug_ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials "ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials")

repeated

  

#### ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials

Represents a grade and the materials with this grade.

**Table 1.208. ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials**

**Field**

**Type**

**Label**

**Description**

grade

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Grade.

laminateMaterial

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Material name.

  

#### Examples: List Laminate Materials

##### Proto Request Example

{
  "manufacturer": "Arlon"
}

##### Python Example

import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc
 
channel = grpc.insecure\_channel('localhost:9090')
 
stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)
 
message = SherlockStackupService\_pb2.ListLaminateMaterialsRequest()
message.manufacturer = "Arlon"
 
response = stub.listLaminateMaterials(message)

### List Laminate Thickness Units

In this section:

#### ListLaminateThicknessUnitsRequest

Empty request to list valid laminate thickness units.

#### ListLaminateThicknessUnitsResponse

Represents a list of valid laminate thickness units.

**Table 1.209. ListLaminateThicknessUnitsResponse**

**Field**

**Type**

**Label**

**Description**

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

unit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

repeated

Thickness unit.

  

#### Examples: List Laminate Thickness Units

##### Proto Request Example

{ }

##### Python Example

import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)

message = SherlockStackupService\_pb2.ListLaminateThicknessUnitsRequest()

response = stub.listLaminateThicknessUnits(message)

print(str(response))

### List Laminates

In this section:

#### ListLaminatesRequest

Request for a list of laminates.

**Table 1.210. ListLaminatesRequest**

**Field**

**Type**

**Label**

**Description**

projectDir

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The full path to the Sherlock project directory.

  

#### ListLaminatesResponse

Represents the properties for all CCAs and their corresponding laminates

**Table 1.211. ListLaminatesResponse**

**Field**

**Type**

**Label**

**Description**

For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as: _**ListLaminatesResponse.CCALaminateProp**_

ReturnCode

[ReturnCode](ch01s04.xhtml#sherlock_ug_ReturnCode "Return Code")

Status code of response.

ccaLaminateProps

[ListLaminatesResponse .CCALaminateProp](ch01s10.xhtml#sherlock_ug_ListLaminatesResponse.CCALaminateProp "ListLaminatesResponse.CCALaminateProp")

repeated

  

#### ListLaminatesResponse.CCALaminateProp

Represents a CCA and its laminates.

**Table 1.212. ListLaminatesResponse.CCALaminateProp**

**Field**

**Type**

**Label**

**Description**

_For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as: **ListLaminatesResponse.CCALaminateProp.LaminateProp**_

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA name.

laminateProps

[ListLaminatesResponse. CCALaminateProp.LaminateProp](ch01s10.xhtml#sherlock_ug_ListLaminatesResponse.CCALaminateProp.LaminateProp "ListLaminatesResponse.CCALaminateProp.LaminateProp")

repeated

  

#### ListLaminatesResponse.CCALaminateProp.LaminateProp

Represents a laminate layer and its properties.

**Table 1.213. ListLaminatesResponse.CCALaminateProp.LaminateProp**

**Field**

**Type**

**Label**

**Description**

_For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as:_ _**ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction**_

layer

[string](ch01s11.xhtml "gRPC Scalar Value Types")

An internal layer ID associated with this laminate layer.

manufacturer

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Manufacturer name of this material.

grade

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Grade of this material.

material

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of this material.

thickness

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Laminate thickness.

thicknessUnit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Laminate thickness unit.

constructionStyle

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Construction style.

glassConstructions

[ListLaminates Response .CCALaminateProp .LaminateProp .GlassConstruction](ch01s10.xhtml#sherlock_ug_ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction "ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction")

repeated

fiberMaterial

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Fiber material if the construction style is glass.

conductorMaterial

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Conductor material.

conductorPercent

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Conductor percentage.

density

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Layer density.

CTExy

[double](ch01s11.xhtml "gRPC Scalar Value Types")

CTExy.

CTEz

[double](ch01s11.xhtml "gRPC Scalar Value Types")

CTEz.

Exy

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Exy.

Ez

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Ez.

  

#### ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction

Represents the layers with a glass construction.

**Table 1.214. ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction**

**Field**

**Type**

**Label**

**Description**

style

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Glass construction style.

thickness

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Glass construction thickness.

thicknessUnit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Glass construction thickness unit.

  

#### Examples: List Laminates

##### Proto Request Example

{
  "project": "Tutorial Project"
}

##### Python Example

import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)

message = SherlockStackupService\_pb2.ListLaminatesRequest()

message.project = "Tutorial Project"

response = stub.listLaminates(message)

print(str(response))

### Update Conductor Layer

In this section:

#### UpdateConductorLayerRequest

Represents the conductor layer properties requested to be updated.

To update a thickness, a thickness unit must be provided also.

Any property left out or set to "" or 0.0 will not be updated.

**Table 1.215. UpdateConductorLayerRequest**

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

layer

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The layer ID associated with this conductor layer.

type

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Layer type (i.e. SIGNAL, POWER, SUBSTRATE).

material

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of this conductor material.

thickness

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Conductor layer thickness.

thicknessUnit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Conductor layer thickness unit.

conductorPercent

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Conductor percentage.

resinMaterial

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Resin material.

  

#### Examples: Update Conductor Layer

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "layer": "1",
  "type": "POWER",
  "material": "COPPER",
  "thickness": 2.0,
  "thicknessUnit": "oz",
  "conductorPercent": "4.8",
  "resinMaterial": "COPPER-RESIN"
} 

##### Python Example

import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')
stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)

message = SherlockStackupService\_pb2.UpdateConductorLayerRequest()
message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.layer = "1"
message.type = "POWER"
message.material = "COPPER"
message.thickness = 2.0
message.thicknessUnit = "oz"
message.conductorPercent = "4.8"
message.resinMaterial = "COPPER-RESIN"

response = stub.updateConductorLayer(message)

print(str(response)) 

### Update Laminate

In this section:

#### UpdateLaminateRequest

Represents the laminate properties requested to be updated.

To update the material, valid values must be provided for manufacturer, grade, and material.

To update a thickness, a thickness unit must be provided also.

Glass construction should only be set when the construction style is not the "DEFAULT" value.

Any property left out or set to "" or 0.0 will not be updated.

**Table 1.216. UpdateLaminateRequest**

**Field**

**Type**

**Label**

**Description**

_For display purposes, the long string in column two is broken into multiple lines. It should be interpreted as: **UpdateLaminateRequest.GlassConstruction**_

project

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Sherlock project name.

ccaName

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The CCA name.

layer

[string](ch01s11.xhtml "gRPC Scalar Value Types")

The internal layer ID associated with this laminate layer.

manufacturer

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Manufacturer name of this material. Must be provided along with grade and material name.

grade

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Grade of this material.

material

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Name of this material.

thickness

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Laminate thickness.

thicknessUnit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Laminate thickness unit.

constructionStyle

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Construction style.

glassConstruction

[UpdateLaminate Request .GlassConstruction](ch01s10.xhtml#sherlock_ug_UpdateLaminateRequest.GlassConstruction "UpdateLaminateRequest.GlassConstruction")

repeated

berMaterial

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Fiber material. Only updated if glass construction is selected.

conductorMaterial

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Conductor material.

conductorPercent

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Conductor percentage.

  

#### UpdateLaminateRequest.GlassConstruction

Represents the layers with a glass construction.

**Table 1.217. UpdateLaminateRequest.GlassConstruction**

**Field**

**Type**

**Label**

**Description**

style

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Glass construction style.

thickness

[double](ch01s11.xhtml "gRPC Scalar Value Types")

Glass construction thickness.

thicknessUnit

[string](ch01s11.xhtml "gRPC Scalar Value Types")

Glass construction thickness unit.

  

#### Examples: Update Laminate

##### Proto Request Example

{
  "project": "Tutorial Project",
  "ccaName": "Main Board",
  "layer": "2",
  "manufacturer": "Arlon",
  "grade": "FR-4",
  "material": "49N Data Sheet",
  "thickness": 0.02,
  "thicknessUnit": "in",
  "constructionStyle": "1027 0.0018 in Prepreg \[73% resin\]",
  "glassConstruction": \[
    {
      "style": "1027 0.0018 in Prepreg \[73% resin\]",
      "resinPercentage": 73,
      "thickness": 0.02,
      "thicknessUnit": "in"
    }
  \],
  "fiberMaterial": "E-GLASS",
  "conductorMaterial": "COPPER",
  "conductorPercent": "2.0"
}

##### Python Example

import SherlockStackupService\_pb2
import SherlockStackupService\_pb2\_grpc
import grpc

channel = grpc.insecure\_channel('localhost:9090')

stub = SherlockStackupService\_pb2\_grpc.SherlockStackupServiceStub(channel)

message = SherlockStackupService\_pb2.UpdateLaminateRequest()

message.project = "Tutorial Project"
message.ccaName = "Main Board"
message.layer = "2"
message.manufacturer = "Arlon"
message.material = "49N Data Sheet"
message.grade = "FR-4"
message.thickness = 0.02
message.thicknessUnit = "in"
message.constructionStyle = "1027 0.0018 in Prepreg \[73% resin\]"
glassConstruction = SherlockStackupService\_pb2.UpdateLaminateRequest().GlassConstruction()
glassConstruction.style = "1027 0.0018 in Prepreg \[73% resin\]"
glassConstruction.thickness = 0.02
glassConstruction.thicknessUnit = "in"
message.glassConstruction.extend(\[glassConstruction\])
message.fiberMaterial = "E-GLASS"
message.conductorMaterial = "COPPER"
message.conductorPercent = "2.0"

response = stub.updateLaminate(message)

print(str(response))

* * *

[Prev](ch01s09.xhtml) 

 

 [Next](ch01s11.xhtml)

Sherlock Project Service- SherlockProjectService.proto 

[Home](index.xhtml)

 gRPC Scalar Value Types