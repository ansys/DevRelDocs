# RATwoRollsBeltProfile

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RATwoRollsBeltProfile

Rocky API for a Two Rolls Belt Profile model.

**Methods:**

| [`GetAvailableMaterials`](#generated.RATwoRollsBeltProfile.GetAvailableMaterials)()            | Get all available Materials.            |
|------------------------------------------------------------------------------------------------|-----------------------------------------|
| [`GetLowerCornerRadius`](#generated.RATwoRollsBeltProfile.GetLowerCornerRadius)([unit])        | Get the value of "Lower Corner Radius". |
| [`GetMaterial`](#generated.RATwoRollsBeltProfile.GetMaterial)()                                | Get the "Material".                     |
| [`GetTroughingAngle`](#generated.RATwoRollsBeltProfile.GetTroughingAngle)([unit])              | Get the value of "Troughing Angle".     |
| [`SetLowerCornerRadius`](#generated.RATwoRollsBeltProfile.SetLowerCornerRadius)(value[, unit]) | Set the value of "Lower Corner Radius". |
| [`SetMaterial`](#generated.RATwoRollsBeltProfile.SetMaterial)(value)                           | Set the "Material".                     |
| [`SetTroughingAngle`](#generated.RATwoRollsBeltProfile.SetTroughingAngle)(value[, unit])       | Set the value of "Troughing Angle".     |

#### GetAvailableMaterials()

Get all available Materials.

* **Return type:**
  List[[`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)]
  A list of [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial).

#### GetLowerCornerRadius(unit: Optional[str] = None)

Get the value of “Lower Corner Radius”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

#### GetMaterial()

Get the “Material”.

* **Return type:**
  [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)

#### GetTroughingAngle(unit: Optional[str] = None)

Get the value of “Troughing Angle”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “dega”.

#### SetLowerCornerRadius(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Lower Corner Radius”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

#### SetMaterial(value)

Set the “Material”.

:param unicode, [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial) value:
: Either the API object wrapping the desired entity or its name.

#### SetTroughingAngle(value: Union[str, float], unit: Optional[str] = None)

Set the value of “Troughing Angle”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “dega”.
