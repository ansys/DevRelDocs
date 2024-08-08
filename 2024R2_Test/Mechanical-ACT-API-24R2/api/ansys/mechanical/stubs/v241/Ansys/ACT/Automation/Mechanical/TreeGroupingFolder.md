# `TreeGroupingFolder`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a TreeGroupingFolder.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`DeleteTreeGroupAndChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.DeleteTreeGroupAndChildren)   | Run the DeleteTreeGroupAndChildren action.                                        |
| [`Ungroup`](#TreeGroupingFolder.Ungroup)                                                                                                                  | Run the Ungroup action.                                                           |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.Activate)                                       | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.CopyTo)                                           | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.Duplicate)                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.GroupAllSimilarChildren)         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.GroupSimilarObjects)                 | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.PropertyByName)                           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.PropertyByAPIName)                     | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.CreateParameter)                         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.GetParameter)                               | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.RemoveParameter)                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#id0)                                                 | Gets the internal object. For advanced usage only.            |
| [`ChildrenInGroup`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.ChildrenInGroup)                 | Gets the ChildrenInGroup.                                     |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.Children)                               | Gets the list of children.                                    |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#id0)                                                 | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/TreeGroupingFolder.md#TreeGroupingFolder.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="TreeGroupingFolder.Suppressed"></a>

### *property* TreeGroupingFolder.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.InternalObject"></a>

### *property* TreeGroupingFolder.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTreeGroupingFolderAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.ChildrenInGroup"></a>

### *property* TreeGroupingFolder.ChildrenInGroup *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ChildrenInGroup.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.DataModelObjectCategory"></a>

### *property* TreeGroupingFolder.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Children"></a>

### *property* TreeGroupingFolder.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.ReadOnly"></a>

### *property* TreeGroupingFolder.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* TreeGroupingFolder.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Properties"></a>

### *property* TreeGroupingFolder.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.VisibleProperties"></a>

### *property* TreeGroupingFolder.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="TreeGroupingFolder.DeleteTreeGroupAndChildren"></a>

### TreeGroupingFolder.DeleteTreeGroupAndChildren()

Run the DeleteTreeGroupAndChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Ungroup"></a>

### TreeGroupingFolder.Ungroup()

Run the Ungroup action.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetChildren"></a>

### TreeGroupingFolder.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### TreeGroupingFolder.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Activate"></a>

### TreeGroupingFolder.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.CopyTo"></a>

### TreeGroupingFolder.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.Duplicate"></a>

### TreeGroupingFolder.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GroupAllSimilarChildren"></a>

### TreeGroupingFolder.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GroupSimilarObjects"></a>

### TreeGroupingFolder.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.PropertyByName"></a>

### TreeGroupingFolder.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.PropertyByAPIName"></a>

### TreeGroupingFolder.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.CreateParameter"></a>

### TreeGroupingFolder.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.GetParameter"></a>

### TreeGroupingFolder.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="TreeGroupingFolder.RemoveParameter"></a>

### TreeGroupingFolder.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

