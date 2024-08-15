# `MeshWorkflowControl`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ControlType`                     | Returns the type of the control.                                                                                                                                                                                                          |
| `EnableCheckpoint`                | Flag whether to enable a checkpoint or not. The default value is false.                                                                                                                                                                   |
| `InnerScopeOutcome`               | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure. |
| `ExternalScopeOutcome`            | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure. |
| `ScopeOutcome`                    | If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure. |
| `ScopeDefinition`                 | It is defined by value or outcome.                                                                                                                                                                                                        |
| `ScopeMethod`                     | The method can be label/zone/part.                                                                                                                                                                                                        |
| `InnerScopeDefinition`            | It is defined by value or outcome depending on if the Inner scope is defined manually by the user or defined based on a previous outcome.                                                                                                 |
| `InnerScopeMethod`                | The method can be label/zone/part and it is applied to inner region of enclosure.                                                                                                                                                         |
| `ExternalScopeDefinition`         | It is defined by value or outcome depending on if the External scope is defined manual by the user or defined based on a previous outcome.                                                                                                |
| `ExternalScopeMethod`             | The method can be label/zone/part and it is applied to external region of enclosure.                                                                                                                                                      |
| `SurfaceMeshType`                 | This property gives control over what type of elements need to be generated in the mesh. The supported surface mesh types are Triangles and Quadrilaterals.                                                                               |
| `MeshFlowControl`                 | This property gives control over the flow of mesh during surface mesh generation. The supported modes are None, and Global Cartesian.                                                                                                     |
| `TriangleCountReductionMode`      | This property gives control over the mode/degree of triangle count reduction during surface mesh generation. The supported modes are None, Conservative and Aggressive.                                                                   |
| `VolumeMeshType`                  | Type of Volume elements such as Tetrahedrons and Hex.                                                                                                                                                                                     |
| `CenterPosition`                  | It is defined by “Centered”, “Minimal”, and “User Defined”.                                                                                                                                                                               |
| `RegionType`                      | It is defined by Material Point or External.                                                                                                                                                                                              |
| `MaterialPointType`               | It defines the type of material point, it can be “Include” or “Exclude”.                                                                                                                                                                  |
| `XCoordinate`                     | It defines the X Coordinate.                                                                                                                                                                                                              |
| `ZCoordinate`                     | It defines the Z Coordinate.                                                                                                                                                                                                              |
| `YCoordinate`                     | It defines the Y Coordinate.                                                                                                                                                                                                              |
| `DeleteEmptyVolumes`              | This property is used to enable or disable the automatic deletion of empty topo volumes  during mesh to topology conversion. The default value is false.                                                                                  |
| `Material`                        | Gets or sets the Material.                                                                                                                                                                                                                |
| `MaterialName`                    | Gets or sets the Material Name.                                                                                                                                                                                                           |
| `InternalObject`                  | Gets the internal object. For advanced usage only.                                                                                                                                                                                        |
| `ExternalScopePattern`            | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                             |
| `InnerScopePattern`               | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                             |
| `SmoothingIterations`             | Allows user to input number of iterations needed to achieve good mesh results.                                                                                                                                                            |
| `MinimalNumberOfVolumetricLayers` | It determines the minimal number of layers of volume elements to be created around the scoped body.                                                                                                                                       |
| `ExternalLabelName`               | This property is used to rename the default external label name generated during execution of step.                                                                                                                                       |
| `InternalLabelName`               | This property is used to rename the default Internal label name generated during execution of step.                                                                                                                                       |
| `NumberOfLayers`                  | Number of layers of mesh elements.                                                                                                                                                                                                        |
| `FaceZoneName`                    | This property is used to define the name of the default face zone name generated during execution of step.                                                                                                                                |
| `Filename`                        | Assign full path to the filename would like to Import/Export.                                                                                                                                                                             |
| `Filenames`                       | Assign paths with '|' seperator to this property to read multiple files, pass without seperator if single file.                                                                                                                           |
| `NumberOfAttempts`                | Number of attempts for mesh convergence.                                                                                                                                                                                                  |
| `LabelName`                       | This property is used to rename the default label name generated during execution of step.                                                                                                                                                |
| `PartName`                        | This property allows user to rename the default part name generated during wrap operation.                                                                                                                                                |
| `PercentageIncrement`             | The number of volumetric Layers determines the number of layers. This property decides whether all the layers are an equal size (default 0.0) or they should gradually increase the size of volume element than previous element.         |
| `ScaleFactor`                     | Scale Factor is used to scale shapes in different dimensions.                                                                                                                                                                             |
| `ScopePattern`                    | The value can be a name of a region or a predefined patterns to select multiple region names.                                                                                                                                             |
| `TargetSkewness`                  | Set Limit to the skewness of an element. Higher the skewness value, expecting a better mesh result.                                                                                                                                       |
| `GrowthRate`                      | Gradient of element size as each layer grows.                                                                                                                                                                                             |
| `VolumeZoneName`                  | This property is used to rename the default volume zone name generated during execution of step.                                                                                                                                          |
| `ElementSize`                     | Define element size to achieve desired mesh results. User can achieve coarse, medium, or fine mesh by varying this value.                                                                                                                 |
| `MinimalRadius`                   | It defines the desired minimal radius of the spherical enclosure.                                                                                                                                                                         |
| `ConstantHeight`                  | Height of a single layer of mesh elements.                                                                                                                                                                                                |
| `DihedralAngle`                   | The dihedral angle is the angle between the normal vectors of two element faces.                                                                                                                                                          |
| `AutomaticExternalScope`          | The external scoping method and pattern of the current step is decided programmatically. The default value is false.                                                                                                                      |
| `SmoothingPreserveVolume`         | The option to enable and disable the volume preserving smoothing. If enabled, the smoothing will preserve the initial volume of the input. The default value is false.                                                                    |
| `CreateQuads`                     |                                                                                                                                                                                                                                           |
| `RestrictBoundaryNodes`           | Restrict the boundary nodes. The default value is true.                                                                                                                                                                                   |
| `AppendData`                      | This property lets the user choose whether to append the mesh data being read to the current PrimeMesh model or to clear the model content before the mesh data is being read. The default value is false.                                |
| `Remesh`                          | Remesh if volume mesh fails. The default value is false.                                                                                                                                                                                  |
| `DeleteInputScope`                | Deletion of input scope. The default value is false.                                                                                                                                                                                      |
| `ExcludeEnclosure`                | Excluding Enclosure . The default value is false.                                                                                                                                                                                         |
| `ReverseSurfaceOrientation`       | Reverse Surface Orientation. The default value is false.                                                                                                                                                                                  |
| `DataModelObjectCategory`         | Gets the current DataModelObject's category.                                                                                                                                                                                              |
| `Children`                        | Gets the list of children.                                                                                                                                                                                                                |
| `Figures`                         | Gets the list of associated figures.                                                                                                                                                                                                      |
| `Images`                          | Gets the list of associated images.                                                                                                                                                                                                       |
| `InternalObject`                  | Gets the internal object. For advanced usage only.                                                                                                                                                                                        |
| `Properties`                      | Gets the list of properties for this object.                                                                                                                                                                                              |
| `VisibleProperties`               | Gets the list of properties that are visible for this object.                                                                                                                                                                             |

