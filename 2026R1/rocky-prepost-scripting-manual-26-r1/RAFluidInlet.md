

# RAFluidInlet

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAFluidInlet"></a>

### *class* RAFluidInlet

Rocky PrePost Scripting wrapper for a single Fluid Inlet input.

This wrapper class corresponds to an individual entry under the “Inputs” item on the project’s
data tree. Particle inputs can be retrieved from the [`RAStudy`](RAStudy.md#generated.RAStudy) or the
[`RAInletsOutletsCollection`](RAInletsOutletsCollection.md#generated.RAInletsOutletsCollection) via:

```python
input_1 = study.GetElement('Fluid Inlet <1>')
input_2 = input_collection.GetParticleInput('Fluid Inlet <2>')
```

Instances of [`RAFluidInlet`](#generated.RAFluidInlet) has properties that can be manipulated
directly, such as the input’s name and the particle entry point.

**Methods:**

| Name | Description |
|------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`DisablePeriodic`](#generated.RAFluidInlet.DisablePeriodic)()                                 | Set the value of "Periodic" to False.                       |
| [`EnablePeriodic`](#generated.RAFluidInlet.EnablePeriodic)()                                   | Set the value of "Periodic" to True.                        |
| [`GetAvailableEntryPoints`](#generated.RAFluidInlet.GetAvailableEntryPoints)()                 | Get all available Entry Points.                             |
| [`GetBoundaryCondition`](#generated.RAFluidInlet.GetBoundaryCondition)()                       | Get "Boundary Condition" as a string.                       |
| [`GetEntryPoint`](#generated.RAFluidInlet.GetEntryPoint)()                                     | Get the "Entry Point".                                      |
| [`GetInjectionDuration`](#generated.RAFluidInlet.GetInjectionDuration)([unit])                 | Get the value of "Injection Duration".                      |
| [`GetMassFlowRate`](#generated.RAFluidInlet.GetMassFlowRate)([unit])                           | Get the value of "Mass Flow Rate".                          |
| [`GetPeriod`](#generated.RAFluidInlet.GetPeriod)([unit])                                       | Get the value of "Period".                                  |
| [`GetPeriodic`](#generated.RAFluidInlet.GetPeriodic)()                                         | Get the value of "Periodic".                                |
| [`GetStartTime`](#generated.RAFluidInlet.GetStartTime)([unit])                                 | Get the value of "Start Time".                              |
| [`GetStopTime`](#generated.RAFluidInlet.GetStopTime)([unit])                                   | Get the value of "Stop Time".                               |
| [`GetTemperature`](#generated.RAFluidInlet.GetTemperature)([unit])                             | Get the value of "Temperature".                             |
| [`GetValidBoundaryConditionValues`](#generated.RAFluidInlet.GetValidBoundaryConditionValues)() | Get a list of all possible values for "Boundary Condition". |
| [`GetVelocity`](#generated.RAFluidInlet.GetVelocity)([unit])                                   | Get the value of "Velocity".                                |
| [`IsPeriodicEnabled`](#generated.RAFluidInlet.IsPeriodicEnabled)()                             | Check if the "Periodic" is enabled.                         |
| [`SetBoundaryCondition`](#generated.RAFluidInlet.SetBoundaryCondition)(value)                  | Set the value of "Boundary Condition".                      |
| [`SetEntryPoint`](#generated.RAFluidInlet.SetEntryPoint)(value)                                | Set the "Entry Point".                                      |
| [`SetInjectionDuration`](#generated.RAFluidInlet.SetInjectionDuration)(value[, unit])          | Set the value of "Injection Duration".                      |
| [`SetMassFlowRate`](#generated.RAFluidInlet.SetMassFlowRate)(value[, unit])                    | Set the value of "Mass Flow Rate".                          |
| [`SetPeriod`](#generated.RAFluidInlet.SetPeriod)(value[, unit])                                | Set the value of "Period".                                  |
| [`SetPeriodic`](#generated.RAFluidInlet.SetPeriodic)(value)                                    | Set the value of "Periodic".                                |
| [`SetStartTime`](#generated.RAFluidInlet.SetStartTime)(value[, unit])                          | Set the value of "Start Time".                              |
| [`SetStopTime`](#generated.RAFluidInlet.SetStopTime)(value[, unit])                            | Set the value of "Stop Time".                               |
| [`SetTemperature`](#generated.RAFluidInlet.SetTemperature)(value[, unit])                      | Set the value of "Temperature".                             |
| [`SetVelocity`](#generated.RAFluidInlet.SetVelocity)(value[, unit])                            | Set the value of "Velocity".                                |

<a id="generated.RAFluidInlet.DisablePeriodic"></a>

#### DisablePeriodic()

Set the value of “Periodic” to False.

<a id="generated.RAFluidInlet.EnablePeriodic"></a>

#### EnablePeriodic()

Set the value of “Periodic” to True.

<a id="generated.RAFluidInlet.GetAvailableEntryPoints"></a>

#### GetAvailableEntryPoints()

Get all available Entry Points.

* **Return type:**
  List[[`RAInletGeometry`](RAInletGeometry.md#generated.RAInletGeometry), [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface)]
  A list of [`RAInletGeometry`](RAInletGeometry.md#generated.RAInletGeometry), [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface).

<a id="generated.RAFluidInlet.GetBoundaryCondition"></a>

#### GetBoundaryCondition()

Get “Boundary Condition” as a string.

* **Returns:**
  The returned value will be one of [‘mass_flow_rate’, ‘velocity’].

<a id="generated.RAFluidInlet.GetEntryPoint"></a>

#### GetEntryPoint()

Get the “Entry Point”.

* **Return type:**
  [`RAInletGeometry`](RAInletGeometry.md#generated.RAInletGeometry), [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface)

<a id="generated.RAFluidInlet.GetInjectionDuration"></a>

#### GetInjectionDuration(unit: str | None = None)

Get the value of “Injection Duration”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAFluidInlet.GetMassFlowRate"></a>

#### GetMassFlowRate(unit: str | None = None)

Get the value of “Mass Flow Rate”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “t/h”.

<a id="generated.RAFluidInlet.GetPeriod"></a>

#### GetPeriod(unit: str | None = None)

Get the value of “Period”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAFluidInlet.GetPeriodic"></a>

#### GetPeriodic()

Get the value of “Periodic”.

<a id="generated.RAFluidInlet.GetStartTime"></a>

#### GetStartTime(unit: str | None = None)

Get the value of “Start Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAFluidInlet.GetStopTime"></a>

#### GetStopTime(unit: str | None = None)

Get the value of “Stop Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAFluidInlet.GetTemperature"></a>

#### GetTemperature(unit: str | None = None)

Get the value of “Temperature”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “K”.

<a id="generated.RAFluidInlet.GetValidBoundaryConditionValues"></a>

#### GetValidBoundaryConditionValues()

Get a list of all possible values for “Boundary Condition”.

* **Returns:**
  The returned list is [‘mass_flow_rate’, ‘velocity’].

<a id="generated.RAFluidInlet.GetVelocity"></a>

#### GetVelocity(unit: str | None = None)

Get the value of “Velocity”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s”.

<a id="generated.RAFluidInlet.IsPeriodicEnabled"></a>

#### IsPeriodicEnabled()

Check if the “Periodic” is enabled.

<a id="generated.RAFluidInlet.SetBoundaryCondition"></a>

#### SetBoundaryCondition(value: str)

Set the value of “Boundary Condition”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘mass_flow_rate’, ‘velocity’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Boundary Condition” option.

<a id="generated.RAFluidInlet.SetEntryPoint"></a>

#### SetEntryPoint(value)

Set the “Entry Point”.

:param unicode, [`RAInletGeometry`](RAInletGeometry.md#generated.RAInletGeometry), [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface) value:
: Either the API object wrapping the desired entity or its name.

<a id="generated.RAFluidInlet.SetInjectionDuration"></a>

#### SetInjectionDuration(value: str | float, unit: str | None = None)

Set the value of “Injection Duration”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAFluidInlet.SetMassFlowRate"></a>

#### SetMassFlowRate(value: str | float, unit: str | None = None)

Set the value of “Mass Flow Rate”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “t/h”.

<a id="generated.RAFluidInlet.SetPeriod"></a>

#### SetPeriod(value: str | float, unit: str | None = None)

Set the value of “Period”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAFluidInlet.SetPeriodic"></a>

#### SetPeriodic(value: bool)

Set the value of “Periodic”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAFluidInlet.SetStartTime"></a>

#### SetStartTime(value: str | float, unit: str | None = None)

Set the value of “Start Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAFluidInlet.SetStopTime"></a>

#### SetStopTime(value: str | float, unit: str | None = None)

Set the value of “Stop Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAFluidInlet.SetTemperature"></a>

#### SetTemperature(value: str | float, unit: str | None = None)

Set the value of “Temperature”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “K”.

<a id="generated.RAFluidInlet.SetVelocity"></a>

#### SetVelocity(value: str | float, unit: str | None = None)

Set the value of “Velocity”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s”.
