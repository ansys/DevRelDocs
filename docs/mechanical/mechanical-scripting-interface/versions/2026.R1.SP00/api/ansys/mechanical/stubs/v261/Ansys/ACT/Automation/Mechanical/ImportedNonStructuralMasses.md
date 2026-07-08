# `ImportedNonStructuralMasses`

<a id="ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.ImportedNonStructuralMasses"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedNonStructuralMasses

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines an Imported Non Structural Mass object.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedNonStructuralMasses.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedNonStructuralMasses.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedNonStructuralMasses.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedNonStructuralMasses.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedNonStructuralMasses.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedNonStructuralMasses.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedNonStructuralMasses.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedNonStructuralMasses.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedNonStructuralMasses.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedNonStructuralMasses.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedNonStructuralMasses.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedNonStructuralMasses.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedNonStructuralMasses.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedNonStructuralMasses.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedNonStructuralMasses.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedNonStructuralMasses.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedNonStructuralMasses.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#ImportedNonStructuralMasses.Count)                                     | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedNonStructuralMasses.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#ImportedNonStructuralMasses.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedNonStructuralMasses.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedNonStructuralMasses.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedNonStructuralMasses.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedNonStructuralMasses.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#ImportedNonStructuralMasses.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ImportedNonStructuralMasses.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedNonStructuralMasses.Children"></a>

### *property* ImportedNonStructuralMasses.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.Comments"></a>

### *property* ImportedNonStructuralMasses.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.Count"></a>

### *property* ImportedNonStructuralMasses.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.DataModelObjectCategory"></a>

### *property* ImportedNonStructuralMasses.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.Figures"></a>

### *property* ImportedNonStructuralMasses.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.Images"></a>

### *property* ImportedNonStructuralMasses.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.InternalObject"></a>

### *property* ImportedNonStructuralMasses.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.Properties"></a>

### *property* ImportedNonStructuralMasses.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.ReadOnly"></a>

### *property* ImportedNonStructuralMasses.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.Suppressed"></a>

### *property* ImportedNonStructuralMasses.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.VisibleProperties"></a>

### *property* ImportedNonStructuralMasses.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedNonStructuralMasses.Activate"></a>

### ImportedNonStructuralMasses.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.AddComment"></a>

### ImportedNonStructuralMasses.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.AddFigure"></a>

### ImportedNonStructuralMasses.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.AddImage"></a>

### ImportedNonStructuralMasses.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.CopyTo"></a>

### ImportedNonStructuralMasses.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.CreateParameter"></a>

### ImportedNonStructuralMasses.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.Delete"></a>

### ImportedNonStructuralMasses.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.Duplicate"></a>

### ImportedNonStructuralMasses.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.GetChildren"></a>

### ImportedNonStructuralMasses.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.GetParameter"></a>

### ImportedNonStructuralMasses.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.GroupAllSimilarChildren"></a>

### ImportedNonStructuralMasses.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.GroupSimilarObjects"></a>

### ImportedNonStructuralMasses.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.PropertyByAPIName"></a>

### ImportedNonStructuralMasses.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.PropertyByName"></a>

### ImportedNonStructuralMasses.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedNonStructuralMasses.RemoveParameter"></a>

### ImportedNonStructuralMasses.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

