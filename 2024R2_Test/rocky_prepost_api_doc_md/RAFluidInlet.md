# RAFluidInlet

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAFluidInlet

Rocky API wrapper for a single Fluid Inlet input.

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

| [`GetAvailableEntryPoints`](#generated.RAFluidInlet.GetAvailableEntryPoints)()                 | Get all available Entry Points.                             |
|------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`GetBoundaryCondition`](#generated.RAFluidInlet.GetBoundaryCondition)()                       | Get "Boundary Condition" as a string.                       |
| [`GetEntryPoint`](#generated.RAFluidInlet.GetEntryPoint)()                                     | Get the "Entry Point".                                      |
| [`GetMassFlowRate`](#generated.RAFluidInlet.GetMassFlowRate)([unit])                           | Get the value of "Mass Flow Rate".                          |
| [`GetStartTime`](#generated.RAFluidInlet.GetStartTime)([unit])                                 | Get the value of "Start Time".                              |
| [`GetStopTime`](#generated.RAFluidInlet.GetStopTime)([unit])                                   | Get the value of "Stop Time".                               |
| [`GetTemperature`](#generated.RAFluidInlet.GetTemperature)([unit])                             | Get the value of "Temperature".                             |
| [`GetValidBoundaryConditionValues`](#generated.RAFluidInlet.GetValidBoundaryConditionValues)() | Get a list of all possible values for "Boundary Condition". |
| [`GetVelocity`](#generated.RAFluidInlet.GetVelocity)([unit])                                   | Get the value of "Velocity".                                |
| [`SetBoundaryCondition`](#generated.RAFluidInlet.SetBoundaryCondition)(value)                  | Set the value of "Boundary Condition".                      |
| [`SetEntryPoint`](#generated.RAFluidInlet.SetEntryPoint)(value)                                | Set the "Entry Point".                                      |
| [`SetMassFlowRate`](#generated.RAFluidInlet.SetMassFlowRate)(value[, unit])                    | Set the value of "Mass Flow Rate".                          |
| [`SetStartTime`](#generated.RAFluidInlet.SetStartTime)(value[, unit])                          | Set the value of "Start Time".                              |
| [`SetStopTime`](#generated.RAFluidInlet.SetStopTime)(value[, unit])                            | Set the value of "Stop Time".                               |
| [`SetTemperature`](#generated.RAFluidInlet.SetTemperature)(value[, unit])                      | Set the value of "Temperature".                             |
| [`SetVelocity`](#generated.RAFluidInlet.SetVelocity)(value[, unit])                            | Set the value of "Velocity".                                |

#### GetAvailableEntryPoints()

Get all available Entry Points.

* **Return type:**
  List[[`RAInletGeometry`](RAInletGeometry.md#generated.RAInletGeometry), [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface)]
  A list of [`RAInletGeometry`](RAInletGeometry.md#generated.RAInletGeometry), [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface).

#### GetBoundaryCondition()

Get “Boundary Condition” as a string.

* **Returns:**
  The returned value will be one of [‘mass_flow_rate’, ‘velocity’].

#### GetEntryPoint()

Get the “Entry Point”.

* **Return type:**
  [`RAInletGeometry`](RAInletGeometry.md#generated.RAInletGeometry), [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface)

#### GetMassFlowRate(unit: Optional[str] = None)

Get the value of “Mass Flow Rate”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “t/h”.

#### GetStartTime(unit: Optional[str] = None)

Get the value of “Start Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetStopTime(unit: Optional[str] = None)

Get the value of “Stop Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

#### GetTemperature(unit: Optional[str] = None)

Get the value of “Temperature”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “K”.

#### GetValidBoundaryConditionValues()

Get a list of all possible values for “Boundary Condition”.

* **Returns:**
  The returned list is [‘mass_flow_rate’, ‘velocity’].

#### GetVelocity(unit: Optional[str] = None)

Get the value of “Velocity”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s”.

#### SetBoundaryCondition(value: str)

Set the value of “Boundary Condition”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘mass_flow_rate’, ‘velocity’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Boundary Condition” option.

#### SetEntryPoint(value)

Set the “Entry Point”.

:param unicode, [`RAInletGeometry`](RAInletGeometry.md#generated.RAInletGeometry), [`RARectangularSurface`](RARectangularSurface.md#generated.RARectangularSurface), [`RACircularSurface`](RACircularSurface.md#generated.RACircularSurface), [`RASurface`](RASurface.md#generated.RASurface) value:
: Either the API object wrapping the desired entity or its name.

#### SetMassFlowRate(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Mass Flow Rate”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “t/h”.

#### SetStartTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Start Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetStopTime(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Stop Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

#### SetTemperature(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Temperature”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “K”.

#### SetVelocity(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Velocity”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s”.
