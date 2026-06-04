# `ImportedElementOrientations`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ImportedElementOrientations"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedElementOrientations

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedElementOrientations.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedElementOrientations.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedElementOrientations.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedElementOrientations.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedElementOrientations.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedElementOrientations.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedElementOrientations.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedElementOrientations.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedElementOrientations.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedElementOrientations.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedElementOrientations.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedElementOrientations.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedElementOrientations.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedElementOrientations.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedElementOrientations.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedElementOrientations.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedElementOrientations.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedElementOrientations.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#ImportedElementOrientations.Count)                                     | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedElementOrientations.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedElementOrientations.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedElementOrientations.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedElementOrientations.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedElementOrientations.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedElementOrientations.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#ImportedElementOrientations.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ImportedElementOrientations.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedElementOrientations.Children"></a>

### *property* ImportedElementOrientations.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Comments"></a>

### *property* ImportedElementOrientations.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Count"></a>

### *property* ImportedElementOrientations.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.DataModelObjectCategory"></a>

### *property* ImportedElementOrientations.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Figures"></a>

### *property* ImportedElementOrientations.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Images"></a>

### *property* ImportedElementOrientations.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.InternalObject"></a>

### *property* ImportedElementOrientations.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Properties"></a>

### *property* ImportedElementOrientations.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.ReadOnly"></a>

### *property* ImportedElementOrientations.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Suppressed"></a>

### *property* ImportedElementOrientations.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.VisibleProperties"></a>

### *property* ImportedElementOrientations.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedElementOrientations.Activate"></a>

### ImportedElementOrientations.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.AddComment"></a>

### ImportedElementOrientations.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.AddFigure"></a>

### ImportedElementOrientations.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.AddImage"></a>

### ImportedElementOrientations.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.CopyTo"></a>

### ImportedElementOrientations.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.CreateParameter"></a>

### ImportedElementOrientations.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Delete"></a>

### ImportedElementOrientations.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.Duplicate"></a>

### ImportedElementOrientations.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.GetChildren"></a>

### ImportedElementOrientations.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.GetParameter"></a>

### ImportedElementOrientations.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.GroupAllSimilarChildren"></a>

### ImportedElementOrientations.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.GroupSimilarObjects"></a>

### ImportedElementOrientations.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.PropertyByAPIName"></a>

### ImportedElementOrientations.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.PropertyByName"></a>

### ImportedElementOrientations.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedElementOrientations.RemoveParameter"></a>

### ImportedElementOrientations.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

