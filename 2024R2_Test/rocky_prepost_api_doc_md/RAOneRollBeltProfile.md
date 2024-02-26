# RAOneRollBeltProfile

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RAOneRollBeltProfile

Rocky API for a One Roll Belt Profile model.

**Methods:**

| [`GetAvailableMaterials`](#generated.RAOneRollBeltProfile.GetAvailableMaterials)()   | Get all available Materials.   |
|--------------------------------------------------------------------------------------|--------------------------------|
| [`GetMaterial`](#generated.RAOneRollBeltProfile.GetMaterial)()                       | Get the "Material".            |
| [`SetMaterial`](#generated.RAOneRollBeltProfile.SetMaterial)(value)                  | Set the "Material".            |

#### GetAvailableMaterials()

Get all available Materials.

* **Return type:**
  List[[`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)]
  A list of [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial).

#### GetMaterial()

Get the “Material”.

* **Return type:**
  [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)

#### SetMaterial(value)

Set the “Material”.

:param unicode, [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial) value:
: Either the API object wrapping the desired entity or its name.
