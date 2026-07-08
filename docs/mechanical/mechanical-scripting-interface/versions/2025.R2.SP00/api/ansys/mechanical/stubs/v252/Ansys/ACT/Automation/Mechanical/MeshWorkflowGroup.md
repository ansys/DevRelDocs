# `MeshWorkflowGroup`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshWorkflowGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshWorkflowGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshWorkflowGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#MeshWorkflowGroup.Activate)                                                             | Activate the current object.                                                                                                                                                                                                                                                                                           |
| [`AddComment`](#MeshWorkflowGroup.AddComment)                                                         | Creates a new child Comment.                                                                                                                                                                                                                                                                                           |
| [`AddFigure`](#MeshWorkflowGroup.AddFigure)                                                           | Creates a new child Figure.                                                                                                                                                                                                                                                                                            |
| [`AddImage`](#MeshWorkflowGroup.AddImage)                                                             | Creates a new child Image.                                                                                                                                                                                                                                                                                             |
| [`AddMeshWorkflow`](#MeshWorkflowGroup.AddMeshWorkflow)                                               | Adds a new workflow to the “MeshWorkflowGroup” object.                                                                                                                                                                                                                                                                 |
| [`ClearGeneratedData`](#MeshWorkflowGroup.ClearGeneratedData)                                         | Resets all mesh workflows completely, i.e. also the geometry scoping transferred into each mesh workflow will be reset and all inactive geometry parts/bodies will become active again. Steps, controls, and outcomes will be reset to their initial state while any user-defined property settings will remain as-is. |
| [`CopyTo`](#MeshWorkflowGroup.CopyTo)                                                                 | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                             |
| [`CreateParameter`](#MeshWorkflowGroup.CreateParameter)                                               | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                                |
| [`Delete`](#MeshWorkflowGroup.Delete)                                                                 | Run the Delete action.                                                                                                                                                                                                                                                                                                 |
| [`Duplicate`](#MeshWorkflowGroup.Duplicate)                                                           | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                                         |
| [`GenerateWorkflows`](#MeshWorkflowGroup.GenerateWorkflows)                                           | Generates all mesh workflows, i.e. executes the “Input”, the “Steps”, and the “Output” as needed.                                                                                                                                                                                                                      |
| [`GetChildren`](#MeshWorkflowGroup.GetChildren)                                                       | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                           |
| [`GetParameter`](#MeshWorkflowGroup.GetParameter)                                                     | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                                |
| [`GetSolidSurfaceMeshQualityWarningLimit`](#MeshWorkflowGroup.GetSolidSurfaceMeshQualityWarningLimit) | Get Mesh Quality Warning Limit                                                                                                                                                                                                                                                                                         |
| [`GroupAllSimilarChildren`](#MeshWorkflowGroup.GroupAllSimilarChildren)                               | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                                |
| [`GroupSimilarObjects`](#MeshWorkflowGroup.GroupSimilarObjects)                                       | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                                    |
| [`PropertyByAPIName`](#MeshWorkflowGroup.PropertyByAPIName)                                           | Get a property by its API name.                                                                                                                                                                                                                                                                                        |
| [`PropertyByName`](#MeshWorkflowGroup.PropertyByName)                                                 | Get a property by its unique name.                                                                                                                                                                                                                                                                                     |
| [`RemoveParameter`](#MeshWorkflowGroup.RemoveParameter)                                               | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                                      |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ActiveWorkflow`](#MeshWorkflowGroup.ActiveWorkflow)                   | Gets the currently active workflow object.                    |
| [`Children`](#MeshWorkflowGroup.Children)                               | Gets the list of children.                                    |
| [`Comments`](#MeshWorkflowGroup.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#MeshWorkflowGroup.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#MeshWorkflowGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#MeshWorkflowGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MeshWorkflowGroup.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshWorkflowGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshWorkflowGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowGroup.ActiveWorkflow"></a>

### *property* MeshWorkflowGroup.ActiveWorkflow *: [Ansys.ACT.Automation.Mechanical.MeshWorkflow](MeshWorkflow.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshWorkflow) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the currently active workflow object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Children"></a>

### *property* MeshWorkflowGroup.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Comments"></a>

### *property* MeshWorkflowGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.DataModelObjectCategory"></a>

### *property* MeshWorkflowGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Figures"></a>

### *property* MeshWorkflowGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Images"></a>

### *property* MeshWorkflowGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.InternalObject"></a>

### *property* MeshWorkflowGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Properties"></a>

### *property* MeshWorkflowGroup.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.VisibleProperties"></a>

### *property* MeshWorkflowGroup.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowGroup.Activate"></a>

### MeshWorkflowGroup.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AddComment"></a>

### MeshWorkflowGroup.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AddFigure"></a>

### MeshWorkflowGroup.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AddImage"></a>

### MeshWorkflowGroup.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.AddMeshWorkflow"></a>

### MeshWorkflowGroup.AddMeshWorkflow(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflow](MeshWorkflow.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshWorkflow)

Adds a new workflow to the “MeshWorkflowGroup” object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.ClearGeneratedData"></a>

### MeshWorkflowGroup.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Resets all mesh workflows completely, i.e. also the geometry scoping transferred into each mesh workflow will be reset and all inactive geometry parts/bodies will become active again. Steps, controls, and outcomes will be reset to their initial state while any user-defined property settings will remain as-is.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.CopyTo"></a>

### MeshWorkflowGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.CreateParameter"></a>

### MeshWorkflowGroup.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Delete"></a>

### MeshWorkflowGroup.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.Duplicate"></a>

### MeshWorkflowGroup.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GenerateWorkflows"></a>

### MeshWorkflowGroup.GenerateWorkflows() → [None](https://docs.python.org/3/library/constants.html#None)

Generates all mesh workflows, i.e. executes the “Input”, the “Steps”, and the “Output” as needed.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetChildren"></a>

### MeshWorkflowGroup.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetParameter"></a>

### MeshWorkflowGroup.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GetSolidSurfaceMeshQualityWarningLimit"></a>

### MeshWorkflowGroup.GetSolidSurfaceMeshQualityWarningLimit(meshMetric: [Ansys.Mechanical.DataModel.Enums.MeshMetricType](../../../Mechanical/DataModel/Enums/MeshMetricType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshMetricType)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Get Mesh Quality Warning Limit

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GroupAllSimilarChildren"></a>

### MeshWorkflowGroup.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.GroupSimilarObjects"></a>

### MeshWorkflowGroup.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.PropertyByAPIName"></a>

### MeshWorkflowGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.PropertyByName"></a>

### MeshWorkflowGroup.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowGroup.RemoveParameter"></a>

### MeshWorkflowGroup.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

