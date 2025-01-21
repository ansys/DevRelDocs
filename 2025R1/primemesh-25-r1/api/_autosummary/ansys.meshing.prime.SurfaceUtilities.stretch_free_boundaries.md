# stretch_free_boundaries

<a id="ansys.meshing.prime.SurfaceUtilities.stretch_free_boundaries"></a>

#### SurfaceUtilities.stretch_free_boundaries(face_zonelet_ids, params)

Stretch free boundaries of each zonelet.

* **Parameters:**

  **face_zonelet_ids**
  : Ids of face zonelets.

  **params**
  : Parameters to control stretch free boundaries operation.

* **Returns:**

  [`StretchFreeBoundariesResults`](ansys.meshing.prime.StretchFreeBoundariesResults.md#ansys.meshing.prime.StretchFreeBoundariesResults)
  : Returns the StretchFreeBoundariesResults.

* **Return type:**

  [`StretchFreeBoundariesResults`](ansys.meshing.prime.StretchFreeBoundariesResults.md#ansys.meshing.prime.StretchFreeBoundariesResults)

### Examples

```pycon
>>> result = surf_utils.stretch_free_boundaries(face_zonelet_ids, params)
```

<!-- !! processed by numpydoc !! -->
