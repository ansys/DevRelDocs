# SherlockLayerService.proto

Copyright 2023-2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="-AddModelingRegionRequest"></a>

## AddModelingRegionRequest

Request to add one or more modeling regions to a specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project to add the modeling regions to. |
| modelingRegions | [ModelingRegion](#ModelingRegion) | repeated | List of modeling regions to add to the project. |






<a name="-AddPottingRegionRequest"></a>

## AddPottingRegionRequest

Request to add a potting region.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project to add the potting regions to. |
| pottingRegions | [AddPottingRegionRequest.PottingRegion](#AddPottingRegionRequest-PottingRegion) | repeated | The potting regions to add. |






<a name="-AddPottingRegionRequest-PottingRegion"></a>

## AddPottingRegionRequest.PottingRegion



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | The name of the CCA. |
| pottingID | [string](#string) | optional | The potting ID, must be unique. |
| pottingSide | [string](#string) | optional | The potting side, options are &#34;TOP&#34;, &#34;BOT&#34;, or &#34;BOTTOM&#34;. |
| pottingMaterial | [string](#string) | optional | The potting material. |
| pottingUnits | [string](#string) | optional | The units to use for the potting region. |
| pottingThickness | [double](#double) | optional | The potting thickness. |
| pottingStandoff | [double](#double) | optional | The potting standoff. |
| polygonalShape | [PolygonalShape](#PolygonalShape) |  | Used to add a region with a polygonal shape. |
| rectangularShape | [RectangularShape](#RectangularShape) |  | Used to add a region with a rectangular shape. |
| slotShape | [SlotShape](#SlotShape) |  | Used to add a region with a slot shape. |
| circularShape | [CircularShape](#CircularShape) |  | Used to add a region with a circular shape. |
| pCBShape | [PCBShape](#PCBShape) |  | Used to add a region with a PCB shape. |






<a name="-CircularShape"></a>

## CircularShape



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| diameter | [double](#double) | optional | The diameter of the circle. |
| nodeCount | [uint32](#uint32) | optional | The number of nodes. |
| centerX | [double](#double) | optional | The x coordinate of the center of the circle. |
| centerY | [double](#double) | optional | The x coordinate of the center of the circle. |
| rotation | [double](#double) | optional | The rotation of the shape in degrees. |






<a name="-CopyModelingRegionRequest"></a>

## CopyModelingRegionRequest

Request to copy one or more modeling regions in a specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project. |
| copyRegions | [CopyModelingRegionRequest.CopyModelingRegionInfo](#CopyModelingRegionRequest-CopyModelingRegionInfo) | repeated | List of modeling regions to copy along with their corresponding &#34;copy to&#34; parameters. |






<a name="-CopyModelingRegionRequest-CopyModelingRegionInfo"></a>

## CopyModelingRegionRequest.CopyModelingRegionInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| regionId | [string](#string) |  | Region ID of the existing modeling region to copy. |
| regionIdCopy | [string](#string) |  | Region ID of the modeling region copy. Must be unique. |
| centerX | [double](#double) |  | The center x coordinate of the modeling region copy -- used for location placement in the Layer Viewer. |
| centerY | [double](#double) |  | The center y coordinate of the modeling region copy -- used for location placement in the Layer Viewer. |






<a name="-DeleteAllICTFixturesRequest"></a>

## DeleteAllICTFixturesRequest

Request to delete all ICT fixtures in specific CCA of specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |






<a name="-DeleteAllMountPointsRequest"></a>

## DeleteAllMountPointsRequest

Request to delete all mount points in specific CCA of specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |






<a name="-DeleteAllTestPointsRequest"></a>

## DeleteAllTestPointsRequest

Request to delete all ICT fixtures in specific CCA of specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |






<a name="-DeleteModelingRegionRequest"></a>

## DeleteModelingRegionRequest

Request to delete one or more modeling regions for a specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project. |
| deleteRegions | [DeleteModelingRegionRequest.DeleteModelingRegionInfo](#DeleteModelingRegionRequest-DeleteModelingRegionInfo) | repeated | List of modeling regions to delete in the project. |






<a name="-DeleteModelingRegionRequest-DeleteModelingRegionInfo"></a>

## DeleteModelingRegionRequest.DeleteModelingRegionInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) |  | Name of the CCA. |
| regionId | [string](#string) |  | Unique region ID of the modeling region to delete. |






<a name="-ExportAllICTFixturesRequest"></a>

## ExportAllICTFixturesRequest

Request to export all ICT fixtures and their properties into a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| units | [string](#string) |  | Units used in exporting. |
| filePath | [string](#string) |  | The filepath of the CSV file to be exported. |






<a name="-ExportAllMountPointsRequest"></a>

## ExportAllMountPointsRequest

Request to export all mount points and their properties into a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| units | [string](#string) |  | Units used in exporting. |
| filePath | [string](#string) |  | The filepath of the CSV file to be exported. |






<a name="-ExportAllTestPointsRequest"></a>

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






<a name="-GetMountPointBoundariesRequest"></a>

## GetMountPointBoundariesRequest

Request to list the valid mount point boundaries.






<a name="-GetMountPointBoundariesResponse"></a>

## GetMountPointBoundariesResponse

Represents a list of valid mount point boundaries.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| boundary | [string](#string) | repeated | Mount Point boundary. |






<a name="-GetMountPointChassisMaterialsRequest"></a>

## GetMountPointChassisMaterialsRequest

Request to list the valid mount point chassis materials.






<a name="-GetMountPointChassisMaterialsResponse"></a>

## GetMountPointChassisMaterialsResponse

Represents a list of valid mount point chassis materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| chassisMaterial | [string](#string) | repeated | Mount Point chassis material. |






<a name="-GetMountPointShapeTypesRequest"></a>

## GetMountPointShapeTypesRequest

Request to list the valid mount point shape types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| mountPointType | [string](#string) |  | Mount Point Type. Supported values are: Mount Hole, Mount Pad, Standoff, and Support Pin. |






<a name="-GetMountPointShapeTypesResponse"></a>

## GetMountPointShapeTypesResponse

Represents a list of valid mount point shape types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| type | [string](#string) | repeated | Mount Point Shape Type. |






<a name="-GetMountPointSidesRequest"></a>

## GetMountPointSidesRequest

Request to list the valid mount point sides.






<a name="-GetMountPointSidesResponse"></a>

## GetMountPointSidesResponse

Represents a list of valid mount point sides.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| side | [string](#string) | repeated | Mount Point side. |






<a name="-GetMountPointTypesRequest"></a>

## GetMountPointTypesRequest

Request to list the valid mount point types.






<a name="-GetMountPointTypesResponse"></a>

## GetMountPointTypesResponse

Represents a list of valid mount point types.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| type | [string](#string) | repeated | Mount Point Type. |






<a name="-GetMountPointUnitsRequest"></a>

## GetMountPointUnitsRequest

Request to list the valid mount point units.






<a name="-GetMountPointUnitsResponse"></a>

## GetMountPointUnitsResponse

Represents a list of valid mount point units.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| units | [string](#string) | repeated | Mount Point units. |






<a name="-GetMountPointsPropertiesRequest"></a>

## GetMountPointsPropertiesRequest

Request to list the valid mount point chassis materials.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| mountPointIDs | [string](#string) |  | A comma separated list of mount point id for a list of mount point, or a mount id for one part. |






<a name="-GetMountPointsPropertiesResponse"></a>

## GetMountPointsPropertiesResponse

Represents a list of valid mount point properties.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| mountPointsProperties | [MountPointProperties](#MountPointProperties) | repeated | Mount point properties. |






<a name="-ModelingRegion"></a>

## ModelingRegion



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ccaName | [string](#string) | optional | Name of the CCA. |
| regionId | [string](#string) | optional | Unique modeling region ID. |
| regionUnits | [string](#string) | optional | Modeling region units. |
| modelMode | [ModelingRegion.ModelingMode](#ModelingRegion-ModelingMode) | optional | Mode that specified how the region is used. |
| polygonalShape | [PolygonalShape](#PolygonalShape) |  | Defined by N points that form a convex polygon. |
| rectangularShape | [RectangularShape](#RectangularShape) |  | Defined by 4 points that form a rectangle. |
| slotShape | [SlotShape](#SlotShape) |  | Defined by 8 points that form a rectangle with rounded ends. |
| circularShape | [CircularShape](#CircularShape) |  | Defined by N points that form a circle. |
| pcbModelProps | [ModelingRegion.PCBModelingProperties](#ModelingRegion-PCBModelingProperties) | optional | Mesh properties for the modeling region. |
| traceModelProps | [ModelingRegion.TraceModelingProperties](#ModelingRegion-TraceModelingProperties) | optional | Trace modeling properties for the region. |
| regionIdReplacement | [string](#string) | optional | Represents a unique region id that will replace the existing regionId value during |






<a name="-ModelingRegion-PCBModelingProperties"></a>

## ModelingRegion.PCBModelingProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exportModelType | [ModelingRegion.PCBModelingProperties.ExportModelType](#ModelingRegion-PCBModelingProperties-ExportModelType) |  | The type of model to be generated for a given modeling region. |
| elemOrder | [ModelingRegion.ElementOrder](#ModelingRegion-ElementOrder) |  | The type of 3D elements to be created for the PCB in the modeling region. |
| maxMeshSize | [double](#double) |  | The maximum size of the mesh to be used in the region. |
| maxMeshSizeUnits | [string](#string) |  | Units for the maximum mesh size. |
| quadsPreferred | [bool](#bool) |  | If true, then the meshing engine should attempt to generate quad-shaped elements when creating the mesh. |






<a name="-ModelingRegion-TraceModelingProperties"></a>

## ModelingRegion.TraceModelingProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| traceModelType | [ModelingRegion.TraceModelingProperties.TraceModelingType](#ModelingRegion-TraceModelingProperties-TraceModelingType) |  | Specifies if trace modeling should be performed inside of the region. |
| elemOrder | [ModelingRegion.ElementOrder](#ModelingRegion-ElementOrder) | optional | The type of 3D elements to be created for traces in the region when trace modeling is enabled. |
| traceMeshSize | [double](#double) | optional | The maximum mesh size to be used in the region when trace modeling is enabled. |
| traceMeshSizeUnits | [string](#string) | optional | Units for the maximum mesh size when trace modeling is enabled. |






<a name="-MountPointProperties"></a>

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






<a name="-PCBShape"></a>

## PCBShape







<a name="-PolygonalShape"></a>

## PolygonalShape



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| points | [PolygonalShape.Point](#PolygonalShape-Point) | repeated | The points used to define the polygonal shape, must be &gt;= 3. |
| rotation | [double](#double) | optional | The rotation of the shape in degrees. |






<a name="-PolygonalShape-Point"></a>

## PolygonalShape.Point



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  | The x coordinate of the point. |
| y | [double](#double) |  | The y coordinate of the point. |






<a name="-RectangularShape"></a>

## RectangularShape



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| length | [double](#double) | optional | The length of the rectangle. |
| width | [double](#double) | optional | The width of the rectangle. |
| centerX | [double](#double) | optional | The x coordinate of the center of the rectangle. |
| centerY | [double](#double) | optional | The y coordinate of the center of the rectangle. |
| rotation | [double](#double) | optional | The rotation of the rectangle in degrees. |






<a name="-SlotShape"></a>

## SlotShape



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| length | [double](#double) | optional | The length of the slot shape. |
| width | [double](#double) | optional | The width of the slot shape. |
| nodeCount | [uint32](#uint32) | optional | The number of nodes. |
| centerX | [double](#double) | optional | The x coordinate of the center of the slot shape. |
| centerY | [double](#double) | optional | The x coordinate of the center of the slot shape. |
| rotation | [double](#double) | optional | The rotation of the shape in degrees. |






<a name="-UpdateICTFixturesByFileRequest"></a>

## UpdateICTFixturesByFileRequest

Request to update ICT fixtures properties of a CCA from a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| filePath | [string](#string) |  | The filepath of the CSV file containing the ICT fixtures properties. |






<a name="-UpdateICTFixturesResponse"></a>

## UpdateICTFixturesResponse

Contains the status of the update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateError | [string](#string) | repeated | ICT fixtures update error messages. |






<a name="-UpdateModelingRegionRequest"></a>

## UpdateModelingRegionRequest

Request to update one or more modeling regions for a specific project.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | The name of the Sherlock project. |
| modelingRegions | [ModelingRegion](#ModelingRegion) | repeated | List of modeling regions to update in the project. The regionId for |






<a name="-UpdateMountPointsByFileRequest"></a>

## UpdateMountPointsByFileRequest

Request to update mount points properties of a CCA from a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| filePath | [string](#string) |  | The filepath of the CSV file containing the mount points properties. |






<a name="-UpdateMountPointsRequest"></a>

## UpdateMountPointsRequest

Request to update mount points properties of a CCA from a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| mountPointsProperties | [MountPointProperties](#MountPointProperties) | repeated | Mount point properties. |






<a name="-UpdateMountPointsResponse"></a>

## UpdateMountPointsResponse

Contains the status of the update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Mount Points update error messages. |






<a name="-UpdateTestPointsByFileRequest"></a>

## UpdateTestPointsByFileRequest

Request to update test points properties of a CCA from a CSV formatted file.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| project | [string](#string) |  | Sherlock project name. |
| ccaName | [string](#string) |  | The CCA name. |
| filePath | [string](#string) |  | The filepath of the CSV file containing the test points properties. |






<a name="-UpdateTestPointsResponse"></a>

## UpdateTestPointsResponse

Contains the status of the update as well as all the update error messages.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| returnCode | [ReturnCode](#ReturnCode) |  | Status code of response. |
| updateError | [string](#string) | repeated | Test Points update error messages. |





 


<a name="-ModelingRegion-ElementOrder"></a>

## ModelingRegion.ElementOrder


| Name | Number | Description |
| ---- | ------ | ----------- |
| First_Order | 0 | First order (Linear) 3D elements should be created for the PCB in the modeling region. |
| Second_Order | 1 | Second order (Quadratic) 3D elements should be created for the PCB in the modeling region. |
| Solid_Shell | 2 | Used for relatively flat elements, like those found in a PCB layer to reduce modeling generation time. |



<a name="-ModelingRegion-ModelingMode"></a>

## ModelingRegion.ModelingMode


| Name | Number | Description |
| ---- | ------ | ----------- |
| Enabled | 0 | Use the modeling region. |
| Disabled | 1 | Ignore the modeling region. |
| Excluded | 2 | Don&#39;t generate any elements for the region. |



<a name="-ModelingRegion-PCBModelingProperties-ExportModelType"></a>

## ModelingRegion.PCBModelingProperties.ExportModelType


| Name | Number | Description |
| ---- | ------ | ----------- |
| Default | 0 | Region type is based on the Mesh Type property defined in the PCB Modeling tab in the FEA Model Export dialog. |
| Sherlock | 1 | Use mesh elements generated by Sherlock to model the region. |
| Sweep | 2 | Use mesh elements generated by the FEA tool to model the region. |
| None | 3 | Define only geometric volumes for the region, without generating mesh elements. |



<a name="-ModelingRegion-TraceModelingProperties-TraceModelingType"></a>

## ModelingRegion.TraceModelingProperties.TraceModelingType


| Name | Number | Description |
| ---- | ------ | ----------- |
| Default | 0 | Trace modeling type is based on the Trace Modeling property defined in the Trace Modeling tab in the FEA Model Export dialog. |
| Enabled | 1 | Trace modeling is enabled for this region. |
| Disabled | 2 | Trace modeling is disabled for this region. |


 

 


<a name="-SherlockLayerService"></a>

## SherlockLayerService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| addPottingRegion | [.AddPottingRegionRequest](#AddPottingRegionRequest) | [.ReturnCode](#ReturnCode) | Add a potting region with the specified shape and properties. |
| deleteAllICTFixtures | [.DeleteAllICTFixturesRequest](#DeleteAllICTFixturesRequest) | [.ReturnCode](#ReturnCode) | Delete all ICT fixtures in specific CCA of specific project. |
| deleteAllMountPoints | [.DeleteAllMountPointsRequest](#DeleteAllMountPointsRequest) | [.ReturnCode](#ReturnCode) | Delete all mount points in specific CCA of specific project. |
| deleteAllTestPoints | [.DeleteAllTestPointsRequest](#DeleteAllTestPointsRequest) | [.ReturnCode](#ReturnCode) | Delete all test points in specific CCA of specific project. |
| exportAllMountPoints | [.ExportAllMountPointsRequest](#ExportAllMountPointsRequest) | [.ReturnCode](#ReturnCode) | Export all mount points and their properties into a CSV formatted file. |
| exportAllICTFixtures | [.ExportAllICTFixturesRequest](#ExportAllICTFixturesRequest) | [.ReturnCode](#ReturnCode) | Export all ICT fixtures and their properties into a CSV formatted file. |
| exportAllTestPoints | [.ExportAllTestPointsRequest](#ExportAllTestPointsRequest) | [.ReturnCode](#ReturnCode) | Export all test points and their properties into a CSV formatted file. |
| getMountPointBoundaries | [.GetMountPointBoundariesRequest](#GetMountPointBoundariesRequest) | [.GetMountPointBoundariesResponse](#GetMountPointBoundariesResponse) | Get a list of valid mount point boundaries. |
| getMountPointChassisMaterials | [.GetMountPointChassisMaterialsRequest](#GetMountPointChassisMaterialsRequest) | [.GetMountPointChassisMaterialsResponse](#GetMountPointChassisMaterialsResponse) | Get a list of valid mount point chassis materials. |
| getMountPointsProperties | [.GetMountPointsPropertiesRequest](#GetMountPointsPropertiesRequest) | [.GetMountPointsPropertiesResponse](#GetMountPointsPropertiesResponse) | Get a list of valid mount point properties. |
| getMountPointShapeTypes | [.GetMountPointShapeTypesRequest](#GetMountPointShapeTypesRequest) | [.GetMountPointShapeTypesResponse](#GetMountPointShapeTypesResponse) | Get a list of valid mount point shape type values. |
| getMountPointSides | [.GetMountPointSidesRequest](#GetMountPointSidesRequest) | [.GetMountPointSidesResponse](#GetMountPointSidesResponse) | Get a list of valid mount point sides. |
| getMountPointTypes | [.GetMountPointTypesRequest](#GetMountPointTypesRequest) | [.GetMountPointTypesResponse](#GetMountPointTypesResponse) | Get a list of valid mount point type values. |
| getMountPointUnits | [.GetMountPointUnitsRequest](#GetMountPointUnitsRequest) | [.GetMountPointUnitsResponse](#GetMountPointUnitsResponse) | Get a list of valid mount point units. |
| updateICTFixturesByFile | [.UpdateICTFixturesByFileRequest](#UpdateICTFixturesByFileRequest) | [.UpdateICTFixturesResponse](#UpdateICTFixturesResponse) | Update the ICT fixtures properties of a CCA from a CSV formatted file. This API could be used to add new ICT fixtures or update existing ones depending on the file contents. If the ID specified already exists, then the properties for that ICT fixture will be updated. If the ID specified does not already exist, or if the field is empty, then a new ICT fixture will be added with the specified properties. The file format should be the same as the one produced from CCA -&gt; Export ICT Fixtures. |
| updateMountPoints | [.UpdateMountPointsRequest](#UpdateMountPointsRequest) | [.UpdateMountPointsResponse](#UpdateMountPointsResponse) | Update mount points with specified properties. |
| updateMountPointsByFile | [.UpdateMountPointsByFileRequest](#UpdateMountPointsByFileRequest) | [.UpdateMountPointsResponse](#UpdateMountPointsResponse) | Update the mount points properties of a CCA from a CSV formatted file. This API could be used to add new mount points or update existing ones depending on the file contents. If the ID specified already exists, then the properties for that mount point will be updated. If the ID specified does not already exist, or if the field is empty, then a new mount point will be added with the specified properties. The file format should be the same as the one produced from CCA -&gt; Export Mount Points. |
| updateTestPointsByFile | [.UpdateTestPointsByFileRequest](#UpdateTestPointsByFileRequest) | [.UpdateTestPointsResponse](#UpdateTestPointsResponse) | Update the test points properties of a CCA from a CSV formatted file. This API could be used to add new test points or update existing ones depending on the file contents. If the ID specified already exists, then the properties for that test point will be updated. If the ID specified does not already exist, or if the field is empty, then a new test point will be added with the specified properties. The file format should be the same as the one produced from CCA -&gt; Export Test Points. |
| addModelingRegion | [.AddModelingRegionRequest](#AddModelingRegionRequest) | [.ReturnCode](#ReturnCode) | Add one or more modeling regions with the specified shapes and properties. |
| updateModelingRegion | [.UpdateModelingRegionRequest](#UpdateModelingRegionRequest) | [.ReturnCode](#ReturnCode) | Update one or more modeling regions with the specified shapes and properties. |
| deleteModelingRegion | [.DeleteModelingRegionRequest](#DeleteModelingRegionRequest) | [.ReturnCode](#ReturnCode) | Delete one or more existing modeling regions. |
| copyModelingRegion | [.CopyModelingRegionRequest](#CopyModelingRegionRequest) | [.ReturnCode](#ReturnCode) | Copy one or more existing modeling regions. |

 



<a name="SherlockLifeCycleService-proto"></a>
<p align="right"><a href="#top">Top</a></p>