<a id="property-detail"></a>

## Property detail

### *property* MeshWorkflowControl.ControlType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the type of the control.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.EnableCheckpoint *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CheckpointDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/CheckpointDefinitionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.CheckpointDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Flag whether to enable a checkpoint or not. The default value is false.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.InnerScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ExternalScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ScopeOutcome *: [Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome](MeshWorkflowOutcome.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome) | [None](https://docs.python.org/3/library/constants.html#None)*

If the InnerScopeDefinition is set to Outcome, then this property is visible. It defines the previous step outcome. This way we input the results of a previous step to the current step. The input applies to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by value or outcome.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

The method can be label/zone/part.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.InnerScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by value or outcome depending on if the Inner scope is defined manually by the user or defined based on a previous outcome.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.InnerScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

The method can be label/zone/part and it is applied to inner region of enclosure.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ExternalScopeDefinition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeDefinedByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by value or outcome depending on if the External scope is defined manual by the user or defined based on a previous outcome.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ExternalScopeMethod *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ScopeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.ScopeType) | [None](https://docs.python.org/3/library/constants.html#None)*

The method can be label/zone/part and it is applied to external region of enclosure.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.SurfaceMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SurfaceMeshType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SurfaceMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

This property gives control over what type of elements need to be generated in the mesh. The supported surface mesh types are Triangles and Quadrilaterals.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.MeshFlowControl *: Ansys.Mechanical.DataModel.Enums.MeshFlowControl | [None](https://docs.python.org/3/library/constants.html#None)*

This property gives control over the flow of mesh during surface mesh generation. The supported modes are None, and Global Cartesian.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.TriangleCountReductionMode *: Ansys.Mechanical.DataModel.Enums.TriangleCountReductionMode | [None](https://docs.python.org/3/library/constants.html#None)*

This property gives control over the mode/degree of triangle count reduction during surface mesh generation. The supported modes are None, Conservative and Aggressive.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.VolumeMeshType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.VolumeMeshType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/VolumeMeshType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.VolumeMeshType) | [None](https://docs.python.org/3/library/constants.html#None)*

Type of Volume elements such as Tetrahedrons and Hex.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.CenterPosition *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SphereCenterDefinitionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SphereCenterDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by “Centered”, “Minimal”, and “User Defined”.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.RegionType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WrapperRegionType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WrapperRegionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WrapperRegionType) | [None](https://docs.python.org/3/library/constants.html#None)*

It is defined by Material Point or External.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.MaterialPointType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/MaterialPointType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.MaterialPointType) | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the type of material point, it can be “Include” or “Exclude”.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the X Coordinate.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the Z Coordinate.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the Y Coordinate.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.DeleteEmptyVolumes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to enable or disable the automatic deletion of empty topo volumes  during mesh to topology conversion. The default value is false.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.MaterialName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material Name.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ExternalScopePattern *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.InnerScopePattern *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.SmoothingIterations *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Allows user to input number of iterations needed to achieve good mesh results.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.MinimalNumberOfVolumetricLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

It determines the minimal number of layers of volume elements to be created around the scoped body.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ExternalLabelName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default external label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.InternalLabelName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default Internal label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Number of layers of mesh elements.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.FaceZoneName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to define the name of the default face zone name generated during execution of step.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.Filename *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Assign full path to the filename would like to Import/Export.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.Filenames *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Assign paths with '|' seperator to this property to read multiple files, pass without seperator if single file.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.NumberOfAttempts *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Number of attempts for mesh convergence.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.LabelName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default label name generated during execution of step.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.PartName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

This property allows user to rename the default part name generated during wrap operation.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.PercentageIncrement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

The number of volumetric Layers determines the number of layers. This property decides whether all the layers are an equal size (default 0.0) or they should gradually increase the size of volume element than previous element.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Scale Factor is used to scale shapes in different dimensions.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ScopePattern *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The value can be a name of a region or a predefined patterns to select multiple region names.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.TargetSkewness *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Set Limit to the skewness of an element. Higher the skewness value, expecting a better mesh result.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gradient of element size as each layer grows.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.VolumeZoneName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

This property is used to rename the default volume zone name generated during execution of step.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Define element size to achieve desired mesh results. User can achieve coarse, medium, or fine mesh by varying this value.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.MinimalRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

It defines the desired minimal radius of the spherical enclosure.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ConstantHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Height of a single layer of mesh elements.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.DihedralAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

The dihedral angle is the angle between the normal vectors of two element faces.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.AutomaticExternalScope *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

The external scoping method and pattern of the current step is decided programmatically. The default value is false.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.SmoothingPreserveVolume *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

The option to enable and disable the volume preserving smoothing. If enabled, the smoothing will preserve the initial volume of the input. The default value is false.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.CreateQuads *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

### *property* MeshWorkflowControl.RestrictBoundaryNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Restrict the boundary nodes. The default value is true.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.AppendData *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

This property lets the user choose whether to append the mesh data being read to the current PrimeMesh model or to clear the model content before the mesh data is being read. The default value is false.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.Remesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Remesh if volume mesh fails. The default value is false.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.DeleteInputScope *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Deletion of input scope. The default value is false.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ExcludeEnclosure *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Excluding Enclosure . The default value is false.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.ReverseSurfaceOrientation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Reverse Surface Orientation. The default value is false.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowControl.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### MeshWorkflowControl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowControl.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

