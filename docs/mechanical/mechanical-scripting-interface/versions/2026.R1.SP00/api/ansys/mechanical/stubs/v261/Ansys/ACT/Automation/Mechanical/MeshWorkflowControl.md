# `MeshWorkflowControl`

<a id="ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowControl.Activate)                               | Activate the current object.                                                      |
| [`AddFigure`](#MeshWorkflowControl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshWorkflowControl.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MeshWorkflowControl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MeshWorkflowControl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MeshWorkflowControl.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MeshWorkflowControl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MeshWorkflowControl.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MeshWorkflowControl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MeshWorkflowControl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshWorkflowControl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MeshWorkflowControl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MeshWorkflowControl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MeshWorkflowControl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AnchorFreeEdges`](#MeshWorkflowControl.AnchorFreeEdges)                                               | Gets or sets if the free edges of the model should be automatically considered as fixed for the morphing operation.                                                                                                                                                                                                                            |
| [`AppendData`](#MeshWorkflowControl.AppendData)                                                         | Gets or sets whether to append the mesh data being read to the current PrimeMesh model or to clear the model content before the mesh data is being read. The default value is false.                                                                                                                                                           |
| [`ApplySemistructuredPattern`](#MeshWorkflowControl.ApplySemistructuredPattern)                         | Gets or sets whether to apply Semistructured Pattern mapped meshing.                                                                                                                                                                                                                                                                           |
| [`AutoCollapseShortEdges`](#MeshWorkflowControl.AutoCollapseShortEdges)                                 | Gets or sets whether to collapse edges below the specified tolerance. Feature edges and Protected edges are not collapsed.                                                                                                                                                                                                                     |
| [`AutoDeleteInteriorVertices`](#MeshWorkflowControl.AutoDeleteInteriorVertices)                         | Gets or sets whether to delete interior vertices from scoped topology.                                                                                                                                                                                                                                                                         |
| [`AutoPartialDefeature`](#MeshWorkflowControl.AutoPartialDefeature)                                     | Gets or sets whether to partially remove thin faces and sharp angles within provided tolerances, such that only topology impacting mesh quality is removed.                                                                                                                                                                                    |
| [`AutoPinchFaces`](#MeshWorkflowControl.AutoPinchFaces)                                                 | Gets or sets whether to remove small features from topology to improve mesh quality.                                                                                                                                                                                                                                                           |
| [`AutoRemoveSharpAngleFaces`](#MeshWorkflowControl.AutoRemoveSharpAngleFaces)                           | Gets or sets whether to remove sharp angle faces below the specified angle tolerance by merging them to the neighboring faces.                                                                                                                                                                                                                 |
| [`AutoRemoveThinFaces`](#MeshWorkflowControl.AutoRemoveThinFaces)                                       | Gets or sets whether to remove thin faces by merging them with the neighboring faces.                                                                                                                                                                                                                                                          |
| [`AutoRepairEdgesOfFaces`](#MeshWorkflowControl.AutoRepairEdgesOfFaces)                                 | Gets or sets whether to prevent the collapse and defeature of thin or short topologies, and allow the creation of a coarse mesh while keeping topology as-is.                                                                                                                                                                                  |
| [`AutoSuppressInteriorEdges`](#MeshWorkflowControl.AutoSuppressInteriorEdges)                           | Gets or sets whether to suppress interior edges of scoped faces.                                                                                                                                                                                                                                                                               |
| [`AutomaticExternalScope`](#MeshWorkflowControl.AutomaticExternalScope)                                 | Gets or sets whether to define programmatically the external scoping method and pattern for the external enclosure. The default value is false.                                                                                                                                                                                                |
| [`BaseFaceLabel`](#MeshWorkflowControl.BaseFaceLabel)                                                   | Gets or sets the label to be used for the base face.                                                                                                                                                                                                                                                                                           |
| [`BaseFaceScopeDefinition`](#MeshWorkflowControl.BaseFaceScopeDefinition)                               | Gets or sets the type of scope definition for the base face scoping. Default: Value                                                                                                                                                                                                                                                            |
| [`BaseFaceScopeMethod`](#MeshWorkflowControl.BaseFaceScopeMethod)                                       | Gets or sets the scoping method for the base face scoping. Default: Label.                                                                                                                                                                                                                                                                     |
| [`BaseFaceScopeOutcome`](#MeshWorkflowControl.BaseFaceScopeOutcome)                                     | Gets or sets the scope outcome from a previous operation. Applicable only if BaseFaceScopeOutcome is set to Outcome.                                                                                                                                                                                                                           |
| [`BaseFaceScopePattern`](#MeshWorkflowControl.BaseFaceScopePattern)                                     | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if BaseFaceScopeOutcome is set to Value.                                                                                                                                                                                                             |
| [`BiasingIntensity`](#MeshWorkflowControl.BiasingIntensity)                                             | Gets or sets the intensity of the biasing.                                                                                                                                                                                                                                                                                                     |
| [`BiasingModality`](#MeshWorkflowControl.BiasingModality)                                               | Gets or sets thebiasing type for the solver operation. Default: Disabled.                                                                                                                                                                                                                                                                      |
| [`BlendToNeighbors`](#MeshWorkflowControl.BlendToNeighbors)                                             | Gets or sets whether to adjust the sizes on adjacent edges of non-mapped mesh regions. Defaults to False.                                                                                                                                                                                                                                      |
| [`CenterPlaneNormalOffset`](#MeshWorkflowControl.CenterPlaneNormalOffset)                               | It defines the desired offset of the plane of the hemisphere from the model.                                                                                                                                                                                                                                                                   |
| [`CenterPosition`](#MeshWorkflowControl.CenterPosition)                                                 | It is defined by “Centered”, “Minimal”, and “User Defined”.                                                                                                                                                                                                                                                                                    |
| [`CheckBodyIntersections`](#MeshWorkflowControl.CheckBodyIntersections)                                 | Gets or sets whether to check for intersections among the scoped bodies. Intersection detection is based on absolute tolerances specified in the Stacker Settings. If not provided, a default absolute tolerance of 0.0 is used.                                                                                                               |
| [`Children`](#MeshWorkflowControl.Children)                                                             | Gets the list of children.                                                                                                                                                                                                                                                                                                                     |
| [`ConformalMeshOnContactSurfaces`](#MeshWorkflowControl.ConformalMeshOnContactSurfaces)                 | Gets or sets whether to decide creation of conformal mesh at contact surfaces.                                                                                                                                                                                                                                                                 |
| [`ConstantHeight`](#MeshWorkflowControl.ConstantHeight)                                                 | Height of a single layer of mesh elements.                                                                                                                                                                                                                                                                                                     |
| [`ControlDataDefinition`](#MeshWorkflowControl.ControlDataDefinition)                                   | This property is used to define if the control data is defined by value or by settings.                                                                                                                                                                                                                                                        |
| [`ControlScopeDefinition`](#MeshWorkflowControl.ControlScopeDefinition)                                 | Gets or sets the type of scope definition for the control scope of the morphing operation. Default: Value                                                                                                                                                                                                                                      |
| [`ControlScopeMethod`](#MeshWorkflowControl.ControlScopeMethod)                                         | Gets or sets the scoping method for the control scope of the morphing operation. Default: Part.                                                                                                                                                                                                                                                |
| [`ControlScopeOutcome`](#MeshWorkflowControl.ControlScopeOutcome)                                       | Gets or sets the scope outcome from a previous operation. Applicable only if 'ControlScopeDefinition' is set to Outcome.                                                                                                                                                                                                                       |
| [`ControlScopePattern`](#MeshWorkflowControl.ControlScopePattern)                                       | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'ControlScopeDefinition' is set to Value.                                                                                                                                                                                                         |
| [`ControlType`](#MeshWorkflowControl.ControlType)                                                       | Returns the type of the control.                                                                                                                                                                                                                                                                                                               |
| [`CoordinateSystem`](#MeshWorkflowControl.CoordinateSystem)                                             | Gets or sets the Coordinate System object used to define the material point location.                                                                                                                                                                                                                                                          |
| [`CreateFaceZone`](#MeshWorkflowControl.CreateFaceZone)                                                 | Gets or sets whether to create a new face zone.                                                                                                                                                                                                                                                                                                |
| [`CreateQuadraticElements`](#MeshWorkflowControl.CreateQuadraticElements)                               | Gets or sets whether to create quadratic elements. The default value is false.                                                                                                                                                                                                                                                                 |
| [`CuboidCenterModality`](#MeshWorkflowControl.CuboidCenterModality)                                     | Gets or sets the rule for the computation of the center of the cuboidal enclosure.                                                                                                                                                                                                                                                             |
| [`DataModelObjectCategory`](#MeshWorkflowControl.DataModelObjectCategory)                               | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                                                   |
| [`DecompositionType`](#MeshWorkflowControl.DecompositionType)                                           | Gets or sets the decomposition type used by the MultiZone mesher. Defaults to “Program Controlled”.                                                                                                                                                                                                                                            |
| [`DefaultOffsetSize`](#MeshWorkflowControl.DefaultOffsetSize)                                           | Gets or sets the size of the offset layers to be used during the stack base operation.                                                                                                                                                                                                                                                         |
| [`DefeatureTolerance`](#MeshWorkflowControl.DefeatureTolerance)                                         | Gets or sets the defeature tolerance applied during meshing. Applicable only if DefeatureToleranceDefineBy is “UserDefined”.                                                                                                                                                                                                                   |
| [`DefeatureToleranceDefineBy`](#MeshWorkflowControl.DefeatureToleranceDefineBy)                         | Gets or sets how the Defeature Tolerance is defined for the MultiZone mesher. Defaults to  “Program Controlled”.                                                                                                                                                                                                                               |
| [`DeleteCollidingFaces`](#MeshWorkflowControl.DeleteCollidingFaces)                                     | Gets or sets whether to delete the model faces colliding with the enclosure. Default is True.                                                                                                                                                                                                                                                  |
| [`DeleteEmptyVolumes`](#MeshWorkflowControl.DeleteEmptyVolumes)                                         | This property is used to enable or disable the automatic deletion of empty topo volumes  during mesh to topology conversion. The default value is false.                                                                                                                                                                                       |
| [`DeleteInputScope`](#MeshWorkflowControl.DeleteInputScope)                                             | Gets or sets whether to delete of input scope after wrapping. The default value is false.                                                                                                                                                                                                                                                      |
| [`DeltaX`](#MeshWorkflowControl.DeltaX)                                                                 | Gets or sets the x coordinate of the delta attribute of the corresponding control.                                                                                                                                                                                                                                                             |
| [`DeltaY`](#MeshWorkflowControl.DeltaY)                                                                 | Gets or sets the y coordinate of the delta attribute of the corresponding control.                                                                                                                                                                                                                                                             |
| [`DeltaZ`](#MeshWorkflowControl.DeltaZ)                                                                 | Gets or sets the z coordinate of the delta attribute of the corresponding control.                                                                                                                                                                                                                                                             |
| [`DihedralAngle`](#MeshWorkflowControl.DihedralAngle)                                                   | The dihedral angle is the angle between the normal vectors of two element faces.                                                                                                                                                                                                                                                               |
| [`DirectionX`](#MeshWorkflowControl.DirectionX)                                                         | Gets or sets the X component of the direction vector, with respect to the Global Coordinate System.                                                                                                                                                                                                                                            |
| [`DirectionY`](#MeshWorkflowControl.DirectionY)                                                         | Gets or sets the Y component of the direction vector, with respect to the Global Coordinate System.                                                                                                                                                                                                                                            |
| [`DirectionZ`](#MeshWorkflowControl.DirectionZ)                                                         | Gets or sets the Z component of the direction vector, with respect to the Global Coordinate System.                                                                                                                                                                                                                                            |
| [`Distance`](#MeshWorkflowControl.Distance)                                                             | Gets or sets the distance from the control area considered morphable for the morphing operation. Applicable only if SurfaceScopeModality is set to 'Distance'.                                                                                                                                                                                 |
| [`EdgeBiasingDefineBy`](#MeshWorkflowControl.EdgeBiasingDefineBy)                                       | Gets or sets how the scoped edges meshing size is defined for MultiZone edge biasing. Defaults to NumberOfDivisions.                                                                                                                                                                                                                           |
| [`EdgeBiasingType`](#MeshWorkflowControl.EdgeBiasingType)                                               | Gets or sets the type of biasing to apply along the scoped edges for MultiZone edge biasing. Defaults to Uniform.                                                                                                                                                                                                                              |
| [`EdgeLabelName`](#MeshWorkflowControl.EdgeLabelName)                                                   | This property is used to rename the default edge label name generated during execution of step.                                                                                                                                                                                                                                                |
| [`ElementSize`](#MeshWorkflowControl.ElementSize)                                                       | Define element size to achieve desired mesh results. User can achieve coarse, medium, or fine mesh by varying this value.                                                                                                                                                                                                                      |
| [`ElementsPerGap`](#MeshWorkflowControl.ElementsPerGap)                                                 | Gets or sets the minimum number of element layers to be generated per gap for the Proximity Sizing control by locally controlling the element size. The element size is defined as the gap size divided by ElementsPerGap, fractional values are supported for defining local element sizes larger than the gap size. The default values is 3. |
| [`EnableCheckpoint`](#MeshWorkflowControl.EnableCheckpoint)                                             | Flag whether to enable a checkpoint or not. The default value is false.                                                                                                                                                                                                                                                                        |
| [`ExcludeEnclosure`](#MeshWorkflowControl.ExcludeEnclosure)                                             | Gets or sets whether to exclude the enclosure from the wrapper scope . The default value is false.                                                                                                                                                                                                                                             |
| [`ExcludeScopeDefinition`](#MeshWorkflowControl.ExcludeScopeDefinition)                                 | Gets or sets the type of scope definition for the Hole Patching exclusion scoping. Default: Value                                                                                                                                                                                                                                              |
| [`ExcludeScopeMethod`](#MeshWorkflowControl.ExcludeScopeMethod)                                         | Gets or sets the scoping method for the Hole Patching exclusion scoping. Default: Label.                                                                                                                                                                                                                                                       |
| [`ExcludeScopeOutcome`](#MeshWorkflowControl.ExcludeScopeOutcome)                                       | Gets or sets the scope outcome from a previous operation for the Hole Patching exclusion scoping. Applicable only if scope is defined by outcome.                                                                                                                                                                                              |
| [`ExcludeScopePattern`](#MeshWorkflowControl.ExcludeScopePattern)                                       | Gets or sets the part, zone or label name pattern for the Hole Patching exclusion scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                       |
| [`ExternalLabelName`](#MeshWorkflowControl.ExternalLabelName)                                           | This property is used to rename the default external label name generated during execution of step.                                                                                                                                                                                                                                            |
| [`ExternalScopeDefinition`](#MeshWorkflowControl.ExternalScopeDefinition)                               | It is defined by value or outcome depending on if the External scope is defined manual by the user or defined based on a previous outcome.                                                                                                                                                                                                     |
| [`ExternalScopeMethod`](#MeshWorkflowControl.ExternalScopeMethod)                                       | The method can be label/zone/part and it is applied to external region of enclosure.                                                                                                                                                                                                                                                           |
| [`ExternalScopeOutcome`](#MeshWorkflowControl.ExternalScopeOutcome)                                     | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.                                                                                                      |
| [`ExternalScopePattern`](#MeshWorkflowControl.ExternalScopePattern)                                     | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                                                                                                                                  |
| [`ExtractFeatureEdges`](#MeshWorkflowControl.ExtractFeatureEdges)                                       | Gets or sets whether to extract automatically the feature edges after the operation.                                                                                                                                                                                                                                                           |
| [`FaceZoneByPart`](#MeshWorkflowControl.FaceZoneByPart)                                                 | Gets or sets whether to define an independent face zone for each input part.                                                                                                                                                                                                                                                                   |
| [`FaceZoneName`](#MeshWorkflowControl.FaceZoneName)                                                     | This property is used to define the name of the default face zone name generated during execution of step.                                                                                                                                                                                                                                     |
| [`FacesWithSkewedElementsLabelName`](#MeshWorkflowControl.FacesWithSkewedElementsLabelName)             | Gets or sets the name to use when creating labels based on faces with skewed elements.                                                                                                                                                                                                                                                         |
| [`FieldName`](#MeshWorkflowControl.FieldName)                                                           | Gets or sets the label name to be applied.                                                                                                                                                                                                                                                                                                     |
| [`Figures`](#MeshWorkflowControl.Figures)                                                               | Gets the list of associated figures.                                                                                                                                                                                                                                                                                                           |
| [`Filename`](#MeshWorkflowControl.Filename)                                                             | Assign full path to the filename would like to Import/Export.                                                                                                                                                                                                                                                                                  |
| [`Filenames`](#MeshWorkflowControl.Filenames)                                                           | Assign paths with '|' seperator to this property to read multiple files, pass without seperator if single file.                                                                                                                                                                                                                                |
| [`FixedScopeDefinition`](#MeshWorkflowControl.FixedScopeDefinition)                                     | Gets or sets the type of scope definition for the fixed scope of the morphing operation. Default: Value                                                                                                                                                                                                                                        |
| [`FixedScopeMethod`](#MeshWorkflowControl.FixedScopeMethod)                                             | Gets or sets the scoping method for the fixed scope of the morphing operation. Default: Label.                                                                                                                                                                                                                                                 |
| [`FixedScopeOutcome`](#MeshWorkflowControl.FixedScopeOutcome)                                           | Gets or sets the scope outcome from a previous operation. Applicable only if 'FixedScopeDefinition' is set to Outcome.                                                                                                                                                                                                                         |
| [`FixedScopePattern`](#MeshWorkflowControl.FixedScopePattern)                                           | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'FixedScopeDefinition' is set to Value.                                                                                                                                                                                                           |
| [`ForceSubMapping`](#MeshWorkflowControl.ForceSubMapping)                                               | Gets or sets whether to force a sub-mapped mesh by automatically setting mapped mesh vertex types on the scoped faces. Defaults to False.                                                                                                                                                                                                      |
| [`FreeEdgesLabelName`](#MeshWorkflowControl.FreeEdgesLabelName)                                         | Gets or sets the label name to be applied to free edges.                                                                                                                                                                                                                                                                                       |
| [`FreeFaceMeshType`](#MeshWorkflowControl.FreeFaceMeshType)                                             | Gets or sets the type of elements for the MultiZone mesher free face mesh. Defaults to “All Quads”.                                                                                                                                                                                                                                            |
| [`FreeMeshScopeDefinition`](#MeshWorkflowControl.FreeMeshScopeDefinition)                               | Gets or sets the type of scope definition for the Free Mesh scoping. Default: Value.                                                                                                                                                                                                                                                           |
| [`FreeMeshScopeMethod`](#MeshWorkflowControl.FreeMeshScopeMethod)                                       | Gets or sets the scoping method for the Free Mesh scoping. Default: Label.                                                                                                                                                                                                                                                                     |
| [`FreeMeshScopeOutcome`](#MeshWorkflowControl.FreeMeshScopeOutcome)                                     | Gets or sets the scope outcome for Free Mesh scoping from a previous operation. Applicable only if scope is defined by outcome.                                                                                                                                                                                                                |
| [`FreeMeshScopePattern`](#MeshWorkflowControl.FreeMeshScopePattern)                                     | Gets or sets the zone or label name pattern that defines the Free Mesh scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                                  |
| [`FreeVolumeMeshType`](#MeshWorkflowControl.FreeVolumeMeshType)                                         | Gets or sets how free mesh blocks should be treated by the MultiZone meshing algorithm. Defaults to “NotAllowed”.                                                                                                                                                                                                                              |
| [`FreezeBoundaryNodes`](#MeshWorkflowControl.FreezeBoundaryNodes)                                       | Gets or sets whether to freeze the boundary nodes when the improvement of the volume mesh is executed.                                                                                                                                                                                                                                         |
| [`GrowthRate`](#MeshWorkflowControl.GrowthRate)                                                         | Gradient of element size as each layer grows.                                                                                                                                                                                                                                                                                                  |
| [`HemisphereCenterModality`](#MeshWorkflowControl.HemisphereCenterModality)                             | This property is used to define the rule for the computation of the center of the hemispherical enclosure.                                                                                                                                                                                                                                     |
| [`HemisphereOrientationModality`](#MeshWorkflowControl.HemisphereOrientationModality)                   | This property is used to define the rule for the computation of the orientation of the hemispherical enclosure.                                                                                                                                                                                                                                |
| [`HexcoreTetLayerRelativeWidth`](#MeshWorkflowControl.HexcoreTetLayerRelativeWidth)                     | Gets or sets the gap ratio, relative to the surface mesh size, between the volume mesh hexahedral core and the geometry surface. Default is 0.25.                                                                                                                                                                                              |
| [`IgnoreOrientation`](#MeshWorkflowControl.IgnoreOrientation)                                           | Gets or sets whether to ignore the face normal orientation while calculating the proximity for the Proximity Sizing control. The default value is False.                                                                                                                                                                                       |
| [`IgnoreSelfProximity`](#MeshWorkflowControl.IgnoreSelfProximity)                                       | Gets or sets whether to ignore the proximity between two faces from the same face zone while calculating the proximity for the Proximity Sizing control. The default value is True.                                                                                                                                                            |
| [`Images`](#MeshWorkflowControl.Images)                                                                 | Gets the list of associated images.                                                                                                                                                                                                                                                                                                            |
| [`IncompleteBoundariesLabelName`](#MeshWorkflowControl.IncompleteBoundariesLabelName)                   | Gets or sets the label name to be applied to faces with incomplete boundaries.                                                                                                                                                                                                                                                                 |
| [`InnerScopeDefinition`](#MeshWorkflowControl.InnerScopeDefinition)                                     | It is defined by value or outcome depending on if the Inner scope is defined manually by the user or defined based on a previous outcome.                                                                                                                                                                                                      |
| [`InnerScopeMethod`](#MeshWorkflowControl.InnerScopeMethod)                                             | The method can be label/zone/part and it is applied to inner region of enclosure.                                                                                                                                                                                                                                                              |
| [`InnerScopeOutcome`](#MeshWorkflowControl.InnerScopeOutcome)                                           | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.                                                                                                      |
| [`InnerScopePattern`](#MeshWorkflowControl.InnerScopePattern)                                           | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                                                                                                                                  |
| [`InputMeshScopeDefinition`](#MeshWorkflowControl.InputMeshScopeDefinition)                             | Gets or sets the type of scope definition for the Input Mesh scoping. Default: Value.                                                                                                                                                                                                                                                          |
| [`InputMeshScopeMethod`](#MeshWorkflowControl.InputMeshScopeMethod)                                     | Gets or sets the scoping method for the Input Mesh scoping. Default: Label.                                                                                                                                                                                                                                                                    |
| [`InputMeshScopeOutcome`](#MeshWorkflowControl.InputMeshScopeOutcome)                                   | Gets or sets the scope outcome for Input Mesh scoping from a previous operation. Applicable only if InputMeshScopeDefinition is set to Outcome.                                                                                                                                                                                                |
| [`InputMeshScopePattern`](#MeshWorkflowControl.InputMeshScopePattern)                                   | Gets or sets the zone or label name pattern that defines the Input Mesh scoping. Applicable only if InputMeshScopeDefinition is set to Value.                                                                                                                                                                                                  |
| [`InternalLabelName`](#MeshWorkflowControl.InternalLabelName)                                           | This property is used to rename the default Internal label name generated during execution of step.                                                                                                                                                                                                                                            |
| [`InternalObject`](#MeshWorkflowControl.InternalObject)                                                 | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                             |
| [`IntersectingFaceTolerance`](#MeshWorkflowControl.IntersectingFaceTolerance)                           | Gets or sets the minimum angle used in finding thin stripes with topology diagnostics. Defaults to 25 degrees.                                                                                                                                                                                                                                 |
| [`IntersectingPairsLabelName`](#MeshWorkflowControl.IntersectingPairsLabelName)                         | Gets or sets the label name to be applied to intersecting pairs of faces.                                                                                                                                                                                                                                                                      |
| [`InvalidBoundariesLabelName`](#MeshWorkflowControl.InvalidBoundariesLabelName)                         | Gets or sets the label name to be applied to faces with invalid boundary orientation.                                                                                                                                                                                                                                                          |
| [`LabelName`](#MeshWorkflowControl.LabelName)                                                           | This property is used to rename the default label name generated during execution of step.                                                                                                                                                                                                                                                     |
| [`LateralDefeatureSize`](#MeshWorkflowControl.LateralDefeatureSize)                                     | Gets or sets the defeature size to be used along the lateral direction of stacking.                                                                                                                                                                                                                                                            |
| [`MappedBlocksSplitAngle`](#MeshWorkflowControl.MappedBlocksSplitAngle)                                 | Gets or sets the split angle to be used for introducing extra splits in the mapped blocks when UseMappedBlocksSplitAngle is True. Defaults to 60 degrees, valid range is [0 degrees, 180 degrees]. ArgumentException is thrown for out-of-range values.                                                                                        |
| [`MatchEdgeSpacing`](#MeshWorkflowControl.MatchEdgeSpacing)                                             | Gets or sets whether the mesh spacing on a block edge is adjusted with respect to the spacing on adjacent block edges. Defaults to True.                                                                                                                                                                                                       |
| [`Material`](#MeshWorkflowControl.Material)                                                             | Gets or sets the Material.                                                                                                                                                                                                                                                                                                                     |
| [`MaterialName`](#MeshWorkflowControl.MaterialName)                                                     | Gets or sets the Material Name.                                                                                                                                                                                                                                                                                                                |
| [`MaterialPointDefinition`](#MeshWorkflowControl.MaterialPointDefinition)                               | Gets or sets the material point definition type.                                                                                                                                                                                                                                                                                               |
| [`MaterialPointType`](#MeshWorkflowControl.MaterialPointType)                                           | It defines the type of material point, it can be “Include” or “Exclude”.                                                                                                                                                                                                                                                                       |
| [`MaxHoleSize`](#MeshWorkflowControl.MaxHoleSize)                                                       | Gets or sets the maximum size of holes to be considered for Wrapper Leak Prevention and Hole Patching.                                                                                                                                                                                                                                         |
| [`MaxSize`](#MeshWorkflowControl.MaxSize)                                                               | Gets or sets the maximum size to be used for the volumetric size field sizing computation in the Proximity Sizing and Curvature Sizing controls. This is a length value.                                                                                                                                                                       |
| [`MergeNodesTolerance`](#MeshWorkflowControl.MergeNodesTolerance)                                       | Gets or sets the tolerance within which nodes are to be merged.                                                                                                                                                                                                                                                                                |
| [`MergeNodesToleranceType`](#MeshWorkflowControl.MergeNodesToleranceType)                               | Gets or sets the merge nodes tolerance type to be used when executing Merge Nodes operation. The default value is Absolute.                                                                                                                                                                                                                    |
| [`MergeReplicatedBodies`](#MeshWorkflowControl.MergeReplicatedBodies)                                   | Gets or sets whether to merge the replicated bodies with their corresponding original bodies. Defaults to False.                                                                                                                                                                                                                               |
| [`MergeSideFaces`](#MeshWorkflowControl.MergeSideFaces)                                                 | Gets or sets whether to merge the side faces after the extrusion.                                                                                                                                                                                                                                                                              |
| [`MeshEntityType`](#MeshWorkflowControl.MeshEntityType)                                                 | Gets or sets the target mesh entity type. The default value is Face.                                                                                                                                                                                                                                                                           |
| [`MeshFlowControl`](#MeshWorkflowControl.MeshFlowControl)                                               | This property gives control over the flow of mesh during surface mesh generation. The supported modes are None, and Global Cartesian.                                                                                                                                                                                                          |
| [`MeshedSurfaceLabelSuffix`](#MeshWorkflowControl.MeshedSurfaceLabelSuffix)                             | Gets or sets the suffix to be used when defining labels scoped to faces meshed by the MultiZone mesher.                                                                                                                                                                                                                                        |
| [`MeshedVolumeLabelSuffix`](#MeshWorkflowControl.MeshedVolumeLabelSuffix)                               | Gets or sets the suffix to be used when defining labels scoped to volumes meshed by the MultiZone mesher. Defaults to “MultiZoneMesh”.                                                                                                                                                                                                         |
| [`MinSize`](#MeshWorkflowControl.MinSize)                                                               | Gets or sets the minimum size to be used for the volumetric size field sizing computation in the Proximity Sizing and Curvature Sizing controls. This is a length value.                                                                                                                                                                       |
| [`MinimalAbsoluteDistance`](#MeshWorkflowControl.MinimalAbsoluteDistance)                               | Gets or sets the minimal distance of the enclosure from the input faces as absolute distance. The physically larger resulting distance between 'MinimalNumberOfVolumetricLayers' and 'MinimalAbsoluteDistance' will be used as the effective gap distance. Default is 0.0.                                                                     |
| [`MinimalNumberOfVolumetricLayers`](#MeshWorkflowControl.MinimalNumberOfVolumetricLayers)               | Gets or sets the minimal distance of the enclosure from the input faces as a multiple of the size of the volumetric elements. The physically larger resulting distance between 'MinimalNumberOfVolumetricLayers' and 'MinimalAbsoluteDistance' or 'MinimalRadius' will be used as the effective gap distance. Default is 2.                    |
| [`MinimalRadius`](#MeshWorkflowControl.MinimalRadius)                                                   | It defines the desired minimal radius of the spherical enclosure.                                                                                                                                                                                                                                                                              |
| [`MissingBoundariesLabelName`](#MeshWorkflowControl.MissingBoundariesLabelName)                         | Gets or sets the label name to be applied to faces with missing boundaries.                                                                                                                                                                                                                                                                    |
| [`MorphRecordingName`](#MeshWorkflowControl.MorphRecordingName)                                         | This property is used to define the name for matching the morphing recording to apply to the meshing operation.                                                                                                                                                                                                                                |
| [`MorphSolverModality`](#MeshWorkflowControl.MorphSolverModality)                                       | Gets or sets the solver type for the morphing operation. Default: Fast.                                                                                                                                                                                                                                                                        |
| [`MorphableScopeDefinition`](#MeshWorkflowControl.MorphableScopeDefinition)                             | Gets or sets the type of scope definition for the morphable scope of the morphing operation. Default: Value                                                                                                                                                                                                                                    |
| [`MorphableScopeMethod`](#MeshWorkflowControl.MorphableScopeMethod)                                     | Gets or sets the scoping method for the morphable scope of the morphing operation. Default: Label.                                                                                                                                                                                                                                             |
| [`MorphableScopeOutcome`](#MeshWorkflowControl.MorphableScopeOutcome)                                   | Gets or sets the scope outcome from a previous operation. Applicable only if 'MorphableScopeDefinition' is set to Outcome.                                                                                                                                                                                                                     |
| [`MorphableScopePattern`](#MeshWorkflowControl.MorphableScopePattern)                                   | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'MorphableScopeDefinition' is set to Value.                                                                                                                                                                                                       |
| [`MultiEdgesLabelName`](#MeshWorkflowControl.MultiEdgesLabelName)                                       | Gets or sets the label name to be applied to multi edges.                                                                                                                                                                                                                                                                                      |
| [`NormalAngle`](#MeshWorkflowControl.NormalAngle)                                                       | Gets or sets the maximum allowed normal angle between neighboring elements when computing curvature for the Curvature Sizing control. This value must be between 0 and 180 degrees (0 to π) and defaults to 18 degrees.                                                                                                                        |
| [`NumberOfAttempts`](#MeshWorkflowControl.NumberOfAttempts)                                             | Number of attempts for mesh convergence.                                                                                                                                                                                                                                                                                                       |
| [`NumberOfDivisions`](#MeshWorkflowControl.NumberOfDivisions)                                           | Gets or sets the number of divisions for the scoped edges.                                                                                                                                                                                                                                                                                     |
| [`NumberOfLayers`](#MeshWorkflowControl.NumberOfLayers)                                                 | Number of layers of mesh elements.                                                                                                                                                                                                                                                                                                             |
| [`NumberOfRadialDivisions`](#MeshWorkflowControl.NumberOfRadialDivisions)                               | Gets or sets the number of radial divisions to apply to scoped faces having two concentric boundary loops. Defaults to 0. ArgumentException is thrown for negative values.                                                                                                                                                                     |
| [`NumberOfRings`](#MeshWorkflowControl.NumberOfRings)                                                   | Gets or sets the number of neighbor rings to consider as morphable for the morphing operation. Applicable only if SurfaceScopeModality is 'Rings'.                                                                                                                                                                                             |
| [`NumberOfSolverIterations`](#MeshWorkflowControl.NumberOfSolverIterations)                             | Gets or sets the number of iterations for the solver of the morphing operation.                                                                                                                                                                                                                                                                |
| [`OffsetDistance`](#MeshWorkflowControl.OffsetDistance)                                                 | Gets or sets the offset distance attribute of the corresponding direct morphing control.                                                                                                                                                                                                                                                       |
| [`OffsetFileName`](#MeshWorkflowControl.OffsetFileName)                                                 | Gets or sets the full file path to the .csv file containing the offset coordinates for replication.                                                                                                                                                                                                                                            |
| [`OpenEnclosure`](#MeshWorkflowControl.OpenEnclosure)                                                   | Gets or sets whether an open enclosure is required. Default is False.                                                                                                                                                                                                                                                                          |
| [`OriginX`](#MeshWorkflowControl.OriginX)                                                               | Gets or sets the X coordinate of origin (location of base face) in the volume flattening step.                                                                                                                                                                                                                                                 |
| [`OriginY`](#MeshWorkflowControl.OriginY)                                                               | Gets or sets the Y coordinate of origin (location of base face) in the volume flattening step.                                                                                                                                                                                                                                                 |
| [`OriginZ`](#MeshWorkflowControl.OriginZ)                                                               | Gets or sets the Z coordinate of origin (location of base face) in the volume flattening step.                                                                                                                                                                                                                                                 |
| [`OverlappingFaceTolerance`](#MeshWorkflowControl.OverlappingFaceTolerance)                             | Gets or sets the tolerance for the minimum overlap distance used in finding overlapping faces with topology diagnostics.                                                                                                                                                                                                                       |
| [`OverlappingFacesLabelName`](#MeshWorkflowControl.OverlappingFacesLabelName)                           | Gets or sets the label name to be applied to overlapping faces.                                                                                                                                                                                                                                                                                |
| [`PartName`](#MeshWorkflowControl.PartName)                                                             | Gets or sets the part name to be used when generating.                                                                                                                                                                                                                                                                                         |
| [`PercentageIncrement`](#MeshWorkflowControl.PercentageIncrement)                                       | The number of volumetric Layers determines the number of layers. This property decides whether all the layers are an equal size (default 0.0) or they should gradually increase the size of volume element than previous element.                                                                                                              |
| [`ProjectOnGeometry`](#MeshWorkflowControl.ProjectOnGeometry)                                           | Gets or sets whether to project the mesh on the underlying geometry.                                                                                                                                                                                                                                                                           |
| [`ProjectSideFaces`](#MeshWorkflowControl.ProjectSideFaces)                                             | Gets or sets whether to project the side faces after the extrusion.                                                                                                                                                                                                                                                                            |
| [`Properties`](#MeshWorkflowControl.Properties)                                                         | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                   |
| [`ProtectOnlyBoundaries`](#MeshWorkflowControl.ProtectOnlyBoundaries)                                   | Gets or sets whether the topology protection flag is applied only to the exterior boundary of the scoped boundaries or not. Defaults to False.                                                                                                                                                                                                 |
| [`ProximityRadius`](#MeshWorkflowControl.ProximityRadius)                                               | Gets or sets the radius for the proximity based search.                                                                                                                                                                                                                                                                                        |
| [`ProximityType`](#MeshWorkflowControl.ProximityType)                                                   | Gets or sets the Proximity Type to apply for the entity search. The default value is Radius.                                                                                                                                                                                                                                                   |
| [`QuadBoundaryLayerFaceScopeDefinition`](#MeshWorkflowControl.QuadBoundaryLayerFaceScopeDefinition)     | Gets or sets the type of scope definition for the quad boundary layer face scoping. Default: Value                                                                                                                                                                                                                                             |
| [`QuadBoundaryLayerFaceScopeMethod`](#MeshWorkflowControl.QuadBoundaryLayerFaceScopeMethod)             | Gets or sets the scoping method for the quad boundary layer face scoping. Default: Label.                                                                                                                                                                                                                                                      |
| [`QuadBoundaryLayerFaceScopeOutcome`](#MeshWorkflowControl.QuadBoundaryLayerFaceScopeOutcome)           | Gets or sets the scope outcome from a previous operation. Applicable only if 'QuadBoundaryLayerFaceScopeDefinition' is set to Outcome.                                                                                                                                                                                                         |
| [`QuadBoundaryLayerFaceScopePattern`](#MeshWorkflowControl.QuadBoundaryLayerFaceScopePattern)           | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'QuadBoundaryLayerFaceScopeDefinition' is set to Value.                                                                                                                                                                                           |
| [`QuadBoundaryLayerFirstLayerHeight`](#MeshWorkflowControl.QuadBoundaryLayerFirstLayerHeight)           | Gets or sets the height of the first quad layer.                                                                                                                                                                                                                                                                                               |
| [`QuadBoundaryLayerGrowthRate`](#MeshWorkflowControl.QuadBoundaryLayerGrowthRate)                       | Gets or sets the ratio of heights between subsequent quad layers.                                                                                                                                                                                                                                                                              |
| [`QuadBoundaryLayerNumberOfDivisions`](#MeshWorkflowControl.QuadBoundaryLayerNumberOfDivisions)         | Gets or sets the number of annular divisions on the washer boundary from where the quad layers are grown.                                                                                                                                                                                                                                      |
| [`QuadBoundaryLayerNumberOfLayers`](#MeshWorkflowControl.QuadBoundaryLayerNumberOfLayers)               | Gets or sets the number of quad layers on the washer boundary.                                                                                                                                                                                                                                                                                 |
| [`RecomputeClosedVolumes`](#MeshWorkflowControl.RecomputeClosedVolumes)                                 | Gets or sets whether to recompute closed volumes after the operation.                                                                                                                                                                                                                                                                          |
| [`RegionType`](#MeshWorkflowControl.RegionType)                                                         | It is defined by Material Point or External.                                                                                                                                                                                                                                                                                                   |
| [`RelativeMergeTolerancePercentage`](#MeshWorkflowControl.RelativeMergeTolerancePercentage)             | Gets or sets the percentage of the connected edge lengths to be used as tolerance for merging nodes.                                                                                                                                                                                                                                           |
| [`Remesh`](#MeshWorkflowControl.Remesh)                                                                 | Gets or sets whether to allow the remesh of already meshed volumes. The default value is false.                                                                                                                                                                                                                                                |
| [`RepairModel`](#MeshWorkflowControl.RepairModel)                                                       | Gets or sets whether to repair the PrimeMesh model after the reading operation is executed. The default value is false.                                                                                                                                                                                                                        |
| [`RepairTopologyEdgeAngle`](#MeshWorkflowControl.RepairTopologyEdgeAngle)                               | Gets or sets the angle not to be exceeded when deleting interior vertices. Must be greater than 0 and less than or equal to 180 degrees. Defaults to 70 degrees.                                                                                                                                                                               |
| [`RepairTopologyFeatureAngle`](#MeshWorkflowControl.RepairTopologyFeatureAngle)                         | Gets or sets the angle not to be exceeded when performing repairs. Must be greater than 0 and less than or equal to 180 degrees. Defaults to 30 degrees.                                                                                                                                                                                       |
| [`RepairTopologyPinchTolerance`](#MeshWorkflowControl.RepairTopologyPinchTolerance)                     | Gets or sets the largest tolerance to be used when removing small features.                                                                                                                                                                                                                                                                    |
| [`RepairTopologySharpAngle`](#MeshWorkflowControl.RepairTopologySharpAngle)                             | Gets or sets the maximum angle between faces to be merged. Must be greater than 0 and less than or equal to 30 degrees. Defaults to 10 degrees.                                                                                                                                                                                                |
| [`RepairTopologyShortEdgeLength`](#MeshWorkflowControl.RepairTopologyShortEdgeLength)                   | Gets or sets the maximum edge length to be collapsed.                                                                                                                                                                                                                                                                                          |
| [`RepairTopologySplitEdgesAtApexPoint`](#MeshWorkflowControl.RepairTopologySplitEdgesAtApexPoint)       | Gets or sets whether to split edges at their apex point when repairing topology.                                                                                                                                                                                                                                                               |
| [`RepairTopologyThinFaceWidth`](#MeshWorkflowControl.RepairTopologyThinFaceWidth)                       | Gets or sets the maximum thin face width to be merged.                                                                                                                                                                                                                                                                                         |
| [`RepairTopologyTolerance`](#MeshWorkflowControl.RepairTopologyTolerance)                               | Gets or sets the tolerance value to be used to reduce variability of output topology, prevent the collapse and defeature of thin or short topologies, and allow the creation of a coarse mesh while keeping topology as-is.                                                                                                                    |
| [`RestrictBoundaryNodes`](#MeshWorkflowControl.RestrictBoundaryNodes)                                   | Gets or sets whether to restrict the boundary nodes displacement. The default value is true.                                                                                                                                                                                                                                                   |
| [`RetainMeshedTopoFaces`](#MeshWorkflowControl.RetainMeshedTopoFaces)                                   | Gets or sets whether existing mesh on the scoped faces is to be retained or remeshed.                                                                                                                                                                                                                                                          |
| [`RetainMeshedVolumes`](#MeshWorkflowControl.RetainMeshedVolumes)                                       | Gets or sets whether existing mesh on the scoped volumes is to be retained or remeshed.                                                                                                                                                                                                                                                        |
| [`ReverseSurfaceOrientation`](#MeshWorkflowControl.ReverseSurfaceOrientation)                           | Reverse Surface Orientation. The default value is false.                                                                                                                                                                                                                                                                                       |
| [`RigidScopeDefinition`](#MeshWorkflowControl.RigidScopeDefinition)                                     | Gets or sets the type of scope definition for the rigid scope of the morphing operation. Default: Value                                                                                                                                                                                                                                        |
| [`RigidScopeMethod`](#MeshWorkflowControl.RigidScopeMethod)                                             | Gets or sets the scoping method for the rigid scope of the morphing operation. Default: Label.                                                                                                                                                                                                                                                 |
| [`RigidScopeOutcome`](#MeshWorkflowControl.RigidScopeOutcome)                                           | Gets or sets the scope outcome from a previous operation. Applicable only if 'RigidScopeDefinition' is set to Outcome.                                                                                                                                                                                                                         |
| [`RigidScopePattern`](#MeshWorkflowControl.RigidScopePattern)                                           | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'RigidScopeDefinition' is set to Value.                                                                                                                                                                                                           |
| [`RotationAngle`](#MeshWorkflowControl.RotationAngle)                                                   | Gets or sets the rotation angle attribute of the corresponding direct morphing control.                                                                                                                                                                                                                                                        |
| [`ScaleElementSize`](#MeshWorkflowControl.ScaleElementSize)                                             | Gets or sets whether to apply a scale factor to element size defined by settings.                                                                                                                                                                                                                                                              |
| [`ScaleFactor`](#MeshWorkflowControl.ScaleFactor)                                                       | Scale Factor is used to scale shapes in different dimensions.                                                                                                                                                                                                                                                                                  |
| [`ScopeDefinition`](#MeshWorkflowControl.ScopeDefinition)                                               | It is defined by value or outcome.                                                                                                                                                                                                                                                                                                             |
| [`ScopeMethod`](#MeshWorkflowControl.ScopeMethod)                                                       | The method can be label/zone/part.                                                                                                                                                                                                                                                                                                             |
| [`ScopeOutcome`](#MeshWorkflowControl.ScopeOutcome)                                                     | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.                                                                                                      |
| [`ScopePattern`](#MeshWorkflowControl.ScopePattern)                                                     | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                                                                                                                                  |
| [`SeedFaceScopeDefinition`](#MeshWorkflowControl.SeedFaceScopeDefinition)                               | Gets or sets the type of scope definition for the seed face scoping. Default: Value                                                                                                                                                                                                                                                            |
| [`SeedFaceScopeMethod`](#MeshWorkflowControl.SeedFaceScopeMethod)                                       | Gets or sets the scoping method for the seed face scoping. Default: Label.                                                                                                                                                                                                                                                                     |
| [`SeedFaceScopeOutcome`](#MeshWorkflowControl.SeedFaceScopeOutcome)                                     | Gets or sets the scope outcome from a previous operation. Applicable only if SeedFaceScopeDefinition is set to Outcome.                                                                                                                                                                                                                        |
| [`SeedFaceScopePattern`](#MeshWorkflowControl.SeedFaceScopePattern)                                     | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if SeedFaceScopeDefinition is set to Value.                                                                                                                                                                                                          |
| [`SelfIntersectionsLabelName`](#MeshWorkflowControl.SelfIntersectionsLabelName)                         | Gets or sets the label name to be applied to self intersecting faces.                                                                                                                                                                                                                                                                          |
| [`SemistructuredPatternType`](#MeshWorkflowControl.SemistructuredPatternType)                           | Gets or sets the Semistructured Pattern type used by the MultiZone Mapped Meshing control when ApplySemistructuredPattern is set to True.                                                                                                                                                                                                      |
| [`SharedTopologyLabelName`](#MeshWorkflowControl.SharedTopologyLabelName)                               | Gets or sets the name used as label to scope the shared topology faces which are automatically added as input mesh for MultiZone. Defaults to “MultiZoneMesh/SharedTopologyInputMesh”.                                                                                                                                                         |
| [`SizeFieldDefinition`](#MeshWorkflowControl.SizeFieldDefinition)                                       | Gets or sets how the control's size field pattern should be defined, either by “Value” or by “Outcome”. The default value is “Value”.                                                                                                                                                                                                          |
| [`SizeFieldOutcome`](#MeshWorkflowControl.SizeFieldOutcome)                                             | Gets or sets the outcome to be used to define the size field pattern when SizeFieldDefinition is set to “Outcome”.                                                                                                                                                                                                                             |
| [`SizeFieldPattern`](#MeshWorkflowControl.SizeFieldPattern)                                             | This property is used to define the name pattern for matching the size fields to apply to the meshing operation.                                                                                                                                                                                                                               |
| [`SizeScaleFactor`](#MeshWorkflowControl.SizeScaleFactor)                                               | Gets or sets the factor to apply to the element size values defined by settings.                                                                                                                                                                                                                                                               |
| [`SkewnessLimit`](#MeshWorkflowControl.SkewnessLimit)                                                   | Gets or sets the skewness limit used to mark faces with skewed elements within the Surface Diagnostics outcome. Defaults to 0.9.                                                                                                                                                                                                               |
| [`SmallEdgesLabelName`](#MeshWorkflowControl.SmallEdgesLabelName)                                       | Gets or sets the label name to be applied to small edges.                                                                                                                                                                                                                                                                                      |
| [`SmallEdgesLength`](#MeshWorkflowControl.SmallEdgesLength)                                             | Gets or sets the maximum edge length used in finding small edges with topology diagnostics.                                                                                                                                                                                                                                                    |
| [`SmoothingIterations`](#MeshWorkflowControl.SmoothingIterations)                                       | Allows user to input number of iterations needed to achieve good mesh results.                                                                                                                                                                                                                                                                 |
| [`SmoothingPreserveVolume`](#MeshWorkflowControl.SmoothingPreserveVolume)                               | Gets or sets whether to enable and disable the volume preserving smoothing. If enabled, the smoothing will preserve the initial volume of the input. The default value is false.                                                                                                                                                               |
| [`SolderBallBottomPadDivisions`](#MeshWorkflowControl.SolderBallBottomPadDivisions)                     | Gets or sets the number of vertical divisions for the bottom pad of the solder ball mesh. If an internal pad is generated, shell divisions is used instead.                                                                                                                                                                                    |
| [`SolderBallBottomPadLength`](#MeshWorkflowControl.SolderBallBottomPadLength)                           | Gets or sets the length of the solder ball bottom pad. Positive values for spheres create an external pad beneath the bottom split, and negative values create an internal pad beginning at the bottom split length. Torus will take the absolute value and always create an internal pad.                                                     |
| [`SolderBallBottomSolderLabelName`](#MeshWorkflowControl.SolderBallBottomSolderLabelName)               | Gets or sets the label name to be applied to the bottom split of the solder ball.                                                                                                                                                                                                                                                              |
| [`SolderBallBottomSolderPadFaceLabelName`](#MeshWorkflowControl.SolderBallBottomSolderPadFaceLabelName) | Gets or sets the label name to be applied to the bottom pad face of the solder ball.                                                                                                                                                                                                                                                           |
| [`SolderBallBottomSolderPadLabelName`](#MeshWorkflowControl.SolderBallBottomSolderPadLabelName)         | Gets or sets the label name to be applied to the bottom pad of the solder ball.                                                                                                                                                                                                                                                                |
| [`SolderBallBottomSolderSplit`](#MeshWorkflowControl.SolderBallBottomSolderSplit)                       | Gets or sets the distance from the middle at which the bottom split of the solder ball begins.                                                                                                                                                                                                                                                 |
| [`SolderBallBottomSplitDivisions`](#MeshWorkflowControl.SolderBallBottomSplitDivisions)                 | Gets or sets the number of vertical divisions for the bottom split of the solder ball mesh.                                                                                                                                                                                                                                                    |
| [`SolderBallBottomSplitLength`](#MeshWorkflowControl.SolderBallBottomSplitLength)                       | Gets or sets the length of the solder ball beginning at the bottom split point.                                                                                                                                                                                                                                                                |
| [`SolderBallCenterSolderLabelName`](#MeshWorkflowControl.SolderBallCenterSolderLabelName)               | Gets or sets the label name to be applied to the center of the solder ball.                                                                                                                                                                                                                                                                    |
| [`SolderBallCentralVerticalDivisions`](#MeshWorkflowControl.SolderBallCentralVerticalDivisions)         | Gets or sets the number of vertical divisions for the center of the solder ball mesh, not including top and bottom splits.                                                                                                                                                                                                                     |
| [`SolderBallCylinderShellDivisions`](#MeshWorkflowControl.SolderBallCylinderShellDivisions)             | Gets or sets the number of divisions for the inner cylinder shell of the solder ball mesh.                                                                                                                                                                                                                                                     |
| [`SolderBallInnerCylinderRadius`](#MeshWorkflowControl.SolderBallInnerCylinderRadius)                   | Gets or sets the radius of the solder ball's inner cylinder.                                                                                                                                                                                                                                                                                   |
| [`SolderBallOuterLoopDivisions`](#MeshWorkflowControl.SolderBallOuterLoopDivisions)                     | Gets or sets the number of outer loop divisions for the solder ball mesh.                                                                                                                                                                                                                                                                      |
| [`SolderBallRadius`](#MeshWorkflowControl.SolderBallRadius)                                             | Gets or sets the radius of the solder ball.                                                                                                                                                                                                                                                                                                    |
| [`SolderBallShapeType`](#MeshWorkflowControl.SolderBallShapeType)                                       | Gets or sets the solder ball shape type. The default value is Sphere.                                                                                                                                                                                                                                                                          |
| [`SolderBallShellDivisions`](#MeshWorkflowControl.SolderBallShellDivisions)                             | Gets or sets the number of divisions for the outer shell of the solder ball mesh.                                                                                                                                                                                                                                                              |
| [`SolderBallTopPadDivisions`](#MeshWorkflowControl.SolderBallTopPadDivisions)                           | Gets or sets the number of vertical divisions for the top pad of the solder ball mesh. If an internal pad is generated, shell divisions is used instead.                                                                                                                                                                                       |
| [`SolderBallTopPadLength`](#MeshWorkflowControl.SolderBallTopPadLength)                                 | Gets or sets the length of the solder ball top pad. Positive values for spheres create an external pad on top of the top split, and negative values create an internal pad beginning at the top split length. Torus will take the absolute value and always create an internal pad.                                                            |
| [`SolderBallTopSolderLabelName`](#MeshWorkflowControl.SolderBallTopSolderLabelName)                     | Gets or sets the label name to be applied to the top split of the solder ball.                                                                                                                                                                                                                                                                 |
| [`SolderBallTopSolderPadFaceLabelName`](#MeshWorkflowControl.SolderBallTopSolderPadFaceLabelName)       | Gets or sets the label name to be applied to the top solder pad face of the solder ball.                                                                                                                                                                                                                                                       |
| [`SolderBallTopSolderPadLabelName`](#MeshWorkflowControl.SolderBallTopSolderPadLabelName)               | Gets or sets the label name to be applied to the top pad of the solder ball.                                                                                                                                                                                                                                                                   |
| [`SolderBallTopSolderSplit`](#MeshWorkflowControl.SolderBallTopSolderSplit)                             | Gets or sets the distance from the middle at which the top split of the solder ball begins.                                                                                                                                                                                                                                                    |
| [`SolderBallTopSplitDivisions`](#MeshWorkflowControl.SolderBallTopSplitDivisions)                       | Gets or sets the number of vertical divisions for the top split of the solder ball mesh.                                                                                                                                                                                                                                                       |
| [`SolderBallTopSplitLength`](#MeshWorkflowControl.SolderBallTopSplitLength)                             | Gets or sets the length of the solder ball beginning at the top split point.                                                                                                                                                                                                                                                                   |
| [`SourceTargetScopeDefinition`](#MeshWorkflowControl.SourceTargetScopeDefinition)                       | Gets or sets the type of scope definition for the Source/Target scoping. Default: Value.                                                                                                                                                                                                                                                       |
| [`SourceTargetScopeMethod`](#MeshWorkflowControl.SourceTargetScopeMethod)                               | Gets or sets the scoping method for the Source/Target scoping. Default: Label.                                                                                                                                                                                                                                                                 |
| [`SourceTargetScopeOutcome`](#MeshWorkflowControl.SourceTargetScopeOutcome)                             | Gets or sets the scope outcome for the Source/Target scoping from a previous operation. Applicable only if SourceTargetScopeDefinition is set to Outcome.                                                                                                                                                                                      |
| [`SourceTargetScopePattern`](#MeshWorkflowControl.SourceTargetScopePattern)                             | Gets or sets the zone or label name pattern that defines the Source/Target scoping. Applicable only if SourceTargetScopeDefinition is set to Value.                                                                                                                                                                                            |
| [`SphereCenterModality`](#MeshWorkflowControl.SphereCenterModality)                                     | This property is used to define the rule for the computation of the center of the spherical enclosure.                                                                                                                                                                                                                                         |
| [`StackingDefeatureSize`](#MeshWorkflowControl.StackingDefeatureSize)                                   | Defines defeature size to be used along the stacking direction.                                                                                                                                                                                                                                                                                |
| [`SubMappingAngleThreshold`](#MeshWorkflowControl.SubMappingAngleThreshold)                             | Gets or sets the angle threshold for the classification of the automatically set mapped mesh vertex types. Defaults to 18 degrees, valid range is [18 degrees, 43.2 degrees]. ArgumentException is thrown for out-of-range values.                                                                                                             |
| [`SurfaceMeshType`](#MeshWorkflowControl.SurfaceMeshType)                                               | This property gives control over what type of elements need to be generated in the mesh. The supported surface mesh types are Triangles and Quadrilaterals.                                                                                                                                                                                    |
| [`SurfaceScopeModality`](#MeshWorkflowControl.SurfaceScopeModality)                                     | Gets or sets the type of surface scope modality used to define the morphable area. Default: Rings                                                                                                                                                                                                                                              |
| [`SweepingSize`](#MeshWorkflowControl.SweepingSize)                                                     | Gets or sets the constant size along the sweeping direction.                                                                                                                                                                                                                                                                                   |
| [`TargetSkewness`](#MeshWorkflowControl.TargetSkewness)                                                 | Set Limit to the skewness of an element. Higher the skewness value, expecting a better mesh result.                                                                                                                                                                                                                                            |
| [`Thickness`](#MeshWorkflowControl.Thickness)                                                           | Gets or sets the Thickness to be assigned to the scoped zone.                                                                                                                                                                                                                                                                                  |
| [`ThinStripesLabelName`](#MeshWorkflowControl.ThinStripesLabelName)                                     | Gets or sets the label name to be applied to thin stripe faces.                                                                                                                                                                                                                                                                                |
| [`ThinStripesWidth`](#MeshWorkflowControl.ThinStripesWidth)                                             | Gets or sets the maximum width used in finding thin stripes with topology diagnostics.                                                                                                                                                                                                                                                         |
| [`ThinSweepDivisions`](#MeshWorkflowControl.ThinSweepDivisions)                                         | Gets or sets the number of divisions to be used for Thin Sweep decomposition.                                                                                                                                                                                                                                                                  |
| [`ThinSweepThickness`](#MeshWorkflowControl.ThinSweepThickness)                                         | Gets or sets the thin sweep thickness to be used for Thin Sweep decomposition.                                                                                                                                                                                                                                                                 |
| [`TopologyConformalConnection`](#MeshWorkflowControl.TopologyConformalConnection)                       | Gets or sets whether to preserve the topology connection for the newly created faces. The default value is false.                                                                                                                                                                                                                              |
| [`TriangleCountReductionMode`](#MeshWorkflowControl.TriangleCountReductionMode)                         | This property gives control over the mode/degree of triangle count reduction during surface mesh generation. The supported modes are None, Conservative and Aggressive.                                                                                                                                                                        |
| [`UnconnectedFreeEdgesLabelName`](#MeshWorkflowControl.UnconnectedFreeEdgesLabelName)                   | Gets or sets the label name to be applied to unconnected free edges.                                                                                                                                                                                                                                                                           |
| [`UseCADCurvature`](#MeshWorkflowControl.UseCADCurvature)                                               | Gets or sets whether to define the local curvature based on the CAD. The default value is True.                                                                                                                                                                                                                                                |
| [`UseMappedBlocksSplitAngle`](#MeshWorkflowControl.UseMappedBlocksSplitAngle)                           | Gets or sets whether extra split should be introduced in the mapped blocks based on the MappedBlocksSplitAngle value. Defaults to False.                                                                                                                                                                                                       |
| [`UseSizeFieldInSweepDirection`](#MeshWorkflowControl.UseSizeFieldInSweepDirection)                     | Gets or sets whether to use the size field sizing along the sweeping direction or to apply a constant size. Defaults to False.                                                                                                                                                                                                                 |
| [`VisibleProperties`](#MeshWorkflowControl.VisibleProperties)                                           | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                  |
| [`VolumeMeshType`](#MeshWorkflowControl.VolumeMeshType)                                                 | Type of Volume elements such as Tetrahedrons and Hex.                                                                                                                                                                                                                                                                                          |
| [`VolumeZoneName`](#MeshWorkflowControl.VolumeZoneName)                                                 | This property is used to rename the default volume zone name generated during execution of step.                                                                                                                                                                                                                                               |
| [`VolumesLabelName`](#MeshWorkflowControl.VolumesLabelName)                                             | Gets or sets the name to use when creating labels based on the number of volumes.                                                                                                                                                                                                                                                              |
| [`WrapByParts`](#MeshWorkflowControl.WrapByParts)                                                       | Gets or sets whether to wrap each part separately. The default value is false.                                                                                                                                                                                                                                                                 |
| [`XAxis`](#MeshWorkflowControl.XAxis)                                                                   | Gets or sets the x coordinate of the axis attribute of the corresponding control.                                                                                                                                                                                                                                                              |
| [`XCenter`](#MeshWorkflowControl.XCenter)                                                               | Gets or sets the x coordinate of the center attribute of the corresponding control.                                                                                                                                                                                                                                                            |
| [`XCoordinate`](#MeshWorkflowControl.XCoordinate)                                                       | It defines the X Coordinate.                                                                                                                                                                                                                                                                                                                   |
| [`YAxis`](#MeshWorkflowControl.YAxis)                                                                   | Gets or sets the y coordinate of the axis attribute of the corresponding control.                                                                                                                                                                                                                                                              |
| [`YCenter`](#MeshWorkflowControl.YCenter)                                                               | Gets or sets the y coordinate of the center attribute of the corresponding control.                                                                                                                                                                                                                                                            |
| [`YCoordinate`](#MeshWorkflowControl.YCoordinate)                                                       | It defines the Y Coordinate.                                                                                                                                                                                                                                                                                                                   |
| [`ZAxis`](#MeshWorkflowControl.ZAxis)                                                                   | Gets or sets the z coordinate of the axis attribute of the corresponding control.                                                                                                                                                                                                                                                              |
| [`ZCenter`](#MeshWorkflowControl.ZCenter)                                                               | Gets or sets the z coordinate of the center attribute of the corresponding control.                                                                                                                                                                                                                                                            |
| [`ZCoordinate`](#MeshWorkflowControl.ZCoordinate)                                                       | It defines the Z Coordinate.                                                                                                                                                                                                                                                                                                                   |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowControl.AnchorFreeEdges"></a>

### *property* MeshWorkflowControl.AnchorFreeEdges *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets if the free edges of the model should be automatically considered as fixed for the morphing operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AppendData"></a>

### *property* MeshWorkflowControl.AppendData *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to append the mesh data being read to the current PrimeMesh model or to clear the model content before the mesh data is being read. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ApplySemistructuredPattern"></a>

### *property* MeshWorkflowControl.ApplySemistructuredPattern *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to apply Semistructured Pattern mapped meshing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoCollapseShortEdges"></a>

### *property* MeshWorkflowControl.AutoCollapseShortEdges *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to collapse edges below the specified tolerance. Feature edges and Protected edges are not collapsed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoDeleteInteriorVertices"></a>

### *property* MeshWorkflowControl.AutoDeleteInteriorVertices *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to delete interior vertices from scoped topology.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoPartialDefeature"></a>

### *property* MeshWorkflowControl.AutoPartialDefeature *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to partially remove thin faces and sharp angles within provided tolerances, such that only topology impacting mesh quality is removed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoPinchFaces"></a>

### *property* MeshWorkflowControl.AutoPinchFaces *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to remove small features from topology to improve mesh quality.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoRemoveSharpAngleFaces"></a>

### *property* MeshWorkflowControl.AutoRemoveSharpAngleFaces *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to remove sharp angle faces below the specified angle tolerance by merging them to the neighboring faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoRemoveThinFaces"></a>

### *property* MeshWorkflowControl.AutoRemoveThinFaces *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to remove thin faces by merging them with the neighboring faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoRepairEdgesOfFaces"></a>

### *property* MeshWorkflowControl.AutoRepairEdgesOfFaces *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to prevent the collapse and defeature of thin or short topologies, and allow the creation of a coarse mesh while keeping topology as-is.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoSuppressInteriorEdges"></a>

### *property* MeshWorkflowControl.AutoSuppressInteriorEdges *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to suppress interior edges of scoped faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutomaticExternalScope"></a>

### *property* MeshWorkflowControl.AutomaticExternalScope *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to define programmatically the external scoping method and pattern for the external enclosure. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BaseFaceLabel"></a>

### *property* MeshWorkflowControl.BaseFaceLabel *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label to be used for the base face.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BaseFaceScopeDefinition"></a>

### *property* MeshWorkflowControl.BaseFaceScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scope definition for the base face scoping. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BaseFaceScopeMethod"></a>

### *property* MeshWorkflowControl.BaseFaceScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scoping method for the base face scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BaseFaceScopeOutcome"></a>

### *property* MeshWorkflowControl.BaseFaceScopeOutcome *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if BaseFaceScopeOutcome is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BaseFaceScopePattern"></a>

### *property* MeshWorkflowControl.BaseFaceScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if BaseFaceScopeOutcome is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BiasingIntensity"></a>

### *property* MeshWorkflowControl.BiasingIntensity *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the intensity of the biasing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BiasingModality"></a>

### *property* MeshWorkflowControl.BiasingModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MorphingBiasingType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MorphingBiasingType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MorphingBiasingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets thebiasing type for the solver operation. Default: Disabled.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BlendToNeighbors"></a>

### *property* MeshWorkflowControl.BlendToNeighbors *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to adjust the sizes on adjacent edges of non-mapped mesh regions. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CenterPlaneNormalOffset"></a>

### *property* MeshWorkflowControl.CenterPlaneNormalOffset *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the desired offset of the plane of the hemisphere from the model.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CenterPosition"></a>

### *property* MeshWorkflowControl.CenterPosition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SphereCenterDefinitionType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by “Centered”, “Minimal”, and “User Defined”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CheckBodyIntersections"></a>

### *property* MeshWorkflowControl.CheckBodyIntersections *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to check for intersections among the scoped bodies. Intersection detection is based on absolute tolerances specified in the Stacker Settings. If not provided, a default absolute tolerance of 0.0 is used.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Children"></a>

### *property* MeshWorkflowControl.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConformalMeshOnContactSurfaces"></a>

### *property* MeshWorkflowControl.ConformalMeshOnContactSurfaces *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to decide creation of conformal mesh at contact surfaces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConstantHeight"></a>

### *property* MeshWorkflowControl.ConstantHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Height of a single layer of mesh elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlDataDefinition"></a>

### *property* MeshWorkflowControl.ControlDataDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlDataDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlDataDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlDataDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define if the control data is defined by value or by settings.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlScopeDefinition"></a>

### *property* MeshWorkflowControl.ControlScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scope definition for the control scope of the morphing operation. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlScopeMethod"></a>

### *property* MeshWorkflowControl.ControlScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scoping method for the control scope of the morphing operation. Default: Part.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlScopeOutcome"></a>

### *property* MeshWorkflowControl.ControlScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if 'ControlScopeDefinition' is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlScopePattern"></a>

### *property* MeshWorkflowControl.ControlScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'ControlScopeDefinition' is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlType"></a>

### *property* MeshWorkflowControl.ControlType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the type of the control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CoordinateSystem"></a>

### *property* MeshWorkflowControl.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System object used to define the material point location.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateFaceZone"></a>

### *property* MeshWorkflowControl.CreateFaceZone *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to create a new face zone.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateQuadraticElements"></a>

### *property* MeshWorkflowControl.CreateQuadraticElements *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to create quadratic elements. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CuboidCenterModality"></a>

### *property* MeshWorkflowControl.CuboidCenterModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CuboidCenterDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/CuboidCenterDefinitionType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CuboidCenterDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the rule for the computation of the center of the cuboidal enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DataModelObjectCategory"></a>

### *property* MeshWorkflowControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DecompositionType"></a>

### *property* MeshWorkflowControl.DecompositionType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DecompositionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/DecompositionType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DecompositionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the decomposition type used by the MultiZone mesher. Defaults to “Program Controlled”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DefaultOffsetSize"></a>

### *property* MeshWorkflowControl.DefaultOffsetSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the size of the offset layers to be used during the stack base operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DefeatureTolerance"></a>

### *property* MeshWorkflowControl.DefeatureTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the defeature tolerance applied during meshing. Applicable only if DefeatureToleranceDefineBy is “UserDefined”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DefeatureToleranceDefineBy"></a>

### *property* MeshWorkflowControl.DefeatureToleranceDefineBy *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DefeatureToleranceDefineBy](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/DefeatureToleranceDefineBy.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DefeatureToleranceDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets how the Defeature Tolerance is defined for the MultiZone mesher. Defaults to  “Program Controlled”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeleteCollidingFaces"></a>

### *property* MeshWorkflowControl.DeleteCollidingFaces *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to delete the model faces colliding with the enclosure. Default is True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeleteEmptyVolumes"></a>

### *property* MeshWorkflowControl.DeleteEmptyVolumes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to enable or disable the automatic deletion of empty topo volumes  during mesh to topology conversion. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeleteInputScope"></a>

### *property* MeshWorkflowControl.DeleteInputScope *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to delete of input scope after wrapping. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeltaX"></a>

### *property* MeshWorkflowControl.DeltaX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the x coordinate of the delta attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeltaY"></a>

### *property* MeshWorkflowControl.DeltaY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the y coordinate of the delta attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeltaZ"></a>

### *property* MeshWorkflowControl.DeltaZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the z coordinate of the delta attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DihedralAngle"></a>

### *property* MeshWorkflowControl.DihedralAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

The dihedral angle is the angle between the normal vectors of two element faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DirectionX"></a>

### *property* MeshWorkflowControl.DirectionX *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the X component of the direction vector, with respect to the Global Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DirectionY"></a>

### *property* MeshWorkflowControl.DirectionY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y component of the direction vector, with respect to the Global Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DirectionZ"></a>

### *property* MeshWorkflowControl.DirectionZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Z component of the direction vector, with respect to the Global Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Distance"></a>

### *property* MeshWorkflowControl.Distance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the distance from the control area considered morphable for the morphing operation. Applicable only if SurfaceScopeModality is set to 'Distance'.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeBiasingDefineBy"></a>

### *property* MeshWorkflowControl.EdgeBiasingDefineBy *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.EdgeBiasingDefineBy](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/EdgeBiasingDefineBy.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.EdgeBiasingDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets how the scoped edges meshing size is defined for MultiZone edge biasing. Defaults to NumberOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeBiasingType"></a>

### *property* MeshWorkflowControl.EdgeBiasingType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.EdgeBiasingType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/EdgeBiasingType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.EdgeBiasingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of biasing to apply along the scoped edges for MultiZone edge biasing. Defaults to Uniform.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeLabelName"></a>

### *property* MeshWorkflowControl.EdgeLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default edge label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ElementSize"></a>

### *property* MeshWorkflowControl.ElementSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Define element size to achieve desired mesh results. User can achieve coarse, medium, or fine mesh by varying this value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ElementsPerGap"></a>

### *property* MeshWorkflowControl.ElementsPerGap *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the minimum number of element layers to be generated per gap for the Proximity Sizing control by locally controlling the element size. The element size is defined as the gap size divided by ElementsPerGap, fractional values are supported for defining local element sizes larger than the gap size. The default values is 3.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EnableCheckpoint"></a>

### *property* MeshWorkflowControl.EnableCheckpoint *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CheckpointDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/CheckpointDefinitionType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CheckpointDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Flag whether to enable a checkpoint or not. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeEnclosure"></a>

### *property* MeshWorkflowControl.ExcludeEnclosure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to exclude the enclosure from the wrapper scope . The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeScopeDefinition"></a>

### *property* MeshWorkflowControl.ExcludeScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scope definition for the Hole Patching exclusion scoping. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeScopeMethod"></a>

### *property* MeshWorkflowControl.ExcludeScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scoping method for the Hole Patching exclusion scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeScopeOutcome"></a>

### *property* MeshWorkflowControl.ExcludeScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scope outcome from a previous operation for the Hole Patching exclusion scoping. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeScopePattern"></a>

### *property* MeshWorkflowControl.ExcludeScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the part, zone or label name pattern for the Hole Patching exclusion scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalLabelName"></a>

### *property* MeshWorkflowControl.ExternalLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default external label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopeDefinition"></a>

### *property* MeshWorkflowControl.ExternalScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by value or outcome depending on if the External scope is defined manual by the user or defined based on a previous outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopeMethod"></a>

### *property* MeshWorkflowControl.ExternalScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

The method can be label/zone/part and it is applied to external region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopeOutcome"></a>

### *property* MeshWorkflowControl.ExternalScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopePattern"></a>

### *property* MeshWorkflowControl.ExternalScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExtractFeatureEdges"></a>

### *property* MeshWorkflowControl.ExtractFeatureEdges *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to extract automatically the feature edges after the operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceZoneByPart"></a>

### *property* MeshWorkflowControl.FaceZoneByPart *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to define an independent face zone for each input part.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceZoneName"></a>

### *property* MeshWorkflowControl.FaceZoneName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the name of the default face zone name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FacesWithSkewedElementsLabelName"></a>

### *property* MeshWorkflowControl.FacesWithSkewedElementsLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the name to use when creating labels based on faces with skewed elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FieldName"></a>

### *property* MeshWorkflowControl.FieldName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Figures"></a>

### *property* MeshWorkflowControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Filename"></a>

### *property* MeshWorkflowControl.Filename *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Assign full path to the filename would like to Import/Export.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Filenames"></a>

### *property* MeshWorkflowControl.Filenames *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Assign paths with '|' seperator to this property to read multiple files, pass without seperator if single file.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FixedScopeDefinition"></a>

### *property* MeshWorkflowControl.FixedScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scope definition for the fixed scope of the morphing operation. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FixedScopeMethod"></a>

### *property* MeshWorkflowControl.FixedScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scoping method for the fixed scope of the morphing operation. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FixedScopeOutcome"></a>

### *property* MeshWorkflowControl.FixedScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if 'FixedScopeDefinition' is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FixedScopePattern"></a>

### *property* MeshWorkflowControl.FixedScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'FixedScopeDefinition' is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ForceSubMapping"></a>

### *property* MeshWorkflowControl.ForceSubMapping *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to force a sub-mapped mesh by automatically setting mapped mesh vertex types on the scoped faces. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeEdgesLabelName"></a>

### *property* MeshWorkflowControl.FreeEdgesLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to free edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeFaceMeshType"></a>

### *property* MeshWorkflowControl.FreeFaceMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.FreeFaceMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/FreeFaceMeshType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.FreeFaceMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of elements for the MultiZone mesher free face mesh. Defaults to “All Quads”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeMeshScopeDefinition"></a>

### *property* MeshWorkflowControl.FreeMeshScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scope definition for the Free Mesh scoping. Default: Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeMeshScopeMethod"></a>

### *property* MeshWorkflowControl.FreeMeshScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scoping method for the Free Mesh scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeMeshScopeOutcome"></a>

### *property* MeshWorkflowControl.FreeMeshScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scope outcome for Free Mesh scoping from a previous operation. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeMeshScopePattern"></a>

### *property* MeshWorkflowControl.FreeMeshScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the zone or label name pattern that defines the Free Mesh scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeVolumeMeshType"></a>

### *property* MeshWorkflowControl.FreeVolumeMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.FreeVolumeMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/FreeVolumeMeshType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.FreeVolumeMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets how free mesh blocks should be treated by the MultiZone meshing algorithm. Defaults to “NotAllowed”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreezeBoundaryNodes"></a>

### *property* MeshWorkflowControl.FreezeBoundaryNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to freeze the boundary nodes when the improvement of the volume mesh is executed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GrowthRate"></a>

### *property* MeshWorkflowControl.GrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gradient of element size as each layer grows.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HemisphereCenterModality"></a>

### *property* MeshWorkflowControl.HemisphereCenterModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.HemisphereCenterDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/HemisphereCenterDefinitionType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.HemisphereCenterDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the rule for the computation of the center of the hemispherical enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HemisphereOrientationModality"></a>

### *property* MeshWorkflowControl.HemisphereOrientationModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.HemisphereOrientationDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/HemisphereOrientationDefinitionType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.HemisphereOrientationDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the rule for the computation of the orientation of the hemispherical enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HexcoreTetLayerRelativeWidth"></a>

### *property* MeshWorkflowControl.HexcoreTetLayerRelativeWidth *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the gap ratio, relative to the surface mesh size, between the volume mesh hexahedral core and the geometry surface. Default is 0.25.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IgnoreOrientation"></a>

### *property* MeshWorkflowControl.IgnoreOrientation *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to ignore the face normal orientation while calculating the proximity for the Proximity Sizing control. The default value is False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IgnoreSelfProximity"></a>

### *property* MeshWorkflowControl.IgnoreSelfProximity *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to ignore the proximity between two faces from the same face zone while calculating the proximity for the Proximity Sizing control. The default value is True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Images"></a>

### *property* MeshWorkflowControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IncompleteBoundariesLabelName"></a>

### *property* MeshWorkflowControl.IncompleteBoundariesLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to faces with incomplete boundaries.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopeDefinition"></a>

### *property* MeshWorkflowControl.InnerScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by value or outcome depending on if the Inner scope is defined manually by the user or defined based on a previous outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopeMethod"></a>

### *property* MeshWorkflowControl.InnerScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

The method can be label/zone/part and it is applied to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopeOutcome"></a>

### *property* MeshWorkflowControl.InnerScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopePattern"></a>

### *property* MeshWorkflowControl.InnerScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InputMeshScopeDefinition"></a>

### *property* MeshWorkflowControl.InputMeshScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scope definition for the Input Mesh scoping. Default: Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InputMeshScopeMethod"></a>

### *property* MeshWorkflowControl.InputMeshScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scoping method for the Input Mesh scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InputMeshScopeOutcome"></a>

### *property* MeshWorkflowControl.InputMeshScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scope outcome for Input Mesh scoping from a previous operation. Applicable only if InputMeshScopeDefinition is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InputMeshScopePattern"></a>

### *property* MeshWorkflowControl.InputMeshScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the zone or label name pattern that defines the Input Mesh scoping. Applicable only if InputMeshScopeDefinition is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InternalLabelName"></a>

### *property* MeshWorkflowControl.InternalLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default Internal label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InternalObject"></a>

### *property* MeshWorkflowControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IntersectingFaceTolerance"></a>

### *property* MeshWorkflowControl.IntersectingFaceTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the minimum angle used in finding thin stripes with topology diagnostics. Defaults to 25 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IntersectingPairsLabelName"></a>

### *property* MeshWorkflowControl.IntersectingPairsLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to intersecting pairs of faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InvalidBoundariesLabelName"></a>

### *property* MeshWorkflowControl.InvalidBoundariesLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to faces with invalid boundary orientation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LabelName"></a>

### *property* MeshWorkflowControl.LabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LateralDefeatureSize"></a>

### *property* MeshWorkflowControl.LateralDefeatureSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the defeature size to be used along the lateral direction of stacking.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MappedBlocksSplitAngle"></a>

### *property* MeshWorkflowControl.MappedBlocksSplitAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the split angle to be used for introducing extra splits in the mapped blocks when UseMappedBlocksSplitAngle is True. Defaults to 60 degrees, valid range is [0 degrees, 180 degrees]. ArgumentException is thrown for out-of-range values.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MatchEdgeSpacing"></a>

### *property* MeshWorkflowControl.MatchEdgeSpacing *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the mesh spacing on a block edge is adjusted with respect to the spacing on adjacent block edges. Defaults to True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Material"></a>

### *property* MeshWorkflowControl.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaterialName"></a>

### *property* MeshWorkflowControl.MaterialName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material Name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaterialPointDefinition"></a>

### *property* MeshWorkflowControl.MaterialPointDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointDefineByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MaterialPointDefineByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the material point definition type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaterialPointType"></a>

### *property* MeshWorkflowControl.MaterialPointType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MaterialPointType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the type of material point, it can be “Include” or “Exclude”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaxHoleSize"></a>

### *property* MeshWorkflowControl.MaxHoleSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the maximum size of holes to be considered for Wrapper Leak Prevention and Hole Patching.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaxSize"></a>

### *property* MeshWorkflowControl.MaxSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the maximum size to be used for the volumetric size field sizing computation in the Proximity Sizing and Curvature Sizing controls. This is a length value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MergeNodesTolerance"></a>

### *property* MeshWorkflowControl.MergeNodesTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the tolerance within which nodes are to be merged.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MergeNodesToleranceType"></a>

### *property* MeshWorkflowControl.MergeNodesToleranceType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MergeNodesToleranceType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MergeNodesToleranceType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MergeNodesToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the merge nodes tolerance type to be used when executing Merge Nodes operation. The default value is Absolute.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MergeReplicatedBodies"></a>

### *property* MeshWorkflowControl.MergeReplicatedBodies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to merge the replicated bodies with their corresponding original bodies. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MergeSideFaces"></a>

### *property* MeshWorkflowControl.MergeSideFaces *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to merge the side faces after the extrusion.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshEntityType"></a>

### *property* MeshWorkflowControl.MeshEntityType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshEntityType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MeshEntityType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshEntityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the target mesh entity type. The default value is Face.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshFlowControl"></a>

### *property* MeshWorkflowControl.MeshFlowControl *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshFlowControl](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MeshFlowControl.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshFlowControl) | [None](https://docs.python.org/3/library/constants.html#None)*

This property gives control over the flow of mesh during surface mesh generation. The supported modes are None, and Global Cartesian.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshedSurfaceLabelSuffix"></a>

### *property* MeshWorkflowControl.MeshedSurfaceLabelSuffix *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the suffix to be used when defining labels scoped to faces meshed by the MultiZone mesher.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshedVolumeLabelSuffix"></a>

### *property* MeshWorkflowControl.MeshedVolumeLabelSuffix *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the suffix to be used when defining labels scoped to volumes meshed by the MultiZone mesher. Defaults to “MultiZoneMesh”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinSize"></a>

### *property* MeshWorkflowControl.MinSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the minimum size to be used for the volumetric size field sizing computation in the Proximity Sizing and Curvature Sizing controls. This is a length value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinimalAbsoluteDistance"></a>

### *property* MeshWorkflowControl.MinimalAbsoluteDistance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the minimal distance of the enclosure from the input faces as absolute distance. The physically larger resulting distance between 'MinimalNumberOfVolumetricLayers' and 'MinimalAbsoluteDistance' will be used as the effective gap distance. Default is 0.0.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinimalNumberOfVolumetricLayers"></a>

### *property* MeshWorkflowControl.MinimalNumberOfVolumetricLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the minimal distance of the enclosure from the input faces as a multiple of the size of the volumetric elements. The physically larger resulting distance between 'MinimalNumberOfVolumetricLayers' and 'MinimalAbsoluteDistance' or 'MinimalRadius' will be used as the effective gap distance. Default is 2.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinimalRadius"></a>

### *property* MeshWorkflowControl.MinimalRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the desired minimal radius of the spherical enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MissingBoundariesLabelName"></a>

### *property* MeshWorkflowControl.MissingBoundariesLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to faces with missing boundaries.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphRecordingName"></a>

### *property* MeshWorkflowControl.MorphRecordingName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the name for matching the morphing recording to apply to the meshing operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphSolverModality"></a>

### *property* MeshWorkflowControl.MorphSolverModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MorphingSolverType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MorphingSolverType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MorphingSolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the solver type for the morphing operation. Default: Fast.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphableScopeDefinition"></a>

### *property* MeshWorkflowControl.MorphableScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scope definition for the morphable scope of the morphing operation. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphableScopeMethod"></a>

### *property* MeshWorkflowControl.MorphableScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scoping method for the morphable scope of the morphing operation. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphableScopeOutcome"></a>

### *property* MeshWorkflowControl.MorphableScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if 'MorphableScopeDefinition' is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphableScopePattern"></a>

### *property* MeshWorkflowControl.MorphableScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'MorphableScopeDefinition' is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MultiEdgesLabelName"></a>

### *property* MeshWorkflowControl.MultiEdgesLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to multi edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NormalAngle"></a>

### *property* MeshWorkflowControl.NormalAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the maximum allowed normal angle between neighboring elements when computing curvature for the Curvature Sizing control. This value must be between 0 and 180 degrees (0 to π) and defaults to 18 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfAttempts"></a>

### *property* MeshWorkflowControl.NumberOfAttempts *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Number of attempts for mesh convergence.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfDivisions"></a>

### *property* MeshWorkflowControl.NumberOfDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of divisions for the scoped edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfLayers"></a>

### *property* MeshWorkflowControl.NumberOfLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Number of layers of mesh elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfRadialDivisions"></a>

### *property* MeshWorkflowControl.NumberOfRadialDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of radial divisions to apply to scoped faces having two concentric boundary loops. Defaults to 0. ArgumentException is thrown for negative values.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfRings"></a>

### *property* MeshWorkflowControl.NumberOfRings *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of neighbor rings to consider as morphable for the morphing operation. Applicable only if SurfaceScopeModality is 'Rings'.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfSolverIterations"></a>

### *property* MeshWorkflowControl.NumberOfSolverIterations *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of iterations for the solver of the morphing operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OffsetDistance"></a>

### *property* MeshWorkflowControl.OffsetDistance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the offset distance attribute of the corresponding direct morphing control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OffsetFileName"></a>

### *property* MeshWorkflowControl.OffsetFileName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the full file path to the .csv file containing the offset coordinates for replication.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OpenEnclosure"></a>

### *property* MeshWorkflowControl.OpenEnclosure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether an open enclosure is required. Default is False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OriginX"></a>

### *property* MeshWorkflowControl.OriginX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the X coordinate of origin (location of base face) in the volume flattening step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OriginY"></a>

### *property* MeshWorkflowControl.OriginY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y coordinate of origin (location of base face) in the volume flattening step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OriginZ"></a>

### *property* MeshWorkflowControl.OriginZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Z coordinate of origin (location of base face) in the volume flattening step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OverlappingFaceTolerance"></a>

### *property* MeshWorkflowControl.OverlappingFaceTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the tolerance for the minimum overlap distance used in finding overlapping faces with topology diagnostics.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OverlappingFacesLabelName"></a>

### *property* MeshWorkflowControl.OverlappingFacesLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to overlapping faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PartName"></a>

### *property* MeshWorkflowControl.PartName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the part name to be used when generating.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PercentageIncrement"></a>

### *property* MeshWorkflowControl.PercentageIncrement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

The number of volumetric Layers determines the number of layers. This property decides whether all the layers are an equal size (default 0.0) or they should gradually increase the size of volume element than previous element.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProjectOnGeometry"></a>

### *property* MeshWorkflowControl.ProjectOnGeometry *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to project the mesh on the underlying geometry.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProjectSideFaces"></a>

### *property* MeshWorkflowControl.ProjectSideFaces *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to project the side faces after the extrusion.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Properties"></a>

### *property* MeshWorkflowControl.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProtectOnlyBoundaries"></a>

### *property* MeshWorkflowControl.ProtectOnlyBoundaries *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether the topology protection flag is applied only to the exterior boundary of the scoped boundaries or not. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProximityRadius"></a>

### *property* MeshWorkflowControl.ProximityRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the radius for the proximity based search.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProximityType"></a>

### *property* MeshWorkflowControl.ProximityType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ProximityType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ProximityType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ProximityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Proximity Type to apply for the entity search. The default value is Radius.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerFaceScopeDefinition"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerFaceScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scope definition for the quad boundary layer face scoping. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerFaceScopeMethod"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerFaceScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scoping method for the quad boundary layer face scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerFaceScopeOutcome"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerFaceScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if 'QuadBoundaryLayerFaceScopeDefinition' is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerFaceScopePattern"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerFaceScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'QuadBoundaryLayerFaceScopeDefinition' is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerFirstLayerHeight"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerFirstLayerHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the height of the first quad layer.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerGrowthRate"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerGrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ratio of heights between subsequent quad layers.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerNumberOfDivisions"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerNumberOfDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of annular divisions on the washer boundary from where the quad layers are grown.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerNumberOfLayers"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerNumberOfLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of quad layers on the washer boundary.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RecomputeClosedVolumes"></a>

### *property* MeshWorkflowControl.RecomputeClosedVolumes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to recompute closed volumes after the operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RegionType"></a>

### *property* MeshWorkflowControl.RegionType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WrapperRegionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WrapperRegionType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WrapperRegionType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by Material Point or External.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RelativeMergeTolerancePercentage"></a>

### *property* MeshWorkflowControl.RelativeMergeTolerancePercentage *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the percentage of the connected edge lengths to be used as tolerance for merging nodes.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Remesh"></a>

### *property* MeshWorkflowControl.Remesh *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to allow the remesh of already meshed volumes. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairModel"></a>

### *property* MeshWorkflowControl.RepairModel *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to repair the PrimeMesh model after the reading operation is executed. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyEdgeAngle"></a>

### *property* MeshWorkflowControl.RepairTopologyEdgeAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the angle not to be exceeded when deleting interior vertices. Must be greater than 0 and less than or equal to 180 degrees. Defaults to 70 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyFeatureAngle"></a>

### *property* MeshWorkflowControl.RepairTopologyFeatureAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the angle not to be exceeded when performing repairs. Must be greater than 0 and less than or equal to 180 degrees. Defaults to 30 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyPinchTolerance"></a>

### *property* MeshWorkflowControl.RepairTopologyPinchTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the largest tolerance to be used when removing small features.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologySharpAngle"></a>

### *property* MeshWorkflowControl.RepairTopologySharpAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the maximum angle between faces to be merged. Must be greater than 0 and less than or equal to 30 degrees. Defaults to 10 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyShortEdgeLength"></a>

### *property* MeshWorkflowControl.RepairTopologyShortEdgeLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the maximum edge length to be collapsed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologySplitEdgesAtApexPoint"></a>

### *property* MeshWorkflowControl.RepairTopologySplitEdgesAtApexPoint *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to split edges at their apex point when repairing topology.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyThinFaceWidth"></a>

### *property* MeshWorkflowControl.RepairTopologyThinFaceWidth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the maximum thin face width to be merged.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyTolerance"></a>

### *property* MeshWorkflowControl.RepairTopologyTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the tolerance value to be used to reduce variability of output topology, prevent the collapse and defeature of thin or short topologies, and allow the creation of a coarse mesh while keeping topology as-is.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RestrictBoundaryNodes"></a>

### *property* MeshWorkflowControl.RestrictBoundaryNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to restrict the boundary nodes displacement. The default value is true.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RetainMeshedTopoFaces"></a>

### *property* MeshWorkflowControl.RetainMeshedTopoFaces *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether existing mesh on the scoped faces is to be retained or remeshed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RetainMeshedVolumes"></a>

### *property* MeshWorkflowControl.RetainMeshedVolumes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether existing mesh on the scoped volumes is to be retained or remeshed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ReverseSurfaceOrientation"></a>

### *property* MeshWorkflowControl.ReverseSurfaceOrientation *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Reverse Surface Orientation. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RigidScopeDefinition"></a>

### *property* MeshWorkflowControl.RigidScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scope definition for the rigid scope of the morphing operation. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RigidScopeMethod"></a>

### *property* MeshWorkflowControl.RigidScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scoping method for the rigid scope of the morphing operation. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RigidScopeOutcome"></a>

### *property* MeshWorkflowControl.RigidScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if 'RigidScopeDefinition' is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RigidScopePattern"></a>

### *property* MeshWorkflowControl.RigidScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'RigidScopeDefinition' is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RotationAngle"></a>

### *property* MeshWorkflowControl.RotationAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the rotation angle attribute of the corresponding direct morphing control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScaleElementSize"></a>

### *property* MeshWorkflowControl.ScaleElementSize *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to apply a scale factor to element size defined by settings.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScaleFactor"></a>

### *property* MeshWorkflowControl.ScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Scale Factor is used to scale shapes in different dimensions.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopeDefinition"></a>

### *property* MeshWorkflowControl.ScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by value or outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopeMethod"></a>

### *property* MeshWorkflowControl.ScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

The method can be label/zone/part.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopeOutcome"></a>

### *property* MeshWorkflowControl.ScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopePattern"></a>

### *property* MeshWorkflowControl.ScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SeedFaceScopeDefinition"></a>

### *property* MeshWorkflowControl.SeedFaceScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scope definition for the seed face scoping. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SeedFaceScopeMethod"></a>

### *property* MeshWorkflowControl.SeedFaceScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scoping method for the seed face scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SeedFaceScopeOutcome"></a>

### *property* MeshWorkflowControl.SeedFaceScopeOutcome *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if SeedFaceScopeDefinition is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SeedFaceScopePattern"></a>

### *property* MeshWorkflowControl.SeedFaceScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if SeedFaceScopeDefinition is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SelfIntersectionsLabelName"></a>

### *property* MeshWorkflowControl.SelfIntersectionsLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to self intersecting faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SemistructuredPatternType"></a>

### *property* MeshWorkflowControl.SemistructuredPatternType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SemistructuredPatternType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SemistructuredPatternType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SemistructuredPatternType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Semistructured Pattern type used by the MultiZone Mapped Meshing control when ApplySemistructuredPattern is set to True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SharedTopologyLabelName"></a>

### *property* MeshWorkflowControl.SharedTopologyLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the name used as label to scope the shared topology faces which are automatically added as input mesh for MultiZone. Defaults to “MultiZoneMesh/SharedTopologyInputMesh”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SizeFieldDefinition"></a>

### *property* MeshWorkflowControl.SizeFieldDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets how the control's size field pattern should be defined, either by “Value” or by “Outcome”. The default value is “Value”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SizeFieldOutcome"></a>

### *property* MeshWorkflowControl.SizeFieldOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the outcome to be used to define the size field pattern when SizeFieldDefinition is set to “Outcome”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SizeFieldPattern"></a>

### *property* MeshWorkflowControl.SizeFieldPattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the name pattern for matching the size fields to apply to the meshing operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SizeScaleFactor"></a>

### *property* MeshWorkflowControl.SizeScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the factor to apply to the element size values defined by settings.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SkewnessLimit"></a>

### *property* MeshWorkflowControl.SkewnessLimit *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the skewness limit used to mark faces with skewed elements within the Surface Diagnostics outcome. Defaults to 0.9.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SmallEdgesLabelName"></a>

### *property* MeshWorkflowControl.SmallEdgesLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to small edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SmallEdgesLength"></a>

### *property* MeshWorkflowControl.SmallEdgesLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the maximum edge length used in finding small edges with topology diagnostics.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SmoothingIterations"></a>

### *property* MeshWorkflowControl.SmoothingIterations *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Allows user to input number of iterations needed to achieve good mesh results.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SmoothingPreserveVolume"></a>

### *property* MeshWorkflowControl.SmoothingPreserveVolume *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to enable and disable the volume preserving smoothing. If enabled, the smoothing will preserve the initial volume of the input. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomPadDivisions"></a>

### *property* MeshWorkflowControl.SolderBallBottomPadDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of vertical divisions for the bottom pad of the solder ball mesh. If an internal pad is generated, shell divisions is used instead.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomPadLength"></a>

### *property* MeshWorkflowControl.SolderBallBottomPadLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the length of the solder ball bottom pad. Positive values for spheres create an external pad beneath the bottom split, and negative values create an internal pad beginning at the bottom split length. Torus will take the absolute value and always create an internal pad.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomSolderLabelName"></a>

### *property* MeshWorkflowControl.SolderBallBottomSolderLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to the bottom split of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomSolderPadFaceLabelName"></a>

### *property* MeshWorkflowControl.SolderBallBottomSolderPadFaceLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to the bottom pad face of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomSolderPadLabelName"></a>

### *property* MeshWorkflowControl.SolderBallBottomSolderPadLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to the bottom pad of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomSolderSplit"></a>

### *property* MeshWorkflowControl.SolderBallBottomSolderSplit *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the distance from the middle at which the bottom split of the solder ball begins.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomSplitDivisions"></a>

### *property* MeshWorkflowControl.SolderBallBottomSplitDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of vertical divisions for the bottom split of the solder ball mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomSplitLength"></a>

### *property* MeshWorkflowControl.SolderBallBottomSplitLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the length of the solder ball beginning at the bottom split point.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallCenterSolderLabelName"></a>

### *property* MeshWorkflowControl.SolderBallCenterSolderLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to the center of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallCentralVerticalDivisions"></a>

### *property* MeshWorkflowControl.SolderBallCentralVerticalDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of vertical divisions for the center of the solder ball mesh, not including top and bottom splits.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallCylinderShellDivisions"></a>

### *property* MeshWorkflowControl.SolderBallCylinderShellDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of divisions for the inner cylinder shell of the solder ball mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallInnerCylinderRadius"></a>

### *property* MeshWorkflowControl.SolderBallInnerCylinderRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the radius of the solder ball's inner cylinder.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallOuterLoopDivisions"></a>

### *property* MeshWorkflowControl.SolderBallOuterLoopDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of outer loop divisions for the solder ball mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallRadius"></a>

### *property* MeshWorkflowControl.SolderBallRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the radius of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallShapeType"></a>

### *property* MeshWorkflowControl.SolderBallShapeType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SolderBallShapeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SolderBallShapeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SolderBallShapeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the solder ball shape type. The default value is Sphere.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallShellDivisions"></a>

### *property* MeshWorkflowControl.SolderBallShellDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of divisions for the outer shell of the solder ball mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopPadDivisions"></a>

### *property* MeshWorkflowControl.SolderBallTopPadDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of vertical divisions for the top pad of the solder ball mesh. If an internal pad is generated, shell divisions is used instead.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopPadLength"></a>

### *property* MeshWorkflowControl.SolderBallTopPadLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the length of the solder ball top pad. Positive values for spheres create an external pad on top of the top split, and negative values create an internal pad beginning at the top split length. Torus will take the absolute value and always create an internal pad.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopSolderLabelName"></a>

### *property* MeshWorkflowControl.SolderBallTopSolderLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to the top split of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopSolderPadFaceLabelName"></a>

### *property* MeshWorkflowControl.SolderBallTopSolderPadFaceLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to the top solder pad face of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopSolderPadLabelName"></a>

### *property* MeshWorkflowControl.SolderBallTopSolderPadLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to the top pad of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopSolderSplit"></a>

### *property* MeshWorkflowControl.SolderBallTopSolderSplit *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the distance from the middle at which the top split of the solder ball begins.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopSplitDivisions"></a>

### *property* MeshWorkflowControl.SolderBallTopSplitDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of vertical divisions for the top split of the solder ball mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopSplitLength"></a>

### *property* MeshWorkflowControl.SolderBallTopSplitLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the length of the solder ball beginning at the top split point.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SourceTargetScopeDefinition"></a>

### *property* MeshWorkflowControl.SourceTargetScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scope definition for the Source/Target scoping. Default: Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SourceTargetScopeMethod"></a>

### *property* MeshWorkflowControl.SourceTargetScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scoping method for the Source/Target scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SourceTargetScopeOutcome"></a>

### *property* MeshWorkflowControl.SourceTargetScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scope outcome for the Source/Target scoping from a previous operation. Applicable only if SourceTargetScopeDefinition is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SourceTargetScopePattern"></a>

### *property* MeshWorkflowControl.SourceTargetScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the zone or label name pattern that defines the Source/Target scoping. Applicable only if SourceTargetScopeDefinition is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SphereCenterModality"></a>

### *property* MeshWorkflowControl.SphereCenterModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SphereCenterDefinitionType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the rule for the computation of the center of the spherical enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.StackingDefeatureSize"></a>

### *property* MeshWorkflowControl.StackingDefeatureSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines defeature size to be used along the stacking direction.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SubMappingAngleThreshold"></a>

### *property* MeshWorkflowControl.SubMappingAngleThreshold *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the angle threshold for the classification of the automatically set mapped mesh vertex types. Defaults to 18 degrees, valid range is [18 degrees, 43.2 degrees]. ArgumentException is thrown for out-of-range values.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SurfaceMeshType"></a>

### *property* MeshWorkflowControl.SurfaceMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SurfaceMeshType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

This property gives control over what type of elements need to be generated in the mesh. The supported surface mesh types are Triangles and Quadrilaterals.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SurfaceScopeModality"></a>

### *property* MeshWorkflowControl.SurfaceScopeModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceScopeModalityType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SurfaceScopeModalityType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceScopeModalityType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of surface scope modality used to define the morphable area. Default: Rings

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SweepingSize"></a>

### *property* MeshWorkflowControl.SweepingSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the constant size along the sweeping direction.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TargetSkewness"></a>

### *property* MeshWorkflowControl.TargetSkewness *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Set Limit to the skewness of an element. Higher the skewness value, expecting a better mesh result.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Thickness"></a>

### *property* MeshWorkflowControl.Thickness *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thickness to be assigned to the scoped zone.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ThinStripesLabelName"></a>

### *property* MeshWorkflowControl.ThinStripesLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to thin stripe faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ThinStripesWidth"></a>

### *property* MeshWorkflowControl.ThinStripesWidth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the maximum width used in finding thin stripes with topology diagnostics.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ThinSweepDivisions"></a>

### *property* MeshWorkflowControl.ThinSweepDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of divisions to be used for Thin Sweep decomposition.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ThinSweepThickness"></a>

### *property* MeshWorkflowControl.ThinSweepThickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the thin sweep thickness to be used for Thin Sweep decomposition.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TopologyConformalConnection"></a>

### *property* MeshWorkflowControl.TopologyConformalConnection *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to preserve the topology connection for the newly created faces. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TriangleCountReductionMode"></a>

### *property* MeshWorkflowControl.TriangleCountReductionMode *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.TriangleCountReductionMode](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/TriangleCountReductionMode.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.TriangleCountReductionMode) | [None](https://docs.python.org/3/library/constants.html#None)*

This property gives control over the mode/degree of triangle count reduction during surface mesh generation. The supported modes are None, Conservative and Aggressive.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UnconnectedFreeEdgesLabelName"></a>

### *property* MeshWorkflowControl.UnconnectedFreeEdgesLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the label name to be applied to unconnected free edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UseCADCurvature"></a>

### *property* MeshWorkflowControl.UseCADCurvature *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to define the local curvature based on the CAD. The default value is True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UseMappedBlocksSplitAngle"></a>

### *property* MeshWorkflowControl.UseMappedBlocksSplitAngle *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether extra split should be introduced in the mapped blocks based on the MappedBlocksSplitAngle value. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UseSizeFieldInSweepDirection"></a>

### *property* MeshWorkflowControl.UseSizeFieldInSweepDirection *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to use the size field sizing along the sweeping direction or to apply a constant size. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VisibleProperties"></a>

### *property* MeshWorkflowControl.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeMeshType"></a>

### *property* MeshWorkflowControl.VolumeMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.VolumeMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/VolumeMeshType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.VolumeMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Type of Volume elements such as Tetrahedrons and Hex.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeZoneName"></a>

### *property* MeshWorkflowControl.VolumeZoneName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default volume zone name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumesLabelName"></a>

### *property* MeshWorkflowControl.VolumesLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the name to use when creating labels based on the number of volumes.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.WrapByParts"></a>

### *property* MeshWorkflowControl.WrapByParts *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to wrap each part separately. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.XAxis"></a>

### *property* MeshWorkflowControl.XAxis *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the x coordinate of the axis attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.XCenter"></a>

### *property* MeshWorkflowControl.XCenter *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the x coordinate of the center attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.XCoordinate"></a>

### *property* MeshWorkflowControl.XCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the X Coordinate.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.YAxis"></a>

### *property* MeshWorkflowControl.YAxis *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the y coordinate of the axis attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.YCenter"></a>

### *property* MeshWorkflowControl.YCenter *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the y coordinate of the center attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.YCoordinate"></a>

### *property* MeshWorkflowControl.YCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the Y Coordinate.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ZAxis"></a>

### *property* MeshWorkflowControl.ZAxis *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the z coordinate of the axis attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ZCenter"></a>

### *property* MeshWorkflowControl.ZCenter *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the z coordinate of the center attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ZCoordinate"></a>

### *property* MeshWorkflowControl.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the Z Coordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowControl.Activate"></a>

### MeshWorkflowControl.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AddFigure"></a>

### MeshWorkflowControl.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AddImage"></a>

### MeshWorkflowControl.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CopyTo"></a>

### MeshWorkflowControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateParameter"></a>

### MeshWorkflowControl.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Delete"></a>

### MeshWorkflowControl.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Duplicate"></a>

### MeshWorkflowControl.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetChildren"></a>

### MeshWorkflowControl.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetParameter"></a>

### MeshWorkflowControl.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GroupAllSimilarChildren"></a>

### MeshWorkflowControl.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GroupSimilarObjects"></a>

### MeshWorkflowControl.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PropertyByAPIName"></a>

### MeshWorkflowControl.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PropertyByName"></a>

### MeshWorkflowControl.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RemoveParameter"></a>

### MeshWorkflowControl.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

