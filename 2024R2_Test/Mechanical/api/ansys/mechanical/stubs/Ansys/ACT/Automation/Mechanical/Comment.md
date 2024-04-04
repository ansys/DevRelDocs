# Comment

### *class* Comment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Comment.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#Comment.Delete)                                   | Run the Delete action.                                                            |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                         | Gets the list of children, filtered by type.                                      |
| [`Activate`](#Comment.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Comment.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Comment.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Comment.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Comment.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Comment.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Comment.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Comment.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Comment.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Comment.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Text`](#Comment.Text)                                                                                             | Gets the Text.                                                |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Author`](#Comment.Author)                                                                                         | Gets or sets the Author.                                      |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Comment.Children)                                                                                     | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Comment.Properties)                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Comment.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Comment
```

## Property detail

### *property* Comment.Text *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Text.

<!-- !! processed by numpydoc !! -->

### *property* Comment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCommentAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Comment.Author *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Author.

<!-- !! processed by numpydoc !! -->

### *property* Comment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Comment.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Comment.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Comment.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Comment.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Comment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Comment.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Comment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Comment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Comment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Comment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Comment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Comment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Comment.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Comment.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Comment.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Comment.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Comment.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
