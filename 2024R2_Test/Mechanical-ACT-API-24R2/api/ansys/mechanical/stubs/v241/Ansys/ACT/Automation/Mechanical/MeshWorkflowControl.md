# `MeshWorkflowControl`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ControlType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ControlType)                                         | Returns the type of the control.                                                                                                                                                                                                          |
| [`EnableCheckpoint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.EnableCheckpoint)                               | Flag whether to enable a checkpoint or not. The default value is false.                                                                                                                                                                   |
| [`InnerScopeOutcome`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.InnerScopeOutcome)                             | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure. |
| [`ExternalScopeOutcome`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ExternalScopeOutcome)                       | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure. |
| [`ScopeOutcome`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ScopeOutcome)                                       | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure. |
| [`ScopeDefinition`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ScopeDefinition)                                 | It is defined by value or outcome.                                                                                                                                                                                                        |
| [`ScopeMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ScopeMethod)                                         | The method can be label/zone/part.                                                                                                                                                                                                        |
| [`InnerScopeDefinition`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.InnerScopeDefinition)                       | It is defined by value or outcome depending on if the Inner scope is defined manually by the user or defined based on a previous outcome.                                                                                                 |
| [`InnerScopeMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.InnerScopeMethod)                               | The method can be label/zone/part and it is applied to inner region of enclosure.                                                                                                                                                         |
| [`ExternalScopeDefinition`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ExternalScopeDefinition)                 | It is defined by value or outcome depending on if the External scope is defined manual by the user or defined based on a previous outcome.                                                                                                |
| [`ExternalScopeMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ExternalScopeMethod)                         | The method can be label/zone/part and it is applied to external region of enclosure.                                                                                                                                                      |
| [`SurfaceMeshType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.SurfaceMeshType)                                 | This property gives control over what type of elements need to be generated in the mesh. The supported surface mesh types are Triangles and Quadrilaterals.                                                                               |
| [`MeshFlowControl`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.MeshFlowControl)                                 | This property gives control over the flow of mesh during surface mesh generation. The supported modes are None, and Global Cartesian.                                                                                                     |
| [`TriangleCountReductionMode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.TriangleCountReductionMode)           | This property gives control over the mode/degree of triangle count reduction during surface mesh generation. The supported modes are None, Conservative and Aggressive.                                                                   |
| [`VolumeMeshType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.VolumeMeshType)                                   | Type of Volume elements such as Tetrahedrons and Hex.                                                                                                                                                                                     |
| [`CenterPosition`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.CenterPosition)                                   | It is defined by “Centered”, “Minimal”, and “User Defined”.                                                                                                                                                                               |
| [`RegionType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.RegionType)                                           | It is defined by Material Point or External.                                                                                                                                                                                              |
| [`MaterialPointType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.MaterialPointType)                             | It defines the type of material point, it can be “Include” or “Exclude”.                                                                                                                                                                  |
| [`XCoordinate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.XCoordinate)                                         | It defines the X Coordinate.                                                                                                                                                                                                              |
| [`ZCoordinate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ZCoordinate)                                         | It defines the Z Coordinate.                                                                                                                                                                                                              |
| [`YCoordinate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.YCoordinate)                                         | It defines the Y Coordinate.                                                                                                                                                                                                              |
| [`DeleteEmptyVolumes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.DeleteEmptyVolumes)                           | This property is used to enable or disable the automatic deletion of empty topo volumes  during mesh to topology conversion. The default value is false.                                                                                  |
| [`Material`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.Material)                                               | Gets or sets the Material.                                                                                                                                                                                                                |
| [`MaterialName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.MaterialName)                                       | Gets or sets the Material Name.                                                                                                                                                                                                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#id0)                                                                  | Gets the internal object. For advanced usage only.                                                                                                                                                                                        |
| [`ExternalScopePattern`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ExternalScopePattern)                       | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                             |
| [`InnerScopePattern`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.InnerScopePattern)                             | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                             |
| [`SmoothingIterations`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.SmoothingIterations)                         | Allows user to input number of iterations needed to achieve good mesh results.                                                                                                                                                            |
| [`MinimalNumberOfVolumetricLayers`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.MinimalNumberOfVolumetricLayers) | It determines the minimal number of layers of volume elements to be created around the scoped body.                                                                                                                                       |
| [`ExternalLabelName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ExternalLabelName)                             | This property is used to rename the default external label name generated during execution of step.                                                                                                                                       |
| [`InternalLabelName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.InternalLabelName)                             | This property is used to rename the default Internal label name generated during execution of step.                                                                                                                                       |
| [`NumberOfLayers`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.NumberOfLayers)                                   | Number of layers of mesh elements.                                                                                                                                                                                                        |
| [`FaceZoneName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.FaceZoneName)                                       | This property is used to define the name of the default face zone name generated during execution of step.                                                                                                                                |
| [`Filename`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.Filename)                                               | Assign full path to the filename would like to Import/Export.                                                                                                                                                                             |
| [`Filenames`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.Filenames)                                             | Assign paths with ‘|’ seperator to this property to read multiple files, pass without seperator if single file.                                                                                                                           |
| [`NumberOfAttempts`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.NumberOfAttempts)                               | Number of attempts for mesh convergence.                                                                                                                                                                                                  |
| [`LabelName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.LabelName)                                             | This property is used to rename the default label name generated during execution of step.                                                                                                                                                |
| [`PartName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.PartName)                                               | This property allows user to rename the default part name generated during wrap operation.                                                                                                                                                |
| [`PercentageIncrement`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.PercentageIncrement)                         | The number of volumetric Layers determines the number of layers. This property decides whether all the layers are an equal size (default 0.0) or they should gradually increase the size of volume element than previous element.         |
| [`ScaleFactor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ScaleFactor)                                         | Scale Factor is used to scale shapes in different dimensions.                                                                                                                                                                             |
| [`ScopePattern`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ScopePattern)                                       | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                             |
| [`TargetSkewness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.TargetSkewness)                                   | Set Limit to the skewness of an element. Higher the skewness value, expecting a better mesh result.                                                                                                                                       |
| [`GrowthRate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.GrowthRate)                                           | Gradient of element size as each layer grows.                                                                                                                                                                                             |
| [`VolumeZoneName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.VolumeZoneName)                                   | This property is used to rename the default volume zone name generated during execution of step.                                                                                                                                          |
| [`ElementSize`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ElementSize)                                         | Define element size to achieve desired mesh results. User can achieve coarse, medium, or fine mesh by varying this value.                                                                                                                 |
| [`MinimalRadius`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.MinimalRadius)                                     | It defines the desired minimal radius of the spherical enclosure.                                                                                                                                                                         |
| [`ConstantHeight`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ConstantHeight)                                   | Height of a single layer of mesh elements.                                                                                                                                                                                                |
| [`DihedralAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.DihedralAngle)                                     | The dihedral angle is the angle between the normal vectors of two element faces.                                                                                                                                                          |
| [`AutomaticExternalScope`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.AutomaticExternalScope)                   | The external scoping method and pattern of the current step is decided programmatically. The default value is false.                                                                                                                      |
| [`SmoothingPreserveVolume`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.SmoothingPreserveVolume)                 | The option to enable and disable the volume preserving smoothing. If enabled, the smoothing will preserve the initial volume of the input. The default value is false.                                                                    |
| [`CreateQuads`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.CreateQuads)                                         |                                                                                                                                                                                                                                           |
| [`RestrictBoundaryNodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.RestrictBoundaryNodes)                     | Restrict the boundary nodes. The default value is true.                                                                                                                                                                                   |
| [`AppendData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.AppendData)                                           | This property lets the user choose whether to append the mesh data being read to the current PrimeMesh model or to clear the model content before the mesh data is being read. The default value is false.                                |
| [`Remesh`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.Remesh)                                                   | Remesh if volume mesh fails. The default value is false.                                                                                                                                                                                  |
| [`DeleteInputScope`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.DeleteInputScope)                               | Deletion of input scope. The default value is false.                                                                                                                                                                                      |
| [`ExcludeEnclosure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ExcludeEnclosure)                               | Excluding Enclosure . The default value is false.                                                                                                                                                                                         |
| [`ReverseSurfaceOrientation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.ReverseSurfaceOrientation)             | Reverse Surface Orientation. The default value is false.                                                                                                                                                                                  |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                                                                                                                                                                                              |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.Children)                                               | Gets the list of children.                                                                                                                                                                                                                |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.Figures)                                                 | Gets the list of associated figures.                                                                                                                                                                                                      |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.Images)                                                   | Gets the list of associated images.                                                                                                                                                                                                       |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#id0)                                                                  | Gets the internal object. For advanced usage only.                                                                                                                                                                                        |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.Properties)                                           | Gets the list of properties for this object.                                                                                                                                                                                              |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowControl.md#MeshWorkflowControl.VisibleProperties)                             | Gets the list of properties that are visible for this object.                                                                                                                                                                             |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowControl.ControlType"></a>

