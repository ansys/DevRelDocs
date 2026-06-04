# `ImportedPliesCollection`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedPliesCollection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedPliesCollection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedPliesCollection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedPliesCollection.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedPliesCollection.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedPliesCollection.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedPliesCollection.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedPliesCollection.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedPliesCollection.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#ImportedPliesCollection.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedPliesCollection.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedPliesCollection.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedPliesCollection.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedPliesCollection.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedPliesCollection.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedPliesCollection.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedPliesCollection.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedPliesCollection.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedPliesCollection.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ImportedPliesCollection.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedPliesCollection.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedPliesCollection.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedPliesCollection.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedPliesCollection.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedPliesCollection.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`VisibleProperties`](#ImportedPliesCollection.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedPliesCollection.Children"></a>

### *property* ImportedPliesCollection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.Comments"></a>

### *property* ImportedPliesCollection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.DataModelObjectCategory"></a>

### *property* ImportedPliesCollection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.Figures"></a>

### *property* ImportedPliesCollection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.Images"></a>

### *property* ImportedPliesCollection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.InternalObject"></a>

### *property* ImportedPliesCollection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSImportedPliesCollectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.Properties"></a>

### *property* ImportedPliesCollection.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.ReadOnly"></a>

### *property* ImportedPliesCollection.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.VisibleProperties"></a>

### *property* ImportedPliesCollection.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedPliesCollection.Activate"></a>

### ImportedPliesCollection.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.AddComment"></a>

### ImportedPliesCollection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.AddFigure"></a>

### ImportedPliesCollection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.AddImage"></a>

### ImportedPliesCollection.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.CopyTo"></a>

### ImportedPliesCollection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.CreateParameter"></a>

### ImportedPliesCollection.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.Duplicate"></a>

### ImportedPliesCollection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.GetChildren"></a>

### ImportedPliesCollection.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.GetParameter"></a>

### ImportedPliesCollection.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.GroupAllSimilarChildren"></a>

### ImportedPliesCollection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.GroupSimilarObjects"></a>

### ImportedPliesCollection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.PropertyByAPIName"></a>

### ImportedPliesCollection.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.PropertyByName"></a>

### ImportedPliesCollection.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedPliesCollection.RemoveParameter"></a>

### ImportedPliesCollection.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

