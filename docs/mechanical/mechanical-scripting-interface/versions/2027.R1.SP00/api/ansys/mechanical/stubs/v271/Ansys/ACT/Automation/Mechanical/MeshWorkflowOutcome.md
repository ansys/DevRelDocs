# `MeshWorkflowOutcome`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome(internalObject: Any)

<a id="MeshWorkflowOutcome"></a>

### *class* MeshWorkflowOutcome(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Object that wraps IDSMeshWorkflowOutcome.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowOutcome.Activate)                                     | Activate the current object.                                                                |
| [`AddFigure`](#MeshWorkflowOutcome.AddFigure)                                   | Creates a new child Figure.                                                                 |
| [`AddImage`](#MeshWorkflowOutcome.AddImage)                                     | Creates a new child Image.                                                                  |
| [`Copy`](#MeshWorkflowOutcome.Copy)                                             | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MeshWorkflowOutcome.CopyTo)                                         | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MeshWorkflowOutcome.CreateObjRef)                             | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MeshWorkflowOutcome.CreateParameter)                       | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MeshWorkflowOutcome.Cut)                                               | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MeshWorkflowOutcome.Delete)                                         | Run the Delete action.                                                                      |
| [`Duplicate`](#MeshWorkflowOutcome.Duplicate)                                   | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MeshWorkflowOutcome.Equals)                                         | Equals method.                                                                              |
| [`GetAPIName`](#MeshWorkflowOutcome.GetAPIName)                                 | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MeshWorkflowOutcome.GetAllProperties)                     | GetAllProperties method.                                                                    |
| [`GetChildren`](#MeshWorkflowOutcome.GetChildren)                               | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MeshWorkflowOutcome.GetDetailsView)                         | GetDetailsView method.                                                                      |
| [`GetDomainPatternProperties`](#MeshWorkflowOutcome.GetDomainPatternProperties) | GetDomainPatternProperties method.                                                          |
| [`GetEnumName`](#MeshWorkflowOutcome.GetEnumName)                               | Enum name bound to value                                                                    |
| [`GetHashCode`](#MeshWorkflowOutcome.GetHashCode)                               | GetHashCode method.                                                                         |
| [`GetIconFile`](#MeshWorkflowOutcome.GetIconFile)                               | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MeshWorkflowOutcome.GetLifetimeService)                 | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MeshWorkflowOutcome.GetObjectData)                           | GetObjectData method.                                                                       |
| [`GetParameter`](#MeshWorkflowOutcome.GetParameter)                             | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MeshWorkflowOutcome.GetPath)                                       | GetPath method.                                                                             |
| [`GetPropertyName`](#MeshWorkflowOutcome.GetPropertyName)                       | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MeshWorkflowOutcome.GetPropertyValue)                     | GetPropertyValue method.                                                                    |
| [`GetPropertyWorksheetInfo`](#MeshWorkflowOutcome.GetPropertyWorksheetInfo)     | GetPropertyWorksheetInfo method.                                                            |
| [`GetUnpublishedList`](#MeshWorkflowOutcome.GetUnpublishedList)                 | GetUnpublishedList method.                                                                  |
| [`GetVisibleProperties`](#MeshWorkflowOutcome.GetVisibleProperties)             | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MeshWorkflowOutcome.GetVisiblePropertyNames)       | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MeshWorkflowOutcome.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MeshWorkflowOutcome.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MeshWorkflowOutcome.InitializeLifetimeService)   | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MeshWorkflowOutcome.IsPropertyEditable)                 | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MeshWorkflowOutcome.IsPropertyVisible)                   | IsPropertyVisible method.                                                                   |
| [`Paste`](#MeshWorkflowOutcome.Paste)                                           | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MeshWorkflowOutcome.PropertyByAPIName)                   | Get a property by its API name.                                                             |
| [`PropertyById`](#MeshWorkflowOutcome.PropertyById)                             | PropertyById method.                                                                        |
| [`PropertyByName`](#MeshWorkflowOutcome.PropertyByName)                         | Get a property by its unique name.                                                          |
| [`PropertyTypeInfo`](#MeshWorkflowOutcome.PropertyTypeInfo)                     | PropertyTypeInfo method.                                                                    |
| [`RemoveFromGroup`](#MeshWorkflowOutcome.RemoveFromGroup)                       | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MeshWorkflowOutcome.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnType`](#MeshWorkflowOutcome.RenameBasedOnType)                   | Renames applying the default name based on type.                                            |
| [`SetPattern`](#MeshWorkflowOutcome.SetPattern)                                 | SetPattern method.                                                                          |
| [`SetPropertyValue`](#MeshWorkflowOutcome.SetPropertyValue)                     | SetPropertyValue method.                                                                    |
| [`SetPublish`](#MeshWorkflowOutcome.SetPublish)                                 | SetPublish method.                                                                          |
| [`SetUnpublish`](#MeshWorkflowOutcome.SetUnpublish)                             | SetUnpublish method.                                                                        |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| [`AspectRatioMaxValue`](#MeshWorkflowOutcome.AspectRatioMaxValue)                                                                         | Gets the AspectRatioMaxValue.                                                                                                               |
| [`AspectRatioMinValue`](#MeshWorkflowOutcome.AspectRatioMinValue)                                                                         | Gets the AspectRatioMinValue.                                                                                                               |
| [`AttachedRefs`](#MeshWorkflowOutcome.AttachedRefs)                                                                                       | AttachedRefs property.                                                                                                                      |
| [`BodyCountChange`](#MeshWorkflowOutcome.BodyCountChange)                                                                                 | Gets the change in number of bodies due to repairing.                                                                                       |
| [`BoundingBoxDimensions`](#MeshWorkflowOutcome.BoundingBoxDimensions)                                                                     | Gets the bounding box extents of the input aligned along the direction of stacking.                                                         |
| [`CheckpointUnoDataEDXFilePath`](#MeshWorkflowOutcome.CheckpointUnoDataEDXFilePath)                                                       | Gets the CheckpointUnoDataEDXFilePath.                                                                                                      |
| [`Children`](#MeshWorkflowOutcome.Children)                                                                                               | Gets the list of children.                                                                                                                  |
| [`ClsId`](#MeshWorkflowOutcome.ClsId)                                                                                                     | ClsId property.                                                                                                                             |
| [`CyclicRegionAxisX`](#MeshWorkflowOutcome.CyclicRegionAxisX)                                                                             | Gets the X component of the detected cyclic region axis direction.                                                                          |
| [`CyclicRegionAxisY`](#MeshWorkflowOutcome.CyclicRegionAxisY)                                                                             | Gets the Y component of the detected cyclic region axis direction.                                                                          |
| [`CyclicRegionAxisZ`](#MeshWorkflowOutcome.CyclicRegionAxisZ)                                                                             | Gets the Z component of the detected cyclic region axis direction.                                                                          |
| [`CyclicRegionCenterX`](#MeshWorkflowOutcome.CyclicRegionCenterX)                                                                         | Gets the X coordinate of the detected cyclic region center.                                                                                 |
| [`CyclicRegionCenterY`](#MeshWorkflowOutcome.CyclicRegionCenterY)                                                                         | Gets the Y coordinate of the detected cyclic region center.                                                                                 |
| [`CyclicRegionCenterZ`](#MeshWorkflowOutcome.CyclicRegionCenterZ)                                                                         | Gets the Z coordinate of the detected cyclic region center.                                                                                 |
| [`CyclicRegionHighBoundariesScopeMethod`](#MeshWorkflowOutcome.CyclicRegionHighBoundariesScopeMethod)                                     | Gets the scope method for the detected cyclic region high boundaries scope.                                                                 |
| [`CyclicRegionHighBoundariesScopePattern`](#MeshWorkflowOutcome.CyclicRegionHighBoundariesScopePattern)                                   | Gets the scope pattern for the detected cyclic region high boundaries scope.                                                                |
| [`CyclicRegionLowBoundariesScopeMethod`](#MeshWorkflowOutcome.CyclicRegionLowBoundariesScopeMethod)                                       | Gets the scope method for the detected cyclic region low boundaries scope.                                                                  |
| [`CyclicRegionLowBoundariesScopePattern`](#MeshWorkflowOutcome.CyclicRegionLowBoundariesScopePattern)                                     | Gets the scope pattern for the detected cyclic region low boundaries scope.                                                                 |
| [`DataModelObjectCategory`](#MeshWorkflowOutcome.DataModelObjectCategory)                                                                 | Gets the current DataModelObject's category.                                                                                                |
| [`DegenerateFaces`](#MeshWorkflowOutcome.DegenerateFaces)                                                                                 | Gets the count of degenerate topology faces.                                                                                                |
| [`DeviatingFacets`](#MeshWorkflowOutcome.DeviatingFacets)                                                                                 | Gets the count of topology faces with deviating facets.                                                                                     |
| [`DomainStatisticsBoundingBoxMaxX`](#MeshWorkflowOutcome.DomainStatisticsBoundingBoxMaxX)                                                 | Gets the maximum X coordinate of the bounding box captured by this Domain Statistics outcome.                                               |
| [`DomainStatisticsBoundingBoxMaxY`](#MeshWorkflowOutcome.DomainStatisticsBoundingBoxMaxY)                                                 | Gets the maximum Y coordinate of the bounding box captured by this Domain Statistics outcome.                                               |
| [`DomainStatisticsBoundingBoxMaxZ`](#MeshWorkflowOutcome.DomainStatisticsBoundingBoxMaxZ)                                                 | Gets the maximum Z coordinate of the bounding box captured by this Domain Statistics outcome.                                               |
| [`DomainStatisticsBoundingBoxMinX`](#MeshWorkflowOutcome.DomainStatisticsBoundingBoxMinX)                                                 | Gets the minimum X coordinate of the bounding box captured by this Domain Statistics outcome.                                               |
| [`DomainStatisticsBoundingBoxMinY`](#MeshWorkflowOutcome.DomainStatisticsBoundingBoxMinY)                                                 | Gets the minimum Y coordinate of the bounding box captured by this Domain Statistics outcome.                                               |
| [`DomainStatisticsBoundingBoxMinZ`](#MeshWorkflowOutcome.DomainStatisticsBoundingBoxMinZ)                                                 | Gets the minimum Z coordinate of the bounding box captured by this Domain Statistics outcome.                                               |
| [`DomainStatisticsNumberOfEdgeZones`](#MeshWorkflowOutcome.DomainStatisticsNumberOfEdgeZones)                                             | Gets the number of edge zones captured by this Domain Statistics outcome.                                                                   |
| [`DomainStatisticsNumberOfFaceZones`](#MeshWorkflowOutcome.DomainStatisticsNumberOfFaceZones)                                             | Gets the number of face zones captured by this Domain Statistics outcome.                                                                   |
| [`DomainStatisticsNumberOfGeometryEdges`](#MeshWorkflowOutcome.DomainStatisticsNumberOfGeometryEdges)                                     | Gets the number of geometry edges captured by this Domain Statistics outcome.                                                               |
| [`DomainStatisticsNumberOfGeometryFaces`](#MeshWorkflowOutcome.DomainStatisticsNumberOfGeometryFaces)                                     | Gets the number of geometry faces captured by this Domain Statistics outcome.                                                               |
| [`DomainStatisticsNumberOfGeometryVertices`](#MeshWorkflowOutcome.DomainStatisticsNumberOfGeometryVertices)                               | Gets the number of geometry vertices captured by this Domain Statistics outcome.                                                            |
| [`DomainStatisticsNumberOfGeometryVolumes`](#MeshWorkflowOutcome.DomainStatisticsNumberOfGeometryVolumes)                                 | Gets the number of geometry volumes captured by this Domain Statistics outcome.                                                             |
| [`DomainStatisticsNumberOfMeshEdgeZonelets`](#MeshWorkflowOutcome.DomainStatisticsNumberOfMeshEdgeZonelets)                               | Gets the number of mesh edge zonelets captured by this Domain Statistics outcome.                                                           |
| [`DomainStatisticsNumberOfMeshFaceZonelets`](#MeshWorkflowOutcome.DomainStatisticsNumberOfMeshFaceZonelets)                               | Gets the number of mesh face zonelets captured by this Domain Statistics outcome.                                                           |
| [`DomainStatisticsNumberOfParts`](#MeshWorkflowOutcome.DomainStatisticsNumberOfParts)                                                     | Gets the number of parts captured by this Domain Statistics outcome.                                                                        |
| [`DomainStatisticsNumberOfUnmeshedGeometryEdges`](#MeshWorkflowOutcome.DomainStatisticsNumberOfUnmeshedGeometryEdges)                     | Gets the number of unmeshed geometry edges captured by this Domain Statistics outcome.                                                      |
| [`DomainStatisticsNumberOfUnmeshedGeometryFaces`](#MeshWorkflowOutcome.DomainStatisticsNumberOfUnmeshedGeometryFaces)                     | Gets the number of unmeshed geometry faces captured by this Domain Statistics outcome.                                                      |
| [`DomainStatisticsNumberOfUnmeshedGeometryVolumes`](#MeshWorkflowOutcome.DomainStatisticsNumberOfUnmeshedGeometryVolumes)                 | Gets the number of unmeshed geometry volumes captured by this Domain Statistics outcome.                                                    |
| [`DomainStatisticsNumberOfVolumeZones`](#MeshWorkflowOutcome.DomainStatisticsNumberOfVolumeZones)                                         | Gets the number of volume zones captured by this Domain Statistics outcome.                                                                 |
| [`DomainStatisticsNumberOfVolumes`](#MeshWorkflowOutcome.DomainStatisticsNumberOfVolumes)                                                 | Gets the total number of volumes (geometry + mesh zonelets) captured by this Domain Statistics outcome.                                     |
| [`EdgeCountChange`](#MeshWorkflowOutcome.EdgeCountChange)                                                                                 | Gets the change in number of edges due to repairing.                                                                                        |
| [`ElementQualityMinValue`](#MeshWorkflowOutcome.ElementQualityMinValue)                                                                   | Gets the ElementQualityMinValue.                                                                                                            |
| [`ExternalMethod`](#MeshWorkflowOutcome.ExternalMethod)                                                                                   | Gets the scope method for the External Enclosure scope outcome.                                                                             |
| [`ExternalPattern`](#MeshWorkflowOutcome.ExternalPattern)                                                                                 | Gets the ExternalPattern.                                                                                                                   |
| [`FMFailureCodeID`](#MeshWorkflowOutcome.FMFailureCodeID)                                                                                 | Gets the FMFailureCodeID.                                                                                                                   |
| [`FMFailureCodeString`](#MeshWorkflowOutcome.FMFailureCodeString)                                                                         | Gets the FMFailureCodeString.                                                                                                               |
| [`FMWarningCodeID`](#MeshWorkflowOutcome.FMWarningCodeID)                                                                                 | Gets the FMWarningCodeID.                                                                                                                   |
| [`FMWarningCodeString`](#MeshWorkflowOutcome.FMWarningCodeString)                                                                         | Gets the FMWarningCodeString.                                                                                                               |
| [`FaceCountChange`](#MeshWorkflowOutcome.FaceCountChange)                                                                                 | Gets the change in number of faces due to repairing.                                                                                        |
| [`FailedEdges`](#MeshWorkflowOutcome.FailedEdges)                                                                                         | Gets the count of failed edges after repairing.                                                                                             |
| [`FailedFaces`](#MeshWorkflowOutcome.FailedFaces)                                                                                         | Gets the count of failed faces after repairing.                                                                                             |
| [`FailureInfoInitialized`](#MeshWorkflowOutcome.FailureInfoInitialized)                                                                   | Gets the FailureInfoInitialized.                                                                                                            |
| [`FailureLines`](#MeshWorkflowOutcome.FailureLines)                                                                                       | Gets the lines in the csv file that caused failure/warning in the operation.                                                                |
| [`FailureMessage`](#MeshWorkflowOutcome.FailureMessage)                                                                                   | Gets the failure message.                                                                                                                   |
| [`Figures`](#MeshWorkflowOutcome.Figures)                                                                                                 | Gets the list of associated figures.                                                                                                        |
| [`GroupingFolder`](#MeshWorkflowOutcome.GroupingFolder)                                                                                   | GroupingFolder property.                                                                                                                    |
| [`IconName`](#MeshWorkflowOutcome.IconName)                                                                                               | IconName property.                                                                                                                          |
| [`Images`](#MeshWorkflowOutcome.Images)                                                                                                   | Gets the list of associated images.                                                                                                         |
| [`IncompleteBoundaries`](#MeshWorkflowOutcome.IncompleteBoundaries)                                                                       | Gets the count of faces with incomplete boundaries.                                                                                         |
| [`IncompleteBoundaryLoops`](#MeshWorkflowOutcome.IncompleteBoundaryLoops)                                                                 | Gets the count of topology faces with incomplete boundary loops.                                                                            |
| [`InternalMethod`](#MeshWorkflowOutcome.InternalMethod)                                                                                   | Gets the scope method for the Internal Enclosure scope outcome.                                                                             |
| [`InternalObject`](#MeshWorkflowOutcome.InternalObject)                                                                                   | Gets the internal object. For advanced usage only.                                                                                          |
| [`InternalPattern`](#MeshWorkflowOutcome.InternalPattern)                                                                                 | Gets the InternalPattern.                                                                                                                   |
| [`IntersectingBoundaryLoops`](#MeshWorkflowOutcome.IntersectingBoundaryLoops)                                                             | Gets the count of topology faces with intersecting boundary loops.                                                                          |
| [`IntersectingPairs`](#MeshWorkflowOutcome.IntersectingPairs)                                                                             | Gets the count of faces with intersecting pairs.                                                                                            |
| [`InvalidBoundaries`](#MeshWorkflowOutcome.InvalidBoundaries)                                                                             | Gets the count of faces with invalid boundary orientation.                                                                                  |
| [`InvalidBoundaryLoopOrientation`](#MeshWorkflowOutcome.InvalidBoundaryLoopOrientation)                                                   | Gets the count of topology faces with invalid boundary loop orientation.                                                                    |
| [`LabelEdges`](#MeshWorkflowOutcome.LabelEdges)                                                                                           | Gets the LabelEdges.                                                                                                                        |
| [`MeshStatisticsNumberOfCornerNodes`](#MeshWorkflowOutcome.MeshStatisticsNumberOfCornerNodes)                                             | Gets the number of corner mesh nodes captured by this Mesh Statistics outcome.                                                              |
| [`MeshStatisticsNumberOfFaceElements`](#MeshWorkflowOutcome.MeshStatisticsNumberOfFaceElements)                                           | Gets the number of face elements captured by this Mesh Statistics outcome.                                                                  |
| [`MeshStatisticsNumberOfHex20`](#MeshWorkflowOutcome.MeshStatisticsNumberOfHex20)                                                         | Gets the number of Hex20 elements captured by this Mesh Statistics outcome.                                                                 |
| [`MeshStatisticsNumberOfHex8`](#MeshWorkflowOutcome.MeshStatisticsNumberOfHex8)                                                           | Gets the number of Hex8 elements captured by this Mesh Statistics outcome.                                                                  |
| [`MeshStatisticsNumberOfMidNodes`](#MeshWorkflowOutcome.MeshStatisticsNumberOfMidNodes)                                                   | Gets the number of mid-side mesh nodes captured by this Mesh Statistics outcome.                                                            |
| [`MeshStatisticsNumberOfNodes`](#MeshWorkflowOutcome.MeshStatisticsNumberOfNodes)                                                         | Gets the number of mesh nodes captured by this Mesh Statistics outcome.                                                                     |
| [`MeshStatisticsNumberOfPolygonalFaces`](#MeshWorkflowOutcome.MeshStatisticsNumberOfPolygonalFaces)                                       | Gets the number of polygonal faces captured by this Mesh Statistics outcome.                                                                |
| [`MeshStatisticsNumberOfPolyhedralElements`](#MeshWorkflowOutcome.MeshStatisticsNumberOfPolyhedralElements)                               | Gets the number of polyhedral elements captured by this Mesh Statistics outcome.                                                            |
| [`MeshStatisticsNumberOfPyr13`](#MeshWorkflowOutcome.MeshStatisticsNumberOfPyr13)                                                         | Gets the number of Pyr13 elements captured by this Mesh Statistics outcome.                                                                 |
| [`MeshStatisticsNumberOfPyr5`](#MeshWorkflowOutcome.MeshStatisticsNumberOfPyr5)                                                           | Gets the number of Pyr5 elements captured by this Mesh Statistics outcome.                                                                  |
| [`MeshStatisticsNumberOfQuad4`](#MeshWorkflowOutcome.MeshStatisticsNumberOfQuad4)                                                         | Gets the number of Quad4 elements captured by this Mesh Statistics outcome.                                                                 |
| [`MeshStatisticsNumberOfQuad8`](#MeshWorkflowOutcome.MeshStatisticsNumberOfQuad8)                                                         | Gets the number of Quad8 elements captured by this Mesh Statistics outcome.                                                                 |
| [`MeshStatisticsNumberOfSolidElements`](#MeshWorkflowOutcome.MeshStatisticsNumberOfSolidElements)                                         | Gets the number of solid mesh elements captured by this Mesh Statistics outcome.                                                            |
| [`MeshStatisticsNumberOfTet10`](#MeshWorkflowOutcome.MeshStatisticsNumberOfTet10)                                                         | Gets the number of Tet10 elements captured by this Mesh Statistics outcome.                                                                 |
| [`MeshStatisticsNumberOfTet4`](#MeshWorkflowOutcome.MeshStatisticsNumberOfTet4)                                                           | Gets the number of Tet4 elements captured by this Mesh Statistics outcome.                                                                  |
| [`MeshStatisticsNumberOfTri3`](#MeshWorkflowOutcome.MeshStatisticsNumberOfTri3)                                                           | Gets the number of Tri3 elements captured by this Mesh Statistics outcome.                                                                  |
| [`MeshStatisticsNumberOfTri6`](#MeshWorkflowOutcome.MeshStatisticsNumberOfTri6)                                                           | Gets the number of Tri6 elements captured by this Mesh Statistics outcome.                                                                  |
| [`MeshStatisticsNumberOfWed15`](#MeshWorkflowOutcome.MeshStatisticsNumberOfWed15)                                                         | Gets the number of Wed15 elements captured by this Mesh Statistics outcome.                                                                 |
| [`MeshStatisticsNumberOfWed6`](#MeshWorkflowOutcome.MeshStatisticsNumberOfWed6)                                                           | Gets the number of Wed6 elements captured by this Mesh Statistics outcome.                                                                  |
| [`MissingBoundaries`](#MeshWorkflowOutcome.MissingBoundaries)                                                                             | Gets the count of faces with missing boundaries.                                                                                            |
| [`MultiZoneDefeaturedEdges`](#MeshWorkflowOutcome.MultiZoneDefeaturedEdges)                                                               | Gets the number of edges for which MultiZone Meshing output no mesh elements.                                                               |
| [`MultiZoneDefeaturedEdgesScopeMethod`](#MeshWorkflowOutcome.MultiZoneDefeaturedEdgesScopeMethod)                                         | Gets the scope method for the MultiZone Defeatured Edges scope outcome.                                                                     |
| [`MultiZoneDefeaturedEdgesScopePattern`](#MeshWorkflowOutcome.MultiZoneDefeaturedEdgesScopePattern)                                       | Gets the scope pattern for the MultiZone Defeatured Edges scope outcome.                                                                    |
| [`MultiZoneDefeaturedFaces`](#MeshWorkflowOutcome.MultiZoneDefeaturedFaces)                                                               | Gets the number of faces for which MultiZone Meshing output no mesh elements.                                                               |
| [`MultiZoneDefeaturedFacesScopeMethod`](#MeshWorkflowOutcome.MultiZoneDefeaturedFacesScopeMethod)                                         | Gets the scope method for the MultiZone Defeatured Faces scope outcome.                                                                     |
| [`MultiZoneDefeaturedFacesScopePattern`](#MeshWorkflowOutcome.MultiZoneDefeaturedFacesScopePattern)                                       | Gets the scope pattern for the MultiZone Defeatured Faces scope outcome.                                                                    |
| [`MultiZoneFailedBlocking`](#MeshWorkflowOutcome.MultiZoneFailedBlocking)                                                                 | Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Blocking failed.                                         |
| [`MultiZoneFailedBlockingScopeMethod`](#MeshWorkflowOutcome.MultiZoneFailedBlockingScopeMethod)                                           | Gets the scope method for the MultiZone Failed Blocking scope outcome.                                                                      |
| [`MultiZoneFailedBlockingScopePattern`](#MeshWorkflowOutcome.MultiZoneFailedBlockingScopePattern)                                         | Gets the scope pattern for the MultiZone Failed Blocking scope outcome.                                                                     |
| [`MultiZoneFailedInflation`](#MeshWorkflowOutcome.MultiZoneFailedInflation)                                                               | Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Inflation failed.                                        |
| [`MultiZoneFailedInflationScopeMethod`](#MeshWorkflowOutcome.MultiZoneFailedInflationScopeMethod)                                         | Gets the scope method for the MultiZone Failed Inflation scope outcome.                                                                     |
| [`MultiZoneFailedInflationScopePattern`](#MeshWorkflowOutcome.MultiZoneFailedInflationScopePattern)                                       | Gets the scope pattern for the MultiZone Failed Inflation scope outcome.                                                                    |
| [`MultiZoneFailedInputMesh`](#MeshWorkflowOutcome.MultiZoneFailedInputMesh)                                                               | Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Meshing failed to conformally connect to the input mesh. |
| [`MultiZoneFailedInputScopeMethod`](#MeshWorkflowOutcome.MultiZoneFailedInputScopeMethod)                                                 | Gets the scope method for the MultiZone Failed Input Mesh Connection scope outcome.                                                         |
| [`MultiZoneFailedInputScopePattern`](#MeshWorkflowOutcome.MultiZoneFailedInputScopePattern)                                               | Gets the scope pattern for the MultiZone Failed Input Mesh Connection scope outcome.                                                        |
| [`MultiZoneFailedMesh`](#MeshWorkflowOutcome.MultiZoneFailedMesh)                                                                         | Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Meshing failed to create a mesh.                         |
| [`MultiZoneFailedMeshCheck`](#MeshWorkflowOutcome.MultiZoneFailedMeshCheck)                                                               | Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Meshing created inverted or invalid elements.            |
| [`MultiZoneFailedMeshCheckScopeMethod`](#MeshWorkflowOutcome.MultiZoneFailedMeshCheckScopeMethod)                                         | Gets the scope method for the MultiZone Failed Mesh Check scope outcome.                                                                    |
| [`MultiZoneFailedMeshCheckScopePattern`](#MeshWorkflowOutcome.MultiZoneFailedMeshCheckScopePattern)                                       | Gets the scope pattern for the MultiZone Failed Mesh Check scope outcome.                                                                   |
| [`MultiZoneFailedMeshScopeMethod`](#MeshWorkflowOutcome.MultiZoneFailedMeshScopeMethod)                                                   | Gets the scope method for the MultiZone Failed Mesh scope outcome.                                                                          |
| [`MultiZoneFailedMeshScopePattern`](#MeshWorkflowOutcome.MultiZoneFailedMeshScopePattern)                                                 | Gets the scope pattern for the MultiZone Failed Mesh scope outcome.                                                                         |
| [`MultiZoneFreeMesh`](#MeshWorkflowOutcome.MultiZoneFreeMesh)                                                                             | Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Blocking failed to create a swept or mapped block.       |
| [`MultiZoneFreeMeshScopeMethod`](#MeshWorkflowOutcome.MultiZoneFreeMeshScopeMethod)                                                       | Gets the scope method for the MultiZone Free Mesh scope outcome.                                                                            |
| [`MultiZoneFreeMeshScopePattern`](#MeshWorkflowOutcome.MultiZoneFreeMeshScopePattern)                                                     | Gets the scope pattern for the MultiZone Free Mesh scope outcome.                                                                           |
| [`Name`](#MeshWorkflowOutcome.Name)                                                                                                       | Name property.                                                                                                                              |
| [`NewEdges`](#MeshWorkflowOutcome.NewEdges)                                                                                               | Gets the count of new edges after repairing.                                                                                                |
| [`NewFaces`](#MeshWorkflowOutcome.NewFaces)                                                                                               | Gets the count of new faces after repairing.                                                                                                |
| [`NoBoundaryLoops`](#MeshWorkflowOutcome.NoBoundaryLoops)                                                                                 | Gets the count of topology faces with no boundary loops.                                                                                    |
| [`NoEdgeCurveData`](#MeshWorkflowOutcome.NoEdgeCurveData)                                                                                 | Gets the count of topology edges without curve data.                                                                                        |
| [`NoFaceSurfaceData`](#MeshWorkflowOutcome.NoFaceSurfaceData)                                                                             | Gets the count of topology faces without surface data.                                                                                      |
| [`NodeMergeCount`](#MeshWorkflowOutcome.NodeMergeCount)                                                                                   | Gets the total number of nodes merged by the Merge Nodes operation.                                                                         |
| [`NumberOfFacesWithSkewedElements`](#MeshWorkflowOutcome.NumberOfFacesWithSkewedElements)                                                 | Gets the count of faces with skewed elements.                                                                                               |
| [`NumberOfFreeEdges`](#MeshWorkflowOutcome.NumberOfFreeEdges)                                                                             | Gets the count of free edges.                                                                                                               |
| [`NumberOfMultiEdges`](#MeshWorkflowOutcome.NumberOfMultiEdges)                                                                           | Gets the count of multi edges.                                                                                                              |
| [`NumberOfSelfIntersections`](#MeshWorkflowOutcome.NumberOfSelfIntersections)                                                             | Gets the count of faces with self-intersections.                                                                                            |
| [`NumberOfVolumes`](#MeshWorkflowOutcome.NumberOfVolumes)                                                                                 | Gets the count of volumes.                                                                                                                  |
| [`ObjectId`](#MeshWorkflowOutcome.ObjectId)                                                                                               | ObjectId property.                                                                                                                          |
| [`ObjectState`](#MeshWorkflowOutcome.ObjectState)                                                                                         | ObjectState property.                                                                                                                       |
| [`ObjectTags`](#MeshWorkflowOutcome.ObjectTags)                                                                                           | ObjectTags property.                                                                                                                        |
| [`OutcomeDescription`](#MeshWorkflowOutcome.OutcomeDescription)                                                                           | OutcomeDescription property.                                                                                                                |
| [`OutcomeDescriptionJson`](#MeshWorkflowOutcome.OutcomeDescriptionJson)                                                                   | OutcomeDescriptionJson property.                                                                                                            |
| [`OutcomeString`](#MeshWorkflowOutcome.OutcomeString)                                                                                     | Gets the OutcomeString.                                                                                                                     |
| [`OutcomeType`](#MeshWorkflowOutcome.OutcomeType)                                                                                         | Returns the type of the control.                                                                                                            |
| [`OutcomeTypeInformation`](#MeshWorkflowOutcome.OutcomeTypeInformation)                                                                   | OutcomeTypeInformation property.                                                                                                            |
| [`OutcomeTypeInformationJson`](#MeshWorkflowOutcome.OutcomeTypeInformationJson)                                                           | OutcomeTypeInformationJson property.                                                                                                        |
| [`OverlappingFaces`](#MeshWorkflowOutcome.OverlappingFaces)                                                                               | Gets the count of faces which overlap.                                                                                                      |
| [`Parent`](#MeshWorkflowOutcome.Parent)                                                                                                   | Parent property.                                                                                                                            |
| [`PerformanceElapsedTime`](#MeshWorkflowOutcome.PerformanceElapsedTime)                                                                   | Gets the PerformanceElapsedTime.                                                                                                            |
| [`PerformanceFinalProcessMemory`](#MeshWorkflowOutcome.PerformanceFinalProcessMemory)                                                     | Gets the PerformanceFinalProcessMemory.                                                                                                     |
| [`PerformancePeakProcessMemory`](#MeshWorkflowOutcome.PerformancePeakProcessMemory)                                                       | Gets the PerformancePeakProcessMemory.                                                                                                      |
| [`PrimeMeshFailureCodeID`](#MeshWorkflowOutcome.PrimeMeshFailureCodeID)                                                                   | Gets the PrimeMeshFailureCodeID.                                                                                                            |
| [`PrimeMeshFailureCodeString`](#MeshWorkflowOutcome.PrimeMeshFailureCodeString)                                                           | Gets the PrimeMeshFailureCodeString.                                                                                                        |
| [`PrimeMeshWarningCodeID`](#MeshWorkflowOutcome.PrimeMeshWarningCodeID)                                                                   | Gets the PrimeMeshWarningCodeID.                                                                                                            |
| [`PrimeMeshWarningCodeString`](#MeshWorkflowOutcome.PrimeMeshWarningCodeString)                                                           | Gets the PrimeMeshWarningCodeString.                                                                                                        |
| [`Properties`](#MeshWorkflowOutcome.Properties)                                                                                           | Gets the list of properties for this object.                                                                                                |
| [`PythonTraceback`](#MeshWorkflowOutcome.PythonTraceback)                                                                                 | Gets the PythonTraceback.                                                                                                                   |
| [`PythonTracebackInitialized`](#MeshWorkflowOutcome.PythonTracebackInitialized)                                                           | Gets the PythonTracebackInitialized.                                                                                                        |
| [`RecordingName`](#MeshWorkflowOutcome.RecordingName)                                                                                     |                                                                                                                                             |
| [`ReleaseStatusString`](#MeshWorkflowOutcome.ReleaseStatusString)                                                                         | ReleaseStatusString property.                                                                                                               |
| [`ScopeDefinition`](#MeshWorkflowOutcome.ScopeDefinition)                                                                                 | Gets or sets the type of scope definition for the control scoping. Default: Value.                                                          |
| [`ScopeMethod`](#MeshWorkflowOutcome.ScopeMethod)                                                                                         | Gets or sets the scoping method for the control scoping.                                                                                    |
| [`ScopeOutcome`](#MeshWorkflowOutcome.ScopeOutcome)                                                                                       | Gets or sets the scope outcome for the scoping scoping from a previous operation. Applicable only if scope is defined by outcome.           |
| [`ScopePattern`](#MeshWorkflowOutcome.ScopePattern)                                                                                       | Gets or sets the pattern that defines the scope of the control. Applicable only if scope is defined by value.                               |
| [`SizeFieldName`](#MeshWorkflowOutcome.SizeFieldName)                                                                                     |                                                                                                                                             |
| [`SkewnessMaxValue`](#MeshWorkflowOutcome.SkewnessMaxValue)                                                                               | Gets the SkewnessMaxValue.                                                                                                                  |
| [`SkewnessMinValue`](#MeshWorkflowOutcome.SkewnessMinValue)                                                                               | Gets the SkewnessMinValue.                                                                                                                  |
| [`SkippedEdges`](#MeshWorkflowOutcome.SkippedEdges)                                                                                       | Gets the count of skipped edges after repairing.                                                                                            |
| [`SkippedFaces`](#MeshWorkflowOutcome.SkippedFaces)                                                                                       | Gets the count of skipped faces after repairing.                                                                                            |
| [`SkippedLines`](#MeshWorkflowOutcome.SkippedLines)                                                                                       | Gets the lines that were skipped while reading the csv file.                                                                                |
| [`SmallEdges`](#MeshWorkflowOutcome.SmallEdges)                                                                                           | Gets the count of small edges.                                                                                                              |
| [`SmallestLateralEdgeLength`](#MeshWorkflowOutcome.SmallestLateralEdgeLength)                                                             | Gets the smallest edge length along the lateral direction of stacking.                                                                      |
| [`SmallestStackingEdgeLength`](#MeshWorkflowOutcome.SmallestStackingEdgeLength)                                                           | Gets the smallest edge length along the stacking direction.                                                                                 |
| [`SolderBallBottomPadScopeMethod`](#MeshWorkflowOutcome.SolderBallBottomPadScopeMethod)                                                   | Gets the scope method for the Solder Ball Bottom Pad scope outcome.                                                                         |
| [`SolderBallBottomPadScopePattern`](#MeshWorkflowOutcome.SolderBallBottomPadScopePattern)                                                 | Gets the scope pattern for the Solder Ball Bottom Pad scope outcome.                                                                        |
| [`SolderBallTopPadScopeMethod`](#MeshWorkflowOutcome.SolderBallTopPadScopeMethod)                                                         | Gets the scope method for the Solder Ball Top Pad scope outcome.                                                                            |
| [`SolderBallTopPadScopePattern`](#MeshWorkflowOutcome.SolderBallTopPadScopePattern)                                                       | Gets the scope pattern for the Solder Ball Top Pad scope outcome.                                                                           |
| [`State`](#MeshWorkflowOutcome.State)                                                                                                     | State property.                                                                                                                             |
| [`Status`](#MeshWorkflowOutcome.Status)                                                                                                   | Gets the Status.                                                                                                                            |
| [`Suppressed`](#MeshWorkflowOutcome.Suppressed)                                                                                           | Gets or sets the Suppressed.                                                                                                                |
| [`ThinStripes`](#MeshWorkflowOutcome.ThinStripes)                                                                                         | Gets the count of faces which are considered thin stripes.                                                                                  |
| [`UnconnectedFreeEdges`](#MeshWorkflowOutcome.UnconnectedFreeEdges)                                                                       | Gets the count of unconnected free edges.                                                                                                   |
| [`ValidateMeshAspectRatioWarningElementCount`](#MeshWorkflowOutcome.ValidateMeshAspectRatioWarningElementCount)                           | Gets the number of elements that exceeded the aspect ratio warning limit while validating the mesh.                                         |
| [`ValidateMeshAspectRatioWarningWorstMetric`](#MeshWorkflowOutcome.ValidateMeshAspectRatioWarningWorstMetric)                             | Gets the worst aspect ratio value over the validated scope for the aspect ratio warning.                                                    |
| [`ValidateMeshElementQualityWarningElementCount`](#MeshWorkflowOutcome.ValidateMeshElementQualityWarningElementCount)                     | Gets the number of elements that exceeded the element quality warning limit while validating the mesh.                                      |
| [`ValidateMeshElementQualityWarningWorstMetric`](#MeshWorkflowOutcome.ValidateMeshElementQualityWarningWorstMetric)                       | Gets the worst element quality value over the validated scope for the element quality warning.                                              |
| [`ValidateMeshErrorElementCount`](#MeshWorkflowOutcome.ValidateMeshErrorElementCount)                                                     | Gets the number of elements that exceeded the error limit while validating the mesh.                                                        |
| [`ValidateMeshErrorWorstMetric`](#MeshWorkflowOutcome.ValidateMeshErrorWorstMetric)                                                       | Gets the worst (direction-aware) metric value over the validated scope for the validation error.                                            |
| [`ValidateMeshJacobianRatioCornerNodesWarningElementCount`](#MeshWorkflowOutcome.ValidateMeshJacobianRatioCornerNodesWarningElementCount) | Gets the number of elements that exceeded the Jacobian ratio corner nodes warning limit while validating the mesh.                          |
| [`ValidateMeshJacobianRatioCornerNodesWarningWorstMetric`](#MeshWorkflowOutcome.ValidateMeshJacobianRatioCornerNodesWarningWorstMetric)   | Gets the worst Jacobian ratio (corner nodes) value over the validated scope for the Jacobian ratio corner nodes warning.                    |
| [`ValidateMeshJacobianRatioGaussPointsWarningElementCount`](#MeshWorkflowOutcome.ValidateMeshJacobianRatioGaussPointsWarningElementCount) | Gets the number of elements that exceeded the Jacobian ratio Gauss points warning limit while validating the mesh.                          |
| [`ValidateMeshJacobianRatioGaussPointsWarningWorstMetric`](#MeshWorkflowOutcome.ValidateMeshJacobianRatioGaussPointsWarningWorstMetric)   | Gets the worst Jacobian ratio (Gauss points) value over the validated scope for the Jacobian ratio Gauss points warning.                    |
| [`ValidateMeshJacobianRatioMAPDLWarningElementCount`](#MeshWorkflowOutcome.ValidateMeshJacobianRatioMAPDLWarningElementCount)             | Gets the number of elements that exceeded the Jacobian ratio MAPDL warning limit while validating the mesh.                                 |
| [`ValidateMeshJacobianRatioMAPDLWarningWorstMetric`](#MeshWorkflowOutcome.ValidateMeshJacobianRatioMAPDLWarningWorstMetric)               | Gets the worst Jacobian ratio (MAPDL) value over the validated scope for the Jacobian ratio MAPDL warning.                                  |
| [`ValidateMeshSkewnessWarningElementCount`](#MeshWorkflowOutcome.ValidateMeshSkewnessWarningElementCount)                                 | Gets the number of elements that exceeded the skewness warning limit while validating the mesh.                                             |
| [`ValidateMeshSkewnessWarningWorstMetric`](#MeshWorkflowOutcome.ValidateMeshSkewnessWarningWorstMetric)                                   | Gets the worst skewness value over the validated scope for the skewness warning.                                                            |
| [`ValidateMeshTetCollapseWarningElementCount`](#MeshWorkflowOutcome.ValidateMeshTetCollapseWarningElementCount)                           | Gets the number of elements that exceeded the tet collapse warning limit while validating the mesh.                                         |
| [`ValidateMeshTetCollapseWarningWorstMetric`](#MeshWorkflowOutcome.ValidateMeshTetCollapseWarningWorstMetric)                             | Gets the worst tet collapse value over the validated scope for the tet collapse warning.                                                    |
| [`ValidateMeshWarningElementCount`](#MeshWorkflowOutcome.ValidateMeshWarningElementCount)                                                 | Gets the number of elements that exceeded the warning limit while validating the mesh.                                                      |
| [`ValidateMeshWarpingAngleWarningElementCount`](#MeshWorkflowOutcome.ValidateMeshWarpingAngleWarningElementCount)                         | Gets the number of elements that exceeded the warping angle warning limit while validating the mesh.                                        |
| [`ValidateMeshWarpingAngleWarningWorstMetric`](#MeshWorkflowOutcome.ValidateMeshWarpingAngleWarningWorstMetric)                           | Gets the worst warping angle value over the validated scope for the warping angle warning.                                                  |
| [`VertexCountChange`](#MeshWorkflowOutcome.VertexCountChange)                                                                             | Gets the change in number of vertices due to repairing.                                                                                     |
| [`VisibleProperties`](#MeshWorkflowOutcome.VisibleProperties)                                                                             | Gets the list of properties that are visible for this object.                                                                               |
| [`WarningMessage`](#MeshWorkflowOutcome.WarningMessage)                                                                                   | Gets the warning message.                                                                                                                   |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowOutcome.AspectRatioMaxValue"></a>

### *property* MeshWorkflowOutcome.AspectRatioMaxValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AspectRatioMaxValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.AspectRatioMinValue"></a>

### *property* MeshWorkflowOutcome.AspectRatioMinValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AspectRatioMinValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.AttachedRefs"></a>

### *property* MeshWorkflowOutcome.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.BodyCountChange"></a>

### *property* MeshWorkflowOutcome.BodyCountChange *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the change in number of bodies due to repairing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.BoundingBoxDimensions"></a>

### *property* MeshWorkflowOutcome.BoundingBoxDimensions *: [Ansys.Mechanical.Graphics.Point](../../../Mechanical/Graphics/Point.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.Point) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the bounding box extents of the input aligned along the direction of stacking.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CheckpointUnoDataEDXFilePath"></a>

### *property* MeshWorkflowOutcome.CheckpointUnoDataEDXFilePath *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CheckpointUnoDataEDXFilePath.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Children"></a>

### *property* MeshWorkflowOutcome.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ClsId"></a>

### *property* MeshWorkflowOutcome.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CyclicRegionAxisX"></a>

### *property* MeshWorkflowOutcome.CyclicRegionAxisX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the X component of the detected cyclic region axis direction.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CyclicRegionAxisY"></a>

### *property* MeshWorkflowOutcome.CyclicRegionAxisY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Y component of the detected cyclic region axis direction.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CyclicRegionAxisZ"></a>

### *property* MeshWorkflowOutcome.CyclicRegionAxisZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Z component of the detected cyclic region axis direction.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CyclicRegionCenterX"></a>

### *property* MeshWorkflowOutcome.CyclicRegionCenterX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the X coordinate of the detected cyclic region center.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CyclicRegionCenterY"></a>

### *property* MeshWorkflowOutcome.CyclicRegionCenterY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Y coordinate of the detected cyclic region center.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CyclicRegionCenterZ"></a>

### *property* MeshWorkflowOutcome.CyclicRegionCenterZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Z coordinate of the detected cyclic region center.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CyclicRegionHighBoundariesScopeMethod"></a>

### *property* MeshWorkflowOutcome.CyclicRegionHighBoundariesScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the detected cyclic region high boundaries scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CyclicRegionHighBoundariesScopePattern"></a>

### *property* MeshWorkflowOutcome.CyclicRegionHighBoundariesScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope pattern for the detected cyclic region high boundaries scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CyclicRegionLowBoundariesScopeMethod"></a>

### *property* MeshWorkflowOutcome.CyclicRegionLowBoundariesScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the detected cyclic region low boundaries scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CyclicRegionLowBoundariesScopePattern"></a>

### *property* MeshWorkflowOutcome.CyclicRegionLowBoundariesScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope pattern for the detected cyclic region low boundaries scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DataModelObjectCategory"></a>

### *property* MeshWorkflowOutcome.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DegenerateFaces"></a>

### *property* MeshWorkflowOutcome.DegenerateFaces *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of degenerate topology faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DeviatingFacets"></a>

### *property* MeshWorkflowOutcome.DeviatingFacets *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of topology faces with deviating facets.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsBoundingBoxMaxX"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsBoundingBoxMaxX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the maximum X coordinate of the bounding box captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsBoundingBoxMaxY"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsBoundingBoxMaxY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the maximum Y coordinate of the bounding box captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsBoundingBoxMaxZ"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsBoundingBoxMaxZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the maximum Z coordinate of the bounding box captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsBoundingBoxMinX"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsBoundingBoxMinX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the minimum X coordinate of the bounding box captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsBoundingBoxMinY"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsBoundingBoxMinY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the minimum Y coordinate of the bounding box captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsBoundingBoxMinZ"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsBoundingBoxMinZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the minimum Z coordinate of the bounding box captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfEdgeZones"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfEdgeZones *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of edge zones captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfFaceZones"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfFaceZones *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of face zones captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfGeometryEdges"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfGeometryEdges *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of geometry edges captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfGeometryFaces"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfGeometryFaces *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of geometry faces captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfGeometryVertices"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfGeometryVertices *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of geometry vertices captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfGeometryVolumes"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfGeometryVolumes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of geometry volumes captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfMeshEdgeZonelets"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfMeshEdgeZonelets *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of mesh edge zonelets captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfMeshFaceZonelets"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfMeshFaceZonelets *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of mesh face zonelets captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfParts"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfParts *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of parts captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfUnmeshedGeometryEdges"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfUnmeshedGeometryEdges *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of unmeshed geometry edges captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfUnmeshedGeometryFaces"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfUnmeshedGeometryFaces *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of unmeshed geometry faces captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfUnmeshedGeometryVolumes"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfUnmeshedGeometryVolumes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of unmeshed geometry volumes captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfVolumeZones"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfVolumeZones *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of volume zones captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DomainStatisticsNumberOfVolumes"></a>

### *property* MeshWorkflowOutcome.DomainStatisticsNumberOfVolumes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the total number of volumes (geometry + mesh zonelets) captured by this Domain Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.EdgeCountChange"></a>

### *property* MeshWorkflowOutcome.EdgeCountChange *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the change in number of edges due to repairing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ElementQualityMinValue"></a>

### *property* MeshWorkflowOutcome.ElementQualityMinValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ElementQualityMinValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ExternalMethod"></a>

### *property* MeshWorkflowOutcome.ExternalMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the External Enclosure scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ExternalPattern"></a>

### *property* MeshWorkflowOutcome.ExternalPattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ExternalPattern.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.FMFailureCodeID"></a>

### *property* MeshWorkflowOutcome.FMFailureCodeID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FMFailureCodeID.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.FMFailureCodeString"></a>

### *property* MeshWorkflowOutcome.FMFailureCodeString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FMFailureCodeString.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.FMWarningCodeID"></a>

### *property* MeshWorkflowOutcome.FMWarningCodeID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FMWarningCodeID.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.FMWarningCodeString"></a>

### *property* MeshWorkflowOutcome.FMWarningCodeString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FMWarningCodeString.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.FaceCountChange"></a>

### *property* MeshWorkflowOutcome.FaceCountChange *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the change in number of faces due to repairing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.FailedEdges"></a>

### *property* MeshWorkflowOutcome.FailedEdges *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of failed edges after repairing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.FailedFaces"></a>

### *property* MeshWorkflowOutcome.FailedFaces *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of failed faces after repairing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.FailureInfoInitialized"></a>

### *property* MeshWorkflowOutcome.FailureInfoInitialized *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the FailureInfoInitialized.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.FailureLines"></a>

### *property* MeshWorkflowOutcome.FailureLines *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the lines in the csv file that caused failure/warning in the operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.FailureMessage"></a>

### *property* MeshWorkflowOutcome.FailureMessage *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the failure message.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Figures"></a>

### *property* MeshWorkflowOutcome.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GroupingFolder"></a>

### *property* MeshWorkflowOutcome.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.IconName"></a>

### *property* MeshWorkflowOutcome.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Images"></a>

### *property* MeshWorkflowOutcome.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.IncompleteBoundaries"></a>

### *property* MeshWorkflowOutcome.IncompleteBoundaries *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of faces with incomplete boundaries.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.IncompleteBoundaryLoops"></a>

### *property* MeshWorkflowOutcome.IncompleteBoundaryLoops *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of topology faces with incomplete boundary loops.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.InternalMethod"></a>

### *property* MeshWorkflowOutcome.InternalMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the Internal Enclosure scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.InternalObject"></a>

### *property* MeshWorkflowOutcome.InternalObject *: Ansys.Common.Interop.DSMeshWorkflowObjects.IDSMeshWorkflowOutcomeAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.InternalPattern"></a>

### *property* MeshWorkflowOutcome.InternalPattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the InternalPattern.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.IntersectingBoundaryLoops"></a>

### *property* MeshWorkflowOutcome.IntersectingBoundaryLoops *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of topology faces with intersecting boundary loops.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.IntersectingPairs"></a>

### *property* MeshWorkflowOutcome.IntersectingPairs *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of faces with intersecting pairs.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.InvalidBoundaries"></a>

### *property* MeshWorkflowOutcome.InvalidBoundaries *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of faces with invalid boundary orientation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.InvalidBoundaryLoopOrientation"></a>

### *property* MeshWorkflowOutcome.InvalidBoundaryLoopOrientation *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of topology faces with invalid boundary loop orientation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.LabelEdges"></a>

### *property* MeshWorkflowOutcome.LabelEdges *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the LabelEdges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfCornerNodes"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfCornerNodes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of corner mesh nodes captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfFaceElements"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfFaceElements *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of face elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfHex20"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfHex20 *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of Hex20 elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfHex8"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfHex8 *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of Hex8 elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfMidNodes"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfMidNodes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of mid-side mesh nodes captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfNodes"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfNodes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of mesh nodes captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfPolygonalFaces"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfPolygonalFaces *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of polygonal faces captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfPolyhedralElements"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfPolyhedralElements *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of polyhedral elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfPyr13"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfPyr13 *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of Pyr13 elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfPyr5"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfPyr5 *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of Pyr5 elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfQuad4"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfQuad4 *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of Quad4 elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfQuad8"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfQuad8 *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of Quad8 elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfSolidElements"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfSolidElements *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of solid mesh elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfTet10"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfTet10 *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of Tet10 elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfTet4"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfTet4 *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of Tet4 elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfTri3"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfTri3 *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of Tri3 elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfTri6"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfTri6 *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of Tri6 elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfWed15"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfWed15 *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of Wed15 elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MeshStatisticsNumberOfWed6"></a>

### *property* MeshWorkflowOutcome.MeshStatisticsNumberOfWed6 *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of Wed6 elements captured by this Mesh Statistics outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MissingBoundaries"></a>

### *property* MeshWorkflowOutcome.MissingBoundaries *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of faces with missing boundaries.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneDefeaturedEdges"></a>

### *property* MeshWorkflowOutcome.MultiZoneDefeaturedEdges *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of edges for which MultiZone Meshing output no mesh elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneDefeaturedEdgesScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneDefeaturedEdgesScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the MultiZone Defeatured Edges scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneDefeaturedEdgesScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneDefeaturedEdgesScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope pattern for the MultiZone Defeatured Edges scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneDefeaturedFaces"></a>

### *property* MeshWorkflowOutcome.MultiZoneDefeaturedFaces *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of faces for which MultiZone Meshing output no mesh elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneDefeaturedFacesScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneDefeaturedFacesScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the MultiZone Defeatured Faces scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneDefeaturedFacesScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneDefeaturedFacesScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope pattern for the MultiZone Defeatured Faces scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedBlocking"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedBlocking *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Blocking failed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedBlockingScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedBlockingScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the MultiZone Failed Blocking scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedBlockingScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedBlockingScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope pattern for the MultiZone Failed Blocking scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedInflation"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedInflation *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Inflation failed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedInflationScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedInflationScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the MultiZone Failed Inflation scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedInflationScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedInflationScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope pattern for the MultiZone Failed Inflation scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedInputMesh"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedInputMesh *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Meshing failed to conformally connect to the input mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedInputScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedInputScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the MultiZone Failed Input Mesh Connection scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedInputScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedInputScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope pattern for the MultiZone Failed Input Mesh Connection scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedMesh"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedMesh *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Meshing failed to create a mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedMeshCheck"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedMeshCheck *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Meshing created inverted or invalid elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedMeshCheckScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedMeshCheckScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the MultiZone Failed Mesh Check scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedMeshCheckScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedMeshCheckScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope pattern for the MultiZone Failed Mesh Check scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedMeshScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedMeshScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the MultiZone Failed Mesh scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFailedMeshScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneFailedMeshScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope pattern for the MultiZone Failed Mesh scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFreeMesh"></a>

### *property* MeshWorkflowOutcome.MultiZoneFreeMesh *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of entities (Volumes for 3D, Faces for 2D) for which the MultiZone Blocking failed to create a swept or mapped block.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFreeMeshScopeMethod"></a>

### *property* MeshWorkflowOutcome.MultiZoneFreeMeshScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the MultiZone Free Mesh scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.MultiZoneFreeMeshScopePattern"></a>

### *property* MeshWorkflowOutcome.MultiZoneFreeMeshScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope pattern for the MultiZone Free Mesh scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Name"></a>

### *property* MeshWorkflowOutcome.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.NewEdges"></a>

### *property* MeshWorkflowOutcome.NewEdges *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of new edges after repairing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.NewFaces"></a>

### *property* MeshWorkflowOutcome.NewFaces *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of new faces after repairing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.NoBoundaryLoops"></a>

### *property* MeshWorkflowOutcome.NoBoundaryLoops *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of topology faces with no boundary loops.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.NoEdgeCurveData"></a>

### *property* MeshWorkflowOutcome.NoEdgeCurveData *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of topology edges without curve data.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.NoFaceSurfaceData"></a>

### *property* MeshWorkflowOutcome.NoFaceSurfaceData *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of topology faces without surface data.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.NodeMergeCount"></a>

### *property* MeshWorkflowOutcome.NodeMergeCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the total number of nodes merged by the Merge Nodes operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.NumberOfFacesWithSkewedElements"></a>

### *property* MeshWorkflowOutcome.NumberOfFacesWithSkewedElements *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of faces with skewed elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.NumberOfFreeEdges"></a>

### *property* MeshWorkflowOutcome.NumberOfFreeEdges *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of free edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.NumberOfMultiEdges"></a>

### *property* MeshWorkflowOutcome.NumberOfMultiEdges *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of multi edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.NumberOfSelfIntersections"></a>

### *property* MeshWorkflowOutcome.NumberOfSelfIntersections *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of faces with self-intersections.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.NumberOfVolumes"></a>

### *property* MeshWorkflowOutcome.NumberOfVolumes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of volumes.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ObjectId"></a>

### *property* MeshWorkflowOutcome.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ObjectState"></a>

### *property* MeshWorkflowOutcome.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ObjectTags"></a>

### *property* MeshWorkflowOutcome.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.OutcomeDescription"></a>

### *property* MeshWorkflowOutcome.OutcomeDescription *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutcomeDescription property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.OutcomeDescriptionJson"></a>

### *property* MeshWorkflowOutcome.OutcomeDescriptionJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutcomeDescriptionJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.OutcomeString"></a>

### *property* MeshWorkflowOutcome.OutcomeString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the OutcomeString.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.OutcomeType"></a>

### *property* MeshWorkflowOutcome.OutcomeType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OutcomeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the type of the control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.OutcomeTypeInformation"></a>

### *property* MeshWorkflowOutcome.OutcomeTypeInformation *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutcomeTypeInformation property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.OutcomeTypeInformationJson"></a>

### *property* MeshWorkflowOutcome.OutcomeTypeInformationJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

OutcomeTypeInformationJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.OverlappingFaces"></a>

### *property* MeshWorkflowOutcome.OverlappingFaces *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of faces which overlap.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Parent"></a>

### *property* MeshWorkflowOutcome.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PerformanceElapsedTime"></a>

### *property* MeshWorkflowOutcome.PerformanceElapsedTime *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PerformanceElapsedTime.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PerformanceFinalProcessMemory"></a>

### *property* MeshWorkflowOutcome.PerformanceFinalProcessMemory *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PerformanceFinalProcessMemory.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PerformancePeakProcessMemory"></a>

### *property* MeshWorkflowOutcome.PerformancePeakProcessMemory *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PerformancePeakProcessMemory.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PrimeMeshFailureCodeID"></a>

### *property* MeshWorkflowOutcome.PrimeMeshFailureCodeID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PrimeMeshFailureCodeID.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PrimeMeshFailureCodeString"></a>

### *property* MeshWorkflowOutcome.PrimeMeshFailureCodeString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PrimeMeshFailureCodeString.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PrimeMeshWarningCodeID"></a>

### *property* MeshWorkflowOutcome.PrimeMeshWarningCodeID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PrimeMeshWarningCodeID.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PrimeMeshWarningCodeString"></a>

### *property* MeshWorkflowOutcome.PrimeMeshWarningCodeString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PrimeMeshWarningCodeString.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Properties"></a>

### *property* MeshWorkflowOutcome.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PythonTraceback"></a>

### *property* MeshWorkflowOutcome.PythonTraceback *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PythonTraceback.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PythonTracebackInitialized"></a>

### *property* MeshWorkflowOutcome.PythonTracebackInitialized *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PythonTracebackInitialized.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.RecordingName"></a>

### *property* MeshWorkflowOutcome.RecordingName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="MeshWorkflowOutcome.ReleaseStatusString"></a>

### *property* MeshWorkflowOutcome.ReleaseStatusString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ReleaseStatusString property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ScopeDefinition"></a>

### *property* MeshWorkflowOutcome.ScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the control scoping. Default: Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ScopeMethod"></a>

### *property* MeshWorkflowOutcome.ScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the control scoping.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ScopeOutcome"></a>

### *property* MeshWorkflowOutcome.ScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome for the scoping scoping from a previous operation. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ScopePattern"></a>

### *property* MeshWorkflowOutcome.ScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the pattern that defines the scope of the control. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SizeFieldName"></a>

### *property* MeshWorkflowOutcome.SizeFieldName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="MeshWorkflowOutcome.SkewnessMaxValue"></a>

### *property* MeshWorkflowOutcome.SkewnessMaxValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SkewnessMaxValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SkewnessMinValue"></a>

### *property* MeshWorkflowOutcome.SkewnessMinValue *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SkewnessMinValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SkippedEdges"></a>

### *property* MeshWorkflowOutcome.SkippedEdges *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of skipped edges after repairing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SkippedFaces"></a>

### *property* MeshWorkflowOutcome.SkippedFaces *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of skipped faces after repairing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SkippedLines"></a>

### *property* MeshWorkflowOutcome.SkippedLines *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the lines that were skipped while reading the csv file.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SmallEdges"></a>

### *property* MeshWorkflowOutcome.SmallEdges *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of small edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SmallestLateralEdgeLength"></a>

### *property* MeshWorkflowOutcome.SmallestLateralEdgeLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the smallest edge length along the lateral direction of stacking.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SmallestStackingEdgeLength"></a>

### *property* MeshWorkflowOutcome.SmallestStackingEdgeLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the smallest edge length along the stacking direction.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SolderBallBottomPadScopeMethod"></a>

### *property* MeshWorkflowOutcome.SolderBallBottomPadScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the Solder Ball Bottom Pad scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SolderBallBottomPadScopePattern"></a>

### *property* MeshWorkflowOutcome.SolderBallBottomPadScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope pattern for the Solder Ball Bottom Pad scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SolderBallTopPadScopeMethod"></a>

### *property* MeshWorkflowOutcome.SolderBallTopPadScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope method for the Solder Ball Top Pad scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SolderBallTopPadScopePattern"></a>

### *property* MeshWorkflowOutcome.SolderBallTopPadScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the scope pattern for the Solder Ball Top Pad scope outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.State"></a>

### *property* MeshWorkflowOutcome.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Status"></a>

### *property* MeshWorkflowOutcome.Status *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshWorkflowObjectStatusType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Status.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Suppressed"></a>

### *property* MeshWorkflowOutcome.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ThinStripes"></a>

### *property* MeshWorkflowOutcome.ThinStripes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of faces which are considered thin stripes.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.UnconnectedFreeEdges"></a>

### *property* MeshWorkflowOutcome.UnconnectedFreeEdges *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the count of unconnected free edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshAspectRatioWarningElementCount"></a>

### *property* MeshWorkflowOutcome.ValidateMeshAspectRatioWarningElementCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of elements that exceeded the aspect ratio warning limit while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshAspectRatioWarningWorstMetric"></a>

### *property* MeshWorkflowOutcome.ValidateMeshAspectRatioWarningWorstMetric *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the worst aspect ratio value over the validated scope for the aspect ratio warning.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshElementQualityWarningElementCount"></a>

### *property* MeshWorkflowOutcome.ValidateMeshElementQualityWarningElementCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of elements that exceeded the element quality warning limit while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshElementQualityWarningWorstMetric"></a>

### *property* MeshWorkflowOutcome.ValidateMeshElementQualityWarningWorstMetric *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the worst element quality value over the validated scope for the element quality warning.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshErrorElementCount"></a>

### *property* MeshWorkflowOutcome.ValidateMeshErrorElementCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of elements that exceeded the error limit while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshErrorWorstMetric"></a>

### *property* MeshWorkflowOutcome.ValidateMeshErrorWorstMetric *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the worst (direction-aware) metric value over the validated scope for the validation error.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshJacobianRatioCornerNodesWarningElementCount"></a>

### *property* MeshWorkflowOutcome.ValidateMeshJacobianRatioCornerNodesWarningElementCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of elements that exceeded the Jacobian ratio corner nodes warning limit while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshJacobianRatioCornerNodesWarningWorstMetric"></a>

### *property* MeshWorkflowOutcome.ValidateMeshJacobianRatioCornerNodesWarningWorstMetric *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the worst Jacobian ratio (corner nodes) value over the validated scope for the Jacobian ratio corner nodes warning.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshJacobianRatioGaussPointsWarningElementCount"></a>

### *property* MeshWorkflowOutcome.ValidateMeshJacobianRatioGaussPointsWarningElementCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of elements that exceeded the Jacobian ratio Gauss points warning limit while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshJacobianRatioGaussPointsWarningWorstMetric"></a>

### *property* MeshWorkflowOutcome.ValidateMeshJacobianRatioGaussPointsWarningWorstMetric *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the worst Jacobian ratio (Gauss points) value over the validated scope for the Jacobian ratio Gauss points warning.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshJacobianRatioMAPDLWarningElementCount"></a>

### *property* MeshWorkflowOutcome.ValidateMeshJacobianRatioMAPDLWarningElementCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of elements that exceeded the Jacobian ratio MAPDL warning limit while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshJacobianRatioMAPDLWarningWorstMetric"></a>

### *property* MeshWorkflowOutcome.ValidateMeshJacobianRatioMAPDLWarningWorstMetric *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the worst Jacobian ratio (MAPDL) value over the validated scope for the Jacobian ratio MAPDL warning.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshSkewnessWarningElementCount"></a>

### *property* MeshWorkflowOutcome.ValidateMeshSkewnessWarningElementCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of elements that exceeded the skewness warning limit while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshSkewnessWarningWorstMetric"></a>

### *property* MeshWorkflowOutcome.ValidateMeshSkewnessWarningWorstMetric *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the worst skewness value over the validated scope for the skewness warning.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshTetCollapseWarningElementCount"></a>

### *property* MeshWorkflowOutcome.ValidateMeshTetCollapseWarningElementCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of elements that exceeded the tet collapse warning limit while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshTetCollapseWarningWorstMetric"></a>

### *property* MeshWorkflowOutcome.ValidateMeshTetCollapseWarningWorstMetric *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the worst tet collapse value over the validated scope for the tet collapse warning.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshWarningElementCount"></a>

### *property* MeshWorkflowOutcome.ValidateMeshWarningElementCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of elements that exceeded the warning limit while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshWarpingAngleWarningElementCount"></a>

### *property* MeshWorkflowOutcome.ValidateMeshWarpingAngleWarningElementCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of elements that exceeded the warping angle warning limit while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.ValidateMeshWarpingAngleWarningWorstMetric"></a>

### *property* MeshWorkflowOutcome.ValidateMeshWarpingAngleWarningWorstMetric *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the worst warping angle value over the validated scope for the warping angle warning.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.VertexCountChange"></a>

### *property* MeshWorkflowOutcome.VertexCountChange *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the change in number of vertices due to repairing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.VisibleProperties"></a>

### *property* MeshWorkflowOutcome.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.WarningMessage"></a>

### *property* MeshWorkflowOutcome.WarningMessage *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the warning message.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowOutcome.Activate"></a>

### MeshWorkflowOutcome.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.AddFigure"></a>

### MeshWorkflowOutcome.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.AddImage"></a>

### MeshWorkflowOutcome.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Copy"></a>

### MeshWorkflowOutcome.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CopyTo"></a>

### MeshWorkflowOutcome.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CreateObjRef"></a>

### MeshWorkflowOutcome.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CreateParameter"></a>

### MeshWorkflowOutcome.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Cut"></a>

### MeshWorkflowOutcome.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Delete"></a>

### MeshWorkflowOutcome.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Duplicate"></a>

### MeshWorkflowOutcome.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Equals"></a>

### MeshWorkflowOutcome.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetAPIName"></a>

### MeshWorkflowOutcome.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetAllProperties"></a>

### MeshWorkflowOutcome.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetChildren"></a>

### MeshWorkflowOutcome.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshWorkflowOutcome.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetDetailsView"></a>

### MeshWorkflowOutcome.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetDomainPatternProperties"></a>

### MeshWorkflowOutcome.GetDomainPatternProperties() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainPatternProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetEnumName"></a>

### MeshWorkflowOutcome.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetHashCode"></a>

### MeshWorkflowOutcome.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetIconFile"></a>

### MeshWorkflowOutcome.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetLifetimeService"></a>

### MeshWorkflowOutcome.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetObjectData"></a>

### MeshWorkflowOutcome.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetParameter"></a>

### MeshWorkflowOutcome.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetPath"></a>

### MeshWorkflowOutcome.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetPropertyName"></a>

### MeshWorkflowOutcome.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetPropertyValue"></a>

### MeshWorkflowOutcome.GetPropertyValue(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

### MeshWorkflowOutcome.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetPropertyWorksheetInfo"></a>

### MeshWorkflowOutcome.GetPropertyWorksheetInfo(parentPath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetPropertyWorksheetInfo method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetUnpublishedList"></a>

### MeshWorkflowOutcome.GetUnpublishedList() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetUnpublishedList method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetVisibleProperties"></a>

### MeshWorkflowOutcome.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetVisiblePropertyNames"></a>

### MeshWorkflowOutcome.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GroupAllSimilarChildren"></a>

### MeshWorkflowOutcome.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GroupSimilarObjects"></a>

### MeshWorkflowOutcome.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.InitializeLifetimeService"></a>

### MeshWorkflowOutcome.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.IsPropertyEditable"></a>

### MeshWorkflowOutcome.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowOutcome.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.IsPropertyVisible"></a>

### MeshWorkflowOutcome.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowOutcome.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Paste"></a>

### MeshWorkflowOutcome.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PropertyByAPIName"></a>

### MeshWorkflowOutcome.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PropertyById"></a>

### MeshWorkflowOutcome.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PropertyByName"></a>

### MeshWorkflowOutcome.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PropertyTypeInfo"></a>

### MeshWorkflowOutcome.PropertyTypeInfo(property: Ansys.ACT.Automation.Mechanical.Property) → System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]

PropertyTypeInfo method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.RemoveFromGroup"></a>

### MeshWorkflowOutcome.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.RemoveParameter"></a>

### MeshWorkflowOutcome.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.RenameBasedOnType"></a>

### MeshWorkflowOutcome.RenameBasedOnType() → [None](https://docs.python.org/3/builtins/constants.html#None)

Renames applying the default name based on type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SetPattern"></a>

### MeshWorkflowOutcome.SetPattern(dispId: [int](https://docs.python.org/3/builtins/functions.html#int), pattern: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetPattern method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SetPropertyValue"></a>

### MeshWorkflowOutcome.SetPropertyValue(id: [int](https://docs.python.org/3/builtins/functions.html#int), value: [str](https://docs.python.org/3/builtins/stdtypes.html#str), validate: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SetPublish"></a>

### MeshWorkflowOutcome.SetPublish(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetPublish method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.SetUnpublish"></a>

### MeshWorkflowOutcome.SetUnpublish(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetUnpublish method.

<!-- !! processed by numpydoc !! -->

