# RAMaterialsInteraction

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAMaterialsInteraction"></a>

### *class* RAMaterialsInteraction

Rocky PrePost Scripting wrapper for the interaction between two materials.

Retrieve a [`RAMaterialsInteraction`](#generated.RAMaterialsInteraction) from a [`RAMaterialsInteractionCollection`](RAMaterialsInteractionCollection.md#generated.RAMaterialsInteractionCollection) and
two [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial):

```python
material_1 = study.GetElement('Default Particles')
material_2 = study.GetElement('Default Boundaries')
interaction_collection = RAMaterialCollection.GetMaterialsInteractionCollection()
interaction = interaction_collection.GetMaterialsInteraction(material_1, material_2)
```

Note that the materials to which a [`RAMaterialsInteraction`](#generated.RAMaterialsInteraction) refers are fixed - while they
can be retrieved with [`GetFirstMaterial()`](#generated.RAMaterialsInteraction.GetFirstMaterial) and [`GetSecondMaterial()`](#generated.RAMaterialsInteraction.GetSecondMaterial), they can’t
be set.

**Methods:**

| [`GetAdhesiveDistance`](#generated.RAMaterialsInteraction.GetAdhesiveDistance)([unit])                                  | Get the value of "Adhesive Distance".                                           |
|-------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`GetAdhesiveFraction`](#generated.RAMaterialsInteraction.GetAdhesiveFraction)([unit])                                  | Get the value of "Adhesive Fraction".                                           |
| [`GetContactStiffnessMultiplier`](#generated.RAMaterialsInteraction.GetContactStiffnessMultiplier)([unit])              | Get the value of "Contact Stiffness Multiplier".                                |
| [`GetDynamicFriction`](#generated.RAMaterialsInteraction.GetDynamicFriction)([unit])                                    | Get the value of "Dynamic Friction".                                            |
| [`GetFirstMaterial`](#generated.RAMaterialsInteraction.GetFirstMaterial)()                                              | Get this interaction's first material.                                          |
| [`GetModuleProperties`](#generated.RAMaterialsInteraction.GetModuleProperties)()                                        | Get the names of the module properties.                                         |
| [`GetModuleProperty`](#generated.RAMaterialsInteraction.GetModuleProperty)(property_name[, unit])                       | Get the value of a module property.                                             |
| [`GetRestitutionCoefficient`](#generated.RAMaterialsInteraction.GetRestitutionCoefficient)([unit])                      | Get the value of "Restitution Coefficient".                                     |
| [`GetSecondMaterial`](#generated.RAMaterialsInteraction.GetSecondMaterial)()                                            | Get this interaction's second material.                                         |
| [`GetStaticFriction`](#generated.RAMaterialsInteraction.GetStaticFriction)([unit])                                      | Get the value of "Static Friction".                                             |
| [`GetSurfaceEnergy`](#generated.RAMaterialsInteraction.GetSurfaceEnergy)([unit])                                        | Get the value of "Surface Energy".                                              |
| [`GetTangentialStiffnessRatio`](#generated.RAMaterialsInteraction.GetTangentialStiffnessRatio)([unit])                  | Get the value of "Tangential Stiffness Ratio".                                  |
| [`GetValidOptionsForModuleProperty`](#generated.RAMaterialsInteraction.GetValidOptionsForModuleProperty)(property_name) | Get all valid options only for properties that have a list of possible options. |
| [`GetVelocityExponent`](#generated.RAMaterialsInteraction.GetVelocityExponent)([unit])                                  | Get the value of "Velocity Exponent".                                           |
| [`GetVelocityLimit`](#generated.RAMaterialsInteraction.GetVelocityLimit)([unit])                                        | Get the value of "Velocity Limit".                                              |
| [`SetAdhesiveDistance`](#generated.RAMaterialsInteraction.SetAdhesiveDistance)(value[, unit])                           | Set the value of "Adhesive Distance".                                           |
| [`SetAdhesiveFraction`](#generated.RAMaterialsInteraction.SetAdhesiveFraction)(value[, unit])                           | Set the value of "Adhesive Fraction".                                           |
| [`SetContactStiffnessMultiplier`](#generated.RAMaterialsInteraction.SetContactStiffnessMultiplier)(value[, unit])       | Set the value of "Contact Stiffness Multiplier".                                |
| [`SetDynamicFriction`](#generated.RAMaterialsInteraction.SetDynamicFriction)(value[, unit])                             | Set the value of "Dynamic Friction".                                            |
| [`SetModuleProperty`](#generated.RAMaterialsInteraction.SetModuleProperty)(property_name, value[, unit])                | Set the value of a module property.                                             |
| [`SetRestitutionCoefficient`](#generated.RAMaterialsInteraction.SetRestitutionCoefficient)(value[, unit])               | Set the value of "Restitution Coefficient".                                     |
| [`SetStaticFriction`](#generated.RAMaterialsInteraction.SetStaticFriction)(value[, unit])                               | Set the value of "Static Friction".                                             |
| [`SetSurfaceEnergy`](#generated.RAMaterialsInteraction.SetSurfaceEnergy)(value[, unit])                                 | Set the value of "Surface Energy".                                              |
| [`SetTangentialStiffnessRatio`](#generated.RAMaterialsInteraction.SetTangentialStiffnessRatio)(value[, unit])           | Set the value of "Tangential Stiffness Ratio".                                  |
| [`SetVelocityExponent`](#generated.RAMaterialsInteraction.SetVelocityExponent)(value[, unit])                           | Set the value of "Velocity Exponent".                                           |
| [`SetVelocityLimit`](#generated.RAMaterialsInteraction.SetVelocityLimit)(value[, unit])                                 | Set the value of "Velocity Limit".                                              |

<a id="generated.RAMaterialsInteraction.GetAdhesiveDistance"></a>

#### GetAdhesiveDistance(unit: Optional[str] = None)

Get the value of “Adhesive Distance”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RAMaterialsInteraction.GetAdhesiveFraction"></a>

#### GetAdhesiveFraction(unit: Optional[str] = None)

Get the value of “Adhesive Fraction”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAMaterialsInteraction.GetContactStiffnessMultiplier"></a>

#### GetContactStiffnessMultiplier(unit: Optional[str] = None)

Get the value of “Contact Stiffness Multiplier”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAMaterialsInteraction.GetDynamicFriction"></a>

#### GetDynamicFriction(unit: Optional[str] = None)

Get the value of “Dynamic Friction”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAMaterialsInteraction.GetFirstMaterial"></a>

#### GetFirstMaterial()

Get this interaction’s first material.

<a id="generated.RAMaterialsInteraction.GetModuleProperties"></a>

#### GetModuleProperties()

Get the names of the module properties.

* **Return type:**
  tuple(ModulePropertyIdentifier)

<a id="generated.RAMaterialsInteraction.GetModuleProperty"></a>

#### GetModuleProperty(property_name: str | rocky30.plugins.api.ra_addins.ModulePropertyIdentifier, unit: str | None = None)

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

<a id="generated.RAMaterialsInteraction.GetRestitutionCoefficient"></a>

#### GetRestitutionCoefficient(unit: Optional[str] = None)

Get the value of “Restitution Coefficient”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAMaterialsInteraction.GetSecondMaterial"></a>

#### GetSecondMaterial()

Get this interaction’s second material.

<a id="generated.RAMaterialsInteraction.GetStaticFriction"></a>

#### GetStaticFriction(unit: Optional[str] = None)

Get the value of “Static Friction”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAMaterialsInteraction.GetSurfaceEnergy"></a>

#### GetSurfaceEnergy(unit: Optional[str] = None)

Get the value of “Surface Energy”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “J/m2”.

<a id="generated.RAMaterialsInteraction.GetTangentialStiffnessRatio"></a>

#### GetTangentialStiffnessRatio(unit: Optional[str] = None)

Get the value of “Tangential Stiffness Ratio”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAMaterialsInteraction.GetValidOptionsForModuleProperty"></a>

#### GetValidOptionsForModuleProperty(property_name)

Get all valid options only for properties that have a list of possible options.

* **Parameters:**
  **property_name** (*str*) – The name of the module property.
* **Return type:**
  List[str]

<a id="generated.RAMaterialsInteraction.GetVelocityExponent"></a>

#### GetVelocityExponent(unit: Optional[str] = None)

Get the value of “Velocity Exponent”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “-“.

<a id="generated.RAMaterialsInteraction.GetVelocityLimit"></a>

#### GetVelocityLimit(unit: Optional[str] = None)

Get the value of “Velocity Limit”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m/s”.

<a id="generated.RAMaterialsInteraction.SetAdhesiveDistance"></a>

#### SetAdhesiveDistance(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Adhesive Distance”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RAMaterialsInteraction.SetAdhesiveFraction"></a>

#### SetAdhesiveFraction(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Adhesive Fraction”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAMaterialsInteraction.SetContactStiffnessMultiplier"></a>

#### SetContactStiffnessMultiplier(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Contact Stiffness Multiplier”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAMaterialsInteraction.SetDynamicFriction"></a>

#### SetDynamicFriction(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Dynamic Friction”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAMaterialsInteraction.SetModuleProperty"></a>

#### SetModuleProperty(property_name: str | rocky30.plugins.api.ra_addins.ModulePropertyIdentifier, value: float | bool | str, unit: Optional[str] = None)

Set the value of a module property.

* **Parameters:**
  * **property_name** (*Union* *[**str* *,* *ModulePropertyIdentifier* *]*) – The name of the module property to set.
  * **value** (*float* *,* *bool* *or* *str*) – The value to set.
    If the property_name references to an enum property then value must be an str value.
  * **unit** (*str*) – The unit for value, just for scalar properties. If no unit is provided,
    value is assumed to be the unit was set before.

<a id="generated.RAMaterialsInteraction.SetRestitutionCoefficient"></a>

#### SetRestitutionCoefficient(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Restitution Coefficient”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAMaterialsInteraction.SetStaticFriction"></a>

#### SetStaticFriction(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Static Friction”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAMaterialsInteraction.SetSurfaceEnergy"></a>

#### SetSurfaceEnergy(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Surface Energy”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “J/m2”.

<a id="generated.RAMaterialsInteraction.SetTangentialStiffnessRatio"></a>

#### SetTangentialStiffnessRatio(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Tangential Stiffness Ratio”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAMaterialsInteraction.SetVelocityExponent"></a>

#### SetVelocityExponent(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Velocity Exponent”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “-“.

<a id="generated.RAMaterialsInteraction.SetVelocityLimit"></a>

#### SetVelocityLimit(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Velocity Limit”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m/s”.
