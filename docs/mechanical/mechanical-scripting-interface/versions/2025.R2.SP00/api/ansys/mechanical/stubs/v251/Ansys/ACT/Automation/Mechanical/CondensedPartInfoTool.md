# `CondensedPartInfoTool`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CondensedPartInfoTool"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CondensedPartInfoTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CondensedPartInfoTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CondensedPartInfoTool.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#CondensedPartInfoTool.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#CondensedPartInfoTool.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#CondensedPartInfoTool.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CondensedPartInfoTool.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CondensedPartInfoTool.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CondensedPartInfoTool.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CondensedPartInfoTool.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CondensedPartInfoTool.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CondensedPartInfoTool.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CondensedPartInfoTool.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CondensedPartInfoTool.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CondensedPartInfoTool.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CondensedPartInfoTool.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#CondensedPartInfoTool.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CondensedPartInfoTool.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CondensedPartInfoTool.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Images`](#CondensedPartInfoTool.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CondensedPartInfoTool.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#CondensedPartInfoTool.Properties)                           | Gets the list of properties for this object.                  |
| [`Text`](#CondensedPartInfoTool.Text)                                       | Gets the Text.                                                |
| [`UpdateInterval`](#CondensedPartInfoTool.UpdateInterval)                   | Gets or sets the UpdateInterval.                              |
| [`VisibleProperties`](#CondensedPartInfoTool.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CondensedPartInfoTool.Children"></a>

### *property* CondensedPartInfoTool.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.Comments"></a>

### *property* CondensedPartInfoTool.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.DataModelObjectCategory"></a>

### *property* CondensedPartInfoTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.Images"></a>

### *property* CondensedPartInfoTool.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.InternalObject"></a>

### *property* CondensedPartInfoTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartInfoToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.Properties"></a>

### *property* CondensedPartInfoTool.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.Text"></a>

### *property* CondensedPartInfoTool.Text *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Text.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.UpdateInterval"></a>

### *property* CondensedPartInfoTool.UpdateInterval *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdateInterval.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.VisibleProperties"></a>

### *property* CondensedPartInfoTool.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CondensedPartInfoTool.Activate"></a>

### CondensedPartInfoTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.AddComment"></a>

### CondensedPartInfoTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.AddImage"></a>

### CondensedPartInfoTool.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.CopyTo"></a>

### CondensedPartInfoTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.CreateParameter"></a>

### CondensedPartInfoTool.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.Delete"></a>

### CondensedPartInfoTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.Duplicate"></a>

### CondensedPartInfoTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.GetChildren"></a>

### CondensedPartInfoTool.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.GetParameter"></a>

### CondensedPartInfoTool.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.GroupAllSimilarChildren"></a>

### CondensedPartInfoTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.GroupSimilarObjects"></a>

### CondensedPartInfoTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.PropertyByAPIName"></a>

### CondensedPartInfoTool.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.PropertyByName"></a>

### CondensedPartInfoTool.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartInfoTool.RemoveParameter"></a>

### CondensedPartInfoTool.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

