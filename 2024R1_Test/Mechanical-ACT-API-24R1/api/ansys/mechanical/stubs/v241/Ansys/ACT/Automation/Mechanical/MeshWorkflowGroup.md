<!-- vale off -->

<a id="meshworkflowgroup"></a>

# `MeshWorkflowGroup`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowGroup"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflowGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshWorkflowGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`GenerateWorkflows`](#MeshWorkflowGroup.GenerateWorkflows)             | Generates all mesh workflows, i.e. executes the “Input”, the “Steps”, and the “Output” as needed.                                                                                                                                                                                                                      |
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

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`ActiveWorkflow`](#MeshWorkflowGroup.ActiveWorkflow)                   | Gets the ActiveWorkflow.                                      |
| [`DataModelObjectCategory`](#MeshWorkflowGroup.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#MeshWorkflowGroup.Children)                               | Gets the list of children.                                    |
| [`Comments`](#MeshWorkflowGroup.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#MeshWorkflowGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#MeshWorkflowGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshWorkflowGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshWorkflowGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowGroup.InternalObject"></a>

### *property* MeshWorkflowGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ActiveWorkflow"></a>

### *property* MeshWorkflowGroup.ActiveWorkflow *: [Ansys.ACT.Automation.Mechanical.MeshWorkflow](MeshWorkflow.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshWorkflow) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActiveWorkflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.DataModelObjectCategory"></a>

### *property* MeshWorkflowGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Children"></a>

### *property* MeshWorkflowGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Comments"></a>

### *property* MeshWorkflowGroup.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Figures"></a>

### *property* MeshWorkflowGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Images"></a>

### *property* MeshWorkflowGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshWorkflowGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Properties"></a>

### *property* MeshWorkflowGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.VisibleProperties"></a>

### *property* MeshWorkflowGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowGroup.GenerateWorkflows"></a>

### MeshWorkflowGroup.GenerateWorkflows()

Generates all mesh workflows, i.e. executes the “Input”, the “Steps”, and the “Output” as needed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ClearGeneratedData"></a>

### MeshWorkflowGroup.ClearGeneratedData()

Resets all mesh workflows completely, i.e. also the geometry scoping transferred into each mesh workflow will be reset and all inactive geometry parts/bodies will become active again. Steps, controls, and outcomes will be reset to their initial state while any user-defined property settings will remain as-is.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AddMeshWorkflow"></a>

### MeshWorkflowGroup.AddMeshWorkflow(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType))

Adds a new workflow to the “MeshWorkflowGroup” object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Delete"></a>

### MeshWorkflowGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetChildren"></a>

### MeshWorkflowGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshWorkflowGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AddComment"></a>

### MeshWorkflowGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AddFigure"></a>

### MeshWorkflowGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AddImage"></a>

### MeshWorkflowGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Activate"></a>

### MeshWorkflowGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.CopyTo"></a>

### MeshWorkflowGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Duplicate"></a>

### MeshWorkflowGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GroupAllSimilarChildren"></a>

### MeshWorkflowGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GroupSimilarObjects"></a>

### MeshWorkflowGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.PropertyByName"></a>

### MeshWorkflowGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.PropertyByAPIName"></a>

### MeshWorkflowGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.CreateParameter"></a>

### MeshWorkflowGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetParameter"></a>

### MeshWorkflowGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.RemoveParameter"></a>

### MeshWorkflowGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
