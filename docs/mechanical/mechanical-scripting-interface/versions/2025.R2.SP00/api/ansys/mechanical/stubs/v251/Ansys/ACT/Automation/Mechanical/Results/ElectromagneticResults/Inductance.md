# `Inductance`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.Inductance"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.Inductance

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Inductance.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Inductance.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Inductance.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#Inductance.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Inductance.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Inductance.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Inductance.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Inductance.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Inductance.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Inductance.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Inductance.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Inductance.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Inductance.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Inductance.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Inductance.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Inductance.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Inductance.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Inductance.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Images`](#Inductance.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Inductance.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Multiplier`](#Inductance.Multiplier)                           | Gets or sets the Multiplier.                                  |
| [`Properties`](#Inductance.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Inductance.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Inductance.Children"></a>

### *property* Inductance.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Comments"></a>

### *property* Inductance.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.DataModelObjectCategory"></a>

### *property* Inductance.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Images"></a>

### *property* Inductance.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.InternalObject"></a>

### *property* Inductance.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSResultTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Multiplier"></a>

### *property* Inductance.Multiplier *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Multiplier.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Properties"></a>

### *property* Inductance.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.VisibleProperties"></a>

### *property* Inductance.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Inductance.Activate"></a>

### Inductance.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.AddComment"></a>

### Inductance.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.AddImage"></a>

### Inductance.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Inductance.CopyTo"></a>

### Inductance.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.CreateParameter"></a>

### Inductance.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Delete"></a>

### Inductance.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.Duplicate"></a>

### Inductance.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetChildren"></a>

### Inductance.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GetParameter"></a>

### Inductance.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GroupAllSimilarChildren"></a>

### Inductance.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.GroupSimilarObjects"></a>

### Inductance.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.PropertyByAPIName"></a>

### Inductance.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Inductance.PropertyByName"></a>

### Inductance.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Inductance.RemoveParameter"></a>

### Inductance.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

