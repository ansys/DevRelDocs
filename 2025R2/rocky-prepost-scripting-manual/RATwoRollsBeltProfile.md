

# RATwoRollsBeltProfile

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RATwoRollsBeltProfile"></a>

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

<a id="generated.RATwoRollsBeltProfile.GetAvailableMaterials"></a>

#### GetAvailableMaterials()

Get all available Materials.

* **Return type:**
  List[[`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)]
  A list of [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial).

<a id="generated.RATwoRollsBeltProfile.GetLowerCornerRadius"></a>

#### GetLowerCornerRadius(unit: str | None = None)

Get the value of “Lower Corner Radius”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “m”.

<a id="generated.RATwoRollsBeltProfile.GetMaterial"></a>

#### GetMaterial()

Get the “Material”.

* **Return type:**
  [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)

<a id="generated.RATwoRollsBeltProfile.GetTroughingAngle"></a>

#### GetTroughingAngle(unit: str | None = None)

Get the value of “Troughing Angle”.

* **Parameters:**
  **unit** – The unit for the returned value. If no unit is provided, the returned value will be in “dega”.

<a id="generated.RATwoRollsBeltProfile.SetLowerCornerRadius"></a>

#### SetLowerCornerRadius(value: str | float, unit: str | None = None)

Set the value of “Lower Corner Radius”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “m”.

<a id="generated.RATwoRollsBeltProfile.SetMaterial"></a>

#### SetMaterial(value)

Set the “Material”.

:param unicode, [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial) value:
: Either the API object wrapping the desired entity or its name.

<a id="generated.RATwoRollsBeltProfile.SetTroughingAngle"></a>

#### SetTroughingAngle(value: str | float, unit: str | None = None)

Set the value of “Troughing Angle”.

* **Parameters:**
  * **value** – The value to set. This value can be an expression with input variables or float type.
  * **unit** – The unit for value. If no unit is provided, value is assumed to be in “dega”.
