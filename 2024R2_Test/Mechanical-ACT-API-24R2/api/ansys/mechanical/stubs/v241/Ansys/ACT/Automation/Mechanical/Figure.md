# `Figure`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Figure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Figure.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Figure.AddComment)                           | Creates a new child Comment.                                                      |
| [`CopyTo`](#Figure.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Figure.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Figure.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Figure.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Figure.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Figure.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Figure.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Figure.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Figure.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Figure.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Figure.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Figure.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Figure.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Figure.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`InternalObject`](#Figure.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Figure.Properties)                           | Gets the list of properties for this object.                  |
| [`Text`](#Figure.Text)                                       | Gets or sets the Text.                                        |
| [`VisibleProperties`](#Figure.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Figure.Children"></a>

### *property* Figure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Figure.Comments"></a>

### *property* Figure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Figure.DataModelObjectCategory"></a>

### *property* Figure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Figure.InternalObject"></a>

### *property* Figure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFigureAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Figure.Properties"></a>

### *property* Figure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Figure.Text"></a>

### *property* Figure.Text *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Text.

<!-- !! processed by numpydoc !! -->

<a id="Figure.VisibleProperties"></a>

### *property* Figure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Figure.Activate"></a>

### Figure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Figure.AddComment"></a>

### Figure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Figure.CopyTo"></a>

### Figure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Figure.CreateParameter"></a>

### Figure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Figure.Delete"></a>

### Figure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Figure.Duplicate"></a>

### Figure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Figure.GetChildren"></a>

### Figure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Figure.GetParameter"></a>

### Figure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Figure.GroupAllSimilarChildren"></a>

### Figure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Figure.GroupSimilarObjects"></a>

### Figure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Figure.PropertyByAPIName"></a>

### Figure.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Figure.PropertyByName"></a>

### Figure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Figure.RemoveParameter"></a>

### Figure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

