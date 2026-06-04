# `GenericCrack`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.GenericCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GenericCrack

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GenericCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#GenericCrack.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#GenericCrack.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#GenericCrack.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GenericCrack.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GenericCrack.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#GenericCrack.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#GenericCrack.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#GenericCrack.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#GenericCrack.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#GenericCrack.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#GenericCrack.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#GenericCrack.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GenericCrack.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#GenericCrack.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#GenericCrack.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#GenericCrack.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#GenericCrack.Children)                               | Gets the list of children.                                    |
| [`Comments`](#GenericCrack.Comments)                               | Gets the list of associated comments.                         |
| [`CrackID`](#GenericCrack.CrackID)                                 | Gets the CrackID.                                             |
| [`DataModelObjectCategory`](#GenericCrack.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#GenericCrack.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#GenericCrack.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#GenericCrack.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GenericCrack.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#GenericCrack.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`VisibleProperties`](#GenericCrack.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GenericCrack.Children"></a>

### *property* GenericCrack.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Comments"></a>

### *property* GenericCrack.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.CrackID"></a>

### *property* GenericCrack.CrackID *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.DataModelObjectCategory"></a>

### *property* GenericCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Figures"></a>

### *property* GenericCrack.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Images"></a>

### *property* GenericCrack.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.InternalObject"></a>

### *property* GenericCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Properties"></a>

### *property* GenericCrack.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.ReadOnly"></a>

### *property* GenericCrack.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.VisibleProperties"></a>

### *property* GenericCrack.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GenericCrack.Activate"></a>

### GenericCrack.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.AddCommandSnippet"></a>

### GenericCrack.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.AddComment"></a>

### GenericCrack.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.AddFigure"></a>

### GenericCrack.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.AddImage"></a>

### GenericCrack.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.CopyTo"></a>

### GenericCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.CreateParameter"></a>

### GenericCrack.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Delete"></a>

### GenericCrack.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.Duplicate"></a>

### GenericCrack.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetChildren"></a>

### GenericCrack.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GetParameter"></a>

### GenericCrack.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GroupAllSimilarChildren"></a>

### GenericCrack.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.GroupSimilarObjects"></a>

### GenericCrack.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.PropertyByAPIName"></a>

### GenericCrack.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.PropertyByName"></a>

### GenericCrack.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GenericCrack.RemoveParameter"></a>

### GenericCrack.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

