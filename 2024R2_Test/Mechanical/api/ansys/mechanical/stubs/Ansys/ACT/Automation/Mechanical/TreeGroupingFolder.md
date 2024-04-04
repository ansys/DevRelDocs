# TreeGroupingFolder

### *class* TreeGroupingFolder

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a TreeGroupingFolder.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`DeleteTreeGroupAndChildren`](#TreeGroupingFolder.DeleteTreeGroupAndChildren)   | Run the DeleteTreeGroupAndChildren action.                                        |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Ungroup`](#TreeGroupingFolder.Ungroup)                                         | Run the Ungroup action.                                                           |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`Activate`](#TreeGroupingFolder.Activate)                                       | Activate the current object.                                                      |
| [`CopyTo`](#TreeGroupingFolder.CopyTo)                                           | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#TreeGroupingFolder.Duplicate)                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#TreeGroupingFolder.GroupAllSimilarChildren)         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TreeGroupingFolder.GroupSimilarObjects)                 | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#TreeGroupingFolder.PropertyByName)                           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#TreeGroupingFolder.PropertyByAPIName)                     | Get a property by its API name.                                                   |
| [`CreateParameter`](#TreeGroupingFolder.CreateParameter)                         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#TreeGroupingFolder.GetParameter)                               | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#TreeGroupingFolder.RemoveParameter)                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Suppressed`](#TreeGroupingFolder.Suppressed)                                                                      | Gets or sets the Suppressed.                                  |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`ChildrenInGroup`](#TreeGroupingFolder.ChildrenInGroup)                                                            | Gets the ChildrenInGroup.                                     |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#TreeGroupingFolder.Children)                                                                          | Gets the list of children.                                    |
| [`ReadOnly`](#TreeGroupingFolder.ReadOnly)                                                                          | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#TreeGroupingFolder.Properties)                                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#TreeGroupingFolder.VisibleProperties)                                                        | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import TreeGroupingFolder
```

## Property detail

### *property* TreeGroupingFolder.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* TreeGroupingFolder.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTreeGroupingFolderAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TreeGroupingFolder.ChildrenInGroup *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ChildrenInGroup.

<!-- !! processed by numpydoc !! -->

### *property* TreeGroupingFolder.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* TreeGroupingFolder.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* TreeGroupingFolder.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* TreeGroupingFolder.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* TreeGroupingFolder.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* TreeGroupingFolder.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### TreeGroupingFolder.DeleteTreeGroupAndChildren()

Run the DeleteTreeGroupAndChildren action.

<!-- !! processed by numpydoc !! -->

### TreeGroupingFolder.Ungroup()

Run the Ungroup action.

<!-- !! processed by numpydoc !! -->

### TreeGroupingFolder.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TreeGroupingFolder.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### TreeGroupingFolder.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### TreeGroupingFolder.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### TreeGroupingFolder.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### TreeGroupingFolder.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### TreeGroupingFolder.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### TreeGroupingFolder.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### TreeGroupingFolder.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### TreeGroupingFolder.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### TreeGroupingFolder.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### TreeGroupingFolder.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
