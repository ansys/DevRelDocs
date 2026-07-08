

# RAParticleInletProperties

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAParticleInletProperties"></a>

### *class* RAParticleInletProperties

Rocky PrePost Scripting wrapper for a single entry in a single Particle Input’s input list.

Access this wrapper from a given [`RAParticleInlet`](RAParticleInlet.md#generated.RAParticleInlet) with:

```python
input_properties_list = particle_input.GetInputPropertiesList()
input_properties_1 = input_properties_list.New()
input_properties_1.SetParticle('Particle 1')
input_properties_1.SetMassFlowRate(100, 't/h')
```

**Methods:**

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`GetAvailableParticles`](#generated.RAParticleInletProperties.GetAvailableParticles)()                                    | Get all available Particles.                                                                         |
| [`GetMassFlowRate`](#generated.RAParticleInletProperties.GetMassFlowRate)([unit])                                          | Get the value of "Mass Flow Rate".                                                                   |
| [`GetModuleProperties`](#generated.RAParticleInletProperties.GetModuleProperties)()                                        | Get the names of the module properties.                                                              |
| [`GetModuleProperty`](#generated.RAParticleInletProperties.GetModuleProperty)(property_name[, unit])                       | Get the value of a module property.                                                                  |
| [`GetParticle`](#generated.RAParticleInletProperties.GetParticle)()                                                        | Get the "Particle".                                                                                  |
| [`GetTemperature`](#generated.RAParticleInletProperties.GetTemperature)([unit])                                            | Get the value of "Temperature".                                                                      |
| [`GetTonnage`](#generated.RAParticleInletProperties.GetTonnage)([unit])                                                    | Deprecated: Use [`GetMassFlowRate()`](#generated.RAParticleInletProperties.GetMassFlowRate) instead. |
| [`GetValidOptionsForModuleProperty`](#generated.RAParticleInletProperties.GetValidOptionsForModuleProperty)(property_name) | Get all valid options only for properties that have a list of possible options.                      |
| [`SetMassFlowRate`](#generated.RAParticleInletProperties.SetMassFlowRate)(value[, unit])                                   | Set the value of "Mass Flow Rate".                                                                   |
| [`SetModuleProperty`](#generated.RAParticleInletProperties.SetModuleProperty)(property_name, value[, unit])                | Set the value of a module property.                                                                  |
| [`SetParticle`](#generated.RAParticleInletProperties.SetParticle)(value)                                                   | Set the "Particle".                                                                                  |
| [`SetTemperature`](#generated.RAParticleInletProperties.SetTemperature)(value[, unit])                                     | Set the value of "Temperature".                                                                      |
| [`SetTonnage`](#generated.RAParticleInletProperties.SetTonnage)(value[, unit])                                             | Deprecated: Use [`SetMassFlowRate()`](#generated.RAParticleInletProperties.SetMassFlowRate) instead. |

<a id="generated.RAParticleInletProperties.GetAvailableParticles"></a>

#### GetAvailableParticles()

Get all available Particles.

* **Return type:**
  List[[`RAParticle`](RAParticle.md#generated.RAParticle)]
  A list of [`RAParticle`](RAParticle.md#generated.RAParticle).

<a id="generated.RAParticleInletProperties.GetMassFlowRate"></a>

#### GetMassFlowRate(unit: str | None = None)

Get the value of “Mass Flow Rate”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “t/h”.

<a id="generated.RAParticleInletProperties.GetModuleProperties"></a>

#### GetModuleProperties()

Get the names of the module properties.

* **Return type:**
  tuple(ModulePropertyIdentifier)

<a id="generated.RAParticleInletProperties.GetModuleProperty"></a>

#### GetModuleProperty(property_name: str | ModulePropertyIdentifier, unit: str | None = None)

Get the value of a module property.

* **Parameters:**
  * **property_name** (*Union* *[**str* *,* *ModulePropertyIdentifier* *]*) – The name of the module property to get.
  * **unit** (*str*) – The unit for value, just for scalar properties. If no unit is provided,
    the returned value will be in the unit that was set before (via SetModuleProperty()).
* **Return type:**
  float, bool, str or [`RAModulePropertyList`](RAModulePropertyList.md#generated.RAModulePropertyList)
* **Returns:**
  - For basic module properties like numbers and booleans, the returned value is a basic
    Python type (float, bool, or string)
  - For input files, the returned value is the string of the full path to the file
  - For properties that are lists of other properties, the returned value is a
    : [`RAModulePropertyList`](RAModulePropertyList.md#generated.RAModulePropertyList).

<a id="generated.RAParticleInletProperties.GetParticle"></a>

#### GetParticle()

Get the “Particle”.

* **Return type:**
  [`RAParticle`](RAParticle.md#generated.RAParticle)

<a id="generated.RAParticleInletProperties.GetTemperature"></a>

#### GetTemperature(unit: str | None = None)

Get the value of “Temperature”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “K”.

<a id="generated.RAParticleInletProperties.GetTonnage"></a>

#### GetTonnage(unit: str | None = None)

Deprecated: Use [`GetMassFlowRate()`](#generated.RAParticleInletProperties.GetMassFlowRate) instead.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “t/h”.

<a id="generated.RAParticleInletProperties.GetValidOptionsForModuleProperty"></a>

#### GetValidOptionsForModuleProperty(property_name)

Get all valid options only for properties that have a list of possible options.

* **Parameters:**
  **property_name** (*str*) – The name of the module property.
* **Return type:**
  List[str]

<a id="generated.RAParticleInletProperties.SetMassFlowRate"></a>

#### SetMassFlowRate(value: str | float, unit: str | None = None)

Set the value of “Mass Flow Rate”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “t/h”.

<a id="generated.RAParticleInletProperties.SetModuleProperty"></a>

#### SetModuleProperty(property_name: str | ModulePropertyIdentifier, value: float | bool | str, unit: str | None = None)

Set the value of a module property.

* **Parameters:**
  * **property_name** (*Union* *[**str* *,* *ModulePropertyIdentifier* *]*) – The name of the module property to set.
  * **value** (*float* *,* *bool* *or* *str*) – The value to set.
    If the property_name references to an enum property then value must be an str value.
  * **unit** (*str*) – The unit for value, just for scalar properties. If no unit is provided,
    value is assumed to be the unit was set before.

<a id="generated.RAParticleInletProperties.SetParticle"></a>

#### SetParticle(value)

Set the “Particle”.

:param unicode, [`RAParticle`](RAParticle.md#generated.RAParticle) value:
: Either the API object wrapping the desired entity or its name.

<a id="generated.RAParticleInletProperties.SetTemperature"></a>

#### SetTemperature(value: str | float, unit: str | None = None)

Set the value of “Temperature”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “K”.

<a id="generated.RAParticleInletProperties.SetTonnage"></a>

#### SetTonnage(value: float, unit: str | None = None)

Deprecated: Use [`SetMassFlowRate()`](#generated.RAParticleInletProperties.SetMassFlowRate) instead.

* **Parameters:**
  * **value** – The value to set.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “t/h”.
