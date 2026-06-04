# check_face_deviation

<a id="ansys.meshing.prime.SurfaceSearch.check_face_deviation"></a>

#### SurfaceSearch.check_face_deviation(source_face_zonelets, target_face_zonelets, params)

Gets information regarding the number of faces with a deviation higher than the tolerance.

* **Parameters:**

  **source_face_zonelets**
  : Scope of reference zonelets from which the deviation is checked.

  **target_face_zonelets**
  : Scope of target zonelets for which the deviation is checked.

  **params**
  : Parameters for retrieving information while performing check face deviation operation.

* **Returns:**

  [`CheckFaceDeviationResults`](ansys.meshing.prime.CheckFaceDeviationResults.md#ansys.meshing.prime.CheckFaceDeviationResults)
  : Returns the CheckFaceDeviationResults.

* **Return type:**

  [`CheckFaceDeviationResults`](ansys.meshing.prime.CheckFaceDeviationResults.md#ansys.meshing.prime.CheckFaceDeviationResults)

### Examples

```pycon
>>> surf_search = SurfaceSearch(model=model)
>>> params = prime.CheckFaceDeviationParams()
>>> results = surf_search.check_face_deviation(source_scope, reference_scope, params)
```

<!-- !! processed by numpydoc !! -->
