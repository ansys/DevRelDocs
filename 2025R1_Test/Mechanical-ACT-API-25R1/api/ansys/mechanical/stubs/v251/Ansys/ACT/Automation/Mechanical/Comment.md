# `Comment`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Comment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Comment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Comment.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Comment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Comment.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Comment.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Comment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Comment.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Comment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Comment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Comment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Comment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Comment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Comment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------|---------------------------------------------------------------|
| [`Author`](#Comment.Author)                                   | Gets or sets the Author.                                      |
| [`Children`](#Comment.Children)                               | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#Comment.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`InternalObject`](#Comment.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Comment.Properties)                           | Gets the list of properties for this object.                  |
| [`Text`](#Comment.Text)                                       | Gets the Text.                                                |
| [`VisibleProperties`](#Comment.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Comment.Author"></a>

### *property* Comment.Author *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Author.

<!-- !! processed by numpydoc !! -->

<a id="Comment.Children"></a>

### *property* Comment.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Comment.DataModelObjectCategory"></a>

### *property* Comment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Comment.InternalObject"></a>

### *property* Comment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCommentAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Comment.Properties"></a>

### *property* Comment.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Comment.Text"></a>

### *property* Comment.Text *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Text.

<!-- !! processed by numpydoc !! -->

<a id="Comment.VisibleProperties"></a>

### *property* Comment.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Comment.Activate"></a>

### Comment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Comment.CopyTo"></a>

### Comment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Comment.CreateParameter"></a>

### Comment.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Comment.Delete"></a>

### Comment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Comment.Duplicate"></a>

### Comment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Comment.GetChildren"></a>

### Comment.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Comment.GetParameter"></a>

### Comment.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Comment.GroupAllSimilarChildren"></a>

### Comment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Comment.GroupSimilarObjects"></a>

### Comment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Comment.PropertyByAPIName"></a>

### Comment.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Comment.PropertyByName"></a>

### Comment.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Comment.RemoveParameter"></a>

### Comment.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

