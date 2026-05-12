# `ExternalModelDataColl`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ExternalModelDataColl"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ExternalModelDataColl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ExternalModelDataColl.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ExternalModelDataColl.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ExternalModelDataColl.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ExternalModelDataColl.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ExternalModelDataColl.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ExternalModelDataColl.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ExternalModelDataColl.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ExternalModelDataColl.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ExternalModelDataColl.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ExternalModelDataColl.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ExternalModelDataColl.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ExternalModelDataColl.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ExternalModelDataColl.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ExternalModelDataColl.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ExternalModelDataColl.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ExternalModelDataColl.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ExternalModelDataColl.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ExternalModelDataColl.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#ExternalModelDataColl.Count)                                     | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ExternalModelDataColl.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ExternalModelDataColl.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ExternalModelDataColl.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ExternalModelDataColl.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ExternalModelDataColl.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ExternalModelDataColl.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#ExternalModelDataColl.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ExternalModelDataColl.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ExternalModelDataColl.Children"></a>

### *property* ExternalModelDataColl.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Comments"></a>

### *property* ExternalModelDataColl.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Count"></a>

### *property* ExternalModelDataColl.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.DataModelObjectCategory"></a>

### *property* ExternalModelDataColl.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Figures"></a>

### *property* ExternalModelDataColl.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Images"></a>

### *property* ExternalModelDataColl.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.InternalObject"></a>

### *property* ExternalModelDataColl.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Properties"></a>

### *property* ExternalModelDataColl.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.ReadOnly"></a>

### *property* ExternalModelDataColl.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Suppressed"></a>

### *property* ExternalModelDataColl.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.VisibleProperties"></a>

### *property* ExternalModelDataColl.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExternalModelDataColl.Activate"></a>

### ExternalModelDataColl.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddComment"></a>

### ExternalModelDataColl.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddFigure"></a>

### ExternalModelDataColl.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.AddImage"></a>

### ExternalModelDataColl.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.CopyTo"></a>

### ExternalModelDataColl.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.CreateParameter"></a>

### ExternalModelDataColl.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Delete"></a>

### ExternalModelDataColl.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.Duplicate"></a>

### ExternalModelDataColl.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetChildren"></a>

### ExternalModelDataColl.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GetParameter"></a>

### ExternalModelDataColl.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GroupAllSimilarChildren"></a>

### ExternalModelDataColl.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.GroupSimilarObjects"></a>

### ExternalModelDataColl.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.PropertyByAPIName"></a>

### ExternalModelDataColl.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.PropertyByName"></a>

### ExternalModelDataColl.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ExternalModelDataColl.RemoveParameter"></a>

### ExternalModelDataColl.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