### *property* MeshWorkflowControl.ControlType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the type of the control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.EnableCheckpoint"></a>

### *property* MeshWorkflowControl.EnableCheckpoint *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CheckpointDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/CheckpointDefinitionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CheckpointDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Flag whether to enable a checkpoint or not. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopeOutcome"></a>

### *property* MeshWorkflowControl.InnerScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopeOutcome"></a>

### *property* MeshWorkflowControl.ExternalScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopeOutcome"></a>

### *property* MeshWorkflowControl.ScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopeDefinition"></a>

### *property* MeshWorkflowControl.ScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by value or outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopeMethod"></a>

### *property* MeshWorkflowControl.ScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

The method can be label/zone/part.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopeDefinition"></a>

### *property* MeshWorkflowControl.InnerScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by value or outcome depending on if the Inner scope is defined manually by the user or defined based on a previous outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopeMethod"></a>

### *property* MeshWorkflowControl.InnerScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

The method can be label/zone/part and it is applied to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopeDefinition"></a>

### *property* MeshWorkflowControl.ExternalScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by value or outcome depending on if the External scope is defined manual by the user or defined based on a previous outcome.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopeMethod"></a>

### *property* MeshWorkflowControl.ExternalScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

The method can be label/zone/part and it is applied to external region of enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SurfaceMeshType"></a>

