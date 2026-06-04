# SherlockStackupService.proto

Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

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

## GetLayerCountRequest

Request the number of layers in the stackup.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |

## GetLayerCountResponse

Represents the number of layers in the stackup.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| count | [int32](#int32) |  | Number of stackup layers. |

## GetStackupPropsRequest

Request a summary of the stackup properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |

## GetStackupPropsResponse

Represents a summary of the stackup properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| boardDimension | [string](#string) |  | Board dimension. |
| boardThickness | [string](#string) |  | Board thickness. |
| density | [string](#string) |  | Board density. |
| conductorLayersCnt | [string](#string) |  | Number of conductor layers. |
| ctExy | [string](#string) |  | CTExy. |
| ctEz | [string](#string) |  | CTEz. |
| exy | [string](#string) |  | Exy. |
| ez | [string](#string) |  | Ez. |

## GetTotalConductorThicknessRequest

Request the total thickness on all conductor layers in a stackup.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| thicknessUnit | [string](#string) |  | Conductor layer thickness unit. |

## GetTotalConductorThicknessResponse

Represents the number of layers in the stackup.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| totalThickness | [double](#double) |  | Total thickness. |

## ListConductorLayersRequest

Request for a list of conductor layers.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

## ListConductorLayersResponse

Represents the properties for all CCAs and their corresponding conductor layers.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| ccaConductorLayerProps | [ListConductorLayersResponse.CCAConductorLayerProp](#listconductorlayersresponse.ccaconductorlayerprop) | repeated | List of CCAs and their associated conductor layers for a specified project. |

## ListConductorLayersResponse.CCAConductorLayerProp

Represents a CCA and its conductor layers.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| conductorLayerProps | [ListConductorLayersResponse.CCAConductorLayerProp.ConductorLayerProp](#listconductorlayersresponse.ccaconductorlayerprop.conductorlayerprop) | repeated | List of conductor layers and their associated properties for a specified CCA. |

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

## ListConductorMaterialsRequest

Request to list valid conductor materials.


## ListConductorMaterialsResponse

Represents a list of valid conductor materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| conductorMaterial | [string](#string) | repeated | Conductor material name. |

## ListConstructionStylesRequest

Request to list valid construction styles.


## ListConstructionStylesResponse

Represents a list of valid construction styles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| constructionStyle | [string](#string) | repeated | Construction style. |

## ListFiberMaterialsRequest

Request to list valid fiber materials.


## ListFiberMaterialsResponse

Represents a list of valid fiber materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| fiberMaterial | [string](#string) | repeated | Fiber material name. |

## ListLaminateMaterialsManufacturersRequest

Request to list valid names of materials manufacturers.


## ListLaminateMaterialsManufacturersResponse

Represents a list of valid names of materials manufacturers.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| manufacturer | [string](#string) | repeated | Manufacturer name. |

## ListLaminateMaterialsRequest

Request to list materials from a given manufacturer.
If manufacturer is empty, all manufacturers and their materials will be returned.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| manufacturer | [string](#string) |  | Manufacturer name. |

## ListLaminateMaterialsResponse

Represents a list of materials from a given manufacturer.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| manufacturerMaterials | [ListLaminateMaterialsResponse.ManufacturerMaterials](#listlaminatematerialsresponse.manufacturermaterials) | repeated | List of manufacturers and their associated grades and materials. |

## ListLaminateMaterialsResponse.ManufacturerMaterials




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| manufacturer | [string](#string) |  | Manufacturer name. |
| gradeMaterials | [ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials](#listlaminatematerialsresponse.manufacturermaterials.gradematerials) | repeated | List of Grades and their associated materials. |

## ListLaminateMaterialsResponse.ManufacturerMaterials.GradeMaterials

Represents a grade and the materials with this grade.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grade | [string](#string) |  | Grade. |
| laminateMaterial | [string](#string) | repeated | Material name. |

## ListLaminateThicknessUnitsRequest

Request to list valid laminate thickness units.


## ListLaminateThicknessUnitsResponse

Represents a list of valid laminate thickness units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| unit | [string](#string) | repeated | Thickness unit. |

## ListLaminatesRequest

Request for a list of laminates.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |

## ListLaminatesResponse

Represents the properties for all CCAs and their corresponding laminates.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| ccaLaminateProps | [ListLaminatesResponse.CCALaminateProp](#listlaminatesresponse.ccalaminateprop) | repeated | List of CCAs and their corresponding laminate layers. |

## ListLaminatesResponse.CCALaminateProp

Represents a CCA and its laminates.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The CCA name. |
| laminateProps | [ListLaminatesResponse.CCALaminateProp.LaminateProp](#listlaminatesresponse.ccalaminateprop.laminateprop) | repeated | List of laminate layers with associated properties for a specified CCA. |

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
| glassConstructions | [ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction](#listlaminatesresponse.ccalaminateprop.laminateprop.glassconstruction) | repeated | List of Glass Construction info for a laminate layer. |
| fiberMaterial | [string](#string) |  | Fiber material if the construction style is glass. |
| conductorMaterial | [string](#string) |  | Conductor material. |
| conductorPercent | [string](#string) |  | Conductor percentage. |
| density | [double](#double) |  | Layer density. |
| CTExy | [double](#double) |  | CTExy. |
| CTEz | [double](#double) |  | CTEz. |
| Exy | [double](#double) |  | Exy. |
| Ez | [double](#double) |  | Ez. |

## ListLaminatesResponse.CCALaminateProp.LaminateProp.GlassConstruction

Represents the layers with a glass construction.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| style | [string](#string) |  | Glass construction style. |
| resinPercentage | [double](#double) |  | Glass construction resin percentage. |
| thickness | [double](#double) |  | Glass construction thickness. |
| thicknessUnit | [string](#string) |  | Glass construction thickness unit. |

## UpdateConductorLayerRequest

Represents the conductor layer properties requested to be updated.
To update a thickness, a thickness unit must be provided.
Any property left out or set to "" or 0.0 will not be updated.


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

## UpdateLaminateRequest

Represents the laminate properties requested to be updated.
To update the material, valid values must be provided for manufacturer, grade, and material.
To update a thickness, a thickness unit must be provided.
Glass construction should only be set when the construction style is not the "DEFAULT" value.
Any property left out or set to "" or 0.0 will not be updated.


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
| glassConstruction | [UpdateLaminateRequest.GlassConstruction](#updatelaminaterequest.glassconstruction) | repeated | List of Glass Construction info for a laminate layer. |
| fiberMaterial | [string](#string) |  | Fiber material. Only updated if glass construction is selected. |
| conductorMaterial | [string](#string) |  | Conductor material. |
| conductorPercent | [string](#string) |  | Conductor percentage. |

## UpdateLaminateRequest.GlassConstruction

Represents the layers with a glass construction.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| style | [string](#string) |  | Glass construction style. |
| resinPercentage | [double](#double) |  | Glass construction resin percentage. |
| thickness | [double](#double) |  | Glass construction thickness. |
| thicknessUnit | [string](#string) |  | Glass construction thickness unit. |



## SherlockStackupService



| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| listLaminates | [.ListLaminatesRequest](#listlaminatesrequest) | [.ListLaminatesResponse](#listlaminatesresponse) | Returns a list of project's CCAs and their laminates. |
| updateLaminate | [.UpdateLaminateRequest](#updatelaminaterequest) | [.ReturnCode](#returncode) | Update properties for a given laminate layer. |
| listLaminateThicknessUnits | [.ListLaminateThicknessUnitsRequest](#listlaminatethicknessunitsrequest) | [.ListLaminateThicknessUnitsResponse](#listlaminatethicknessunitsresponse) | List all the supported laminate layer thickness units. |
| listConductorMaterials | [.ListConductorMaterialsRequest](#listconductormaterialsrequest) | [.ListConductorMaterialsResponse](#listconductormaterialsresponse) | List all conductor materials. |
| listFiberMaterials | [.ListFiberMaterialsRequest](#listfibermaterialsrequest) | [.ListFiberMaterialsResponse](#listfibermaterialsresponse) | List all fiber materials. |
| listLaminateMaterialsManufacturers | [.ListLaminateMaterialsManufacturersRequest](#listlaminatematerialsmanufacturersrequest) | [.ListLaminateMaterialsManufacturersResponse](#listlaminatematerialsmanufacturersresponse) | List all laminate materials manufacturers. |
| listLaminateMaterials | [.ListLaminateMaterialsRequest](#listlaminatematerialsrequest) | [.ListLaminateMaterialsResponse](#listlaminatematerialsresponse) | List all laminate materials (both based on manufacturer specified or without).<br>If manufacturer is empty or not provided, then all manufacturers and their laminate materials will be returned.<br>If a manufacturer is provided, then only that manufacturer's laminate materials will be returned. |
| listConstructionStyles | [.ListConstructionStylesRequest](#listconstructionstylesrequest) | [.ListConstructionStylesResponse](#listconstructionstylesresponse) | List all construction styles. |
| listConductorLayers | [.ListConductorLayersRequest](#listconductorlayersrequest) | [.ListConductorLayersResponse](#listconductorlayersresponse) | Returns a list of project's CCAs and their conductor layers. |
| updateConductorLayer | [.UpdateConductorLayerRequest](#updateconductorlayerrequest) | [.ReturnCode](#returncode) | Update properties for a given conductor layer. |
| getLayerCount | [.GetLayerCountRequest](#getlayercountrequest) | [.GetLayerCountResponse](#getlayercountresponse) | Returns the number of stackup layers. |
| getTotalConductorThickness | [.GetTotalConductorThicknessRequest](#gettotalconductorthicknessrequest) | [.GetTotalConductorThicknessResponse](#gettotalconductorthicknessresponse) | Returns the total thickness for all conductor layers. |
| getStackupProps | [.GetStackupPropsRequest](#getstackuppropsrequest) | [.GetStackupPropsResponse](#getstackuppropsresponse) | Returns a summary of the stackup properties. |
| genStackup | [.GenStackupRequest](#genstackuprequest) | [.ReturnCode](#returncode) | Generate stackup layers. |

