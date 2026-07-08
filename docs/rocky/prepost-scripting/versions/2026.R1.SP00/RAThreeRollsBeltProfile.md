

# RAThreeRollsBeltProfile

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAThreeRollsBeltProfile"></a>

### *class* RAThreeRollsBeltProfile

Rocky API for a Three Rolls Belt Profile model.

**Methods:**

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`DisableUse0371RatioForRollLengths`](#generated.RAThreeRollsBeltProfile.DisableUse0371RatioForRollLengths)()     | Set the value of "Use 0371 Ratio For Roll Lengths" to False.   |
| [`EnableUse0371RatioForRollLengths`](#generated.RAThreeRollsBeltProfile.EnableUse0371RatioForRollLengths)()       | Set the value of "Use 0371 Ratio For Roll Lengths" to True.    |
| [`GetAvailableMaterials`](#generated.RAThreeRollsBeltProfile.GetAvailableMaterials)()                             | Get all available Materials.                                   |
| [`GetCenterRollLength`](#generated.RAThreeRollsBeltProfile.GetCenterRollLength)([unit])                           | Get the value of "Center Roll Length".                         |
| [`GetLowerCornerRadius`](#generated.RAThreeRollsBeltProfile.GetLowerCornerRadius)([unit])                         | Get the value of "Lower Corner Radius".                        |
| [`GetMaterial`](#generated.RAThreeRollsBeltProfile.GetMaterial)()                                                 | Get the "Material".                                            |
| [`GetTroughingAngle`](#generated.RAThreeRollsBeltProfile.GetTroughingAngle)([unit])                               | Get the value of "Troughing Angle".                            |
| [`GetUse0371RatioForRollLengths`](#generated.RAThreeRollsBeltProfile.GetUse0371RatioForRollLengths)()             | Get the value of "Use 0371 Ratio For Roll Lengths".            |
| [`IsUse0371RatioForRollLengthsEnabled`](#generated.RAThreeRollsBeltProfile.IsUse0371RatioForRollLengthsEnabled)() | Check if the "Use 0371 Ratio For Roll Lengths" is enabled.     |
| [`SetCenterRollLength`](#generated.RAThreeRollsBeltProfile.SetCenterRollLength)(value[, unit])                    | Set the value of "Center Roll Length".                         |
| [`SetLowerCornerRadius`](#generated.RAThreeRollsBeltProfile.SetLowerCornerRadius)(value[, unit])                  | Set the value of "Lower Corner Radius".                        |
| [`SetMaterial`](#generated.RAThreeRollsBeltProfile.SetMaterial)(value)                                            | Set the "Material".                                            |
| [`SetTroughingAngle`](#generated.RAThreeRollsBeltProfile.SetTroughingAngle)(value[, unit])                        | Set the value of "Troughing Angle".                            |
| [`SetUse0371RatioForRollLengths`](#generated.RAThreeRollsBeltProfile.SetUse0371RatioForRollLengths)(value)        | Set the value of "Use 0371 Ratio For Roll Lengths".            |

<a id="generated.RAThreeRollsBeltProfile.DisableUse0371RatioForRollLengths"></a>

#### DisableUse0371RatioForRollLengths()

Set the value of “Use 0371 Ratio For Roll Lengths” to False.

<a id="generated.RAThreeRollsBeltProfile.EnableUse0371RatioForRollLengths"></a>

#### EnableUse0371RatioForRollLengths()

Set the value of “Use 0371 Ratio For Roll Lengths” to True.

<a id="generated.RAThreeRollsBeltProfile.GetAvailableMaterials"></a>

#### GetAvailableMaterials()

Get all available Materials.

* **Return type:**
  List[[`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)]
  A list of [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial).

<a id="generated.RAThreeRollsBeltProfile.GetCenterRollLength"></a>

#### GetCenterRollLength(unit: str | None = None)

Get the value of “Center Roll Length”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RAThreeRollsBeltProfile.GetLowerCornerRadius"></a>

#### GetLowerCornerRadius(unit: str | None = None)

Get the value of “Lower Corner Radius”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RAThreeRollsBeltProfile.GetMaterial"></a>

#### GetMaterial()

Get the “Material”.

* **Return type:**
  [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)

<a id="generated.RAThreeRollsBeltProfile.GetTroughingAngle"></a>

#### GetTroughingAngle(unit: str | None = None)

Get the value of “Troughing Angle”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “dega”.

<a id="generated.RAThreeRollsBeltProfile.GetUse0371RatioForRollLengths"></a>

#### GetUse0371RatioForRollLengths()

Get the value of “Use 0371 Ratio For Roll Lengths”.

<a id="generated.RAThreeRollsBeltProfile.IsUse0371RatioForRollLengthsEnabled"></a>

#### IsUse0371RatioForRollLengthsEnabled()

Check if the “Use 0371 Ratio For Roll Lengths” is enabled.

<a id="generated.RAThreeRollsBeltProfile.SetCenterRollLength"></a>

#### SetCenterRollLength(value: str | float, unit: str | None = None)

Set the value of “Center Roll Length”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RAThreeRollsBeltProfile.SetLowerCornerRadius"></a>

#### SetLowerCornerRadius(value: str | float, unit: str | None = None)

Set the value of “Lower Corner Radius”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RAThreeRollsBeltProfile.SetMaterial"></a>

#### SetMaterial(value)

Set the “Material”.

:param unicode, [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial) value:
: Either the API object wrapping the desired entity or its name.

<a id="generated.RAThreeRollsBeltProfile.SetTroughingAngle"></a>

#### SetTroughingAngle(value: str | float, unit: str | None = None)

Set the value of “Troughing Angle”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “dega”.

<a id="generated.RAThreeRollsBeltProfile.SetUse0371RatioForRollLengths"></a>

#### SetUse0371RatioForRollLengths(value: bool)

Set the value of “Use 0371 Ratio For Roll Lengths”.

* **Parameters:**
  **value** – The value to set.
