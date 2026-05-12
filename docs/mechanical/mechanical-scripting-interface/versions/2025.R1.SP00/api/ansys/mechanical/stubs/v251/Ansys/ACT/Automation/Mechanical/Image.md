# `Image`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Image

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Image.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Image.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Image.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#Image.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Image.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Image.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Image.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Image.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Image.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Image.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Image.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Image.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Image.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Image.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Image.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Image.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Image.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Image.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Images`](#Image.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#Image.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Image.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Image.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Image.Children"></a>

### *property* Image.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Image.Comments"></a>

### *property* Image.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Image.DataModelObjectCategory"></a>

### *property* Image.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Image.Images"></a>

### *property* Image.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Image.InternalObject"></a>

### *property* Image.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAdvancedPostOutputAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Image.Properties"></a>

### *property* Image.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Image.VisibleProperties"></a>

### *property* Image.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Image.Activate"></a>

### Image.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Image.AddComment"></a>

### Image.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Image.AddImage"></a>

### Image.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Image.CopyTo"></a>

### Image.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Image.CreateParameter"></a>

### Image.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Image.Delete"></a>

### Image.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Image.Duplicate"></a>

### Image.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Image.GetChildren"></a>

### Image.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Image.GetParameter"></a>

### Image.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Image.GroupAllSimilarChildren"></a>

### Image.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Image.GroupSimilarObjects"></a>

### Image.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Image.PropertyByAPIName"></a>

### Image.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Image.PropertyByName"></a>

### Image.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Image.RemoveParameter"></a>

### Image.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

