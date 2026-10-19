# `JointBushingWorksheet`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.JointBushingWorksheet"></a>

#### *class* Ansys.ACT.Automation.Mechanical.JointBushingWorksheet

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

The worksheet of stiffness and damping coefficients for a bushing type joint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| [`AddRow`](#JointBushingWorksheet.AddRow)                                                                                       | AddRow method.                                                                                                                         |
| [`DeleteRow`](#JointBushingWorksheet.DeleteRow)                                                                                 | DeleteRow method.                                                                                                                      |
| [`GetBushingDampingPerThetaUnitX`](#JointBushingWorksheet.GetBushingDampingPerThetaUnitX)                                       | Gets the Coefficient for the damping per ThetaUnitX at the indicated row index.                                                        |
| [`GetBushingDampingPerThetaUnitY`](#JointBushingWorksheet.GetBushingDampingPerThetaUnitY)                                       | Gets the Coefficient for the damping per ThetaUnitY at the indicated row index.                                                        |
| [`GetBushingDampingPerThetaUnitZ`](#JointBushingWorksheet.GetBushingDampingPerThetaUnitZ)                                       | Gets the Coefficient for the damping per ThetaUnitZ at the indicated row index.                                                        |
| [`GetBushingDampingPerUnitX`](#JointBushingWorksheet.GetBushingDampingPerUnitX)                                                 | Gets the Coefficient for the damping per UnitX at the indicated row index.                                                             |
| [`GetBushingDampingPerUnitY`](#JointBushingWorksheet.GetBushingDampingPerUnitY)                                                 | Gets the Coefficient for the damping per UnitY at the indicated row index.                                                             |
| [`GetBushingDampingPerUnitZ`](#JointBushingWorksheet.GetBushingDampingPerUnitZ)                                                 | Gets the Coefficient for the damping per UnitZ at the indicated row index.                                                             |
| [`GetBushingStiffnessPerThetaUnitX`](#JointBushingWorksheet.GetBushingStiffnessPerThetaUnitX)                                   | Gets the Coefficient for the stiffness per ThetaUnitX at the indicated row index.                                                      |
| [`GetBushingStiffnessPerThetaUnitXDependentValues`](#JointBushingWorksheet.GetBushingStiffnessPerThetaUnitXDependentValues)     | Gets the dependent (e.g. Moment) values of the nonlinear tabular data for the stiffness per ThetaUnitX at the indicated row index.     |
| [`GetBushingStiffnessPerThetaUnitXIndependentValues`](#JointBushingWorksheet.GetBushingStiffnessPerThetaUnitXIndependentValues) | Gets the independent (e.g. Rotation) values of the nonlinear tabular data for the stiffness per ThetaUnitX at the indicated row index. |
| [`GetBushingStiffnessPerThetaUnitY`](#JointBushingWorksheet.GetBushingStiffnessPerThetaUnitY)                                   | Gets the Coefficient for the stiffness per ThetaUnitY at the indicated row index.                                                      |
| [`GetBushingStiffnessPerThetaUnitYDependentValues`](#JointBushingWorksheet.GetBushingStiffnessPerThetaUnitYDependentValues)     | Gets the dependent (e.g. Moment) values of the nonlinear tabular data for the stiffness per ThetaUnitY at the indicated row index.     |
| [`GetBushingStiffnessPerThetaUnitYIndependentValues`](#JointBushingWorksheet.GetBushingStiffnessPerThetaUnitYIndependentValues) | Gets the independent (e.g. Rotation) values of the nonlinear tabular data for the stiffness per ThetaUnitY at the indicated row index. |
| [`GetBushingStiffnessPerThetaUnitZ`](#JointBushingWorksheet.GetBushingStiffnessPerThetaUnitZ)                                   | Gets the Coefficient for the stiffness per ThetaUnitZ at the indicated row index.                                                      |
| [`GetBushingStiffnessPerThetaUnitZDependentValues`](#JointBushingWorksheet.GetBushingStiffnessPerThetaUnitZDependentValues)     | Gets the dependent (e.g. Moment) values of the nonlinear tabular data for the stiffness per ThetaUnitZ at the indicated row index.     |
| [`GetBushingStiffnessPerThetaUnitZIndependentValues`](#JointBushingWorksheet.GetBushingStiffnessPerThetaUnitZIndependentValues) | Gets the independent (e.g. Rotation) values of the nonlinear tabular data for the stiffness per ThetaUnitZ at the indicated row index. |
| [`GetBushingStiffnessPerUnitX`](#JointBushingWorksheet.GetBushingStiffnessPerUnitX)                                             | Gets the Coefficient for the stiffness per UnitX at the indicated row index.                                                           |
| [`GetBushingStiffnessPerUnitXDependentValues`](#JointBushingWorksheet.GetBushingStiffnessPerUnitXDependentValues)               | Gets the dependent (e.g. Force) values of the nonlinear tabular data for the stiffness per UnitX at the indicated row index.           |
| [`GetBushingStiffnessPerUnitXIndependentValues`](#JointBushingWorksheet.GetBushingStiffnessPerUnitXIndependentValues)           | Gets the independent (e.g. Displacement) values of the nonlinear tabular data for the stiffness per UnitX at the indicated row index.  |
| [`GetBushingStiffnessPerUnitY`](#JointBushingWorksheet.GetBushingStiffnessPerUnitY)                                             | Gets the Coefficient for the stiffness per UnitY at the indicated row index.                                                           |
| [`GetBushingStiffnessPerUnitYDependentValues`](#JointBushingWorksheet.GetBushingStiffnessPerUnitYDependentValues)               | Gets the dependent (e.g. Force) values of the nonlinear tabular data for the stiffness per UnitY at the indicated row index.           |
| [`GetBushingStiffnessPerUnitYIndependentValues`](#JointBushingWorksheet.GetBushingStiffnessPerUnitYIndependentValues)           | Gets the independent (e.g. Displacement) values of the nonlinear tabular data for the stiffness per UnitY at the indicated row index.  |
| [`GetBushingStiffnessPerUnitZ`](#JointBushingWorksheet.GetBushingStiffnessPerUnitZ)                                             | Gets the Coefficient for the stiffness per UnitZ at the indicated row index.                                                           |
| [`GetBushingStiffnessPerUnitZDependentValues`](#JointBushingWorksheet.GetBushingStiffnessPerUnitZDependentValues)               | Gets the dependent (e.g. Force) values of the nonlinear tabular data for the stiffness per UnitZ at the indicated row index.           |
| [`GetBushingStiffnessPerUnitZIndependentValues`](#JointBushingWorksheet.GetBushingStiffnessPerUnitZIndependentValues)           | Gets the independent (e.g. Displacement) values of the nonlinear tabular data for the stiffness per UnitZ at the indicated row index.  |
| [`IsBushingStiffnessPerThetaUnitXNonlinear`](#JointBushingWorksheet.IsBushingStiffnessPerThetaUnitXNonlinear)                   | Gets whether the Coefficient for the stiffness per ThetaUnitX at the indicated row index is defined as nonlinear (tabular).            |
| [`IsBushingStiffnessPerThetaUnitYNonlinear`](#JointBushingWorksheet.IsBushingStiffnessPerThetaUnitYNonlinear)                   | Gets whether the Coefficient for the stiffness per ThetaUnitY at the indicated row index is defined as nonlinear (tabular).            |
| [`IsBushingStiffnessPerThetaUnitZNonlinear`](#JointBushingWorksheet.IsBushingStiffnessPerThetaUnitZNonlinear)                   | Gets whether the Coefficient for the stiffness per ThetaUnitZ at the indicated row index is defined as nonlinear (tabular).            |
| [`IsBushingStiffnessPerUnitXNonlinear`](#JointBushingWorksheet.IsBushingStiffnessPerUnitXNonlinear)                             | Gets whether the Coefficient for the stiffness per UnitX at the indicated row index is defined as nonlinear (tabular).                 |
| [`IsBushingStiffnessPerUnitYNonlinear`](#JointBushingWorksheet.IsBushingStiffnessPerUnitYNonlinear)                             | Gets whether the Coefficient for the stiffness per UnitY at the indicated row index is defined as nonlinear (tabular).                 |
| [`IsBushingStiffnessPerUnitZNonlinear`](#JointBushingWorksheet.IsBushingStiffnessPerUnitZNonlinear)                             | Gets whether the Coefficient for the stiffness per UnitZ at the indicated row index is defined as nonlinear (tabular).                 |
| [`RefreshWorksheet`](#JointBushingWorksheet.RefreshWorksheet)                                                                   | RefreshWorksheet method.                                                                                                               |
| [`SetBushingDampingPerThetaUnitX`](#JointBushingWorksheet.SetBushingDampingPerThetaUnitX)                                       | Sets the Coefficient for the damping per ThetaUnitX at the indicated row index.                                                        |
| [`SetBushingDampingPerThetaUnitY`](#JointBushingWorksheet.SetBushingDampingPerThetaUnitY)                                       | Sets the Coefficient for the damping per ThetaUnitY at the indicated row index.                                                        |
| [`SetBushingDampingPerThetaUnitZ`](#JointBushingWorksheet.SetBushingDampingPerThetaUnitZ)                                       | Sets the Coefficient for the damping per ThetaUnitZ at the indicated row index.                                                        |
| [`SetBushingDampingPerUnitX`](#JointBushingWorksheet.SetBushingDampingPerUnitX)                                                 | Sets the Coefficient for the damping per UnitX at the indicated row index.                                                             |
| [`SetBushingDampingPerUnitY`](#JointBushingWorksheet.SetBushingDampingPerUnitY)                                                 | Sets the Coefficient for the damping per UnitY at the indicated row index.                                                             |
| [`SetBushingDampingPerUnitZ`](#JointBushingWorksheet.SetBushingDampingPerUnitZ)                                                 | Sets the Coefficient for the damping per UnitZ at the indicated row index.                                                             |
| [`SetBushingStiffnessPerThetaUnitX`](#JointBushingWorksheet.SetBushingStiffnessPerThetaUnitX)                                   | Sets the Coefficient for the stiffness per ThetaUnitX at the indicated row index.                                                      |
| [`SetBushingStiffnessPerThetaUnitXNonlinear`](#JointBushingWorksheet.SetBushingStiffnessPerThetaUnitXNonlinear)                 | Switches the stiffness per ThetaUnitX cell at the indicated row index between constant (linear) and tabular (nonlinear).               |
| [`SetBushingStiffnessPerThetaUnitXTabularValues`](#JointBushingWorksheet.SetBushingStiffnessPerThetaUnitXTabularValues)         | SetBushingStiffnessPerThetaUnitXTabularValues method.                                                                                  |
| [`SetBushingStiffnessPerThetaUnitY`](#JointBushingWorksheet.SetBushingStiffnessPerThetaUnitY)                                   | Sets the Coefficient for the stiffness per ThetaUnitY at the indicated row index.                                                      |
| [`SetBushingStiffnessPerThetaUnitYNonlinear`](#JointBushingWorksheet.SetBushingStiffnessPerThetaUnitYNonlinear)                 | Switches the stiffness per ThetaUnitY cell at the indicated row index between constant (linear) and tabular (nonlinear).               |
| [`SetBushingStiffnessPerThetaUnitYTabularValues`](#JointBushingWorksheet.SetBushingStiffnessPerThetaUnitYTabularValues)         | SetBushingStiffnessPerThetaUnitYTabularValues method.                                                                                  |
| [`SetBushingStiffnessPerThetaUnitZ`](#JointBushingWorksheet.SetBushingStiffnessPerThetaUnitZ)                                   | Sets the Coefficient for the stiffness per ThetaUnitZ at the indicated row index.                                                      |
| [`SetBushingStiffnessPerThetaUnitZNonlinear`](#JointBushingWorksheet.SetBushingStiffnessPerThetaUnitZNonlinear)                 | Switches the stiffness per ThetaUnitZ cell at the indicated row index between constant (linear) and tabular (nonlinear).               |
| [`SetBushingStiffnessPerThetaUnitZTabularValues`](#JointBushingWorksheet.SetBushingStiffnessPerThetaUnitZTabularValues)         | SetBushingStiffnessPerThetaUnitZTabularValues method.                                                                                  |
| [`SetBushingStiffnessPerUnitX`](#JointBushingWorksheet.SetBushingStiffnessPerUnitX)                                             | Sets the Coefficient for the stiffness per UnitX at the indicated row index.                                                           |
| [`SetBushingStiffnessPerUnitXNonlinear`](#JointBushingWorksheet.SetBushingStiffnessPerUnitXNonlinear)                           | Switches the stiffness per UnitX cell at the indicated row index between constant (linear) and tabular (nonlinear).                    |
| [`SetBushingStiffnessPerUnitXTabularValues`](#JointBushingWorksheet.SetBushingStiffnessPerUnitXTabularValues)                   | SetBushingStiffnessPerUnitXTabularValues method.                                                                                       |
| [`SetBushingStiffnessPerUnitY`](#JointBushingWorksheet.SetBushingStiffnessPerUnitY)                                             | Sets the Coefficient for the stiffness per UnitY at the indicated row index.                                                           |
| [`SetBushingStiffnessPerUnitYNonlinear`](#JointBushingWorksheet.SetBushingStiffnessPerUnitYNonlinear)                           | Switches the stiffness per UnitY cell at the indicated row index between constant (linear) and tabular (nonlinear).                    |
| [`SetBushingStiffnessPerUnitYTabularValues`](#JointBushingWorksheet.SetBushingStiffnessPerUnitYTabularValues)                   | SetBushingStiffnessPerUnitYTabularValues method.                                                                                       |
| [`SetBushingStiffnessPerUnitZ`](#JointBushingWorksheet.SetBushingStiffnessPerUnitZ)                                             | Sets the Coefficient for the stiffness per UnitZ at the indicated row index.                                                           |
| [`SetBushingStiffnessPerUnitZNonlinear`](#JointBushingWorksheet.SetBushingStiffnessPerUnitZNonlinear)                           | Switches the stiffness per UnitZ cell at the indicated row index between constant (linear) and tabular (nonlinear).                    |
| [`SetBushingStiffnessPerUnitZTabularValues`](#JointBushingWorksheet.SetBushingStiffnessPerUnitZTabularValues)                   | SetBushingStiffnessPerUnitZTabularValues method.                                                                                       |

### Properties

| Name | Description |
|-------------------------------------------------|----------------------|
| [`RowCount`](#JointBushingWorksheet.RowCount)   | RowCount property.   |

<a id="property-detail"></a>

## Property detail

<a id="JointBushingWorksheet.RowCount"></a>

### *property* JointBushingWorksheet.RowCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

RowCount property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="JointBushingWorksheet.AddRow"></a>

### JointBushingWorksheet.AddRow() → [int](https://docs.python.org/3/builtins/functions.html#int)

AddRow method.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.DeleteRow"></a>

### JointBushingWorksheet.DeleteRow(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

DeleteRow method.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingDampingPerThetaUnitX"></a>

### JointBushingWorksheet.GetBushingDampingPerThetaUnitX(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Gets the Coefficient for the damping per ThetaUnitX at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingDampingPerThetaUnitY"></a>

### JointBushingWorksheet.GetBushingDampingPerThetaUnitY(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Gets the Coefficient for the damping per ThetaUnitY at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingDampingPerThetaUnitZ"></a>

### JointBushingWorksheet.GetBushingDampingPerThetaUnitZ(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Gets the Coefficient for the damping per ThetaUnitZ at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingDampingPerUnitX"></a>

### JointBushingWorksheet.GetBushingDampingPerUnitX(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Gets the Coefficient for the damping per UnitX at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingDampingPerUnitY"></a>

### JointBushingWorksheet.GetBushingDampingPerUnitY(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Gets the Coefficient for the damping per UnitY at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingDampingPerUnitZ"></a>

### JointBushingWorksheet.GetBushingDampingPerUnitZ(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Gets the Coefficient for the damping per UnitZ at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerThetaUnitX"></a>

### JointBushingWorksheet.GetBushingStiffnessPerThetaUnitX(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Gets the Coefficient for the stiffness per ThetaUnitX at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerThetaUnitXDependentValues"></a>

### JointBushingWorksheet.GetBushingStiffnessPerThetaUnitXDependentValues(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets the dependent (e.g. Moment) values of the nonlinear tabular data for the stiffness per ThetaUnitX at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerThetaUnitXIndependentValues"></a>

### JointBushingWorksheet.GetBushingStiffnessPerThetaUnitXIndependentValues(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets the independent (e.g. Rotation) values of the nonlinear tabular data for the stiffness per ThetaUnitX at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerThetaUnitY"></a>

### JointBushingWorksheet.GetBushingStiffnessPerThetaUnitY(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Gets the Coefficient for the stiffness per ThetaUnitY at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerThetaUnitYDependentValues"></a>

### JointBushingWorksheet.GetBushingStiffnessPerThetaUnitYDependentValues(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets the dependent (e.g. Moment) values of the nonlinear tabular data for the stiffness per ThetaUnitY at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerThetaUnitYIndependentValues"></a>

### JointBushingWorksheet.GetBushingStiffnessPerThetaUnitYIndependentValues(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets the independent (e.g. Rotation) values of the nonlinear tabular data for the stiffness per ThetaUnitY at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerThetaUnitZ"></a>

### JointBushingWorksheet.GetBushingStiffnessPerThetaUnitZ(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Gets the Coefficient for the stiffness per ThetaUnitZ at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerThetaUnitZDependentValues"></a>

### JointBushingWorksheet.GetBushingStiffnessPerThetaUnitZDependentValues(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets the dependent (e.g. Moment) values of the nonlinear tabular data for the stiffness per ThetaUnitZ at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerThetaUnitZIndependentValues"></a>

### JointBushingWorksheet.GetBushingStiffnessPerThetaUnitZIndependentValues(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets the independent (e.g. Rotation) values of the nonlinear tabular data for the stiffness per ThetaUnitZ at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerUnitX"></a>

### JointBushingWorksheet.GetBushingStiffnessPerUnitX(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Gets the Coefficient for the stiffness per UnitX at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerUnitXDependentValues"></a>

### JointBushingWorksheet.GetBushingStiffnessPerUnitXDependentValues(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets the dependent (e.g. Force) values of the nonlinear tabular data for the stiffness per UnitX at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerUnitXIndependentValues"></a>

### JointBushingWorksheet.GetBushingStiffnessPerUnitXIndependentValues(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets the independent (e.g. Displacement) values of the nonlinear tabular data for the stiffness per UnitX at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerUnitY"></a>

### JointBushingWorksheet.GetBushingStiffnessPerUnitY(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Gets the Coefficient for the stiffness per UnitY at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerUnitYDependentValues"></a>

### JointBushingWorksheet.GetBushingStiffnessPerUnitYDependentValues(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets the dependent (e.g. Force) values of the nonlinear tabular data for the stiffness per UnitY at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerUnitYIndependentValues"></a>

### JointBushingWorksheet.GetBushingStiffnessPerUnitYIndependentValues(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets the independent (e.g. Displacement) values of the nonlinear tabular data for the stiffness per UnitY at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerUnitZ"></a>

### JointBushingWorksheet.GetBushingStiffnessPerUnitZ(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Gets the Coefficient for the stiffness per UnitZ at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerUnitZDependentValues"></a>

### JointBushingWorksheet.GetBushingStiffnessPerUnitZDependentValues(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets the dependent (e.g. Force) values of the nonlinear tabular data for the stiffness per UnitZ at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.GetBushingStiffnessPerUnitZIndependentValues"></a>

### JointBushingWorksheet.GetBushingStiffnessPerUnitZIndependentValues(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)

Gets the independent (e.g. Displacement) values of the nonlinear tabular data for the stiffness per UnitZ at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.IsBushingStiffnessPerThetaUnitXNonlinear"></a>

### JointBushingWorksheet.IsBushingStiffnessPerThetaUnitXNonlinear(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the Coefficient for the stiffness per ThetaUnitX at the indicated row index is defined as nonlinear (tabular).

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.IsBushingStiffnessPerThetaUnitYNonlinear"></a>

### JointBushingWorksheet.IsBushingStiffnessPerThetaUnitYNonlinear(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the Coefficient for the stiffness per ThetaUnitY at the indicated row index is defined as nonlinear (tabular).

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.IsBushingStiffnessPerThetaUnitZNonlinear"></a>

### JointBushingWorksheet.IsBushingStiffnessPerThetaUnitZNonlinear(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the Coefficient for the stiffness per ThetaUnitZ at the indicated row index is defined as nonlinear (tabular).

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.IsBushingStiffnessPerUnitXNonlinear"></a>

### JointBushingWorksheet.IsBushingStiffnessPerUnitXNonlinear(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the Coefficient for the stiffness per UnitX at the indicated row index is defined as nonlinear (tabular).

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.IsBushingStiffnessPerUnitYNonlinear"></a>

### JointBushingWorksheet.IsBushingStiffnessPerUnitYNonlinear(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the Coefficient for the stiffness per UnitY at the indicated row index is defined as nonlinear (tabular).

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.IsBushingStiffnessPerUnitZNonlinear"></a>

### JointBushingWorksheet.IsBushingStiffnessPerUnitZNonlinear(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Gets whether the Coefficient for the stiffness per UnitZ at the indicated row index is defined as nonlinear (tabular).

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.RefreshWorksheet"></a>

### JointBushingWorksheet.RefreshWorksheet() → [None](https://docs.python.org/3/builtins/constants.html#None)

RefreshWorksheet method.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingDampingPerThetaUnitX"></a>

### JointBushingWorksheet.SetBushingDampingPerThetaUnitX(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [float](https://docs.python.org/3/builtins/functions.html#float)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Sets the Coefficient for the damping per ThetaUnitX at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingDampingPerThetaUnitY"></a>

### JointBushingWorksheet.SetBushingDampingPerThetaUnitY(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [float](https://docs.python.org/3/builtins/functions.html#float)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Sets the Coefficient for the damping per ThetaUnitY at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingDampingPerThetaUnitZ"></a>

### JointBushingWorksheet.SetBushingDampingPerThetaUnitZ(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [float](https://docs.python.org/3/builtins/functions.html#float)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Sets the Coefficient for the damping per ThetaUnitZ at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingDampingPerUnitX"></a>

### JointBushingWorksheet.SetBushingDampingPerUnitX(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [float](https://docs.python.org/3/builtins/functions.html#float)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Sets the Coefficient for the damping per UnitX at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingDampingPerUnitY"></a>

### JointBushingWorksheet.SetBushingDampingPerUnitY(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [float](https://docs.python.org/3/builtins/functions.html#float)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Sets the Coefficient for the damping per UnitY at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingDampingPerUnitZ"></a>

### JointBushingWorksheet.SetBushingDampingPerUnitZ(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [float](https://docs.python.org/3/builtins/functions.html#float)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Sets the Coefficient for the damping per UnitZ at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerThetaUnitX"></a>

### JointBushingWorksheet.SetBushingStiffnessPerThetaUnitX(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [float](https://docs.python.org/3/builtins/functions.html#float)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Sets the Coefficient for the stiffness per ThetaUnitX at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerThetaUnitXNonlinear"></a>

### JointBushingWorksheet.SetBushingStiffnessPerThetaUnitXNonlinear(index: [int](https://docs.python.org/3/builtins/functions.html#int), nonlinear: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Switches the stiffness per ThetaUnitX cell at the indicated row index between constant (linear) and tabular (nonlinear).

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerThetaUnitXTabularValues"></a>

### JointBushingWorksheet.SetBushingStiffnessPerThetaUnitXTabularValues(index: [int](https://docs.python.org/3/builtins/functions.html#int), independentValues: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), dependentValues: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetBushingStiffnessPerThetaUnitXTabularValues method.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerThetaUnitY"></a>

### JointBushingWorksheet.SetBushingStiffnessPerThetaUnitY(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [float](https://docs.python.org/3/builtins/functions.html#float)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Sets the Coefficient for the stiffness per ThetaUnitY at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerThetaUnitYNonlinear"></a>

### JointBushingWorksheet.SetBushingStiffnessPerThetaUnitYNonlinear(index: [int](https://docs.python.org/3/builtins/functions.html#int), nonlinear: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Switches the stiffness per ThetaUnitY cell at the indicated row index between constant (linear) and tabular (nonlinear).

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerThetaUnitYTabularValues"></a>

### JointBushingWorksheet.SetBushingStiffnessPerThetaUnitYTabularValues(index: [int](https://docs.python.org/3/builtins/functions.html#int), independentValues: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), dependentValues: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetBushingStiffnessPerThetaUnitYTabularValues method.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerThetaUnitZ"></a>

### JointBushingWorksheet.SetBushingStiffnessPerThetaUnitZ(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [float](https://docs.python.org/3/builtins/functions.html#float)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Sets the Coefficient for the stiffness per ThetaUnitZ at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerThetaUnitZNonlinear"></a>

### JointBushingWorksheet.SetBushingStiffnessPerThetaUnitZNonlinear(index: [int](https://docs.python.org/3/builtins/functions.html#int), nonlinear: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Switches the stiffness per ThetaUnitZ cell at the indicated row index between constant (linear) and tabular (nonlinear).

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerThetaUnitZTabularValues"></a>

### JointBushingWorksheet.SetBushingStiffnessPerThetaUnitZTabularValues(index: [int](https://docs.python.org/3/builtins/functions.html#int), independentValues: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), dependentValues: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetBushingStiffnessPerThetaUnitZTabularValues method.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerUnitX"></a>

### JointBushingWorksheet.SetBushingStiffnessPerUnitX(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [float](https://docs.python.org/3/builtins/functions.html#float)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Sets the Coefficient for the stiffness per UnitX at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerUnitXNonlinear"></a>

### JointBushingWorksheet.SetBushingStiffnessPerUnitXNonlinear(index: [int](https://docs.python.org/3/builtins/functions.html#int), nonlinear: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Switches the stiffness per UnitX cell at the indicated row index between constant (linear) and tabular (nonlinear).

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerUnitXTabularValues"></a>

### JointBushingWorksheet.SetBushingStiffnessPerUnitXTabularValues(index: [int](https://docs.python.org/3/builtins/functions.html#int), independentValues: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), dependentValues: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetBushingStiffnessPerUnitXTabularValues method.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerUnitY"></a>

### JointBushingWorksheet.SetBushingStiffnessPerUnitY(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [float](https://docs.python.org/3/builtins/functions.html#float)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Sets the Coefficient for the stiffness per UnitY at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerUnitYNonlinear"></a>

### JointBushingWorksheet.SetBushingStiffnessPerUnitYNonlinear(index: [int](https://docs.python.org/3/builtins/functions.html#int), nonlinear: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Switches the stiffness per UnitY cell at the indicated row index between constant (linear) and tabular (nonlinear).

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerUnitYTabularValues"></a>

### JointBushingWorksheet.SetBushingStiffnessPerUnitYTabularValues(index: [int](https://docs.python.org/3/builtins/functions.html#int), independentValues: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), dependentValues: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetBushingStiffnessPerUnitYTabularValues method.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerUnitZ"></a>

### JointBushingWorksheet.SetBushingStiffnessPerUnitZ(index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [float](https://docs.python.org/3/builtins/functions.html#float)) → [float](https://docs.python.org/3/builtins/functions.html#float)

Sets the Coefficient for the stiffness per UnitZ at the indicated row index.

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerUnitZNonlinear"></a>

### JointBushingWorksheet.SetBushingStiffnessPerUnitZNonlinear(index: [int](https://docs.python.org/3/builtins/functions.html#int), nonlinear: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Switches the stiffness per UnitZ cell at the indicated row index between constant (linear) and tabular (nonlinear).

<!-- !! processed by numpydoc !! -->

<a id="JointBushingWorksheet.SetBushingStiffnessPerUnitZTabularValues"></a>

### JointBushingWorksheet.SetBushingStiffnessPerUnitZTabularValues(index: [int](https://docs.python.org/3/builtins/functions.html#int), independentValues: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity), dependentValues: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetBushingStiffnessPerUnitZTabularValues method.

<!-- !! processed by numpydoc !! -->

