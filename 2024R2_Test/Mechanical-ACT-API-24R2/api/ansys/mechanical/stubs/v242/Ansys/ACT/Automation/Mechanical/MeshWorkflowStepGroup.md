# `MeshWorkflowStepGroup`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelWorkflow.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `AddStep`                             | Add another operation to the sequence of steps to be executed for the mesh workflow.                                                                                                                                                                                                                                              |
| `DeleteAllStepsAndClearGeneratedData` | Deletes all steps and reset workflow type to undefined and also resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained. |
| `AddSettings`                         | Add the settings of the input SettingsType to the Steps node.                                                                                                                                                                                                                                                                     |
| `PropagateSettings`                   | Propagate the settings of the input SettingsType to the attributes of the Step nodes. The meshing attributes of the Step nodes will then be automatically defined based on the physical parameters of the settings. Otherwise, the meshing attributes need to be manually specified.                                              |
| `DeleteSettings`                      | Delete the settings of the input SettingsType from the Steps node. All the Settings specific entries are removed automatically to the Steps details.                                                                                                                                                                              |
| `ExecuteAllSteps`                     | Executes all steps defined under the “StepGroup” object (which is the “Steps” node in the UI).                                                                                                                                                                                                                                    |
| `ExecuteNextStep`                     | Executes the next step, i.e. the next operation which is ready to be executed under the parent “StepGroup” object.                                                                                                                                                                                                                |
| `ExecuteUpToStep`                     | Executes any not yet ready steps up to and including the specified step.                                                                                                                                                                                                                                                          |
| `RevertToStep`                        | Revert to the specified step; if no checkpoint is available, then an exception will be raised.                                                                                                                                                                                                                                    |
| `Delete`                              | Run the Delete action.                                                                                                                                                                                                                                                                                                            |
| `GetChildren`                         | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                      |
| `GetChildren`                         | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                      |
| `AddFigure`                           | Creates a new child Figure.                                                                                                                                                                                                                                                                                                       |
| `AddImage`                            | Creates a new child Image.                                                                                                                                                                                                                                                                                                        |
| `Activate`                            | Activate the current object.                                                                                                                                                                                                                                                                                                      |
| `CopyTo`                              | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                                        |
| `Duplicate`                           | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                                                    |
| `GroupAllSimilarChildren`             | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                                           |
| `GroupSimilarObjects`                 | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                                               |
| `PropertyByName`                      | Get a property by its unique name.                                                                                                                                                                                                                                                                                                |
| `PropertyByAPIName`                   | Get a property by its API name.                                                                                                                                                                                                                                                                                                   |
| `CreateParameter`                     | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                                           |
| `GetParameter`                        | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                                           |
| `RemoveParameter`                     | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                                                 |

### Properties

| Name | Description |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.                                                                                                                                                                         |
| `NumberOfAcousticLayers`  | Gets the number of layers in the acoustic region. This value is determined based on whether quadratic elements are enabled (see P:Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup.QuadraticElements).                |
| `NumberOfPMLs`            | Gets the number of layers in the perfectly meshed layers region. This value is determined based on whether quadratic elements are enabled (see P:Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup.QuadraticElements). |
| `NumberOfCores`           | Defines how many CPU cores to be used in an operation (if supported by the operation).                                                                                                                                     |
| `AnalysisFrequency`       | Defines the analysis frequency of the acoustic scenario.                                                                                                                                                                   |
| `SpeedOfSound`            | Defines the speed of sound in the acoustic scenario.                                                                                                                                                                       |
| `MeshSize`                | Defines the mesh size of the acoustic scenario based on the wave velocity and the frequency.                                                                                                                               |
| `QuadraticElements`       | Defines if the quadratic elements are used for the mesh generation.                                                                                                                                                        |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                                                                                                                                                                               |
| `Children`                | Gets the list of children.                                                                                                                                                                                                 |
| `Figures`                 | Gets the list of associated figures.                                                                                                                                                                                       |
| `Images`                  | Gets the list of associated images.                                                                                                                                                                                        |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                                                                                                                                                         |
| `Properties`              | Gets the list of properties for this object.                                                                                                                                                                               |
| `VisibleProperties`       | Gets the list of properties that are visible for this object.                                                                                                                                                              |

<a id="property-detail"></a>

## Property detail

### *property* MeshWorkflowStepGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelWorkflowAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.NumberOfAcousticLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of layers in the acoustic region. This value is determined based on whether quadratic elements are enabled (see P:Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup.QuadraticElements).

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.NumberOfPMLs *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of layers in the perfectly meshed layers region. This value is determined based on whether quadratic elements are enabled (see P:Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup.QuadraticElements).

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.NumberOfCores *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Defines how many CPU cores to be used in an operation (if supported by the operation).

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.AnalysisFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Defines the analysis frequency of the acoustic scenario.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.SpeedOfSound *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Defines the speed of sound in the acoustic scenario.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.MeshSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Defines the mesh size of the acoustic scenario based on the wave velocity and the frequency.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.QuadraticElements *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Defines if the quadratic elements are used for the mesh generation.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### MeshWorkflowStepGroup.AddStep(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType))

Add another operation to the sequence of steps to be executed for the mesh workflow.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData()

Deletes all steps and reset workflow type to undefined and also resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.AddSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType))

Add the settings of the input SettingsType to the Steps node.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.PropagateSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType))

Propagate the settings of the input SettingsType to the attributes of the Step nodes. The meshing attributes of the Step nodes will then be automatically defined based on the physical parameters of the settings. Otherwise, the meshing attributes need to be manually specified.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.DeleteSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType))

Delete the settings of the input SettingsType from the Steps node. All the Settings specific entries are removed automatically to the Steps details.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.ExecuteAllSteps()

Executes all steps defined under the “StepGroup” object (which is the “Steps” node in the UI).

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.ExecuteNextStep()

Executes the next step, i.e. the next operation which is ready to be executed under the parent “StepGroup” object.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.ExecuteUpToStep(arg: System.Object)

Executes any not yet ready steps up to and including the specified step.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.RevertToStep(arg: System.Object)

Revert to the specified step; if no checkpoint is available, then an exception will be raised.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

