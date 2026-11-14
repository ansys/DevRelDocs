

# RARoiRefinementItemList

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RARoiRefinementItemList"></a>

### *class* RARoiRefinementItemList

Rocky PrePost Scripting wrapper for the Adaptive SPH Sizing ROI refinement table.

To get the [`RARoiRefinementItemList`](#generated.RARoiRefinementItemList) from a [`RASphAdaptiveSizing`](RASphAdaptiveSizing.md#generated.RASphAdaptiveSizing), use:

```python
roi_ref_levels = sph_adaptive_sizing.GetRoiRefinementLevels()
```

The [`RARoiRefinementItemList`](#generated.RARoiRefinementItemList) class acts as a regular Python list, with the usual methods to iterate
and access individual motions:

```python
roi_level_1 = roi_ref_levels.New()
roi_level_2 = roi_ref_levels.New()

for roi_level in roi_ref_levels:
    roi_level.SetLevelOfRefinement(2)

del roi_ref_levels[0]
roi_ref_levels.Clear()
```

The items in the roi level list are of type [`RARoiRefinementItem`](RARoiRefinementItem.md#generated.RARoiRefinementItem).

**Methods:**

| Name | Description |
|-------------------------------------------------------------|-----------------------------------|
| [`Clear`](#generated.RARoiRefinementItemList.Clear)()       | Remove all items from the list.   |
| [`New`](#generated.RARoiRefinementItemList.New)([index])    | Add a new ROI refinement row.     |
| [`Remove`](#generated.RARoiRefinementItemList.Remove)(item) | Remove an item from the list.     |

<a id="generated.RARoiRefinementItemList.Clear"></a>

#### Clear()

Remove all items from the list.

<a id="generated.RARoiRefinementItemList.New"></a>

#### New(index: int | None = None)

Add a new ROI refinement row.

* **Parameters:**
  **index** – Optional insertion index.

<a id="generated.RARoiRefinementItemList.Remove"></a>

#### Remove(item: T)

Remove an item from the list.
