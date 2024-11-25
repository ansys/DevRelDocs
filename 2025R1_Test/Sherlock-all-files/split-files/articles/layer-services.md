# Sherlock Layer Service-SherlockLayerService.proto

[Click here to return to the main index to Sherlock's APIs.](introduction.md
"Index to the Sherlock APIs")

The APIs in this section allow you to perform different layer view operations
to a board. Clicking on the active links in the table below will take you to
the selected API.

Table 1.50. Index to Sherlock Layer Service APIs

Method Name| Request Type| Response Type| Description  
---|---|---|---  
For display purposes, strings in the first three columns are broken into
multiple lines and should be read as continuous. For example, the first string
in column two should be interpreted as: .DeleteAllMountPointsRequest  
addPottingRegion| [.AddPotting
RegionRequest](layer-services.md#sherlock_ug_AddPottingRegionRequest
"AddPottingRegionRequest")| [.ReturnCode](ch01s04s04.md "Return Code")| Add
a potting region with the specified shape and properties  
deleteAll ICTFixtures| [.DeleteAllICTFixtures
Request](ch01s05s02.md#sherlock_ug_DeleteAllICTFixturesRequest
"DeleteAllICTFixturesRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Delete all ICT fixtures in specific cca of specific project.  
deleteAllMount Points| [.DeleteAllMount
PointsRequest](ch01s05s03.md#sherlock_ug_DeleteAllMountPointsRequest
"DeleteAllMountPointsRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Request to delete all mount points in a specific CCA of a specific project.  
deleteAllTestPoints| [.DeleteAllTestPoints
Request](ch01s05s04.md#sherlock_ug_DeleteAllTestPointsRequest
"DeleteAllTestPointsRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Delete all test points in specific cca of specific project.  
exportAllMount Points| [.ExportAllMount
PointsRequest](ch01s05s06.md#sherlock_ug_ExportAllMountPointsRequest
"ExportAllMountPointsRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Request to export all mount points and their properties into a .csv formatted
file.  
exportAllICT Fixtures| [.ExportAllICTFixtures
Request](ch01s05s05.md#sherlock_ug_ExportAllICTFixturesRequest
"ExportAllICTFixturesRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Export all ICT fixtures andtheir properties into a CSVformatted file.  
exportAll TestPoints| [.ExportAllTest
PointsRequest](ch01s05s07.md#sherlock_ug_ExportAllTestPointsRequest
"ExportAllTestPointsRequest")| [.ReturnCode](ch01s04s04.md "Return Code")|
Export all test points and their properties into a CSV formatted file.  
getMountPoint Boundaries| [.GetMountPoint
BoundariesRequest](ch01s05s08.md#sherlock_ug_GetMountPointBoundariesRequest
"GetMountPointBoundariesRequest")| [.GetMountPoint Boundaries
Response](ch01s05s08s02.md "GetMountPointBoundariesResponse")| Get a list of
valid Mount Point Boundaries.  
getMountPoint ChassisMaterials| [.GetMountPoint ChassisMaterials
Request](ch01s05s08.md#sherlock_ug_GetMountPointBoundariesRequest
"GetMountPointBoundariesRequest")| [.GetMountPoint ChassisMaterials
Response](ch01s05s09s02.md "GetMountPointChassisMaterialsResponse")| Get a
list of valid Mount Point chassis materials.  
getMountPoints Properties| [.GetMountPoints
PropertiesRequest](ch01s05s14.md#sherlock_ug_GetMountPointsPropertiesRequest
"GetMountPointsPropertiesRequest")| [.GetMountPoints
PropertiesResponse](ch01s05s14s02.md "GetMountPointsPropertiesResponse")|
Get a list of valid Mount Point Properties.  
getMountPoint ShapeTypes| [.GetMountPoint
ShapeTypesRequest](ch01s05s10.md#sherlock_ug_GetMountPointShapeTypesRequest
"GetMountPointShapeTypesRequest")| [.GetMountPoint ShapeTypes
Response](ch01s05s10s02.md "GetMountPointShapeTypesResponse")| Get a list of
valid Mount Point Shape Type values.  
getMountPoint Sides| [.GetMountPoint
SidesRequest](ch01s05s11.md#sherlock_ug_GetMountPointSidesRequest
"GetMountPointSidesRequest")| [.GetMountPoint
SidesResponse](ch01s05s11s02.md "GetMountPointSidesResponse")| Get a list of
valid Mount Point Sides.  
getMountPoint Types| [.GetMountPoint
TypesRequest](ch01s05s10.md#sherlock_ug_GetMountPointShapeTypesRequest
"GetMountPointShapeTypesRequest")| [.GetMountPoint
TypesResponse](ch01s05s12s02.md "GetMountPointTypesResponse")| Get a list of
valid Mount Point Type values.  
getMount PointUnits| [.GetMountPoint
UnitsRequest](ch01s05s13.md#sherlock_ug_GetMountPointUnitsRequest
"GetMountPointUnitsRequest")| [.GetMountPoint
UnitsResponse](ch01s05s13s02.md "GetMountPointUnitsResponse")| Get a list of
valid Mount Point Units.  
updateICTFixtures ByFile| [.UpdateICTFixtures
ByFileRequest](ch01s05s16.md#sherlock_ug_UpdateICTFixturesByFileRequest
"UpdateICTFixturesByFileRequest")| [.UpdateICT
FixturesResponse](ch01s05s16s02.md "UpdateICTFixturesResponse")| See note
below.  
updateICTFixturesByFile: Update the ICT fixtures properties of a CCA from a
CSV formatted file. This API could be used to add new ICT fixtures or update
existing ones depending on the file contents. If the ID specified already
exists, then the properties for that ICT fixture will be updated. If the ID
specified does not already exist, or if the field is empty, then a new ICT
fixture will be added with the specified properties. The file format should be
the same as the one produced from CCA > Export ICT Fixtures.  
updateMountPoints| [.UpdateMount
PointsRequest](ch01s05s17.md#sherlock_ug_UpdateMountPointsRequest
"UpdateMountPointsRequest")| [.UpdateMount PointsResponse](ch01s05s17s02.md
"UpdateMountPointsResponse")| Update mount points with specified properties  
updateMount PointsByFile| [.UpdateMountPoints
ByFileRequest](ch01s05s18.md#sherlock_ug_UpdateMountPointsByFileRequest
"UpdateMountPointsByFileRequest")| [.UpdateMount
PointsResponse](ch01s05s17s02.md "UpdateMountPointsResponse")| See note
below.  
updateMountPointsByFile: Update the mount points properties of a CCA from a
CSV formatted file. This API could be used to add new mount points or update
existing ones depending on the file contents. If the ID specified already
exists, then the properties for that mount point will be updated. If the ID
specified does not already exist, or if the field is empty, then a new mount
point will be added with the specified properties. The file format should be
the same as the one produced from CCA > ExportMountPoints.  
updateTest PointsByFile| [.UpdateTest
PointsByFileRequest](ch01s05s19.md#sherlock_ug_UpdateTestPointsByFileRequest
"UpdateTestPointsByFileRequest")| [.UpdateTest
PointsResponse](ch01s05s19s02.md "UpdateTestPointsResponse")| See note
below.  
updateTestPointsByFile: Update the test points properties of a CCA from a CSV
formatted file. This API could be used to add new test points or update
existing ones depending on the file contents. If the ID specified already
exists, then the properties for that test point will be updated. If the ID
specified does not already exist, or if the field is empty, then a new test
point will be added with the specified properties. The file format should be
the same as the one produced from CCA > ExportTestPoints.  
  
  

## Add Potting Region

Links:

### AddPottingRegionRequest

Request to add a potting region.

Table 1.51. AddPottingRegionRequest

Field| Type| Label| Description  
---|---|---|---  
project| [string](scalar-values.md "gRPC Scalar Value Types")|  | The name of the Sherlock project to add the potting regions to.   
pottingRegions| ⇓| repeated| The potting regions to add.  
[AddPottingRegionRequest.PottingRegion](layer-services.md#sherlock_ug_AddPottingRegionRequest.PottingRegion
"AddPottingRegionRequest.PottingRegion")  
  
  

### AddPottingRegionRequest.PottingRegion

Table 1.52. AddPottingRegionRequest.PottingRegion

Field| Type| Label| Description  
---|---|---|---  
ccaName| [string](scalar-values.md "gRPC Scalar Value Types")|  | The name of the CCA.   
pottingID| [string](scalar-values.md "gRPC Scalar Value Types")| optional| The
potting ID, must be unique.  
pottingSide| [string](scalar-values.md "gRPC Scalar Value Types")| optional| The
potting side, options are "TOP", "BOT", or "BOTTOM".  
pottingMaterial| [string](scalar-values.md "gRPC Scalar Value Types")| optional|
The potting material.  
pottingUnits| [string](scalar-values.md "gRPC Scalar Value Types")| optional| The
units to use for the potting region.  
pottingThickness| [double](scalar-values.md "gRPC Scalar Value Types")| optional|
The potting thickness.  
pottingStandoff| [double](scalar-values.md "gRPC Scalar Value Types")| optional|
The potting standoff.  
polygonalShape| [PolygonalShape](ch01s05s15.md#sherlock_ug_PolygonalShape "PolygonalShape")|  | Used to add a region with a polygonal shape.   
rectangularShape| [RectangularShape](ch01s05s15s03.md "RectangularShape")|  | Used to add a region with a rectangular shape.   
slotShape| [SlotShape](ch01s05s15s04.md "SlotShape")|  | Used to add a region with a slot shape.   
circularShape| [CircularShape](layer-services.md#sherlock_ug_CircularShape "CircularShape")|  | Used to add a region with a circular shape.   
pCBShape| [PCBShape](ch01s05s15.md "PCB Shape")|  | Used to add a region with a PCB shape.   
  
  

### CircularShape

Table 1.53. CircularShape

Field| Type| Label| Description  
---|---|---|---  
diameter| [double](scalar-values.md "gRPC Scalar Value Types")| optional| The
diameter of the circle.  
nodeCount| [uint32](scalar-values.md "gRPC Scalar Value Types")| optional| The
number of nodes.  
centerX| [double](scalar-values.md "gRPC Scalar Value Types")| optional| The x
coordinate of the center of the circle.  
centerY| [double](scalar-values.md "gRPC Scalar Value Types")| optional| The x
coordinate of the center of the circle.  
rotation| [double](scalar-values.md "gRPC Scalar Value Types")| optional| The
rotation of the shape.  
  
  

### Example: Add Potting Region

#### Proto Request Example

    
    
    {
      "project": "Tutorial",
      "pottingRegions": [
        {
          "ccaName": "Main Board",
          "pottingID": "PR1",
          "pottingSide": "TOP",
          "pottingMaterial": "EPOXYENCAPSULANT",
          "pottingUnits": "mm",
          "pottingThickness": 1.58,
          "pottingStandoff": 0.42,
          "polygonalShape": {
            "points": [
              {
                "x": -23.2425,
                "y": -10.9293
              },
              {
                "x": -7.4136,
                "y": -3.7161
              },
              {
                "x": -4.6084,
                "y": -16.1389
              }
            ],
            "rotation": 45.6
          }
        }
      ]
    }

#### Python Example:

For a Python example, refer to the online [PySherlock
Reference](https://sherlock.docs.pyansys.com/version/stable/api/index.md).

* * *

[Prev](ch01s04s06s05.md) |   / [Contents](index.md) / [Home](../../index.htm)|  [Next](ch01s05s02.md)  
---|---|---

