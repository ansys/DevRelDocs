# CriterionConstraint

<a id="CriterionConstraint"></a>

### *class* CriterionConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a CriterionConstraint.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#CriterionConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#CriterionConstraint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`Activate`](#CriterionConstraint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#CriterionConstraint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#CriterionConstraint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#CriterionConstraint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CriterionConstraint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#CriterionConstraint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#CriterionConstraint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#CriterionConstraint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#CriterionConstraint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#CriterionConstraint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
| [`InitialValue`](#CriterionConstraint.InitialValue)                                                                 | Gets the InitialValue.                                                                   |
| [`LowerBound`](#CriterionConstraint.LowerBound)                                                                     | Gets or sets the LowerBound.                                                             |
| [`UpperBound`](#CriterionConstraint.UpperBound)                                                                     | Gets or sets the UpperBound.                                                             |
| [`Criterion`](Criterion.md#Criterion)                                                                               | Gets or sets the Criterion.                                                              |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#CriterionConstraint.EnvironmentSelection)                                                 | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`Suppressed`](#CriterionConstraint.Suppressed)                                                                     | Gets or sets the Suppressed.                                                             |
| [`Children`](#CriterionConstraint.Children)                                                                         | Gets the list of children.                                                               |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
| [`Properties`](#CriterionConstraint.Properties)                                                                     | Gets the list of properties for this object.                                             |
| [`VisibleProperties`](#CriterionConstraint.VisibleProperties)                                                       | Gets the list of properties that are visible for this object.                            |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import CriterionConstraint
```

<a id="property-detail"></a>

## Property detail

<a id="CriterionConstraint.InternalObject"></a>

### *property* CriterionConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.InitialValue"></a>

### *property* CriterionConstraint.InitialValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the InitialValue.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.LowerBound"></a>

### *property* CriterionConstraint.LowerBound *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowerBound.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.UpperBound"></a>

### *property* CriterionConstraint.UpperBound *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpperBound.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Criterion"></a>

### *property* CriterionConstraint.Criterion *: [Ansys.ACT.Automation.Mechanical.Criterion](Criterion.md#Criterion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Criterion.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.DataModelObjectCategory"></a>

### *property* CriterionConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.EnvironmentSelection"></a>

### *property* CriterionConstraint.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Suppressed"></a>

### *property* CriterionConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Children"></a>

### *property* CriterionConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CriterionConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Properties"></a>

### *property* CriterionConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.VisibleProperties"></a>

### *property* CriterionConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CriterionConstraint.RenameBasedOnDefinition"></a>

### CriterionConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Delete"></a>

### CriterionConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetChildren"></a>

### CriterionConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CriterionConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Activate"></a>

### CriterionConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.CopyTo"></a>

### CriterionConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Duplicate"></a>

### CriterionConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GroupAllSimilarChildren"></a>

### CriterionConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GroupSimilarObjects"></a>

### CriterionConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.PropertyByName"></a>

### CriterionConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.PropertyByAPIName"></a>

### CriterionConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.CreateParameter"></a>

### CriterionConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetParameter"></a>

### CriterionConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.RemoveParameter"></a>

### CriterionConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
