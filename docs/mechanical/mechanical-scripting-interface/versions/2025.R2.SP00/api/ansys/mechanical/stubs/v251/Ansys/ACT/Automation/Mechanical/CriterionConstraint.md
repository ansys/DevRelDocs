# `CriterionConstraint`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CriterionConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CriterionConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CriterionConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CriterionConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#CriterionConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CriterionConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CriterionConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CriterionConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CriterionConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CriterionConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CriterionConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CriterionConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CriterionConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CriterionConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CriterionConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#CriterionConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Children`](#CriterionConstraint.Children)                               | Gets the list of children.                                                               |
| [`Criterion`](#CriterionConstraint.Criterion)                             | Gets or sets the Criterion.                                                              |
| [`DataModelObjectCategory`](#CriterionConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#CriterionConstraint.EnvironmentSelection)       | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`InitialValue`](#CriterionConstraint.InitialValue)                       | Gets the InitialValue.                                                                   |
| [`InternalObject`](#CriterionConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                       |
| [`LowerBound`](#CriterionConstraint.LowerBound)                           | Gets or sets the LowerBound.                                                             |
| [`Properties`](#CriterionConstraint.Properties)                           | Gets the list of properties for this object.                                             |
| [`Suppressed`](#CriterionConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                             |
| [`UpperBound`](#CriterionConstraint.UpperBound)                           | Gets or sets the UpperBound.                                                             |
| [`VisibleProperties`](#CriterionConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

<a id="CriterionConstraint.Children"></a>

### *property* CriterionConstraint.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Criterion"></a>

### *property* CriterionConstraint.Criterion *: [Ansys.ACT.Automation.Mechanical.Criterion](Criterion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Criterion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Criterion.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.DataModelObjectCategory"></a>

### *property* CriterionConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.EnvironmentSelection"></a>

### *property* CriterionConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.InitialValue"></a>

### *property* CriterionConstraint.InitialValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the InitialValue.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.InternalObject"></a>

### *property* CriterionConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.LowerBound"></a>

### *property* CriterionConstraint.LowerBound *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LowerBound.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Properties"></a>

### *property* CriterionConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Suppressed"></a>

### *property* CriterionConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.UpperBound"></a>

### *property* CriterionConstraint.UpperBound *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpperBound.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.VisibleProperties"></a>

### *property* CriterionConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CriterionConstraint.Activate"></a>

### CriterionConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.CopyTo"></a>

### CriterionConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.CreateParameter"></a>

### CriterionConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Delete"></a>

### CriterionConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.Duplicate"></a>

### CriterionConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetChildren"></a>

### CriterionConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GetParameter"></a>

### CriterionConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GroupAllSimilarChildren"></a>

### CriterionConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.GroupSimilarObjects"></a>

### CriterionConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.PropertyByAPIName"></a>

### CriterionConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.PropertyByName"></a>

### CriterionConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.RemoveParameter"></a>

### CriterionConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CriterionConstraint.RenameBasedOnDefinition"></a>

### CriterionConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

