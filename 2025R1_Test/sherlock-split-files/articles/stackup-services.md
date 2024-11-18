# Sherlock Stackup Service- SherlockStackupService.proto

[Click here to return to the main index to Sherlock's APIs.](introduction.md
"Index to the Sherlock APIs")

The APIs in this section allow you to perform updates on laminate layers.
Clicking on the active links in the table below will take you to the selected
API.

Table 1.209. Index to Sherlock Stackup Service APIs

Method Name| Request Type| Response Type| Description  
---|---|---|---  
For display purposes, some strings in the first three columns are broken into multiple lines and should be read as continous. For example, the first string in column two should be interpreted as: ListLaminatesRequest  listLaminates| [.ListLaminates Request](ch01s10s13.md#sherlock_ug_ListLaminatesRequest
"ListLaminatesRequest")| [.ListLaminates Response](ch01s10s13s02.md
"ListLaminatesResponse")| Returns a list of project's CCAs and their laminates.  
updateLaminate| [.Update Laminate
Request](ch01s10s15.md#sherlock_ug_UpdateLaminateRequest
"UpdateLaminateRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Update properties for a given laminate layer.  
listLaminate ThicknessUnits| [.ListLaminate Thickness
UnitsRequest](ch01s10s12.md#sherlock_ug_ListLaminateThicknessUnitsRequest
"ListLaminateThicknessUnitsRequest")| [.ListLaminate ThicknessUnits
Response](ch01s10s12s02.md "ListLaminateThicknessUnitsResponse")| List all
the supported laminate layer thickness units.  
listConductor Materials| [.ListConductor Materials
Request](ch01s10s07.md#sherlock_ug_ListConductorMaterialsRequest
"ListConductorMaterialsRequest")| [.ListConductor
MaterialsResponse](ch01s10s07s02.md "ListConductorMaterialsResponse")|  List
all conductor materials.  
listFiber Materials| [.ListFiber Materials
Request](ch01s10s09.md#sherlock_ug_ListFiberMaterialsRequest
"ListFiberMaterialsRequest")| [.ListFiber
MaterialsResponse](ch01s10s09s02.md "ListFiberMaterialsResponse")| List all
fiber materials.  
listLaminate Materials Manufacturers| [.ListLaminate Materials Manufacturers
Request](ch01s10s10.md#sherlock_ug_ListLaminateMaterialsManufacturersRequest
"ListLaminateMaterialsManufacturersRequest")| [.ListLaminate Materials
Manufacturers Response](ch01s10s10s02.md
"ListLaminateMaterialsManufacturersResponse")| List all laminate materials
manufacturers.  
listLaminate Materials| [.ListLaminate Materials
Request](ch01s10s11.md#sherlock_ug_ListLaminateMaterialsRequest
"ListLaminateMaterialsRequest")| [.ListLaminate Materials
Response](ch01s10s11s02.md "ListLaminateMaterialsResponse")|  See note
below.  
listLaminate Materials: List all laminate materials (both based on
manufacturer specified or without). If manufacturer is empty or not provided,
then all manufacturers and their laminate materials will be returned. If a
manufacturer is provided, then only that manufacturer's laminate materials
will be returned.  
listConstruction Styles| [.ListConstruction
StylesRequest](ch01s10s08.md#sherlock_ug_ListConstructionStylesRequest
"ListConstructionStylesRequest")| [.List Construction
StylesResponse](ch01s10s08s02.md "ListConstructionStylesResponse")|  List
all construction styles.  
listConductorLayers| [.ListConductor
LayersRequest](ch01s10s02.md#sherlock_ug_GetLayerCountRequest
"GetLayerCountRequest")| [.ListConductor LayersResponse](ch01s10s05s02.md
"ListConductorLayersResponse")| Returns a list of project's CCAs and their
conductor layers.  
updateConductor Layer| [.UpdateConductor
LayerRequest](ch01s10s14.md#sherlock_ug_UpdateConductorLayerRequest
"UpdateConductorLayerRequest")| [.ReturnCode](scalar-values.md "gRPC Scalar Value
Types")|  Update properties for a given conductor layer.  
getLayerCount| [.GetLayer
CountRequest](ch01s10s02.md#sherlock_ug_GetLayerCountRequest
"GetLayerCountRequest")| [.GetLayer CountResponse](ch01s10s04s02.md
"GetTotalConductorThicknessResponse")| Returns the number of stackup layers.  
getTotal ConductorThickness| [.GetTotalConductor
ThicknessRequest](ch01s10s04.md#sherlock_ug_GetTotalConductorThicknessRequest
"GetTotalConductorThicknessRequest")| [.GetTotalConductor
ThicknessResponse](ch01s10s04s02.md "GetTotalConductorThicknessResponse")|
Returns the total thickness for all conductor layers.  
getStackupProps| [.GetStackup
PropsRequest](ch01s10s03.md#sherlock_ug_GetStackupPropsRequest
"GetStackupPropsRequest")| [.GetStackup PropsResponse](ch01s10s03s02.md
"GetStackupPropsResponse")| Returns a summary of the stackup properties.  
genStackup| [.GenStackupRequest](stackup-services.md#sherlock_ug_genstackuprequest
"GenStackupRequest")| [.ReturnCode](scalar-values.md "gRPC Scalar Value Types")|
Generate stackup layers.  
  
  

## Generate Stackup

Links:

### GenStackupRequest

Represents the properties of a new stackup to be generated.

Table 1.210. GenStackupRequest

Field| Type| Label| Description  
---|---|---|---  
project| [string](scalar-values.md "gRPC Scalar Value Types")|  | Sherlock project name.  
ccaName| [string](scalar-values.md "gRPC Scalar Value Types")|  | The CCA name.  
boardThickness| [double](scalar-values.md "gRPC Scalar Value Types")|  | Board thickness.  
boardThicknessUnit| [string](scalar-values.md "gRPC Scalar Value Types")|  | Board thickness unit.  
pcbMaterialManufacturer| [string](scalar-values.md "gRPC Scalar Value Types")|  | PCB material manufacturer.  
pcbMaterialGrade| [string](scalar-values.md "gRPC Scalar Value Types")|  | PCB material grade.  
pcbMaterial| [string](scalar-values.md "gRPC Scalar Value Types")|  | PCB material.  
conductorLayersCnt| [int32](scalar-values.md "gRPC Scalar Value Types")|  | Number of conductor layers.  
signalLayerThickness| [double](scalar-values.md "gRPC Scalar Value Types")|  | Signal layer thickness.  
signalLayerThicknessUnit| [string](scalar-values.md "gRPC Scalar Value Types")|  | Signal layer thickness unit.  
minLaminateThickness| [double](scalar-values.md "gRPC Scalar Value Types")|  | Minimum laminate layer thickness.  
minLaminateThicknessUnit| [string](scalar-values.md "gRPC Scalar Value Types")|  | Minimum laminate layer thickness unit.  
maintainSymmetry| [bool](scalar-values.md "gRPC Scalar Value Types")|  | If set to true, maintain symmetry.  
powerLayerThickness| [double](scalar-values.md "gRPC Scalar Value Types")|  | Power layer thickness.  
powerLayerThicknessUnit| [string](scalar-values.md "gRPC Scalar Value Types")|  | Power layer thickness unit.  
  
  

### Examples: Generate Stackup

#### Proto Request Example

    
    
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

#### Python Example

For a Python example, refer to the online [PySherlock
Reference](https://sherlock.docs.pyansys.com/version/stable/api/index.md).

* * *

[Prev](ch01s09s11s04.md) |   / [Contents](index.md) / [Home](../../index.htm)|  [Next](ch01s10s02.md)  
---|---|---