### *property* MeshWorkflowControl.SurfaceMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SurfaceMeshType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

This property gives control over what type of elements need to be generated in the mesh. The supported surface mesh types are Triangles and Quadrilaterals.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MeshFlowControl"></a>

### *property* MeshWorkflowControl.MeshFlowControl *: Ansys.Mechanical.DataModel.Enums.MeshFlowControl | [None](https://docs.python.org/3/library/constants.html#None)*

This property gives control over the flow of mesh during surface mesh generation. The supported modes are None, and Global Cartesian.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TriangleCountReductionMode"></a>

### *property* MeshWorkflowControl.TriangleCountReductionMode *: Ansys.Mechanical.DataModel.Enums.TriangleCountReductionMode | [None](https://docs.python.org/3/library/constants.html#None)*

This property gives control over the mode/degree of triangle count reduction during surface mesh generation. The supported modes are None, Conservative and Aggressive.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeMeshType"></a>

### *property* MeshWorkflowControl.VolumeMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.VolumeMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/VolumeMeshType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.VolumeMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Type of Volume elements such as Tetrahedrons and Hex.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CenterPosition"></a>

### *property* MeshWorkflowControl.CenterPosition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SphereCenterDefinitionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by “Centered”, “Minimal”, and “User Defined”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RegionType"></a>

### *property* MeshWorkflowControl.RegionType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WrapperRegionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WrapperRegionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WrapperRegionType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by Material Point or External.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaterialPointType"></a>

### *property* MeshWorkflowControl.MaterialPointType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MaterialPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the type of material point, it can be “Include” or “Exclude”.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.XCoordinate"></a>

### *property* MeshWorkflowControl.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the X Coordinate.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ZCoordinate"></a>

### *property* MeshWorkflowControl.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the Z Coordinate.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.YCoordinate"></a>

### *property* MeshWorkflowControl.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the Y Coordinate.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeleteEmptyVolumes"></a>

### *property* MeshWorkflowControl.DeleteEmptyVolumes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to enable or disable the automatic deletion of empty topo volumes  during mesh to topology conversion. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Material"></a>

### *property* MeshWorkflowControl.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MaterialName"></a>

### *property* MeshWorkflowControl.MaterialName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material Name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InternalObject"></a>

### *property* MeshWorkflowControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalScopePattern"></a>

### *property* MeshWorkflowControl.ExternalScopePattern *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InnerScopePattern"></a>

### *property* MeshWorkflowControl.InnerScopePattern *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SmoothingIterations"></a>

### *property* MeshWorkflowControl.SmoothingIterations *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Allows user to input number of iterations needed to achieve good mesh results.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinimalNumberOfVolumetricLayers"></a>

### *property* MeshWorkflowControl.MinimalNumberOfVolumetricLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

It determines the minimal number of layers of volume elements to be created around the scoped body.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExternalLabelName"></a>

### *property* MeshWorkflowControl.ExternalLabelName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default external label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.InternalLabelName"></a>

### *property* MeshWorkflowControl.InternalLabelName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default Internal label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfLayers"></a>

### *property* MeshWorkflowControl.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Number of layers of mesh elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.FaceZoneName"></a>

### *property* MeshWorkflowControl.FaceZoneName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the name of the default face zone name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Filename"></a>

### *property* MeshWorkflowControl.Filename *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Assign full path to the filename would like to Import/Export.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Filenames"></a>

