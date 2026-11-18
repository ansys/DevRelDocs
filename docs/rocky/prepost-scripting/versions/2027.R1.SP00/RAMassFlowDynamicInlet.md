

# RAMassFlowDynamicInlet

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAMassFlowDynamicInlet"></a>

### *class* RAMassFlowDynamicInlet

Rocky PrePost Scripting wrapper for a single Mass Flow Dynamic Inlet input.

This wrapper class corresponds to an individual entry under the “Inputs” item on the project’s
data tree. Mass Flow Dynamic Inlets can be retrieved from the [`RAStudy`](RAStudy.md#generated.RAStudy) or the
[`RAInletsOutletsCollection`](RAInletsOutletsCollection.md#generated.RAInletsOutletsCollection) via:

```python
inlet = study.GetElement('Mass Flow Dynamic Inlet <1>')
```

**Methods:**

| Name | Description |
|-------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`AddParticle`](#generated.RAMassFlowDynamicInlet.AddParticle)(particle)                        | Add a new particle to the Mass Flow Dynamic Inlet input properties list.   |
| [`GetInjectionVelocity`](#generated.RAMassFlowDynamicInlet.GetInjectionVelocity)([unit])        | Get the value of "Injection Velocity".                                     |
| [`GetInputPropertiesList`](#generated.RAMassFlowDynamicInlet.GetInputPropertiesList)()          | Return a list of input properties                                          |
| [`GetMaximumInjectionTries`](#generated.RAMassFlowDynamicInlet.GetMaximumInjectionTries)()      | Get the value of "Maximum Injection Tries".                                |
| [`GetPeriod`](#generated.RAMassFlowDynamicInlet.GetPeriod)([unit])                              | Get the value of "Period".                                                 |
| [`GetRandomTravelExponent`](#generated.RAMassFlowDynamicInlet.GetRandomTravelExponent)()        | Get the value of "Random Travel Exponent".                                 |
| [`GetSizeScaling`](#generated.RAMassFlowDynamicInlet.GetSizeScaling)()                          | Get the value of "Size Scaling".                                           |
| [`GetStartTime`](#generated.RAMassFlowDynamicInlet.GetStartTime)([unit])                        | Get the value of "Start Time".                                             |
| [`GetStopTime`](#generated.RAMassFlowDynamicInlet.GetStopTime)([unit])                          | Get the value of "Stop Time".                                              |
| [`GetVoidFraction`](#generated.RAMassFlowDynamicInlet.GetVoidFraction)()                        | Get the value of "Void Fraction".                                          |
| [`RemoveParticle`](#generated.RAMassFlowDynamicInlet.RemoveParticle)(particle)                  | Remove a particle from the Mass Flow Dynamic Inlet input properties list.  |
| [`SetInjectionVelocity`](#generated.RAMassFlowDynamicInlet.SetInjectionVelocity)(value[, unit]) | Set the value of "Injection Velocity".                                     |
| [`SetMaximumInjectionTries`](#generated.RAMassFlowDynamicInlet.SetMaximumInjectionTries)(value) | Set the value of "Maximum Injection Tries".                                |
| [`SetPeriod`](#generated.RAMassFlowDynamicInlet.SetPeriod)(value[, unit])                       | Set the value of "Period".                                                 |
| [`SetRandomTravelExponent`](#generated.RAMassFlowDynamicInlet.SetRandomTravelExponent)(value)   | Set the value of "Random Travel Exponent".                                 |
| [`SetSizeScaling`](#generated.RAMassFlowDynamicInlet.SetSizeScaling)(value)                     | Set the value of "Size Scaling".                                           |
| [`SetStartTime`](#generated.RAMassFlowDynamicInlet.SetStartTime)(value[, unit])                 | Set the value of "Start Time".                                             |
| [`SetStopTime`](#generated.RAMassFlowDynamicInlet.SetStopTime)(value[, unit])                   | Set the value of "Stop Time".                                              |
| [`SetVoidFraction`](#generated.RAMassFlowDynamicInlet.SetVoidFraction)(value)                   | Set the value of "Void Fraction".                                          |

<a id="generated.RAMassFlowDynamicInlet.AddParticle"></a>

#### AddParticle(particle: RAParticle | str)

Add a new particle to the Mass Flow Dynamic Inlet input properties list.

* **Returns:**
  A new [`RAMassFlowDynamicInletPropertiesList`](RAMassFlowDynamicInletPropertiesList.md#generated.RAMassFlowDynamicInletPropertiesList) object.

<a id="generated.RAMassFlowDynamicInlet.GetInjectionVelocity"></a>

#### GetInjectionVelocity(unit: str | None = None)

Get the value of “Injection Velocity”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s”.

<a id="generated.RAMassFlowDynamicInlet.GetInputPropertiesList"></a>

#### GetInputPropertiesList()

Return a list of input properties

<a id="generated.RAMassFlowDynamicInlet.GetMaximumInjectionTries"></a>

#### GetMaximumInjectionTries()

Get the value of “Maximum Injection Tries”.

<a id="generated.RAMassFlowDynamicInlet.GetPeriod"></a>

#### GetPeriod(unit: str | None = None)

Get the value of “Period”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAMassFlowDynamicInlet.GetRandomTravelExponent"></a>

#### GetRandomTravelExponent()

Get the value of “Random Travel Exponent”.

<a id="generated.RAMassFlowDynamicInlet.GetSizeScaling"></a>

#### GetSizeScaling()

Get the value of “Size Scaling”.

<a id="generated.RAMassFlowDynamicInlet.GetStartTime"></a>

#### GetStartTime(unit: str | None = None)

Get the value of “Start Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAMassFlowDynamicInlet.GetStopTime"></a>

#### GetStopTime(unit: str | None = None)

Get the value of “Stop Time”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “s”.

<a id="generated.RAMassFlowDynamicInlet.GetVoidFraction"></a>

#### GetVoidFraction()

Get the value of “Void Fraction”.

<a id="generated.RAMassFlowDynamicInlet.RemoveParticle"></a>

#### RemoveParticle(particle: RAParticle | str)

Remove a particle from the Mass Flow Dynamic Inlet input properties list.

* **Parameters:**
  **particle** – The particle to remove, either as an [`RAParticle`](RAParticle.md#generated.RAParticle) object or by name.

<a id="generated.RAMassFlowDynamicInlet.SetInjectionVelocity"></a>

#### SetInjectionVelocity(value: str | float, unit: str | None = None)

Set the value of “Injection Velocity”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s”.

<a id="generated.RAMassFlowDynamicInlet.SetMaximumInjectionTries"></a>

#### SetMaximumInjectionTries(value: str | int)

Set the value of “Maximum Injection Tries”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RAMassFlowDynamicInlet.SetPeriod"></a>

#### SetPeriod(value: str | float, unit: str | None = None)

Set the value of “Period”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAMassFlowDynamicInlet.SetRandomTravelExponent"></a>

#### SetRandomTravelExponent(value: str | float)

Set the value of “Random Travel Exponent”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAMassFlowDynamicInlet.SetSizeScaling"></a>

#### SetSizeScaling(value: str | float)

Set the value of “Size Scaling”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RAMassFlowDynamicInlet.SetStartTime"></a>

#### SetStartTime(value: str | float, unit: str | None = None)

Set the value of “Start Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAMassFlowDynamicInlet.SetStopTime"></a>

#### SetStopTime(value: str | float, unit: str | None = None)

Set the value of “Stop Time”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “s”.

<a id="generated.RAMassFlowDynamicInlet.SetVoidFraction"></a>

#### SetVoidFraction(value: str | float)

Set the value of “Void Fraction”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.
