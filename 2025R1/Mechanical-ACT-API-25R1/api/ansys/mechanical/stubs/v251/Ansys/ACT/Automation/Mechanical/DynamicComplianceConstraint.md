# `DynamicComplianceConstraint`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.DynamicComplianceConstraint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.DynamicComplianceConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DynamicComplianceConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#DynamicComplianceConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DynamicComplianceConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#DynamicComplianceConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#DynamicComplianceConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#DynamicComplianceConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#DynamicComplianceConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#DynamicComplianceConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#DynamicComplianceConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DynamicComplianceConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#DynamicComplianceConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#DynamicComplianceConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#DynamicComplianceConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#DynamicComplianceConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Children`](#DynamicComplianceConstraint.Children)                               | Gets the list of children.                                                               |
| [`ComplianceLimit`](#DynamicComplianceConstraint.ComplianceLimit)                 | Gets or sets the ComplianceLimit.                                                        |
| [`DataModelObjectCategory`](#DynamicComplianceConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#DynamicComplianceConstraint.EnvironmentSelection)       | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`InternalObject`](#DynamicComplianceConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                       |
| [`MaximumValue`](#DynamicComplianceConstraint.MaximumValue)                       | Gets or sets the MaximumValue.                                                           |
| [`MinimumValue`](#DynamicComplianceConstraint.MinimumValue)                       | Gets or sets the MinimumValue.                                                           |
| [`Properties`](#DynamicComplianceConstraint.Properties)                           | Gets the list of properties for this object.                                             |
| [`Suppressed`](#DynamicComplianceConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                             |
| [`VisibleProperties`](#DynamicComplianceConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

<a id="DynamicComplianceConstraint.Children"></a>

### *property* DynamicComplianceConstraint.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.ComplianceLimit"></a>

### *property* DynamicComplianceConstraint.ComplianceLimit *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ComplianceLimit.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.DataModelObjectCategory"></a>

### *property* DynamicComplianceConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.EnvironmentSelection"></a>

### *property* DynamicComplianceConstraint.EnvironmentSelection *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.InternalObject"></a>

### *property* DynamicComplianceConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.MaximumValue"></a>

### *property* DynamicComplianceConstraint.MaximumValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumValue.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.MinimumValue"></a>

### *property* DynamicComplianceConstraint.MinimumValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumValue.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.Properties"></a>

### *property* DynamicComplianceConstraint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.Suppressed"></a>

### *property* DynamicComplianceConstraint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.VisibleProperties"></a>

### *property* DynamicComplianceConstraint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DynamicComplianceConstraint.Activate"></a>

### DynamicComplianceConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.CopyTo"></a>

### DynamicComplianceConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.CreateParameter"></a>

### DynamicComplianceConstraint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.Delete"></a>

### DynamicComplianceConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.Duplicate"></a>

### DynamicComplianceConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.GetChildren"></a>

### DynamicComplianceConstraint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.GetParameter"></a>

### DynamicComplianceConstraint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.GroupAllSimilarChildren"></a>

### DynamicComplianceConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.GroupSimilarObjects"></a>

### DynamicComplianceConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.PropertyByAPIName"></a>

### DynamicComplianceConstraint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.PropertyByName"></a>

### DynamicComplianceConstraint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.RemoveParameter"></a>

### DynamicComplianceConstraint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DynamicComplianceConstraint.RenameBasedOnDefinition"></a>

### DynamicComplianceConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

