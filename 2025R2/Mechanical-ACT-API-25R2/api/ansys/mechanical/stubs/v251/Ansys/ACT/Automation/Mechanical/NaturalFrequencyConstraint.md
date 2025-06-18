# `NaturalFrequencyConstraint`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.NaturalFrequencyConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NaturalFrequencyConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NaturalFrequencyConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#NaturalFrequencyConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NaturalFrequencyConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#NaturalFrequencyConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#NaturalFrequencyConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#NaturalFrequencyConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#NaturalFrequencyConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#NaturalFrequencyConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#NaturalFrequencyConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NaturalFrequencyConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#NaturalFrequencyConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#NaturalFrequencyConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#NaturalFrequencyConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#NaturalFrequencyConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Children`](#NaturalFrequencyConstraint.Children)                               | Gets the list of children.                                                               |
| [`DataModelObjectCategory`](#NaturalFrequencyConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#NaturalFrequencyConstraint.EnvironmentSelection)       | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`InternalObject`](#NaturalFrequencyConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                       |
| [`MaximumFrequency`](#NaturalFrequencyConstraint.MaximumFrequency)               | Gets or sets the MaximumFrequency.                                                       |
| [`MinimumFrequency`](#NaturalFrequencyConstraint.MinimumFrequency)               | Gets or sets the MinimumFrequency.                                                       |
| [`ModeNumber`](#NaturalFrequencyConstraint.ModeNumber)                           | Gets or sets the ModeNumber.                                                             |
| [`Properties`](#NaturalFrequencyConstraint.Properties)                           | Gets the list of properties for this object.                                             |
| [`Suppressed`](#NaturalFrequencyConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                             |
| [`VisibleProperties`](#NaturalFrequencyConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

<a id="NaturalFrequencyConstraint.Children"></a>

### *property* NaturalFrequencyConstraint.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.DataModelObjectCategory"></a>

### *property* NaturalFrequencyConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.EnvironmentSelection"></a>

### *property* NaturalFrequencyConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.InternalObject"></a>

### *property* NaturalFrequencyConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.MaximumFrequency"></a>

### *property* NaturalFrequencyConstraint.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.MinimumFrequency"></a>

### *property* NaturalFrequencyConstraint.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.ModeNumber"></a>

### *property* NaturalFrequencyConstraint.ModeNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeNumber.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Properties"></a>

### *property* NaturalFrequencyConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Suppressed"></a>

### *property* NaturalFrequencyConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.VisibleProperties"></a>

### *property* NaturalFrequencyConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NaturalFrequencyConstraint.Activate"></a>

### NaturalFrequencyConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.CopyTo"></a>

### NaturalFrequencyConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.CreateParameter"></a>

### NaturalFrequencyConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Delete"></a>

### NaturalFrequencyConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.Duplicate"></a>

### NaturalFrequencyConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetChildren"></a>

### NaturalFrequencyConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GetParameter"></a>

### NaturalFrequencyConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GroupAllSimilarChildren"></a>

### NaturalFrequencyConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.GroupSimilarObjects"></a>

### NaturalFrequencyConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.PropertyByAPIName"></a>

### NaturalFrequencyConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.PropertyByName"></a>

### NaturalFrequencyConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.RemoveParameter"></a>

### NaturalFrequencyConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NaturalFrequencyConstraint.RenameBasedOnDefinition"></a>

### NaturalFrequencyConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

