# SherlockLayerService.proto

Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.

## AddModelingRegionRequest

Request to add one or more modeling regions to a specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project to add the modeling regions to. |
| modelingRegions | [ModelingRegion](#modelingregion) | repeated | List of modeling regions to add to the project. |

## AddPottingRegionRequest

Request to add a potting region.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project to add the potting regions to. |
| pottingRegions | [AddPottingRegionRequest.PottingRegion](#addpottingregionrequest.pottingregion) | repeated | The potting regions to add. |

## AddPottingRegionRequest.PottingRegion




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The name of the CCA. |
| pottingID | [string](#string) | optional | The potting ID. |
| pottingSide | [string](#string) | optional | The potting side, options are "TOP", "BOT", or "BOTTOM". |
| pottingMaterial | [string](#string) | optional | The potting material. |
| pottingUnits | [string](#string) | optional | The units to use for the potting region. |
| pottingThickness | [double](#double) | optional | The potting thickness. |
| pottingStandoff | [double](#double) | optional | The potting standoff. |
| polygonalShape | [PolygonalShape](#polygonalshape) |  | Used to add a region with a polygonal shape. |
| rectangularShape | [RectangularShape](#rectangularshape) |  | Used to add a region with a rectangular shape. |
| slotShape | [SlotShape](#slotshape) |  | Used to add a region with a slot shape. |
| circularShape | [CircularShape](#circularshape) |  | Used to add a region with a circular shape. |
| pCBShape | [PCBShape](#pcbshape) |  | Used to add a region with a PCB shape. |

## CircularShape




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| diameter | [double](#double) | optional | The diameter of the circle. |
| nodeCount | [uint32](#uint32) | optional | The number of nodes. |
| centerX | [double](#double) | optional | The x coordinate of the center of the circle. |
| centerY | [double](#double) | optional | The x coordinate of the center of the circle. |
| rotation | [double](#double) | optional | The rotation of the shape in degrees. |

## CopyModelingRegionRequest

Request to copy one or more modeling regions in a specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project. |
| copyRegions | [CopyModelingRegionRequest.CopyModelingRegionInfo](#copymodelingregionrequest.copymodelingregioninfo) | repeated | List of modeling regions to copy along with their corresponding "copy to" parameters. |

## CopyModelingRegionRequest.CopyModelingRegionInfo




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| regionId | [string](#string) |  | Region ID of the existing modeling region to copy. |
| regionIdCopy | [string](#string) |  | Region ID of the modeling region copy. Must be unique. |
| centerX | [double](#double) |  | The center x coordinate of the modeling region copy -- used for location placement in the Layer Viewer. |
| centerY | [double](#double) |  | The center y coordinate of the modeling region copy -- used for location placement in the Layer Viewer. |

## CopyPottingRegionRequest

Request to copy 1 or more potting regions.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project that contains the potting region(s) to copy. |
| pottingRegionCopyData | [CopyPottingRegionRequest.PottingRegionCopyData](#copypottingregionrequest.pottingregioncopydata) | repeated | List of information needed to copy a specific Potting Region. |

## CopyPottingRegionRequest.PottingRegionCopyData

Potting region data used to identify a single pre-existing potting region which should be copied.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The name of the CCA. |
| pottingID | [string](#string) |  | The potting ID to copy from. |
| copyPottingID | [string](#string) |  | The potting ID to be used for the new copy. |
| centerX | [double](#double) | optional | The x coordinate for the center of the copied potting region. |
| centerY | [double](#double) | optional | The y coordinate for the center of the copied potting region. |

## DeleteAllICTFixturesRequest

Request to delete all ICT fixtures in specific CCA of specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |

## DeleteAllMountPointsRequest

Request to delete all mount points in specific CCA of specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |

## DeleteAllTestPointsRequest

Request to delete all ICT fixtures in specific CCA of specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |

## DeleteModelingRegionRequest

Request to delete one or more modeling regions for a specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project. |
| deleteRegions | [DeleteModelingRegionRequest.DeleteModelingRegionInfo](#deletemodelingregionrequest.deletemodelingregioninfo) | repeated | List of modeling regions to delete in the project. |

## DeleteModelingRegionRequest.DeleteModelingRegionInfo




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| regionId | [string](#string) |  | Unique region ID of the modeling region to delete. |

## DeletePottingRegionRequest

Request to delete 1 or more potting regions.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project that contains the potting region(s) to delete. |
| pottingRegionDeleteData | [DeletePottingRegionRequest.PottingRegionDeleteData](#deletepottingregionrequest.pottingregiondeletedata) | repeated | List of information needed to delete a specific Potting Region. |

## DeletePottingRegionRequest.PottingRegionDeleteData

Potting region data used to identify a single pre-existing potting region which should be deleted.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The name of the CCA. |
| pottingID | [string](#string) |  | The potting ID. |

## ExportAllICTFixturesRequest

Request to export all ICT fixtures and their properties into a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| units | [string](#string) |  | Units used in exporting. |
| filePath | [string](#string) |  | The filepath of the CSV file to be exported. |

## ExportAllMountPointsRequest

Request to export all mount points and their properties into a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| units | [string](#string) |  | Units used in exporting. |
| filePath | [string](#string) |  | The filepath of the CSV file to be exported. |

## ExportAllTestPointsRequest

Request to export all test points and their properties into a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| lengthUnits | [string](#string) |  | Length Units used in exporting. |
| displacementUnits | [string](#string) |  | Displacement Units used in exporting. |
| forceUnits | [string](#string) |  | Force Units used in exporting. |
| filePath | [string](#string) |  | The filepath of the CSV file to be exported. |

## GetMountPointBoundariesRequest

Request to list the valid mount point boundaries.


## GetMountPointBoundariesResponse

Represents a list of valid mount point boundaries.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| boundary | [string](#string) | repeated | Mount Point boundary. |

## GetMountPointChassisMaterialsRequest

Request to list the valid mount point chassis materials.


## GetMountPointChassisMaterialsResponse

Represents a list of valid mount point chassis materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| chassisMaterial | [string](#string) | repeated | Mount Point chassis material. |

## GetMountPointShapeTypesRequest

Request to list the valid mount point shape types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mountPointType | [string](#string) |  | Mount Point Type. Supported values are: Mount Hole, Mount Pad, Standoff, and Support Pin. |

## GetMountPointShapeTypesResponse

Represents a list of valid mount point shape types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| type | [string](#string) | repeated | Mount Point Shape Type. |

## GetMountPointSidesRequest

Request to list the valid mount point sides.


## GetMountPointSidesResponse

Represents a list of valid mount point sides.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| side | [string](#string) | repeated | Mount Point side. |

## GetMountPointTypesRequest

Request to list the valid mount point types.


## GetMountPointTypesResponse

Represents a list of valid mount point types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| type | [string](#string) | repeated | Mount Point Type. |

## GetMountPointUnitsRequest

Request to list the valid mount point units.


## GetMountPointUnitsResponse

Represents a list of valid mount point units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| units | [string](#string) | repeated | Mount Point units. |

## GetMountPointsPropertiesRequest

Request to list the valid mount point chassis materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| mountPointIDs | [string](#string) |  | A comma separated list of mount point id for a list of mount point, or a mount id for one part. |

## GetMountPointsPropertiesResponse

Represents a list of valid mount point properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| mountPointsProperties | [MountPointProperties](#mountpointproperties) | repeated | Mount point properties. |

## ModelingRegion




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) | optional | Name of the CCA. |
| regionId | [string](#string) | optional | Unique modeling region ID. |
| regionUnits | [string](#string) | optional | Modeling region units. |
| modelMode | [ModelingRegion.ModelingMode](#modelingregion.modelingmode) | optional | Mode that specified how the region is used. |
| polygonalShape | [PolygonalShape](#polygonalshape) |  | Defined by N points that form a convex polygon. |
| rectangularShape | [RectangularShape](#rectangularshape) |  | Defined by 4 points that form a rectangle. |
| slotShape | [SlotShape](#slotshape) |  | Defined by 8 points that form a rectangle with rounded ends. |
| circularShape | [CircularShape](#circularshape) |  | Defined by N points that form a circle. |
| pcbModelProps | [ModelingRegion.PCBModelingProperties](#modelingregion.pcbmodelingproperties) | optional | Mesh properties for the modeling region. |
| traceModelProps | [ModelingRegion.TraceModelingProperties](#modelingregion.tracemodelingproperties) | optional | Trace modeling properties for the region. |
| regionIdReplacement | [string](#string) | optional | Represents a unique region id that will replace the existing regionId value during |

## ModelingRegion.PCBModelingProperties




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exportModelType | [ModelingRegion.PCBModelingProperties.ExportModelType](#modelingregion.pcbmodelingproperties.exportmodeltype) |  | The type of model to be generated for a given modeling region. |
| elemOrder | [ModelingRegion.ElementOrder](#modelingregion.elementorder) |  | The type of 3D elements to be created for the PCB in the modeling region. |
| maxMeshSize | [double](#double) |  | The maximum size of the mesh to be used in the region. |
| maxMeshSizeUnits | [string](#string) |  | Units for the maximum mesh size. |
| quadsPreferred | [bool](#bool) |  | If true, then the meshing engine should attempt to generate quad-shaped elements when creating the mesh. |

## ModelingRegion.TraceModelingProperties




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| traceModelType | [ModelingRegion.TraceModelingProperties.TraceModelingType](#modelingregion.tracemodelingproperties.tracemodelingtype) |  | Specifies if trace modeling should be performed inside of the region. |
| elemOrder | [ModelingRegion.ElementOrder](#modelingregion.elementorder) | optional | The type of 3D elements to be created for traces in the region when trace modeling is enabled. |
| traceMeshSize | [double](#double) | optional | The maximum mesh size to be used in the region when trace modeling is enabled. |
| traceMeshSizeUnits | [string](#string) | optional | Units for the maximum mesh size when trace modeling is enabled. |

## MountPointProperties

Properties of mount point, the properties may varies from the mount point type and mount point shape.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ID | [string](#string) |  | Mount point ID. |
| type | [string](#string) |  | Mount point type. |
| shape | [string](#string) |  | Shape type. |
| units | [string](#string) |  | Mount point units. |
| x | [string](#string) |  | Center X. |
| y | [string](#string) |  | Center Y. |
| length | [string](#string) |  | Length. |
| width | [string](#string) |  | Width. |
| diameter | [string](#string) |  | Diameter. |
| nodes | [string](#string) |  | # of nodes. |
| rotation | [string](#string) |  | Rotation in degrees. |
| side | [string](#string) |  | Mount point side. |
| height | [string](#string) |  | Mount point height. |
| material | [string](#string) |  | Mount point material. |
| boundary | [string](#string) |  | Boundary Pt(s). |
| constraints | [string](#string) |  | FEA constraints. |
| polygon | [string](#string) |  | Coordinates of points. |
| state | [string](#string) |  | Mount point state. |
| chassisMaterial | [string](#string) |  | Chassis material. |

## PCBShape




## PolygonalShape




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| points | [PolygonalShape.Point](#polygonalshape.point) | repeated | The points used to define the polygonal shape, must be >= 3. |
| rotation | [double](#double) | optional | The rotation of the shape in degrees. |

## PolygonalShape.Point




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  | The x coordinate of the point. |
| y | [double](#double) |  | The y coordinate of the point. |

## PottingRegion

Data that fully describes a potting region.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The name of the CCA. |
| pottingID | [string](#string) | optional | The potting ID. |
| pottingSide | [string](#string) | optional | The potting side, options are "TOP", "BOT", or "BOTTOM". |
| pottingMaterial | [string](#string) | optional | The potting material. |
| pottingUnits | [string](#string) | optional | The units to use for the potting region. |
| pottingThickness | [double](#double) | optional | The potting thickness. |
| pottingStandoff | [double](#double) | optional | The potting standoff. |
| polygonalShape | [PolygonalShape](#polygonalshape) |  | Used to add a region with a polygonal shape. |
| rectangularShape | [RectangularShape](#rectangularshape) |  | Used to add a region with a rectangular shape. |
| slotShape | [SlotShape](#slotshape) |  | Used to add a region with a slot shape. |
| circularShape | [CircularShape](#circularshape) |  | Used to add a region with a circular shape. |
| pCBShape | [PCBShape](#pcbshape) |  | Used to add a region with a PCB shape. |

## RectangularShape




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| length | [double](#double) | optional | The length of the rectangle. |
| width | [double](#double) | optional | The width of the rectangle. |
| centerX | [double](#double) | optional | The x coordinate of the center of the rectangle. |
| centerY | [double](#double) | optional | The y coordinate of the center of the rectangle. |
| rotation | [double](#double) | optional | The rotation of the rectangle in degrees. |

## SlotShape




| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| length | [double](#double) | optional | The length of the slot shape. |
| width | [double](#double) | optional | The width of the slot shape. |
| nodeCount | [uint32](#uint32) | optional | The number of nodes. |
| centerX | [double](#double) | optional | The x coordinate of the center of the slot shape. |
| centerY | [double](#double) | optional | The x coordinate of the center of the slot shape. |
| rotation | [double](#double) | optional | The rotation of the shape in degrees. |

## UpdateICTFixturesByFileRequest

Request to update ICT fixtures properties of a CCA from a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| filePath | [string](#string) |  | The filepath of the CSV file containing the ICT fixtures properties. |

## UpdateICTFixturesResponse

Contains the status of the update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateError | [string](#string) | repeated | ICT fixtures update error messages. |

## UpdateModelingRegionRequest

Request to update one or more modeling regions for a specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project. |
| modelingRegions | [ModelingRegion](#modelingregion) | repeated | List of modeling regions to update in the project. The regionId for |

## UpdateMountPointsByFileRequest

Request to update mount points properties of a CCA from a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| filePath | [string](#string) |  | The filepath of the CSV file containing the mount points properties. |

## UpdateMountPointsRequest

Request to update mount points properties of a CCA from a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| mountPointsProperties | [MountPointProperties](#mountpointproperties) | repeated | Mount point properties. |

## UpdateMountPointsResponse

Contains the status of the update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Mount Points update error messages. |

## UpdatePottingRegionRequest

Request to update 1 or more potting regions in a single CCA.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project that contains the potting region(s) to update. |
| updatePottingRegions | [UpdatePottingRegionRequest.PottingRegionUpdateData](#updatepottingregionrequest.pottingregionupdatedata) | repeated | List of data needed to update each potting region. |

## UpdatePottingRegionRequest.PottingRegionUpdateData

Potting region data used to describe a single potting region and identify which one should be updated.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pottingRegionIDToUpdate | [string](#string) |  | Data that uniquely identifies the potting region being updated. |
| pottingRegion | [PottingRegion](#pottingregion) |  | Data that describes a potting region. |

## UpdateTestPointsByFileRequest

Request to update test points properties of a CCA from a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| filePath | [string](#string) |  | The filepath of the CSV file containing the test points properties. |

## UpdateTestPointsResponse

Contains the status of the update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#returncode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Test Points update error messages. |


## ElementOrder



| Name | Number | Description |
| ---- | ------ | ----------- |
| First_Order | 0 | First order (Linear) 3D elements should be created for the PCB in the modeling region. |
| Second_Order | 1 | Second order (Quadratic) 3D elements should be created for the PCB in the modeling region. |
| Solid_Shell | 2 | Used for relatively flat elements, like those found in a PCB layer to reduce modeling generation time. |

## ModelingMode



| Name | Number | Description |
| ---- | ------ | ----------- |
| Enabled | 0 | Use the modeling region. |
| Disabled | 1 | Ignore the modeling region. |
| Excluded | 2 | Don't generate any elements for the region. |

## ExportModelType



| Name | Number | Description |
| ---- | ------ | ----------- |
| Default | 0 | Region type is based on the Mesh Type property defined in the PCB Modeling tab in the FEA Model Export dialog. |
| Sherlock | 1 | Use mesh elements generated by Sherlock to model the region. |
| Sweep | 2 | Use mesh elements generated by the FEA tool to model the region. |
| None | 3 | Define only geometric volumes for the region, without generating mesh elements. |

## TraceModelingType



| Name | Number | Description |
| ---- | ------ | ----------- |
| Default | 0 | Trace modeling type is based on the Trace Modeling property defined in the Trace Modeling tab in the FEA Model Export dialog. |
| Enabled | 1 | Trace modeling is enabled for this region. |
| Disabled | 2 | Trace modeling is disabled for this region. |


## SherlockLayerService



| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| addPottingRegion | [.AddPottingRegionRequest](#addpottingregionrequest) | [.ReturnCode](#returncode) | Add a potting region with the specified shape and properties. |
| updatePottingRegion | [.UpdatePottingRegionRequest](#updatepottingregionrequest) | [.ReturnCode](#returncode) stream | Updates a potting region with the specified shape and properties. |
| deletePottingRegion | [.DeletePottingRegionRequest](#deletepottingregionrequest) | [.ReturnCode](#returncode) stream | Deletes a potting region based on given identification properties. |
| copyPottingRegion | [.CopyPottingRegionRequest](#copypottingregionrequest) | [.ReturnCode](#returncode) stream | Copies a potting region based on given identification properties. |
| deleteAllICTFixtures | [.DeleteAllICTFixturesRequest](#deleteallictfixturesrequest) | [.ReturnCode](#returncode) | Delete all ICT fixtures in specific CCA of specific project. |
| deleteAllMountPoints | [.DeleteAllMountPointsRequest](#deleteallmountpointsrequest) | [.ReturnCode](#returncode) | Delete all mount points in specific CCA of specific project. |
| deleteAllTestPoints | [.DeleteAllTestPointsRequest](#deletealltestpointsrequest) | [.ReturnCode](#returncode) | Delete all test points in specific CCA of specific project. |
| exportAllMountPoints | [.ExportAllMountPointsRequest](#exportallmountpointsrequest) | [.ReturnCode](#returncode) | Export all mount points and their properties into a CSV formatted file. |
| exportAllICTFixtures | [.ExportAllICTFixturesRequest](#exportallictfixturesrequest) | [.ReturnCode](#returncode) | Export all ICT fixtures and their properties into a CSV formatted file. |
| exportAllTestPoints | [.ExportAllTestPointsRequest](#exportalltestpointsrequest) | [.ReturnCode](#returncode) | Export all test points and their properties into a CSV formatted file. |
| getMountPointBoundaries | [.GetMountPointBoundariesRequest](#getmountpointboundariesrequest) | [.GetMountPointBoundariesResponse](#getmountpointboundariesresponse) | Get a list of valid mount point boundaries. |
| getMountPointChassisMaterials | [.GetMountPointChassisMaterialsRequest](#getmountpointchassismaterialsrequest) | [.GetMountPointChassisMaterialsResponse](#getmountpointchassismaterialsresponse) | Get a list of valid mount point chassis materials. |
| getMountPointsProperties | [.GetMountPointsPropertiesRequest](#getmountpointspropertiesrequest) | [.GetMountPointsPropertiesResponse](#getmountpointspropertiesresponse) | Get a list of valid mount point properties. |
| getMountPointShapeTypes | [.GetMountPointShapeTypesRequest](#getmountpointshapetypesrequest) | [.GetMountPointShapeTypesResponse](#getmountpointshapetypesresponse) | Get a list of valid mount point shape type values. |
| getMountPointSides | [.GetMountPointSidesRequest](#getmountpointsidesrequest) | [.GetMountPointSidesResponse](#getmountpointsidesresponse) | Get a list of valid mount point sides. |
| getMountPointTypes | [.GetMountPointTypesRequest](#getmountpointtypesrequest) | [.GetMountPointTypesResponse](#getmountpointtypesresponse) | Get a list of valid mount point type values. |
| getMountPointUnits | [.GetMountPointUnitsRequest](#getmountpointunitsrequest) | [.GetMountPointUnitsResponse](#getmountpointunitsresponse) | Get a list of valid mount point units. |
| updateICTFixturesByFile | [.UpdateICTFixturesByFileRequest](#updateictfixturesbyfilerequest) | [.UpdateICTFixturesResponse](#updateictfixturesresponse) | Update the ICT fixtures properties of a CCA from a CSV formatted file. This API could be used to add new ICT fixtures or update existing ones depending on the file contents.<br>If the ID specified already exists, then the properties for that ICT fixture will be updated.<br>If the ID specified does not already exist, or if the field is empty, then a new ICT fixture will be added with the specified properties.<br>The file format should be the same as the one produced from CCA -> Export ICT Fixtures. |
| updateMountPoints | [.UpdateMountPointsRequest](#updatemountpointsrequest) | [.UpdateMountPointsResponse](#updatemountpointsresponse) | Update mount points with specified properties. |
| updateMountPointsByFile | [.UpdateMountPointsByFileRequest](#updatemountpointsbyfilerequest) | [.UpdateMountPointsResponse](#updatemountpointsresponse) | Update the mount points properties of a CCA from a CSV formatted file. This API could be used to add new mount points or update existing ones depending on the file contents.<br>If the ID specified already exists, then the properties for that mount point will be updated.<br>If the ID specified does not already exist, or if the field is empty, then a new mount point will be added with the specified properties.<br>The file format should be the same as the one produced from CCA -> Export Mount Points. |
| updateTestPointsByFile | [.UpdateTestPointsByFileRequest](#updatetestpointsbyfilerequest) | [.UpdateTestPointsResponse](#updatetestpointsresponse) | Update the test points properties of a CCA from a CSV formatted file. This API could be used to add new test points or update existing ones depending on the file contents.<br>If the ID specified already exists, then the properties for that test point will be updated.<br>If the ID specified does not already exist, or if the field is empty, then a new test point will be added with the specified properties.<br>The file format should be the same as the one produced from CCA -> Export Test Points. |
| addModelingRegion | [.AddModelingRegionRequest](#addmodelingregionrequest) | [.ReturnCode](#returncode) | Add one or more modeling regions with the specified shapes and properties. |
| updateModelingRegion | [.UpdateModelingRegionRequest](#updatemodelingregionrequest) | [.ReturnCode](#returncode) | Update one or more modeling regions with the specified shapes and properties. |
| deleteModelingRegion | [.DeleteModelingRegionRequest](#deletemodelingregionrequest) | [.ReturnCode](#returncode) | Delete one or more existing modeling regions. |
| copyModelingRegion | [.CopyModelingRegionRequest](#copymodelingregionrequest) | [.ReturnCode](#returncode) | Copy one or more existing modeling regions. |


Back to [Top](#table-of-contents)

