# Figure

### *class* Figure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Figure.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Delete`](#Figure.Delete)                                   | Run the Delete action.                                                            |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Figure.AddComment)                           | Creates a new child Comment.                                                      |
| [`Activate`](#Figure.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Figure.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Figure.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Figure.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Figure.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Figure.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Figure.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Figure.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Figure.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Figure.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Text`](#Figure.Text)                                                                                              | Gets or sets the Text.                                        |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Figure.Children)                                                                                      | Gets the list of children.                                    |
| [`Comments`](#Figure.Comments)                                                                                      | Gets the list of associated comments.                         |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Figure.Properties)                                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Figure.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Figure
```

## Property detail

### *property* Figure.Text *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Text.

<!-- !! processed by numpydoc !! -->

### *property* Figure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFigureAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Figure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Figure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Figure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Figure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Figure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Figure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Figure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Figure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Figure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Figure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Figure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Figure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Figure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Figure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Figure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Figure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Figure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Figure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Figure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Figure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
