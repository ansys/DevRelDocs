# `MeshWorkflowControl`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshWorkflowControl"></a>

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
|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AppendData`](#MeshWorkflowControl.AppendData)                                           | Gets or sets whether to append the mesh data being read to the current PrimeMesh model or to clear the model content before the mesh data is being read. The default value is false.                                                      |
| [`AutomaticExternalScope`](#MeshWorkflowControl.AutomaticExternalScope)                   | Gets or sets whether to define programmatically the external scoping method and pattern for the external enclosure. The default value is false.                                                                                           |
| [`CenterPlaneNormalOffset`](#MeshWorkflowControl.CenterPlaneNormalOffset)                 | It defines the desired offset of the plane of the hemisphere from the model.                                                                                                                                                              |
| [`CenterPosition`](#MeshWorkflowControl.CenterPosition)                                   | It is defined by “Centered”, “Minimal”, and “User Defined”.                                                                                                                                                                               |
| [`Children`](#MeshWorkflowControl.Children)                                               | Gets the list of children.                                                                                                                                                                                                                |
| [`ConstantHeight`](#MeshWorkflowControl.ConstantHeight)                                   | Height of a single layer of mesh elements.                                                                                                                                                                                                |
| [`ControlDataDefinition`](#MeshWorkflowControl.ControlDataDefinition)                     | This property is used to define if the control data is defined by value or by settings.                                                                                                                                                   |
| [`ControlType`](#MeshWorkflowControl.ControlType)                                         | Returns the type of the control.                                                                                                                                                                                                          |
| [`CoordinateSystem`](#MeshWorkflowControl.CoordinateSystem)                               | Gets or sets the Coordinate System object used to define the material point location.                                                                                                                                                     |
| [`CreateFaceZone`](#MeshWorkflowControl.CreateFaceZone)                                   | Gets or sets whether to create a new face zone.                                                                                                                                                                                           |
| [`CreateQuadraticElements`](#MeshWorkflowControl.CreateQuadraticElements)                 | Gets or sets whether to create quadratic elements. The default value is false.                                                                                                                                                            |
| [`DataModelObjectCategory`](#MeshWorkflowControl.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                                                                                                                                                                                              |
| [`DeleteEmptyVolumes`](#MeshWorkflowControl.DeleteEmptyVolumes)                           | This property is used to enable or disable the automatic deletion of empty topo volumes  during mesh to topology conversion. The default value is false.                                                                                  |
| [`DeleteInputScope`](#MeshWorkflowControl.DeleteInputScope)                               | Gets or sets whether to delete of input scope after wrapping. The default value is false.                                                                                                                                                 |
| [`DihedralAngle`](#MeshWorkflowControl.DihedralAngle)                                     | The dihedral angle is the angle between the normal vectors of two element faces.                                                                                                                                                          |
| [`EdgeLabelName`](#MeshWorkflowControl.EdgeLabelName)                                     | This property is used to rename the default edge label name generated during execution of step.                                                                                                                                           |
| [`ElementSize`](#MeshWorkflowControl.ElementSize)                                         | Define element size to achieve desired mesh results. User can achieve coarse, medium, or fine mesh by varying this value.                                                                                                                 |
| [`ElementsPerGap`](#MeshWorkflowControl.ElementsPerGap)                                   | Gets or sets the minimum number of element layers to be generated per gap for the Proximity Sizing control. The default values is 3.                                                                                                      |
| [`EnableCheckpoint`](#MeshWorkflowControl.EnableCheckpoint)                               | Flag whether to enable a checkpoint or not. The default value is false.                                                                                                                                                                   |
| [`ExcludeEnclosure`](#MeshWorkflowControl.ExcludeEnclosure)                               | Gets or sets whether to exclude the enclosure from the wrapper scope . The default value is false.                                                                                                                                        |
| [`ExcludeScopeDefinition`](#MeshWorkflowControl.ExcludeScopeDefinition)                   | Gets or sets the type of scope definition for the Hole Patching exclusion scoping. Default: Value                                                                                                                                         |
| [`ExcludeScopeMethod`](#MeshWorkflowControl.ExcludeScopeMethod)                           | Gets or sets the scoping method for the Hole Patching exclusion scoping. Default: Label.                                                                                                                                                  |
| [`ExcludeScopeOutcome`](#MeshWorkflowControl.ExcludeScopeOutcome)                         | Gets or sets the scope outcome from a previous operation for the Hole Patching exclusion scoping. Applicable only if scope is defined by outcome.                                                                                         |
| [`ExcludeScopePattern`](#MeshWorkflowControl.ExcludeScopePattern)                         | Gets or sets the part, zone or label name pattern for the Hole Patching exclusion scoping. Applicable only if scope is defined by value.                                                                                                  |
| [`ExternalLabelName`](#MeshWorkflowControl.ExternalLabelName)                             | This property is used to rename the default external label name generated during execution of step.                                                                                                                                       |
| [`ExternalScopeDefinition`](#MeshWorkflowControl.ExternalScopeDefinition)                 | It is defined by value or outcome depending on if the External scope is defined manual by the user or defined based on a previous outcome.                                                                                                |
| [`ExternalScopeMethod`](#MeshWorkflowControl.ExternalScopeMethod)                         | The method can be label/zone/part and it is applied to external region of enclosure.                                                                                                                                                      |
| [`ExternalScopeOutcome`](#MeshWorkflowControl.ExternalScopeOutcome)                       | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure. |
| [`ExternalScopePattern`](#MeshWorkflowControl.ExternalScopePattern)                       | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                             |
| [`FaceZoneByPart`](#MeshWorkflowControl.FaceZoneByPart)                                   | Gets or sets whether to define an independent face zone for each input part.                                                                                                                                                              |
| [`FaceZoneName`](#MeshWorkflowControl.FaceZoneName)                                       | This property is used to define the name of the default face zone name generated during execution of step.                                                                                                                                |
| [`Figures`](#MeshWorkflowControl.Figures)                                                 | Gets the list of associated figures.                                                                                                                                                                                                      |
| [`Filename`](#MeshWorkflowControl.Filename)                                               | Assign full path to the filename would like to Import/Export.                                                                                                                                                                             |
| [`Filenames`](#MeshWorkflowControl.Filenames)                                             | Assign paths with ‘|’ seperator to this property to read multiple files, pass without seperator if single file.                                                                                                                           |
| [`GrowthRate`](#MeshWorkflowControl.GrowthRate)                                           | Gradient of element size as each layer grows.                                                                                                                                                                                             |
| [`HemisphereCenterModality`](#MeshWorkflowControl.HemisphereCenterModality)               | This property is used to define the rule for the computation of the center of the hemispherical enclosure.                                                                                                                                |
| [`HemisphereOrientationModality`](#MeshWorkflowControl.HemisphereOrientationModality)     | This property is used to define the rule for the computation of the orientation of the hemispherical enclosure.                                                                                                                           |
| [`IgnoreOrientation`](#MeshWorkflowControl.IgnoreOrientation)                             | Gets or sets whether to ignore the face normal orientation while calculating the proximity for the Proximity Sizing control. The default value is False.                                                                                  |
| [`IgnoreSelfProximity`](#MeshWorkflowControl.IgnoreSelfProximity)                         | Gets or sets whether to ignore the proximity between two faces from the same face zone while calculating the proximity for the Proximity Sizing control. The default value is True.                                                       |
| [`Images`](#MeshWorkflowControl.Images)                                                   | Gets the list of associated images.                                                                                                                                                                                                       |
| [`InnerScopeDefinition`](#MeshWorkflowControl.InnerScopeDefinition)                       | It is defined by value or outcome depending on if the Inner scope is defined manually by the user or defined based on a previous outcome.                                                                                                 |
| [`InnerScopeMethod`](#MeshWorkflowControl.InnerScopeMethod)                               | The method can be label/zone/part and it is applied to inner region of enclosure.                                                                                                                                                         |
| [`InnerScopeOutcome`](#MeshWorkflowControl.InnerScopeOutcome)                             | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure. |
| [`InnerScopePattern`](#MeshWorkflowControl.InnerScopePattern)                             | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                             |
| [`InternalLabelName`](#MeshWorkflowControl.InternalLabelName)                             | This property is used to rename the default Internal label name generated during execution of step.                                                                                                                                       |
| [`InternalObject`](#MeshWorkflowControl.InternalObject)                                   | Gets the internal object. For advanced usage only.                                                                                                                                                                                        |
| [`LabelName`](#MeshWorkflowControl.LabelName)                                             | This property is used to rename the default label name generated during execution of step.                                                                                                                                                |
| [`Material`](#MeshWorkflowControl.Material)                                               | Gets or sets the Material.                                                                                                                                                                                                                |
| [`MaterialName`](#MeshWorkflowControl.MaterialName)                                       | Gets or sets the Material Name.                                                                                                                                                                                                           |
| [`MaterialPointDefinition`](#MeshWorkflowControl.MaterialPointDefinition)                 | Gets or sets the material point definition type.                                                                                                                                                                                          |
| [`MaterialPointType`](#MeshWorkflowControl.MaterialPointType)                             | It defines the type of material point, it can be “Include” or “Exclude”.                                                                                                                                                                  |
| [`MaxHoleSize`](#MeshWorkflowControl.MaxHoleSize)                                         | Gets or sets the maximum size of holes to be considered for Wrapper Leak Prevention and Hole Patching.                                                                                                                                    |
| [`MaxSize`](#MeshWorkflowControl.MaxSize)                                                 | Gets or sets the maximum size to be used for the volumetric size field sizing computation in the Proximity Sizing and Curvature Sizing controls. This is a length value.                                                                  |
| [`MeshFlowControl`](#MeshWorkflowControl.MeshFlowControl)                                 | This property gives control over the flow of mesh during surface mesh generation. The supported modes are None, and Global Cartesian.                                                                                                     |
| [`MinSize`](#MeshWorkflowControl.MinSize)                                                 | Gets or sets the minimum size to be used for the volumetric size field sizing computation in the Proximity Sizing and Curvature Sizing controls. This is a length value.                                                                  |
| [`MinimalNumberOfVolumetricLayers`](#MeshWorkflowControl.MinimalNumberOfVolumetricLayers) | It determines the minimal number of layers of volume elements to be created around the scoped body.                                                                                                                                       |
| [`MinimalRadius`](#MeshWorkflowControl.MinimalRadius)                                     | It defines the desired minimal radius of the spherical enclosure.                                                                                                                                                                         |
| [`MorphRecordingName`](#MeshWorkflowControl.MorphRecordingName)                           | This property is used to define the name for matching the morphing recording to apply to the meshing operation.                                                                                                                           |
| [`NormalAngle`](#MeshWorkflowControl.NormalAngle)                                         | Gets or sets the maximum allowed normal angle between neighboring elements when computing curvature for the Curvature Sizing control. This value must be between 0 and 180 degrees (0 to π) and defaults to 18 degrees.                   |
| [`NumberOfAttempts`](#MeshWorkflowControl.NumberOfAttempts)                               | Number of attempts for mesh convergence.                                                                                                                                                                                                  |
| [`NumberOfLayers`](#MeshWorkflowControl.NumberOfLayers)                                   | Number of layers of mesh elements.                                                                                                                                                                                                        |
| [`PartName`](#MeshWorkflowControl.PartName)                                               | This property allows user to rename the default part name generated during wrap operation.                                                                                                                                                |
| [`PercentageIncrement`](#MeshWorkflowControl.PercentageIncrement)                         | The number of volumetric Layers determines the number of layers. This property decides whether all the layers are an equal size (default 0.0) or they should gradually increase the size of volume element than previous element.         |
| [`ProjectSideFaces`](#MeshWorkflowControl.ProjectSideFaces)                               | Gets or sets whether to project the side faces after the extrusion.                                                                                                                                                                       |
| [`Properties`](#MeshWorkflowControl.Properties)                                           | Gets the list of properties for this object.                                                                                                                                                                                              |
| [`RegionType`](#MeshWorkflowControl.RegionType)                                           | It is defined by Material Point or External.                                                                                                                                                                                              |
| [`Remesh`](#MeshWorkflowControl.Remesh)                                                   | Gets or sets whether to allow the remesh of already meshed volumes. The default value is false.                                                                                                                                           |
| [`RepairModel`](#MeshWorkflowControl.RepairModel)                                         | Gets or sets whether to repair the PrimeMesh model after the reading operation is executed. The default value is false.                                                                                                                   |
| [`RestrictBoundaryNodes`](#MeshWorkflowControl.RestrictBoundaryNodes)                     | Gets or sets whether to restrict the boundary nodes displacement. The default value is true.                                                                                                                                              |
| [`ReverseSurfaceOrientation`](#MeshWorkflowControl.ReverseSurfaceOrientation)             | Reverse Surface Orientation. The default value is false.                                                                                                                                                                                  |
| [`ScaleFactor`](#MeshWorkflowControl.ScaleFactor)                                         | Scale Factor is used to scale shapes in different dimensions.                                                                                                                                                                             |
| [`ScopeDefinition`](#MeshWorkflowControl.ScopeDefinition)                                 | It is defined by value or outcome.                                                                                                                                                                                                        |
| [`ScopeMethod`](#MeshWorkflowControl.ScopeMethod)                                         | The method can be label/zone/part.                                                                                                                                                                                                        |
| [`ScopeOutcome`](#MeshWorkflowControl.ScopeOutcome)                                       | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure. |
| [`ScopePattern`](#MeshWorkflowControl.ScopePattern)                                       | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                             |
| [`SizeFieldDefinition`](#MeshWorkflowControl.SizeFieldDefinition)                         | Gets or sets how the control’s size field pattern should be defined, either by “Value” or by “Outcome”. The default value is “Value”.                                                                                                     |
| [`SizeFieldOutcome`](#MeshWorkflowControl.SizeFieldOutcome)                               | Gets or sets the outcome to be used to define the size field pattern when SizeFieldDefinition is set to “Outcome”.                                                                                                                        |
| [`SizeFieldPattern`](#MeshWorkflowControl.SizeFieldPattern)                               | This property is used to define the name pattern for matching the size fields to apply to the meshing operation.                                                                                                                          |
| [`SmoothingIterations`](#MeshWorkflowControl.SmoothingIterations)                         | Allows user to input number of iterations needed to achieve good mesh results.                                                                                                                                                            |
| [`SmoothingPreserveVolume`](#MeshWorkflowControl.SmoothingPreserveVolume)                 | Gets or sets whether to enable and disable the volume preserving smoothing. If enabled, the smoothing will preserve the initial volume of the input. The default value is false.                                                          |
| [`SphereCenterModality`](#MeshWorkflowControl.SphereCenterModality)                       | This property is used to define the rule for the computation of the center of the spherical enclosure.                                                                                                                                    |
| [`SurfaceMeshType`](#MeshWorkflowControl.SurfaceMeshType)                                 | This property gives control over what type of elements need to be generated in the mesh. The supported surface mesh types are Triangles and Quadrilaterals.                                                                               |
| [`TargetSkewness`](#MeshWorkflowControl.TargetSkewness)                                   | Set Limit to the skewness of an element. Higher the skewness value, expecting a better mesh result.                                                                                                                                       |
| [`Thickness`](#MeshWorkflowControl.Thickness)                                             | Gets or sets the Thickness to be assigned to the scoped zone.                                                                                                                                                                             |
| [`TopologyConformalConnection`](#MeshWorkflowControl.TopologyConformalConnection)         | Gets or sets whether to preserve the topology connection for the newly created faces. The default value is false.                                                                                                                         |
| [`TriangleCountReductionMode`](#MeshWorkflowControl.TriangleCountReductionMode)           | This property gives control over the mode/degree of triangle count reduction during surface mesh generation. The supported modes are None, Conservative and Aggressive.                                                                   |
| [`VisibleProperties`](#MeshWorkflowControl.VisibleProperties)                             | Gets the list of properties that are visible for this object.                                                                                                                                                                             |
| [`VolumeMeshType`](#MeshWorkflowControl.VolumeMeshType)                                   | Type of Volume elements such as Tetrahedrons and Hex.                                                                                                                                                                                     |
| [`VolumeZoneName`](#MeshWorkflowControl.VolumeZoneName)                                   | This property is used to rename the default volume zone name generated during execution of step.                                                                                                                                          |
| [`WrapByParts`](#MeshWorkflowControl.WrapByParts)                                         | Gets or sets whether to wrap each part separately. The default value is false.                                                                                                                                                            |
| [`XCoordinate`](#MeshWorkflowControl.XCoordinate)                                         | It defines the X Coordinate.                                                                                                                                                                                                              |
| [`YCoordinate`](#MeshWorkflowControl.YCoordinate)                                         | It defines the Y Coordinate.                                                                                                                                                                                                              |
| [`ZCoordinate`](#MeshWorkflowControl.ZCoordinate)                                         | It defines the Z Coordinate.                                                                                                                                                                                                              |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowControl.AppendData"></a>

### *property* MeshWorkflowControl.AppendData *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to append the mesh data being read to the current PrimeMesh model or to clear the model content before the mesh data is being read. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutomaticExternalScope"></a>

### *property* MeshWorkflowControl.AutomaticExternalScope *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to define programmatically the external scoping method and pattern for the external enclosure. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CenterPlaneNormalOffset"></a>

### *property* MeshWorkflowControl.CenterPlaneNormalOffset *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the desired offset of the plane of the hemisphere from the model.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CenterPosition"></a>

### *property* MeshWorkflowControl.CenterPosition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SphereCenterDefinitionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by “Centered”, “Minimal”, and “User Defined”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Children"></a>

### *property* MeshWorkflowControl.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConstantHeight"></a>

### *property* MeshWorkflowControl.ConstantHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Height of a single layer of mesh elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlDataDefinition"></a>

### *property* MeshWorkflowControl.ControlDataDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlDataDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlDataDefinedByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlDataDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define if the control data is defined by value or by settings.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ControlType"></a>

### *property* MeshWorkflowControl.ControlType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the type of the control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CoordinateSystem"></a>

### *property* MeshWorkflowControl.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="MeshWorkflowControl.DataModelObjectCategory"></a>

### *property* MeshWorkflowControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeleteEmptyVolumes"></a>

### *property* MeshWorkflowControl.DeleteEmptyVolumes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to enable or disable the automatic deletion of empty topo volumes  during mesh to topology conversion. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeleteInputScope"></a>

### *property* MeshWorkflowControl.DeleteInputScope *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to delete of input scope after wrapping. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DihedralAngle"></a>

### *property* MeshWorkflowControl.DihedralAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

The dihedral angle is the angle between the normal vectors of two element faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EdgeLabelName"></a>

### *property* MeshWorkflowControl.EdgeLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default edge label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ElementSize"></a>

### *property* MeshWorkflowControl.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Define element size to achieve desired mesh results. User can achieve coarse, medium, or fine mesh by varying this value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ElementsPerGap"></a>

### *property* MeshWorkflowControl.ElementsPerGap *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the minimum number of element layers to be generated per gap for the Proximity Sizing control. The default values is 3.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EnableCheckpoint"></a>

### *property* MeshWorkflowControl.EnableCheckpoint *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CheckpointDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/CheckpointDefinitionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CheckpointDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Flag whether to enable a checkpoint or not. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeEnclosure"></a>

### *property* MeshWorkflowControl.ExcludeEnclosure *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to exclude the enclosure from the wrapper scope . The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeScopeDefinition"></a>

### *property* MeshWorkflowControl.ExcludeScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of scope definition for the Hole Patching exclusion scoping. Default: Value

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeScopeMethod"></a>

### *property* MeshWorkflowControl.ExcludeScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the scoping method for the Hole Patching exclusion scoping. Default: Label.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeScopeOutcome"></a>

### *property* MeshWorkflowControl.ExcludeScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* MeshWorkflowControl.ExternalScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by value or outcome depending on if the External scope is defined manual by the user or defined based on a previous outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopeMethod"></a>

### *property* MeshWorkflowControl.ExternalScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

The method can be label/zone/part and it is applied to external region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopeOutcome"></a>

### *property* MeshWorkflowControl.ExternalScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopePattern"></a>

### *property* MeshWorkflowControl.ExternalScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceZoneByPart"></a>

### *property* MeshWorkflowControl.FaceZoneByPart *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to define an independent face zone for each input part.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceZoneName"></a>

### *property* MeshWorkflowControl.FaceZoneName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the name of the default face zone name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Figures"></a>

### *property* MeshWorkflowControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Filename"></a>

### *property* MeshWorkflowControl.Filename *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Assign full path to the filename would like to Import/Export.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Filenames"></a>

### *property* MeshWorkflowControl.Filenames *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Assign paths with ‘|’ seperator to this property to read multiple files, pass without seperator if single file.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GrowthRate"></a>

### *property* MeshWorkflowControl.GrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gradient of element size as each layer grows.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HemisphereCenterModality"></a>

### *property* MeshWorkflowControl.HemisphereCenterModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.HemisphereCenterDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/HemisphereCenterDefinitionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.HemisphereCenterDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the rule for the computation of the center of the hemispherical enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.HemisphereOrientationModality"></a>

### *property* MeshWorkflowControl.HemisphereOrientationModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.HemisphereOrientationDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/HemisphereOrientationDefinitionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.HemisphereOrientationDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the rule for the computation of the orientation of the hemispherical enclosure.

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

### *property* MeshWorkflowControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopeDefinition"></a>

### *property* MeshWorkflowControl.InnerScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by value or outcome depending on if the Inner scope is defined manually by the user or defined based on a previous outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopeMethod"></a>

### *property* MeshWorkflowControl.InnerScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

The method can be label/zone/part and it is applied to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopeOutcome"></a>

### *property* MeshWorkflowControl.InnerScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopePattern"></a>

### *property* MeshWorkflowControl.InnerScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InternalLabelName"></a>

### *property* MeshWorkflowControl.InternalLabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default Internal label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InternalObject"></a>

### *property* MeshWorkflowControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LabelName"></a>

### *property* MeshWorkflowControl.LabelName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default label name generated during execution of step.

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

### *property* MeshWorkflowControl.MaterialPointDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointDefineByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MaterialPointDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the material point definition type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaterialPointType"></a>

### *property* MeshWorkflowControl.MaterialPointType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MaterialPointType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the type of material point, it can be “Include” or “Exclude”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaxHoleSize"></a>

### *property* MeshWorkflowControl.MaxHoleSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the maximum size of holes to be considered for Wrapper Leak Prevention and Hole Patching.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaxSize"></a>

### *property* MeshWorkflowControl.MaxSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the maximum size to be used for the volumetric size field sizing computation in the Proximity Sizing and Curvature Sizing controls. This is a length value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshFlowControl"></a>

### *property* MeshWorkflowControl.MeshFlowControl *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MeshFlowControl | [None](https://docs.python.org/3/library/constants.html#None)*

This property gives control over the flow of mesh during surface mesh generation. The supported modes are None, and Global Cartesian.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinSize"></a>

### *property* MeshWorkflowControl.MinSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the minimum size to be used for the volumetric size field sizing computation in the Proximity Sizing and Curvature Sizing controls. This is a length value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinimalNumberOfVolumetricLayers"></a>

### *property* MeshWorkflowControl.MinimalNumberOfVolumetricLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

It determines the minimal number of layers of volume elements to be created around the scoped body.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinimalRadius"></a>

### *property* MeshWorkflowControl.MinimalRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the desired minimal radius of the spherical enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MorphRecordingName"></a>

### *property* MeshWorkflowControl.MorphRecordingName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the name for matching the morphing recording to apply to the meshing operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NormalAngle"></a>

### *property* MeshWorkflowControl.NormalAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the maximum allowed normal angle between neighboring elements when computing curvature for the Curvature Sizing control. This value must be between 0 and 180 degrees (0 to π) and defaults to 18 degrees.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfAttempts"></a>

### *property* MeshWorkflowControl.NumberOfAttempts *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Number of attempts for mesh convergence.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfLayers"></a>

### *property* MeshWorkflowControl.NumberOfLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Number of layers of mesh elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PartName"></a>

### *property* MeshWorkflowControl.PartName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property allows user to rename the default part name generated during wrap operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PercentageIncrement"></a>

### *property* MeshWorkflowControl.PercentageIncrement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

The number of volumetric Layers determines the number of layers. This property decides whether all the layers are an equal size (default 0.0) or they should gradually increase the size of volume element than previous element.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ProjectSideFaces"></a>

### *property* MeshWorkflowControl.ProjectSideFaces *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to project the side faces after the extrusion.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Properties"></a>

### *property* MeshWorkflowControl.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RegionType"></a>

### *property* MeshWorkflowControl.RegionType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WrapperRegionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WrapperRegionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WrapperRegionType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by Material Point or External.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Remesh"></a>

### *property* MeshWorkflowControl.Remesh *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to allow the remesh of already meshed volumes. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RepairModel"></a>

### *property* MeshWorkflowControl.RepairModel *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to repair the PrimeMesh model after the reading operation is executed. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RestrictBoundaryNodes"></a>

### *property* MeshWorkflowControl.RestrictBoundaryNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to restrict the boundary nodes displacement. The default value is true.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ReverseSurfaceOrientation"></a>

### *property* MeshWorkflowControl.ReverseSurfaceOrientation *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Reverse Surface Orientation. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScaleFactor"></a>

### *property* MeshWorkflowControl.ScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Scale Factor is used to scale shapes in different dimensions.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopeDefinition"></a>

### *property* MeshWorkflowControl.ScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by value or outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopeMethod"></a>

### *property* MeshWorkflowControl.ScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

The method can be label/zone/part.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopeOutcome"></a>

### *property* MeshWorkflowControl.ScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopePattern"></a>

### *property* MeshWorkflowControl.ScopePattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SizeFieldDefinition"></a>

### *property* MeshWorkflowControl.SizeFieldDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets how the control’s size field pattern should be defined, either by “Value” or by “Outcome”. The default value is “Value”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SizeFieldOutcome"></a>

### *property* MeshWorkflowControl.SizeFieldOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the outcome to be used to define the size field pattern when SizeFieldDefinition is set to “Outcome”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SizeFieldPattern"></a>

### *property* MeshWorkflowControl.SizeFieldPattern *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the name pattern for matching the size fields to apply to the meshing operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SmoothingIterations"></a>

### *property* MeshWorkflowControl.SmoothingIterations *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Allows user to input number of iterations needed to achieve good mesh results.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SmoothingPreserveVolume"></a>

### *property* MeshWorkflowControl.SmoothingPreserveVolume *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to enable and disable the volume preserving smoothing. If enabled, the smoothing will preserve the initial volume of the input. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SphereCenterModality"></a>

### *property* MeshWorkflowControl.SphereCenterModality *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SphereCenterDefinitionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the rule for the computation of the center of the spherical enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SurfaceMeshType"></a>

### *property* MeshWorkflowControl.SurfaceMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SurfaceMeshType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

This property gives control over what type of elements need to be generated in the mesh. The supported surface mesh types are Triangles and Quadrilaterals.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TargetSkewness"></a>

### *property* MeshWorkflowControl.TargetSkewness *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Set Limit to the skewness of an element. Higher the skewness value, expecting a better mesh result.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Thickness"></a>

### *property* MeshWorkflowControl.Thickness *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thickness to be assigned to the scoped zone.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TopologyConformalConnection"></a>

### *property* MeshWorkflowControl.TopologyConformalConnection *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to preserve the topology connection for the newly created faces. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TriangleCountReductionMode"></a>

### *property* MeshWorkflowControl.TriangleCountReductionMode *: Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.TriangleCountReductionMode | [None](https://docs.python.org/3/library/constants.html#None)*

This property gives control over the mode/degree of triangle count reduction during surface mesh generation. The supported modes are None, Conservative and Aggressive.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VisibleProperties"></a>

### *property* MeshWorkflowControl.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeMeshType"></a>

### *property* MeshWorkflowControl.VolumeMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.VolumeMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/VolumeMeshType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.VolumeMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Type of Volume elements such as Tetrahedrons and Hex.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeZoneName"></a>

### *property* MeshWorkflowControl.VolumeZoneName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default volume zone name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.WrapByParts"></a>

### *property* MeshWorkflowControl.WrapByParts *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets whether to wrap each part separately. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.XCoordinate"></a>

### *property* MeshWorkflowControl.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the X Coordinate.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.YCoordinate"></a>

### *property* MeshWorkflowControl.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the Y Coordinate.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ZCoordinate"></a>

### *property* MeshWorkflowControl.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the Z Coordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowControl.Activate"></a>

### MeshWorkflowControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AddFigure"></a>

### MeshWorkflowControl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AddImage"></a>

### MeshWorkflowControl.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CopyTo"></a>

### MeshWorkflowControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateParameter"></a>

### MeshWorkflowControl.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Delete"></a>

### MeshWorkflowControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Duplicate"></a>

### MeshWorkflowControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetChildren"></a>

### MeshWorkflowControl.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetParameter"></a>

### MeshWorkflowControl.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GroupAllSimilarChildren"></a>

### MeshWorkflowControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GroupSimilarObjects"></a>

### MeshWorkflowControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PropertyByAPIName"></a>

### MeshWorkflowControl.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PropertyByName"></a>

### MeshWorkflowControl.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RemoveParameter"></a>

### MeshWorkflowControl.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