### *property* MeshWorkflowControl.Filenames *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Assign paths with ‘|’ seperator to this property to read multiple files, pass without seperator if single file.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.NumberOfAttempts"></a>

### *property* MeshWorkflowControl.NumberOfAttempts *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Number of attempts for mesh convergence.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.LabelName"></a>

### *property* MeshWorkflowControl.LabelName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PartName"></a>

### *property* MeshWorkflowControl.PartName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

This property allows user to rename the default part name generated during wrap operation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PercentageIncrement"></a>

### *property* MeshWorkflowControl.PercentageIncrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

The number of volumetric Layers determines the number of layers. This property decides whether all the layers are an equal size (default 0.0) or they should gradually increase the size of volume element than previous element.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScaleFactor"></a>

### *property* MeshWorkflowControl.ScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Scale Factor is used to scale shapes in different dimensions.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ScopePattern"></a>

### *property* MeshWorkflowControl.ScopePattern *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.TargetSkewness"></a>

### *property* MeshWorkflowControl.TargetSkewness *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Set Limit to the skewness of an element. Higher the skewness value, expecting a better mesh result.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GrowthRate"></a>

### *property* MeshWorkflowControl.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gradient of element size as each layer grows.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VolumeZoneName"></a>

### *property* MeshWorkflowControl.VolumeZoneName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default volume zone name generated during execution of step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ElementSize"></a>

### *property* MeshWorkflowControl.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Define element size to achieve desired mesh results. User can achieve coarse, medium, or fine mesh by varying this value.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.MinimalRadius"></a>

### *property* MeshWorkflowControl.MinimalRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the desired minimal radius of the spherical enclosure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ConstantHeight"></a>

### *property* MeshWorkflowControl.ConstantHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Height of a single layer of mesh elements.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DihedralAngle"></a>

### *property* MeshWorkflowControl.DihedralAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

The dihedral angle is the angle between the normal vectors of two element faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AutomaticExternalScope"></a>

### *property* MeshWorkflowControl.AutomaticExternalScope *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

The external scoping method and pattern of the current step is decided programmatically. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.SmoothingPreserveVolume"></a>

### *property* MeshWorkflowControl.SmoothingPreserveVolume *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

The option to enable and disable the volume preserving smoothing. If enabled, the smoothing will preserve the initial volume of the input. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateQuads"></a>

### *property* MeshWorkflowControl.CreateQuads *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

<a id="MeshWorkflowControl.RestrictBoundaryNodes"></a>

### *property* MeshWorkflowControl.RestrictBoundaryNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Restrict the boundary nodes. The default value is true.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AppendData"></a>

### *property* MeshWorkflowControl.AppendData *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

This property lets the user choose whether to append the mesh data being read to the current PrimeMesh model or to clear the model content before the mesh data is being read. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Remesh"></a>

### *property* MeshWorkflowControl.Remesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Remesh if volume mesh fails. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DeleteInputScope"></a>

### *property* MeshWorkflowControl.DeleteInputScope *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Deletion of input scope. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ExcludeEnclosure"></a>

### *property* MeshWorkflowControl.ExcludeEnclosure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Excluding Enclosure . The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.ReverseSurfaceOrientation"></a>

### *property* MeshWorkflowControl.ReverseSurfaceOrientation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Reverse Surface Orientation. The default value is false.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.DataModelObjectCategory"></a>

### *property* MeshWorkflowControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Children"></a>

### *property* MeshWorkflowControl.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Figures"></a>

### *property* MeshWorkflowControl.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Images"></a>

### *property* MeshWorkflowControl.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshWorkflowControl.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Properties"></a>

### *property* MeshWorkflowControl.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.VisibleProperties"></a>

### *property* MeshWorkflowControl.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowControl.Delete"></a>

### MeshWorkflowControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetChildren"></a>

### MeshWorkflowControl.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshWorkflowControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AddFigure"></a>

### MeshWorkflowControl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.AddImage"></a>

### MeshWorkflowControl.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Activate"></a>

### MeshWorkflowControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CopyTo"></a>

### MeshWorkflowControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.Duplicate"></a>

### MeshWorkflowControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GroupAllSimilarChildren"></a>

### MeshWorkflowControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GroupSimilarObjects"></a>

### MeshWorkflowControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PropertyByName"></a>

### MeshWorkflowControl.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.PropertyByAPIName"></a>

### MeshWorkflowControl.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.CreateParameter"></a>

### MeshWorkflowControl.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.GetParameter"></a>

### MeshWorkflowControl.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowControl.RemoveParameter"></a>

### MeshWorkflowControl.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

