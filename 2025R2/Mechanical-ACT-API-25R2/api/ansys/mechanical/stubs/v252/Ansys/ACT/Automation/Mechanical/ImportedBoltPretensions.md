# `ImportedBoltPretensions`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedBoltPretensions"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedBoltPretensions

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedBoltPretensions.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedBoltPretensions.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedBoltPretensions.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedBoltPretensions.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedBoltPretensions.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedBoltPretensions.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedBoltPretensions.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedBoltPretensions.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedBoltPretensions.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedBoltPretensions.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedBoltPretensions.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedBoltPretensions.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedBoltPretensions.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedBoltPretensions.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedBoltPretensions.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedBoltPretensions.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedBoltPretensions.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedBoltPretensions.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#ImportedBoltPretensions.Count)                                     | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedBoltPretensions.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedBoltPretensions.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedBoltPretensions.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedBoltPretensions.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedBoltPretensions.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedBoltPretensions.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#ImportedBoltPretensions.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ImportedBoltPretensions.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedBoltPretensions.Children"></a>

### *property* ImportedBoltPretensions.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.Comments"></a>

### *property* ImportedBoltPretensions.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.Count"></a>

### *property* ImportedBoltPretensions.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.DataModelObjectCategory"></a>

### *property* ImportedBoltPretensions.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.Figures"></a>

### *property* ImportedBoltPretensions.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.Images"></a>

### *property* ImportedBoltPretensions.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.InternalObject"></a>

### *property* ImportedBoltPretensions.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.Properties"></a>

### *property* ImportedBoltPretensions.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.ReadOnly"></a>

### *property* ImportedBoltPretensions.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.Suppressed"></a>

### *property* ImportedBoltPretensions.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.VisibleProperties"></a>

### *property* ImportedBoltPretensions.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedBoltPretensions.Activate"></a>

### ImportedBoltPretensions.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.AddComment"></a>

### ImportedBoltPretensions.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.AddFigure"></a>

### ImportedBoltPretensions.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.AddImage"></a>

### ImportedBoltPretensions.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.CopyTo"></a>

### ImportedBoltPretensions.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.CreateParameter"></a>

### ImportedBoltPretensions.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.Delete"></a>

### ImportedBoltPretensions.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.Duplicate"></a>

### ImportedBoltPretensions.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.GetChildren"></a>

### ImportedBoltPretensions.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.GetParameter"></a>

### ImportedBoltPretensions.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.GroupAllSimilarChildren"></a>

### ImportedBoltPretensions.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.GroupSimilarObjects"></a>

### ImportedBoltPretensions.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.PropertyByAPIName"></a>

### ImportedBoltPretensions.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.PropertyByName"></a>

### ImportedBoltPretensions.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedBoltPretensions.RemoveParameter"></a>

### ImportedBoltPretensions.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

