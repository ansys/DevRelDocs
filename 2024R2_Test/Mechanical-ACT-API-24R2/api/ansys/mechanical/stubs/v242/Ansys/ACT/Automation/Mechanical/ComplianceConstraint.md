# `ComplianceConstraint`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ComplianceConstraint"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ComplianceConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ComplianceConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ComplianceConstraint.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ComplianceConstraint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ComplianceConstraint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ComplianceConstraint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ComplianceConstraint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ComplianceConstraint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ComplianceConstraint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ComplianceConstraint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ComplianceConstraint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ComplianceConstraint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ComplianceConstraint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ComplianceConstraint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ComplianceConstraint.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`Children`](#ComplianceConstraint.Children)                               | Gets the list of children.                                                               |
| [`ComplianceLimit`](#ComplianceConstraint.ComplianceLimit)                 | Gets or sets the ComplianceLimit.                                                        |
| [`DataModelObjectCategory`](#ComplianceConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#ComplianceConstraint.EnvironmentSelection)       | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`InternalObject`](#ComplianceConstraint.InternalObject)                   | Gets the internal object. For advanced usage only.                                       |
| [`Properties`](#ComplianceConstraint.Properties)                           | Gets the list of properties for this object.                                             |
| [`Suppressed`](#ComplianceConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                             |
| [`VisibleProperties`](#ComplianceConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

<a id="ComplianceConstraint.Children"></a>

### *property* ComplianceConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.ComplianceLimit"></a>

### *property* ComplianceConstraint.ComplianceLimit *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ComplianceLimit.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.DataModelObjectCategory"></a>

### *property* ComplianceConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.EnvironmentSelection"></a>

### *property* ComplianceConstraint.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.InternalObject"></a>

### *property* ComplianceConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Properties"></a>

### *property* ComplianceConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Suppressed"></a>

### *property* ComplianceConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.VisibleProperties"></a>

### *property* ComplianceConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ComplianceConstraint.Activate"></a>

### ComplianceConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.CopyTo"></a>

### ComplianceConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.CreateParameter"></a>

### ComplianceConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Delete"></a>

### ComplianceConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.Duplicate"></a>

### ComplianceConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetChildren"></a>

### ComplianceConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GetParameter"></a>

### ComplianceConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GroupAllSimilarChildren"></a>

### ComplianceConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.GroupSimilarObjects"></a>

### ComplianceConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.PropertyByAPIName"></a>

### ComplianceConstraint.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.PropertyByName"></a>

### ComplianceConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.RemoveParameter"></a>

### ComplianceConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ComplianceConstraint.RenameBasedOnDefinition"></a>

### ComplianceConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

