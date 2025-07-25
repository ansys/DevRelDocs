# merge_zonelets

<a id="ansys.meshing.prime.Part.merge_zonelets"></a>

#### Part.merge_zonelets(zonelets, params)

Merge zonelets.

* **Parameters:**

  **zonelets**
  : Ids of zonelets to be merged.

  **params**
  : Parameters to merge zonelets.

* **Returns:**

  [`MergeZoneletsResults`](ansys.meshing.prime.MergeZoneletsResults.md#ansys.meshing.prime.MergeZoneletsResults)
  : Returns the MergeZoneletsResults.

* **Return type:**

  [`MergeZoneletsResults`](ansys.meshing.prime.MergeZoneletsResults.md#ansys.meshing.prime.MergeZoneletsResults)

### Examples

params = prime.MergeZoneletsParams(model = model)
results = part.merge_zonelets(zonelets, params)

<!-- !! processed by numpydoc !! -->
