# RAFluidMaterial

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAFluidMaterial

Rocky API wrapper for individual fluid materials in a project.

Retrieve individual materials from the [`RAStudy`](RAStudy.md#generated.RAStudy)
or the [`RAMaterialCollection`](RAMaterialCollection.md#generated.RAMaterialCollection) via:

```python
material_1 = study.GetElement('fluid material 1')
material_2 = material_collection.GetMaterial('fluid material 2')
material_3 = material_collection[2]
```

**Methods:**

| [`GetDensity`](#generated.RAFluidMaterial.GetDensity)([unit])                                                    | Get the value of "Density".                                                     |
|------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`GetModuleProperties`](#generated.RAFluidMaterial.GetModuleProperties)()                                        | Get the names of the module properties.                                         |
| [`GetModuleProperty`](#generated.RAFluidMaterial.GetModuleProperty)(property_name[, unit])                       | Get the value of a module property.                                             |
| [`GetSoundSpeed`](#generated.RAFluidMaterial.GetSoundSpeed)([unit])                                              | Get the value of "Sound Speed".                                                 |
| [`GetSpecificHeat`](#generated.RAFluidMaterial.GetSpecificHeat)([unit])                                          | Get the value of "Specific Heat".                                               |
| [`GetThermalConductivity`](#generated.RAFluidMaterial.GetThermalConductivity)([unit])                            | Get the value of "Thermal Conductivity".                                        |
| [`GetValidOptionsForModuleProperty`](#generated.RAFluidMaterial.GetValidOptionsForModuleProperty)(property_name) | Get all valid options only for properties that have a list of possible options. |
| [`GetViscosity`](#generated.RAFluidMaterial.GetViscosity)([unit])                                                | Get the value of "Viscosity".                                                   |
| [`SetDensity`](#generated.RAFluidMaterial.SetDensity)(value[, unit])                                             | Set the value of "Density".                                                     |
| [`SetModuleProperty`](#generated.RAFluidMaterial.SetModuleProperty)(property_name, value[, unit])                | Set the value of a module property.                                             |
| [`SetSoundSpeed`](#generated.RAFluidMaterial.SetSoundSpeed)(value[, unit])                                       | Set the value of "Sound Speed".                                                 |
| [`SetSpecificHeat`](#generated.RAFluidMaterial.SetSpecificHeat)(value[, unit])                                   | Set the value of "Specific Heat".                                               |
| [`SetThermalConductivity`](#generated.RAFluidMaterial.SetThermalConductivity)(value[, unit])                     | Set the value of "Thermal Conductivity".                                        |
| [`SetViscosity`](#generated.RAFluidMaterial.SetViscosity)(value[, unit])                                         | Set the value of "Viscosity".                                                   |

#### GetDensity(unit: Optional[str] = None)

Get the value of “Density”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “kg/m3”.

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

#### GetSoundSpeed(unit: Optional[str] = None)

Get the value of “Sound Speed”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s”.

#### GetSpecificHeat(unit: Optional[str] = None)

Get the value of “Specific Heat”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “J/kg.K”.

#### GetThermalConductivity(unit: Optional[str] = None)

Get the value of “Thermal Conductivity”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “W/m.K”.

#### GetValidOptionsForModuleProperty(property_name)

Get all valid options only for properties that have a list of possible options.

* **Parameters:**
  **property_name** (*str*) – The name of the module property.
* **Return type:**
  List[str]

#### GetViscosity(unit: Optional[str] = None)

Get the value of “Viscosity”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “Pa.s”.

#### SetDensity(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Density”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “kg/m3”.

#### SetModuleProperty(property_name: Union[str, ModulePropertyIdentifier], value: Union[float, bool, str], unit: Optional[str] = None)

Set the value of a module property.

* **Parameters:**
  * **property_name** (*Union**[**str**,* *ModulePropertyIdentifier**]*) – The name of the module property to set.
  * **value** (*float**,* *bool* *or* *str*) – The value to set.
    If the property_name references to an enum property then value must be an str value.
  * **unit** (*str*) – The unit for value, just for scalar properties. If no unit is provided,
    value is assumed to be the unit was set before.

#### SetSoundSpeed(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Sound Speed”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s”.

#### SetSpecificHeat(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Specific Heat”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “J/kg.K”.

#### SetThermalConductivity(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Thermal Conductivity”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “W/m.K”.

#### SetViscosity(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Viscosity”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “Pa.s”.
