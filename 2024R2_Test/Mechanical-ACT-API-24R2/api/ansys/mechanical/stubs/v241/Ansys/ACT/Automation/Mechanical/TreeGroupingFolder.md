# `TreeGroupingFolder`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TreeGroupingFolder.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------|-----------------------------------------------------------------------------------|
| `DeleteTreeGroupAndChildren`   | Run the DeleteTreeGroupAndChildren action.                                        |
| `Ungroup`                      | Run the Ungroup action.                                                           |
| `GetChildren`                  | Gets the list of children, filtered by type.                                      |
| `GetChildren`                  | Gets the list of children, filtered by type.                                      |
| `Activate`                     | Activate the current object.                                                      |
| `CopyTo`                       | Copies all visible properties from this object to another.                        |
| `Duplicate`                    | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`      | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`          | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`               | Get a property by its unique name.                                                |
| `PropertyByAPIName`            | Get a property by its API name.                                                   |
| `CreateParameter`              | Creates a new parameter for a Property.                                           |
| `GetParameter`                 | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`              | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `ChildrenInGroup`         | Gets the ChildrenInGroup.                                     |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `ReadOnly`                | Gets or sets the ReadOnly.                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

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

### *property* TreeGroupingFolder.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

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

<a id="method-detail"></a>

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

### TreeGroupingFolder.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

