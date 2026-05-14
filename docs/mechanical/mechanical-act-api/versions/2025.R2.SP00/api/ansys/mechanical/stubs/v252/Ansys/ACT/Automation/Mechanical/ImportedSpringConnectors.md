# `ImportedSpringConnectors`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedSpringConnectors"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedSpringConnectors

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedSpringConnectors.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedSpringConnectors.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedSpringConnectors.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedSpringConnectors.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedSpringConnectors.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedSpringConnectors.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedSpringConnectors.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedSpringConnectors.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedSpringConnectors.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedSpringConnectors.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedSpringConnectors.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedSpringConnectors.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedSpringConnectors.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedSpringConnectors.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedSpringConnectors.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedSpringConnectors.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedSpringConnectors.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedSpringConnectors.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#ImportedSpringConnectors.Count)                                     | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedSpringConnectors.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedSpringConnectors.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedSpringConnectors.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedSpringConnectors.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedSpringConnectors.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedSpringConnectors.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#ImportedSpringConnectors.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ImportedSpringConnectors.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedSpringConnectors.Children"></a>

### *property* ImportedSpringConnectors.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.Comments"></a>

### *property* ImportedSpringConnectors.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.Count"></a>

### *property* ImportedSpringConnectors.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.DataModelObjectCategory"></a>

### *property* ImportedSpringConnectors.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.Figures"></a>

### *property* ImportedSpringConnectors.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.Images"></a>

### *property* ImportedSpringConnectors.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.InternalObject"></a>

### *property* ImportedSpringConnectors.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.Properties"></a>

### *property* ImportedSpringConnectors.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.ReadOnly"></a>

### *property* ImportedSpringConnectors.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.Suppressed"></a>

### *property* ImportedSpringConnectors.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.VisibleProperties"></a>

### *property* ImportedSpringConnectors.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedSpringConnectors.Activate"></a>

### ImportedSpringConnectors.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.AddComment"></a>

### ImportedSpringConnectors.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.AddFigure"></a>

### ImportedSpringConnectors.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.AddImage"></a>

### ImportedSpringConnectors.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.CopyTo"></a>

### ImportedSpringConnectors.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.CreateParameter"></a>

### ImportedSpringConnectors.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.Delete"></a>

### ImportedSpringConnectors.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.Duplicate"></a>

### ImportedSpringConnectors.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.GetChildren"></a>

### ImportedSpringConnectors.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.GetParameter"></a>

### ImportedSpringConnectors.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.GroupAllSimilarChildren"></a>

### ImportedSpringConnectors.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.GroupSimilarObjects"></a>

### ImportedSpringConnectors.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.PropertyByAPIName"></a>

### ImportedSpringConnectors.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.PropertyByName"></a>

### ImportedSpringConnectors.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedSpringConnectors.RemoveParameter"></a>

### ImportedSpringConnectors.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

