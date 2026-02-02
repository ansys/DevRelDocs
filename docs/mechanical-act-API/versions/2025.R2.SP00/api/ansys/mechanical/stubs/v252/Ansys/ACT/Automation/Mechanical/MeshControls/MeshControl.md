# `MeshControl`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.MeshControl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.MeshControl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MeshControl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MeshControl.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#MeshControl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MeshControl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshControl.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MeshControl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MeshControl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MeshControl.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MeshControl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateMesh`](#MeshControl.GenerateMesh)                       | Generate the Mesh.                                                                |
| [`GetChildren`](#MeshControl.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MeshControl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MeshControl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshControl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MeshControl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MeshControl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MeshControl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#MeshControl.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#MeshControl.Children)                               | Gets the list of children.                                    |
| [`Comments`](#MeshControl.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#MeshControl.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#MeshControl.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#MeshControl.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MeshControl.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshControl.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#MeshControl.ScopingMethod)                     | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#MeshControl.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#MeshControl.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshControl.Children"></a>

### *property* MeshControl.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Comments"></a>

### *property* MeshControl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.DataModelObjectCategory"></a>

### *property* MeshControl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Figures"></a>

### *property* MeshControl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Images"></a>

### *property* MeshControl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.InternalObject"></a>

### *property* MeshControl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Properties"></a>

### *property* MeshControl.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.ScopingMethod"></a>

### *property* MeshControl.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Suppressed"></a>

### *property* MeshControl.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.VisibleProperties"></a>

### *property* MeshControl.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshControl.Activate"></a>

### MeshControl.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.AddComment"></a>

### MeshControl.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.AddFigure"></a>

### MeshControl.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.AddImage"></a>

### MeshControl.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.CopyTo"></a>

### MeshControl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.CreateParameter"></a>

### MeshControl.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Delete"></a>

### MeshControl.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.Duplicate"></a>

### MeshControl.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GenerateMesh"></a>

### MeshControl.GenerateMesh() → [None](https://docs.python.org/3/library/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetChildren"></a>

### MeshControl.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GetParameter"></a>

### MeshControl.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GroupAllSimilarChildren"></a>

### MeshControl.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.GroupSimilarObjects"></a>

### MeshControl.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.PropertyByAPIName"></a>

### MeshControl.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.PropertyByName"></a>

### MeshControl.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.RemoveParameter"></a>

### MeshControl.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshControl.RenameBasedOnDefinition"></a>

### MeshControl.RenameBasedOnDefinition() → [None](https://docs.python.org/3/library/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

