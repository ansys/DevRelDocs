# `MeshWorkflowStepGroup`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup

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
|---------------------------|----------------------------------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.                                     |
| `NumberOfCores`           | Defines how many CPU cores to be used in an operation (if supported by the operation). |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                                           |
| `Children`                | Gets the list of children.                                                             |
| `Figures`                 | Gets the list of associated figures.                                                   |
| `Images`                  | Gets the list of associated images.                                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                     |
| `Properties`              | Gets the list of properties for this object.                                           |
| `VisibleProperties`       | Gets the list of properties that are visible for this object.                          |

<a id="property-detail"></a>

## Property detail

### *property* MeshWorkflowStepGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelWorkflowAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.NumberOfCores *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Defines how many CPU cores to be used in an operation (if supported by the operation).

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowStepGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### MeshWorkflowStepGroup.AddStep(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType))

Add another operation to the sequence of steps to be executed for the mesh workflow.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData()

Deletes all steps and reset workflow type to undefined and also resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained.

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

### MeshWorkflowStepGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

