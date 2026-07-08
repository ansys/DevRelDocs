# `TreeGroupingFolder`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder"></a>

#### *class* Ansys.ACT.Automation.Mechanical.TreeGroupingFolder

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TreeGroupingFolder.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#TreeGroupingFolder.Activate)                                     | Activate the current object.                                                      |
| [`CopyTo`](#TreeGroupingFolder.CopyTo)                                         | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#TreeGroupingFolder.CreateParameter)                       | Creates a new parameter for a Property.                                           |
| [`DeleteTreeGroupAndChildren`](#TreeGroupingFolder.DeleteTreeGroupAndChildren) | Run the DeleteTreeGroupAndChildren action.                                        |
| [`Duplicate`](#TreeGroupingFolder.Duplicate)                                   | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#TreeGroupingFolder.GetChildren)                               | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#TreeGroupingFolder.GetParameter)                             | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#TreeGroupingFolder.GroupAllSimilarChildren)       | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#TreeGroupingFolder.GroupSimilarObjects)               | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#TreeGroupingFolder.PropertyByAPIName)                   | Get a property by its API name.                                                   |
| [`PropertyByName`](#TreeGroupingFolder.PropertyByName)                         | Get a property by its unique name.                                                |
| [`RemoveParameter`](#TreeGroupingFolder.RemoveParameter)                       | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#TreeGroupingFolder.Children)                               | Gets the list of children.                                    |
| [`ChildrenInGroup`](#TreeGroupingFolder.ChildrenInGroup)                 | Gets the ChildrenInGroup.                                     |
| [`DataModelObjectCategory`](#TreeGroupingFolder.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`InternalObject`](#TreeGroupingFolder.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#TreeGroupingFolder.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#TreeGroupingFolder.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#TreeGroupingFolder.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#TreeGroupingFolder.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TreeGroupingFolder.Children"></a>

### *property* TreeGroupingFolder.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.ChildrenInGroup"></a>

### *property* TreeGroupingFolder.ChildrenInGroup *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ChildrenInGroup.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.DataModelObjectCategory"></a>

### *property* TreeGroupingFolder.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.InternalObject"></a>

### *property* TreeGroupingFolder.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTreeGroupingFolderAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Properties"></a>

### *property* TreeGroupingFolder.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.ReadOnly"></a>

### *property* TreeGroupingFolder.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Suppressed"></a>

### *property* TreeGroupingFolder.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.VisibleProperties"></a>

### *property* TreeGroupingFolder.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TreeGroupingFolder.Activate"></a>

### TreeGroupingFolder.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.CopyTo"></a>

### TreeGroupingFolder.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.CreateParameter"></a>

### TreeGroupingFolder.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.DeleteTreeGroupAndChildren"></a>

### TreeGroupingFolder.DeleteTreeGroupAndChildren()

Run the DeleteTreeGroupAndChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Duplicate"></a>

### TreeGroupingFolder.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetChildren"></a>

### TreeGroupingFolder.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetParameter"></a>

### TreeGroupingFolder.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GroupAllSimilarChildren"></a>

### TreeGroupingFolder.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GroupSimilarObjects"></a>

### TreeGroupingFolder.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.PropertyByAPIName"></a>

### TreeGroupingFolder.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.PropertyByName"></a>

### TreeGroupingFolder.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.RemoveParameter"></a>

### TreeGroupingFolder.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

