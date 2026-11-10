# `ContactDefinitionFrictionWorksheet`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ContactDefinitionFrictionWorksheet"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ContactDefinitionFrictionWorksheet

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Worksheet for accessing the Velocity-Friction Multiple Table table
on a ContactDefinition object (CoulombBasedType = VelocityMultipleTable).
Rows correspond to friction terms; each term has a NormalForce value
and a VelocityFrictionMultipleTable table reference (DSId).

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`AddRow`](#ContactDefinitionFrictionWorksheet.AddRow)                                                     | Adds a new friction term row. Returns the new row count.    |
| [`DeleteRow`](#ContactDefinitionFrictionWorksheet.DeleteRow)                                               | Removes the friction term at the given 0-based index.       |
| [`GetNormalForce`](#ContactDefinitionFrictionWorksheet.GetNormalForce)                                     | Gets the Normal Force value at the given 0-based row index. |
| [`GetVelocityFrictionMultipleTable`](#ContactDefinitionFrictionWorksheet.GetVelocityFrictionMultipleTable) | Gets the DSId of the VelocityFrictionMultipleTable table    |
| [`RefreshWorksheet`](#ContactDefinitionFrictionWorksheet.RefreshWorksheet)                                 | RefreshWorksheet method.                                    |
| [`SetNormalForce`](#ContactDefinitionFrictionWorksheet.SetNormalForce)                                     | Sets the Normal Force value at the given 0-based row index. |
| [`SetVelocityFrictionMultipleTable`](#ContactDefinitionFrictionWorksheet.SetVelocityFrictionMultipleTable) | Sets the DSId of the VelocityFrictionMultipleTable table    |

### Properties

| Name | Description |
|--------------------------------------------------------------|--------------------------------------|
| [`RowCount`](#ContactDefinitionFrictionWorksheet.RowCount)   | Gets the number of friction terms.   |

<a id="property-detail"></a>

## Property detail

<a id="ContactDefinitionFrictionWorksheet.RowCount"></a>

### *property* ContactDefinitionFrictionWorksheet.RowCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of friction terms.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactDefinitionFrictionWorksheet.AddRow"></a>

### ContactDefinitionFrictionWorksheet.AddRow() → [int](https://docs.python.org/3/builtins/functions.html#int)

Adds a new friction term row. Returns the new row count.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinitionFrictionWorksheet.DeleteRow"></a>

### ContactDefinitionFrictionWorksheet.DeleteRow(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the friction term at the given 0-based index.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinitionFrictionWorksheet.GetNormalForce"></a>

### ContactDefinitionFrictionWorksheet.GetNormalForce(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets the Normal Force value at the given 0-based row index.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinitionFrictionWorksheet.GetVelocityFrictionMultipleTable"></a>

### ContactDefinitionFrictionWorksheet.GetVelocityFrictionMultipleTable(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [int](https://docs.python.org/3/builtins/functions.html#int)

```text
Gets the DSId of the VelocityFrictionMultipleTable table
at the given 0-based row index.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinitionFrictionWorksheet.RefreshWorksheet"></a>

### ContactDefinitionFrictionWorksheet.RefreshWorksheet() → [None](https://docs.python.org/3/builtins/constants.html#None)

RefreshWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinitionFrictionWorksheet.SetNormalForce"></a>

### ContactDefinitionFrictionWorksheet.SetNormalForce(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Sets the Normal Force value at the given 0-based row index.

<!-- !! processed by numpydoc !! -->

<a id="ContactDefinitionFrictionWorksheet.SetVelocityFrictionMultipleTable"></a>

### ContactDefinitionFrictionWorksheet.SetVelocityFrictionMultipleTable(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [int](https://docs.python.org/3/builtins/functions.html#int)) → [int](https://docs.python.org/3/builtins/functions.html#int)

```text
Sets the DSId of the VelocityFrictionMultipleTable table
at the given 0-based row index.
```

<!-- !! processed by numpydoc !! -->

