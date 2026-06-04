# add_thickness

<a id="ansys.meshing.prime.SurfaceUtilities.add_thickness"></a>

#### SurfaceUtilities.add_thickness(zonelets, params)

Add thicknesss to input face zonelets.

* **Parameters:**

  **zonelets**
  : List of input face zonelet IDs.

  **params**
  : Parameters for controlling the addition of thickness.

* **Returns:**


  [`AddThicknessResults`](ansys.meshing.prime.AddThicknessResults.md#ansys.meshing.prime.AddThicknessResults)
  : Results for adding thickness.

* **Return type:**

  [`AddThicknessResults`](ansys.meshing.prime.AddThicknessResults.md#ansys.meshing.prime.AddThicknessResults)

### Examples

```pycon
>>> result = surf_utils.add_thickness(zonelets, params)
```

<!-- !! processed by numpydoc !! -->
