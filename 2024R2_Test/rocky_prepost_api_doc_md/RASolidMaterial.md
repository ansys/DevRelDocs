# RASolidMaterial

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RASolidMaterial

Rocky API wrapper for individual materials in a project.

Retrieve individual materials from the [`RAStudy`](RAStudy.md#generated.RAStudy) or the [`RAMaterialCollection`](RAMaterialCollection.md#generated.RAMaterialCollection) via:

```python
material_1 = study.GetElement('Default Particles')
material_2 = material_collection.GetMaterial('Default Boundaries')
material_3 = material_collection[2]
```

**Methods:**

| [`GetBulkDensity`](#generated.RASolidMaterial.GetBulkDensity)([unit])                                            | Get the value of "Bulk Density".                                                |
|------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`GetCurrentDensity`](#generated.RASolidMaterial.GetCurrentDensity)([unit])                                      | Get the value of "Current Density".                                             |
| [`GetDensity`](#generated.RASolidMaterial.GetDensity)([unit])                                                    | Get the value of "Density".                                                     |
| [`GetModuleProperties`](#generated.RASolidMaterial.GetModuleProperties)()                                        | Get the names of the module properties.                                         |
| [`GetModuleProperty`](#generated.RASolidMaterial.GetModuleProperty)(property_name[, unit])                       | Get the value of a module property.                                             |
| [`GetPoissonRatio`](#generated.RASolidMaterial.GetPoissonRatio)([unit])                                          | Get the value of "Poisson Ratio".                                               |
| [`GetSpecificHeat`](#generated.RASolidMaterial.GetSpecificHeat)([unit])                                          | Get the value of "Specific Heat".                                               |
| [`GetThermalConductivity`](#generated.RASolidMaterial.GetThermalConductivity)([unit])                            | Get the value of "Thermal Conductivity".                                        |
| [`GetUseBulkDensity`](#generated.RASolidMaterial.GetUseBulkDensity)()                                            | Get the value of "Use Bulk Density".                                            |
| [`GetValidOptionsForModuleProperty`](#generated.RASolidMaterial.GetValidOptionsForModuleProperty)(property_name) | Get all valid options only for properties that have a list of possible options. |
| [`GetYoungsModulus`](#generated.RASolidMaterial.GetYoungsModulus)([unit])                                        | Get the value of "Youngs Modulus".                                              |
| [`SetBulkDensity`](#generated.RASolidMaterial.SetBulkDensity)(value[, unit])                                     | Set the value of "Bulk Density".                                                |
| [`SetCurrentDensity`](#generated.RASolidMaterial.SetCurrentDensity)(value[, unit])                               | Set the value of "Current Density".                                             |
| [`SetDensity`](#generated.RASolidMaterial.SetDensity)(value[, unit])                                             | Set the value of "Density".                                                     |
| [`SetModuleProperty`](#generated.RASolidMaterial.SetModuleProperty)(property_name, value[, unit])                | Set the value of a module property.                                             |
| [`SetPoissonRatio`](#generated.RASolidMaterial.SetPoissonRatio)(value[, unit])                                   | Set the value of "Poisson Ratio".                                               |
| [`SetSpecificHeat`](#generated.RASolidMaterial.SetSpecificHeat)(value[, unit])                                   | Set the value of "Specific Heat".                                               |
| [`SetThermalConductivity`](#generated.RASolidMaterial.SetThermalConductivity)(value[, unit])                     | Set the value of "Thermal Conductivity".                                        |
| [`SetUseBulkDensity`](#generated.RASolidMaterial.SetUseBulkDensity)(value)                                       | Set the value of "Use Bulk Density".                                            |
| [`SetYoungsModulus`](#generated.RASolidMaterial.SetYoungsModulus)(value[, unit])                                 | Set the value of "Youngs Modulus".                                              |

#### GetBulkDensity(unit: Optional[str] = None)

Get the value of “Bulk Density”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “kg/m3”.

#### GetCurrentDensity(unit: Optional[str] = None)

Get the value of “Current Density”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “kg/m3”.

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

#### GetPoissonRatio(unit: Optional[str] = None)

Get the value of “Poisson Ratio”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

#### GetSpecificHeat(unit: Optional[str] = None)

Get the value of “Specific Heat”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “J/kg.K”.

#### GetThermalConductivity(unit: Optional[str] = None)

Get the value of “Thermal Conductivity”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “W/m.K”.

#### GetUseBulkDensity()

Get the value of “Use Bulk Density”.

#### GetValidOptionsForModuleProperty(property_name)

Get all valid options only for properties that have a list of possible options.

* **Parameters:**
  **property_name** (*str*) – The name of the module property.
* **Return type:**
  List[str]

#### GetYoungsModulus(unit: Optional[str] = None)

Get the value of “Youngs Modulus”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “N/m2”.

#### SetBulkDensity(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Bulk Density”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “kg/m3”.

#### SetCurrentDensity(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Current Density”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “kg/m3”.

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

#### SetPoissonRatio(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Poisson Ratio”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

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

#### SetUseBulkDensity(value: bool)

Set the value of “Use Bulk Density”.

* **Parameters:**
  **value** – The value to set.

#### SetYoungsModulus(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Youngs Modulus”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “N/m2”.
