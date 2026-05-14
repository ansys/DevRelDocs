# `ThermalComplianceConstraint`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ThermalComplianceConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ThermalComplianceConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ThermalComplianceConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ThermalComplianceConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ThermalComplianceConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ThermalComplianceConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ThermalComplianceConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ThermalComplianceConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ThermalComplianceConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ThermalComplianceConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ThermalComplianceConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ThermalComplianceConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ThermalComplianceConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ThermalComplianceConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ThermalComplianceConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ThermalComplianceConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Children`](#ThermalComplianceConstraint.Children)                               | Gets the list of children.                                                               |
| [`ComplianceLimit`](#ThermalComplianceConstraint.ComplianceLimit)                 | Gets or sets the ComplianceLimit.                                                        |
| [`DataModelObjectCategory`](#ThermalComplianceConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#ThermalComplianceConstraint.EnvironmentSelection)       | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`InternalObject`](#ThermalComplianceConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                       |
| [`Properties`](#ThermalComplianceConstraint.Properties)                           | Gets the list of properties for this object.                                             |
| [`Suppressed`](#ThermalComplianceConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                             |
| [`VisibleProperties`](#ThermalComplianceConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

<a id="ThermalComplianceConstraint.Children"></a>

### *property* ThermalComplianceConstraint.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.ComplianceLimit"></a>

### *property* ThermalComplianceConstraint.ComplianceLimit *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ComplianceLimit.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.DataModelObjectCategory"></a>

### *property* ThermalComplianceConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.EnvironmentSelection"></a>

### *property* ThermalComplianceConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.InternalObject"></a>

### *property* ThermalComplianceConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.Properties"></a>

### *property* ThermalComplianceConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.Suppressed"></a>

### *property* ThermalComplianceConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.VisibleProperties"></a>

### *property* ThermalComplianceConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ThermalComplianceConstraint.Activate"></a>

### ThermalComplianceConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.CopyTo"></a>

### ThermalComplianceConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.CreateParameter"></a>

### ThermalComplianceConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.Delete"></a>

### ThermalComplianceConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.Duplicate"></a>

### ThermalComplianceConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.GetChildren"></a>

### ThermalComplianceConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.GetParameter"></a>

### ThermalComplianceConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.GroupAllSimilarChildren"></a>

### ThermalComplianceConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.GroupSimilarObjects"></a>

### ThermalComplianceConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.PropertyByAPIName"></a>

### ThermalComplianceConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.PropertyByName"></a>

### ThermalComplianceConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.RemoveParameter"></a>

### ThermalComplianceConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalComplianceConstraint.RenameBasedOnDefinition"></a>

### ThermalComplianceConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

