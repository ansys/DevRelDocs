# `ElementControls`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElementControls"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElementControls

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElementControls.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ElementControls.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ElementControls.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElementControls.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElementControls.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ElementControls.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ElementControls.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ElementControls.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ElementControls.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ElementControls.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ElementControls.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ElementControls.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElementControls.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ElementControls.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ElementControls.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ElementControls.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ElementControls.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ElementControls.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ElementControls.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ElementControls.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ElementControls.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ElementControls.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ElementControls.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#ElementControls.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ElementControls.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ElementControls.Children"></a>

### *property* ElementControls.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Comments"></a>

### *property* ElementControls.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.DataModelObjectCategory"></a>

### *property* ElementControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Figures"></a>

### *property* ElementControls.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Images"></a>

### *property* ElementControls.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.InternalObject"></a>

### *property* ElementControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSElementControlsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Properties"></a>

### *property* ElementControls.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Suppressed"></a>

### *property* ElementControls.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.VisibleProperties"></a>

### *property* ElementControls.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementControls.Activate"></a>

### ElementControls.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.AddComment"></a>

### ElementControls.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.AddFigure"></a>

### ElementControls.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.AddImage"></a>

### ElementControls.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.CopyTo"></a>

### ElementControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.CreateParameter"></a>

### ElementControls.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Delete"></a>

### ElementControls.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Duplicate"></a>

### ElementControls.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.GetChildren"></a>

### ElementControls.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.GetParameter"></a>

### ElementControls.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.GroupAllSimilarChildren"></a>

### ElementControls.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.GroupSimilarObjects"></a>

### ElementControls.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.PropertyByAPIName"></a>

### ElementControls.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.PropertyByName"></a>

### ElementControls.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.RemoveParameter"></a>

### ElementControls.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

