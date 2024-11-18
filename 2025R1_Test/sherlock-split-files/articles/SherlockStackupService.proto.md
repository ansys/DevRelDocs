# SherlockStackupService.proto

Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-GenStackupRequest"></a>

## GenStackupRequest

Request to generate stackup layers for a CCA.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| boardThickness | [double](#double) |  | Board thickness. |
| boardThicknessUnit | [string](#string) |  | Board thickness unit. |
| pcbMaterialManufacturer | [string](#string) |  | PCB material manufacturer. |
| pcbMaterialGrade | [string](#string) |  | PCB material grade. |
| pcbMaterial | [string](#string) |  | PCB material. |
| conductorLayersCnt | [int32](#int32) |  | Number of conductor layers. |
| signalLayerThickness | [double](#double) |  | Signal layer thickness. |
| signalLayerThicknessUnit | [string](#string) |  | Signal layer thickness unit. |
| minLaminateThickness | [double](#double) |  | Minimum laminate layer thickness. |
| minLaminateThicknessUnit | [string](#string) |  | Minimum laminate layer thickness unit. |
| maintainSymmetry | [bool](#bool) |  | If set to true, maintain symmetry. |
| powerLayerThickness | [double](#double) |  | Power layer thickness. |
| powerLayerThicknessUnit | [string](#string) |  | Power layer thickness unit. |






<a name="-GetLayerCountRequest"></a>

## GetLayerCountRequest

Request the number of layers in the stackup.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |






<a name="-GetLayerCountResponse"></a>

## GetLayerCountResponse

Represents the number of layers in the stackup.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| count | [int32](#int32) |  | Number of stackup layers. |






<a name="-GetStackupPropsRequest"></a>

## GetStackupPropsRequest

Request a summary of the stackup properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |






<a name="-GetStackupPropsResponse"></a>

## GetStackupPropsResponse

Represents a summary of the stackup properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| boardDimension | [string](#string) |  | Board dimension. |
| boardThickness | [string](#string) |  | Board thickness. |
| density | [string](#string) |  | Board density. |
| conductorLayersCnt | [string](#string) |  | Number of conductor layers. |
| ctExy | [string](#string) |  | CTExy. |
| ctEz | [string](#string) |  | CTEz. |
| exy | [string](#string) |  | Exy. |
| ez | [string](#string) |  | Ez. |






<a name="-GetTotalConductorThicknessRequest"></a>

## GetTotalConductorThicknessRequest

Request the total thickness on all conductor layers in a stackup.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| thicknessUnit | [string](#string) |  | Conductor layer thickness unit. |






<a name="-GetTotalConductorThicknessResponse"></a>

## GetTotalConductorThicknessResponse

Represents the number of layers in the stackup.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| totalThickness | [double](#double) |  | Total thickness. |






<a name="-ListConductorLayersRequest"></a>

## ListConductorLayersRequest

Request for a list of conductor layers.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListConductorLayersResponse"></a>

## ListConductorLayersResponse

Represents the properties for all CCAs and their corresponding conductor layers.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| ccaConductorLayerProps | [ListConductorLayersResponse.CCAConductorLayerProp](#ListConductorLayersResponse-CCAConductorLayerProp) | repeated | List of CCAs and their associated conductor layers for a specified project. |






<a name="-ListConductorLayersResponse-CCAConductorLayerProp"></a>

## ListConductorLayersResponse.CCAConductorLayerProp

Represents a CCA and its conductor layers.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| conductorLayerProps | [ListConductorLayersResponse.CCAConductorLayerProp.ConductorLayerProp](#ListConductorLayersResponse-CCAConductorLayerProp-ConductorLayerProp) | repeated | List of conductor layers and their associated properties for a specified CCA. |






<a name="-ListConductorLayersResponse-CCAConductorLayerProp-ConductorLayerProp"></a>

## ListConductorLayersResponse.CCAConductorLayerProp.ConductorLayerProp

Represents a conductor layer and its properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| layer | [string](#string) |  | An internal layer ID associated with this conductor layer. |
| type | [string](#string) |  | Layer type (i.e. SIGNAL, POWER, SUBSTRATE). |
| material | [string](#string) |  | Name of this conductor material. |
| thickness | [double](#double) |  | Conductor layer thickness. |
| thicknessUnit | [string](#string) |  | Conductor layer thickness unit. |
| conductorPercent | [string](#string) |  | Conductor percentage. |
| resinMaterial | [string](#string) |  | Resin material. |
| density | [double](#double) |  | Layer density. |
| CTExy | [double](#double) |  | CTExy. |
| CTEz | [double](#double) |  | CTEz. |
| Exy | [double](#double) |  | Exy. |
| Ez | [double](#double) |  | Ez. |






<a name="-ListConductorMaterialsRequest"></a>

## ListConductorMaterialsRequest

Request to list valid conductor materials.






<a name="-ListConductorMaterialsResponse"></a>

## ListConductorMaterialsResponse

Represents a list of valid conductor materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| conductorMaterial | [string](#string) | repeated | Conductor material name. |






<a name="-ListConstructionStylesRequest"></a>

## ListConstructionStylesRequest

Request to list valid construction styles.






<a name="-ListConstructionStylesResponse"></a>

## ListConstructionStylesResponse

Represents a list of valid construction styles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| constructionStyle | [string](#string) | repeated | Construction style. |






<a name="-ListFiberMaterialsRequest"></a>

## ListFiberMaterialsRequest

Request to list valid fiber materials.






<a name="-ListFiberMaterialsResponse"></a>

## ListFiberMaterialsResponse

Represents a list of valid fiber materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| fiberMaterial | [string](#string) | repeated | Fiber material name. |






<a name="-ListLaminateMaterialsManufacturersRequest"></a>

## ListLaminateMaterialsManufacturersRequest

Request to list valid names of materials manufacturers.






<a name="-ListLaminateMaterialsManufacturersResponse"></a>

## ListLaminateMaterialsManufacturersResponse

Represents a list of valid names of materials manufacturers.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| manufacturer | [string](#string) | repeated | Manufacturer name. |






<a name="-ListLaminateMaterialsRequest"></a>

## ListLaminateMaterialsRequest

Request to list materials from a given manufacturer.
If manufacturer is empty, all manufacturers and their materials will be returned.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| manufacturer | [string](#string) |  | Manufacturer name. |






<a name="-ListLaminateMaterialsResponse"></a>

## ListLaminateMaterialsResponse

Represents a list of materials from a given manufacturer.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| manufacturerMaterials | [ListLaminateMaterialsResponse.ManufacturerMaterials](#ListLaminateMaterialsResponse-ManufacturerMaterials) | repeated | List of manufacturers and their associated grades and materials. |






<a name="-ListLaminateMaterialsResponse-ManufacturerMaterials"></a>

## ListLaminateMaterialsResponse.ManufacturerMaterials



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| manufacturer | [string](#string) |  | Manufacturer name. |
| gradeMaterials | [ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials](#ListLaminateMaterialsResponse-ManufacturerMaterials-GradeMaterials) | repeated | List of Grades and their associated materials. |






<a name="-ListLaminateMaterialsResponse-ManufacturerMaterials-GradeMaterials"></a>

## ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials

Represents a grade and the materials with this grade.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grade | [string](#string) |  | Grade. |
| laminateMaterial | [string](#string) | repeated | Material name. |






<a name="-ListLaminateThicknessUnitsRequest"></a>

## ListLaminateThicknessUnitsRequest

Request to list valid laminate thickness units.






<a name="-ListLaminateThicknessUnitsResponse"></a>

## ListLaminateThicknessUnitsResponse

Represents a list of valid laminate thickness units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| unit | [string](#string) | repeated | Thickness unit. |






<a name="-ListLaminatesRequest"></a>

## ListLaminatesRequest

Request for a list of laminates.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |






<a name="-ListLaminatesResponse"></a>

## ListLaminatesResponse

Represents the properties for all CCAs and their corresponding laminates.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| ccaLaminateProps | [ListLaminatesResponse.CCALaminateProp](#ListLaminatesResponse-CCALaminateProp) | repeated | List of CCAs and their corresponding laminate layers. |






<a name="-ListLaminatesResponse-CCALaminateProp"></a>

## ListLaminatesResponse.CCALaminateProp

Represents a CCA and its laminates.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| laminateProps | [ListLaminatesResponse.CCALaminateProp.LaminateProp](#ListLaminatesResponse-CCALaminateProp-LaminateProp) | repeated | List of laminate layers with associated properties for a specified CCA. |






<a name="-ListLaminatesResponse-CCALaminateProp-LaminateProp"></a>

## ListLaminatesResponse.CCALaminateProp.LaminateProp

Represents a laminate layer and its properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| layer | [string](#string) |  | An internal layer ID associated with this laminate layer. |
| manufacturer | [string](#string) |  | Manufacturer name of this material. |
| grade | [string](#string) |  | Grade of this material. |
| material | [string](#string) |  | Name of this material. |
| thickness | [double](#double) |  | Laminate thickness. |
| thicknessUnit | [string](#string) |  | Laminate thickness unit. |
| constructionStyle | [string](#string) |  | Construction style. |
| glassConstructions | [ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction](#ListLaminatesResponse-CCALaminateProp-LaminateProp-GlassConstruction) | repeated | List of Glass Construction info for a laminate layer. |
| fiberMaterial | [string](#string) |  | Fiber material if the construction style is glass. |
| conductorMaterial | [string](#string) |  | Conductor material. |
| conductorPercent | [string](#string) |  | Conductor percentage. |
| density | [double](#double) |  | Layer density. |
| CTExy | [double](#double) |  | CTExy. |
| CTEz | [double](#double) |  | CTEz. |
| Exy | [double](#double) |  | Exy. |
| Ez | [double](#double) |  | Ez. |






<a name="-ListLaminatesResponse-CCALaminateProp-LaminateProp-GlassConstruction"></a>

## ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction

Represents the layers with a glass construction.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| style | [string](#string) |  | Glass construction style. |
| resinPercentage | [double](#double) |  | Glass construction resin percentage. |
| thickness | [double](#double) |  | Glass construction thickness. |
| thicknessUnit | [string](#string) |  | Glass construction thickness unit. |






<a name="-UpdateConductorLayerRequest"></a>

## UpdateConductorLayerRequest

Represents the conductor layer properties requested to be updated.
To update a thickness, a thickness unit must be provided.
Any property left out or set to &#34;&#34; or 0.0 will not be updated.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| layer | [string](#string) |  | The layer ID associated with this conductor layer. |
| type | [string](#string) |  | Layer type (i.e. SIGNAL, POWER, SUBSTRATE). |
| material | [string](#string) |  | Name of this conductor material. |
| thickness | [double](#double) |  | Conductor layer thickness. |
| thicknessUnit | [string](#string) |  | Conductor layer thickness unit. |
| conductorPercent | [string](#string) |  | Conductor percentage. |
| resinMaterial | [string](#string) |  | Resin material. |






<a name="-UpdateLaminateRequest"></a>

## UpdateLaminateRequest

Represents the laminate properties requested to be updated.
To update the material, valid values must be provided for manufacturer, grade, and material.
To update a thickness, a thickness unit must be provided.
Glass construction should only be set when the construction style is not the &#34;DEFAULT&#34; value.
Any property left out or set to &#34;&#34; or 0.0 will not be updated.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| layer | [string](#string) |  | The internal layer ID associated with this laminate layer. |
| manufacturer | [string](#string) |  | Manufacturer name of this material. Must be provided along with grade and material name. |
| grade | [string](#string) |  | Grade of this material. |
| material | [string](#string) |  | Name of this material. |
| thickness | [double](#double) |  | Laminate thickness. |
| thicknessUnit | [string](#string) |  | Laminate thickness unit. |
| constructionStyle | [string](#string) |  | Construction style. |
| glassConstruction | [UpdateLaminateRequest.GlassConstruction](#UpdateLaminateRequest-GlassConstruction) | repeated | List of Glass Construction info for a laminate layer. |
| fiberMaterial | [string](#string) |  | Fiber material. Only updated if glass construction is selected. |
| conductorMaterial | [string](#string) |  | Conductor material. |
| conductorPercent | [string](#string) |  | Conductor percentage. |






<a name="-UpdateLaminateRequest-GlassConstruction"></a>

## UpdateLaminateRequest.GlassConstruction

Represents the layers with a glass construction.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| style | [string](#string) |  | Glass construction style. |
| resinPercentage | [double](#double) |  | Glass construction resin percentage. |
| thickness | [double](#double) |  | Glass construction thickness. |
| thicknessUnit | [string](#string) |  | Glass construction thickness unit. |





 

 

 


<a name="-SherlockStackupService"></a>

## SherlockStackupService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| listLaminates | [.ListLaminatesRequest](#ListLaminatesRequest) | [.ListLaminatesResponse](#ListLaminatesResponse) | Returns a list of project&#39;s CCAs and their laminates. |
| updateLaminate | [.UpdateLaminateRequest](#UpdateLaminateRequest) | [.ReturnCode](#ReturnCode) | Update properties for a given laminate layer. |
| listLaminateThicknessUnits | [.ListLaminateThicknessUnitsRequest](#ListLaminateThicknessUnitsRequest) | [.ListLaminateThicknessUnitsResponse](#ListLaminateThicknessUnitsResponse) | List all the supported laminate layer thickness units. |
| listConductorMaterials | [.ListConductorMaterialsRequest](#ListConductorMaterialsRequest) | [.ListConductorMaterialsResponse](#ListConductorMaterialsResponse) | List all conductor materials. |
| listFiberMaterials | [.ListFiberMaterialsRequest](#ListFiberMaterialsRequest) | [.ListFiberMaterialsResponse](#ListFiberMaterialsResponse) | List all fiber materials. |
| listLaminateMaterialsManufacturers | [.ListLaminateMaterialsManufacturersRequest](#ListLaminateMaterialsManufacturersRequest) | [.ListLaminateMaterialsManufacturersResponse](#ListLaminateMaterialsManufacturersResponse) | List all laminate materials manufacturers. |
| listLaminateMaterials | [.ListLaminateMaterialsRequest](#ListLaminateMaterialsRequest) | [.ListLaminateMaterialsResponse](#ListLaminateMaterialsResponse) | List all laminate materials (both based on manufacturer specified or without). If manufacturer is empty or not provided, then all manufacturers and their laminate materials will be returned. If a manufacturer is provided, then only that manufacturer&#39;s laminate materials will be returned. |
| listConstructionStyles | [.ListConstructionStylesRequest](#ListConstructionStylesRequest) | [.ListConstructionStylesResponse](#ListConstructionStylesResponse) | List all construction styles. |
| listConductorLayers | [.ListConductorLayersRequest](#ListConductorLayersRequest) | [.ListConductorLayersResponse](#ListConductorLayersResponse) | Returns a list of project&#39;s CCAs and their conductor layers. |
| updateConductorLayer | [.UpdateConductorLayerRequest](#UpdateConductorLayerRequest) | [.ReturnCode](#ReturnCode) | Update properties for a given conductor layer. |
| getLayerCount | [.GetLayerCountRequest](#GetLayerCountRequest) | [.GetLayerCountResponse](#GetLayerCountResponse) | Returns the number of stackup layers. |
| getTotalConductorThickness | [.GetTotalConductorThicknessRequest](#GetTotalConductorThicknessRequest) | [.GetTotalConductorThicknessResponse](#GetTotalConductorThicknessResponse) | Returns the total thickness for all conductor layers. |
| getStackupProps | [.GetStackupPropsRequest](#GetStackupPropsRequest) | [.GetStackupPropsResponse](#GetStackupPropsResponse) | Returns a summary of the stackup properties. |
| genStackup | [.GenStackupRequest](#GenStackupRequest) | [.ReturnCode](#ReturnCode) | Generate stackup layers. |

 



