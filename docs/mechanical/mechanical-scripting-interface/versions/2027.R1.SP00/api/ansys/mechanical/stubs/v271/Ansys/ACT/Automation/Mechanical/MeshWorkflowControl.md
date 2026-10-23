# `MeshWorkflowControl`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowControl(internalObject: Any)

<a id="MeshWorkflowControl"></a>

### *class* MeshWorkflowControl(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Object that wraps IDSMeshWorkflowControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowControl.Activate)                                                                           | Activate the current object.                                                                |
| [`AddFigure`](#MeshWorkflowControl.AddFigure)                                                                         | Creates a new child Figure.                                                                 |
| [`AddImage`](#MeshWorkflowControl.AddImage)                                                                           | Creates a new child Image.                                                                  |
| [`CanCheckPublicStateCallbackForIM`](#MeshWorkflowControl.CanCheckPublicStateCallbackForIM)                           | CanCheckPublicStateCallbackForIM method.                                                    |
| [`CanConvertTo`](#MeshWorkflowControl.CanConvertTo)                                                                   | Checks if this control can be converted to the specified ControlType.                       |
| [`CanDuplicate`](#MeshWorkflowControl.CanDuplicate)                                                                   | Returns whether the control can be duplicated.                                              |
| [`CanShowPublishStateIM`](#MeshWorkflowControl.CanShowPublishStateIM)                                                 | CanShowPublishStateIM method.                                                               |
| [`ConnectControlDataToSettings`](#MeshWorkflowControl.ConnectControlDataToSettings)                                   | Connects the control data to the desired settings                                           |
| [`ConnectScopeOutcome`](#MeshWorkflowControl.ConnectScopeOutcome)                                                     | Connects the scope identified by scopeName to the selected outcome.                         |
| [`ControlPropertyNameToDispIDMap`](#MeshWorkflowControl.ControlPropertyNameToDispIDMap)                               | ControlPropertyNameToDispIDMap method.                                                      |
| [`ConvertControl`](#MeshWorkflowControl.ConvertControl)                                                               | Converts the control to a ExternalPartEnclosure                                             |
| [`Copy`](#MeshWorkflowControl.Copy)                                                                                   | Copies the current DataModelObject.                                                         |
| [`CopyControlInternalizedFileContentToClipboard`](#MeshWorkflowControl.CopyControlInternalizedFileContentToClipboard) | CopyControlInternalizedFileContentToClipboard method.                                       |
| [`CopyControlInternalizedFilePathToClipboard`](#MeshWorkflowControl.CopyControlInternalizedFilePathToClipboard)       | CopyControlInternalizedFilePathToClipboard method.                                          |
| [`CopyTo`](#MeshWorkflowControl.CopyTo)                                                                               | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MeshWorkflowControl.CreateObjRef)                                                                   | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MeshWorkflowControl.CreateParameter)                                                             | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MeshWorkflowControl.Cut)                                                                                     | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MeshWorkflowControl.Delete)                                                                               | Run the Delete action.                                                                      |
| [`Duplicate`](#MeshWorkflowControl.Duplicate)                                                                         | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MeshWorkflowControl.Equals)                                                                               | Equals method.                                                                              |
| [`GetAPIName`](#MeshWorkflowControl.GetAPIName)                                                                       | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MeshWorkflowControl.GetAllProperties)                                                           | GetAllProperties method.                                                                    |
| [`GetChildren`](#MeshWorkflowControl.GetChildren)                                                                     | Gets the list of children, filtered by type.                                                |
| [`GetControlPointElementSizes`](#MeshWorkflowControl.GetControlPointElementSizes)                                     | Gets the Control Point Element Sizes for the specified axis.                                |
| [`GetControlPointIndices`](#MeshWorkflowControl.GetControlPointIndices)                                               | Gets the Control Point Indices for the specified axis.                                      |
| [`GetControlPointPositions`](#MeshWorkflowControl.GetControlPointPositions)                                           | Gets the Control Point Positions for the specified axis.                                    |
| [`GetControlPointRatios`](#MeshWorkflowControl.GetControlPointRatios)                                                 | Gets the Control Point Ratios for the specified axis.                                       |
| [`GetConvertibleControlTypes`](#MeshWorkflowControl.GetConvertibleControlTypes)                                       | Returns the list of ControlTypes that this control can be converted to.                     |
| [`GetDetailsView`](#MeshWorkflowControl.GetDetailsView)                                                               | GetDetailsView method.                                                                      |
| [`GetDomainBrowserAvailableMorphFieldPatterns`](#MeshWorkflowControl.GetDomainBrowserAvailableMorphFieldPatterns)     | GetDomainBrowserAvailableMorphFieldPatterns method.                                         |
| [`GetDomainBrowserAvailableScopes`](#MeshWorkflowControl.GetDomainBrowserAvailableScopes)                             | GetDomainBrowserAvailableScopes method.                                                     |
| [`GetDomainBrowserAvailableSizeFieldPatterns`](#MeshWorkflowControl.GetDomainBrowserAvailableSizeFieldPatterns)       | GetDomainBrowserAvailableSizeFieldPatterns method.                                          |
| [`GetEnumName`](#MeshWorkflowControl.GetEnumName)                                                                     | Enum name bound to value                                                                    |
| [`GetHashCode`](#MeshWorkflowControl.GetHashCode)                                                                     | GetHashCode method.                                                                         |
| [`GetIconFile`](#MeshWorkflowControl.GetIconFile)                                                                     | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MeshWorkflowControl.GetLifetimeService)                                                       | GetLifetimeService method.                                                                  |
| [`GetMeshSpacingType`](#MeshWorkflowControl.GetMeshSpacingType)                                                       | Gets the Mesh Spacing Type for the specified axis.                                          |
| [`GetObjectData`](#MeshWorkflowControl.GetObjectData)                                                                 | GetObjectData method.                                                                       |
| [`GetParameter`](#MeshWorkflowControl.GetParameter)                                                                   | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MeshWorkflowControl.GetPath)                                                                             | GetPath method.                                                                             |
| [`GetPropertyName`](#MeshWorkflowControl.GetPropertyName)                                                             | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MeshWorkflowControl.GetPropertyValue)                                                           | GetPropertyValue method.                                                                    |
| [`GetPropertyWorksheetInfo`](#MeshWorkflowControl.GetPropertyWorksheetInfo)                                           | GetPropertyWorksheetInfo method.                                                            |
| [`GetUnpublishedList`](#MeshWorkflowControl.GetUnpublishedList)                                                       | GetUnpublishedList method.                                                                  |
| [`GetVisibleProperties`](#MeshWorkflowControl.GetVisibleProperties)                                                   | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MeshWorkflowControl.GetVisiblePropertyNames)                                             | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MeshWorkflowControl.GroupAllSimilarChildren)                                             | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MeshWorkflowControl.GroupSimilarObjects)                                                     | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MeshWorkflowControl.InitializeLifetimeService)                                         | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MeshWorkflowControl.IsPropertyEditable)                                                       | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MeshWorkflowControl.IsPropertyVisible)                                                         | IsPropertyVisible method.                                                                   |
| [`Paste`](#MeshWorkflowControl.Paste)                                                                                 | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MeshWorkflowControl.PropertyByAPIName)                                                         | Get a property by its API name.                                                             |
| [`PropertyById`](#MeshWorkflowControl.PropertyById)                                                                   | PropertyById method.                                                                        |
| [`PropertyByName`](#MeshWorkflowControl.PropertyByName)                                                               | Get a property by its unique name.                                                          |
| [`PropertyTypeInfo`](#MeshWorkflowControl.PropertyTypeInfo)                                                           | PropertyTypeInfo method.                                                                    |
| [`PublishIMProp`](#MeshWorkflowControl.PublishIMProp)                                                                 | PublishIMProp method.                                                                       |
| [`RemoveFromGroup`](#MeshWorkflowControl.RemoveFromGroup)                                                             | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MeshWorkflowControl.RemoveParameter)                                                             | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnType`](#MeshWorkflowControl.RenameBasedOnType)                                                         | Renames applying the default name based on type.                                            |
| [`SetControlPointElementSizes`](#MeshWorkflowControl.SetControlPointElementSizes)                                     | SetControlPointElementSizes method.                                                         |
| [`SetControlPointIndices`](#MeshWorkflowControl.SetControlPointIndices)                                               | SetControlPointIndices method.                                                              |
| [`SetControlPointPositions`](#MeshWorkflowControl.SetControlPointPositions)                                           | SetControlPointPositions method.                                                            |
| [`SetControlPointRatios`](#MeshWorkflowControl.SetControlPointRatios)                                                 | SetControlPointRatios method.                                                               |
| [`SetMeshSpacingType`](#MeshWorkflowControl.SetMeshSpacingType)                                                       | Sets the Mesh Spacing Type for the specified axis.                                          |
| [`SetPropertyValue`](#MeshWorkflowControl.SetPropertyValue)                                                           | SetPropertyValue method.                                                                    |
| [`SetPublish`](#MeshWorkflowControl.SetPublish)                                                                       | SetPublish method.                                                                          |
| [`SetScopeMethodAndPattern`](#MeshWorkflowControl.SetScopeMethodAndPattern)                                           | SetScopeMethodAndPattern method.                                                            |
| [`SetUnpublish`](#MeshWorkflowControl.SetUnpublish)                                                                   | SetUnpublish method.                                                                        |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AcuteCuspAngle`](#MeshWorkflowControl.AcuteCuspAngle)                                                                     | Gets or sets the angle threshold for identifying acute cusps.                                                                                                                                                                                                                                                                                                       |
| [`AddBoundingTopoFacesZones`](#MeshWorkflowControl.AddBoundingTopoFacesZones)                                               | Gets or sets whether to add automatically the face zones for the topo faces bounding the topo volumes. The default value is false.                                                                                                                                                                                                                                  |
| [`AddUniqueLabelPerPoint`](#MeshWorkflowControl.AddUniqueLabelPerPoint)                                                     | Gets or sets whether to apply a unique label name to each added prescribed point. Uniqueness is enforced by appending a numbering suffix to the label name.                                                                                                                                                                                                         |
| [`AddUniqueZonePerVolume`](#MeshWorkflowControl.AddUniqueZonePerVolume)                                                     | Gets or sets whether to add unique zone for each extracted volume. Uniqueness is enforced by appending a numbering suffix to the zone name.                                                                                                                                                                                                                         |
| [`AddedTopoEntitiesLabel`](#MeshWorkflowControl.AddedTopoEntitiesLabel)                                                     | This property is used to rename the default label generated for the added topological entities.                                                                                                                                                                                                                                                                     |
| [`AligningAccuracy`](#MeshWorkflowControl.AligningAccuracy)                                                                 | Gets or sets the aligning accuracy for the aligning process.                                                                                                                                                                                                                                                                                                        |
| [`AligningMethod`](#MeshWorkflowControl.AligningMethod)                                                                     | Gets or sets the aligning method for the aligning process.                                                                                                                                                                                                                                                                                                          |
| [`AllowEdgeMergingSelfClose`](#MeshWorkflowControl.AllowEdgeMergingSelfClose)                                               | Gets or sets whether to allow self-closing when merging edges. Defaults to False.                                                                                                                                                                                                                                                                                   |
| [`AllowSurfaceInterpolation`](#MeshWorkflowControl.AllowSurfaceInterpolation)                                               | Gets or sets whether to allow surface interpolation for sliding constraint.                                                                                                                                                                                                                                                                                         |
| [`AnchorFreeEdges`](#MeshWorkflowControl.AnchorFreeEdges)                                                                   | Gets or sets if the free edges of the model should be automatically considered as fixed for the morphing operation.                                                                                                                                                                                                                                                 |
| [`AppendData`](#MeshWorkflowControl.AppendData)                                                                             | Gets or sets whether to append the mesh data being read to the current PrimeMesh model or to clear the model content before the mesh data is being read. The default value is false.                                                                                                                                                                                |
| [`ApplySemistructuredPattern`](#MeshWorkflowControl.ApplySemistructuredPattern)                                             | Gets or sets whether to apply Semistructured Pattern mapped meshing.                                                                                                                                                                                                                                                                                                |
| [`AspectRatioValidationErrorLimit`](#MeshWorkflowControl.AspectRatioValidationErrorLimit)                                   | Gets or sets the aspect ratio validation error limit.                                                                                                                                                                                                                                                                                                               |
| [`AspectRatioValidationWarningLimit`](#MeshWorkflowControl.AspectRatioValidationWarningLimit)                               | Gets or sets the aspect ratio validation warning limit.                                                                                                                                                                                                                                                                                                             |
| [`AttachedRefs`](#MeshWorkflowControl.AttachedRefs)                                                                         | AttachedRefs property.                                                                                                                                                                                                                                                                                                                                              |
| [`AutoCollapseShortEdges`](#MeshWorkflowControl.AutoCollapseShortEdges)                                                     | Gets or sets whether to collapse edges below the specified tolerance. Feature edges and Protected edges are not collapsed.                                                                                                                                                                                                                                          |
| [`AutoComputeCenterAxis`](#MeshWorkflowControl.AutoComputeCenterAxis)                                                       | Gets or sets whether to automatically compute the center and axis for the cyclic region.                                                                                                                                                                                                                                                                            |
| [`AutoComputeOverlapsTolerance`](#MeshWorkflowControl.AutoComputeOverlapsTolerance)                                         | Gets or sets whether to use the automatically computed overlaps tolerance.                                                                                                                                                                                                                                                                                          |
| [`AutoDeleteInteriorVertices`](#MeshWorkflowControl.AutoDeleteInteriorVertices)                                             | Gets or sets whether to delete interior vertices from scoped topology.                                                                                                                                                                                                                                                                                              |
| [`AutoDetectCollidingFaces`](#MeshWorkflowControl.AutoDetectCollidingFaces)                                                 | Gets or sets whether to automatically detect colliding faces.                                                                                                                                                                                                                                                                                                       |
| [`AutoMergeParts`](#MeshWorkflowControl.AutoMergeParts)                                                                     | Gets or sets the AutoMergeParts.                                                                                                                                                                                                                                                                                                                                    |
| [`AutoPartialDefeature`](#MeshWorkflowControl.AutoPartialDefeature)                                                         | Gets or sets whether to partially remove thin faces and sharp angles within provided tolerances, such that only topology impacting mesh quality is removed.                                                                                                                                                                                                         |
| [`AutoPinchFaces`](#MeshWorkflowControl.AutoPinchFaces)                                                                     | Gets or sets whether to remove small features from topology to improve mesh quality.                                                                                                                                                                                                                                                                                |
| [`AutoQuad_AllowCurvedTopoFaces`](#MeshWorkflowControl.AutoQuad_AllowCurvedTopoFaces)                                       | Gets or sets whether to allow curved topo faces when detecting and treating holes.                                                                                                                                                                                                                                                                                  |
| [`AutoQuad_FragmentedEdgeTolerance`](#MeshWorkflowControl.AutoQuad_FragmentedEdgeTolerance)                                 | Gets or sets the edge tolerance for non circular holes with round corners in order to remove the short edge and hotspots when treating holes and features.                                                                                                                                                                                                          |
| [`AutoQuad_HoleOffsetPercentage`](#MeshWorkflowControl.AutoQuad_HoleOffsetPercentage)                                       | Gets or sets the hole offset percentage to be used with mesh size when generating quad layers.                                                                                                                                                                                                                                                                      |
| [`AutoQuad_MeshSize`](#MeshWorkflowControl.AutoQuad_MeshSize)                                                               | Gets or sets the maximum size for the mesh.                                                                                                                                                                                                                                                                                                                         |
| [`AutoQuad_SplitTopoEdgesAtApexPoint`](#MeshWorkflowControl.AutoQuad_SplitTopoEdgesAtApexPoint)                             | Gets or sets whether to split topo edges at their apex point when repairing topology.                                                                                                                                                                                                                                                                               |
| [`AutoQuad_ThinStripesTolerance`](#MeshWorkflowControl.AutoQuad_ThinStripesTolerance)                                       | Gets or sets the maximum thin stripe width to be used when defeaturing topology.                                                                                                                                                                                                                                                                                    |
| [`AutoQuad_ZoneThickness`](#MeshWorkflowControl.AutoQuad_ZoneThickness)                                                     | Gets or sets the Zone Thickness to be used when converting an all quad mesh to splines.                                                                                                                                                                                                                                                                             |
| [`AutoRemoveSharpAngleFaces`](#MeshWorkflowControl.AutoRemoveSharpAngleFaces)                                               | Gets or sets whether to remove sharp angle faces below the specified angle tolerance by merging them to the neighboring faces.                                                                                                                                                                                                                                      |
| [`AutoRemoveThinFaces`](#MeshWorkflowControl.AutoRemoveThinFaces)                                                           | Gets or sets whether to remove thin faces by merging them with the neighboring faces.                                                                                                                                                                                                                                                                               |
| [`AutoRepairEdgesOfFaces`](#MeshWorkflowControl.AutoRepairEdgesOfFaces)                                                     | Gets or sets whether to prevent the collapse and defeature of thin or short topologies, and allow the creation of a coarse mesh while keeping topology as-is.                                                                                                                                                                                                       |
| [`AutoSuppressInteriorEdges`](#MeshWorkflowControl.AutoSuppressInteriorEdges)                                               | Gets or sets whether to suppress interior edges of scoped faces.                                                                                                                                                                                                                                                                                                    |
| [`AutomaticExternalScope`](#MeshWorkflowControl.AutomaticExternalScope)                                                     | Gets or sets whether to define programmatically the external scoping method and pattern for the external enclosure. The default value is false.                                                                                                                                                                                                                     |
| [`Axis`](#MeshWorkflowControl.Axis)                                                                                         | Gets or sets the Axis coordinates.                                                                                                                                                                                                                                                                                                                                  |
| [`BaseFaceLabel`](#MeshWorkflowControl.BaseFaceLabel)                                                                       | Gets or sets the label to be used for the base face.                                                                                                                                                                                                                                                                                                                |
| [`BaseFaceScopeDefinition`](#MeshWorkflowControl.BaseFaceScopeDefinition)                                                   | Gets or sets the type of scope definition for the base face scoping. Default: Value                                                                                                                                                                                                                                                                                 |
| [`BaseFaceScopeMethod`](#MeshWorkflowControl.BaseFaceScopeMethod)                                                           | Gets or sets the scoping method for the base face scoping. Default: Label.                                                                                                                                                                                                                                                                                          |
| [`BaseFaceScopeOutcome`](#MeshWorkflowControl.BaseFaceScopeOutcome)                                                         | Gets or sets the scope outcome from a previous operation. Applicable only if BaseFaceScopeOutcome is set to Outcome.                                                                                                                                                                                                                                                |
| [`BaseFaceScopePattern`](#MeshWorkflowControl.BaseFaceScopePattern)                                                         | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if BaseFaceScopeOutcome is set to Value.                                                                                                                                                                                                                                  |
| [`BaseToleranceFactor`](#MeshWorkflowControl.BaseToleranceFactor)                                                           | Gets or sets the factor applied to the size to derive the base tolerance.                                                                                                                                                                                                                                                                                           |
| [`BendingScopeDefinition`](#MeshWorkflowControl.BendingScopeDefinition)                                                     | Gets or sets the type of scope definition for the bending scope of the morphing operation. Default: Value                                                                                                                                                                                                                                                           |
| [`BendingScopeMethod`](#MeshWorkflowControl.BendingScopeMethod)                                                             | Gets or sets the scoping method for the bending scope of the morphing operation. Default: Label                                                                                                                                                                                                                                                                     |
| [`BendingScopeOutcome`](#MeshWorkflowControl.BendingScopeOutcome)                                                           | Gets or sets the scope outcome from a previous operation. Applicable only if BendingScopeDefinition is set to Outcome.                                                                                                                                                                                                                                              |
| [`BendingScopePattern`](#MeshWorkflowControl.BendingScopePattern)                                                           | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if BendingScopeDefinition is set to Value.                                                                                                                                                                                                                                |
| [`BiasingIntensity`](#MeshWorkflowControl.BiasingIntensity)                                                                 | Gets or sets the intensity of the biasing.                                                                                                                                                                                                                                                                                                                          |
| [`BiasingModality`](#MeshWorkflowControl.BiasingModality)                                                                   | Gets or sets thebiasing type for the solver operation. Default: Disabled.                                                                                                                                                                                                                                                                                           |
| [`BlendToNeighbors`](#MeshWorkflowControl.BlendToNeighbors)                                                                 | Gets or sets whether to adjust the sizes on adjacent edges of non-mapped mesh regions. Defaults to False.                                                                                                                                                                                                                                                           |
| [`BlendType`](#MeshWorkflowControl.BlendType)                                                                               | Gets or sets the blend type. The default value is Automatic.                                                                                                                                                                                                                                                                                                        |
| [`CameraDirection`](#MeshWorkflowControl.CameraDirection)                                                                   | Gets or sets the CameraDirection coordinates.                                                                                                                                                                                                                                                                                                                       |
| [`CameraName`](#MeshWorkflowControl.CameraName)                                                                             | Gets or sets the name for the given camera.                                                                                                                                                                                                                                                                                                                         |
| [`CameraUp`](#MeshWorkflowControl.CameraUp)                                                                                 | Gets or sets the CameraUp coordinates.                                                                                                                                                                                                                                                                                                                              |
| [`CaptureInternalFeatures`](#MeshWorkflowControl.CaptureInternalFeatures)                                                   | Gets or sets the CaptureInternalFeatures.                                                                                                                                                                                                                                                                                                                           |
| [`CartesianCoordinateSystem`](#MeshWorkflowControl.CartesianCoordinateSystem)                                               | Gets or sets the CartesianCoordinateSystem.                                                                                                                                                                                                                                                                                                                         |
| [`Center`](#MeshWorkflowControl.Center)                                                                                     | Gets or sets the Center 3D coordinates.                                                                                                                                                                                                                                                                                                                             |
| [`CenterPlaneNormalOffset`](#MeshWorkflowControl.CenterPlaneNormalOffset)                                                   | It defines the desired offset of the plane of the hemisphere from the model.                                                                                                                                                                                                                                                                                        |
| [`CenterPosition`](#MeshWorkflowControl.CenterPosition)                                                                     | It is defined by “Centered”, “Minimal”, and “User Defined”.                                                                                                                                                                                                                                                                                                         |
| [`CheckBodyIntersections`](#MeshWorkflowControl.CheckBodyIntersections)                                                     | Gets or sets whether to check for intersections among the scoped bodies. Intersection detection is based on absolute tolerances specified in the Stacker Settings. If not provided, a default absolute tolerance of 0.0 is used.                                                                                                                                    |
| [`Children`](#MeshWorkflowControl.Children)                                                                                 | Gets the list of children.                                                                                                                                                                                                                                                                                                                                          |
| [`ClsId`](#MeshWorkflowControl.ClsId)                                                                                       | ClsId property.                                                                                                                                                                                                                                                                                                                                                     |
| [`ClusterLabelPrefix`](#MeshWorkflowControl.ClusterLabelPrefix)                                                             | Gets or sets the label prefix to be applied to detected clusters for the Detect Clusters control.                                                                                                                                                                                                                                                                   |
| [`CollapeUshapeCuspMiddleFaces`](#MeshWorkflowControl.CollapeUshapeCuspMiddleFaces)                                         | Gets or sets whether to collapse middle faces in U-shaped cusps.                                                                                                                                                                                                                                                                                                    |
| [`CollapseSliverFaces`](#MeshWorkflowControl.CollapseSliverFaces)                                                           | Gets or sets whether to collapse sliver faces during cleanup.                                                                                                                                                                                                                                                                                                       |
| [`CollapseUshapeCuspFaceQualityLimit`](#MeshWorkflowControl.CollapseUshapeCuspFaceQualityLimit)                             | Gets or sets the quality limit for collapsing U-shape cusp middle faces.                                                                                                                                                                                                                                                                                            |
| [`CollidingTolerance`](#MeshWorkflowControl.CollidingTolerance)                                                             | Gets or sets the tolerance for detecting colliding faces. This is a length value.                                                                                                                                                                                                                                                                                   |
| [`ColorMode`](#MeshWorkflowControl.ColorMode)                                                                               | Gets or sets the color mode for image generation.                                                                                                                                                                                                                                                                                                                   |
| [`ConformalMeshOnContactSurfaces`](#MeshWorkflowControl.ConformalMeshOnContactSurfaces)                                     | Gets or sets whether to decide creation of conformal mesh at contact surfaces.                                                                                                                                                                                                                                                                                      |
| [`ConnectIntersectionType`](#MeshWorkflowControl.ConnectIntersectionType)                                                   | Gets or sets the connect intersection type. The default value is AllToAll.                                                                                                                                                                                                                                                                                          |
| [`ConnectionBaseTolerance`](#MeshWorkflowControl.ConnectionBaseTolerance)                                                   | Gets or sets the base tolerance for the connection with multiple tolerances.                                                                                                                                                                                                                                                                                        |
| [`ConnectionSize`](#MeshWorkflowControl.ConnectionSize)                                                                     | Gets or sets the edge mesh size used to check the connection.                                                                                                                                                                                                                                                                                                       |
| [`ConnectionTargetTolerance`](#MeshWorkflowControl.ConnectionTargetTolerance)                                               | Gets or sets the target tolerance for the connection with multiple tolerances.                                                                                                                                                                                                                                                                                      |
| [`ConnectionTolerance`](#MeshWorkflowControl.ConnectionTolerance)                                                           | Gets or sets the maximum gap for the connection.                                                                                                                                                                                                                                                                                                                    |
| [`ConstantHeight`](#MeshWorkflowControl.ConstantHeight)                                                                     | Height of a single layer of mesh elements.                                                                                                                                                                                                                                                                                                                          |
| [`ConsumeAttachments`](#MeshWorkflowControl.ConsumeAttachments)                                                             |                                                                                                                                                                                                                                                                                                                                                                     |
| [`ContactPairLabelPrefix`](#MeshWorkflowControl.ContactPairLabelPrefix)                                                     | Gets or sets the label prefix to be used for labeling detected contact pairs.                                                                                                                                                                                                                                                                                       |
| [`ControlDataDefinition`](#MeshWorkflowControl.ControlDataDefinition)                                                       | This property is used to define if the control data is defined by value or by settings.                                                                                                                                                                                                                                                                             |
| [`ControlDescription`](#MeshWorkflowControl.ControlDescription)                                                             | ControlDescription property.                                                                                                                                                                                                                                                                                                                                        |
| [`ControlDescriptionJson`](#MeshWorkflowControl.ControlDescriptionJson)                                                     | ControlDescriptionJson property.                                                                                                                                                                                                                                                                                                                                    |
| [`ControlScopeDefinition`](#MeshWorkflowControl.ControlScopeDefinition)                                                     | Gets or sets the type of scope definition for the control scope of the morphing operation. Default: Value                                                                                                                                                                                                                                                           |
| [`ControlScopeMethod`](#MeshWorkflowControl.ControlScopeMethod)                                                             | Gets or sets the scoping method for the control scope of the morphing operation. Default: Part.                                                                                                                                                                                                                                                                     |
| [`ControlScopeOutcome`](#MeshWorkflowControl.ControlScopeOutcome)                                                           | Gets or sets the scope outcome from a previous operation. Applicable only if 'ControlScopeDefinition' is set to Outcome.                                                                                                                                                                                                                                            |
| [`ControlScopePattern`](#MeshWorkflowControl.ControlScopePattern)                                                           | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'ControlScopeDefinition' is set to Value.                                                                                                                                                                                                                              |
| [`ControlString`](#MeshWorkflowControl.ControlString)                                                                       | Gets the ControlString.                                                                                                                                                                                                                                                                                                                                             |
| [`ControlType`](#MeshWorkflowControl.ControlType)                                                                           | Returns the type of the control.                                                                                                                                                                                                                                                                                                                                    |
| [`ControlTypeInformation`](#MeshWorkflowControl.ControlTypeInformation)                                                     | ControlTypeInformation property.                                                                                                                                                                                                                                                                                                                                    |
| [`ControlTypeInformationJson`](#MeshWorkflowControl.ControlTypeInformationJson)                                             | ControlTypeInformationJson property.                                                                                                                                                                                                                                                                                                                                |
| [`Coordinate`](#MeshWorkflowControl.Coordinate)                                                                             | Gets or sets the coordinates.                                                                                                                                                                                                                                                                                                                                       |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                                                                  | Gets or sets the Coordinate System object used to define the material point location.                                                                                                                                                                                                                                                                               |
| [`CoordinatesDefinition`](#MeshWorkflowControl.CoordinatesDefinition)                                                       | Gets or sets the location coordinates definition type. The default value is Location.                                                                                                                                                                                                                                                                               |
| [`CoordinatesDefinition2`](#MeshWorkflowControl.CoordinatesDefinition2)                                                     | Gets or sets the second location coordinates definition type. The default value is Location.                                                                                                                                                                                                                                                                        |
| [`CoordinatesDefinition3`](#MeshWorkflowControl.CoordinatesDefinition3)                                                     | Gets or sets the third location coordinates definition type. The default value is Location.                                                                                                                                                                                                                                                                         |
| [`CoordinatesDefinition4`](#MeshWorkflowControl.CoordinatesDefinition4)                                                     | Gets or sets the fourth location coordinates definition type. The default value is Location.                                                                                                                                                                                                                                                                        |
| [`CoplanarAngleTolerance`](#MeshWorkflowControl.CoplanarAngleTolerance)                                                     | Gets or sets the angle below which the faces are considered coplanar.                                                                                                                                                                                                                                                                                               |
| [`CreateAssemblyComponent`](#MeshWorkflowControl.CreateAssemblyComponent)                                                   | Gets or sets the CreateAssemblyComponent.                                                                                                                                                                                                                                                                                                                           |
| [`CreateAssociationAttributes`](#MeshWorkflowControl.CreateAssociationAttributes)                                           | Gets or sets whether to retain the association information on execution. The default value is false.                                                                                                                                                                                                                                                                |
| [`CreateFaceZone`](#MeshWorkflowControl.CreateFaceZone)                                                                     | Gets or sets whether to create a new face zone.                                                                                                                                                                                                                                                                                                                     |
| [`CreateGeometry`](#MeshWorkflowControl.CreateGeometry)                                                                     | Gets or sets the CreateGeometry.                                                                                                                                                                                                                                                                                                                                    |
| [`CreateQuadraticElements`](#MeshWorkflowControl.CreateQuadraticElements)                                                   | Gets or sets whether to create quadratic elements. The default value is false.                                                                                                                                                                                                                                                                                      |
| [`CreateQuads`](#MeshWorkflowControl.CreateQuads)                                                                           | This property is used to define the name of the size field to apply to the meshing operation.                                                                                                                                                                                                                                                                       |
| [`CreateSolidComponent`](#MeshWorkflowControl.CreateSolidComponent)                                                         | Gets or sets the CreateSolidComponent.                                                                                                                                                                                                                                                                                                                              |
| [`CuboidCenterModality`](#MeshWorkflowControl.CuboidCenterModality)                                                         | Gets or sets the rule for the computation of the center of the cuboidal enclosure.                                                                                                                                                                                                                                                                                  |
| [`CuspTrimOneSide`](#MeshWorkflowControl.CuspTrimOneSide)                                                                   | Gets or sets whether to trim cusps on one side only.                                                                                                                                                                                                                                                                                                                |
| [`CylinderHeightAxis`](#MeshWorkflowControl.CylinderHeightAxis)                                                             | Gets or sets the cylinder height axis coordinates.                                                                                                                                                                                                                                                                                                                  |
| [`DataModelObjectCategory`](#MeshWorkflowControl.DataModelObjectCategory)                                                   | Gets the current DataModelObject's category.                                                                                                                                                                                                                                                                                                                        |
| [`DecompositionType`](#MeshWorkflowControl.DecompositionType)                                                               | Gets or sets the decomposition type used by the MultiZone mesher. Defaults to “Program Controlled”.                                                                                                                                                                                                                                                                 |
| [`DefaultOffsetSize`](#MeshWorkflowControl.DefaultOffsetSize)                                                               | Gets or sets the size of the offset layers to be used during the stack base operation.                                                                                                                                                                                                                                                                              |
| [`DefeatureTolerance`](#MeshWorkflowControl.DefeatureTolerance)                                                             | Gets or sets the defeature tolerance applied during meshing. Applicable only if DefeatureToleranceDefineBy is “UserDefined”.                                                                                                                                                                                                                                        |
| [`DefeatureToleranceDefineBy`](#MeshWorkflowControl.DefeatureToleranceDefineBy)                                             | Gets or sets how the Defeature Tolerance is defined for the MultiZone mesher. Defaults to  “Program Controlled”.                                                                                                                                                                                                                                                    |
| [`DeleteAfterEdgeMerging`](#MeshWorkflowControl.DeleteAfterEdgeMerging)                                                     | Gets or sets whether to delete the common topo node after merging edges. Defaults to False.                                                                                                                                                                                                                                                                         |
| [`DeleteCollidingFaces`](#MeshWorkflowControl.DeleteCollidingFaces)                                                         | Gets or sets whether to delete the model faces colliding with the enclosure. Default is True.                                                                                                                                                                                                                                                                       |
| [`DeleteEmptyVolumes`](#MeshWorkflowControl.DeleteEmptyVolumes)                                                             | This property is used to enable or disable the automatic deletion of empty topo volumes  during mesh to topology conversion. The default value is false.                                                                                                                                                                                                            |
| [`DeleteInputScope`](#MeshWorkflowControl.DeleteInputScope)                                                                 | Gets or sets whether to delete of input scope after wrapping. The default value is false.                                                                                                                                                                                                                                                                           |
| [`DeleteMeshVolumes`](#MeshWorkflowControl.DeleteMeshVolumes)                                                               | Gets or sets the DeleteMeshVolumes.                                                                                                                                                                                                                                                                                                                                 |
| [`DeleteZonePropertiesPropertyExpression`](#MeshWorkflowControl.DeleteZonePropertiesPropertyExpression)                     | Gets or sets the DeleteZonePropertiesPropertyExpression.                                                                                                                                                                                                                                                                                                            |
| [`Delta`](#MeshWorkflowControl.Delta)                                                                                       | Gets or sets the Delta coordinates.                                                                                                                                                                                                                                                                                                                                 |
| [`DeltaX`](#MeshWorkflowControl.DeltaX)                                                                                     | Gets or sets the x coordinate of the delta attribute of the corresponding control.                                                                                                                                                                                                                                                                                  |
| [`DeltaY`](#MeshWorkflowControl.DeltaY)                                                                                     | Gets or sets the y coordinate of the delta attribute of the corresponding control.                                                                                                                                                                                                                                                                                  |
| [`DeltaZ`](#MeshWorkflowControl.DeltaZ)                                                                                     | Gets or sets the z coordinate of the delta attribute of the corresponding control.                                                                                                                                                                                                                                                                                  |
| [`DihedralAngle`](#MeshWorkflowControl.DihedralAngle)                                                                       | The dihedral angle is the angle between the normal vectors of two element faces.                                                                                                                                                                                                                                                                                    |
| [`Direction`](#MeshWorkflowControl.Direction)                                                                               | Gets or sets the Direction coordinates.                                                                                                                                                                                                                                                                                                                             |
| [`DirectionDefinition`](#MeshWorkflowControl.DirectionDefinition)                                                           | Gets or sets the direction definition type. The default value is PickLocation.                                                                                                                                                                                                                                                                                      |
| [`DirectionX`](#MeshWorkflowControl.DirectionX)                                                                             | Gets or sets the X component of the direction vector, with respect to the Global Coordinate System.                                                                                                                                                                                                                                                                 |
| [`DirectionY`](#MeshWorkflowControl.DirectionY)                                                                             | Gets or sets the Y component of the direction vector, with respect to the Global Coordinate System.                                                                                                                                                                                                                                                                 |
| [`DirectionZ`](#MeshWorkflowControl.DirectionZ)                                                                             | Gets or sets the Z component of the direction vector, with respect to the Global Coordinate System.                                                                                                                                                                                                                                                                 |
| [`DirectoryName`](#MeshWorkflowControl.DirectoryName)                                                                       | Gets or sets the DirectoryName.                                                                                                                                                                                                                                                                                                                                     |
| [`Distance`](#MeshWorkflowControl.Distance)                                                                                 | Gets or sets the distance from the control area considered morphable for the morphing operation. Applicable only if SurfaceScopeModality is set to 'Distance'.                                                                                                                                                                                                      |
| [`EdgeBiasingDefineBy`](#MeshWorkflowControl.EdgeBiasingDefineBy)                                                           | Gets or sets how the scoped edges meshing size is defined for MultiZone edge biasing. Defaults to NumberOfDivisions.                                                                                                                                                                                                                                                |
| [`EdgeBiasingFactor`](#MeshWorkflowControl.EdgeBiasingFactor)                                                               | Gets or sets the edge sizing biasing factor. The default value is 1.0.                                                                                                                                                                                                                                                                                              |
| [`EdgeBiasingType`](#MeshWorkflowControl.EdgeBiasingType)                                                                   | Gets or sets the type of biasing to apply along the scoped edges for MultiZone edge biasing. Defaults to Uniform.                                                                                                                                                                                                                                                   |
| [`EdgeCleanup`](#MeshWorkflowControl.EdgeCleanup)                                                                           | Gets or sets the EdgeCleanup.                                                                                                                                                                                                                                                                                                                                       |
| [`EdgeFeatureFilter`](#MeshWorkflowControl.EdgeFeatureFilter)                                                               | How scoped edges are filtered on a Scope Label Addition control.                                                                                                                                                                                                                                                                                                    |
| [`EdgeLabelName`](#MeshWorkflowControl.EdgeLabelName)                                                                       | This property is used to rename the default edge label name generated during execution of step.                                                                                                                                                                                                                                                                     |
| [`EdgeMergingMergedEdgesLabel`](#MeshWorkflowControl.EdgeMergingMergedEdgesLabel)                                           | Gets or sets the label to be applied to successfully merged edges for identification in subsequent operations.                                                                                                                                                                                                                                                      |
| [`EdgeMergingScopeDefinition`](#MeshWorkflowControl.EdgeMergingScopeDefinition)                                             | Gets or sets the type of scope definition for the Edge Merging scoping. Defaults to Value.                                                                                                                                                                                                                                                                          |
| [`EdgeMergingScopeMethod`](#MeshWorkflowControl.EdgeMergingScopeMethod)                                                     | Gets or sets the scoping method for the Edge Merging scoping. Defaults to Label.                                                                                                                                                                                                                                                                                    |
| [`EdgeMergingScopeOutcome`](#MeshWorkflowControl.EdgeMergingScopeOutcome)                                                   | Gets or sets the scope outcome from a previous operation for the Edge Merging scoping. Applicable only if scope is defined by outcome.                                                                                                                                                                                                                              |
| [`EdgeMergingScopePattern`](#MeshWorkflowControl.EdgeMergingScopePattern)                                                   | Gets or sets the part, zone or label name pattern for the Edge Merging scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                                                       |
| [`EdgeMesherBiasingType`](#MeshWorkflowControl.EdgeMesherBiasingType)                                                       | Gets or sets the type of biasing to apply along the scoped edges for the EdgeBiasingEdgeMesher control.                                                                                                                                                                                                                                                             |
| [`EdgeSplittingAbsoluteLocationX`](#MeshWorkflowControl.EdgeSplittingAbsoluteLocationX)                                     | Gets or sets the X coordinate of the absolute location for edge splitting. Applicable when location type is Absolute.                                                                                                                                                                                                                                               |
| [`EdgeSplittingAbsoluteLocationY`](#MeshWorkflowControl.EdgeSplittingAbsoluteLocationY)                                     | Gets or sets the Y coordinate of the absolute location for edge splitting. Applicable when location type is Absolute.                                                                                                                                                                                                                                               |
| [`EdgeSplittingAbsoluteLocationZ`](#MeshWorkflowControl.EdgeSplittingAbsoluteLocationZ)                                     | Gets or sets the Z coordinate of the absolute location for edge splitting. Applicable when location type is Absolute.                                                                                                                                                                                                                                               |
| [`EdgeSplittingLocationType`](#MeshWorkflowControl.EdgeSplittingLocationType)                                               | Gets or sets the type of location specification for edge splitting. Defaults to Relative.                                                                                                                                                                                                                                                                           |
| [`EdgeSplittingNewEdgeLabelPrefix`](#MeshWorkflowControl.EdgeSplittingNewEdgeLabelPrefix)                                   | Gets or sets the label prefix for new edges created during edge splitting. Applicable for UserNames control type.                                                                                                                                                                                                                                                   |
| [`EdgeSplittingNumberOfSegments`](#MeshWorkflowControl.EdgeSplittingNumberOfSegments)                                       | Gets or sets the number of segments to split the edges into. Applicable for NumberOfSegments control type.                                                                                                                                                                                                                                                          |
| [`EdgeSplittingRelativeLocation`](#MeshWorkflowControl.EdgeSplittingRelativeLocation)                                       | Gets or sets the relative location (0.0 to 1.0) along the edge for splitting. Applicable when location type is Relative.                                                                                                                                                                                                                                            |
| [`EdgeSplittingScopeDefinition`](#MeshWorkflowControl.EdgeSplittingScopeDefinition)                                         | Gets or sets the type of scope definition for the Edge Splitting scoping. Defaults to Value.                                                                                                                                                                                                                                                                        |
| [`EdgeSplittingScopeMethod`](#MeshWorkflowControl.EdgeSplittingScopeMethod)                                                 | Gets or sets the scoping method for the Edge Splitting scoping. Defaults to Label.                                                                                                                                                                                                                                                                                  |
| [`EdgeSplittingScopeOutcome`](#MeshWorkflowControl.EdgeSplittingScopeOutcome)                                               | Gets or sets the scope outcome from a previous operation for the Edge Splitting scoping. Applicable only if scope is defined by outcome.                                                                                                                                                                                                                            |
| [`EdgeSplittingScopePattern`](#MeshWorkflowControl.EdgeSplittingScopePattern)                                               | Gets or sets the part, zone or label name pattern for the Edge Splitting scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                                                     |
| [`EditMeshMergedFacesLabel`](#MeshWorkflowControl.EditMeshMergedFacesLabel)                                                 | Gets or sets the label to be applied to the faces that are merged during the EditMesh operation. Defaults to “MergedFaces”.                                                                                                                                                                                                                                         |
| [`EditMeshSeparatedFacesLabel`](#MeshWorkflowControl.EditMeshSeparatedFacesLabel)                                           | Gets or sets the label to be applied to the faces that are separated during the EditMesh operation. Defaults to “SeparatedFaces”.                                                                                                                                                                                                                                   |
| [`EditMeshSeparationAngle`](#MeshWorkflowControl.EditMeshSeparationAngle)                                                   | Gets or sets the angle above which adjacent face elements are split into separate faces. Defaults to 40 degrees.                                                                                                                                                                                                                                                    |
| [`EditMeshSeparationStrategy`](#MeshWorkflowControl.EditMeshSeparationStrategy)                                             | Gets or Sets the separation strategy used by the EditMeshSeparateFaces control. Defaults to Angle.                                                                                                                                                                                                                                                                  |
| [`ElementSize`](#MeshWorkflowControl.ElementSize)                                                                           | Define element size to achieve desired mesh results. User can achieve coarse, medium, or fine mesh by varying this value.                                                                                                                                                                                                                                           |
| [`ElementsPerGap`](#MeshWorkflowControl.ElementsPerGap)                                                                     | Gets or sets the minimum number of element layers to be generated per gap for the Proximity Sizing control by locally controlling the element size. The element size is defined as the gap size divided by ElementsPerGap, fractional values are supported for defining local element sizes larger than the gap size. The default values is 3.                      |
| [`EllipsoidFirstAxis`](#MeshWorkflowControl.EllipsoidFirstAxis)                                                             | Gets or sets the ellipsoid first axis coordinates.                                                                                                                                                                                                                                                                                                                  |
| [`EllipsoidSecondAxis`](#MeshWorkflowControl.EllipsoidSecondAxis)                                                           | Gets or sets the ellipsoid second axis coordinates.                                                                                                                                                                                                                                                                                                                 |
| [`EllipsoidThirdAxis`](#MeshWorkflowControl.EllipsoidThirdAxis)                                                             | Gets or sets the ellipsoid third axis coordinates.                                                                                                                                                                                                                                                                                                                  |
| [`EnableCheckpoint`](#MeshWorkflowControl.EnableCheckpoint)                                                                 | Flag whether to enable a checkpoint or not. The default value is false.                                                                                                                                                                                                                                                                                             |
| [`EnableSmoothing`](#MeshWorkflowControl.EnableSmoothing)                                                                   | Gets or sets the EnableSmoothing.                                                                                                                                                                                                                                                                                                                                   |
| [`EnforceConstantRadius`](#MeshWorkflowControl.EnforceConstantRadius)                                                       | Gets or sets whether to enforce a constant radius during morphing operations. Default: False                                                                                                                                                                                                                                                                        |
| [`EnforceGlobalSymmetry`](#MeshWorkflowControl.EnforceGlobalSymmetry)                                                       | Gets or sets whether to enforce the global symmetry for a planar cyclic region condition.                                                                                                                                                                                                                                                                           |
| [`ExcludeEnclosure`](#MeshWorkflowControl.ExcludeEnclosure)                                                                 | Gets or sets whether to exclude the enclosure from the wrapper scope . The default value is false.                                                                                                                                                                                                                                                                  |
| [`ExcludeScopeDefinition`](#MeshWorkflowControl.ExcludeScopeDefinition)                                                     | Gets or sets the type of scope definition for the Hole Patching exclusion scoping. Default: Value                                                                                                                                                                                                                                                                   |
| [`ExcludeScopeMethod`](#MeshWorkflowControl.ExcludeScopeMethod)                                                             | Gets or sets the scoping method for the Hole Patching exclusion scoping. Default: Label.                                                                                                                                                                                                                                                                            |
| [`ExcludeScopeOutcome`](#MeshWorkflowControl.ExcludeScopeOutcome)                                                           | Gets or sets the scope outcome from a previous operation for the Hole Patching exclusion scoping. Applicable only if scope is defined by outcome.                                                                                                                                                                                                                   |
| [`ExcludeScopePattern`](#MeshWorkflowControl.ExcludeScopePattern)                                                           | Gets or sets the part, zone or label name pattern for the Hole Patching exclusion scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                                            |
| [`ExportBlockingTopology`](#MeshWorkflowControl.ExportBlockingTopology)                                                     | Gets or sets whether to export the MultiZone blocking as a separate Prime part for blocking inspection. Defaults to False.                                                                                                                                                                                                                                          |
| [`ExteriorEdgeLoopScopeDefinition`](#MeshWorkflowControl.ExteriorEdgeLoopScopeDefinition)                                   | Gets or sets the type of scope definition for the Exterior Edge Loop scoping. Defaults to Value.                                                                                                                                                                                                                                                                    |
| [`ExteriorEdgeLoopScopeMethod`](#MeshWorkflowControl.ExteriorEdgeLoopScopeMethod)                                           | Gets or sets the scoping method for the Exterior Edge Loop scoping. Defaults to Label.                                                                                                                                                                                                                                                                              |
| [`ExteriorEdgeLoopScopeOutcome`](#MeshWorkflowControl.ExteriorEdgeLoopScopeOutcome)                                         | Gets or sets the scope outcome from a previous operation for the Exterior Edge Loop scoping. Applicable only if scope is defined by outcome.                                                                                                                                                                                                                        |
| [`ExteriorEdgeLoopScopePattern`](#MeshWorkflowControl.ExteriorEdgeLoopScopePattern)                                         | Gets or sets the part, zone or label name pattern for the Exterior Edge Loop scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                                                 |
| [`ExternalLabelName`](#MeshWorkflowControl.ExternalLabelName)                                                               | This property is used to rename the default external label name generated during execution of step.                                                                                                                                                                                                                                                                 |
| [`ExternalScopeDefinition`](#MeshWorkflowControl.ExternalScopeDefinition)                                                   | It is defined by value or outcome depending on if the External scope is defined manual by the user or defined based on a previous outcome.                                                                                                                                                                                                                          |
| [`ExternalScopeMethod`](#MeshWorkflowControl.ExternalScopeMethod)                                                           | The method can be label/zone/part and it is applied to external region of enclosure.                                                                                                                                                                                                                                                                                |
| [`ExternalScopeOutcome`](#MeshWorkflowControl.ExternalScopeOutcome)                                                         | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.                                                                                                                           |
| [`ExternalScopePattern`](#MeshWorkflowControl.ExternalScopePattern)                                                         | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                                                                                                                                                       |
| [`ExtractFeatureEdges`](#MeshWorkflowControl.ExtractFeatureEdges)                                                           | Gets or sets whether to extract automatically the feature edges after the operation.                                                                                                                                                                                                                                                                                |
| [`ExtrusionGridType`](#MeshWorkflowControl.ExtrusionGridType)                                                               | Gets or sets the extrusion grid type.                                                                                                                                                                                                                                                                                                                               |
| [`FaceMergingMergeFaceNormalsAngle`](#MeshWorkflowControl.FaceMergingMergeFaceNormalsAngle)                                 | Gets or sets the maximum angle between face normals for merging. Defaults to 30 degrees.                                                                                                                                                                                                                                                                            |
| [`FaceMergingRetainExistingMesh`](#MeshWorkflowControl.FaceMergingRetainExistingMesh)                                       | Gets or sets whether to retain the existing mesh after merging faces. When false (default), the mesh on the merged faces is discarded.                                                                                                                                                                                                                              |
| [`FaceSplittingEdgeNamePrefix`](#MeshWorkflowControl.FaceSplittingEdgeNamePrefix)                                           | Gets or sets the label prefix for new edges created during face splitting. Defaults to “split_edges”.                                                                                                                                                                                                                                                               |
| [`FaceSplittingFaceNamePrefix`](#MeshWorkflowControl.FaceSplittingFaceNamePrefix)                                           | Gets or sets the label prefix for new faces created during face splitting. Defaults to “split_faces”.                                                                                                                                                                                                                                                               |
| [`FaceSplittingNodeNamePrefix`](#MeshWorkflowControl.FaceSplittingNodeNamePrefix)                                           | Gets or sets the label prefix for new nodes created during face splitting. Defaults to “split_nodes”.                                                                                                                                                                                                                                                               |
| [`FaceSplittingThreeVerticesThirdVertexX`](#MeshWorkflowControl.FaceSplittingThreeVerticesThirdVertexX)                     | Gets or sets the X coordinate of the third vertex for face splitting. Defaults to 0.0.                                                                                                                                                                                                                                                                              |
| [`FaceSplittingThreeVerticesThirdVertexY`](#MeshWorkflowControl.FaceSplittingThreeVerticesThirdVertexY)                     | Gets or sets the Y coordinate of the third vertex for face splitting. Defaults to 0.0.                                                                                                                                                                                                                                                                              |
| [`FaceSplittingThreeVerticesThirdVertexZ`](#MeshWorkflowControl.FaceSplittingThreeVerticesThirdVertexZ)                     | Gets or sets the Z coordinate of the third vertex for face splitting. Defaults to 0.0.                                                                                                                                                                                                                                                                              |
| [`FaceSplittingTwoVerticesFirstVertexX`](#MeshWorkflowControl.FaceSplittingTwoVerticesFirstVertexX)                         | Gets or sets the X coordinate of the first vertex for face splitting. Defaults to 0.0.                                                                                                                                                                                                                                                                              |
| [`FaceSplittingTwoVerticesFirstVertexY`](#MeshWorkflowControl.FaceSplittingTwoVerticesFirstVertexY)                         | Gets or sets the Y coordinate of the first vertex for face splitting. Defaults to 0.0.                                                                                                                                                                                                                                                                              |
| [`FaceSplittingTwoVerticesFirstVertexZ`](#MeshWorkflowControl.FaceSplittingTwoVerticesFirstVertexZ)                         | Gets or sets the Z coordinate of the first vertex for face splitting. Defaults to 0.0.                                                                                                                                                                                                                                                                              |
| [`FaceSplittingTwoVerticesSecondVertexX`](#MeshWorkflowControl.FaceSplittingTwoVerticesSecondVertexX)                       | Gets or sets the X coordinate of the second vertex for face splitting. Defaults to 0.0.                                                                                                                                                                                                                                                                             |
| [`FaceSplittingTwoVerticesSecondVertexY`](#MeshWorkflowControl.FaceSplittingTwoVerticesSecondVertexY)                       | Gets or sets the Y coordinate of the second vertex for face splitting. Defaults to 0.0.                                                                                                                                                                                                                                                                             |
| [`FaceSplittingTwoVerticesSecondVertexZ`](#MeshWorkflowControl.FaceSplittingTwoVerticesSecondVertexZ)                       | Gets or sets the Z coordinate of the second vertex for face splitting. Defaults to 0.0.                                                                                                                                                                                                                                                                             |
| [`FaceZoneByPart`](#MeshWorkflowControl.FaceZoneByPart)                                                                     | Gets or sets whether to define an independent face zone for each input part.                                                                                                                                                                                                                                                                                        |
| [`FaceZoneName`](#MeshWorkflowControl.FaceZoneName)                                                                         | This property is used to define the name of the default face zone name generated during execution of step.                                                                                                                                                                                                                                                          |
| [`FacesWithSkewedElementsLabelName`](#MeshWorkflowControl.FacesWithSkewedElementsLabelName)                                 | Gets or sets the name to use when creating labels based on faces with skewed elements.                                                                                                                                                                                                                                                                              |
| [`FacetQuality`](#MeshWorkflowControl.FacetQuality)                                                                         | Gets or sets faceting quality level for faceting on execution.                                                                                                                                                                                                                                                                                                      |
| [`FeatureSize`](#MeshWorkflowControl.FeatureSize)                                                                           | Gets or sets the FeatureSize.                                                                                                                                                                                                                                                                                                                                       |
| [`FieldName`](#MeshWorkflowControl.FieldName)                                                                               | Gets or sets the label name to be applied.                                                                                                                                                                                                                                                                                                                          |
| [`Figures`](#MeshWorkflowControl.Figures)                                                                                   | Gets the list of associated figures.                                                                                                                                                                                                                                                                                                                                |
| [`FileFilter`](#MeshWorkflowControl.FileFilter)                                                                             | Gets or sets the FileFilter.                                                                                                                                                                                                                                                                                                                                        |
| [`Filename`](#MeshWorkflowControl.Filename)                                                                                 | Assign full path to the filename would like to Import/Export.                                                                                                                                                                                                                                                                                                       |
| [`Filenames`](#MeshWorkflowControl.Filenames)                                                                               | Assign paths with '|' seperator to this property to read multiple files, pass without seperator if single file.                                                                                                                                                                                                                                                     |
| [`FirstLayerAspectRatio`](#MeshWorkflowControl.FirstLayerAspectRatio)                                                       | Gets or sets the FirstLayerAspectRatio.                                                                                                                                                                                                                                                                                                                             |
| [`FirstLayerHeight`](#MeshWorkflowControl.FirstLayerHeight)                                                                 | Gets or sets the FirstLayerHeight.                                                                                                                                                                                                                                                                                                                                  |
| [`FixFolds`](#MeshWorkflowControl.FixFolds)                                                                                 | Gets or sets whether to fix folds in the mesh.                                                                                                                                                                                                                                                                                                                      |
| [`FixSteps`](#MeshWorkflowControl.FixSteps)                                                                                 | Gets or sets whether to fix steps in the mesh.                                                                                                                                                                                                                                                                                                                      |
| [`FixedScopeDefinition`](#MeshWorkflowControl.FixedScopeDefinition)                                                         | Gets or sets the type of scope definition for the fixed scope of the morphing operation. Default: Value                                                                                                                                                                                                                                                             |
| [`FixedScopeMethod`](#MeshWorkflowControl.FixedScopeMethod)                                                                 | Gets or sets the scoping method for the fixed scope of the morphing operation. Default: Label.                                                                                                                                                                                                                                                                      |
| [`FixedScopeOutcome`](#MeshWorkflowControl.FixedScopeOutcome)                                                               | Gets or sets the scope outcome from a previous operation. Applicable only if 'FixedScopeDefinition' is set to Outcome.                                                                                                                                                                                                                                              |
| [`FixedScopePattern`](#MeshWorkflowControl.FixedScopePattern)                                                               | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'FixedScopeDefinition' is set to Value.                                                                                                                                                                                                                                |
| [`ForceDisplacementBasedRecording`](#MeshWorkflowControl.ForceDisplacementBasedRecording)                                   | Gets or sets whether to force displacement-based recording for the morphing operation. The default value is false.                                                                                                                                                                                                                                                  |
| [`ForceSubMapping`](#MeshWorkflowControl.ForceSubMapping)                                                                   | Gets or sets whether to force a sub-mapped mesh by automatically setting mapped mesh vertex types on the scoped faces. Defaults to False.                                                                                                                                                                                                                           |
| [`FreeEdgesLabelName`](#MeshWorkflowControl.FreeEdgesLabelName)                                                             | Gets or sets the label name to be applied to free edges.                                                                                                                                                                                                                                                                                                            |
| [`FreeFaceMeshType`](#MeshWorkflowControl.FreeFaceMeshType)                                                                 | Gets or sets the type of elements for the MultiZone mesher free face mesh. Defaults to “All Quads”.                                                                                                                                                                                                                                                                 |
| [`FreeMeshScopeDefinition`](#MeshWorkflowControl.FreeMeshScopeDefinition)                                                   | Gets or sets the type of scope definition for the Free Mesh scoping. Default: Value.                                                                                                                                                                                                                                                                                |
| [`FreeMeshScopeMethod`](#MeshWorkflowControl.FreeMeshScopeMethod)                                                           | Gets or sets the scoping method for the Free Mesh scoping. Default: Label.                                                                                                                                                                                                                                                                                          |
| [`FreeMeshScopeOutcome`](#MeshWorkflowControl.FreeMeshScopeOutcome)                                                         | Gets or sets the scope outcome for Free Mesh scoping from a previous operation. Applicable only if scope is defined by outcome.                                                                                                                                                                                                                                     |
| [`FreeMeshScopePattern`](#MeshWorkflowControl.FreeMeshScopePattern)                                                         | Gets or sets the zone or label name pattern that defines the Free Mesh scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                                                       |
| [`FreeVolumeMeshType`](#MeshWorkflowControl.FreeVolumeMeshType)                                                             | Gets or sets how free mesh blocks should be treated by the MultiZone meshing algorithm. Defaults to “NotAllowed”.                                                                                                                                                                                                                                                   |
| [`FreezeBoundaryNodes`](#MeshWorkflowControl.FreezeBoundaryNodes)                                                           | Gets or sets whether to freeze the boundary nodes when the improvement of the volume mesh is executed.                                                                                                                                                                                                                                                              |
| [`FuseBaseTolerance`](#MeshWorkflowControl.FuseBaseTolerance)                                                               | Gets or sets the base tolerance for the fuse with multiple tolerances.                                                                                                                                                                                                                                                                                              |
| [`FuseTargetTolerance`](#MeshWorkflowControl.FuseTargetTolerance)                                                           | Gets or sets the target tolerance for the fuse with multiple tolerances.                                                                                                                                                                                                                                                                                            |
| [`GapTolerance`](#MeshWorkflowControl.GapTolerance)                                                                         | Gets or sets the GapTolerance.                                                                                                                                                                                                                                                                                                                                      |
| [`GeometryFidelity`](MeshControls/GeometryFidelity.md#GeometryFidelity)                                                     | Gets or sets the GeometryFidelity.                                                                                                                                                                                                                                                                                                                                  |
| [`GroupVolumes`](#MeshWorkflowControl.GroupVolumes)                                                                         | Gets or sets the GroupVolumes.                                                                                                                                                                                                                                                                                                                                      |
| [`GroupingFolder`](#MeshWorkflowControl.GroupingFolder)                                                                     | GroupingFolder property.                                                                                                                                                                                                                                                                                                                                            |
| [`GrowthRate`](#MeshWorkflowControl.GrowthRate)                                                                             | Gradient of element size as each layer grows.                                                                                                                                                                                                                                                                                                                       |
| [`HardTargetSkewness`](#MeshWorkflowControl.HardTargetSkewness)                                                             | Gets or sets the hard target value for skewness quality metric.                                                                                                                                                                                                                                                                                                     |
| [`HemisphereCenterModality`](#MeshWorkflowControl.HemisphereCenterModality)                                                 | This property is used to define the rule for the computation of the center of the hemispherical enclosure.                                                                                                                                                                                                                                                          |
| [`HemisphereOrientationModality`](#MeshWorkflowControl.HemisphereOrientationModality)                                       | This property is used to define the rule for the computation of the orientation of the hemispherical enclosure.                                                                                                                                                                                                                                                     |
| [`HexcoreTetLayerRelativeWidth`](#MeshWorkflowControl.HexcoreTetLayerRelativeWidth)                                         | Gets or sets the gap ratio, relative to the surface mesh size, between the volume mesh hexahedral core and the geometry surface. Default is 0.25.                                                                                                                                                                                                                   |
| [`HighBoundaryScopeDefinition`](#MeshWorkflowControl.HighBoundaryScopeDefinition)                                           | Gets or sets the scope definition type for the high boundary scope.                                                                                                                                                                                                                                                                                                 |
| [`HighBoundaryScopeMethod`](#MeshWorkflowControl.HighBoundaryScopeMethod)                                                   | Gets or sets the scope method for the high boundary scope.                                                                                                                                                                                                                                                                                                          |
| [`HighBoundaryScopeOutcome`](#MeshWorkflowControl.HighBoundaryScopeOutcome)                                                 | Gets or sets the scope outcome for the high boundary scope.                                                                                                                                                                                                                                                                                                         |
| [`HighBoundaryScopePattern`](#MeshWorkflowControl.HighBoundaryScopePattern)                                                 | Gets or sets the scope pattern for the high boundary scope.                                                                                                                                                                                                                                                                                                         |
| [`HighPeriodicFacesScopeDefinition`](#MeshWorkflowControl.HighPeriodicFacesScopeDefinition)                                 | Gets or sets the type of scope definition for the High Periodic Faces scoping. Defaults to Value.                                                                                                                                                                                                                                                                   |
| [`HighPeriodicFacesScopeMethod`](#MeshWorkflowControl.HighPeriodicFacesScopeMethod)                                         | Gets or sets the scoping method for the High Periodic Faces scoping. Defaults to Label.                                                                                                                                                                                                                                                                             |
| [`HighPeriodicFacesScopeOutcome`](#MeshWorkflowControl.HighPeriodicFacesScopeOutcome)                                       | Gets or sets the scope outcome from a previous operation for the High Periodic Faces scoping. Applicable only if scope is defined by outcome.                                                                                                                                                                                                                       |
| [`HighPeriodicFacesScopePattern`](#MeshWorkflowControl.HighPeriodicFacesScopePattern)                                       | Gets or sets the part, zone or label name pattern for the High Periodic Faces scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                                                |
| [`HorizontalScopeOutcome`](#MeshWorkflowControl.HorizontalScopeOutcome)                                                     | Gets or sets the HorizontalScopeOutcome.                                                                                                                                                                                                                                                                                                                            |
| [`HorizontalScopePattern`](#MeshWorkflowControl.HorizontalScopePattern)                                                     | Gets or sets the HorizontalScopePattern.                                                                                                                                                                                                                                                                                                                            |
| [`IconName`](#MeshWorkflowControl.IconName)                                                                                 | IconName property.                                                                                                                                                                                                                                                                                                                                                  |
| [`IgnoreOrientation`](#MeshWorkflowControl.IgnoreOrientation)                                                               | Gets or sets whether to ignore the face normal orientation while calculating the proximity for the Proximity Sizing control. The default value is False.                                                                                                                                                                                                            |
| [`IgnoreSelfProximity`](#MeshWorkflowControl.IgnoreSelfProximity)                                                           | Gets or sets whether to ignore the proximity between two faces from the same face zone while calculating the proximity for the Proximity Sizing control. The default value is True.                                                                                                                                                                                 |
| [`IgnoreSolidNames`](#MeshWorkflowControl.IgnoreSolidNames)                                                                 | Gets or sets the IgnoreSolidNames.                                                                                                                                                                                                                                                                                                                                  |
| [`ImageDirectory`](#MeshWorkflowControl.ImageDirectory)                                                                     | Gets or sets the directory used for storing the generated image files.                                                                                                                                                                                                                                                                                              |
| [`ImageFilenamePattern`](#MeshWorkflowControl.ImageFilenamePattern)                                                         | Gets or sets the filename pattern used for naming the generated image files. The following placeholders can be used and will be replaced automatically: ${cameraname}, ${partname}, ${partid}.                                                                                                                                                                      |
| [`ImageHeight`](#MeshWorkflowControl.ImageHeight)                                                                           | Gets or sets the height of the generated images.                                                                                                                                                                                                                                                                                                                    |
| [`ImageWidth`](#MeshWorkflowControl.ImageWidth)                                                                             | Gets or sets the width of the generated images.                                                                                                                                                                                                                                                                                                                     |
| [`Images`](#MeshWorkflowControl.Images)                                                                                     | Gets the list of associated images.                                                                                                                                                                                                                                                                                                                                 |
| [`ImportSourceType`](#MeshWorkflowControl.ImportSourceType)                                                                 | Gets or sets the ImportSourceType.                                                                                                                                                                                                                                                                                                                                  |
| [`IncompleteBoundariesLabelName`](#MeshWorkflowControl.IncompleteBoundariesLabelName)                                       | Gets or sets the label name to be applied to faces with incomplete boundaries.                                                                                                                                                                                                                                                                                      |
| [`InflationBoundaryScopeDefinition`](#MeshWorkflowControl.InflationBoundaryScopeDefinition)                                 | Gets or sets the type of scope definition for the Inflation Boundary scoping. Default: Value.                                                                                                                                                                                                                                                                       |
| [`InflationBoundaryScopeMethod`](#MeshWorkflowControl.InflationBoundaryScopeMethod)                                         | Gets or sets the scoping method for the Inflation Boundary scoping. Default: Label.                                                                                                                                                                                                                                                                                 |
| [`InflationBoundaryScopeOutcome`](#MeshWorkflowControl.InflationBoundaryScopeOutcome)                                       | Gets or sets the scope outcome for Inflation Boundary scoping from a previous operation. Applicable only if scope is defined by outcome.                                                                                                                                                                                                                            |
| [`InflationBoundaryScopePattern`](#MeshWorkflowControl.InflationBoundaryScopePattern)                                       | Gets or sets the zone or label name pattern that defines the Inflation Boundary scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                                              |
| [`InflationDomainScopeDefinition`](#MeshWorkflowControl.InflationDomainScopeDefinition)                                     | Gets or sets the type of scope definition for the Inflation Domain scoping. Default: Value.                                                                                                                                                                                                                                                                         |
| [`InflationDomainScopeMethod`](#MeshWorkflowControl.InflationDomainScopeMethod)                                             | Gets or sets the scoping method for the Inflation Domain scoping. Default: Label.                                                                                                                                                                                                                                                                                   |
| [`InflationDomainScopeOutcome`](#MeshWorkflowControl.InflationDomainScopeOutcome)                                           | Gets or sets the scope outcome for Inflation Domain scoping from a previous operation. Applicable only if scope is defined by outcome.                                                                                                                                                                                                                              |
| [`InflationDomainScopePattern`](#MeshWorkflowControl.InflationDomainScopePattern)                                           | Gets or sets the zone or label name pattern that defines the Inflation Domain scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                                                |
| [`InflationFirstLayerHeight`](#MeshWorkflowControl.InflationFirstLayerHeight)                                               | Gets or sets the height of the first inflation layer.                                                                                                                                                                                                                                                                                                               |
| [`InflationGrowthRate`](#MeshWorkflowControl.InflationGrowthRate)                                                           | Gets or sets gradient of layer height.                                                                                                                                                                                                                                                                                                                              |
| [`InflationMaximumLayers`](#MeshWorkflowControl.InflationMaximumLayers)                                                     | Gets or sets the maximum number of inflation layers.                                                                                                                                                                                                                                                                                                                |
| [`InnerScopeDefinition`](#MeshWorkflowControl.InnerScopeDefinition)                                                         | It is defined by value or outcome depending on if the Inner scope is defined manually by the user or defined based on a previous outcome.                                                                                                                                                                                                                           |
| [`InnerScopeMethod`](#MeshWorkflowControl.InnerScopeMethod)                                                                 | The method can be label/zone/part and it is applied to inner region of enclosure.                                                                                                                                                                                                                                                                                   |
| [`InnerScopeOutcome`](#MeshWorkflowControl.InnerScopeOutcome)                                                               | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.                                                                                                                           |
| [`InnerScopePattern`](#MeshWorkflowControl.InnerScopePattern)                                                               | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                                                                                                                                                       |
| [`InputMeshScopeDefinition`](#MeshWorkflowControl.InputMeshScopeDefinition)                                                 | Gets or sets the type of scope definition for the Input Mesh scoping. Default: Value.                                                                                                                                                                                                                                                                               |
| [`InputMeshScopeMethod`](#MeshWorkflowControl.InputMeshScopeMethod)                                                         | Gets or sets the scoping method for the Input Mesh scoping. Default: Label.                                                                                                                                                                                                                                                                                         |
| [`InputMeshScopeOutcome`](#MeshWorkflowControl.InputMeshScopeOutcome)                                                       | Gets or sets the scope outcome for Input Mesh scoping from a previous operation. Applicable only if InputMeshScopeDefinition is set to Outcome.                                                                                                                                                                                                                     |
| [`InputMeshScopePattern`](#MeshWorkflowControl.InputMeshScopePattern)                                                       | Gets or sets the zone or label name pattern that defines the Input Mesh scoping. Applicable only if InputMeshScopeDefinition is set to Value.                                                                                                                                                                                                                       |
| [`InteriorEdgeLoopScopeDefinition`](#MeshWorkflowControl.InteriorEdgeLoopScopeDefinition)                                   | Gets or sets the type of scope definition for the Interior Edge Loop scoping. Defaults to Value.                                                                                                                                                                                                                                                                    |
| [`InteriorEdgeLoopScopeMethod`](#MeshWorkflowControl.InteriorEdgeLoopScopeMethod)                                           | Gets or sets the scoping method for the Interior Edge Loop scoping. Defaults to Label.                                                                                                                                                                                                                                                                              |
| [`InteriorEdgeLoopScopeOutcome`](#MeshWorkflowControl.InteriorEdgeLoopScopeOutcome)                                         | Gets or sets the scope outcome from a previous operation for the Interior Edge Loop scoping. Applicable only if scope is defined by outcome.                                                                                                                                                                                                                        |
| [`InteriorEdgeLoopScopePattern`](#MeshWorkflowControl.InteriorEdgeLoopScopePattern)                                         | Gets or sets the part, zone or label name pattern for the Interior Edge Loop scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                                                 |
| [`InternalLabelName`](#MeshWorkflowControl.InternalLabelName)                                                               | This property is used to rename the default Internal label name generated during execution of step.                                                                                                                                                                                                                                                                 |
| [`InternalObject`](#MeshWorkflowControl.InternalObject)                                                                     | Gets the internal object. For advanced usage only.                                                                                                                                                                                                                                                                                                                  |
| [`IntersectingFaceTolerance`](#MeshWorkflowControl.IntersectingFaceTolerance)                                               | Gets or sets the minimum angle used in finding thin stripes with topology diagnostics. Defaults to 25 degrees.                                                                                                                                                                                                                                                      |
| [`IntersectingPairsLabelName`](#MeshWorkflowControl.IntersectingPairsLabelName)                                             | Gets or sets the label name to be applied to intersecting pairs of faces.                                                                                                                                                                                                                                                                                           |
| [`InvalidBoundariesLabelName`](#MeshWorkflowControl.InvalidBoundariesLabelName)                                             | Gets or sets the label name to be applied to faces with invalid boundary orientation.                                                                                                                                                                                                                                                                               |
| [`JacobianRatioCornerNodesValidationErrorLimit`](#MeshWorkflowControl.JacobianRatioCornerNodesValidationErrorLimit)         | Gets or sets the Jacobian ratio (corner nodes) validation error limit.                                                                                                                                                                                                                                                                                              |
| [`JacobianRatioCornerNodesValidationWarningLimit`](#MeshWorkflowControl.JacobianRatioCornerNodesValidationWarningLimit)     | Gets or sets the Jacobian ratio (corner nodes) validation warning limit.                                                                                                                                                                                                                                                                                            |
| [`JacobianRatioGaussPointsValidationErrorLimit`](#MeshWorkflowControl.JacobianRatioGaussPointsValidationErrorLimit)         | Gets or sets the Jacobian ratio (gauss points) validation error limit.                                                                                                                                                                                                                                                                                              |
| [`JacobianRatioGaussPointsValidationWarningLimit`](#MeshWorkflowControl.JacobianRatioGaussPointsValidationWarningLimit)     | Gets or sets the Jacobian ratio (gauss points) validation warning limit.                                                                                                                                                                                                                                                                                            |
| [`JacobianRatioMAPDLValidationErrorLimit`](#MeshWorkflowControl.JacobianRatioMAPDLValidationErrorLimit)                     | Gets or sets the Jacobian ratio (MAPDL) validation error limit.                                                                                                                                                                                                                                                                                                     |
| [`JacobianRatioMAPDLValidationWarningLimit`](#MeshWorkflowControl.JacobianRatioMAPDLValidationWarningLimit)                 | Gets or sets the Jacobian ratio (MAPDL) validation warning limit.                                                                                                                                                                                                                                                                                                   |
| [`KeepSmallFreeFaces`](#MeshWorkflowControl.KeepSmallFreeFaces)                                                             | Gets or sets whether to keep small free faces during cleanup.                                                                                                                                                                                                                                                                                                       |
| [`LabelAdditionExpression`](#MeshWorkflowControl.LabelAdditionExpression)                                                   | Gets or sets the expression set algebra expression used in a LabelAdditionByExpression control.                                                                                                                                                                                                                                                                     |
| [`LabelAdditionExpressionVariable`](#MeshWorkflowControl.LabelAdditionExpressionVariable)                                   | Gets or sets the expression variable name associated to entities identified by a label addition control. These variables can be referenced in a LabelAdditionByExpression control to create labels based on expressions. Valid variable names do not contain whitespaces or any of the following characters “&, <br/><br/>```<br/>|<br/>```<br/><br/>, ^, !, (, )”. |
| [`LabelName`](#MeshWorkflowControl.LabelName)                                                                               | This property is used to rename the default label name generated during execution of step.                                                                                                                                                                                                                                                                          |
| [`LabelPattern`](#MeshWorkflowControl.LabelPattern)                                                                         | Gets or sets the label pattern applied for label removal. This property expects a regular expression pattern to match labels that should be removed.                                                                                                                                                                                                                |
| [`LastLayerAspectRatio`](#MeshWorkflowControl.LastLayerAspectRatio)                                                         | Gets or sets the LastLayerAspectRatio.                                                                                                                                                                                                                                                                                                                              |
| [`LateralDefeatureSize`](#MeshWorkflowControl.LateralDefeatureSize)                                                         | Gets or sets the defeature size to be used along the lateral direction of stacking.                                                                                                                                                                                                                                                                                 |
| [`LocalRemesh`](#MeshWorkflowControl.LocalRemesh)                                                                           | Gets or sets the LocalRemesh.                                                                                                                                                                                                                                                                                                                                       |
| [`Location`](#MeshWorkflowControl.Location)                                                                                 | Gets or sets the location attribute of the corresponding control.                                                                                                                                                                                                                                                                                                   |
| [`LowBoundaryScopeDefinition`](#MeshWorkflowControl.LowBoundaryScopeDefinition)                                             | Gets or sets the scope definition type for the low boundary scope.                                                                                                                                                                                                                                                                                                  |
| [`LowBoundaryScopeMethod`](#MeshWorkflowControl.LowBoundaryScopeMethod)                                                     | Gets or sets the scope method for the low boundary scope.                                                                                                                                                                                                                                                                                                           |
| [`LowBoundaryScopeOutcome`](#MeshWorkflowControl.LowBoundaryScopeOutcome)                                                   | Gets or sets the scope outcome for the low boundary scope.                                                                                                                                                                                                                                                                                                          |
| [`LowBoundaryScopePattern`](#MeshWorkflowControl.LowBoundaryScopePattern)                                                   | Gets or sets the scope pattern for the low boundary scope.                                                                                                                                                                                                                                                                                                          |
| [`LowPeriodicFacesScopeDefinition`](#MeshWorkflowControl.LowPeriodicFacesScopeDefinition)                                   | Gets or sets the type of scope definition for the Low Periodic Faces scoping. Defaults to Value.                                                                                                                                                                                                                                                                    |
| [`LowPeriodicFacesScopeMethod`](#MeshWorkflowControl.LowPeriodicFacesScopeMethod)                                           | Gets or sets the scoping method for the Low Periodic Faces scoping. Defaults to Label.                                                                                                                                                                                                                                                                              |
| [`LowPeriodicFacesScopeOutcome`](#MeshWorkflowControl.LowPeriodicFacesScopeOutcome)                                         | Gets or sets the scope outcome from a previous operation for the Low Periodic Faces scoping. Applicable only if scope is defined by outcome.                                                                                                                                                                                                                        |
| [`LowPeriodicFacesScopePattern`](#MeshWorkflowControl.LowPeriodicFacesScopePattern)                                         | Gets or sets the part, zone or label name pattern for the Low Periodic Faces scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                                                 |
| [`ManageTangentEdges`](#MeshWorkflowControl.ManageTangentEdges)                                                             | Gets or sets the attribute to manage tangent edges connection for the connection control.                                                                                                                                                                                                                                                                           |
| [`MappedBlocksSplitAngle`](#MeshWorkflowControl.MappedBlocksSplitAngle)                                                     | Gets or sets the split angle to be used for introducing extra splits in the mapped blocks when UseMappedBlocksSplitAngle is True. Defaults to 60 degrees, valid range is [0 degrees, 180 degrees]. ArgumentException is thrown for out-of-range values.                                                                                                             |
| [`MatchBoundaries`](#MeshWorkflowControl.MatchBoundaries)                                                                   | Gets or sets whether to match boundaries on the core side.                                                                                                                                                                                                                                                                                                          |
| [`MatchControlRotationAngle`](#MeshWorkflowControl.MatchControlRotationAngle)                                               | Gets or sets the periodic rotation angle for a Cyclic MatchControlMultiZoneMesher control. Defaults to 90 degrees.                                                                                                                                                                                                                                                  |
| [`MatchControlType`](#MeshWorkflowControl.MatchControlType)                                                                 | Gets or Sets the Match Control type used by the MatchControlMultiZoneMesher control. Defaults to Translation.                                                                                                                                                                                                                                                       |
| [`MatchEdgeSpacing`](#MeshWorkflowControl.MatchEdgeSpacing)                                                                 | Gets or sets whether the mesh spacing on a block edge is adjusted with respect to the spacing on adjacent block edges. Defaults to True.                                                                                                                                                                                                                            |
| [`MatchMorph_NumberOfIterations`](#MeshWorkflowControl.MatchMorph_NumberOfIterations)                                       | Gets or sets the maximal number of iterations for the match morphing.                                                                                                                                                                                                                                                                                               |
| [`Material`](Material.md#Material)                                                                                          | Gets or sets the Material.                                                                                                                                                                                                                                                                                                                                          |
| [`MaterialName`](#MeshWorkflowControl.MaterialName)                                                                         | Gets or sets the Material Name.                                                                                                                                                                                                                                                                                                                                     |
| [`MaterialPointDefinition`](#MeshWorkflowControl.MaterialPointDefinition)                                                   | Gets or sets the material point definition type.                                                                                                                                                                                                                                                                                                                    |
| [`MaterialPointType`](#MeshWorkflowControl.MaterialPointType)                                                               | It defines the type of material point, it can be “Include” or “Exclude”.                                                                                                                                                                                                                                                                                            |
| [`MaxEdgeLength`](#MeshWorkflowControl.MaxEdgeLength)                                                                       | Gets or sets max edge length to be used for faceting on execution.                                                                                                                                                                                                                                                                                                  |
| [`MaxHoleSize`](#MeshWorkflowControl.MaxHoleSize)                                                                           | Gets or sets the maximum size of holes to be considered for Wrapper Leak Prevention and Hole Patching.                                                                                                                                                                                                                                                              |
| [`MaxIterations`](#MeshWorkflowControl.MaxIterations)                                                                       | Gets or sets the MaxIterations .                                                                                                                                                                                                                                                                                                                                    |
| [`MaxSize`](#MeshWorkflowControl.MaxSize)                                                                                   | Gets or sets the maximum size to be used for the volumetric size field sizing computation in the Proximity Sizing and Curvature Sizing controls. This is a length value.                                                                                                                                                                                            |
| [`MaximumFilletRadius`](#MeshWorkflowControl.MaximumFilletRadius)                                                           | Gets or sets the maximum fillet radius to detect fillets.                                                                                                                                                                                                                                                                                                           |
| [`MergeAcrossParts`](#MeshWorkflowControl.MergeAcrossParts)                                                                 | Gets or sets whether to merge across parts during the resolution of the surface overlaps.                                                                                                                                                                                                                                                                           |
| [`MergeNodesTolerance`](#MeshWorkflowControl.MergeNodesTolerance)                                                           | Gets or sets the tolerance within which nodes are to be merged.                                                                                                                                                                                                                                                                                                     |
| [`MergeNodesToleranceType`](#MeshWorkflowControl.MergeNodesToleranceType)                                                   | Gets or sets the merge nodes tolerance type to be used when executing Merge Nodes operation. The default value is Absolute.                                                                                                                                                                                                                                         |
| [`MergeOverlappingFaces`](#MeshWorkflowControl.MergeOverlappingFaces)                                                       | Gets or sets whether to merge overlapping faces after connect. The default value is false.                                                                                                                                                                                                                                                                          |
| [`MergeReplicatedBodies`](#MeshWorkflowControl.MergeReplicatedBodies)                                                       | Gets or sets whether to merge the replicated bodies with their corresponding original bodies. Defaults to False.                                                                                                                                                                                                                                                    |
| [`MergeSideFaces`](#MeshWorkflowControl.MergeSideFaces)                                                                     | Gets or sets whether to merge the side faces after the extrusion.                                                                                                                                                                                                                                                                                                   |
| [`MeshCheckValidationCheckFaceAreas`](#MeshWorkflowControl.MeshCheckValidationCheckFaceAreas)                               | Gets or sets whether to check face areas while validating the mesh.                                                                                                                                                                                                                                                                                                 |
| [`MeshCheckValidationCheckFaceHandedness`](#MeshWorkflowControl.MeshCheckValidationCheckFaceHandedness)                     | Gets or sets whether to check face handedness while validating the mesh.                                                                                                                                                                                                                                                                                            |
| [`MeshCheckValidationCheckShape`](#MeshWorkflowControl.MeshCheckValidationCheckShape)                                       | Gets or sets whether to check shape while validating the mesh.                                                                                                                                                                                                                                                                                                      |
| [`MeshCheckValidationCheckVolumes`](#MeshWorkflowControl.MeshCheckValidationCheckVolumes)                                   | Gets or sets whether to check volumes while validating the mesh.                                                                                                                                                                                                                                                                                                    |
| [`MeshEntityType`](#MeshWorkflowControl.MeshEntityType)                                                                     | Gets or sets the target mesh entity type. The default value is Face.                                                                                                                                                                                                                                                                                                |
| [`MeshFlowControl`](#MeshWorkflowControl.MeshFlowControl)                                                                   | This property gives control over the flow of mesh during surface mesh generation. The supported modes are None, and Global Cartesian.                                                                                                                                                                                                                               |
| [`MeshGenerationType`](#MeshWorkflowControl.MeshGenerationType)                                                             | Gets or sets the mesh generation type. The default value is Full.                                                                                                                                                                                                                                                                                                   |
| [`MeshedSurfaceLabelSuffix`](#MeshWorkflowControl.MeshedSurfaceLabelSuffix)                                                 | Gets or sets the suffix to be used when defining labels scoped to faces meshed by the MultiZone mesher.                                                                                                                                                                                                                                                             |
| [`MeshedVolumeLabelSuffix`](#MeshWorkflowControl.MeshedVolumeLabelSuffix)                                                   | Gets or sets the suffix to be used when defining labels scoped to volumes meshed by the MultiZone mesher. Defaults to “MultiZoneMesh”.                                                                                                                                                                                                                              |
| [`MinSize`](#MeshWorkflowControl.MinSize)                                                                                   | Gets or sets the minimum size to be used for the volumetric size field sizing computation in the Proximity Sizing and Curvature Sizing controls. This is a length value.                                                                                                                                                                                            |
| [`MinimalAbsoluteDistance`](#MeshWorkflowControl.MinimalAbsoluteDistance)                                                   | Gets or sets the minimal distance of the enclosure from the input faces as absolute distance. The physically larger resulting distance between 'MinimalNumberOfVolumetricLayers' and 'MinimalAbsoluteDistance' will be used as the effective gap distance. Default is 0.0.                                                                                          |
| [`MinimalNumberOfVolumetricLayers`](#MeshWorkflowControl.MinimalNumberOfVolumetricLayers)                                   | Gets or sets the minimal distance of the enclosure from the input faces as a multiple of the size of the volumetric elements. The physically larger resulting distance between 'MinimalNumberOfVolumetricLayers' and 'MinimalAbsoluteDistance' or 'MinimalRadius' will be used as the effective gap distance. Default is 2.                                         |
| [`MinimalRadius`](#MeshWorkflowControl.MinimalRadius)                                                                       | It defines the desired minimal radius of the spherical enclosure.                                                                                                                                                                                                                                                                                                   |
| [`MinimumBodiesPerCluster`](#MeshWorkflowControl.MinimumBodiesPerCluster)                                                   | Gets or sets the minimum number of bodies required per cluster for the Detect Clusters control.                                                                                                                                                                                                                                                                     |
| [`MinimumFilletRadius`](#MeshWorkflowControl.MinimumFilletRadius)                                                           | Gets or sets the minimum fillet radius to detect fillets.                                                                                                                                                                                                                                                                                                           |
| [`MissingBoundariesLabelName`](#MeshWorkflowControl.MissingBoundariesLabelName)                                             | Gets or sets the label name to be applied to faces with missing boundaries.                                                                                                                                                                                                                                                                                         |
| [`MorphFieldDefinition`](#MeshWorkflowControl.MorphFieldDefinition)                                                         |                                                                                                                                                                                                                                                                                                                                                                     |
| [`MorphFieldOutcome`](#MeshWorkflowControl.MorphFieldOutcome)                                                               | Gets the MorphFieldOutcome.                                                                                                                                                                                                                                                                                                                                         |
| [`MorphMidSideNodes`](#MeshWorkflowControl.MorphMidSideNodes)                                                               | Gets or sets whether to apply morphing on the model based on the mid nodes displacements after the projection on the underlying geometry.                                                                                                                                                                                                                           |
| [`MorphRecordingName`](#MeshWorkflowControl.MorphRecordingName)                                                             | This property is used to define the name for matching the morphing recording to apply to the meshing operation.                                                                                                                                                                                                                                                     |
| [`MorphSolverModality`](#MeshWorkflowControl.MorphSolverModality)                                                           | Gets or sets the solver type for the morphing operation. Default: Fast.                                                                                                                                                                                                                                                                                             |
| [`MorphableScopeDefinition`](#MeshWorkflowControl.MorphableScopeDefinition)                                                 | Gets or sets the type of scope definition for the morphable scope of the morphing operation. Default: Value                                                                                                                                                                                                                                                         |
| [`MorphableScopeMethod`](#MeshWorkflowControl.MorphableScopeMethod)                                                         | Gets or sets the scoping method for the morphable scope of the morphing operation. Default: Label.                                                                                                                                                                                                                                                                  |
| [`MorphableScopeOutcome`](#MeshWorkflowControl.MorphableScopeOutcome)                                                       | Gets or sets the scope outcome from a previous operation. Applicable only if 'MorphableScopeDefinition' is set to Outcome.                                                                                                                                                                                                                                          |
| [`MorphableScopePattern`](#MeshWorkflowControl.MorphableScopePattern)                                                       | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'MorphableScopeDefinition' is set to Value.                                                                                                                                                                                                                            |
| [`MultiEdgesLabelName`](#MeshWorkflowControl.MultiEdgesLabelName)                                                           | Gets or sets the label name to be applied to multi edges.                                                                                                                                                                                                                                                                                                           |
| [`Name`](#MeshWorkflowControl.Name)                                                                                         | Name property.                                                                                                                                                                                                                                                                                                                                                      |
| [`Names`](#MeshWorkflowControl.Names)                                                                                       | Gets or sets the Names.                                                                                                                                                                                                                                                                                                                                             |
| [`NewSplittingInterfaceLabelPrefix`](#MeshWorkflowControl.NewSplittingInterfaceLabelPrefix)                                 | This property is used to rename the default label generated for the added topological entities.                                                                                                                                                                                                                                                                     |
| [`NewVolumeLabelPrefix`](#MeshWorkflowControl.NewVolumeLabelPrefix)                                                         | This property is used to rename the default label generated for the new volume.                                                                                                                                                                                                                                                                                     |
| [`NormalAngle`](#MeshWorkflowControl.NormalAngle)                                                                           | Gets or sets the maximum allowed normal angle between neighboring elements when computing curvature for the Curvature Sizing control. This value must be between 0 and 180 degrees (0 to π) and defaults to 18 degrees.                                                                                                                                             |
| [`NormalAngleTolerance`](#MeshWorkflowControl.NormalAngleTolerance)                                                         | Gets or sets normal tolerance to be used for faceting on execution.                                                                                                                                                                                                                                                                                                 |
| [`NumberOfAttempts`](#MeshWorkflowControl.NumberOfAttempts)                                                                 | Number of attempts for mesh convergence.                                                                                                                                                                                                                                                                                                                            |
| [`NumberOfDivisions`](#MeshWorkflowControl.NumberOfDivisions)                                                               | Gets or sets the number of divisions for the scoped edges.                                                                                                                                                                                                                                                                                                          |
| [`NumberOfLayers`](#MeshWorkflowControl.NumberOfLayers)                                                                     | Number of layers of mesh elements.                                                                                                                                                                                                                                                                                                                                  |
| [`NumberOfPlanarCuts`](#MeshWorkflowControl.NumberOfPlanarCuts)                                                             | This property is used to define the number of planar cuts for the automatic planar cut control.                                                                                                                                                                                                                                                                     |
| [`NumberOfRadialDivisions`](#MeshWorkflowControl.NumberOfRadialDivisions)                                                   | Gets or sets the number of radial divisions to apply to scoped faces having two concentric boundary loops. Defaults to 0. ArgumentException is thrown for negative values.                                                                                                                                                                                          |
| [`NumberOfRings`](#MeshWorkflowControl.NumberOfRings)                                                                       | Gets or sets the number of neighbor rings to consider as morphable for the morphing operation. Applicable only if SurfaceScopeModality is 'Rings'.                                                                                                                                                                                                                  |
| [`NumberOfSolverIterations`](#MeshWorkflowControl.NumberOfSolverIterations)                                                 | Gets or sets the number of iterations for the solver of the morphing operation.                                                                                                                                                                                                                                                                                     |
| [`NumberOfThreads`](#MeshWorkflowControl.NumberOfThreads)                                                                   | Gets or sets the NumberOfThreads.                                                                                                                                                                                                                                                                                                                                   |
| [`NumenAlignTriEdgeMesh`](#MeshWorkflowControl.NumenAlignTriEdgeMesh)                                                       | Gets or sets whether triangular mesh edges are aligned with geometric features. The default value is false.                                                                                                                                                                                                                                                         |
| [`NumenEnforceEdgeLoopMinElementCount`](#MeshWorkflowControl.NumenEnforceEdgeLoopMinElementCount)                           | Gets or sets whether edge remeshing is enforced to satisfy the minimum element count for bounding loops. The default value is false.                                                                                                                                                                                                                                |
| [`NumenRBFInterpolation`](#MeshWorkflowControl.NumenRBFInterpolation)                                                       | Gets or sets whether RBF interpolation retry is used in robust mode for failed patches. The default value is false.                                                                                                                                                                                                                                                 |
| [`NumenRobustMode`](#MeshWorkflowControl.NumenRobustMode)                                                                   | Gets or sets whether to use additional recovery strategies to handle difficult geometries. The default value is false.                                                                                                                                                                                                                                              |
| [`NumenStitchFailedSliverTopofaces`](#MeshWorkflowControl.NumenStitchFailedSliverTopofaces)                                 | Gets or sets whether failed sliver topofaces are stitched in robust mode. The default value is false.                                                                                                                                                                                                                                                               |
| [`NumenStitchMeshedFacetsOfFailedTopofaces`](#MeshWorkflowControl.NumenStitchMeshedFacetsOfFailedTopofaces)                 | Gets or sets whether meshed facets of failed topofaces are stitched in robust mode. The default value is false.                                                                                                                                                                                                                                                     |
| [`NumenStopOnFailure`](#MeshWorkflowControl.NumenStopOnFailure)                                                             | Gets or sets whether meshing stops immediately when any part fails to mesh. The default value is false.                                                                                                                                                                                                                                                             |
| [`ObjectId`](#MeshWorkflowControl.ObjectId)                                                                                 | ObjectId property.                                                                                                                                                                                                                                                                                                                                                  |
| [`ObjectState`](#MeshWorkflowControl.ObjectState)                                                                           | ObjectState property.                                                                                                                                                                                                                                                                                                                                               |
| [`ObjectTags`](#MeshWorkflowControl.ObjectTags)                                                                             | ObjectTags property.                                                                                                                                                                                                                                                                                                                                                |
| [`OffsetDistance`](#MeshWorkflowControl.OffsetDistance)                                                                     | Gets or sets the offset distance attribute of the corresponding direct morphing control.                                                                                                                                                                                                                                                                            |
| [`OffsetFileName`](#MeshWorkflowControl.OffsetFileName)                                                                     | Gets or sets the full file path to the .csv file containing the offset coordinates for replication.                                                                                                                                                                                                                                                                 |
| [`OffsetType`](#MeshWorkflowControl.OffsetType)                                                                             | Gets or sets the OffsetType.                                                                                                                                                                                                                                                                                                                                        |
| [`OpenEnclosure`](#MeshWorkflowControl.OpenEnclosure)                                                                       | Gets or sets whether an open enclosure is required. Default is False.                                                                                                                                                                                                                                                                                               |
| [`OrbitCameraDivisions`](#MeshWorkflowControl.OrbitCameraDivisions)                                                         | Gets or sets the number of shots the orbit camera takes around the up axis. Defaults to 4.                                                                                                                                                                                                                                                                          |
| [`Origin`](#MeshWorkflowControl.Origin)                                                                                     | Gets or sets the origin coordinates.                                                                                                                                                                                                                                                                                                                                |
| [`OriginX`](#MeshWorkflowControl.OriginX)                                                                                   | Gets or sets the X coordinate of origin (location of base face) in the volume flattening step.                                                                                                                                                                                                                                                                      |
| [`OriginY`](#MeshWorkflowControl.OriginY)                                                                                   | Gets or sets the Y coordinate of origin (location of base face) in the volume flattening step.                                                                                                                                                                                                                                                                      |
| [`OriginZ`](#MeshWorkflowControl.OriginZ)                                                                                   | Gets or sets the Z coordinate of origin (location of base face) in the volume flattening step.                                                                                                                                                                                                                                                                      |
| [`OverlapTolerance`](#MeshWorkflowControl.OverlapTolerance)                                                                 | Gets or sets the OverlapTolerance.                                                                                                                                                                                                                                                                                                                                  |
| [`OverlappingFaceTolerance`](#MeshWorkflowControl.OverlappingFaceTolerance)                                                 | Gets or sets the tolerance for the minimum overlap distance used in finding overlapping faces with topology diagnostics.                                                                                                                                                                                                                                            |
| [`OverlappingFacesLabelName`](#MeshWorkflowControl.OverlappingFacesLabelName)                                               | Gets or sets the label name to be applied to overlapping faces.                                                                                                                                                                                                                                                                                                     |
| [`OverlapsBaseTolerance`](#MeshWorkflowControl.OverlapsBaseTolerance)                                                       | Gets or sets the base tolerance value to be used to detect the overlaps to resolve.                                                                                                                                                                                                                                                                                 |
| [`OverlapsTargetTolerance`](#MeshWorkflowControl.OverlapsTargetTolerance)                                                   | Gets or sets the target tolerance value to be used to detect the overlaps to resolve.                                                                                                                                                                                                                                                                               |
| [`Parent`](#MeshWorkflowControl.Parent)                                                                                     | Parent property.                                                                                                                                                                                                                                                                                                                                                    |
| [`PartName`](#MeshWorkflowControl.PartName)                                                                                 | Gets or sets the part name to be used when generating.                                                                                                                                                                                                                                                                                                              |
| [`PercentageIncrement`](#MeshWorkflowControl.PercentageIncrement)                                                           | The number of volumetric Layers determines the number of layers. This property decides whether all the layers are an equal size (default 0.0) or they should gradually increase the size of volume element than previous element.                                                                                                                                   |
| [`PercentageSmoothing`](#MeshWorkflowControl.PercentageSmoothing)                                                           | Gets or sets the PercentageSmoothing.                                                                                                                                                                                                                                                                                                                               |
| [`PinchCornerAngleTolerance`](#MeshWorkflowControl.PinchCornerAngleTolerance)                                               | Gets or sets the corner angle tolerance value to use when pinching faces.                                                                                                                                                                                                                                                                                           |
| [`PlaneDefineByType`](#MeshWorkflowControl.PlaneDefineByType)                                                               | Gets or sets how the splitting plane is defined: by a point and normal axis, or by three points. Defaults to PointAndNormal.                                                                                                                                                                                                                                        |
| [`PrescribeInternalFaceHintsNodes`](#MeshWorkflowControl.PrescribeInternalFaceHintsNodes)                                   | Gets or sets whether to prescribe internal face hints nodes during match morphing.                                                                                                                                                                                                                                                                                  |
| [`PrescribedPointsFileName`](#MeshWorkflowControl.PrescribedPointsFileName)                                                 | Gets or sets the path to the file containing the prescribed points locations. The data must be in csv format.                                                                                                                                                                                                                                                       |
| [`PreserveBoundary`](#MeshWorkflowControl.PreserveBoundary)                                                                 | Gets or sets whether to preserve the boundary or not. If true, adding a prescribed point which causes a deformation of the volume boundary will result in a failure.                                                                                                                                                                                                |
| [`PreserveBoundaryLayers`](#MeshWorkflowControl.PreserveBoundaryLayers)                                                     | Gets or sets the PreserveBoundaryLayers.                                                                                                                                                                                                                                                                                                                            |
| [`PreserveCornerVertices`](#MeshWorkflowControl.PreserveCornerVertices)                                                     | Gets or sets whether to preserve corner vertices when pinching faces.                                                                                                                                                                                                                                                                                               |
| [`PreserveFeatures`](#MeshWorkflowControl.PreserveFeatures)                                                                 | Gets or sets whether to preserve the feature edges or not. If true, adding a prescribed point which causes a deformation of the feature edges will result in a failure.                                                                                                                                                                                             |
| [`ProjectOnGeometry`](#MeshWorkflowControl.ProjectOnGeometry)                                                               | Gets or sets whether to project the mesh on the underlying geometry.                                                                                                                                                                                                                                                                                                |
| [`ProjectSideFaces`](#MeshWorkflowControl.ProjectSideFaces)                                                                 | Gets or sets whether to project the side faces after the extrusion.                                                                                                                                                                                                                                                                                                 |
| [`Properties`](#MeshWorkflowControl.Properties)                                                                             | Gets the list of properties for this object.                                                                                                                                                                                                                                                                                                                        |
| [`PropertyName`](#MeshWorkflowControl.PropertyName)                                                                         | Gets or sets the PropertyName.                                                                                                                                                                                                                                                                                                                                      |
| [`PropertyValue`](#MeshWorkflowControl.PropertyValue)                                                                       | Gets or sets the PropertyValue.                                                                                                                                                                                                                                                                                                                                     |
| [`ProtectOnlyBoundaries`](#MeshWorkflowControl.ProtectOnlyBoundaries)                                                       | Gets or sets whether the topology protection flag is applied only to the exterior boundary of the scoped boundaries or not. Defaults to False.                                                                                                                                                                                                                      |
| [`ProtectedEdgesScopeDefinition`](#MeshWorkflowControl.ProtectedEdgesScopeDefinition)                                       | Gets or sets the scope definition type for the protected edges scope.                                                                                                                                                                                                                                                                                               |
| [`ProtectedEdgesScopeMethod`](#MeshWorkflowControl.ProtectedEdgesScopeMethod)                                               | Gets or sets the scope method for the protected edges scope.                                                                                                                                                                                                                                                                                                        |
| [`ProtectedEdgesScopeOutcome`](#MeshWorkflowControl.ProtectedEdgesScopeOutcome)                                             | Gets or sets the scope outcome for the protected edges scope.                                                                                                                                                                                                                                                                                                       |
| [`ProtectedEdgesScopePattern`](#MeshWorkflowControl.ProtectedEdgesScopePattern)                                             | Gets or sets the scope pattern for the protected edges scope.                                                                                                                                                                                                                                                                                                       |
| [`ProximityRadius`](#MeshWorkflowControl.ProximityRadius)                                                                   | Gets or sets the radius for the proximity based search.                                                                                                                                                                                                                                                                                                             |
| [`ProximityType`](#MeshWorkflowControl.ProximityType)                                                                       | Gets or sets the Proximity Type to apply for the entity search. The default value is Radius.                                                                                                                                                                                                                                                                        |
| [`QuadBoundaryLayerFaceScopeDefinition`](#MeshWorkflowControl.QuadBoundaryLayerFaceScopeDefinition)                         | Gets or sets the type of scope definition for the quad boundary layer face scoping. Default: Value                                                                                                                                                                                                                                                                  |
| [`QuadBoundaryLayerFaceScopeMethod`](#MeshWorkflowControl.QuadBoundaryLayerFaceScopeMethod)                                 | Gets or sets the scoping method for the quad boundary layer face scoping. Default: Label.                                                                                                                                                                                                                                                                           |
| [`QuadBoundaryLayerFaceScopeOutcome`](#MeshWorkflowControl.QuadBoundaryLayerFaceScopeOutcome)                               | Gets or sets the scope outcome from a previous operation. Applicable only if 'QuadBoundaryLayerFaceScopeDefinition' is set to Outcome.                                                                                                                                                                                                                              |
| [`QuadBoundaryLayerFaceScopePattern`](#MeshWorkflowControl.QuadBoundaryLayerFaceScopePattern)                               | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'QuadBoundaryLayerFaceScopeDefinition' is set to Value.                                                                                                                                                                                                                |
| [`QuadBoundaryLayerFirstLayerHeight`](#MeshWorkflowControl.QuadBoundaryLayerFirstLayerHeight)                               | Gets or sets the height of the first quad layer.                                                                                                                                                                                                                                                                                                                    |
| [`QuadBoundaryLayerGrowthRate`](#MeshWorkflowControl.QuadBoundaryLayerGrowthRate)                                           | Gets or sets the ratio of heights between subsequent quad layers.                                                                                                                                                                                                                                                                                                   |
| [`QuadBoundaryLayerNumberOfDivisions`](#MeshWorkflowControl.QuadBoundaryLayerNumberOfDivisions)                             | Gets or sets the number of annular divisions on the washer boundary from where the quad layers are grown.                                                                                                                                                                                                                                                           |
| [`QuadBoundaryLayerNumberOfLayers`](#MeshWorkflowControl.QuadBoundaryLayerNumberOfLayers)                                   | Gets or sets the number of quad layers on the washer boundary.                                                                                                                                                                                                                                                                                                      |
| [`Radius`](#MeshWorkflowControl.Radius)                                                                                     | Gets or sets the radius attribute of the corresponding control. Default is Quantity(0.1, 'm')                                                                                                                                                                                                                                                                       |
| [`Ratio`](#MeshWorkflowControl.Ratio)                                                                                       | Gets or sets the ratio attribute of the corresponding control. Default is 0.5.                                                                                                                                                                                                                                                                                      |
| [`RecomputeClosedVolumes`](#MeshWorkflowControl.RecomputeClosedVolumes)                                                     | Gets or sets whether to recompute closed volumes after the operation.                                                                                                                                                                                                                                                                                               |
| [`ReferenceFaceScopeDefinition`](#MeshWorkflowControl.ReferenceFaceScopeDefinition)                                         | Gets or sets the type of scope definition for the ReferenceFace scoping in MultiZone Edge Biasing. Default: Value.                                                                                                                                                                                                                                                  |
| [`ReferenceFaceScopeScopeMethod`](#MeshWorkflowControl.ReferenceFaceScopeScopeMethod)                                       | Gets or sets the scoping method for the ReferenceFace scoping in MultiZone Edge Biasing. Default: Label.                                                                                                                                                                                                                                                            |
| [`ReferenceFaceScopeScopeOutcome`](#MeshWorkflowControl.ReferenceFaceScopeScopeOutcome)                                     | Gets or sets the scope outcome for the ReferenceFace scoping in MultiZone Edge Biasing from a previous operation. Applicable only if scope is defined by outcome.                                                                                                                                                                                                   |
| [`ReferenceFaceScopeScopePattern`](#MeshWorkflowControl.ReferenceFaceScopeScopePattern)                                     | Gets or sets the zone or label name pattern that defines the ReferenceFace scoping in MultiZone Edge Biasing. Applicable only if scope is defined by value.                                                                                                                                                                                                         |
| [`RegionType`](#MeshWorkflowControl.RegionType)                                                                             | It is defined by Material Point or External.                                                                                                                                                                                                                                                                                                                        |
| [`RelativeMergeTolerancePercentage`](#MeshWorkflowControl.RelativeMergeTolerancePercentage)                                 | Gets or sets the percentage of the connected edge lengths to be used as tolerance for merging nodes.                                                                                                                                                                                                                                                                |
| [`RelativePairingTolerance`](#MeshWorkflowControl.RelativePairingTolerance)                                                 | Gets or sets the relative pairing tolerance for nodes pairing check.                                                                                                                                                                                                                                                                                                |
| [`RelativePlanarityTolerance`](#MeshWorkflowControl.RelativePlanarityTolerance)                                             | Gets or sets the relative planarity tolerance for planarity check.                                                                                                                                                                                                                                                                                                  |
| [`RelativeTolerance`](#MeshWorkflowControl.RelativeTolerance)                                                               | Gets or sets the relative tolerance for the sliding constraint plane condition.                                                                                                                                                                                                                                                                                     |
| [`ReleaseStatusString`](#MeshWorkflowControl.ReleaseStatusString)                                                           | ReleaseStatusString property.                                                                                                                                                                                                                                                                                                                                       |
| [`Remesh`](#MeshWorkflowControl.Remesh)                                                                                     | Gets or sets whether to allow the remesh of already meshed volumes. The default value is false.                                                                                                                                                                                                                                                                     |
| [`RemoveCusps`](#MeshWorkflowControl.RemoveCusps)                                                                           | Gets or sets whether to remove cusps from the mesh.                                                                                                                                                                                                                                                                                                                 |
| [`RemoveUnwettedSurfaces`](#MeshWorkflowControl.RemoveUnwettedSurfaces)                                                     | Gets or sets whether to remove unwetted surfaces for wrapper specific surface mesher.                                                                                                                                                                                                                                                                               |
| [`RepairModel`](#MeshWorkflowControl.RepairModel)                                                                           | Gets or sets whether to repair the PrimeMesh model after the reading operation is executed. The default value is false.                                                                                                                                                                                                                                             |
| [`RepairTopologyEdgeAngle`](#MeshWorkflowControl.RepairTopologyEdgeAngle)                                                   | Gets or sets the angle not to be exceeded when deleting interior vertices. Must be greater than 0 and less than or equal to 180 degrees. Defaults to 70 degrees.                                                                                                                                                                                                    |
| [`RepairTopologyFeatureAngle`](#MeshWorkflowControl.RepairTopologyFeatureAngle)                                             | Gets or sets the angle not to be exceeded when performing repairs. Must be greater than 0 and less than or equal to 180 degrees. Defaults to 30 degrees.                                                                                                                                                                                                            |
| [`RepairTopologyOverlapsTolerance`](#MeshWorkflowControl.RepairTopologyOverlapsTolerance)                                   | Gets or sets the tolerance value to be used to detect the overlaps to resolve.                                                                                                                                                                                                                                                                                      |
| [`RepairTopologyPinchTolerance`](#MeshWorkflowControl.RepairTopologyPinchTolerance)                                         | Gets or sets the largest tolerance to be used when removing small features.                                                                                                                                                                                                                                                                                         |
| [`RepairTopologyPreventFragmentedEdges`](#MeshWorkflowControl.RepairTopologyPreventFragmentedEdges)                         | Gets or sets whether to prevent fragmented edges when deleting interior vertices.                                                                                                                                                                                                                                                                                   |
| [`RepairTopologySharpAngle`](#MeshWorkflowControl.RepairTopologySharpAngle)                                                 | Gets or sets the maximum angle between faces to be merged. Must be greater than 0 and less than or equal to 30 degrees. Defaults to 10 degrees.                                                                                                                                                                                                                     |
| [`RepairTopologyShortEdgeLength`](#MeshWorkflowControl.RepairTopologyShortEdgeLength)                                       | Gets or sets the maximum edge length to be collapsed.                                                                                                                                                                                                                                                                                                               |
| [`RepairTopologySplitEdgesAtApexPoint`](#MeshWorkflowControl.RepairTopologySplitEdgesAtApexPoint)                           | Gets or sets whether to split edges at their apex point when repairing topology.                                                                                                                                                                                                                                                                                    |
| [`RepairTopologyThinFaceWidth`](#MeshWorkflowControl.RepairTopologyThinFaceWidth)                                           | Gets or sets the maximum thin face width to be merged.                                                                                                                                                                                                                                                                                                              |
| [`RepairTopologyTolerance`](#MeshWorkflowControl.RepairTopologyTolerance)                                                   | Gets or sets the tolerance value to be used to reduce variability of output topology, prevent the collapse and defeature of thin or short topologies, and allow the creation of a coarse mesh while keeping topology as-is.                                                                                                                                         |
| [`RestrictBoundaryNodes`](#MeshWorkflowControl.RestrictBoundaryNodes)                                                       | Gets or sets whether to restrict the boundary nodes displacement. The default value is true.                                                                                                                                                                                                                                                                        |
| [`RetainFailedMesh`](#MeshWorkflowControl.RetainFailedMesh)                                                                 | Gets or sets whether to keep the partially meshed results in case of failure. Defaults to False.                                                                                                                                                                                                                                                                    |
| [`RetainMeshedEdges`](#MeshWorkflowControl.RetainMeshedEdges)                                                               | Gets or sets whether to retain the existing mesh on the input edges.                                                                                                                                                                                                                                                                                                |
| [`RetainMeshedTopoFaces`](#MeshWorkflowControl.RetainMeshedTopoFaces)                                                       | Gets or sets whether existing mesh on the scoped faces is to be retained or remeshed.                                                                                                                                                                                                                                                                               |
| [`RetainMeshedVolumes`](#MeshWorkflowControl.RetainMeshedVolumes)                                                           | Gets or sets whether existing mesh on the scoped volumes is to be retained or remeshed.                                                                                                                                                                                                                                                                             |
| [`RetryWithGeometry`](#MeshWorkflowControl.RetryWithGeometry)                                                               | Gets or sets the RetryWithGeometry.                                                                                                                                                                                                                                                                                                                                 |
| [`ReverseDeformationFieldName`](#MeshWorkflowControl.ReverseDeformationFieldName)                                           | Gets or sets the ReverseDeformationFieldName.                                                                                                                                                                                                                                                                                                                       |
| [`ReverseDirection`](#MeshWorkflowControl.ReverseDirection)                                                                 | Gets or sets whether to reverse the extruding direction.                                                                                                                                                                                                                                                                                                            |
| [`ReverseEdgeBiasingDirection`](#MeshWorkflowControl.ReverseEdgeBiasingDirection)                                           | Gets or sets whether the Multizone Mesher edge biasing direction should be reversed.                                                                                                                                                                                                                                                                                |
| [`ReverseSurfaceOrientation`](#MeshWorkflowControl.ReverseSurfaceOrientation)                                               | Reverse Surface Orientation. The default value is false.                                                                                                                                                                                                                                                                                                            |
| [`RigidScopeDefinition`](#MeshWorkflowControl.RigidScopeDefinition)                                                         | Gets or sets the type of scope definition for the rigid scope of the morphing operation. Default: Value                                                                                                                                                                                                                                                             |
| [`RigidScopeMethod`](#MeshWorkflowControl.RigidScopeMethod)                                                                 | Gets or sets the scoping method for the rigid scope of the morphing operation. Default: Label.                                                                                                                                                                                                                                                                      |
| [`RigidScopeOutcome`](#MeshWorkflowControl.RigidScopeOutcome)                                                               | Gets or sets the scope outcome from a previous operation. Applicable only if 'RigidScopeDefinition' is set to Outcome.                                                                                                                                                                                                                                              |
| [`RigidScopePattern`](#MeshWorkflowControl.RigidScopePattern)                                                               | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'RigidScopeDefinition' is set to Value.                                                                                                                                                                                                                                |
| [`RotationAngle`](#MeshWorkflowControl.RotationAngle)                                                                       | Gets or sets the rotation angle attribute of the corresponding direct morphing control.                                                                                                                                                                                                                                                                             |
| [`ScaleElementSize`](#MeshWorkflowControl.ScaleElementSize)                                                                 | Gets or sets whether to apply a scale factor to element size defined by settings.                                                                                                                                                                                                                                                                                   |
| [`ScaleFactor`](#MeshWorkflowControl.ScaleFactor)                                                                           | Scale Factor is used to scale shapes in different dimensions.                                                                                                                                                                                                                                                                                                       |
| [`ScopeDefinition`](#MeshWorkflowControl.ScopeDefinition)                                                                   | It is defined by value or outcome.                                                                                                                                                                                                                                                                                                                                  |
| [`ScopeMethod`](#MeshWorkflowControl.ScopeMethod)                                                                           | The method can be label/zone/part.                                                                                                                                                                                                                                                                                                                                  |
| [`ScopeOutcome`](#MeshWorkflowControl.ScopeOutcome)                                                                         | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.                                                                                                                           |
| [`ScopePattern`](#MeshWorkflowControl.ScopePattern)                                                                         | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                                                                                                                                                       |
| [`ScriptFilename`](#MeshWorkflowControl.ScriptFilename)                                                                     |                                                                                                                                                                                                                                                                                                                                                                     |
| [`SeedFaceScopeDefinition`](#MeshWorkflowControl.SeedFaceScopeDefinition)                                                   | Gets or sets the type of scope definition for the seed face scoping. Default: Value                                                                                                                                                                                                                                                                                 |
| [`SeedFaceScopeMethod`](#MeshWorkflowControl.SeedFaceScopeMethod)                                                           | Gets or sets the scoping method for the seed face scoping. Default: Label.                                                                                                                                                                                                                                                                                          |
| [`SeedFaceScopeOutcome`](#MeshWorkflowControl.SeedFaceScopeOutcome)                                                         | Gets or sets the scope outcome from a previous operation. Applicable only if SeedFaceScopeDefinition is set to Outcome.                                                                                                                                                                                                                                             |
| [`SeedFaceScopePattern`](#MeshWorkflowControl.SeedFaceScopePattern)                                                         | Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if SeedFaceScopeDefinition is set to Value.                                                                                                                                                                                                                               |
| [`SelfIntersectionsLabelName`](#MeshWorkflowControl.SelfIntersectionsLabelName)                                             | Gets or sets the label name to be applied to self intersecting faces.                                                                                                                                                                                                                                                                                               |
| [`SemistructuredPatternType`](#MeshWorkflowControl.SemistructuredPatternType)                                               | Gets or sets the Semistructured Pattern type used by the MultiZone Mapped Meshing control when ApplySemistructuredPattern is set to True.                                                                                                                                                                                                                           |
| [`SeparateImagesPerPart`](#MeshWorkflowControl.SeparateImagesPerPart)                                                       | Gets or sets whether to generate separate images for each part. Defaults to True.                                                                                                                                                                                                                                                                                   |
| [`SharedTopologyLabelName`](#MeshWorkflowControl.SharedTopologyLabelName)                                                   | Gets or sets the name used as label to scope the shared topology faces which are automatically added as input mesh for MultiZone. Defaults to “MultiZoneMesh/SharedTopologyInputMesh”.                                                                                                                                                                              |
| [`ShowTessellation`](#MeshWorkflowControl.ShowTessellation)                                                                 | Gets or sets whether to show tessellation in the generated images. Defaults to True.                                                                                                                                                                                                                                                                                |
| [`SideTolerance`](#MeshWorkflowControl.SideTolerance)                                                                       | Gets or sets the SideTolerance.                                                                                                                                                                                                                                                                                                                                     |
| [`SizeFieldDefinition`](#MeshWorkflowControl.SizeFieldDefinition)                                                           | Gets or sets how the control's size field pattern should be defined, either by “Value” or by “Outcome”. The default value is “Value”.                                                                                                                                                                                                                               |
| [`SizeFieldName`](#MeshWorkflowControl.SizeFieldName)                                                                       | This property is used to define the name of the size field to apply to the meshing operation.                                                                                                                                                                                                                                                                       |
| [`SizeFieldOutcome`](#MeshWorkflowControl.SizeFieldOutcome)                                                                 | Gets or sets the outcome to be used to define the size field pattern when SizeFieldDefinition is set to “Outcome”.                                                                                                                                                                                                                                                  |
| [`SizeFieldPattern`](#MeshWorkflowControl.SizeFieldPattern)                                                                 | This property is used to define the name pattern for matching the size fields to apply to the meshing operation.                                                                                                                                                                                                                                                    |
| [`SizeScaleFactor`](#MeshWorkflowControl.SizeScaleFactor)                                                                   | Gets or sets the factor to apply to the element size values defined by settings.                                                                                                                                                                                                                                                                                    |
| [`SkewnessLimit`](#MeshWorkflowControl.SkewnessLimit)                                                                       | Gets or sets the skewness limit used to mark faces with skewed elements within the Surface Diagnostics outcome. Defaults to 0.9.                                                                                                                                                                                                                                    |
| [`SkewnessValidationErrorLimit`](#MeshWorkflowControl.SkewnessValidationErrorLimit)                                         | Gets or sets the skewness validation error limit.                                                                                                                                                                                                                                                                                                                   |
| [`SkewnessValidationWarningLimit`](#MeshWorkflowControl.SkewnessValidationWarningLimit)                                     | Gets or sets the skewness validation warning limit.                                                                                                                                                                                                                                                                                                                 |
| [`SkipGroupRegEx`](#MeshWorkflowControl.SkipGroupRegEx)                                                                     | Skips group names with provided regular expression.                                                                                                                                                                                                                                                                                                                 |
| [`SkipInteractiveSession`](#MeshWorkflowControl.SkipInteractiveSession)                                                     | Gets or sets whether to skip the interactive session on execution. The default value is false.                                                                                                                                                                                                                                                                      |
| [`SlicerCornerAngle`](#MeshWorkflowControl.SlicerCornerAngle)                                                               | Gets or sets the corner angle.                                                                                                                                                                                                                                                                                                                                      |
| [`SlicerFeatureAngle`](#MeshWorkflowControl.SlicerFeatureAngle)                                                             | Gets or sets the feature angle.                                                                                                                                                                                                                                                                                                                                     |
| [`SlicerLayerHeight`](#MeshWorkflowControl.SlicerLayerHeight)                                                               | Gets or sets the spacing between newly created parallel planes.                                                                                                                                                                                                                                                                                                     |
| [`SlicerLayerStart`](#MeshWorkflowControl.SlicerLayerStart)                                                                 | Gets or sets the z coordinate of the first plane.                                                                                                                                                                                                                                                                                                                   |
| [`SlicerMinimumLayerVolume`](#MeshWorkflowControl.SlicerMinimumLayerVolume)                                                 | Gets or sets the threshold volume for defeaturing a thin end layer of cells.                                                                                                                                                                                                                                                                                        |
| [`SlicerNodeMoveRelativeTolerance`](#MeshWorkflowControl.SlicerNodeMoveRelativeTolerance)                                   | Gets or sets the relative tolerance, as a fraction of slicer layer height, to move surface nodes away from a slicing plane.                                                                                                                                                                                                                                         |
| [`SlicerOverlappingAngle`](#MeshWorkflowControl.SlicerOverlappingAngle)                                                     | Gets or sets the overlapping angle.                                                                                                                                                                                                                                                                                                                                 |
| [`SlicerRelativeTolerance`](#MeshWorkflowControl.SlicerRelativeTolerance)                                                   | Gets or sets the relative tolerance for adjusting surface nodes when near a slicing plane. If the surface nodes are within the tolerance distance relative to the layer height, they will be projected to the new plane.                                                                                                                                            |
| [`SlicerSliverFaceHeight`](#MeshWorkflowControl.SlicerSliverFaceHeight)                                                     | Gets of sets the target minimum height of sliver triangles.                                                                                                                                                                                                                                                                                                         |
| [`SlicerSliverTriangleHeightFromSize`](#MeshWorkflowControl.SlicerSliverTriangleHeightFromSize)                             | Gets or sets whether to derive the sliver triangle height from the minimal mesh size.                                                                                                                                                                                                                                                                               |
| [`SlicerSliverTriangleHeightRatio`](#MeshWorkflowControl.SlicerSliverTriangleHeightRatio)                                   | Gets or sets the factor applied to the minimal mesh size to derive the sliver triangle height.                                                                                                                                                                                                                                                                      |
| [`SlidingOnBoundaries`](#MeshWorkflowControl.SlidingOnBoundaries)                                                           | Gest or sets whether to enforce the sliding on boundaries for a cyclic region condition.                                                                                                                                                                                                                                                                            |
| [`SmallEdgesLabelName`](#MeshWorkflowControl.SmallEdgesLabelName)                                                           | Gets or sets the label name to be applied to small edges.                                                                                                                                                                                                                                                                                                           |
| [`SmallEdgesLength`](#MeshWorkflowControl.SmallEdgesLength)                                                                 | Gets or sets the maximum edge length used in finding small edges with topology diagnostics.                                                                                                                                                                                                                                                                         |
| [`SmoothingIterations`](#MeshWorkflowControl.SmoothingIterations)                                                           | Allows user to input number of iterations needed to achieve good mesh results.                                                                                                                                                                                                                                                                                      |
| [`SmoothingPreserveVolume`](#MeshWorkflowControl.SmoothingPreserveVolume)                                                   | Gets or sets whether to enable and disable the volume preserving smoothing. If enabled, the smoothing will preserve the initial volume of the input. The default value is false.                                                                                                                                                                                    |
| [`SoftTargetSkewness`](#MeshWorkflowControl.SoftTargetSkewness)                                                             | Gets or sets the soft target value for skewness quality metric.                                                                                                                                                                                                                                                                                                     |
| [`SolderBallBottomPadDivisions`](#MeshWorkflowControl.SolderBallBottomPadDivisions)                                         | Gets or sets the number of vertical divisions for the bottom pad of the solder ball mesh. If an internal pad is generated, shell divisions is used instead.                                                                                                                                                                                                         |
| [`SolderBallBottomPadLength`](#MeshWorkflowControl.SolderBallBottomPadLength)                                               | Gets or sets the length of the solder ball bottom pad. Positive values for spheres create an external pad beneath the bottom split, and negative values create an internal pad beginning at the bottom split length. Torus will take the absolute value and always create an internal pad.                                                                          |
| [`SolderBallBottomSolderLabelName`](#MeshWorkflowControl.SolderBallBottomSolderLabelName)                                   | Gets or sets the label name to be applied to the bottom split of the solder ball.                                                                                                                                                                                                                                                                                   |
| [`SolderBallBottomSolderPadFaceLabelName`](#MeshWorkflowControl.SolderBallBottomSolderPadFaceLabelName)                     | Gets or sets the label name to be applied to the bottom pad face of the solder ball.                                                                                                                                                                                                                                                                                |
| [`SolderBallBottomSolderPadLabelName`](#MeshWorkflowControl.SolderBallBottomSolderPadLabelName)                             | Gets or sets the label name to be applied to the bottom pad of the solder ball.                                                                                                                                                                                                                                                                                     |
| [`SolderBallBottomSolderSplit`](#MeshWorkflowControl.SolderBallBottomSolderSplit)                                           | Gets or sets the distance from the middle at which the bottom split of the solder ball begins.                                                                                                                                                                                                                                                                      |
| [`SolderBallBottomSplitDivisions`](#MeshWorkflowControl.SolderBallBottomSplitDivisions)                                     | Gets or sets the number of vertical divisions for the bottom split of the solder ball mesh.                                                                                                                                                                                                                                                                         |
| [`SolderBallBottomSplitLength`](#MeshWorkflowControl.SolderBallBottomSplitLength)                                           | Gets or sets the length of the solder ball beginning at the bottom split point.                                                                                                                                                                                                                                                                                     |
| [`SolderBallCenterSolderLabelName`](#MeshWorkflowControl.SolderBallCenterSolderLabelName)                                   | Gets or sets the label name to be applied to the center of the solder ball.                                                                                                                                                                                                                                                                                         |
| [`SolderBallCentralVerticalDivisions`](#MeshWorkflowControl.SolderBallCentralVerticalDivisions)                             | Gets or sets the number of vertical divisions for the center of the solder ball mesh, not including top and bottom splits.                                                                                                                                                                                                                                          |
| [`SolderBallCylinderShellDivisions`](#MeshWorkflowControl.SolderBallCylinderShellDivisions)                                 | Gets or sets the number of divisions for the inner cylinder shell of the solder ball mesh.                                                                                                                                                                                                                                                                          |
| [`SolderBallInnerCylinderRadius`](#MeshWorkflowControl.SolderBallInnerCylinderRadius)                                       | Gets or sets the radius of the solder ball's inner cylinder.                                                                                                                                                                                                                                                                                                        |
| [`SolderBallOuterLoopDivisions`](#MeshWorkflowControl.SolderBallOuterLoopDivisions)                                         | Gets or sets the number of outer loop divisions for the solder ball mesh.                                                                                                                                                                                                                                                                                           |
| [`SolderBallRadius`](#MeshWorkflowControl.SolderBallRadius)                                                                 | Gets or sets the radius of the solder ball.                                                                                                                                                                                                                                                                                                                         |
| [`SolderBallShapeType`](#MeshWorkflowControl.SolderBallShapeType)                                                           | Gets or sets the solder ball shape type. The default value is Sphere.                                                                                                                                                                                                                                                                                               |
| [`SolderBallShellDivisions`](#MeshWorkflowControl.SolderBallShellDivisions)                                                 | Gets or sets the number of divisions for the outer shell of the solder ball mesh.                                                                                                                                                                                                                                                                                   |
| [`SolderBallSmoothMesh`](#MeshWorkflowControl.SolderBallSmoothMesh)                                                         | Gets whether the mesh will be smoothed.                                                                                                                                                                                                                                                                                                                             |
| [`SolderBallTopPadDivisions`](#MeshWorkflowControl.SolderBallTopPadDivisions)                                               | Gets or sets the number of vertical divisions for the top pad of the solder ball mesh. If an internal pad is generated, shell divisions is used instead.                                                                                                                                                                                                            |
| [`SolderBallTopPadLength`](#MeshWorkflowControl.SolderBallTopPadLength)                                                     | Gets or sets the length of the solder ball top pad. Positive values for spheres create an external pad on top of the top split, and negative values create an internal pad beginning at the top split length. Torus will take the absolute value and always create an internal pad.                                                                                 |
| [`SolderBallTopSolderLabelName`](#MeshWorkflowControl.SolderBallTopSolderLabelName)                                         | Gets or sets the label name to be applied to the top split of the solder ball.                                                                                                                                                                                                                                                                                      |
| [`SolderBallTopSolderPadFaceLabelName`](#MeshWorkflowControl.SolderBallTopSolderPadFaceLabelName)                           | Gets or sets the label name to be applied to the top solder pad face of the solder ball.                                                                                                                                                                                                                                                                            |
| [`SolderBallTopSolderPadLabelName`](#MeshWorkflowControl.SolderBallTopSolderPadLabelName)                                   | Gets or sets the label name to be applied to the top pad of the solder ball.                                                                                                                                                                                                                                                                                        |
| [`SolderBallTopSolderSplit`](#MeshWorkflowControl.SolderBallTopSolderSplit)                                                 | Gets or sets the distance from the middle at which the top split of the solder ball begins.                                                                                                                                                                                                                                                                         |
| [`SolderBallTopSplitDivisions`](#MeshWorkflowControl.SolderBallTopSplitDivisions)                                           | Gets or sets the number of vertical divisions for the top split of the solder ball mesh.                                                                                                                                                                                                                                                                            |
| [`SolderBallTopSplitLength`](#MeshWorkflowControl.SolderBallTopSplitLength)                                                 | Gets or sets the length of the solder ball beginning at the top split point.                                                                                                                                                                                                                                                                                        |
| [`SolidIGADegreeR`](#MeshWorkflowControl.SolidIGADegreeR)                                                                   | Gets or sets the degree R.                                                                                                                                                                                                                                                                                                                                          |
| [`SolidIGADegreeS`](#MeshWorkflowControl.SolidIGADegreeS)                                                                   | Gets or sets the degree S.                                                                                                                                                                                                                                                                                                                                          |
| [`SolidIGADegreeT`](#MeshWorkflowControl.SolidIGADegreeT)                                                                   | Gets or sets the degree T.                                                                                                                                                                                                                                                                                                                                          |
| [`SolidIGAFeatureAngle`](#MeshWorkflowControl.SolidIGAFeatureAngle)                                                         | Gets or sets the feature angle.                                                                                                                                                                                                                                                                                                                                     |
| [`SolidIGAGeometryFileName`](#MeshWorkflowControl.SolidIGAGeometryFileName)                                                 | Gets or sets the file name path string.                                                                                                                                                                                                                                                                                                                             |
| [`SolidIGAInterpolationElementsR`](#MeshWorkflowControl.SolidIGAInterpolationElementsR)                                     | Gets or sets the interpolation elements r.                                                                                                                                                                                                                                                                                                                          |
| [`SolidIGAInterpolationElementsS`](#MeshWorkflowControl.SolidIGAInterpolationElementsS)                                     | Gets or sets the interpolation elements s.                                                                                                                                                                                                                                                                                                                          |
| [`SolidIGAInterpolationElementsT`](#MeshWorkflowControl.SolidIGAInterpolationElementsT)                                     | Gets or sets the interpolation elements t.                                                                                                                                                                                                                                                                                                                          |
| [`SolidIGANElementsR`](#MeshWorkflowControl.SolidIGANElementsR)                                                             | Gets or sets the number of elements R.                                                                                                                                                                                                                                                                                                                              |
| [`SolidIGANElementsS`](#MeshWorkflowControl.SolidIGANElementsS)                                                             | Gets or sets the number of elements S.                                                                                                                                                                                                                                                                                                                              |
| [`SolidIGANElementsT`](#MeshWorkflowControl.SolidIGANElementsT)                                                             | Gets or sets the number of elements T.                                                                                                                                                                                                                                                                                                                              |
| [`SolidIGASolverFileName`](#MeshWorkflowControl.SolidIGASolverFileName)                                                     | Gets or sets the file name path string.                                                                                                                                                                                                                                                                                                                             |
| [`SolidIGATessellationTolerance`](#MeshWorkflowControl.SolidIGATessellationTolerance)                                       | Gets or sets the tessellation tolerance.                                                                                                                                                                                                                                                                                                                            |
| [`SolidIGATolerance`](#MeshWorkflowControl.SolidIGATolerance)                                                               | Gets or sets the tolerance.                                                                                                                                                                                                                                                                                                                                         |
| [`SolidIGAToleranceRatio`](#MeshWorkflowControl.SolidIGAToleranceRatio)                                                     | Gets or sets the tolerance ratio.                                                                                                                                                                                                                                                                                                                                   |
| [`SolidIGATriTolerance`](#MeshWorkflowControl.SolidIGATriTolerance)                                                         | Gets or sets the tri tolerance.                                                                                                                                                                                                                                                                                                                                     |
| [`SourceScopeDefinition`](#MeshWorkflowControl.SourceScopeDefinition)                                                       | Gets or sets the type of scope definition for the source scope of the match operation. Default: Value                                                                                                                                                                                                                                                               |
| [`SourceScopeMethod`](#MeshWorkflowControl.SourceScopeMethod)                                                               | Gets or sets the scoping method for the source scope of the match operation. Default: Part.                                                                                                                                                                                                                                                                         |
| [`SourceScopeOutcome`](#MeshWorkflowControl.SourceScopeOutcome)                                                             | Gets or sets the scope outcome from a previous operation. Applicable only if SourceScopeDefinition is set to Outcome.                                                                                                                                                                                                                                               |
| [`SourceScopePattern`](#MeshWorkflowControl.SourceScopePattern)                                                             | Gets or sets the part, zone or label name pattern that defines the source scope. Applicable only if SourceScopeDefinition is set to Value.                                                                                                                                                                                                                          |
| [`SourceTargetScopeDefinition`](#MeshWorkflowControl.SourceTargetScopeDefinition)                                           | Gets or sets the type of scope definition for the Source/Target scoping. Default: Value.                                                                                                                                                                                                                                                                            |
| [`SourceTargetScopeMethod`](#MeshWorkflowControl.SourceTargetScopeMethod)                                                   | Gets or sets the scoping method for the Source/Target scoping. Default: Label.                                                                                                                                                                                                                                                                                      |
| [`SourceTargetScopeOutcome`](#MeshWorkflowControl.SourceTargetScopeOutcome)                                                 | Gets or sets the scope outcome for the Source/Target scoping from a previous operation. Applicable only if SourceTargetScopeDefinition is set to Outcome.                                                                                                                                                                                                           |
| [`SourceTargetScopePattern`](#MeshWorkflowControl.SourceTargetScopePattern)                                                 | Gets or sets the zone or label name pattern that defines the Source/Target scoping. Applicable only if SourceTargetScopeDefinition is set to Value.                                                                                                                                                                                                                 |
| [`SphereCenterModality`](#MeshWorkflowControl.SphereCenterModality)                                                         | This property is used to define the rule for the computation of the center of the spherical enclosure.                                                                                                                                                                                                                                                              |
| [`StackerEdgeBiasType`](#MeshWorkflowControl.StackerEdgeBiasType)                                                           | Gets or sets the stacker edge bias type to be used when executing a Stacker Mesh Volume operation. The default value is Uniform.                                                                                                                                                                                                                                    |
| [`StackingDefeatureSize`](#MeshWorkflowControl.StackingDefeatureSize)                                                       | Defines defeature size to be used along the stacking direction.                                                                                                                                                                                                                                                                                                     |
| [`State`](#MeshWorkflowControl.State)                                                                                       | State property.                                                                                                                                                                                                                                                                                                                                                     |
| [`StepFixLevel`](#MeshWorkflowControl.StepFixLevel)                                                                         | Gets or sets the aggressiveness level for fixing steps.                                                                                                                                                                                                                                                                                                             |
| [`StepQualityLimit`](#MeshWorkflowControl.StepQualityLimit)                                                                 | Gets or sets the quality limit for step fixing.                                                                                                                                                                                                                                                                                                                     |
| [`StepQualityMetric`](#MeshWorkflowControl.StepQualityMetric)                                                               | Gets or sets the quality metric to use for step fixing.                                                                                                                                                                                                                                                                                                             |
| [`StitchFreeFaces`](#MeshWorkflowControl.StitchFreeFaces)                                                                   | Gets or sets whether to stitch free faces during cleanup.                                                                                                                                                                                                                                                                                                           |
| [`SubMappingAngleThreshold`](#MeshWorkflowControl.SubMappingAngleThreshold)                                                 | Gets or sets the angle threshold for the classification of the automatically set mapped mesh vertex types. Defaults to 18 degrees, valid range is [18 degrees, 43.2 degrees]. ArgumentException is thrown for out-of-range values.                                                                                                                                  |
| [`SuppressFeatureAngle`](#MeshWorkflowControl.SuppressFeatureAngle)                                                         | Gets or sets the angle threshold for identifying feature edges.                                                                                                                                                                                                                                                                                                     |
| [`SuppressNotFeatureEdges`](#MeshWorkflowControl.SuppressNotFeatureEdges)                                                   | Gets or sets whether to suppress edges that are not feature edges.                                                                                                                                                                                                                                                                                                  |
| [`Suppressed`](#MeshWorkflowControl.Suppressed)                                                                             | Gets or sets the Suppressed.                                                                                                                                                                                                                                                                                                                                        |
| [`SurfaceMeshType`](#MeshWorkflowControl.SurfaceMeshType)                                                                   | This property gives control over what type of elements need to be generated in the mesh. The supported surface mesh types are Triangles, Quad Dominant and Quadrilateral.                                                                                                                                                                                           |
| [`SurfaceScopeModality`](#MeshWorkflowControl.SurfaceScopeModality)                                                         | Gets or sets the type of surface scope modality used to define the morphable area. Default: Rings                                                                                                                                                                                                                                                                   |
| [`SurfaceTolerance`](#MeshWorkflowControl.SurfaceTolerance)                                                                 | Gets or sets surface tolerance to be used for faceting on execution.                                                                                                                                                                                                                                                                                                |
| [`SweepingSize`](#MeshWorkflowControl.SweepingSize)                                                                         | Gets or sets the constant size along the sweeping direction.                                                                                                                                                                                                                                                                                                        |
| [`TargetScopeDefinition`](#MeshWorkflowControl.TargetScopeDefinition)                                                       | Gets or sets the type of scope definition for the target scope of the match operation. Default: Value                                                                                                                                                                                                                                                               |
| [`TargetScopeMethod`](#MeshWorkflowControl.TargetScopeMethod)                                                               | Gets or sets the scoping method for the target scope of the match operation. Default: Label.                                                                                                                                                                                                                                                                        |
| [`TargetScopeOutcome`](#MeshWorkflowControl.TargetScopeOutcome)                                                             | Gets or sets the scope outcome from a previous operation. Applicable only if TargetScopeDefinition is set to Outcome.                                                                                                                                                                                                                                               |
| [`TargetScopePattern`](#MeshWorkflowControl.TargetScopePattern)                                                             | Gets or sets the part, zone or label name pattern that defines the target scope. Applicable only if TargetScopeDefinition is set to Value.                                                                                                                                                                                                                          |
| [`TargetSkewness`](#MeshWorkflowControl.TargetSkewness)                                                                     | Set Limit to the skewness of an element. Higher the skewness value, expecting a better mesh result.                                                                                                                                                                                                                                                                 |
| [`TargetToleranceFactor`](#MeshWorkflowControl.TargetToleranceFactor)                                                       | Gets or sets the factor applied to the size to derive the target tolerance.                                                                                                                                                                                                                                                                                         |
| [`TetCollapseValidationErrorLimit`](#MeshWorkflowControl.TetCollapseValidationErrorLimit)                                   | Gets or sets the tet collapse validation error limit.                                                                                                                                                                                                                                                                                                               |
| [`TetCollapseValidationWarningLimit`](#MeshWorkflowControl.TetCollapseValidationWarningLimit)                               | Gets or sets the tet collapse validation warning limit.                                                                                                                                                                                                                                                                                                             |
| [`Thickness`](Thickness.md#Thickness)                                                                                       | Gets or sets the Thickness to be assigned to the scoped zone.                                                                                                                                                                                                                                                                                                       |
| [`ThinStripesLabelName`](#MeshWorkflowControl.ThinStripesLabelName)                                                         | Gets or sets the label name to be applied to thin stripe faces.                                                                                                                                                                                                                                                                                                     |
| [`ThinStripesWidth`](#MeshWorkflowControl.ThinStripesWidth)                                                                 | Gets or sets the maximum width used in finding thin stripes with topology diagnostics.                                                                                                                                                                                                                                                                              |
| [`ThinSweepDivisions`](#MeshWorkflowControl.ThinSweepDivisions)                                                             | Gets or sets the number of divisions to be used for Thin Sweep decomposition.                                                                                                                                                                                                                                                                                       |
| [`ThinSweepThickness`](#MeshWorkflowControl.ThinSweepThickness)                                                             | Gets or sets the thin sweep thickness to be used for Thin Sweep decomposition.                                                                                                                                                                                                                                                                                      |
| [`ToleranceFactor`](#MeshWorkflowControl.ToleranceFactor)                                                                   | Gets or sets the factor applied to the size to derive the tolerance.                                                                                                                                                                                                                                                                                                |
| [`ToleranceFromSize`](#MeshWorkflowControl.ToleranceFromSize)                                                               | Gets or sets whether to derive the tolerance of the connect control from the size.                                                                                                                                                                                                                                                                                  |
| [`TopologyConformalConnection`](#MeshWorkflowControl.TopologyConformalConnection)                                           | Gets or sets whether to preserve the topology connection for the newly created faces. The default value is false.                                                                                                                                                                                                                                                   |
| [`TriangleCountReductionMode`](#MeshWorkflowControl.TriangleCountReductionMode)                                             | This property gives control over the mode/degree of triangle count reduction during surface mesh generation. The supported modes are None, Conservative and Aggressive.                                                                                                                                                                                             |
| [`TrimBoxMaxX`](#MeshWorkflowControl.TrimBoxMaxX)                                                                           | Gets or sets the maximum X coordinate for the box coordinates trim.                                                                                                                                                                                                                                                                                                 |
| [`TrimBoxMaxY`](#MeshWorkflowControl.TrimBoxMaxY)                                                                           | Gets or sets the maximum Y coordinate for the box coordinates trim.                                                                                                                                                                                                                                                                                                 |
| [`TrimBoxMaxZ`](#MeshWorkflowControl.TrimBoxMaxZ)                                                                           | Gets or sets the maximum Z coordinate for the box coordinates trim.                                                                                                                                                                                                                                                                                                 |
| [`TrimBoxMinX`](#MeshWorkflowControl.TrimBoxMinX)                                                                           | Gets or sets the minimum X coordinate for the box coordinates trim.                                                                                                                                                                                                                                                                                                 |
| [`TrimBoxMinY`](#MeshWorkflowControl.TrimBoxMinY)                                                                           | Gets or sets the minimum Y coordinate for the box coordinates trim.                                                                                                                                                                                                                                                                                                 |
| [`TrimBoxMinZ`](#MeshWorkflowControl.TrimBoxMinZ)                                                                           | Gets or sets the minimum Z coordinate for the box coordinates trim.                                                                                                                                                                                                                                                                                                 |
| [`TrimDistance`](#MeshWorkflowControl.TrimDistance)                                                                         | Gets or sets the distance for the mesh based trim.                                                                                                                                                                                                                                                                                                                  |
| [`TrimElementSelectionType`](#MeshWorkflowControl.TrimElementSelectionType)                                                 | Gets or sets the trim element selection type. The default value is Outside.                                                                                                                                                                                                                                                                                         |
| [`TrimNode1X`](#MeshWorkflowControl.TrimNode1X)                                                                             | Gets or sets the X coordinate for trim node 1.                                                                                                                                                                                                                                                                                                                      |
| [`TrimNode1Y`](#MeshWorkflowControl.TrimNode1Y)                                                                             | Gets or sets the Y coordinate for trim node 1.                                                                                                                                                                                                                                                                                                                      |
| [`TrimNode1Z`](#MeshWorkflowControl.TrimNode1Z)                                                                             | Gets or sets the Z coordinate for trim node 1.                                                                                                                                                                                                                                                                                                                      |
| [`TrimNode2X`](#MeshWorkflowControl.TrimNode2X)                                                                             | Gets or sets the X coordinate for trim node 2.                                                                                                                                                                                                                                                                                                                      |
| [`TrimNode2Y`](#MeshWorkflowControl.TrimNode2Y)                                                                             | Gets or sets the Y coordinate for trim node 2.                                                                                                                                                                                                                                                                                                                      |
| [`TrimNode2Z`](#MeshWorkflowControl.TrimNode2Z)                                                                             | Gets or sets the Z coordinate for trim node 2.                                                                                                                                                                                                                                                                                                                      |
| [`TrimOperationType`](#MeshWorkflowControl.TrimOperationType)                                                               | Gets or sets the trim operation type. The default value is Trim.                                                                                                                                                                                                                                                                                                    |
| [`TrimOptionType`](#MeshWorkflowControl.TrimOptionType)                                                                     | Gets or sets the trim option type. The default value is Mesh.                                                                                                                                                                                                                                                                                                       |
| [`TrimRadius1`](#MeshWorkflowControl.TrimRadius1)                                                                           | Gets or sets the radius 1 for the trim geometry.                                                                                                                                                                                                                                                                                                                    |
| [`TrimRadius2`](#MeshWorkflowControl.TrimRadius2)                                                                           | Gets or sets the radius 2 for the trim geometry.                                                                                                                                                                                                                                                                                                                    |
| [`UnconnectedFreeEdgesLabelName`](#MeshWorkflowControl.UnconnectedFreeEdgesLabelName)                                       | Gets or sets the label name to be applied to unconnected free edges.                                                                                                                                                                                                                                                                                                |
| [`UnitsSystem`](#MeshWorkflowControl.UnitsSystem)                                                                           | Gets or sets the UnitsSystem.                                                                                                                                                                                                                                                                                                                                       |
| [`UnoDataEDXPath`](#MeshWorkflowControl.UnoDataEDXPath)                                                                     | Gets or sets the UnoDataEDXPath.                                                                                                                                                                                                                                                                                                                                    |
| [`UseCADCurvature`](#MeshWorkflowControl.UseCADCurvature)                                                                   | Gets or sets whether to define the local curvature based on the CAD. The default value is True.                                                                                                                                                                                                                                                                     |
| [`UseMappedBlocksSplitAngle`](#MeshWorkflowControl.UseMappedBlocksSplitAngle)                                               | Gets or sets whether extra split should be introduced in the mapped blocks based on the MappedBlocksSplitAngle value. Defaults to False.                                                                                                                                                                                                                            |
| [`UseRelativeTolerances`](#MeshWorkflowControl.UseRelativeTolerances)                                                       | Gets or sets whether to use relative tolerances.                                                                                                                                                                                                                                                                                                                    |
| [`UseSizeFieldInSweepDirection`](#MeshWorkflowControl.UseSizeFieldInSweepDirection)                                         | Gets or sets whether to use the size field sizing along the sweeping direction or to apply a constant size. Defaults to False.                                                                                                                                                                                                                                      |
| [`UshapeCuspsMiddleFacesScopeDefinition`](#MeshWorkflowControl.UshapeCuspsMiddleFacesScopeDefinition)                       | Gets or sets the scope definition type for the U-shape cusps middle faces scope.                                                                                                                                                                                                                                                                                    |
| [`UshapeCuspsMiddleFacesScopeMethod`](#MeshWorkflowControl.UshapeCuspsMiddleFacesScopeMethod)                               | Gets or sets the scope method for the U-shape cusps middle faces scope.                                                                                                                                                                                                                                                                                             |
| [`UshapeCuspsMiddleFacesScopeOutcome`](#MeshWorkflowControl.UshapeCuspsMiddleFacesScopeOutcome)                             | Gets or sets the scope outcome for the U-shape cusps middle faces scope.                                                                                                                                                                                                                                                                                            |
| [`UshapeCuspsMiddleFacesScopePattern`](#MeshWorkflowControl.UshapeCuspsMiddleFacesScopePattern)                             | Gets or sets the scope pattern for the U-shape cusps middle faces scope.                                                                                                                                                                                                                                                                                            |
| [`ValidateMeshType`](#MeshWorkflowControl.ValidateMeshType)                                                                 | Gets or sets the validate mesh type. The default value is Surface.                                                                                                                                                                                                                                                                                                  |
| [`VariableName`](#MeshWorkflowControl.VariableName)                                                                         | Gets or sets the VariableName.                                                                                                                                                                                                                                                                                                                                      |
| [`VariableType`](#MeshWorkflowControl.VariableType)                                                                         | Gets or sets the VariableType.                                                                                                                                                                                                                                                                                                                                      |
| [`VariableValue`](#MeshWorkflowControl.VariableValue)                                                                       | Gets or sets the VariableValue.                                                                                                                                                                                                                                                                                                                                     |
| [`VerticalDirection`](#MeshWorkflowControl.VerticalDirection)                                                               | Gets or sets the VerticalDirection coordinates.                                                                                                                                                                                                                                                                                                                     |
| [`VerticalDirectionX`](#MeshWorkflowControl.VerticalDirectionX)                                                             | Gets or sets the VerticalDirectionX.                                                                                                                                                                                                                                                                                                                                |
| [`VerticalDirectionY`](#MeshWorkflowControl.VerticalDirectionY)                                                             | Gets or sets the VerticalDirectionY.                                                                                                                                                                                                                                                                                                                                |
| [`VerticalDirectionZ`](#MeshWorkflowControl.VerticalDirectionZ)                                                             | Gets or sets the VerticalDirectionZ.                                                                                                                                                                                                                                                                                                                                |
| [`VerticalScopeOutcome`](#MeshWorkflowControl.VerticalScopeOutcome)                                                         | Gets or sets the VerticalScopeOutcome.                                                                                                                                                                                                                                                                                                                              |
| [`VerticalScopePattern`](#MeshWorkflowControl.VerticalScopePattern)                                                         | Gets or sets the VerticalScopePattern.                                                                                                                                                                                                                                                                                                                              |
| [`VerticalizeTargetNormal`](#MeshWorkflowControl.VerticalizeTargetNormal)                                                   | This property defines the target normal direction for the faces during verticalization. The available options are XPlus, YPlus, ZPlus, XMinus, YMinus, ZMinus.                                                                                                                                                                                                      |
| [`VisibleProperties`](#MeshWorkflowControl.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.                                                                                                                                                                                                                                                                                                       |
| [`VolumeCushionPercentage`](#MeshWorkflowControl.VolumeCushionPercentage)                                                   | Gets or sets the VolumeCushionPercentage.                                                                                                                                                                                                                                                                                                                           |
| [`VolumeLabelName`](#MeshWorkflowControl.VolumeLabelName)                                                                   | This property is used to rename the default volume lavel name generated during execution of step.                                                                                                                                                                                                                                                                   |
| [`VolumeMeshToolDihedralAngle`](#MeshWorkflowControl.VolumeMeshToolDihedralAngle)                                           | Gets or sets the dihedral angle.                                                                                                                                                                                                                                                                                                                                    |
| [`VolumeMeshToolMovedNodeDisplacementTolerance`](#MeshWorkflowControl.VolumeMeshToolMovedNodeDisplacementTolerance)         | Gets or sets the tolerance for the nodes to set as not projectable.                                                                                                                                                                                                                                                                                                 |
| [`VolumeMeshToolNumberOfAttempts`](#MeshWorkflowControl.VolumeMeshToolNumberOfAttempts)                                     | Gets or sets the number of attempts to improve skewness by node movement.                                                                                                                                                                                                                                                                                           |
| [`VolumeMeshToolNumberOfIterations`](#MeshWorkflowControl.VolumeMeshToolNumberOfIterations)                                 | Gets or sets the number of iterations.                                                                                                                                                                                                                                                                                                                              |
| [`VolumeMeshToolNumberOfIterationsPerNode`](#MeshWorkflowControl.VolumeMeshToolNumberOfIterationsPerNode)                   | Gets or sets the number of iterations per node to be moved.                                                                                                                                                                                                                                                                                                         |
| [`VolumeMeshToolRemoveProjectabilityFromMovedFaces`](#MeshWorkflowControl.VolumeMeshToolRemoveProjectabilityFromMovedFaces) | Gets or sets whether to remove the projectability from the faces with moved nodes. The default value is false.                                                                                                                                                                                                                                                      |
| [`VolumeMeshToolTargetSkewness`](#MeshWorkflowControl.VolumeMeshToolTargetSkewness)                                         | Gets or sets the target skewness.                                                                                                                                                                                                                                                                                                                                   |
| [`VolumeMeshType`](#MeshWorkflowControl.VolumeMeshType)                                                                     | Type of Volume elements such as Tetrahedrons and Hex.                                                                                                                                                                                                                                                                                                               |
| [`VolumeScopeModality`](#MeshWorkflowControl.VolumeScopeModality)                                                           | The modality can be EntireDomain or Box.                                                                                                                                                                                                                                                                                                                            |
| [`VolumeSplittingLoopScopeDefinition`](#MeshWorkflowControl.VolumeSplittingLoopScopeDefinition)                             | Gets or sets the type of scope definition for the Volume Splitting Loop scoping. Defaults to Value.                                                                                                                                                                                                                                                                 |
| [`VolumeSplittingLoopScopeMethod`](#MeshWorkflowControl.VolumeSplittingLoopScopeMethod)                                     | Gets or sets the scoping method for the Volume Splitting Loop scoping. Defaults to Label.                                                                                                                                                                                                                                                                           |
| [`VolumeSplittingLoopScopeOutcome`](#MeshWorkflowControl.VolumeSplittingLoopScopeOutcome)                                   | Gets or sets the scope outcome from a previous operation for the Volume Splitting Loop scoping. Applicable only if scope is defined by outcome.                                                                                                                                                                                                                     |
| [`VolumeSplittingLoopScopePattern`](#MeshWorkflowControl.VolumeSplittingLoopScopePattern)                                   | Gets or sets the part, zone or label name pattern for the Volume Splitting Loop scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                                              |
| [`VolumeSplittingPlaneScopeDefinition`](#MeshWorkflowControl.VolumeSplittingPlaneScopeDefinition)                           | Gets or sets the type of scope definition for the Volume Splitting Plane scoping. Defaults to Value.                                                                                                                                                                                                                                                                |
| [`VolumeSplittingPlaneScopeMethod`](#MeshWorkflowControl.VolumeSplittingPlaneScopeMethod)                                   | Gets or sets the scoping method for the Volume Splitting Plane scoping. Defaults to Label.                                                                                                                                                                                                                                                                          |
| [`VolumeSplittingPlaneScopeOutcome`](#MeshWorkflowControl.VolumeSplittingPlaneScopeOutcome)                                 | Gets or sets the scope outcome from a previous operation for the Volume Splitting Plane scoping. Applicable only if scope is defined by outcome.                                                                                                                                                                                                                    |
| [`VolumeSplittingPlaneScopePattern`](#MeshWorkflowControl.VolumeSplittingPlaneScopePattern)                                 | Gets or sets the part, zone or label name pattern for the Volume Splitting Plane scoping. Applicable only if scope is defined by value.                                                                                                                                                                                                                             |
| [`VolumeZoneName`](#MeshWorkflowControl.VolumeZoneName)                                                                     | This property is used to rename the default volume zone name generated during execution of step.                                                                                                                                                                                                                                                                    |
| [`VolumesLabelName`](#MeshWorkflowControl.VolumesLabelName)                                                                 | Gets or sets the name to use when creating labels based on the number of volumes.                                                                                                                                                                                                                                                                                   |
| [`WeldCreationCreateHAZLayers`](#MeshWorkflowControl.WeldCreationCreateHAZLayers)                                           | Gets or sets if HAZ layers will be created with when meshing the weld.                                                                                                                                                                                                                                                                                              |
| [`WeldCreationEdgeMeshSize`](#MeshWorkflowControl.WeldCreationEdgeMeshSize)                                                 | Gets or sets the weld edge mesh size.                                                                                                                                                                                                                                                                                                                               |
| [`WeldCreationGrowthRate`](#MeshWorkflowControl.WeldCreationGrowthRate)                                                     | Gets or sets the weld mesh growth rate.                                                                                                                                                                                                                                                                                                                             |
| [`WeldCreationHAZDistanceBottom`](#MeshWorkflowControl.WeldCreationHAZDistanceBottom)                                       | Gets or sets the weld mesh bottom HAZ layer distance.                                                                                                                                                                                                                                                                                                               |
| [`WeldCreationHAZDistanceTop`](#MeshWorkflowControl.WeldCreationHAZDistanceTop)                                             | Gets or sets the weld mesh top HAZ layer distance.                                                                                                                                                                                                                                                                                                                  |
| [`WeldCreationNumberHAZLayers`](#MeshWorkflowControl.WeldCreationNumberHAZLayers)                                           | Gets or sets the number of HAZ layers for the weld, not to exceed 6.                                                                                                                                                                                                                                                                                                |
| [`WorkingDirectory`](#MeshWorkflowControl.WorkingDirectory)                                                                 | Gets or sets the WorkingDirectory.                                                                                                                                                                                                                                                                                                                                  |
| [`WrapByParts`](#MeshWorkflowControl.WrapByParts)                                                                           | Gets or sets whether to wrap each part separately. The default value is false.                                                                                                                                                                                                                                                                                      |
| [`XAxis`](#MeshWorkflowControl.XAxis)                                                                                       | Gets or sets the x coordinate of the axis attribute of the corresponding control.                                                                                                                                                                                                                                                                                   |
| [`XCenter`](#MeshWorkflowControl.XCenter)                                                                                   | Gets or sets the x coordinate of the center attribute of the corresponding control.                                                                                                                                                                                                                                                                                 |
| [`XCoordinate`](#MeshWorkflowControl.XCoordinate)                                                                           | It defines the X Coordinate.                                                                                                                                                                                                                                                                                                                                        |
| [`XPointOnBend`](#MeshWorkflowControl.XPointOnBend)                                                                         | Gets or sets the X coordinate of the point on the bend region attribute of the corresponding control. Default is Quantity(0.0, 'm')                                                                                                                                                                                                                                 |
| [`YAxis`](#MeshWorkflowControl.YAxis)                                                                                       | Gets or sets the y coordinate of the axis attribute of the corresponding control.                                                                                                                                                                                                                                                                                   |
| [`YCenter`](#MeshWorkflowControl.YCenter)                                                                                   | Gets or sets the y coordinate of the center attribute of the corresponding control.                                                                                                                                                                                                                                                                                 |
| [`YCoordinate`](#MeshWorkflowControl.YCoordinate)                                                                           | It defines the Y Coordinate.                                                                                                                                                                                                                                                                                                                                        |
| [`YPointOnBend`](#MeshWorkflowControl.YPointOnBend)                                                                         | Gets or sets the Y coordinate of the point on the bend region attribute of the corresponding control. Default is Quantity(0.0, 'm')                                                                                                                                                                                                                                 |
| [`ZAxis`](#MeshWorkflowControl.ZAxis)                                                                                       | Gets or sets the z coordinate of the axis attribute of the corresponding control.                                                                                                                                                                                                                                                                                   |
| [`ZCenter`](#MeshWorkflowControl.ZCenter)                                                                                   | Gets or sets the z coordinate of the center attribute of the corresponding control.                                                                                                                                                                                                                                                                                 |
| [`ZCoordinate`](#MeshWorkflowControl.ZCoordinate)                                                                           | It defines the Z Coordinate.                                                                                                                                                                                                                                                                                                                                        |
| [`ZPointOnBend`](#MeshWorkflowControl.ZPointOnBend)                                                                         | Gets or sets the Z coordinate of the point on the bend region attribute of the corresponding control. Default is Quantity(0.0, 'm')                                                                                                                                                                                                                                 |
| [`ZoneType`](#MeshWorkflowControl.ZoneType)                                                                                 | Gets or sets the ZoneType.                                                                                                                                                                                                                                                                                                                                          |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowControl.AcuteCuspAngle"></a>

### *property* MeshWorkflowControl.AcuteCuspAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the angle threshold for identifying acute cusps.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AddBoundingTopoFacesZones"></a>

### *property* MeshWorkflowControl.AddBoundingTopoFacesZones *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to add automatically the face zones for the topo faces bounding the topo volumes. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AddUniqueLabelPerPoint"></a>

### *property* MeshWorkflowControl.AddUniqueLabelPerPoint *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to apply a unique label name to each added prescribed point. Uniqueness is enforced by appending a numbering suffix to the label name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AddUniqueZonePerVolume"></a>

### *property* MeshWorkflowControl.AddUniqueZonePerVolume *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to add unique zone for each extracted volume. Uniqueness is enforced by appending a numbering suffix to the zone name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AddedTopoEntitiesLabel"></a>

### *property* MeshWorkflowControl.AddedTopoEntitiesLabel *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to rename the default label generated for the added topological entities.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AligningAccuracy"></a>

### *property* MeshWorkflowControl.AligningAccuracy *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshWorkflowAligningAccuracyType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the aligning accuracy for the aligning process.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AligningMethod"></a>

### *property* MeshWorkflowControl.AligningMethod *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshWorkflowAligningMethodType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the aligning method for the aligning process.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AllowEdgeMergingSelfClose"></a>

### *property* MeshWorkflowControl.AllowEdgeMergingSelfClose *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to allow self-closing when merging edges. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AllowSurfaceInterpolation"></a>

### *property* MeshWorkflowControl.AllowSurfaceInterpolation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to allow surface interpolation for sliding constraint.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AnchorFreeEdges"></a>

### *property* MeshWorkflowControl.AnchorFreeEdges *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets if the free edges of the model should be automatically considered as fixed for the morphing operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AppendData"></a>

### *property* MeshWorkflowControl.AppendData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to append the mesh data being read to the current PrimeMesh model or to clear the model content before the mesh data is being read. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ApplySemistructuredPattern"></a>

### *property* MeshWorkflowControl.ApplySemistructuredPattern *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to apply Semistructured Pattern mapped meshing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AspectRatioValidationErrorLimit"></a>

### *property* MeshWorkflowControl.AspectRatioValidationErrorLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the aspect ratio validation error limit.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AspectRatioValidationWarningLimit"></a>

### *property* MeshWorkflowControl.AspectRatioValidationWarningLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the aspect ratio validation warning limit.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AttachedRefs"></a>

### *property* MeshWorkflowControl.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoCollapseShortEdges"></a>

### *property* MeshWorkflowControl.AutoCollapseShortEdges *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to collapse edges below the specified tolerance. Feature edges and Protected edges are not collapsed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoComputeCenterAxis"></a>

### *property* MeshWorkflowControl.AutoComputeCenterAxis *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to automatically compute the center and axis for the cyclic region.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoComputeOverlapsTolerance"></a>

### *property* MeshWorkflowControl.AutoComputeOverlapsTolerance *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to use the automatically computed overlaps tolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoDeleteInteriorVertices"></a>

### *property* MeshWorkflowControl.AutoDeleteInteriorVertices *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to delete interior vertices from scoped topology.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoDetectCollidingFaces"></a>

### *property* MeshWorkflowControl.AutoDetectCollidingFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to automatically detect colliding faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoMergeParts"></a>

### *property* MeshWorkflowControl.AutoMergeParts *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AutoMergeParts.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoPartialDefeature"></a>

### *property* MeshWorkflowControl.AutoPartialDefeature *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to partially remove thin faces and sharp angles within provided tolerances, such that only topology impacting mesh quality is removed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoPinchFaces"></a>

### *property* MeshWorkflowControl.AutoPinchFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to remove small features from topology to improve mesh quality.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoQuad_AllowCurvedTopoFaces"></a>

### *property* MeshWorkflowControl.AutoQuad_AllowCurvedTopoFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to allow curved topo faces when detecting and treating holes.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoQuad_FragmentedEdgeTolerance"></a>

### *property* MeshWorkflowControl.AutoQuad_FragmentedEdgeTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the edge tolerance for non circular holes with round corners in order to remove the short edge and hotspots when treating holes and features.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoQuad_HoleOffsetPercentage"></a>

### *property* MeshWorkflowControl.AutoQuad_HoleOffsetPercentage *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the hole offset percentage to be used with mesh size when generating quad layers.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoQuad_MeshSize"></a>

### *property* MeshWorkflowControl.AutoQuad_MeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum size for the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoQuad_SplitTopoEdgesAtApexPoint"></a>

### *property* MeshWorkflowControl.AutoQuad_SplitTopoEdgesAtApexPoint *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to split topo edges at their apex point when repairing topology.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoQuad_ThinStripesTolerance"></a>

### *property* MeshWorkflowControl.AutoQuad_ThinStripesTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum thin stripe width to be used when defeaturing topology.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoQuad_ZoneThickness"></a>

### *property* MeshWorkflowControl.AutoQuad_ZoneThickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Zone Thickness to be used when converting an all quad mesh to splines.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoRemoveSharpAngleFaces"></a>

### *property* MeshWorkflowControl.AutoRemoveSharpAngleFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to remove sharp angle faces below the specified angle tolerance by merging them to the neighboring faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoRemoveThinFaces"></a>

### *property* MeshWorkflowControl.AutoRemoveThinFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to remove thin faces by merging them with the neighboring faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoRepairEdgesOfFaces"></a>

### *property* MeshWorkflowControl.AutoRepairEdgesOfFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to prevent the collapse and defeature of thin or short topologies, and allow the creation of a coarse mesh while keeping topology as-is.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutoSuppressInteriorEdges"></a>

### *property* MeshWorkflowControl.AutoSuppressInteriorEdges *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to suppress interior edges of scoped faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutomaticExternalScope"></a>

### *property* MeshWorkflowControl.AutomaticExternalScope *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to define programmatically the external scoping method and pattern for the external enclosure. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Axis"></a>

### *property* MeshWorkflowControl.Axis *: Iterable[[Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Axis coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BaseFaceLabel"></a>

### *property* MeshWorkflowControl.BaseFaceLabel *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label to be used for the base face.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BaseFaceScopeDefinition"></a>

### *property* MeshWorkflowControl.BaseFaceScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the base face scoping. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BaseFaceScopeMethod"></a>

### *property* MeshWorkflowControl.BaseFaceScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the base face scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BaseFaceScopeOutcome"></a>

### *property* MeshWorkflowControl.BaseFaceScopeOutcome *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if BaseFaceScopeOutcome is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BaseFaceScopePattern"></a>

### *property* MeshWorkflowControl.BaseFaceScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if BaseFaceScopeOutcome is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BaseToleranceFactor"></a>

### *property* MeshWorkflowControl.BaseToleranceFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the factor applied to the size to derive the base tolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BendingScopeDefinition"></a>

### *property* MeshWorkflowControl.BendingScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the bending scope of the morphing operation. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BendingScopeMethod"></a>

### *property* MeshWorkflowControl.BendingScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the bending scope of the morphing operation. Default: Label

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BendingScopeOutcome"></a>

### *property* MeshWorkflowControl.BendingScopeOutcome *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if BendingScopeDefinition is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BendingScopePattern"></a>

### *property* MeshWorkflowControl.BendingScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if BendingScopeDefinition is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BiasingIntensity"></a>

### *property* MeshWorkflowControl.BiasingIntensity *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the intensity of the biasing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BiasingModality"></a>

### *property* MeshWorkflowControl.BiasingModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MorphingBiasingType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MorphingBiasingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MorphingBiasingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets thebiasing type for the solver operation. Default: Disabled.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BlendToNeighbors"></a>

### *property* MeshWorkflowControl.BlendToNeighbors *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to adjust the sizes on adjacent edges of non-mapped mesh regions. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.BlendType"></a>

### *property* MeshWorkflowControl.BlendType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.BlendType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the blend type. The default value is Automatic.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CameraDirection"></a>

### *property* MeshWorkflowControl.CameraDirection *: Iterable[[float](https://docs.python.org/3/builtins/functions.html#float)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CameraDirection coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CameraName"></a>

### *property* MeshWorkflowControl.CameraName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the name for the given camera.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CameraUp"></a>

### *property* MeshWorkflowControl.CameraUp *: Iterable[[float](https://docs.python.org/3/builtins/functions.html#float)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CameraUp coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CaptureInternalFeatures"></a>

### *property* MeshWorkflowControl.CaptureInternalFeatures *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CaptureInternalFeatures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CartesianCoordinateSystem"></a>

### *property* MeshWorkflowControl.CartesianCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CartesianCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Center"></a>

### *property* MeshWorkflowControl.Center *: Iterable[[Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Center 3D coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CenterPlaneNormalOffset"></a>

### *property* MeshWorkflowControl.CenterPlaneNormalOffset *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

It defines the desired offset of the plane of the hemisphere from the model.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CenterPosition"></a>

### *property* MeshWorkflowControl.CenterPosition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SphereCenterDefinitionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

It is defined by “Centered”, “Minimal”, and “User Defined”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CheckBodyIntersections"></a>

### *property* MeshWorkflowControl.CheckBodyIntersections *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to check for intersections among the scoped bodies. Intersection detection is based on absolute tolerances specified in the Stacker Settings. If not provided, a default absolute tolerance of 0.0 is used.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Children"></a>

### *property* MeshWorkflowControl.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ClsId"></a>

### *property* MeshWorkflowControl.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ClusterLabelPrefix"></a>

### *property* MeshWorkflowControl.ClusterLabelPrefix *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label prefix to be applied to detected clusters for the Detect Clusters control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CollapeUshapeCuspMiddleFaces"></a>

### *property* MeshWorkflowControl.CollapeUshapeCuspMiddleFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to collapse middle faces in U-shaped cusps.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CollapseSliverFaces"></a>

### *property* MeshWorkflowControl.CollapseSliverFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to collapse sliver faces during cleanup.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CollapseUshapeCuspFaceQualityLimit"></a>

### *property* MeshWorkflowControl.CollapseUshapeCuspFaceQualityLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the quality limit for collapsing U-shape cusp middle faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CollidingTolerance"></a>

### *property* MeshWorkflowControl.CollidingTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the tolerance for detecting colliding faces. This is a length value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ColorMode"></a>

### *property* MeshWorkflowControl.ColorMode *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshWorkflowColorMode | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the color mode for image generation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConformalMeshOnContactSurfaces"></a>

### *property* MeshWorkflowControl.ConformalMeshOnContactSurfaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to decide creation of conformal mesh at contact surfaces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConnectIntersectionType"></a>

### *property* MeshWorkflowControl.ConnectIntersectionType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ConnectIntersectionType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the connect intersection type. The default value is AllToAll.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConnectionBaseTolerance"></a>

### *property* MeshWorkflowControl.ConnectionBaseTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the base tolerance for the connection with multiple tolerances.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConnectionSize"></a>

### *property* MeshWorkflowControl.ConnectionSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the edge mesh size used to check the connection.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConnectionTargetTolerance"></a>

### *property* MeshWorkflowControl.ConnectionTargetTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the target tolerance for the connection with multiple tolerances.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConnectionTolerance"></a>

### *property* MeshWorkflowControl.ConnectionTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum gap for the connection.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConstantHeight"></a>

### *property* MeshWorkflowControl.ConstantHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Height of a single layer of mesh elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConsumeAttachments"></a>

### *property* MeshWorkflowControl.ConsumeAttachments *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="MeshWorkflowControl.ContactPairLabelPrefix"></a>

### *property* MeshWorkflowControl.ContactPairLabelPrefix *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label prefix to be used for labeling detected contact pairs.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlDataDefinition"></a>

### *property* MeshWorkflowControl.ControlDataDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlDataDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlDataDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlDataDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to define if the control data is defined by value or by settings.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlDescription"></a>

### *property* MeshWorkflowControl.ControlDescription *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ControlDescription property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlDescriptionJson"></a>

### *property* MeshWorkflowControl.ControlDescriptionJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ControlDescriptionJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlScopeDefinition"></a>

### *property* MeshWorkflowControl.ControlScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the control scope of the morphing operation. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlScopeMethod"></a>

### *property* MeshWorkflowControl.ControlScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the control scope of the morphing operation. Default: Part.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlScopeOutcome"></a>

### *property* MeshWorkflowControl.ControlScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if 'ControlScopeDefinition' is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlScopePattern"></a>

### *property* MeshWorkflowControl.ControlScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'ControlScopeDefinition' is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlString"></a>

### *property* MeshWorkflowControl.ControlString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ControlString.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlType"></a>

### *property* MeshWorkflowControl.ControlType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the type of the control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlTypeInformation"></a>

### *property* MeshWorkflowControl.ControlTypeInformation *: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ControlTypeInformation property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlTypeInformationJson"></a>

### *property* MeshWorkflowControl.ControlTypeInformationJson *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ControlTypeInformationJson property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Coordinate"></a>

### *property* MeshWorkflowControl.Coordinate *: Iterable[[Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CoordinateSystem"></a>

### *property* MeshWorkflowControl.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Coordinate System object used to define the material point location.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CoordinatesDefinition"></a>

### *property* MeshWorkflowControl.CoordinatesDefinition *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CoordinatesDefineByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the location coordinates definition type. The default value is Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CoordinatesDefinition2"></a>

### *property* MeshWorkflowControl.CoordinatesDefinition2 *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CoordinatesDefineByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the second location coordinates definition type. The default value is Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CoordinatesDefinition3"></a>

### *property* MeshWorkflowControl.CoordinatesDefinition3 *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CoordinatesDefineByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the third location coordinates definition type. The default value is Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CoordinatesDefinition4"></a>

### *property* MeshWorkflowControl.CoordinatesDefinition4 *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CoordinatesDefineByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the fourth location coordinates definition type. The default value is Location.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CoplanarAngleTolerance"></a>

### *property* MeshWorkflowControl.CoplanarAngleTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the angle below which the faces are considered coplanar.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateAssemblyComponent"></a>

### *property* MeshWorkflowControl.CreateAssemblyComponent *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CreateAssemblyComponent.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateAssociationAttributes"></a>

### *property* MeshWorkflowControl.CreateAssociationAttributes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to retain the association information on execution. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateFaceZone"></a>

### *property* MeshWorkflowControl.CreateFaceZone *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to create a new face zone.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateGeometry"></a>

### *property* MeshWorkflowControl.CreateGeometry *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CreateGeometry.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateQuadraticElements"></a>

### *property* MeshWorkflowControl.CreateQuadraticElements *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to create quadratic elements. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateQuads"></a>

### *property* MeshWorkflowControl.CreateQuads *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to define the name of the size field to apply to the meshing operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateSolidComponent"></a>

### *property* MeshWorkflowControl.CreateSolidComponent *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CreateSolidComponent.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CuboidCenterModality"></a>

### *property* MeshWorkflowControl.CuboidCenterModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CuboidCenterDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/CuboidCenterDefinitionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CuboidCenterDefinitionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the rule for the computation of the center of the cuboidal enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CuspTrimOneSide"></a>

### *property* MeshWorkflowControl.CuspTrimOneSide *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to trim cusps on one side only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CylinderHeightAxis"></a>

### *property* MeshWorkflowControl.CylinderHeightAxis *: Iterable[[Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the cylinder height axis coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DataModelObjectCategory"></a>

### *property* MeshWorkflowControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DecompositionType"></a>

### *property* MeshWorkflowControl.DecompositionType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DecompositionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/DecompositionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DecompositionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the decomposition type used by the MultiZone mesher. Defaults to “Program Controlled”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DefaultOffsetSize"></a>

### *property* MeshWorkflowControl.DefaultOffsetSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the size of the offset layers to be used during the stack base operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DefeatureTolerance"></a>

### *property* MeshWorkflowControl.DefeatureTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the defeature tolerance applied during meshing. Applicable only if DefeatureToleranceDefineBy is “UserDefined”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DefeatureToleranceDefineBy"></a>

### *property* MeshWorkflowControl.DefeatureToleranceDefineBy *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DefeatureToleranceDefineBy](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/DefeatureToleranceDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DefeatureToleranceDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets how the Defeature Tolerance is defined for the MultiZone mesher. Defaults to  “Program Controlled”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeleteAfterEdgeMerging"></a>

### *property* MeshWorkflowControl.DeleteAfterEdgeMerging *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to delete the common topo node after merging edges. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeleteCollidingFaces"></a>

### *property* MeshWorkflowControl.DeleteCollidingFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to delete the model faces colliding with the enclosure. Default is True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeleteEmptyVolumes"></a>

### *property* MeshWorkflowControl.DeleteEmptyVolumes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to enable or disable the automatic deletion of empty topo volumes  during mesh to topology conversion. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeleteInputScope"></a>

### *property* MeshWorkflowControl.DeleteInputScope *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to delete of input scope after wrapping. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeleteMeshVolumes"></a>

### *property* MeshWorkflowControl.DeleteMeshVolumes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeleteMeshVolumes.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeleteZonePropertiesPropertyExpression"></a>

### *property* MeshWorkflowControl.DeleteZonePropertiesPropertyExpression *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DeleteZonePropertiesPropertyExpression.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Delta"></a>

### *property* MeshWorkflowControl.Delta *: Iterable[[Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Delta coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeltaX"></a>

### *property* MeshWorkflowControl.DeltaX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the x coordinate of the delta attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeltaY"></a>

### *property* MeshWorkflowControl.DeltaY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the y coordinate of the delta attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeltaZ"></a>

### *property* MeshWorkflowControl.DeltaZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the z coordinate of the delta attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DihedralAngle"></a>

### *property* MeshWorkflowControl.DihedralAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The dihedral angle is the angle between the normal vectors of two element faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Direction"></a>

### *property* MeshWorkflowControl.Direction *: Iterable[[float](https://docs.python.org/3/builtins/functions.html#float)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Direction coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DirectionDefinition"></a>

### *property* MeshWorkflowControl.DirectionDefinition *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.DirectionDefineByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the direction definition type. The default value is PickLocation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DirectionX"></a>

### *property* MeshWorkflowControl.DirectionX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the X component of the direction vector, with respect to the Global Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DirectionY"></a>

### *property* MeshWorkflowControl.DirectionY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Y component of the direction vector, with respect to the Global Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DirectionZ"></a>

### *property* MeshWorkflowControl.DirectionZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Z component of the direction vector, with respect to the Global Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DirectoryName"></a>

### *property* MeshWorkflowControl.DirectoryName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DirectoryName.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Distance"></a>

### *property* MeshWorkflowControl.Distance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the distance from the control area considered morphable for the morphing operation. Applicable only if SurfaceScopeModality is set to 'Distance'.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeBiasingDefineBy"></a>

### *property* MeshWorkflowControl.EdgeBiasingDefineBy *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.EdgeBiasingDefineBy](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/EdgeBiasingDefineBy.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.EdgeBiasingDefineBy) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets how the scoped edges meshing size is defined for MultiZone edge biasing. Defaults to NumberOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeBiasingFactor"></a>

### *property* MeshWorkflowControl.EdgeBiasingFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the edge sizing biasing factor. The default value is 1.0.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeBiasingType"></a>

### *property* MeshWorkflowControl.EdgeBiasingType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.EdgeBiasingType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/EdgeBiasingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.EdgeBiasingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of biasing to apply along the scoped edges for MultiZone edge biasing. Defaults to Uniform.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeCleanup"></a>

### *property* MeshWorkflowControl.EdgeCleanup *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EdgeCleanup.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeFeatureFilter"></a>

### *property* MeshWorkflowControl.EdgeFeatureFilter *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.EdgeFeatureFilterType | [None](https://docs.python.org/3/builtins/constants.html#None)*

How scoped edges are filtered on a Scope Label Addition control.
Visible only when  is Edge. Features uses

> as the feature-edge angle.
<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeLabelName"></a>

### *property* MeshWorkflowControl.EdgeLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to rename the default edge label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeMergingMergedEdgesLabel"></a>

### *property* MeshWorkflowControl.EdgeMergingMergedEdgesLabel *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label to be applied to successfully merged edges for identification in subsequent operations.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeMergingScopeDefinition"></a>

### *property* MeshWorkflowControl.EdgeMergingScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the Edge Merging scoping. Defaults to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeMergingScopeMethod"></a>

### *property* MeshWorkflowControl.EdgeMergingScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the Edge Merging scoping. Defaults to Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeMergingScopeOutcome"></a>

### *property* MeshWorkflowControl.EdgeMergingScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation for the Edge Merging scoping. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeMergingScopePattern"></a>

### *property* MeshWorkflowControl.EdgeMergingScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern for the Edge Merging scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeMesherBiasingType"></a>

### *property* MeshWorkflowControl.EdgeMesherBiasingType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.EdgeMesherBiasingType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of biasing to apply along the scoped edges for the EdgeBiasingEdgeMesher control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeSplittingAbsoluteLocationX"></a>

### *property* MeshWorkflowControl.EdgeSplittingAbsoluteLocationX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the X coordinate of the absolute location for edge splitting. Applicable when location type is Absolute.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeSplittingAbsoluteLocationY"></a>

### *property* MeshWorkflowControl.EdgeSplittingAbsoluteLocationY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Y coordinate of the absolute location for edge splitting. Applicable when location type is Absolute.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeSplittingAbsoluteLocationZ"></a>

### *property* MeshWorkflowControl.EdgeSplittingAbsoluteLocationZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Z coordinate of the absolute location for edge splitting. Applicable when location type is Absolute.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeSplittingLocationType"></a>

### *property* MeshWorkflowControl.EdgeSplittingLocationType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.EdgeSplittingLocationType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of location specification for edge splitting. Defaults to Relative.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeSplittingNewEdgeLabelPrefix"></a>

### *property* MeshWorkflowControl.EdgeSplittingNewEdgeLabelPrefix *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label prefix for new edges created during edge splitting. Applicable for UserNames control type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeSplittingNumberOfSegments"></a>

### *property* MeshWorkflowControl.EdgeSplittingNumberOfSegments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of segments to split the edges into. Applicable for NumberOfSegments control type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeSplittingRelativeLocation"></a>

### *property* MeshWorkflowControl.EdgeSplittingRelativeLocation *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the relative location (0.0 to 1.0) along the edge for splitting. Applicable when location type is Relative.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeSplittingScopeDefinition"></a>

### *property* MeshWorkflowControl.EdgeSplittingScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the Edge Splitting scoping. Defaults to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeSplittingScopeMethod"></a>

### *property* MeshWorkflowControl.EdgeSplittingScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the Edge Splitting scoping. Defaults to Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeSplittingScopeOutcome"></a>

### *property* MeshWorkflowControl.EdgeSplittingScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation for the Edge Splitting scoping. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeSplittingScopePattern"></a>

### *property* MeshWorkflowControl.EdgeSplittingScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern for the Edge Splitting scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EditMeshMergedFacesLabel"></a>

### *property* MeshWorkflowControl.EditMeshMergedFacesLabel *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label to be applied to the faces that are merged during the EditMesh operation. Defaults to “MergedFaces”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EditMeshSeparatedFacesLabel"></a>

### *property* MeshWorkflowControl.EditMeshSeparatedFacesLabel *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label to be applied to the faces that are separated during the EditMesh operation. Defaults to “SeparatedFaces”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EditMeshSeparationAngle"></a>

### *property* MeshWorkflowControl.EditMeshSeparationAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the angle above which adjacent face elements are split into separate faces. Defaults to 40 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EditMeshSeparationStrategy"></a>

### *property* MeshWorkflowControl.EditMeshSeparationStrategy *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SeparateFacesStrategyType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or Sets the separation strategy used by the EditMeshSeparateFaces control. Defaults to Angle.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ElementSize"></a>

### *property* MeshWorkflowControl.ElementSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Define element size to achieve desired mesh results. User can achieve coarse, medium, or fine mesh by varying this value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ElementsPerGap"></a>

### *property* MeshWorkflowControl.ElementsPerGap *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimum number of element layers to be generated per gap for the Proximity Sizing control by locally controlling the element size. The element size is defined as the gap size divided by ElementsPerGap, fractional values are supported for defining local element sizes larger than the gap size. The default values is 3.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EllipsoidFirstAxis"></a>

### *property* MeshWorkflowControl.EllipsoidFirstAxis *: Iterable[[Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ellipsoid first axis coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EllipsoidSecondAxis"></a>

### *property* MeshWorkflowControl.EllipsoidSecondAxis *: Iterable[[Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ellipsoid second axis coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EllipsoidThirdAxis"></a>

### *property* MeshWorkflowControl.EllipsoidThirdAxis *: Iterable[[Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ellipsoid third axis coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EnableCheckpoint"></a>

### *property* MeshWorkflowControl.EnableCheckpoint *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CheckpointDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/CheckpointDefinitionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CheckpointDefinitionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Flag whether to enable a checkpoint or not. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EnableSmoothing"></a>

### *property* MeshWorkflowControl.EnableSmoothing *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EnableSmoothing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EnforceConstantRadius"></a>

### *property* MeshWorkflowControl.EnforceConstantRadius *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to enforce a constant radius during morphing operations. Default: False

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EnforceGlobalSymmetry"></a>

### *property* MeshWorkflowControl.EnforceGlobalSymmetry *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to enforce the global symmetry for a planar cyclic region condition.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeEnclosure"></a>

### *property* MeshWorkflowControl.ExcludeEnclosure *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to exclude the enclosure from the wrapper scope . The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeScopeDefinition"></a>

### *property* MeshWorkflowControl.ExcludeScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the Hole Patching exclusion scoping. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeScopeMethod"></a>

### *property* MeshWorkflowControl.ExcludeScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the Hole Patching exclusion scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeScopeOutcome"></a>

### *property* MeshWorkflowControl.ExcludeScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation for the Hole Patching exclusion scoping. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeScopePattern"></a>

### *property* MeshWorkflowControl.ExcludeScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern for the Hole Patching exclusion scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExportBlockingTopology"></a>

### *property* MeshWorkflowControl.ExportBlockingTopology *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to export the MultiZone blocking as a separate Prime part for blocking inspection. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExteriorEdgeLoopScopeDefinition"></a>

### *property* MeshWorkflowControl.ExteriorEdgeLoopScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the Exterior Edge Loop scoping. Defaults to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExteriorEdgeLoopScopeMethod"></a>

### *property* MeshWorkflowControl.ExteriorEdgeLoopScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the Exterior Edge Loop scoping. Defaults to Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExteriorEdgeLoopScopeOutcome"></a>

### *property* MeshWorkflowControl.ExteriorEdgeLoopScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation for the Exterior Edge Loop scoping. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExteriorEdgeLoopScopePattern"></a>

### *property* MeshWorkflowControl.ExteriorEdgeLoopScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern for the Exterior Edge Loop scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalLabelName"></a>

### *property* MeshWorkflowControl.ExternalLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to rename the default external label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopeDefinition"></a>

### *property* MeshWorkflowControl.ExternalScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

It is defined by value or outcome depending on if the External scope is defined manual by the user or defined based on a previous outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopeMethod"></a>

### *property* MeshWorkflowControl.ExternalScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The method can be label/zone/part and it is applied to external region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopeOutcome"></a>

### *property* MeshWorkflowControl.ExternalScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopePattern"></a>

### *property* MeshWorkflowControl.ExternalScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExtractFeatureEdges"></a>

### *property* MeshWorkflowControl.ExtractFeatureEdges *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to extract automatically the feature edges after the operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExtrusionGridType"></a>

### *property* MeshWorkflowControl.ExtrusionGridType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ExtrusionGridType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the extrusion grid type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceMergingMergeFaceNormalsAngle"></a>

### *property* MeshWorkflowControl.FaceMergingMergeFaceNormalsAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum angle between face normals for merging. Defaults to 30 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceMergingRetainExistingMesh"></a>

### *property* MeshWorkflowControl.FaceMergingRetainExistingMesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to retain the existing mesh after merging faces. When false (default), the mesh on the merged faces is discarded.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceSplittingEdgeNamePrefix"></a>

### *property* MeshWorkflowControl.FaceSplittingEdgeNamePrefix *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label prefix for new edges created during face splitting. Defaults to “split_edges”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceSplittingFaceNamePrefix"></a>

### *property* MeshWorkflowControl.FaceSplittingFaceNamePrefix *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label prefix for new faces created during face splitting. Defaults to “split_faces”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceSplittingNodeNamePrefix"></a>

### *property* MeshWorkflowControl.FaceSplittingNodeNamePrefix *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label prefix for new nodes created during face splitting. Defaults to “split_nodes”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceSplittingThreeVerticesThirdVertexX"></a>

### *property* MeshWorkflowControl.FaceSplittingThreeVerticesThirdVertexX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the X coordinate of the third vertex for face splitting. Defaults to 0.0.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceSplittingThreeVerticesThirdVertexY"></a>

### *property* MeshWorkflowControl.FaceSplittingThreeVerticesThirdVertexY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Y coordinate of the third vertex for face splitting. Defaults to 0.0.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceSplittingThreeVerticesThirdVertexZ"></a>

### *property* MeshWorkflowControl.FaceSplittingThreeVerticesThirdVertexZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Z coordinate of the third vertex for face splitting. Defaults to 0.0.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceSplittingTwoVerticesFirstVertexX"></a>

### *property* MeshWorkflowControl.FaceSplittingTwoVerticesFirstVertexX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the X coordinate of the first vertex for face splitting. Defaults to 0.0.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceSplittingTwoVerticesFirstVertexY"></a>

### *property* MeshWorkflowControl.FaceSplittingTwoVerticesFirstVertexY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Y coordinate of the first vertex for face splitting. Defaults to 0.0.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceSplittingTwoVerticesFirstVertexZ"></a>

### *property* MeshWorkflowControl.FaceSplittingTwoVerticesFirstVertexZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Z coordinate of the first vertex for face splitting. Defaults to 0.0.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceSplittingTwoVerticesSecondVertexX"></a>

### *property* MeshWorkflowControl.FaceSplittingTwoVerticesSecondVertexX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the X coordinate of the second vertex for face splitting. Defaults to 0.0.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceSplittingTwoVerticesSecondVertexY"></a>

### *property* MeshWorkflowControl.FaceSplittingTwoVerticesSecondVertexY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Y coordinate of the second vertex for face splitting. Defaults to 0.0.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceSplittingTwoVerticesSecondVertexZ"></a>

### *property* MeshWorkflowControl.FaceSplittingTwoVerticesSecondVertexZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Z coordinate of the second vertex for face splitting. Defaults to 0.0.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceZoneByPart"></a>

### *property* MeshWorkflowControl.FaceZoneByPart *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to define an independent face zone for each input part.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceZoneName"></a>

### *property* MeshWorkflowControl.FaceZoneName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to define the name of the default face zone name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FacesWithSkewedElementsLabelName"></a>

### *property* MeshWorkflowControl.FacesWithSkewedElementsLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the name to use when creating labels based on faces with skewed elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FacetQuality"></a>

### *property* MeshWorkflowControl.FacetQuality *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.FacetQualityLevelType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets faceting quality level for faceting on execution.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FeatureSize"></a>

### *property* MeshWorkflowControl.FeatureSize *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FeatureSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FieldName"></a>

### *property* MeshWorkflowControl.FieldName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Figures"></a>

### *property* MeshWorkflowControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FileFilter"></a>

### *property* MeshWorkflowControl.FileFilter *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FileFilter.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Filename"></a>

### *property* MeshWorkflowControl.Filename *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Assign full path to the filename would like to Import/Export.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Filenames"></a>

### *property* MeshWorkflowControl.Filenames *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Assign paths with '|' seperator to this property to read multiple files, pass without seperator if single file.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FirstLayerAspectRatio"></a>

### *property* MeshWorkflowControl.FirstLayerAspectRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FirstLayerAspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FirstLayerHeight"></a>

### *property* MeshWorkflowControl.FirstLayerHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FirstLayerHeight.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FixFolds"></a>

### *property* MeshWorkflowControl.FixFolds *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to fix folds in the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FixSteps"></a>

### *property* MeshWorkflowControl.FixSteps *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to fix steps in the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FixedScopeDefinition"></a>

### *property* MeshWorkflowControl.FixedScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the fixed scope of the morphing operation. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FixedScopeMethod"></a>

### *property* MeshWorkflowControl.FixedScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the fixed scope of the morphing operation. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FixedScopeOutcome"></a>

### *property* MeshWorkflowControl.FixedScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if 'FixedScopeDefinition' is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FixedScopePattern"></a>

### *property* MeshWorkflowControl.FixedScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'FixedScopeDefinition' is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ForceDisplacementBasedRecording"></a>

### *property* MeshWorkflowControl.ForceDisplacementBasedRecording *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to force displacement-based recording for the morphing operation. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ForceSubMapping"></a>

### *property* MeshWorkflowControl.ForceSubMapping *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to force a sub-mapped mesh by automatically setting mapped mesh vertex types on the scoped faces. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeEdgesLabelName"></a>

### *property* MeshWorkflowControl.FreeEdgesLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to free edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeFaceMeshType"></a>

### *property* MeshWorkflowControl.FreeFaceMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.FreeFaceMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/FreeFaceMeshType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.FreeFaceMeshType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of elements for the MultiZone mesher free face mesh. Defaults to “All Quads”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeMeshScopeDefinition"></a>

### *property* MeshWorkflowControl.FreeMeshScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the Free Mesh scoping. Default: Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeMeshScopeMethod"></a>

### *property* MeshWorkflowControl.FreeMeshScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the Free Mesh scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeMeshScopeOutcome"></a>

### *property* MeshWorkflowControl.FreeMeshScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome for Free Mesh scoping from a previous operation. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeMeshScopePattern"></a>

### *property* MeshWorkflowControl.FreeMeshScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the zone or label name pattern that defines the Free Mesh scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreeVolumeMeshType"></a>

### *property* MeshWorkflowControl.FreeVolumeMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.FreeVolumeMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/FreeVolumeMeshType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.FreeVolumeMeshType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets how free mesh blocks should be treated by the MultiZone meshing algorithm. Defaults to “NotAllowed”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FreezeBoundaryNodes"></a>

### *property* MeshWorkflowControl.FreezeBoundaryNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to freeze the boundary nodes when the improvement of the volume mesh is executed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FuseBaseTolerance"></a>

### *property* MeshWorkflowControl.FuseBaseTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the base tolerance for the fuse with multiple tolerances.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FuseTargetTolerance"></a>

### *property* MeshWorkflowControl.FuseTargetTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the target tolerance for the fuse with multiple tolerances.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GapTolerance"></a>

### *property* MeshWorkflowControl.GapTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GeometryFidelity"></a>

### *property* MeshWorkflowControl.GeometryFidelity *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometryFidelity.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GroupVolumes"></a>

### *property* MeshWorkflowControl.GroupVolumes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GroupVolumes.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GroupingFolder"></a>

### *property* MeshWorkflowControl.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GrowthRate"></a>

### *property* MeshWorkflowControl.GrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gradient of element size as each layer grows.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HardTargetSkewness"></a>

### *property* MeshWorkflowControl.HardTargetSkewness *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the hard target value for skewness quality metric.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HemisphereCenterModality"></a>

### *property* MeshWorkflowControl.HemisphereCenterModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.HemisphereCenterDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/HemisphereCenterDefinitionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.HemisphereCenterDefinitionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to define the rule for the computation of the center of the hemispherical enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HemisphereOrientationModality"></a>

### *property* MeshWorkflowControl.HemisphereOrientationModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.HemisphereOrientationDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/HemisphereOrientationDefinitionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.HemisphereOrientationDefinitionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to define the rule for the computation of the orientation of the hemispherical enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HexcoreTetLayerRelativeWidth"></a>

### *property* MeshWorkflowControl.HexcoreTetLayerRelativeWidth *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the gap ratio, relative to the surface mesh size, between the volume mesh hexahedral core and the geometry surface. Default is 0.25.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HighBoundaryScopeDefinition"></a>

### *property* MeshWorkflowControl.HighBoundaryScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope definition type for the high boundary scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HighBoundaryScopeMethod"></a>

### *property* MeshWorkflowControl.HighBoundaryScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope method for the high boundary scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HighBoundaryScopeOutcome"></a>

### *property* MeshWorkflowControl.HighBoundaryScopeOutcome *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome for the high boundary scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HighBoundaryScopePattern"></a>

### *property* MeshWorkflowControl.HighBoundaryScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope pattern for the high boundary scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HighPeriodicFacesScopeDefinition"></a>

### *property* MeshWorkflowControl.HighPeriodicFacesScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the High Periodic Faces scoping. Defaults to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HighPeriodicFacesScopeMethod"></a>

### *property* MeshWorkflowControl.HighPeriodicFacesScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the High Periodic Faces scoping. Defaults to Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HighPeriodicFacesScopeOutcome"></a>

### *property* MeshWorkflowControl.HighPeriodicFacesScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation for the High Periodic Faces scoping. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HighPeriodicFacesScopePattern"></a>

### *property* MeshWorkflowControl.HighPeriodicFacesScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern for the High Periodic Faces scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HorizontalScopeOutcome"></a>

### *property* MeshWorkflowControl.HorizontalScopeOutcome *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HorizontalScopeOutcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HorizontalScopePattern"></a>

### *property* MeshWorkflowControl.HorizontalScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HorizontalScopePattern.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IconName"></a>

### *property* MeshWorkflowControl.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IgnoreOrientation"></a>

### *property* MeshWorkflowControl.IgnoreOrientation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to ignore the face normal orientation while calculating the proximity for the Proximity Sizing control. The default value is False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IgnoreSelfProximity"></a>

### *property* MeshWorkflowControl.IgnoreSelfProximity *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to ignore the proximity between two faces from the same face zone while calculating the proximity for the Proximity Sizing control. The default value is True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IgnoreSolidNames"></a>

### *property* MeshWorkflowControl.IgnoreSolidNames *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IgnoreSolidNames.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ImageDirectory"></a>

### *property* MeshWorkflowControl.ImageDirectory *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the directory used for storing the generated image files.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ImageFilenamePattern"></a>

### *property* MeshWorkflowControl.ImageFilenamePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the filename pattern used for naming the generated image files. The following placeholders can be used and will be replaced automatically: ${cameraname}, ${partname}, ${partid}.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ImageHeight"></a>

### *property* MeshWorkflowControl.ImageHeight *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the height of the generated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ImageWidth"></a>

### *property* MeshWorkflowControl.ImageWidth *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the width of the generated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Images"></a>

### *property* MeshWorkflowControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ImportSourceType"></a>

### *property* MeshWorkflowControl.ImportSourceType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshWorkflowImportModalityType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ImportSourceType.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IncompleteBoundariesLabelName"></a>

### *property* MeshWorkflowControl.IncompleteBoundariesLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to faces with incomplete boundaries.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InflationBoundaryScopeDefinition"></a>

### *property* MeshWorkflowControl.InflationBoundaryScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the Inflation Boundary scoping. Default: Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InflationBoundaryScopeMethod"></a>

### *property* MeshWorkflowControl.InflationBoundaryScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the Inflation Boundary scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InflationBoundaryScopeOutcome"></a>

### *property* MeshWorkflowControl.InflationBoundaryScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome for Inflation Boundary scoping from a previous operation. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InflationBoundaryScopePattern"></a>

### *property* MeshWorkflowControl.InflationBoundaryScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the zone or label name pattern that defines the Inflation Boundary scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InflationDomainScopeDefinition"></a>

### *property* MeshWorkflowControl.InflationDomainScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the Inflation Domain scoping. Default: Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InflationDomainScopeMethod"></a>

### *property* MeshWorkflowControl.InflationDomainScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the Inflation Domain scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InflationDomainScopeOutcome"></a>

### *property* MeshWorkflowControl.InflationDomainScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome for Inflation Domain scoping from a previous operation. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InflationDomainScopePattern"></a>

### *property* MeshWorkflowControl.InflationDomainScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the zone or label name pattern that defines the Inflation Domain scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InflationFirstLayerHeight"></a>

### *property* MeshWorkflowControl.InflationFirstLayerHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the height of the first inflation layer.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InflationGrowthRate"></a>

### *property* MeshWorkflowControl.InflationGrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets gradient of layer height.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InflationMaximumLayers"></a>

### *property* MeshWorkflowControl.InflationMaximumLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum number of inflation layers.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopeDefinition"></a>

### *property* MeshWorkflowControl.InnerScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

It is defined by value or outcome depending on if the Inner scope is defined manually by the user or defined based on a previous outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopeMethod"></a>

### *property* MeshWorkflowControl.InnerScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The method can be label/zone/part and it is applied to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopeOutcome"></a>

### *property* MeshWorkflowControl.InnerScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopePattern"></a>

### *property* MeshWorkflowControl.InnerScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InputMeshScopeDefinition"></a>

### *property* MeshWorkflowControl.InputMeshScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the Input Mesh scoping. Default: Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InputMeshScopeMethod"></a>

### *property* MeshWorkflowControl.InputMeshScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the Input Mesh scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InputMeshScopeOutcome"></a>

### *property* MeshWorkflowControl.InputMeshScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome for Input Mesh scoping from a previous operation. Applicable only if InputMeshScopeDefinition is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InputMeshScopePattern"></a>

### *property* MeshWorkflowControl.InputMeshScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the zone or label name pattern that defines the Input Mesh scoping. Applicable only if InputMeshScopeDefinition is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InteriorEdgeLoopScopeDefinition"></a>

### *property* MeshWorkflowControl.InteriorEdgeLoopScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the Interior Edge Loop scoping. Defaults to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InteriorEdgeLoopScopeMethod"></a>

### *property* MeshWorkflowControl.InteriorEdgeLoopScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the Interior Edge Loop scoping. Defaults to Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InteriorEdgeLoopScopeOutcome"></a>

### *property* MeshWorkflowControl.InteriorEdgeLoopScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation for the Interior Edge Loop scoping. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InteriorEdgeLoopScopePattern"></a>

### *property* MeshWorkflowControl.InteriorEdgeLoopScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern for the Interior Edge Loop scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InternalLabelName"></a>

### *property* MeshWorkflowControl.InternalLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to rename the default Internal label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InternalObject"></a>

### *property* MeshWorkflowControl.InternalObject *: Ansys.Common.Interop.DSMeshWorkflowObjects.IDSMeshWorkflowControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IntersectingFaceTolerance"></a>

### *property* MeshWorkflowControl.IntersectingFaceTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimum angle used in finding thin stripes with topology diagnostics. Defaults to 25 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IntersectingPairsLabelName"></a>

### *property* MeshWorkflowControl.IntersectingPairsLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to intersecting pairs of faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InvalidBoundariesLabelName"></a>

### *property* MeshWorkflowControl.InvalidBoundariesLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to faces with invalid boundary orientation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.JacobianRatioCornerNodesValidationErrorLimit"></a>

### *property* MeshWorkflowControl.JacobianRatioCornerNodesValidationErrorLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Jacobian ratio (corner nodes) validation error limit.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.JacobianRatioCornerNodesValidationWarningLimit"></a>

### *property* MeshWorkflowControl.JacobianRatioCornerNodesValidationWarningLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Jacobian ratio (corner nodes) validation warning limit.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.JacobianRatioGaussPointsValidationErrorLimit"></a>

### *property* MeshWorkflowControl.JacobianRatioGaussPointsValidationErrorLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Jacobian ratio (gauss points) validation error limit.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.JacobianRatioGaussPointsValidationWarningLimit"></a>

### *property* MeshWorkflowControl.JacobianRatioGaussPointsValidationWarningLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Jacobian ratio (gauss points) validation warning limit.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.JacobianRatioMAPDLValidationErrorLimit"></a>

### *property* MeshWorkflowControl.JacobianRatioMAPDLValidationErrorLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Jacobian ratio (MAPDL) validation error limit.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.JacobianRatioMAPDLValidationWarningLimit"></a>

### *property* MeshWorkflowControl.JacobianRatioMAPDLValidationWarningLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Jacobian ratio (MAPDL) validation warning limit.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.KeepSmallFreeFaces"></a>

### *property* MeshWorkflowControl.KeepSmallFreeFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to keep small free faces during cleanup.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LabelAdditionExpression"></a>

### *property* MeshWorkflowControl.LabelAdditionExpression *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the expression set algebra expression used in a LabelAdditionByExpression control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LabelAdditionExpressionVariable"></a>

### *property* MeshWorkflowControl.LabelAdditionExpressionVariable *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the expression variable name associated to entities identified by a label addition control. These variables can be referenced in a LabelAdditionByExpression control to create labels based on expressions. Valid variable names do not contain whitespaces or any of the following characters “&, 

```
|
```

, ^, !, (, )”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LabelName"></a>

### *property* MeshWorkflowControl.LabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to rename the default label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LabelPattern"></a>

### *property* MeshWorkflowControl.LabelPattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label pattern applied for label removal. This property expects a regular expression pattern to match labels that should be removed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LastLayerAspectRatio"></a>

### *property* MeshWorkflowControl.LastLayerAspectRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LastLayerAspectRatio.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LateralDefeatureSize"></a>

### *property* MeshWorkflowControl.LateralDefeatureSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the defeature size to be used along the lateral direction of stacking.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LocalRemesh"></a>

### *property* MeshWorkflowControl.LocalRemesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LocalRemesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Location"></a>

### *property* MeshWorkflowControl.Location *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the location attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LowBoundaryScopeDefinition"></a>

### *property* MeshWorkflowControl.LowBoundaryScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope definition type for the low boundary scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LowBoundaryScopeMethod"></a>

### *property* MeshWorkflowControl.LowBoundaryScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope method for the low boundary scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LowBoundaryScopeOutcome"></a>

### *property* MeshWorkflowControl.LowBoundaryScopeOutcome *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome for the low boundary scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LowBoundaryScopePattern"></a>

### *property* MeshWorkflowControl.LowBoundaryScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope pattern for the low boundary scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LowPeriodicFacesScopeDefinition"></a>

### *property* MeshWorkflowControl.LowPeriodicFacesScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the Low Periodic Faces scoping. Defaults to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LowPeriodicFacesScopeMethod"></a>

### *property* MeshWorkflowControl.LowPeriodicFacesScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the Low Periodic Faces scoping. Defaults to Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LowPeriodicFacesScopeOutcome"></a>

### *property* MeshWorkflowControl.LowPeriodicFacesScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation for the Low Periodic Faces scoping. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LowPeriodicFacesScopePattern"></a>

### *property* MeshWorkflowControl.LowPeriodicFacesScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern for the Low Periodic Faces scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ManageTangentEdges"></a>

### *property* MeshWorkflowControl.ManageTangentEdges *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the attribute to manage tangent edges connection for the connection control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MappedBlocksSplitAngle"></a>

### *property* MeshWorkflowControl.MappedBlocksSplitAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the split angle to be used for introducing extra splits in the mapped blocks when UseMappedBlocksSplitAngle is True. Defaults to 60 degrees, valid range is [0 degrees, 180 degrees]. ArgumentException is thrown for out-of-range values.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MatchBoundaries"></a>

### *property* MeshWorkflowControl.MatchBoundaries *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to match boundaries on the core side.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MatchControlRotationAngle"></a>

### *property* MeshWorkflowControl.MatchControlRotationAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the periodic rotation angle for a Cyclic MatchControlMultiZoneMesher control. Defaults to 90 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MatchControlType"></a>

### *property* MeshWorkflowControl.MatchControlType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MatchControlType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or Sets the Match Control type used by the MatchControlMultiZoneMesher control. Defaults to Translation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MatchEdgeSpacing"></a>

### *property* MeshWorkflowControl.MatchEdgeSpacing *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the mesh spacing on a block edge is adjusted with respect to the spacing on adjacent block edges. Defaults to True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MatchMorph_NumberOfIterations"></a>

### *property* MeshWorkflowControl.MatchMorph_NumberOfIterations *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximal number of iterations for the match morphing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Material"></a>

### *property* MeshWorkflowControl.Material *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaterialName"></a>

### *property* MeshWorkflowControl.MaterialName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Material Name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaterialPointDefinition"></a>

### *property* MeshWorkflowControl.MaterialPointDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointDefineByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MaterialPointDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the material point definition type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaterialPointType"></a>

### *property* MeshWorkflowControl.MaterialPointType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MaterialPointType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

It defines the type of material point, it can be “Include” or “Exclude”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaxEdgeLength"></a>

### *property* MeshWorkflowControl.MaxEdgeLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets max edge length to be used for faceting on execution.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaxHoleSize"></a>

### *property* MeshWorkflowControl.MaxHoleSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum size of holes to be considered for Wrapper Leak Prevention and Hole Patching.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaxIterations"></a>

### *property* MeshWorkflowControl.MaxIterations *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaxIterations .

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaxSize"></a>

### *property* MeshWorkflowControl.MaxSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum size to be used for the volumetric size field sizing computation in the Proximity Sizing and Curvature Sizing controls. This is a length value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaximumFilletRadius"></a>

### *property* MeshWorkflowControl.MaximumFilletRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum fillet radius to detect fillets.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MergeAcrossParts"></a>

### *property* MeshWorkflowControl.MergeAcrossParts *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to merge across parts during the resolution of the surface overlaps.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MergeNodesTolerance"></a>

### *property* MeshWorkflowControl.MergeNodesTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the tolerance within which nodes are to be merged.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MergeNodesToleranceType"></a>

### *property* MeshWorkflowControl.MergeNodesToleranceType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MergeNodesToleranceType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MergeNodesToleranceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MergeNodesToleranceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the merge nodes tolerance type to be used when executing Merge Nodes operation. The default value is Absolute.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MergeOverlappingFaces"></a>

### *property* MeshWorkflowControl.MergeOverlappingFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to merge overlapping faces after connect. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MergeReplicatedBodies"></a>

### *property* MeshWorkflowControl.MergeReplicatedBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to merge the replicated bodies with their corresponding original bodies. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MergeSideFaces"></a>

### *property* MeshWorkflowControl.MergeSideFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to merge the side faces after the extrusion.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshCheckValidationCheckFaceAreas"></a>

### *property* MeshWorkflowControl.MeshCheckValidationCheckFaceAreas *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to check face areas while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshCheckValidationCheckFaceHandedness"></a>

### *property* MeshWorkflowControl.MeshCheckValidationCheckFaceHandedness *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to check face handedness while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshCheckValidationCheckShape"></a>

### *property* MeshWorkflowControl.MeshCheckValidationCheckShape *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to check shape while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshCheckValidationCheckVolumes"></a>

### *property* MeshWorkflowControl.MeshCheckValidationCheckVolumes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to check volumes while validating the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshEntityType"></a>

### *property* MeshWorkflowControl.MeshEntityType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshEntityType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MeshEntityType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshEntityType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the target mesh entity type. The default value is Face.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshFlowControl"></a>

### *property* MeshWorkflowControl.MeshFlowControl *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshFlowControl](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MeshFlowControl.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshFlowControl) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property gives control over the flow of mesh during surface mesh generation. The supported modes are None, and Global Cartesian.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshGenerationType"></a>

### *property* MeshWorkflowControl.MeshGenerationType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALEMeshGenerationType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the mesh generation type. The default value is Full.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshedSurfaceLabelSuffix"></a>

### *property* MeshWorkflowControl.MeshedSurfaceLabelSuffix *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the suffix to be used when defining labels scoped to faces meshed by the MultiZone mesher.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshedVolumeLabelSuffix"></a>

### *property* MeshWorkflowControl.MeshedVolumeLabelSuffix *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the suffix to be used when defining labels scoped to volumes meshed by the MultiZone mesher. Defaults to “MultiZoneMesh”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinSize"></a>

### *property* MeshWorkflowControl.MinSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimum size to be used for the volumetric size field sizing computation in the Proximity Sizing and Curvature Sizing controls. This is a length value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinimalAbsoluteDistance"></a>

### *property* MeshWorkflowControl.MinimalAbsoluteDistance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimal distance of the enclosure from the input faces as absolute distance. The physically larger resulting distance between 'MinimalNumberOfVolumetricLayers' and 'MinimalAbsoluteDistance' will be used as the effective gap distance. Default is 0.0.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinimalNumberOfVolumetricLayers"></a>

### *property* MeshWorkflowControl.MinimalNumberOfVolumetricLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimal distance of the enclosure from the input faces as a multiple of the size of the volumetric elements. The physically larger resulting distance between 'MinimalNumberOfVolumetricLayers' and 'MinimalAbsoluteDistance' or 'MinimalRadius' will be used as the effective gap distance. Default is 2.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinimalRadius"></a>

### *property* MeshWorkflowControl.MinimalRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

It defines the desired minimal radius of the spherical enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinimumBodiesPerCluster"></a>

### *property* MeshWorkflowControl.MinimumBodiesPerCluster *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimum number of bodies required per cluster for the Detect Clusters control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinimumFilletRadius"></a>

### *property* MeshWorkflowControl.MinimumFilletRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimum fillet radius to detect fillets.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MissingBoundariesLabelName"></a>

### *property* MeshWorkflowControl.MissingBoundariesLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to faces with missing boundaries.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphFieldDefinition"></a>

### *property* MeshWorkflowControl.MorphFieldDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphFieldOutcome"></a>

### *property* MeshWorkflowControl.MorphFieldOutcome *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MorphFieldOutcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphMidSideNodes"></a>

### *property* MeshWorkflowControl.MorphMidSideNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to apply morphing on the model based on the mid nodes displacements after the projection on the underlying geometry.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphRecordingName"></a>

### *property* MeshWorkflowControl.MorphRecordingName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to define the name for matching the morphing recording to apply to the meshing operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphSolverModality"></a>

### *property* MeshWorkflowControl.MorphSolverModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MorphingSolverType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MorphingSolverType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MorphingSolverType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the solver type for the morphing operation. Default: Fast.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphableScopeDefinition"></a>

### *property* MeshWorkflowControl.MorphableScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the morphable scope of the morphing operation. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphableScopeMethod"></a>

### *property* MeshWorkflowControl.MorphableScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the morphable scope of the morphing operation. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphableScopeOutcome"></a>

### *property* MeshWorkflowControl.MorphableScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if 'MorphableScopeDefinition' is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphableScopePattern"></a>

### *property* MeshWorkflowControl.MorphableScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'MorphableScopeDefinition' is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MultiEdgesLabelName"></a>

### *property* MeshWorkflowControl.MultiEdgesLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to multi edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Name"></a>

### *property* MeshWorkflowControl.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Names"></a>

### *property* MeshWorkflowControl.Names *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Names.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NewSplittingInterfaceLabelPrefix"></a>

### *property* MeshWorkflowControl.NewSplittingInterfaceLabelPrefix *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to rename the default label generated for the added topological entities.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NewVolumeLabelPrefix"></a>

### *property* MeshWorkflowControl.NewVolumeLabelPrefix *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to rename the default label generated for the new volume.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NormalAngle"></a>

### *property* MeshWorkflowControl.NormalAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum allowed normal angle between neighboring elements when computing curvature for the Curvature Sizing control. This value must be between 0 and 180 degrees (0 to π) and defaults to 18 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NormalAngleTolerance"></a>

### *property* MeshWorkflowControl.NormalAngleTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets normal tolerance to be used for faceting on execution.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfAttempts"></a>

### *property* MeshWorkflowControl.NumberOfAttempts *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Number of attempts for mesh convergence.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfDivisions"></a>

### *property* MeshWorkflowControl.NumberOfDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of divisions for the scoped edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfLayers"></a>

### *property* MeshWorkflowControl.NumberOfLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Number of layers of mesh elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfPlanarCuts"></a>

### *property* MeshWorkflowControl.NumberOfPlanarCuts *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to define the number of planar cuts for the automatic planar cut control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfRadialDivisions"></a>

### *property* MeshWorkflowControl.NumberOfRadialDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of radial divisions to apply to scoped faces having two concentric boundary loops. Defaults to 0. ArgumentException is thrown for negative values.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfRings"></a>

### *property* MeshWorkflowControl.NumberOfRings *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of neighbor rings to consider as morphable for the morphing operation. Applicable only if SurfaceScopeModality is 'Rings'.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfSolverIterations"></a>

### *property* MeshWorkflowControl.NumberOfSolverIterations *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of iterations for the solver of the morphing operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfThreads"></a>

### *property* MeshWorkflowControl.NumberOfThreads *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NumberOfThreads.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumenAlignTriEdgeMesh"></a>

### *property* MeshWorkflowControl.NumenAlignTriEdgeMesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether triangular mesh edges are aligned with geometric features. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumenEnforceEdgeLoopMinElementCount"></a>

### *property* MeshWorkflowControl.NumenEnforceEdgeLoopMinElementCount *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether edge remeshing is enforced to satisfy the minimum element count for bounding loops. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumenRBFInterpolation"></a>

### *property* MeshWorkflowControl.NumenRBFInterpolation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether RBF interpolation retry is used in robust mode for failed patches. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumenRobustMode"></a>

### *property* MeshWorkflowControl.NumenRobustMode *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to use additional recovery strategies to handle difficult geometries. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumenStitchFailedSliverTopofaces"></a>

### *property* MeshWorkflowControl.NumenStitchFailedSliverTopofaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether failed sliver topofaces are stitched in robust mode. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumenStitchMeshedFacetsOfFailedTopofaces"></a>

### *property* MeshWorkflowControl.NumenStitchMeshedFacetsOfFailedTopofaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether meshed facets of failed topofaces are stitched in robust mode. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumenStopOnFailure"></a>

### *property* MeshWorkflowControl.NumenStopOnFailure *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether meshing stops immediately when any part fails to mesh. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ObjectId"></a>

### *property* MeshWorkflowControl.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ObjectState"></a>

### *property* MeshWorkflowControl.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ObjectTags"></a>

### *property* MeshWorkflowControl.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OffsetDistance"></a>

### *property* MeshWorkflowControl.OffsetDistance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the offset distance attribute of the corresponding direct morphing control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OffsetFileName"></a>

### *property* MeshWorkflowControl.OffsetFileName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the full file path to the .csv file containing the offset coordinates for replication.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OffsetType"></a>

### *property* MeshWorkflowControl.OffsetType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.PrismOffsetType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OffsetType.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OpenEnclosure"></a>

### *property* MeshWorkflowControl.OpenEnclosure *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether an open enclosure is required. Default is False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OrbitCameraDivisions"></a>

### *property* MeshWorkflowControl.OrbitCameraDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of shots the orbit camera takes around the up axis. Defaults to 4.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Origin"></a>

### *property* MeshWorkflowControl.Origin *: Iterable[[Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the origin coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OriginX"></a>

### *property* MeshWorkflowControl.OriginX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the X coordinate of origin (location of base face) in the volume flattening step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OriginY"></a>

### *property* MeshWorkflowControl.OriginY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Y coordinate of origin (location of base face) in the volume flattening step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OriginZ"></a>

### *property* MeshWorkflowControl.OriginZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Z coordinate of origin (location of base face) in the volume flattening step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OverlapTolerance"></a>

### *property* MeshWorkflowControl.OverlapTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OverlapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OverlappingFaceTolerance"></a>

### *property* MeshWorkflowControl.OverlappingFaceTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the tolerance for the minimum overlap distance used in finding overlapping faces with topology diagnostics.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OverlappingFacesLabelName"></a>

### *property* MeshWorkflowControl.OverlappingFacesLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to overlapping faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OverlapsBaseTolerance"></a>

### *property* MeshWorkflowControl.OverlapsBaseTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the base tolerance value to be used to detect the overlaps to resolve.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.OverlapsTargetTolerance"></a>

### *property* MeshWorkflowControl.OverlapsTargetTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the target tolerance value to be used to detect the overlaps to resolve.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Parent"></a>

### *property* MeshWorkflowControl.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PartName"></a>

### *property* MeshWorkflowControl.PartName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part name to be used when generating.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PercentageIncrement"></a>

### *property* MeshWorkflowControl.PercentageIncrement *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The number of volumetric Layers determines the number of layers. This property decides whether all the layers are an equal size (default 0.0) or they should gradually increase the size of volume element than previous element.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PercentageSmoothing"></a>

### *property* MeshWorkflowControl.PercentageSmoothing *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PercentageSmoothing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PinchCornerAngleTolerance"></a>

### *property* MeshWorkflowControl.PinchCornerAngleTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the corner angle tolerance value to use when pinching faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PlaneDefineByType"></a>

### *property* MeshWorkflowControl.PlaneDefineByType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.PlaneDefineByType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets how the splitting plane is defined: by a point and normal axis, or by three points. Defaults to PointAndNormal.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PrescribeInternalFaceHintsNodes"></a>

### *property* MeshWorkflowControl.PrescribeInternalFaceHintsNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to prescribe internal face hints nodes during match morphing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PrescribedPointsFileName"></a>

### *property* MeshWorkflowControl.PrescribedPointsFileName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the path to the file containing the prescribed points locations. The data must be in csv format.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PreserveBoundary"></a>

### *property* MeshWorkflowControl.PreserveBoundary *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to preserve the boundary or not. If true, adding a prescribed point which causes a deformation of the volume boundary will result in a failure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PreserveBoundaryLayers"></a>

### *property* MeshWorkflowControl.PreserveBoundaryLayers *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PreserveBoundaryLayers.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PreserveCornerVertices"></a>

### *property* MeshWorkflowControl.PreserveCornerVertices *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to preserve corner vertices when pinching faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PreserveFeatures"></a>

### *property* MeshWorkflowControl.PreserveFeatures *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to preserve the feature edges or not. If true, adding a prescribed point which causes a deformation of the feature edges will result in a failure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProjectOnGeometry"></a>

### *property* MeshWorkflowControl.ProjectOnGeometry *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to project the mesh on the underlying geometry.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProjectSideFaces"></a>

### *property* MeshWorkflowControl.ProjectSideFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to project the side faces after the extrusion.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Properties"></a>

### *property* MeshWorkflowControl.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PropertyName"></a>

### *property* MeshWorkflowControl.PropertyName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PropertyName.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PropertyValue"></a>

### *property* MeshWorkflowControl.PropertyValue *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PropertyValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProtectOnlyBoundaries"></a>

### *property* MeshWorkflowControl.ProtectOnlyBoundaries *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the topology protection flag is applied only to the exterior boundary of the scoped boundaries or not. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProtectedEdgesScopeDefinition"></a>

### *property* MeshWorkflowControl.ProtectedEdgesScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope definition type for the protected edges scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProtectedEdgesScopeMethod"></a>

### *property* MeshWorkflowControl.ProtectedEdgesScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope method for the protected edges scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProtectedEdgesScopeOutcome"></a>

### *property* MeshWorkflowControl.ProtectedEdgesScopeOutcome *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome for the protected edges scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProtectedEdgesScopePattern"></a>

### *property* MeshWorkflowControl.ProtectedEdgesScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope pattern for the protected edges scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProximityRadius"></a>

### *property* MeshWorkflowControl.ProximityRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the radius for the proximity based search.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProximityType"></a>

### *property* MeshWorkflowControl.ProximityType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ProximityType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ProximityType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ProximityType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Proximity Type to apply for the entity search. The default value is Radius.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerFaceScopeDefinition"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerFaceScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the quad boundary layer face scoping. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerFaceScopeMethod"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerFaceScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the quad boundary layer face scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerFaceScopeOutcome"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerFaceScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if 'QuadBoundaryLayerFaceScopeDefinition' is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerFaceScopePattern"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerFaceScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'QuadBoundaryLayerFaceScopeDefinition' is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerFirstLayerHeight"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerFirstLayerHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the height of the first quad layer.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerGrowthRate"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerGrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ratio of heights between subsequent quad layers.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerNumberOfDivisions"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerNumberOfDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of annular divisions on the washer boundary from where the quad layers are grown.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.QuadBoundaryLayerNumberOfLayers"></a>

### *property* MeshWorkflowControl.QuadBoundaryLayerNumberOfLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of quad layers on the washer boundary.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Radius"></a>

### *property* MeshWorkflowControl.Radius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the radius attribute of the corresponding control. Default is Quantity(0.1, 'm')

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Ratio"></a>

### *property* MeshWorkflowControl.Ratio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ratio attribute of the corresponding control. Default is 0.5.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RecomputeClosedVolumes"></a>

### *property* MeshWorkflowControl.RecomputeClosedVolumes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to recompute closed volumes after the operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ReferenceFaceScopeDefinition"></a>

### *property* MeshWorkflowControl.ReferenceFaceScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the ReferenceFace scoping in MultiZone Edge Biasing. Default: Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ReferenceFaceScopeScopeMethod"></a>

### *property* MeshWorkflowControl.ReferenceFaceScopeScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the ReferenceFace scoping in MultiZone Edge Biasing. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ReferenceFaceScopeScopeOutcome"></a>

### *property* MeshWorkflowControl.ReferenceFaceScopeScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome for the ReferenceFace scoping in MultiZone Edge Biasing from a previous operation. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ReferenceFaceScopeScopePattern"></a>

### *property* MeshWorkflowControl.ReferenceFaceScopeScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the zone or label name pattern that defines the ReferenceFace scoping in MultiZone Edge Biasing. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RegionType"></a>

### *property* MeshWorkflowControl.RegionType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WrapperRegionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WrapperRegionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WrapperRegionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

It is defined by Material Point or External.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RelativeMergeTolerancePercentage"></a>

### *property* MeshWorkflowControl.RelativeMergeTolerancePercentage *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the percentage of the connected edge lengths to be used as tolerance for merging nodes.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RelativePairingTolerance"></a>

### *property* MeshWorkflowControl.RelativePairingTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the relative pairing tolerance for nodes pairing check.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RelativePlanarityTolerance"></a>

### *property* MeshWorkflowControl.RelativePlanarityTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the relative planarity tolerance for planarity check.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RelativeTolerance"></a>

### *property* MeshWorkflowControl.RelativeTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the relative tolerance for the sliding constraint plane condition.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ReleaseStatusString"></a>

### *property* MeshWorkflowControl.ReleaseStatusString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ReleaseStatusString property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Remesh"></a>

### *property* MeshWorkflowControl.Remesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to allow the remesh of already meshed volumes. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RemoveCusps"></a>

### *property* MeshWorkflowControl.RemoveCusps *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to remove cusps from the mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RemoveUnwettedSurfaces"></a>

### *property* MeshWorkflowControl.RemoveUnwettedSurfaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to remove unwetted surfaces for wrapper specific surface mesher.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairModel"></a>

### *property* MeshWorkflowControl.RepairModel *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to repair the PrimeMesh model after the reading operation is executed. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyEdgeAngle"></a>

### *property* MeshWorkflowControl.RepairTopologyEdgeAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the angle not to be exceeded when deleting interior vertices. Must be greater than 0 and less than or equal to 180 degrees. Defaults to 70 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyFeatureAngle"></a>

### *property* MeshWorkflowControl.RepairTopologyFeatureAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the angle not to be exceeded when performing repairs. Must be greater than 0 and less than or equal to 180 degrees. Defaults to 30 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyOverlapsTolerance"></a>

### *property* MeshWorkflowControl.RepairTopologyOverlapsTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the tolerance value to be used to detect the overlaps to resolve.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyPinchTolerance"></a>

### *property* MeshWorkflowControl.RepairTopologyPinchTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the largest tolerance to be used when removing small features.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyPreventFragmentedEdges"></a>

### *property* MeshWorkflowControl.RepairTopologyPreventFragmentedEdges *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to prevent fragmented edges when deleting interior vertices.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologySharpAngle"></a>

### *property* MeshWorkflowControl.RepairTopologySharpAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum angle between faces to be merged. Must be greater than 0 and less than or equal to 30 degrees. Defaults to 10 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyShortEdgeLength"></a>

### *property* MeshWorkflowControl.RepairTopologyShortEdgeLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum edge length to be collapsed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologySplitEdgesAtApexPoint"></a>

### *property* MeshWorkflowControl.RepairTopologySplitEdgesAtApexPoint *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to split edges at their apex point when repairing topology.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyThinFaceWidth"></a>

### *property* MeshWorkflowControl.RepairTopologyThinFaceWidth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum thin face width to be merged.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairTopologyTolerance"></a>

### *property* MeshWorkflowControl.RepairTopologyTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the tolerance value to be used to reduce variability of output topology, prevent the collapse and defeature of thin or short topologies, and allow the creation of a coarse mesh while keeping topology as-is.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RestrictBoundaryNodes"></a>

### *property* MeshWorkflowControl.RestrictBoundaryNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to restrict the boundary nodes displacement. The default value is true.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RetainFailedMesh"></a>

### *property* MeshWorkflowControl.RetainFailedMesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to keep the partially meshed results in case of failure. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RetainMeshedEdges"></a>

### *property* MeshWorkflowControl.RetainMeshedEdges *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to retain the existing mesh on the input edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RetainMeshedTopoFaces"></a>

### *property* MeshWorkflowControl.RetainMeshedTopoFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether existing mesh on the scoped faces is to be retained or remeshed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RetainMeshedVolumes"></a>

### *property* MeshWorkflowControl.RetainMeshedVolumes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether existing mesh on the scoped volumes is to be retained or remeshed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RetryWithGeometry"></a>

### *property* MeshWorkflowControl.RetryWithGeometry *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RetryWithGeometry.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ReverseDeformationFieldName"></a>

### *property* MeshWorkflowControl.ReverseDeformationFieldName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReverseDeformationFieldName.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ReverseDirection"></a>

### *property* MeshWorkflowControl.ReverseDirection *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to reverse the extruding direction.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ReverseEdgeBiasingDirection"></a>

### *property* MeshWorkflowControl.ReverseEdgeBiasingDirection *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether the Multizone Mesher edge biasing direction should be reversed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ReverseSurfaceOrientation"></a>

### *property* MeshWorkflowControl.ReverseSurfaceOrientation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Reverse Surface Orientation. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RigidScopeDefinition"></a>

### *property* MeshWorkflowControl.RigidScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the rigid scope of the morphing operation. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RigidScopeMethod"></a>

### *property* MeshWorkflowControl.RigidScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the rigid scope of the morphing operation. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RigidScopeOutcome"></a>

### *property* MeshWorkflowControl.RigidScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if 'RigidScopeDefinition' is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RigidScopePattern"></a>

### *property* MeshWorkflowControl.RigidScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if 'RigidScopeDefinition' is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RotationAngle"></a>

### *property* MeshWorkflowControl.RotationAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the rotation angle attribute of the corresponding direct morphing control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScaleElementSize"></a>

### *property* MeshWorkflowControl.ScaleElementSize *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to apply a scale factor to element size defined by settings.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScaleFactor"></a>

### *property* MeshWorkflowControl.ScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Scale Factor is used to scale shapes in different dimensions.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopeDefinition"></a>

### *property* MeshWorkflowControl.ScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

It is defined by value or outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopeMethod"></a>

### *property* MeshWorkflowControl.ScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The method can be label/zone/part.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopeOutcome"></a>

### *property* MeshWorkflowControl.ScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopePattern"></a>

### *property* MeshWorkflowControl.ScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScriptFilename"></a>

### *property* MeshWorkflowControl.ScriptFilename *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="MeshWorkflowControl.SeedFaceScopeDefinition"></a>

### *property* MeshWorkflowControl.SeedFaceScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the seed face scoping. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SeedFaceScopeMethod"></a>

### *property* MeshWorkflowControl.SeedFaceScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the seed face scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SeedFaceScopeOutcome"></a>

### *property* MeshWorkflowControl.SeedFaceScopeOutcome *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if SeedFaceScopeDefinition is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SeedFaceScopePattern"></a>

### *property* MeshWorkflowControl.SeedFaceScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the scope. Applicable only if SeedFaceScopeDefinition is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SelfIntersectionsLabelName"></a>

### *property* MeshWorkflowControl.SelfIntersectionsLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to self intersecting faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SemistructuredPatternType"></a>

### *property* MeshWorkflowControl.SemistructuredPatternType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SemistructuredPatternType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SemistructuredPatternType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SemistructuredPatternType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Semistructured Pattern type used by the MultiZone Mapped Meshing control when ApplySemistructuredPattern is set to True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SeparateImagesPerPart"></a>

### *property* MeshWorkflowControl.SeparateImagesPerPart *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to generate separate images for each part. Defaults to True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SharedTopologyLabelName"></a>

### *property* MeshWorkflowControl.SharedTopologyLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the name used as label to scope the shared topology faces which are automatically added as input mesh for MultiZone. Defaults to “MultiZoneMesh/SharedTopologyInputMesh”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ShowTessellation"></a>

### *property* MeshWorkflowControl.ShowTessellation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to show tessellation in the generated images. Defaults to True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SideTolerance"></a>

### *property* MeshWorkflowControl.SideTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SideTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SizeFieldDefinition"></a>

### *property* MeshWorkflowControl.SizeFieldDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets how the control's size field pattern should be defined, either by “Value” or by “Outcome”. The default value is “Value”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SizeFieldName"></a>

### *property* MeshWorkflowControl.SizeFieldName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to define the name of the size field to apply to the meshing operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SizeFieldOutcome"></a>

### *property* MeshWorkflowControl.SizeFieldOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the outcome to be used to define the size field pattern when SizeFieldDefinition is set to “Outcome”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SizeFieldPattern"></a>

### *property* MeshWorkflowControl.SizeFieldPattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to define the name pattern for matching the size fields to apply to the meshing operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SizeScaleFactor"></a>

### *property* MeshWorkflowControl.SizeScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the factor to apply to the element size values defined by settings.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SkewnessLimit"></a>

### *property* MeshWorkflowControl.SkewnessLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the skewness limit used to mark faces with skewed elements within the Surface Diagnostics outcome. Defaults to 0.9.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SkewnessValidationErrorLimit"></a>

### *property* MeshWorkflowControl.SkewnessValidationErrorLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the skewness validation error limit.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SkewnessValidationWarningLimit"></a>

### *property* MeshWorkflowControl.SkewnessValidationWarningLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the skewness validation warning limit.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SkipGroupRegEx"></a>

### *property* MeshWorkflowControl.SkipGroupRegEx *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Skips group names with provided regular expression.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SkipInteractiveSession"></a>

### *property* MeshWorkflowControl.SkipInteractiveSession *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to skip the interactive session on execution. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SlicerCornerAngle"></a>

### *property* MeshWorkflowControl.SlicerCornerAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the corner angle.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SlicerFeatureAngle"></a>

### *property* MeshWorkflowControl.SlicerFeatureAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the feature angle.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SlicerLayerHeight"></a>

### *property* MeshWorkflowControl.SlicerLayerHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the spacing between newly created parallel planes.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SlicerLayerStart"></a>

### *property* MeshWorkflowControl.SlicerLayerStart *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the z coordinate of the first plane.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SlicerMinimumLayerVolume"></a>

### *property* MeshWorkflowControl.SlicerMinimumLayerVolume *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the threshold volume for defeaturing a thin end layer of cells.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SlicerNodeMoveRelativeTolerance"></a>

### *property* MeshWorkflowControl.SlicerNodeMoveRelativeTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the relative tolerance, as a fraction of slicer layer height, to move surface nodes away from a slicing plane.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SlicerOverlappingAngle"></a>

### *property* MeshWorkflowControl.SlicerOverlappingAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the overlapping angle.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SlicerRelativeTolerance"></a>

### *property* MeshWorkflowControl.SlicerRelativeTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the relative tolerance for adjusting surface nodes when near a slicing plane. If the surface nodes are within the tolerance distance relative to the layer height, they will be projected to the new plane.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SlicerSliverFaceHeight"></a>

### *property* MeshWorkflowControl.SlicerSliverFaceHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets of sets the target minimum height of sliver triangles.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SlicerSliverTriangleHeightFromSize"></a>

### *property* MeshWorkflowControl.SlicerSliverTriangleHeightFromSize *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to derive the sliver triangle height from the minimal mesh size.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SlicerSliverTriangleHeightRatio"></a>

### *property* MeshWorkflowControl.SlicerSliverTriangleHeightRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the factor applied to the minimal mesh size to derive the sliver triangle height.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SlidingOnBoundaries"></a>

### *property* MeshWorkflowControl.SlidingOnBoundaries *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gest or sets whether to enforce the sliding on boundaries for a cyclic region condition.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SmallEdgesLabelName"></a>

### *property* MeshWorkflowControl.SmallEdgesLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to small edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SmallEdgesLength"></a>

### *property* MeshWorkflowControl.SmallEdgesLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum edge length used in finding small edges with topology diagnostics.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SmoothingIterations"></a>

### *property* MeshWorkflowControl.SmoothingIterations *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Allows user to input number of iterations needed to achieve good mesh results.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SmoothingPreserveVolume"></a>

### *property* MeshWorkflowControl.SmoothingPreserveVolume *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to enable and disable the volume preserving smoothing. If enabled, the smoothing will preserve the initial volume of the input. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SoftTargetSkewness"></a>

### *property* MeshWorkflowControl.SoftTargetSkewness *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the soft target value for skewness quality metric.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomPadDivisions"></a>

### *property* MeshWorkflowControl.SolderBallBottomPadDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of vertical divisions for the bottom pad of the solder ball mesh. If an internal pad is generated, shell divisions is used instead.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomPadLength"></a>

### *property* MeshWorkflowControl.SolderBallBottomPadLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the length of the solder ball bottom pad. Positive values for spheres create an external pad beneath the bottom split, and negative values create an internal pad beginning at the bottom split length. Torus will take the absolute value and always create an internal pad.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomSolderLabelName"></a>

### *property* MeshWorkflowControl.SolderBallBottomSolderLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to the bottom split of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomSolderPadFaceLabelName"></a>

### *property* MeshWorkflowControl.SolderBallBottomSolderPadFaceLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to the bottom pad face of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomSolderPadLabelName"></a>

### *property* MeshWorkflowControl.SolderBallBottomSolderPadLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to the bottom pad of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomSolderSplit"></a>

### *property* MeshWorkflowControl.SolderBallBottomSolderSplit *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the distance from the middle at which the bottom split of the solder ball begins.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomSplitDivisions"></a>

### *property* MeshWorkflowControl.SolderBallBottomSplitDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of vertical divisions for the bottom split of the solder ball mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallBottomSplitLength"></a>

### *property* MeshWorkflowControl.SolderBallBottomSplitLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the length of the solder ball beginning at the bottom split point.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallCenterSolderLabelName"></a>

### *property* MeshWorkflowControl.SolderBallCenterSolderLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to the center of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallCentralVerticalDivisions"></a>

### *property* MeshWorkflowControl.SolderBallCentralVerticalDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of vertical divisions for the center of the solder ball mesh, not including top and bottom splits.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallCylinderShellDivisions"></a>

### *property* MeshWorkflowControl.SolderBallCylinderShellDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of divisions for the inner cylinder shell of the solder ball mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallInnerCylinderRadius"></a>

### *property* MeshWorkflowControl.SolderBallInnerCylinderRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the radius of the solder ball's inner cylinder.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallOuterLoopDivisions"></a>

### *property* MeshWorkflowControl.SolderBallOuterLoopDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of outer loop divisions for the solder ball mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallRadius"></a>

### *property* MeshWorkflowControl.SolderBallRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the radius of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallShapeType"></a>

### *property* MeshWorkflowControl.SolderBallShapeType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SolderBallShapeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SolderBallShapeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SolderBallShapeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the solder ball shape type. The default value is Sphere.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallShellDivisions"></a>

### *property* MeshWorkflowControl.SolderBallShellDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of divisions for the outer shell of the solder ball mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallSmoothMesh"></a>

### *property* MeshWorkflowControl.SolderBallSmoothMesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets whether the mesh will be smoothed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopPadDivisions"></a>

### *property* MeshWorkflowControl.SolderBallTopPadDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of vertical divisions for the top pad of the solder ball mesh. If an internal pad is generated, shell divisions is used instead.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopPadLength"></a>

### *property* MeshWorkflowControl.SolderBallTopPadLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the length of the solder ball top pad. Positive values for spheres create an external pad on top of the top split, and negative values create an internal pad beginning at the top split length. Torus will take the absolute value and always create an internal pad.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopSolderLabelName"></a>

### *property* MeshWorkflowControl.SolderBallTopSolderLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to the top split of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopSolderPadFaceLabelName"></a>

### *property* MeshWorkflowControl.SolderBallTopSolderPadFaceLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to the top solder pad face of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopSolderPadLabelName"></a>

### *property* MeshWorkflowControl.SolderBallTopSolderPadLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to the top pad of the solder ball.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopSolderSplit"></a>

### *property* MeshWorkflowControl.SolderBallTopSolderSplit *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the distance from the middle at which the top split of the solder ball begins.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopSplitDivisions"></a>

### *property* MeshWorkflowControl.SolderBallTopSplitDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of vertical divisions for the top split of the solder ball mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolderBallTopSplitLength"></a>

### *property* MeshWorkflowControl.SolderBallTopSplitLength *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the length of the solder ball beginning at the top split point.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGADegreeR"></a>

### *property* MeshWorkflowControl.SolidIGADegreeR *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the degree R.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGADegreeS"></a>

### *property* MeshWorkflowControl.SolidIGADegreeS *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the degree S.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGADegreeT"></a>

### *property* MeshWorkflowControl.SolidIGADegreeT *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the degree T.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGAFeatureAngle"></a>

### *property* MeshWorkflowControl.SolidIGAFeatureAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the feature angle.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGAGeometryFileName"></a>

### *property* MeshWorkflowControl.SolidIGAGeometryFileName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the file name path string.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGAInterpolationElementsR"></a>

### *property* MeshWorkflowControl.SolidIGAInterpolationElementsR *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the interpolation elements r.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGAInterpolationElementsS"></a>

### *property* MeshWorkflowControl.SolidIGAInterpolationElementsS *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the interpolation elements s.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGAInterpolationElementsT"></a>

### *property* MeshWorkflowControl.SolidIGAInterpolationElementsT *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the interpolation elements t.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGANElementsR"></a>

### *property* MeshWorkflowControl.SolidIGANElementsR *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of elements R.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGANElementsS"></a>

### *property* MeshWorkflowControl.SolidIGANElementsS *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of elements S.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGANElementsT"></a>

### *property* MeshWorkflowControl.SolidIGANElementsT *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of elements T.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGASolverFileName"></a>

### *property* MeshWorkflowControl.SolidIGASolverFileName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the file name path string.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGATessellationTolerance"></a>

### *property* MeshWorkflowControl.SolidIGATessellationTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the tessellation tolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGATolerance"></a>

### *property* MeshWorkflowControl.SolidIGATolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the tolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGAToleranceRatio"></a>

### *property* MeshWorkflowControl.SolidIGAToleranceRatio *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the tolerance ratio.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SolidIGATriTolerance"></a>

### *property* MeshWorkflowControl.SolidIGATriTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the tri tolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SourceScopeDefinition"></a>

### *property* MeshWorkflowControl.SourceScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the source scope of the match operation. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SourceScopeMethod"></a>

### *property* MeshWorkflowControl.SourceScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the source scope of the match operation. Default: Part.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SourceScopeOutcome"></a>

### *property* MeshWorkflowControl.SourceScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if SourceScopeDefinition is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SourceScopePattern"></a>

### *property* MeshWorkflowControl.SourceScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the source scope. Applicable only if SourceScopeDefinition is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SourceTargetScopeDefinition"></a>

### *property* MeshWorkflowControl.SourceTargetScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the Source/Target scoping. Default: Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SourceTargetScopeMethod"></a>

### *property* MeshWorkflowControl.SourceTargetScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the Source/Target scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SourceTargetScopeOutcome"></a>

### *property* MeshWorkflowControl.SourceTargetScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome for the Source/Target scoping from a previous operation. Applicable only if SourceTargetScopeDefinition is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SourceTargetScopePattern"></a>

### *property* MeshWorkflowControl.SourceTargetScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the zone or label name pattern that defines the Source/Target scoping. Applicable only if SourceTargetScopeDefinition is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SphereCenterModality"></a>

### *property* MeshWorkflowControl.SphereCenterModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SphereCenterDefinitionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to define the rule for the computation of the center of the spherical enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.StackerEdgeBiasType"></a>

### *property* MeshWorkflowControl.StackerEdgeBiasType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.StackerEdgeBiasType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/StackerEdgeBiasType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.StackerEdgeBiasType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the stacker edge bias type to be used when executing a Stacker Mesh Volume operation. The default value is Uniform.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.StackingDefeatureSize"></a>

### *property* MeshWorkflowControl.StackingDefeatureSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Defines defeature size to be used along the stacking direction.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.State"></a>

### *property* MeshWorkflowControl.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.StepFixLevel"></a>

### *property* MeshWorkflowControl.StepFixLevel *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.StepFixLevelType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the aggressiveness level for fixing steps.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.StepQualityLimit"></a>

### *property* MeshWorkflowControl.StepQualityLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the quality limit for step fixing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.StepQualityMetric"></a>

### *property* MeshWorkflowControl.StepQualityMetric *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.StepQualityMeasureType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the quality metric to use for step fixing.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.StitchFreeFaces"></a>

### *property* MeshWorkflowControl.StitchFreeFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to stitch free faces during cleanup.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SubMappingAngleThreshold"></a>

### *property* MeshWorkflowControl.SubMappingAngleThreshold *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the angle threshold for the classification of the automatically set mapped mesh vertex types. Defaults to 18 degrees, valid range is [18 degrees, 43.2 degrees]. ArgumentException is thrown for out-of-range values.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SuppressFeatureAngle"></a>

### *property* MeshWorkflowControl.SuppressFeatureAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the angle threshold for identifying feature edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SuppressNotFeatureEdges"></a>

### *property* MeshWorkflowControl.SuppressNotFeatureEdges *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to suppress edges that are not feature edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Suppressed"></a>

### *property* MeshWorkflowControl.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SurfaceMeshType"></a>

### *property* MeshWorkflowControl.SurfaceMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SurfaceMeshType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceMeshType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property gives control over what type of elements need to be generated in the mesh. The supported surface mesh types are Triangles, Quad Dominant and Quadrilateral.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SurfaceScopeModality"></a>

### *property* MeshWorkflowControl.SurfaceScopeModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceScopeModalityType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SurfaceScopeModalityType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceScopeModalityType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of surface scope modality used to define the morphable area. Default: Rings

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SurfaceTolerance"></a>

### *property* MeshWorkflowControl.SurfaceTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets surface tolerance to be used for faceting on execution.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SweepingSize"></a>

### *property* MeshWorkflowControl.SweepingSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the constant size along the sweeping direction.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TargetScopeDefinition"></a>

### *property* MeshWorkflowControl.TargetScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the target scope of the match operation. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TargetScopeMethod"></a>

### *property* MeshWorkflowControl.TargetScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the target scope of the match operation. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TargetScopeOutcome"></a>

### *property* MeshWorkflowControl.TargetScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation. Applicable only if TargetScopeDefinition is set to Outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TargetScopePattern"></a>

### *property* MeshWorkflowControl.TargetScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern that defines the target scope. Applicable only if TargetScopeDefinition is set to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TargetSkewness"></a>

### *property* MeshWorkflowControl.TargetSkewness *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Set Limit to the skewness of an element. Higher the skewness value, expecting a better mesh result.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TargetToleranceFactor"></a>

### *property* MeshWorkflowControl.TargetToleranceFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the factor applied to the size to derive the target tolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TetCollapseValidationErrorLimit"></a>

### *property* MeshWorkflowControl.TetCollapseValidationErrorLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the tet collapse validation error limit.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TetCollapseValidationWarningLimit"></a>

### *property* MeshWorkflowControl.TetCollapseValidationWarningLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the tet collapse validation warning limit.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Thickness"></a>

### *property* MeshWorkflowControl.Thickness *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Thickness to be assigned to the scoped zone.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ThinStripesLabelName"></a>

### *property* MeshWorkflowControl.ThinStripesLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to thin stripe faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ThinStripesWidth"></a>

### *property* MeshWorkflowControl.ThinStripesWidth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum width used in finding thin stripes with topology diagnostics.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ThinSweepDivisions"></a>

### *property* MeshWorkflowControl.ThinSweepDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of divisions to be used for Thin Sweep decomposition.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ThinSweepThickness"></a>

### *property* MeshWorkflowControl.ThinSweepThickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the thin sweep thickness to be used for Thin Sweep decomposition.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ToleranceFactor"></a>

### *property* MeshWorkflowControl.ToleranceFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the factor applied to the size to derive the tolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ToleranceFromSize"></a>

### *property* MeshWorkflowControl.ToleranceFromSize *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to derive the tolerance of the connect control from the size.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TopologyConformalConnection"></a>

### *property* MeshWorkflowControl.TopologyConformalConnection *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to preserve the topology connection for the newly created faces. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TriangleCountReductionMode"></a>

### *property* MeshWorkflowControl.TriangleCountReductionMode *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.TriangleCountReductionMode](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/TriangleCountReductionMode.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.TriangleCountReductionMode) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property gives control over the mode/degree of triangle count reduction during surface mesh generation. The supported modes are None, Conservative and Aggressive.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimBoxMaxX"></a>

### *property* MeshWorkflowControl.TrimBoxMaxX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum X coordinate for the box coordinates trim.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimBoxMaxY"></a>

### *property* MeshWorkflowControl.TrimBoxMaxY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum Y coordinate for the box coordinates trim.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimBoxMaxZ"></a>

### *property* MeshWorkflowControl.TrimBoxMaxZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the maximum Z coordinate for the box coordinates trim.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimBoxMinX"></a>

### *property* MeshWorkflowControl.TrimBoxMinX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimum X coordinate for the box coordinates trim.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimBoxMinY"></a>

### *property* MeshWorkflowControl.TrimBoxMinY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimum Y coordinate for the box coordinates trim.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimBoxMinZ"></a>

### *property* MeshWorkflowControl.TrimBoxMinZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the minimum Z coordinate for the box coordinates trim.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimDistance"></a>

### *property* MeshWorkflowControl.TrimDistance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the distance for the mesh based trim.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimElementSelectionType"></a>

### *property* MeshWorkflowControl.TrimElementSelectionType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALETrimElementSelectionType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the trim element selection type. The default value is Outside.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimNode1X"></a>

### *property* MeshWorkflowControl.TrimNode1X *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the X coordinate for trim node 1.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimNode1Y"></a>

### *property* MeshWorkflowControl.TrimNode1Y *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Y coordinate for trim node 1.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimNode1Z"></a>

### *property* MeshWorkflowControl.TrimNode1Z *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Z coordinate for trim node 1.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimNode2X"></a>

### *property* MeshWorkflowControl.TrimNode2X *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the X coordinate for trim node 2.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimNode2Y"></a>

### *property* MeshWorkflowControl.TrimNode2Y *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Y coordinate for trim node 2.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimNode2Z"></a>

### *property* MeshWorkflowControl.TrimNode2Z *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Z coordinate for trim node 2.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimOperationType"></a>

### *property* MeshWorkflowControl.TrimOperationType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALETrimOperationType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the trim operation type. The default value is Trim.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimOptionType"></a>

### *property* MeshWorkflowControl.TrimOptionType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALETrimOptionType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the trim option type. The default value is Mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimRadius1"></a>

### *property* MeshWorkflowControl.TrimRadius1 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the radius 1 for the trim geometry.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TrimRadius2"></a>

### *property* MeshWorkflowControl.TrimRadius2 *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the radius 2 for the trim geometry.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UnconnectedFreeEdgesLabelName"></a>

### *property* MeshWorkflowControl.UnconnectedFreeEdgesLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the label name to be applied to unconnected free edges.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UnitsSystem"></a>

### *property* MeshWorkflowControl.UnitsSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UnitsSystem.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UnoDataEDXPath"></a>

### *property* MeshWorkflowControl.UnoDataEDXPath *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UnoDataEDXPath.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UseCADCurvature"></a>

### *property* MeshWorkflowControl.UseCADCurvature *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to define the local curvature based on the CAD. The default value is True.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UseMappedBlocksSplitAngle"></a>

### *property* MeshWorkflowControl.UseMappedBlocksSplitAngle *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether extra split should be introduced in the mapped blocks based on the MappedBlocksSplitAngle value. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UseRelativeTolerances"></a>

### *property* MeshWorkflowControl.UseRelativeTolerances *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to use relative tolerances.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UseSizeFieldInSweepDirection"></a>

### *property* MeshWorkflowControl.UseSizeFieldInSweepDirection *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to use the size field sizing along the sweeping direction or to apply a constant size. Defaults to False.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UshapeCuspsMiddleFacesScopeDefinition"></a>

### *property* MeshWorkflowControl.UshapeCuspsMiddleFacesScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope definition type for the U-shape cusps middle faces scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UshapeCuspsMiddleFacesScopeMethod"></a>

### *property* MeshWorkflowControl.UshapeCuspsMiddleFacesScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope method for the U-shape cusps middle faces scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UshapeCuspsMiddleFacesScopeOutcome"></a>

### *property* MeshWorkflowControl.UshapeCuspsMiddleFacesScopeOutcome *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome for the U-shape cusps middle faces scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.UshapeCuspsMiddleFacesScopePattern"></a>

### *property* MeshWorkflowControl.UshapeCuspsMiddleFacesScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope pattern for the U-shape cusps middle faces scope.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ValidateMeshType"></a>

### *property* MeshWorkflowControl.ValidateMeshType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ValidateMeshType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the validate mesh type. The default value is Surface.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VariableName"></a>

### *property* MeshWorkflowControl.VariableName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VariableName.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VariableType"></a>

### *property* MeshWorkflowControl.VariableType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.PythonVariableType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VariableType.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VariableValue"></a>

### *property* MeshWorkflowControl.VariableValue *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VariableValue.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VerticalDirection"></a>

### *property* MeshWorkflowControl.VerticalDirection *: Iterable[[float](https://docs.python.org/3/builtins/functions.html#float)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VerticalDirection coordinates.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VerticalDirectionX"></a>

### *property* MeshWorkflowControl.VerticalDirectionX *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VerticalDirectionX.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VerticalDirectionY"></a>

### *property* MeshWorkflowControl.VerticalDirectionY *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VerticalDirectionY.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VerticalDirectionZ"></a>

### *property* MeshWorkflowControl.VerticalDirectionZ *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VerticalDirectionZ.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VerticalScopeOutcome"></a>

### *property* MeshWorkflowControl.VerticalScopeOutcome *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VerticalScopeOutcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VerticalScopePattern"></a>

### *property* MeshWorkflowControl.VerticalScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VerticalScopePattern.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VerticalizeTargetNormal"></a>

### *property* MeshWorkflowControl.VerticalizeTargetNormal *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.VerticalizeTargetNormal | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property defines the target normal direction for the faces during verticalization. The available options are XPlus, YPlus, ZPlus, XMinus, YMinus, ZMinus.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VisibleProperties"></a>

### *property* MeshWorkflowControl.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeCushionPercentage"></a>

### *property* MeshWorkflowControl.VolumeCushionPercentage *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VolumeCushionPercentage.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeLabelName"></a>

### *property* MeshWorkflowControl.VolumeLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to rename the default volume lavel name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeMeshToolDihedralAngle"></a>

### *property* MeshWorkflowControl.VolumeMeshToolDihedralAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the dihedral angle.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeMeshToolMovedNodeDisplacementTolerance"></a>

### *property* MeshWorkflowControl.VolumeMeshToolMovedNodeDisplacementTolerance *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the tolerance for the nodes to set as not projectable.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeMeshToolNumberOfAttempts"></a>

### *property* MeshWorkflowControl.VolumeMeshToolNumberOfAttempts *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of attempts to improve skewness by node movement.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeMeshToolNumberOfIterations"></a>

### *property* MeshWorkflowControl.VolumeMeshToolNumberOfIterations *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of iterations.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeMeshToolNumberOfIterationsPerNode"></a>

### *property* MeshWorkflowControl.VolumeMeshToolNumberOfIterationsPerNode *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of iterations per node to be moved.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeMeshToolRemoveProjectabilityFromMovedFaces"></a>

### *property* MeshWorkflowControl.VolumeMeshToolRemoveProjectabilityFromMovedFaces *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to remove the projectability from the faces with moved nodes. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeMeshToolTargetSkewness"></a>

### *property* MeshWorkflowControl.VolumeMeshToolTargetSkewness *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the target skewness.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeMeshType"></a>

### *property* MeshWorkflowControl.VolumeMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.VolumeMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/VolumeMeshType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.VolumeMeshType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Type of Volume elements such as Tetrahedrons and Hex.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeScopeModality"></a>

### *property* MeshWorkflowControl.VolumeScopeModality *: Ansys.Common.Interop.DSObjectTypes.MeshWorkflowVolumeScopeModalityType | [None](https://docs.python.org/3/builtins/constants.html#None)*

The modality can be EntireDomain or Box.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeSplittingLoopScopeDefinition"></a>

### *property* MeshWorkflowControl.VolumeSplittingLoopScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the Volume Splitting Loop scoping. Defaults to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeSplittingLoopScopeMethod"></a>

### *property* MeshWorkflowControl.VolumeSplittingLoopScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the Volume Splitting Loop scoping. Defaults to Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeSplittingLoopScopeOutcome"></a>

### *property* MeshWorkflowControl.VolumeSplittingLoopScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation for the Volume Splitting Loop scoping. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeSplittingLoopScopePattern"></a>

### *property* MeshWorkflowControl.VolumeSplittingLoopScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern for the Volume Splitting Loop scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeSplittingPlaneScopeDefinition"></a>

### *property* MeshWorkflowControl.VolumeSplittingPlaneScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of scope definition for the Volume Splitting Plane scoping. Defaults to Value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeSplittingPlaneScopeMethod"></a>

### *property* MeshWorkflowControl.VolumeSplittingPlaneScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scoping method for the Volume Splitting Plane scoping. Defaults to Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeSplittingPlaneScopeOutcome"></a>

### *property* MeshWorkflowControl.VolumeSplittingPlaneScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the scope outcome from a previous operation for the Volume Splitting Plane scoping. Applicable only if scope is defined by outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeSplittingPlaneScopePattern"></a>

### *property* MeshWorkflowControl.VolumeSplittingPlaneScopePattern *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the part, zone or label name pattern for the Volume Splitting Plane scoping. Applicable only if scope is defined by value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeZoneName"></a>

### *property* MeshWorkflowControl.VolumeZoneName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

This property is used to rename the default volume zone name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumesLabelName"></a>

### *property* MeshWorkflowControl.VolumesLabelName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the name to use when creating labels based on the number of volumes.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.WeldCreationCreateHAZLayers"></a>

### *property* MeshWorkflowControl.WeldCreationCreateHAZLayers *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets if HAZ layers will be created with when meshing the weld.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.WeldCreationEdgeMeshSize"></a>

### *property* MeshWorkflowControl.WeldCreationEdgeMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the weld edge mesh size.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.WeldCreationGrowthRate"></a>

### *property* MeshWorkflowControl.WeldCreationGrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the weld mesh growth rate.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.WeldCreationHAZDistanceBottom"></a>

### *property* MeshWorkflowControl.WeldCreationHAZDistanceBottom *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the weld mesh bottom HAZ layer distance.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.WeldCreationHAZDistanceTop"></a>

### *property* MeshWorkflowControl.WeldCreationHAZDistanceTop *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the weld mesh top HAZ layer distance.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.WeldCreationNumberHAZLayers"></a>

### *property* MeshWorkflowControl.WeldCreationNumberHAZLayers *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of HAZ layers for the weld, not to exceed 6.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.WorkingDirectory"></a>

### *property* MeshWorkflowControl.WorkingDirectory *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the WorkingDirectory.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.WrapByParts"></a>

### *property* MeshWorkflowControl.WrapByParts *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to wrap each part separately. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.XAxis"></a>

### *property* MeshWorkflowControl.XAxis *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the x coordinate of the axis attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.XCenter"></a>

### *property* MeshWorkflowControl.XCenter *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the x coordinate of the center attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.XCoordinate"></a>

### *property* MeshWorkflowControl.XCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

It defines the X Coordinate.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.XPointOnBend"></a>

### *property* MeshWorkflowControl.XPointOnBend *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the X coordinate of the point on the bend region attribute of the corresponding control. Default is Quantity(0.0, 'm')

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.YAxis"></a>

### *property* MeshWorkflowControl.YAxis *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the y coordinate of the axis attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.YCenter"></a>

### *property* MeshWorkflowControl.YCenter *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the y coordinate of the center attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.YCoordinate"></a>

### *property* MeshWorkflowControl.YCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

It defines the Y Coordinate.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.YPointOnBend"></a>

### *property* MeshWorkflowControl.YPointOnBend *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Y coordinate of the point on the bend region attribute of the corresponding control. Default is Quantity(0.0, 'm')

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ZAxis"></a>

### *property* MeshWorkflowControl.ZAxis *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the z coordinate of the axis attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ZCenter"></a>

### *property* MeshWorkflowControl.ZCenter *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the z coordinate of the center attribute of the corresponding control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ZCoordinate"></a>

### *property* MeshWorkflowControl.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

It defines the Z Coordinate.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ZPointOnBend"></a>

### *property* MeshWorkflowControl.ZPointOnBend *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Z coordinate of the point on the bend region attribute of the corresponding control. Default is Quantity(0.0, 'm')

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ZoneType"></a>

### *property* MeshWorkflowControl.ZoneType *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshWorkflowZoneType | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZoneType.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowControl.Activate"></a>

### MeshWorkflowControl.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AddFigure"></a>

### MeshWorkflowControl.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AddImage"></a>

### MeshWorkflowControl.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CanCheckPublicStateCallbackForIM"></a>

### MeshWorkflowControl.CanCheckPublicStateCallbackForIM() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

CanCheckPublicStateCallbackForIM method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CanConvertTo"></a>

### MeshWorkflowControl.CanConvertTo(targetType: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Checks if this control can be converted to the specified ControlType.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CanDuplicate"></a>

### MeshWorkflowControl.CanDuplicate() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Returns whether the control can be duplicated.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CanShowPublishStateIM"></a>

### MeshWorkflowControl.CanShowPublishStateIM() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

CanShowPublishStateIM method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConnectControlDataToSettings"></a>

### MeshWorkflowControl.ConnectControlDataToSettings(settings: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Connects the control data to the desired settings

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConnectScopeOutcome"></a>

### MeshWorkflowControl.ConnectScopeOutcome(scopeName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), outcome: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Connects the scope identified by scopeName to the selected outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlPropertyNameToDispIDMap"></a>

### MeshWorkflowControl.ControlPropertyNameToDispIDMap() → System.Collections.Generic.Dictionary[[int](https://docs.python.org/3/builtins/functions.html#int), [str](https://docs.python.org/3/builtins/stdtypes.html#str)]

ControlPropertyNameToDispIDMap method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConvertControl"></a>

### MeshWorkflowControl.ConvertControl(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Converts the control to a ExternalPartEnclosure

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Copy"></a>

### MeshWorkflowControl.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CopyControlInternalizedFileContentToClipboard"></a>

### MeshWorkflowControl.CopyControlInternalizedFileContentToClipboard() → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyControlInternalizedFileContentToClipboard method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CopyControlInternalizedFilePathToClipboard"></a>

### MeshWorkflowControl.CopyControlInternalizedFilePathToClipboard() → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyControlInternalizedFilePathToClipboard method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CopyTo"></a>

### MeshWorkflowControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateObjRef"></a>

### MeshWorkflowControl.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateParameter"></a>

### MeshWorkflowControl.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Cut"></a>

### MeshWorkflowControl.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Delete"></a>

### MeshWorkflowControl.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Duplicate"></a>

### MeshWorkflowControl.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Equals"></a>

### MeshWorkflowControl.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetAPIName"></a>

### MeshWorkflowControl.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetAllProperties"></a>

### MeshWorkflowControl.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetChildren"></a>

### MeshWorkflowControl.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshWorkflowControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetControlPointElementSizes"></a>

### MeshWorkflowControl.GetControlPointElementSizes(axis: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALEAxisType, unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[System.Nullable[[float](https://docs.python.org/3/builtins/functions.html#float)]]

Gets the Control Point Element Sizes for the specified axis.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetControlPointIndices"></a>

### MeshWorkflowControl.GetControlPointIndices(axis: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALEAxisType) → List[[int](https://docs.python.org/3/builtins/functions.html#int)]

Gets the Control Point Indices for the specified axis.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetControlPointPositions"></a>

### MeshWorkflowControl.GetControlPointPositions(axis: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALEAxisType, unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[System.Nullable[[float](https://docs.python.org/3/builtins/functions.html#float)]]

Gets the Control Point Positions for the specified axis.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetControlPointRatios"></a>

### MeshWorkflowControl.GetControlPointRatios(axis: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALEAxisType) → List[System.Nullable[[float](https://docs.python.org/3/builtins/functions.html#float)]]

Gets the Control Point Ratios for the specified axis.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetConvertibleControlTypes"></a>

### MeshWorkflowControl.GetConvertibleControlTypes() → List[[Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType)]

```text
Returns the list of ControlTypes that this control can be converted to.
Used to discover valid targets for ConvertControl/SwitchControl.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetDetailsView"></a>

### MeshWorkflowControl.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetDomainBrowserAvailableMorphFieldPatterns"></a>

### MeshWorkflowControl.GetDomainBrowserAvailableMorphFieldPatterns(path: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainBrowserAvailableMorphFieldPatterns method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetDomainBrowserAvailableScopes"></a>

### MeshWorkflowControl.GetDomainBrowserAvailableScopes(path: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainBrowserAvailableScopes method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetDomainBrowserAvailableSizeFieldPatterns"></a>

### MeshWorkflowControl.GetDomainBrowserAvailableSizeFieldPatterns(path: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetDomainBrowserAvailableSizeFieldPatterns method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetEnumName"></a>

### MeshWorkflowControl.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetHashCode"></a>

### MeshWorkflowControl.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetIconFile"></a>

### MeshWorkflowControl.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetLifetimeService"></a>

### MeshWorkflowControl.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetMeshSpacingType"></a>

### MeshWorkflowControl.GetMeshSpacingType(axis: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALEAxisType) → Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALEMeshSpacingType

Gets the Mesh Spacing Type for the specified axis.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetObjectData"></a>

### MeshWorkflowControl.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetParameter"></a>

### MeshWorkflowControl.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetPath"></a>

### MeshWorkflowControl.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetPropertyName"></a>

### MeshWorkflowControl.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetPropertyValue"></a>

### MeshWorkflowControl.GetPropertyValue(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

### MeshWorkflowControl.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetPropertyWorksheetInfo"></a>

### MeshWorkflowControl.GetPropertyWorksheetInfo(parentPath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetPropertyWorksheetInfo method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetUnpublishedList"></a>

### MeshWorkflowControl.GetUnpublishedList() → List[System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]]

GetUnpublishedList method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetVisibleProperties"></a>

### MeshWorkflowControl.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetVisiblePropertyNames"></a>

### MeshWorkflowControl.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GroupAllSimilarChildren"></a>

### MeshWorkflowControl.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GroupSimilarObjects"></a>

### MeshWorkflowControl.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InitializeLifetimeService"></a>

### MeshWorkflowControl.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IsPropertyEditable"></a>

### MeshWorkflowControl.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowControl.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.IsPropertyVisible"></a>

### MeshWorkflowControl.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshWorkflowControl.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Paste"></a>

### MeshWorkflowControl.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PropertyByAPIName"></a>

### MeshWorkflowControl.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PropertyById"></a>

### MeshWorkflowControl.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PropertyByName"></a>

### MeshWorkflowControl.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PropertyTypeInfo"></a>

### MeshWorkflowControl.PropertyTypeInfo(property: Ansys.ACT.Automation.Mechanical.Property) → System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]

PropertyTypeInfo method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PublishIMProp"></a>

### MeshWorkflowControl.PublishIMProp() → [None](https://docs.python.org/3/builtins/constants.html#None)

PublishIMProp method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RemoveFromGroup"></a>

### MeshWorkflowControl.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RemoveParameter"></a>

### MeshWorkflowControl.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RenameBasedOnType"></a>

### MeshWorkflowControl.RenameBasedOnType() → [None](https://docs.python.org/3/builtins/constants.html#None)

Renames applying the default name based on type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SetControlPointElementSizes"></a>

### MeshWorkflowControl.SetControlPointElementSizes(axis: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALEAxisType, values: List[System.Nullable[[float](https://docs.python.org/3/builtins/functions.html#float)]], unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetControlPointElementSizes method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SetControlPointIndices"></a>

### MeshWorkflowControl.SetControlPointIndices(axis: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALEAxisType, values: List[[int](https://docs.python.org/3/builtins/functions.html#int)]) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetControlPointIndices method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SetControlPointPositions"></a>

### MeshWorkflowControl.SetControlPointPositions(axis: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALEAxisType, values: List[System.Nullable[[float](https://docs.python.org/3/builtins/functions.html#float)]], unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetControlPointPositions method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SetControlPointRatios"></a>

### MeshWorkflowControl.SetControlPointRatios(axis: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALEAxisType, values: List[System.Nullable[[float](https://docs.python.org/3/builtins/functions.html#float)]]) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetControlPointRatios method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SetMeshSpacingType"></a>

### MeshWorkflowControl.SetMeshSpacingType(axis: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALEAxisType, meshSpacingType: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SALEMeshSpacingType) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the Mesh Spacing Type for the specified axis.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SetPropertyValue"></a>

### MeshWorkflowControl.SetPropertyValue(id: [int](https://docs.python.org/3/builtins/functions.html#int), value: [str](https://docs.python.org/3/builtins/stdtypes.html#str), validate: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SetPublish"></a>

### MeshWorkflowControl.SetPublish(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetPublish method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SetScopeMethodAndPattern"></a>

### MeshWorkflowControl.SetScopeMethodAndPattern(methodId: [int](https://docs.python.org/3/builtins/functions.html#int), method: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType), patternId: [int](https://docs.python.org/3/builtins/functions.html#int), pattern: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetScopeMethodAndPattern method.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SetUnpublish"></a>

### MeshWorkflowControl.SetUnpublish(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetUnpublish method.

<!-- !! processed by numpydoc !! -->

