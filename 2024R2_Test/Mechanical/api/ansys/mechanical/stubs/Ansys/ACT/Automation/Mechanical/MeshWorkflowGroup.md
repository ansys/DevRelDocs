# MeshWorkflowGroup

### *class* MeshWorkflowGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MeshWorkflowGroup.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GenerateWorkflows`](#MeshWorkflowGroup.GenerateWorkflows)             | Generates all mesh workflows, i.e. executes the “Input”, the “Steps”, and the “Output” as needed.                                                                                                                                                                                                                      |
|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MeshWorkflowGroup.ClearGeneratedData)           | Resets all mesh workflows completely, i.e. also the geometry scoping transferred into each mesh workflow will be reset and all inactive geometry parts/bodies will become active again. Steps, controls, and outcomes will be reset to their initial state while any user-defined property settings will remain as-is. |
| [`AddMeshWorkflow`](#MeshWorkflowGroup.AddMeshWorkflow)                 | Adds a new workflow to the “MeshWorkflowGroup” object.                                                                                                                                                                                                                                                                 |
| [`Delete`](#MeshWorkflowGroup.Delete)                                   | Run the Delete action.                                                                                                                                                                                                                                                                                                 |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                           |
| [`GetChildren`](#id1)                                                   | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                           |
| [`AddComment`](#MeshWorkflowGroup.AddComment)                           | Creates a new child Comment.                                                                                                                                                                                                                                                                                           |
| [`AddFigure`](#MeshWorkflowGroup.AddFigure)                             | Creates a new child Figure.                                                                                                                                                                                                                                                                                            |
| [`AddImage`](#MeshWorkflowGroup.AddImage)                               | Creates a new child Image.                                                                                                                                                                                                                                                                                             |
| [`Activate`](#MeshWorkflowGroup.Activate)                               | Activate the current object.                                                                                                                                                                                                                                                                                           |
| [`CopyTo`](#MeshWorkflowGroup.CopyTo)                                   | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                             |
| [`Duplicate`](#MeshWorkflowGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                                         |
| [`GroupAllSimilarChildren`](#MeshWorkflowGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                                |
| [`GroupSimilarObjects`](#MeshWorkflowGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                                    |
| [`PropertyByName`](#MeshWorkflowGroup.PropertyByName)                   | Get a property by its unique name.                                                                                                                                                                                                                                                                                     |
| [`PropertyByAPIName`](#MeshWorkflowGroup.PropertyByAPIName)             | Get a property by its API name.                                                                                                                                                                                                                                                                                        |
| [`CreateParameter`](#MeshWorkflowGroup.CreateParameter)                 | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                                |
| [`GetParameter`](#MeshWorkflowGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                                |
| [`RemoveParameter`](#MeshWorkflowGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                                      |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ActiveWorkflow`](#MeshWorkflowGroup.ActiveWorkflow)                                                               | Gets the ActiveWorkflow.                                      |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#MeshWorkflowGroup.Children)                                                                           | Gets the list of children.                                    |
| [`Comments`](#MeshWorkflowGroup.Comments)                                                                           | Gets the list of associated comments.                         |
| [`Figures`](#MeshWorkflowGroup.Figures)                                                                             | Gets the list of associated figures.                          |
| [`Images`](#MeshWorkflowGroup.Images)                                                                               | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshWorkflowGroup.Properties)                                                                       | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshWorkflowGroup.VisibleProperties)                                                         | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MeshWorkflowGroup
```

## Property detail

### *property* MeshWorkflowGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowGroup.ActiveWorkflow *: [Ansys.ACT.Automation.Mechanical.MeshWorkflow](MeshWorkflow.md#MeshWorkflow) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveWorkflow.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MeshWorkflowGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MeshWorkflowGroup.GenerateWorkflows()

Generates all mesh workflows, i.e. executes the “Input”, the “Steps”, and the “Output” as needed.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.ClearGeneratedData()

Resets all mesh workflows completely, i.e. also the geometry scoping transferred into each mesh workflow will be reset and all inactive geometry parts/bodies will become active again. Steps, controls, and outcomes will be reset to their initial state while any user-defined property settings will remain as-is.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.AddMeshWorkflow(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#WorkflowType))

Adds a new workflow to the “MeshWorkflowGroup” object.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MeshWorkflowGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
