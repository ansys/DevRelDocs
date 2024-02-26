# RAFiveRollsBeltProfile

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAFiveRollsBeltProfile

Rocky API for a Five Rolls Belt Profile model.

**Methods:**

| [`DisableUse0223RatioForRollLengths`](#generated.RAFiveRollsBeltProfile.DisableUse0223RatioForRollLengths)()     | Set the value of "Use 0223 Ratio For Roll Lengths" to False.   |
|------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`EnableUse0223RatioForRollLengths`](#generated.RAFiveRollsBeltProfile.EnableUse0223RatioForRollLengths)()       | Set the value of "Use 0223 Ratio For Roll Lengths" to True.    |
| [`GetAvailableMaterials`](#generated.RAFiveRollsBeltProfile.GetAvailableMaterials)()                             | Get all available Materials.                                   |
| [`GetCenterRollLength`](#generated.RAFiveRollsBeltProfile.GetCenterRollLength)([unit])                           | Get the value of "Center Roll Length".                         |
| [`GetLastRollAngle`](#generated.RAFiveRollsBeltProfile.GetLastRollAngle)([unit])                                 | Get the value of "Last Roll Angle".                            |
| [`GetLowerCornerRadius`](#generated.RAFiveRollsBeltProfile.GetLowerCornerRadius)([unit])                         | Get the value of "Lower Corner Radius".                        |
| [`GetMaterial`](#generated.RAFiveRollsBeltProfile.GetMaterial)()                                                 | Get the "Material".                                            |
| [`GetSideRollLength`](#generated.RAFiveRollsBeltProfile.GetSideRollLength)([unit])                               | Get the value of "Side Roll Length".                           |
| [`GetTroughingAngle`](#generated.RAFiveRollsBeltProfile.GetTroughingAngle)([unit])                               | Get the value of "Troughing Angle".                            |
| [`GetUpperCornerRadius`](#generated.RAFiveRollsBeltProfile.GetUpperCornerRadius)([unit])                         | Get the value of "Upper Corner Radius".                        |
| [`GetUse0223RatioForRollLengths`](#generated.RAFiveRollsBeltProfile.GetUse0223RatioForRollLengths)()             | Get the value of "Use 0223 Ratio For Roll Lengths".            |
| [`IsUse0223RatioForRollLengthsEnabled`](#generated.RAFiveRollsBeltProfile.IsUse0223RatioForRollLengthsEnabled)() | Check if the "Use 0223 Ratio For Roll Lengths" is enabled.     |
| [`SetCenterRollLength`](#generated.RAFiveRollsBeltProfile.SetCenterRollLength)(value[, unit])                    | Set the value of "Center Roll Length".                         |
| [`SetLastRollAngle`](#generated.RAFiveRollsBeltProfile.SetLastRollAngle)(value[, unit])                          | Set the value of "Last Roll Angle".                            |
| [`SetLowerCornerRadius`](#generated.RAFiveRollsBeltProfile.SetLowerCornerRadius)(value[, unit])                  | Set the value of "Lower Corner Radius".                        |
| [`SetMaterial`](#generated.RAFiveRollsBeltProfile.SetMaterial)(value)                                            | Set the "Material".                                            |
| [`SetSideRollLength`](#generated.RAFiveRollsBeltProfile.SetSideRollLength)(value[, unit])                        | Set the value of "Side Roll Length".                           |
| [`SetTroughingAngle`](#generated.RAFiveRollsBeltProfile.SetTroughingAngle)(value[, unit])                        | Set the value of "Troughing Angle".                            |
| [`SetUpperCornerRadius`](#generated.RAFiveRollsBeltProfile.SetUpperCornerRadius)(value[, unit])                  | Set the value of "Upper Corner Radius".                        |
| [`SetUse0223RatioForRollLengths`](#generated.RAFiveRollsBeltProfile.SetUse0223RatioForRollLengths)(value)        | Set the value of "Use 0223 Ratio For Roll Lengths".            |

#### DisableUse0223RatioForRollLengths()

Set the value of “Use 0223 Ratio For Roll Lengths” to False.

#### EnableUse0223RatioForRollLengths()

Set the value of “Use 0223 Ratio For Roll Lengths” to True.

#### GetAvailableMaterials()

Get all available Materials.

* **Return type:**
  List[[`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)]
  A list of [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial).

#### GetCenterRollLength(unit: Optional[str] = None)

Get the value of “Center Roll Length”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetLastRollAngle(unit: Optional[str] = None)

Get the value of “Last Roll Angle”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “rad”.

#### GetLowerCornerRadius(unit: Optional[str] = None)

Get the value of “Lower Corner Radius”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetMaterial()

Get the “Material”.

* **Return type:**
  [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)

#### GetSideRollLength(unit: Optional[str] = None)

Get the value of “Side Roll Length”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetTroughingAngle(unit: Optional[str] = None)

Get the value of “Troughing Angle”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “dega”.

#### GetUpperCornerRadius(unit: Optional[str] = None)

Get the value of “Upper Corner Radius”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetUse0223RatioForRollLengths()

Get the value of “Use 0223 Ratio For Roll Lengths”.

#### IsUse0223RatioForRollLengthsEnabled()

Check if the “Use 0223 Ratio For Roll Lengths” is enabled.

#### SetCenterRollLength(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Center Roll Length”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetLastRollAngle(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Last Roll Angle”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “rad”.

#### SetLowerCornerRadius(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Lower Corner Radius”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetMaterial(value)

Set the “Material”.

:param unicode, [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial) value:
: Either the API object wrapping the desired entity or its name.

#### SetSideRollLength(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Side Roll Length”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetTroughingAngle(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Troughing Angle”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “dega”.

#### SetUpperCornerRadius(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Upper Corner Radius”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetUse0223RatioForRollLengths(value: bool)

Set the value of “Use 0223 Ratio For Roll Lengths”.

* **Parameters:**
  **value** – The value to set.
