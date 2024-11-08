# `GeometryImportGroup`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.GeometryImportGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GeometryImportGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GeometryImportGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#GeometryImportGroup.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#GeometryImportGroup.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GeometryImportGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddGeometryImport`](#GeometryImportGroup.AddGeometryImport)             | Create the object for working with an imported part.                              |
| [`AddImage`](#GeometryImportGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#GeometryImportGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#GeometryImportGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#GeometryImportGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#GeometryImportGroup.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#GeometryImportGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#GeometryImportGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GeometryImportGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#GeometryImportGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#GeometryImportGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#GeometryImportGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#GeometryImportGroup.Children)                               | Gets the list of children.                                    |
| [`Comments`](#GeometryImportGroup.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#GeometryImportGroup.Count)                                     | Get the number of child                                       |
| [`DataModelObjectCategory`](#GeometryImportGroup.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#GeometryImportGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#GeometryImportGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#GeometryImportGroup.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Item`](#GeometryImportGroup.Item)                                       | Item property.                                                |
| [`Properties`](#GeometryImportGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GeometryImportGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GeometryImportGroup.Children"></a>

### *property* GeometryImportGroup.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Comments"></a>

### *property* GeometryImportGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Count"></a>

### *property* GeometryImportGroup.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the number of child

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.DataModelObjectCategory"></a>

### *property* GeometryImportGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Figures"></a>

### *property* GeometryImportGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Images"></a>

### *property* GeometryImportGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.InternalObject"></a>

### *property* GeometryImportGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSGeometryImportGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Item"></a>

### *property* GeometryImportGroup.Item *: [Ansys.ACT.Automation.Mechanical.GeometryImport](GeometryImport.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.GeometryImport) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Properties"></a>

### *property* GeometryImportGroup.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.VisibleProperties"></a>

### *property* GeometryImportGroup.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GeometryImportGroup.Activate"></a>

### GeometryImportGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.AddComment"></a>

### GeometryImportGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.AddFigure"></a>

### GeometryImportGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.AddGeometryImport"></a>

### GeometryImportGroup.AddGeometryImport()

Create the object for working with an imported part.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.AddImage"></a>

### GeometryImportGroup.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.CopyTo"></a>

### GeometryImportGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.CreateParameter"></a>

### GeometryImportGroup.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.Duplicate"></a>

### GeometryImportGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetChildren"></a>

### GeometryImportGroup.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GetParameter"></a>

### GeometryImportGroup.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GroupAllSimilarChildren"></a>

### GeometryImportGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.GroupSimilarObjects"></a>

### GeometryImportGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.PropertyByAPIName"></a>

### GeometryImportGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.PropertyByName"></a>

### GeometryImportGroup.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GeometryImportGroup.RemoveParameter"></a>

### GeometryImportGroup.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

