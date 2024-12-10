# RAOneRollBeltProfile

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAOneRollBeltProfile"></a>

### *class* RAOneRollBeltProfile

Rocky API for a One Roll Belt Profile model.

**Methods:**

| [`GetAvailableMaterials`](#generated.RAOneRollBeltProfile.GetAvailableMaterials)()   | Get all available Materials.   |
|--------------------------------------------------------------------------------------|--------------------------------|
| [`GetMaterial`](#generated.RAOneRollBeltProfile.GetMaterial)()                       | Get the "Material".            |
| [`SetMaterial`](#generated.RAOneRollBeltProfile.SetMaterial)(value)                  | Set the "Material".            |

<a id="generated.RAOneRollBeltProfile.GetAvailableMaterials"></a>

#### GetAvailableMaterials()

Get all available Materials.

* **Return type:**
  List[[`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)]
  A list of [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial).

<a id="generated.RAOneRollBeltProfile.GetMaterial"></a>

#### GetMaterial()

Get the “Material”.

* **Return type:**
  [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial)

<a id="generated.RAOneRollBeltProfile.SetMaterial"></a>

#### SetMaterial(value)

Set the “Material”.

:param unicode, [`RASolidMaterial`](RASolidMaterial.md#generated.RASolidMaterial) value:
: Either the API object wrapping the desired entity or its name.
