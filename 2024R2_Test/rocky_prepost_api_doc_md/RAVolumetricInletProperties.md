# RAVolumetricInletProperties

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAVolumetricInletProperties

Rocky API wrapper for a single entry in a single Volume Fill’s input list.

Access this wrapper from a given [`RAVolumetricInlet`](RAVolumetricInlet.md#generated.RAVolumetricInlet) with:

```python
input_properties_list = particle_input.GetInputPropertiesList()
input_properties_1 = input_properties_list.New()
input_properties_1.SetParticle('Particle 1')
input_properties_1.SetMass(100, 't')
```

**Methods:**

| [`GetAvailableParticles`](#generated.RAVolumetricInletProperties.GetAvailableParticles)()                                    | Get all available Particles.                                                    |
|------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`GetMass`](#generated.RAVolumetricInletProperties.GetMass)([unit])                                                          | Get the value of "Mass".                                                        |
| [`GetModuleProperties`](#generated.RAVolumetricInletProperties.GetModuleProperties)()                                        | Get the names of the module properties.                                         |
| [`GetModuleProperty`](#generated.RAVolumetricInletProperties.GetModuleProperty)(property_name[, unit])                       | Get the value of a module property.                                             |
| [`GetParticle`](#generated.RAVolumetricInletProperties.GetParticle)()                                                        | Get the "Particle".                                                             |
| [`GetTemperature`](#generated.RAVolumetricInletProperties.GetTemperature)([unit])                                            | Get the value of "Temperature".                                                 |
| [`GetValidOptionsForModuleProperty`](#generated.RAVolumetricInletProperties.GetValidOptionsForModuleProperty)(property_name) | Get all valid options only for properties that have a list of possible options. |
| [`SetMass`](#generated.RAVolumetricInletProperties.SetMass)(value[, unit])                                                   | Set the value of "Mass".                                                        |
| [`SetModuleProperty`](#generated.RAVolumetricInletProperties.SetModuleProperty)(property_name, value[, unit])                | Set the value of a module property.                                             |
| [`SetParticle`](#generated.RAVolumetricInletProperties.SetParticle)(value)                                                   | Set the "Particle".                                                             |
| [`SetTemperature`](#generated.RAVolumetricInletProperties.SetTemperature)(value[, unit])                                     | Set the value of "Temperature".                                                 |

#### GetAvailableParticles()

Get all available Particles.

* **Return type:**
  List[[`RAParticle`](RAParticle.md#generated.RAParticle)]
  A list of [`RAParticle`](RAParticle.md#generated.RAParticle).

#### GetMass(unit: Optional[str] = None)

Get the value of “Mass”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “kg”.

#### GetModuleProperties()

Get the names of the module properties.

* **Return type:**
  tuple(ModulePropertyIdentifier)

#### GetModuleProperty(property_name: Union[str, ModulePropertyIdentifier], unit: Optional[str] = None)

Get the value of a module property.

* **Parameters:**
  * **property_name** (*Union**[**str**,* *ModulePropertyIdentifier**]*) – The name of the module property to get.
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

#### GetParticle()

Get the “Particle”.

* **Return type:**
  [`RAParticle`](RAParticle.md#generated.RAParticle)

#### GetTemperature(unit: Optional[str] = None)

Get the value of “Temperature”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “K”.

#### GetValidOptionsForModuleProperty(property_name)

Get all valid options only for properties that have a list of possible options.

* **Parameters:**
  **property_name** (*str*) – The name of the module property.
* **Return type:**
  List[str]

#### SetMass(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Mass”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “kg”.

#### SetModuleProperty(property_name: Union[str, ModulePropertyIdentifier], value: Union[float, bool, str], unit: Optional[str] = None)

Set the value of a module property.

* **Parameters:**
  * **property_name** (*Union**[**str**,* *ModulePropertyIdentifier**]*) – The name of the module property to set.
  * **value** (*float**,* *bool* *or* *str*) – The value to set.
    If the property_name references to an enum property then value must be an str value.
  * **unit** (*str*) – The unit for value, just for scalar properties. If no unit is provided,
    value is assumed to be the unit was set before.

#### SetParticle(value)

Set the “Particle”.

:param unicode, [`RAParticle`](RAParticle.md#generated.RAParticle) value:
: Either the API object wrapping the desired entity or its name.

#### SetTemperature(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Temperature”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “K”.
