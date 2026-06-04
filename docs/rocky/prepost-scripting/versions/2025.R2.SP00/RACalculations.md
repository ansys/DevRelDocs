

# RACalculations

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RACalculations"></a>

### *class* RACalculations

Rocky api for particles calculations

**Methods:**

| Name | Description |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`CreateDivisionsTagging`](#generated.RACalculations.CreateDivisionsTagging)(selection)             | Create a Divisions Tagging calculator for the given particle-based selection process.   |
| [`CreateSelectionFlipCount`](#generated.RACalculations.CreateSelectionFlipCount)(selection)         | Create a flip count grid function for the given selection process                       |
| [`CreateSelectionResidenceTime`](#generated.RACalculations.CreateSelectionResidenceTime)(selection) | Create a residence time grid function for the given selection process                   |
| [`CreateSelectionTagging`](#generated.RACalculations.CreateSelectionTagging)(selection)             | Deprecated: Use [`CreateTagging()`](#generated.RACalculations.CreateTagging) instead.   |
| [`CreateTagging`](#generated.RACalculations.CreateTagging)(selection)                               | Create a Tagging calculator for the given particle-based selection process.             |
| [`GetDivisionsTagging`](#generated.RACalculations.GetDivisionsTagging)(name)                        | Get the Divisions Tagging calculator with the given name.                               |
| [`GetDivisionsTaggingNames`](#generated.RACalculations.GetDivisionsTaggingNames)()                  | Get a list of the names of all Divisions Taggings in Particles Calculations.            |
| [`GetTagging`](#generated.RACalculations.GetTagging)(name)                                          | Get the Tagging calculator with the given name.                                         |
| [`GetTaggingNames`](#generated.RACalculations.GetTaggingNames)()                                    | Get a list of the names of all Taggings in Particles Calculations.                      |

<a id="generated.RACalculations.CreateDivisionsTagging"></a>

#### CreateDivisionsTagging(selection: RAGridProcessElementItem)

Create a Divisions Tagging calculator for the given particle-based selection process.

* **Parameters:**
  **selection** – Must be a particle selection type.

<a id="generated.RACalculations.CreateSelectionFlipCount"></a>

#### CreateSelectionFlipCount(selection: RAGridProcessElementItem)

Create a flip count grid function for the given selection process

<a id="generated.RACalculations.CreateSelectionResidenceTime"></a>

#### CreateSelectionResidenceTime(selection: RAGridProcessElementItem | str)

Create a residence time grid function for the given selection process

<a id="generated.RACalculations.CreateSelectionTagging"></a>

#### CreateSelectionTagging(selection: RAGridProcessElementItem)

Deprecated: Use [`CreateTagging()`](#generated.RACalculations.CreateTagging) instead.

<a id="generated.RACalculations.CreateTagging"></a>

#### CreateTagging(selection: RAGridProcessElementItem)

Create a Tagging calculator for the given particle-based selection process.

* **Parameters:**
  **selection** – Must be a particle selection type.

<a id="generated.RACalculations.GetDivisionsTagging"></a>

#### GetDivisionsTagging(name: str)

Get the Divisions Tagging calculator with the given name.

<a id="generated.RACalculations.GetDivisionsTaggingNames"></a>

#### GetDivisionsTaggingNames()

Get a list of the names of all Divisions Taggings in Particles Calculations.

<a id="generated.RACalculations.GetTagging"></a>

#### GetTagging(name: str)

Get the Tagging calculator with the given name.

<a id="generated.RACalculations.GetTaggingNames"></a>

#### GetTaggingNames()

Get a list of the names of all Taggings in Particles Calculations.
