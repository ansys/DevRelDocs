# RACalculations

<!-- Make "generated" the current module for all API classes so that we can cross-reference them
without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (API classes generally aren't
instantiated by the user). -->

### *class* RACalculations

Rocky api for particles calculations

**Methods:**

| [`CreateDivisionsTagging`](#generated.RACalculations.CreateDivisionsTagging)(selection)             | Create a Divisions Tagging calculator for the given particle-based selection process.   |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`CreateSelectionFlipCount`](#generated.RACalculations.CreateSelectionFlipCount)(selection)         | Create a flip count grid function for the given selection process                       |
| [`CreateSelectionResidenceTime`](#generated.RACalculations.CreateSelectionResidenceTime)(selection) | Create a residence time grid function for the given selection process                   |
| [`CreateSelectionTagging`](#generated.RACalculations.CreateSelectionTagging)(selection)             | Deprecated: Use [`CreateTagging()`](#generated.RACalculations.CreateTagging) instead.   |
| [`CreateTagging`](#generated.RACalculations.CreateTagging)(selection)                               | Create a Tagging calculator for the given particle-based selection process.             |
| [`GetDivisionsTagging`](#generated.RACalculations.GetDivisionsTagging)(name)                        | Get the Divisions Tagging calculator with the given name.                               |
| [`GetDivisionsTaggingNames`](#generated.RACalculations.GetDivisionsTaggingNames)()                  | Get a list of the names of all Divisions Taggings in Particles Calculations.            |
| [`GetTagging`](#generated.RACalculations.GetTagging)(name)                                          | Get the Tagging calculator with the given name.                                         |
| [`GetTaggingNames`](#generated.RACalculations.GetTaggingNames)()                                    | Get a list of the names of all Taggings in Particles Calculations.                      |

#### CreateDivisionsTagging(selection: RAGridProcessElementItem)

Create a Divisions Tagging calculator for the given particle-based selection process.

* **Parameters:**
  **selection** – Must be a particle selection type.

#### CreateSelectionFlipCount(selection: RAGridProcessElementItem)

Create a flip count grid function for the given selection process

#### CreateSelectionResidenceTime(selection: RAGridProcessElementItem)

Create a residence time grid function for the given selection process

#### CreateSelectionTagging(selection: RAGridProcessElementItem)

Deprecated: Use [`CreateTagging()`](#generated.RACalculations.CreateTagging) instead.

#### CreateTagging(selection: RAGridProcessElementItem)

Create a Tagging calculator for the given particle-based selection process.

* **Parameters:**
  **selection** – Must be a particle selection type.

#### GetDivisionsTagging(name: str)

Get the Divisions Tagging calculator with the given name.

#### GetDivisionsTaggingNames()

Get a list of the names of all Divisions Taggings in Particles Calculations.

#### GetTagging(name: str)

Get the Tagging calculator with the given name.

#### GetTaggingNames()

Get a list of the names of all Taggings in Particles Calculations.
