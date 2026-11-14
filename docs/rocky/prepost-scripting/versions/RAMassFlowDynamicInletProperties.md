

# RAMassFlowDynamicInletProperties

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAMassFlowDynamicInletProperties"></a>

### *class* RAMassFlowDynamicInletProperties

Rocky PrePost Scripting wrapper for a single entry in a MassFlowDynamicInlet’s input list.

Access this wrapper from a given [`RAMassFlowDynamicInlet`](RAMassFlowDynamicInlet.md#generated.RAMassFlowDynamicInlet) with:

```python
input_properties_list = mass_flow_dynamic_inlet.GetInputPropertiesList()
input_properties_1 = input_properties_list.New()
input_properties_1.SetParticle('Particle 1')
input_properties_1.SetMassFlowRate(100, 't/h')
```

**Methods:**

| Name | Description |
|--------------------------------------------------------------------------------------------------|------------------------------------|
| [`GetAvailableParticles`](#generated.RAMassFlowDynamicInletProperties.GetAvailableParticles)()   | Get all available Particles.       |
| [`GetMassFlowRate`](#generated.RAMassFlowDynamicInletProperties.GetMassFlowRate)([unit])         | Get the value of "Mass Flow Rate". |
| [`GetParticle`](#generated.RAMassFlowDynamicInletProperties.GetParticle)()                       | Get the "Particle".                |
| [`GetTemperature`](#generated.RAMassFlowDynamicInletProperties.GetTemperature)([unit])           | Get the value of "Temperature".    |
| [`SetMassFlowRate`](#generated.RAMassFlowDynamicInletProperties.SetMassFlowRate)(value[, unit])  | Set the value of "Mass Flow Rate". |
| [`SetParticle`](#generated.RAMassFlowDynamicInletProperties.SetParticle)(value)                  | Set the "Particle".                |
| [`SetTemperature`](#generated.RAMassFlowDynamicInletProperties.SetTemperature)(value[, unit])    | Set the value of "Temperature".    |

<a id="generated.RAMassFlowDynamicInletProperties.GetAvailableParticles"></a>

#### GetAvailableParticles()

Get all available Particles.

* **Return type:**
  List[[`RAParticle`](RAParticle.md#generated.RAParticle)]
  A list of [`RAParticle`](RAParticle.md#generated.RAParticle).

<a id="generated.RAMassFlowDynamicInletProperties.GetMassFlowRate"></a>

#### GetMassFlowRate(unit: str | None = None)

Get the value of “Mass Flow Rate”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “t/h”.

<a id="generated.RAMassFlowDynamicInletProperties.GetParticle"></a>

#### GetParticle()

Get the “Particle”.

* **Return type:**
  [`RAParticle`](RAParticle.md#generated.RAParticle)

<a id="generated.RAMassFlowDynamicInletProperties.GetTemperature"></a>

#### GetTemperature(unit: str | None = None)

Get the value of “Temperature”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “K”.

<a id="generated.RAMassFlowDynamicInletProperties.SetMassFlowRate"></a>

#### SetMassFlowRate(value: str | float, unit: str | None = None)

Set the value of “Mass Flow Rate”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “t/h”.

<a id="generated.RAMassFlowDynamicInletProperties.SetParticle"></a>

#### SetParticle(value)

Set the “Particle”.

:param unicode, [`RAParticle`](RAParticle.md#generated.RAParticle) value:
: Either the API object wrapping the desired entity or its name.

<a id="generated.RAMassFlowDynamicInletProperties.SetTemperature"></a>

#### SetTemperature(value: str | float, unit: str | None = None)

Set the value of “Temperature”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “K”.
