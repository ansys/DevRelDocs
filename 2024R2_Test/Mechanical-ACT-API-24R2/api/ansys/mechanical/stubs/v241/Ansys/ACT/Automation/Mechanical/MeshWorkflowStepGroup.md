# `MeshWorkflowStepGroup`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelWorkflow.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AddStep`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.AddStep)                                                         | Add another operation to the sequence of steps to be executed for the mesh workflow.                                                                                                                                                                                                                                              |
| [`DeleteAllStepsAndClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData) | Deletes all steps and reset workflow type to undefined and also resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained. |
| [`ExecuteAllSteps`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.ExecuteAllSteps)                                         | Executes all steps defined under the “StepGroup” object (which is the “Steps” node in the UI).                                                                                                                                                                                                                                    |
| [`ExecuteNextStep`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.ExecuteNextStep)                                         | Executes the next step, i.e. the next operation which is ready to be executed under the parent “StepGroup” object.                                                                                                                                                                                                                |
| [`ExecuteUpToStep`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.ExecuteUpToStep)                                         | Executes any not yet ready steps up to and including the specified step.                                                                                                                                                                                                                                                          |
| [`RevertToStep`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.RevertToStep)                                               | Revert to the specified step; if no checkpoint is available, then an exception will be raised.                                                                                                                                                                                                                                    |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.Delete)                                                           | Run the Delete action.                                                                                                                                                                                                                                                                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#id1)                                                                               | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#id1)                                                                               | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.AddFigure)                                                     | Creates a new child Figure.                                                                                                                                                                                                                                                                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.AddImage)                                                       | Creates a new child Image.                                                                                                                                                                                                                                                                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.Activate)                                                       | Activate the current object.                                                                                                                                                                                                                                                                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.CopyTo)                                                           | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.Duplicate)                                                     | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.GroupAllSimilarChildren)                         | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.GroupSimilarObjects)                                 | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.PropertyByName)                                           | Get a property by its unique name.                                                                                                                                                                                                                                                                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.PropertyByAPIName)                                     | Get a property by its API name.                                                                                                                                                                                                                                                                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.CreateParameter)                                         | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.GetParameter)                                               | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.RemoveParameter)                                         | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                                                 |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#id0)                                                    | Gets the internal object. For advanced usage only.                                     |
| [`NumberOfCores`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.NumberOfCores)                     | Defines how many CPU cores to be used in an operation (if supported by the operation). |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                           |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.Children)                               | Gets the list of children.                                                             |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.Figures)                                 | Gets the list of associated figures.                                                   |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.Images)                                   | Gets the list of associated images.                                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#id0)                                                    | Gets the internal object. For advanced usage only.                                     |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.Properties)                           | Gets the list of properties for this object.                                           |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshWorkflowStepGroup.md#MeshWorkflowStepGroup.VisibleProperties)             | Gets the list of properties that are visible for this object.                          |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowStepGroup.InternalObject"></a>

### *property* MeshWorkflowStepGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelWorkflowAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.NumberOfCores"></a>

### *property* MeshWorkflowStepGroup.NumberOfCores *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Defines how many CPU cores to be used in an operation (if supported by the operation).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DataModelObjectCategory"></a>

### *property* MeshWorkflowStepGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Children"></a>

### *property* MeshWorkflowStepGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Figures"></a>

### *property* MeshWorkflowStepGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Images"></a>

### *property* MeshWorkflowStepGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshWorkflowStepGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Properties"></a>

### *property* MeshWorkflowStepGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.VisibleProperties"></a>

### *property* MeshWorkflowStepGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowStepGroup.AddStep"></a>

### MeshWorkflowStepGroup.AddStep(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType))

Add another operation to the sequence of steps to be executed for the mesh workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData"></a>

### MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData()

Deletes all steps and reset workflow type to undefined and also resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ExecuteAllSteps"></a>

### MeshWorkflowStepGroup.ExecuteAllSteps()

Executes all steps defined under the “StepGroup” object (which is the “Steps” node in the UI).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ExecuteNextStep"></a>

### MeshWorkflowStepGroup.ExecuteNextStep()

Executes the next step, i.e. the next operation which is ready to be executed under the parent “StepGroup” object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ExecuteUpToStep"></a>

### MeshWorkflowStepGroup.ExecuteUpToStep(arg: System.Object)

Executes any not yet ready steps up to and including the specified step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.RevertToStep"></a>

### MeshWorkflowStepGroup.RevertToStep(arg: System.Object)

Revert to the specified step; if no checkpoint is available, then an exception will be raised.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Delete"></a>

### MeshWorkflowStepGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetChildren"></a>

### MeshWorkflowStepGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshWorkflowStepGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AddFigure"></a>

### MeshWorkflowStepGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AddImage"></a>

### MeshWorkflowStepGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Activate"></a>

### MeshWorkflowStepGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CopyTo"></a>

### MeshWorkflowStepGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Duplicate"></a>

### MeshWorkflowStepGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GroupAllSimilarChildren"></a>

### MeshWorkflowStepGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GroupSimilarObjects"></a>

### MeshWorkflowStepGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PropertyByName"></a>

### MeshWorkflowStepGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PropertyByAPIName"></a>

### MeshWorkflowStepGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CreateParameter"></a>

### MeshWorkflowStepGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetParameter"></a>

### MeshWorkflowStepGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.RemoveParameter"></a>

### MeshWorkflowStepGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

