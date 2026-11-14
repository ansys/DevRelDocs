

# RASphAdaptiveSizing

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RASphAdaptiveSizing"></a>

### *class* RASphAdaptiveSizing

Rocky PrePost Scripting wrapper for the SPH Adaptive Sizing.

```python
sph_settings = study.GetSphSettings()
sph_adaptive_sizing = sph_settings.GetAdaptiveSizing()
```

**Methods:**

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`Disable`](#generated.RASphAdaptiveSizing.Disable)()                                                                  | Set the value of "" to False.                             |
| [`Enable`](#generated.RASphAdaptiveSizing.Enable)()                                                                    | Set the value of "" to True.                              |
| [`GetAvailableGeometries`](#generated.RASphAdaptiveSizing.GetAvailableGeometries)()                                    | Get all available Adaptive Sph Sizing Geometries.         |
| [`GetEnabled`](#generated.RASphAdaptiveSizing.GetEnabled)()                                                            | Get the value of "Enabled".                               |
| [`GetGeometries`](#generated.RASphAdaptiveSizing.GetGeometries)()                                                      | Get the "Adaptive Sph Sizing Geometries".                 |
| [`GetGeometriesLevelOfRefinement`](#generated.RASphAdaptiveSizing.GetGeometriesLevelOfRefinement)()                    | Get the value of "Geometries Level of Refinement".        |
| [`GetGeometriesRefinementDistanceFactor`](#generated.RASphAdaptiveSizing.GetGeometriesRefinementDistanceFactor)()      | Get the value of "Geometries Refinement Distance Factor". |
| [`GetRoiRefinementLevels`](#generated.RASphAdaptiveSizing.GetRoiRefinementLevels)()                                    | Get the Adaptive SPH Sizing ROI refinement levels table.  |
| [`IsEnabled`](#generated.RASphAdaptiveSizing.IsEnabled)()                                                              | Check if the "" is enabled.                               |
| [`SetEnabled`](#generated.RASphAdaptiveSizing.SetEnabled)(value)                                                       | Set the value of "Enabled".                               |
| [`SetGeometries`](#generated.RASphAdaptiveSizing.SetGeometries)(values)                                                | Set the "Adaptive Sph Sizing Geometries".                 |
| [`SetGeometriesLevelOfRefinement`](#generated.RASphAdaptiveSizing.SetGeometriesLevelOfRefinement)(value)               | Set the value of "Geometries Level of Refinement".        |
| [`SetGeometriesRefinementDistanceFactor`](#generated.RASphAdaptiveSizing.SetGeometriesRefinementDistanceFactor)(value) | Set the value of "Geometries Refinement Distance Factor". |

<a id="generated.RASphAdaptiveSizing.Disable"></a>

#### Disable()

Set the value of “” to False.

<a id="generated.RASphAdaptiveSizing.Enable"></a>

#### Enable()

Set the value of “” to True.

<a id="generated.RASphAdaptiveSizing.GetAvailableGeometries"></a>

#### GetAvailableGeometries()

Get all available Adaptive Sph Sizing Geometries.

* **Return type:**
  List[[`RAWall`](RAWall.md#generated.RAWall), [`RAFeedConveyor`](RAFeedConveyor.md#generated.RAFeedConveyor), [`RAReceivingConveyor`](RAReceivingConveyor.md#generated.RAReceivingConveyor), [`RASystemCouplingWall`](RASystemCouplingWall.md#generated.RASystemCouplingWall)]
  A list of [`RAWall`](RAWall.md#generated.RAWall), [`RAFeedConveyor`](RAFeedConveyor.md#generated.RAFeedConveyor), [`RAReceivingConveyor`](RAReceivingConveyor.md#generated.RAReceivingConveyor), [`RASystemCouplingWall`](RASystemCouplingWall.md#generated.RASystemCouplingWall).

<a id="generated.RASphAdaptiveSizing.GetEnabled"></a>

#### GetEnabled()

Get the value of “Enabled”.

<a id="generated.RASphAdaptiveSizing.GetGeometries"></a>

#### GetGeometries()

Get the “Adaptive Sph Sizing Geometries”.

* **Return type:**
  List[[`RAWall`](RAWall.md#generated.RAWall), [`RAFeedConveyor`](RAFeedConveyor.md#generated.RAFeedConveyor), [`RAReceivingConveyor`](RAReceivingConveyor.md#generated.RAReceivingConveyor), [`RASystemCouplingWall`](RASystemCouplingWall.md#generated.RASystemCouplingWall)]
  A list of [`RAWall`](RAWall.md#generated.RAWall), [`RAFeedConveyor`](RAFeedConveyor.md#generated.RAFeedConveyor), [`RAReceivingConveyor`](RAReceivingConveyor.md#generated.RAReceivingConveyor), [`RASystemCouplingWall`](RASystemCouplingWall.md#generated.RASystemCouplingWall).

<a id="generated.RASphAdaptiveSizing.GetGeometriesLevelOfRefinement"></a>

#### GetGeometriesLevelOfRefinement()

Get the value of “Geometries Level of Refinement”.

<a id="generated.RASphAdaptiveSizing.GetGeometriesRefinementDistanceFactor"></a>

#### GetGeometriesRefinementDistanceFactor()

Get the value of “Geometries Refinement Distance Factor”.

<a id="generated.RASphAdaptiveSizing.GetRoiRefinementLevels"></a>

#### GetRoiRefinementLevels()

Get the Adaptive SPH Sizing ROI refinement levels table.

<a id="generated.RASphAdaptiveSizing.IsEnabled"></a>

#### IsEnabled()

Check if the “” is enabled.

<a id="generated.RASphAdaptiveSizing.SetEnabled"></a>

#### SetEnabled(value: bool)

Set the value of “Enabled”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RASphAdaptiveSizing.SetGeometries"></a>

#### SetGeometries(values: Iterable[RAWall | RAFeedConveyor | RAReceivingConveyor | RASystemCouplingWall | str])

Set the “Adaptive Sph Sizing Geometries”.

:param List[str, [`RAWall`](RAWall.md#generated.RAWall), [`RAFeedConveyor`](RAFeedConveyor.md#generated.RAFeedConveyor), [`RAReceivingConveyor`](RAReceivingConveyor.md#generated.RAReceivingConveyor), [`RASystemCouplingWall`](RASystemCouplingWall.md#generated.RASystemCouplingWall)] values:
: A list with names, [`RAWall`](RAWall.md#generated.RAWall), [`RAFeedConveyor`](RAFeedConveyor.md#generated.RAFeedConveyor), [`RAReceivingConveyor`](RAReceivingConveyor.md#generated.RAReceivingConveyor), [`RASystemCouplingWall`](RASystemCouplingWall.md#generated.RASystemCouplingWall).

<a id="generated.RASphAdaptiveSizing.SetGeometriesLevelOfRefinement"></a>

#### SetGeometriesLevelOfRefinement(value: str | int)

Set the value of “Geometries Level of Refinement”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RASphAdaptiveSizing.SetGeometriesRefinementDistanceFactor"></a>

#### SetGeometriesRefinementDistanceFactor(value: str | float)

Set the value of “Geometries Refinement Distance Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.
