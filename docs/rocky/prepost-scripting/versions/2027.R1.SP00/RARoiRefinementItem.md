

# RARoiRefinementItem

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RARoiRefinementItem"></a>

### *class* RARoiRefinementItem

Rocky PrePost Scripting wrapper for one Adaptive SPH Sizing ROI refinement row.

This wrapper corresponds to one item inside
`RASphAdaptiveSizing.RARoiRefinementItemList`.

Access individual roi level via a [`RASphAdaptiveSizing`](RASphAdaptiveSizing.md#generated.RASphAdaptiveSizing)’s roi level list:

```python
roi_ref_levels = sph_adaptive_sizing.GetRoiRefinementLevels()
roi_level_1 = roi_ref_levels[0]
roi_level_2 = roi_ref_levels.New()
```

Every [`RARoiRefinementItem`](#generated.RARoiRefinementItem) contains two properties that define a ROI refinement level:
the Region of Interest and the level value:

```python
roi_level = roi_ref_levels.New()
roi_level.SetRoi('MyRoiCube')
roi_level.SetLevelOfRefinement(2)
```

**Methods:**

| Name | Description |
|--------------------------------------------------------------------------------------|-----------------------------------------|
| [`GetAvailableRois`](#generated.RARoiRefinementItem.GetAvailableRois)()              | Get all available Rois.                 |
| [`GetLevelOfRefinement`](#generated.RARoiRefinementItem.GetLevelOfRefinement)()      | Get the value of "Level of Refinement". |
| [`GetRoi`](#generated.RARoiRefinementItem.GetRoi)()                                  | Get the "Roi".                          |
| [`SetLevelOfRefinement`](#generated.RARoiRefinementItem.SetLevelOfRefinement)(value) | Set the value of "Level of Refinement". |
| [`SetRoi`](#generated.RARoiRefinementItem.SetRoi)(value)                             | Set the "Roi".                          |

<a id="generated.RARoiRefinementItem.GetAvailableRois"></a>

#### GetAvailableRois()

Get all available Rois.

* **Return type:**
  List[[`RARegionOfInterestCube`](RARegionOfInterestCube.md#generated.RARegionOfInterestCube), [`RARegionOfInterestCylinder`](RARegionOfInterestCylinder.md#generated.RARegionOfInterestCylinder)]
  A list of [`RARegionOfInterestCube`](RARegionOfInterestCube.md#generated.RARegionOfInterestCube), [`RARegionOfInterestCylinder`](RARegionOfInterestCylinder.md#generated.RARegionOfInterestCylinder).

<a id="generated.RARoiRefinementItem.GetLevelOfRefinement"></a>

#### GetLevelOfRefinement()

Get the value of “Level of Refinement”.

<a id="generated.RARoiRefinementItem.GetRoi"></a>

#### GetRoi()

Get the “Roi”.

* **Return type:**
  [`RARegionOfInterestCube`](RARegionOfInterestCube.md#generated.RARegionOfInterestCube), [`RARegionOfInterestCylinder`](RARegionOfInterestCylinder.md#generated.RARegionOfInterestCylinder)

<a id="generated.RARoiRefinementItem.SetLevelOfRefinement"></a>

#### SetLevelOfRefinement(value: str | int)

Set the value of “Level of Refinement”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or int type.

<a id="generated.RARoiRefinementItem.SetRoi"></a>

#### SetRoi(value: str | RARegionOfInterestCube | RARegionOfInterestCylinder)

Set the “Roi”.

:param unicode, [`RARegionOfInterestCube`](RARegionOfInterestCube.md#generated.RARegionOfInterestCube), [`RARegionOfInterestCylinder`](RARegionOfInterestCylinder.md#generated.RARegionOfInterestCylinder) value:
: Either the API object wrapping the desired entity or its name.
