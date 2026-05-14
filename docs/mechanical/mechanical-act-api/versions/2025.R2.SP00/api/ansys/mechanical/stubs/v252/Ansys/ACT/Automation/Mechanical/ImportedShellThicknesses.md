# `ImportedShellThicknesses`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedShellThicknesses"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedShellThicknesses

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedShellThicknesses.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedShellThicknesses.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedShellThicknesses.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedShellThicknesses.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedShellThicknesses.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedShellThicknesses.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedShellThicknesses.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedShellThicknesses.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedShellThicknesses.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedShellThicknesses.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedShellThicknesses.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedShellThicknesses.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedShellThicknesses.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedShellThicknesses.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedShellThicknesses.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedShellThicknesses.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedShellThicknesses.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedShellThicknesses.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#ImportedShellThicknesses.Count)                                     | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedShellThicknesses.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedShellThicknesses.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedShellThicknesses.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedShellThicknesses.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedShellThicknesses.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedShellThicknesses.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#ImportedShellThicknesses.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ImportedShellThicknesses.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedShellThicknesses.Children"></a>

### *property* ImportedShellThicknesses.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Comments"></a>

### *property* ImportedShellThicknesses.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Count"></a>

### *property* ImportedShellThicknesses.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.DataModelObjectCategory"></a>

### *property* ImportedShellThicknesses.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Figures"></a>

### *property* ImportedShellThicknesses.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Images"></a>

### *property* ImportedShellThicknesses.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.InternalObject"></a>

### *property* ImportedShellThicknesses.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Properties"></a>

### *property* ImportedShellThicknesses.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.ReadOnly"></a>

### *property* ImportedShellThicknesses.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Suppressed"></a>

### *property* ImportedShellThicknesses.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.VisibleProperties"></a>

### *property* ImportedShellThicknesses.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedShellThicknesses.Activate"></a>

### ImportedShellThicknesses.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddComment"></a>

### ImportedShellThicknesses.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddFigure"></a>

### ImportedShellThicknesses.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.AddImage"></a>

### ImportedShellThicknesses.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.CopyTo"></a>

### ImportedShellThicknesses.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.CreateParameter"></a>

### ImportedShellThicknesses.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Delete"></a>

### ImportedShellThicknesses.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.Duplicate"></a>

### ImportedShellThicknesses.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetChildren"></a>

### ImportedShellThicknesses.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GetParameter"></a>

### ImportedShellThicknesses.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GroupAllSimilarChildren"></a>

### ImportedShellThicknesses.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.GroupSimilarObjects"></a>

### ImportedShellThicknesses.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.PropertyByAPIName"></a>

### ImportedShellThicknesses.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.PropertyByName"></a>

### ImportedShellThicknesses.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedShellThicknesses.RemoveParameter"></a>

### ImportedShellThicknesses.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

