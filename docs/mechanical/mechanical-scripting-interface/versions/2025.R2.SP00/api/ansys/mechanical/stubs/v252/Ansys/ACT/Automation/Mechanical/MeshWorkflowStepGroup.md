# `MeshWorkflowStepGroup`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelWorkflow.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowStepGroup.Activate)                                                       | Activate the current object.                                                                                                                                                                                                                                                                                                      |
| [`AddFigure`](#MeshWorkflowStepGroup.AddFigure)                                                     | Creates a new child Figure.                                                                                                                                                                                                                                                                                                       |
| [`AddImage`](#MeshWorkflowStepGroup.AddImage)                                                       | Creates a new child Image.                                                                                                                                                                                                                                                                                                        |
| [`AddSettings`](#MeshWorkflowStepGroup.AddSettings)                                                 | Add the settings of the input SettingsType to the Steps node.                                                                                                                                                                                                                                                                     |
| [`AddStep`](#MeshWorkflowStepGroup.AddStep)                                                         | Add another operation to the sequence of steps to be executed for the mesh workflow.                                                                                                                                                                                                                                              |
| [`ClearDataAndDisableCheckpoints`](#MeshWorkflowStepGroup.ClearDataAndDisableCheckpoints)           | Clear all checkpoints data and disable checkpointing for the workflow.                                                                                                                                                                                                                                                            |
| [`ConvertSizingSettings`](#MeshWorkflowStepGroup.ConvertSizingSettings)                             | Convert the active sizing settings to the input SettingsType for the Steps node.                                                                                                                                                                                                                                                  |
| [`CopyTo`](#MeshWorkflowStepGroup.CopyTo)                                                           | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                                        |
| [`CreateParameter`](#MeshWorkflowStepGroup.CreateParameter)                                         | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                                           |
| [`Delete`](#MeshWorkflowStepGroup.Delete)                                                           | Run the Delete action.                                                                                                                                                                                                                                                                                                            |
| [`DeleteAllStepsAndClearGeneratedData`](#MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData) | Deletes all steps and reset workflow type to undefined and also resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained. |
| [`DeleteSettings`](#MeshWorkflowStepGroup.DeleteSettings)                                           | Delete the settings of the input SettingsType from the Steps node. All the Settings specific entries are removed automatically to the Steps details.                                                                                                                                                                              |
| [`DisableAllCheckpoints`](#MeshWorkflowStepGroup.DisableAllCheckpoints)                             | Disables checkpoints for all editable steps in the workflow.                                                                                                                                                                                                                                                                      |
| [`Duplicate`](#MeshWorkflowStepGroup.Duplicate)                                                     | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                                                    |
| [`EnableAllCheckpoints`](#MeshWorkflowStepGroup.EnableAllCheckpoints)                               | Enables checkpoints for all editable steps in the workflow.                                                                                                                                                                                                                                                                       |
| [`ExecuteAllSteps`](#MeshWorkflowStepGroup.ExecuteAllSteps)                                         | Executes all steps defined under the “StepGroup” object (which is the “Steps” node in the UI).                                                                                                                                                                                                                                    |
| [`ExecuteNextStep`](#MeshWorkflowStepGroup.ExecuteNextStep)                                         | Executes the next step, i.e. the next operation which is ready to be executed under the parent “StepGroup” object.                                                                                                                                                                                                                |
| [`ExecuteUpToStep`](#MeshWorkflowStepGroup.ExecuteUpToStep)                                         | Executes any not yet ready steps up to and including the specified step.                                                                                                                                                                                                                                                          |
| [`GetChildren`](#MeshWorkflowStepGroup.GetChildren)                                                 | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                      |
| [`GetParameter`](#MeshWorkflowStepGroup.GetParameter)                                               | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                                           |
| [`GroupAllSimilarChildren`](#MeshWorkflowStepGroup.GroupAllSimilarChildren)                         | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                                           |
| [`GroupSimilarObjects`](#MeshWorkflowStepGroup.GroupSimilarObjects)                                 | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                                               |
| [`PropagateSettings`](#MeshWorkflowStepGroup.PropagateSettings)                                     | Propagate the settings of the input SettingsType to the attributes of the Step nodes. The meshing attributes of the Step nodes will then be automatically defined based on the physical parameters of the settings. Otherwise, the meshing attributes need to be manually specified.                                              |
| [`PropertyByAPIName`](#MeshWorkflowStepGroup.PropertyByAPIName)                                     | Get a property by its API name.                                                                                                                                                                                                                                                                                                   |
| [`PropertyByName`](#MeshWorkflowStepGroup.PropertyByName)                                           | Get a property by its unique name.                                                                                                                                                                                                                                                                                                |
| [`RemoveParameter`](#MeshWorkflowStepGroup.RemoveParameter)                                         | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                                                 |
| [`RevertToLastCheckpoint`](#MeshWorkflowStepGroup.RevertToLastCheckpoint)                           | Revert to the last available checkpoint; if no checkpoint is available, then an exception will be raised.                                                                                                                                                                                                                         |
| [`RevertToStep`](#MeshWorkflowStepGroup.RevertToStep)                                               | Revert to the specified step; if no checkpoint is available, then an exception will be raised.                                                                                                                                                                                                                                    |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AnalysisFrequency`](#MeshWorkflowStepGroup.AnalysisFrequency)               | Defines the analysis frequency of the acoustic scenario.                                                                                                                                                                                      |
| [`BoundingBoxFactor`](#MeshWorkflowStepGroup.BoundingBoxFactor)               | Gets or sets the bounding box factor applied to compute automatically the StackerMeshSize from the model. If set to 0, the default bouding box factor is used.                                                                                |
| [`Children`](#MeshWorkflowStepGroup.Children)                                 | Gets the list of children.                                                                                                                                                                                                                    |
| [`CurvatureAngle`](#MeshWorkflowStepGroup.CurvatureAngle)                     | Gets or sets the curvature angle of the mesh to be used in workflow steps. If set to 0, the default curvature angle is used.                                                                                                                  |
| [`DataModelObjectCategory`](#MeshWorkflowStepGroup.DataModelObjectCategory)   | Gets the current DataModelObject’s category.                                                                                                                                                                                                  |
| [`DirectionX`](#MeshWorkflowStepGroup.DirectionX)                             | Gets or sets the X component of stacking direction used by stacker operations , with respect to Global Coordinate System.                                                                                                                     |
| [`DirectionY`](#MeshWorkflowStepGroup.DirectionY)                             | Gets or sets the Y component of stacking direction to be used in stacker steps, with respect to Global Coordinate System.                                                                                                                     |
| [`DirectionZ`](#MeshWorkflowStepGroup.DirectionZ)                             | Gets or sets the Z component of stacking direction to be used in stacker steps, with respect to Global Coordinate System.                                                                                                                     |
| [`Figures`](#MeshWorkflowStepGroup.Figures)                                   | Gets the list of associated figures.                                                                                                                                                                                                          |
| [`GlobalMeshSize`](#MeshWorkflowStepGroup.GlobalMeshSize)                     | Gets or sets the element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.                                                                                              |
| [`GrowthRate`](#MeshWorkflowStepGroup.GrowthRate)                             | Gets or sets the growth rate of the mesh to be used in workflow steps. If set to 0, the default growth rate is used.                                                                                                                          |
| [`Images`](#MeshWorkflowStepGroup.Images)                                     | Gets the list of associated images.                                                                                                                                                                                                           |
| [`InternalObject`](#MeshWorkflowStepGroup.InternalObject)                     | Gets the internal object. For advanced usage only.                                                                                                                                                                                            |
| [`LateralDefeatureSize`](#MeshWorkflowStepGroup.LateralDefeatureSize)         | Gets or sets the defeature size to be used along the lateral direction of stacking in stacker operations.                                                                                                                                     |
| [`MaximumMeshSize`](#MeshWorkflowStepGroup.MaximumMeshSize)                   | Gets or sets the element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.                                                                                              |
| [`MeshSize`](#MeshWorkflowStepGroup.MeshSize)                                 | Defines the mesh size of the acoustic scenario based on the wave velocity and the frequency.                                                                                                                                                  |
| [`MinimumMeshSize`](#MeshWorkflowStepGroup.MinimumMeshSize)                   | Gets or sets the minimal element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.                                                                                      |
| [`NonStackableBodyMeshSize`](#MeshWorkflowStepGroup.NonStackableBodyMeshSize) | Gets or sets the element size to be used in meshing non-stackable bodies in stacker workflow.                                                                                                                                                 |
| [`NumberOfAcousticLayers`](#MeshWorkflowStepGroup.NumberOfAcousticLayers)     | Gets or sets the number of layers in the acoustic region. If set to 0, the value defaults to 1 if QuadraticElements is enabled (see P:Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup.QuadraticElements) or 2 otherwise.                |
| [`NumberOfCores`](#MeshWorkflowStepGroup.NumberOfCores)                       | Defines how many CPU cores to be used in an operation (if supported by the operation).                                                                                                                                                        |
| [`NumberOfPMLs`](#MeshWorkflowStepGroup.NumberOfPMLs)                         | Gets or sets the number of layers in the perfectly meshed layers region. If set to 0, the value defaults to 2 if QuadraticElements is enabled (see P:Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup.QuadraticElements) or 4 otherwise. |
| [`OriginX`](#MeshWorkflowStepGroup.OriginX)                                   | Gets or sets the X coordinate location of base face for the volume flattening step.                                                                                                                                                           |
| [`OriginY`](#MeshWorkflowStepGroup.OriginY)                                   | Gets or sets the Y coordinate location of base face for the volume flattening step.                                                                                                                                                           |
| [`OriginZ`](#MeshWorkflowStepGroup.OriginZ)                                   | Gets or sets the Z coordinate location of base face for the volume flattening step.                                                                                                                                                           |
| [`Properties`](#MeshWorkflowStepGroup.Properties)                             | Gets the list of properties for this object.                                                                                                                                                                                                  |
| [`QuadraticElements`](#MeshWorkflowStepGroup.QuadraticElements)               | Defines if the quadratic elements are used for the mesh generation.                                                                                                                                                                           |
| [`SpeedOfSound`](#MeshWorkflowStepGroup.SpeedOfSound)                         | Defines the speed of sound in the acoustic scenario.                                                                                                                                                                                          |
| [`StackingDefeatureSize`](#MeshWorkflowStepGroup.StackingDefeatureSize)       | Gets or sets the defeature size to be used along the stacking direction in stacker operations.                                                                                                                                                |
| [`VisibleProperties`](#MeshWorkflowStepGroup.VisibleProperties)               | Gets the list of properties that are visible for this object.                                                                                                                                                                                 |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowStepGroup.AnalysisFrequency"></a>

### *property* MeshWorkflowStepGroup.AnalysisFrequency *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines the analysis frequency of the acoustic scenario.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.BoundingBoxFactor"></a>

### *property* MeshWorkflowStepGroup.BoundingBoxFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the bounding box factor applied to compute automatically the StackerMeshSize from the model. If set to 0, the default bouding box factor is used.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Children"></a>

### *property* MeshWorkflowStepGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CurvatureAngle"></a>

### *property* MeshWorkflowStepGroup.CurvatureAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the curvature angle of the mesh to be used in workflow steps. If set to 0, the default curvature angle is used.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DataModelObjectCategory"></a>

### *property* MeshWorkflowStepGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DirectionX"></a>

### *property* MeshWorkflowStepGroup.DirectionX *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the X component of stacking direction used by stacker operations , with respect to Global Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DirectionY"></a>

### *property* MeshWorkflowStepGroup.DirectionY *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y component of stacking direction to be used in stacker steps, with respect to Global Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DirectionZ"></a>

### *property* MeshWorkflowStepGroup.DirectionZ *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Z component of stacking direction to be used in stacker steps, with respect to Global Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Figures"></a>

### *property* MeshWorkflowStepGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GlobalMeshSize"></a>

### *property* MeshWorkflowStepGroup.GlobalMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GrowthRate"></a>

### *property* MeshWorkflowStepGroup.GrowthRate *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the growth rate of the mesh to be used in workflow steps. If set to 0, the default growth rate is used.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Images"></a>

### *property* MeshWorkflowStepGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.InternalObject"></a>

### *property* MeshWorkflowStepGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelWorkflowAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.LateralDefeatureSize"></a>

### *property* MeshWorkflowStepGroup.LateralDefeatureSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the defeature size to be used along the lateral direction of stacking in stacker operations.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.MaximumMeshSize"></a>

### *property* MeshWorkflowStepGroup.MaximumMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.MeshSize"></a>

### *property* MeshWorkflowStepGroup.MeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines the mesh size of the acoustic scenario based on the wave velocity and the frequency.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.MinimumMeshSize"></a>

### *property* MeshWorkflowStepGroup.MinimumMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the minimal element size of the mesh to be used in workflow steps. If set to 0, the value is automatically defined based on the model size.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.NonStackableBodyMeshSize"></a>

### *property* MeshWorkflowStepGroup.NonStackableBodyMeshSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the element size to be used in meshing non-stackable bodies in stacker workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.NumberOfAcousticLayers"></a>

### *property* MeshWorkflowStepGroup.NumberOfAcousticLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of layers in the acoustic region. If set to 0, the value defaults to 1 if QuadraticElements is enabled (see P:Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup.QuadraticElements) or 2 otherwise.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.NumberOfCores"></a>

### *property* MeshWorkflowStepGroup.NumberOfCores *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines how many CPU cores to be used in an operation (if supported by the operation).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.NumberOfPMLs"></a>

### *property* MeshWorkflowStepGroup.NumberOfPMLs *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of layers in the perfectly meshed layers region. If set to 0, the value defaults to 2 if QuadraticElements is enabled (see P:Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup.QuadraticElements) or 4 otherwise.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.OriginX"></a>

### *property* MeshWorkflowStepGroup.OriginX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the X coordinate location of base face for the volume flattening step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.OriginY"></a>

### *property* MeshWorkflowStepGroup.OriginY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Y coordinate location of base face for the volume flattening step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.OriginZ"></a>

### *property* MeshWorkflowStepGroup.OriginZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Z coordinate location of base face for the volume flattening step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Properties"></a>

### *property* MeshWorkflowStepGroup.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.QuadraticElements"></a>

### *property* MeshWorkflowStepGroup.QuadraticElements *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines if the quadratic elements are used for the mesh generation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SpeedOfSound"></a>

### *property* MeshWorkflowStepGroup.SpeedOfSound *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines the speed of sound in the acoustic scenario.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.StackingDefeatureSize"></a>

### *property* MeshWorkflowStepGroup.StackingDefeatureSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the defeature size to be used along the stacking direction in stacker operations.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.VisibleProperties"></a>

### *property* MeshWorkflowStepGroup.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowStepGroup.Activate"></a>

### MeshWorkflowStepGroup.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AddFigure"></a>

### MeshWorkflowStepGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AddImage"></a>

### MeshWorkflowStepGroup.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AddSettings"></a>

### MeshWorkflowStepGroup.AddSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → [None](https://docs.python.org/3/library/constants.html#None)

Add the settings of the input SettingsType to the Steps node.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AddStep"></a>

### MeshWorkflowStepGroup.AddStep(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflowStep](MeshWorkflowStep.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshWorkflowStep)

Add another operation to the sequence of steps to be executed for the mesh workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ClearDataAndDisableCheckpoints"></a>

### MeshWorkflowStepGroup.ClearDataAndDisableCheckpoints() → [None](https://docs.python.org/3/library/constants.html#None)

Clear all checkpoints data and disable checkpointing for the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ConvertSizingSettings"></a>

### MeshWorkflowStepGroup.ConvertSizingSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → [None](https://docs.python.org/3/library/constants.html#None)

Convert the active sizing settings to the input SettingsType for the Steps node.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CopyTo"></a>

### MeshWorkflowStepGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CreateParameter"></a>

### MeshWorkflowStepGroup.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Delete"></a>

### MeshWorkflowStepGroup.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData"></a>

### MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Deletes all steps and reset workflow type to undefined and also resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DeleteSettings"></a>

### MeshWorkflowStepGroup.DeleteSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → [None](https://docs.python.org/3/library/constants.html#None)

Delete the settings of the input SettingsType from the Steps node. All the Settings specific entries are removed automatically to the Steps details.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DisableAllCheckpoints"></a>

### MeshWorkflowStepGroup.DisableAllCheckpoints() → [None](https://docs.python.org/3/library/constants.html#None)

Disables checkpoints for all editable steps in the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Duplicate"></a>

### MeshWorkflowStepGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.EnableAllCheckpoints"></a>

### MeshWorkflowStepGroup.EnableAllCheckpoints() → [None](https://docs.python.org/3/library/constants.html#None)

Enables checkpoints for all editable steps in the workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ExecuteAllSteps"></a>

### MeshWorkflowStepGroup.ExecuteAllSteps() → [None](https://docs.python.org/3/library/constants.html#None)

Executes all steps defined under the “StepGroup” object (which is the “Steps” node in the UI).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ExecuteNextStep"></a>

### MeshWorkflowStepGroup.ExecuteNextStep() → [None](https://docs.python.org/3/library/constants.html#None)

Executes the next step, i.e. the next operation which is ready to be executed under the parent “StepGroup” object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ExecuteUpToStep"></a>

### MeshWorkflowStepGroup.ExecuteUpToStep(arg: Any) → [None](https://docs.python.org/3/library/constants.html#None)

Executes any not yet ready steps up to and including the specified step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetChildren"></a>

### MeshWorkflowStepGroup.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetParameter"></a>

### MeshWorkflowStepGroup.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GroupAllSimilarChildren"></a>

### MeshWorkflowStepGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GroupSimilarObjects"></a>

### MeshWorkflowStepGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PropagateSettings"></a>

### MeshWorkflowStepGroup.PropagateSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType)) → [None](https://docs.python.org/3/library/constants.html#None)

Propagate the settings of the input SettingsType to the attributes of the Step nodes. The meshing attributes of the Step nodes will then be automatically defined based on the physical parameters of the settings. Otherwise, the meshing attributes need to be manually specified.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PropertyByAPIName"></a>

### MeshWorkflowStepGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PropertyByName"></a>

### MeshWorkflowStepGroup.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.RemoveParameter"></a>

### MeshWorkflowStepGroup.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.RevertToLastCheckpoint"></a>

### MeshWorkflowStepGroup.RevertToLastCheckpoint() → [None](https://docs.python.org/3/library/constants.html#None)

Revert to the last available checkpoint; if no checkpoint is available, then an exception will be raised.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.RevertToStep"></a>

### MeshWorkflowStepGroup.RevertToStep(arg: Any) → [None](https://docs.python.org/3/library/constants.html#None)

Revert to the specified step; if no checkpoint is available, then an exception will be raised.

<!-- !! processed by numpydoc !! -->

