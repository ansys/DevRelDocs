# `ImportedCoordinateSystems`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedCoordinateSystems"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedCoordinateSystems

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedCoordinateSystems.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedCoordinateSystems.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedCoordinateSystems.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedCoordinateSystems.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedCoordinateSystems.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedCoordinateSystems.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedCoordinateSystems.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedCoordinateSystems.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedCoordinateSystems.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedCoordinateSystems.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedCoordinateSystems.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedCoordinateSystems.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedCoordinateSystems.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedCoordinateSystems.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedCoordinateSystems.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedCoordinateSystems.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedCoordinateSystems.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedCoordinateSystems.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#ImportedCoordinateSystems.Count)                                     | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedCoordinateSystems.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedCoordinateSystems.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedCoordinateSystems.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedCoordinateSystems.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedCoordinateSystems.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedCoordinateSystems.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#ImportedCoordinateSystems.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ImportedCoordinateSystems.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedCoordinateSystems.Children"></a>

### *property* ImportedCoordinateSystems.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Comments"></a>

### *property* ImportedCoordinateSystems.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Count"></a>

### *property* ImportedCoordinateSystems.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.DataModelObjectCategory"></a>

### *property* ImportedCoordinateSystems.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Figures"></a>

### *property* ImportedCoordinateSystems.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Images"></a>

### *property* ImportedCoordinateSystems.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.InternalObject"></a>

### *property* ImportedCoordinateSystems.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Properties"></a>

### *property* ImportedCoordinateSystems.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.ReadOnly"></a>

### *property* ImportedCoordinateSystems.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Suppressed"></a>

### *property* ImportedCoordinateSystems.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.VisibleProperties"></a>

### *property* ImportedCoordinateSystems.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCoordinateSystems.Activate"></a>

### ImportedCoordinateSystems.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.AddComment"></a>

### ImportedCoordinateSystems.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.AddFigure"></a>

### ImportedCoordinateSystems.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.AddImage"></a>

### ImportedCoordinateSystems.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.CopyTo"></a>

### ImportedCoordinateSystems.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.CreateParameter"></a>

### ImportedCoordinateSystems.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Delete"></a>

### ImportedCoordinateSystems.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.Duplicate"></a>

### ImportedCoordinateSystems.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.GetChildren"></a>

### ImportedCoordinateSystems.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.GetParameter"></a>

### ImportedCoordinateSystems.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.GroupAllSimilarChildren"></a>

### ImportedCoordinateSystems.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.GroupSimilarObjects"></a>

### ImportedCoordinateSystems.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.PropertyByAPIName"></a>

### ImportedCoordinateSystems.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.PropertyByName"></a>

### ImportedCoordinateSystems.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCoordinateSystems.RemoveParameter"></a>

### ImportedCoordinateSystems.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

