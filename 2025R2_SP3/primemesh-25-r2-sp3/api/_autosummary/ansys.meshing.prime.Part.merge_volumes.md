# merge_volumes

<a id="ansys.meshing.prime.Part.merge_volumes"></a>

#### Part.merge_volumes(volumes, params)

Merge volumes by removing shared face zonelets.

* **Parameters:**

  **volumes**
  : Ids of volumes to be merged.

  **params**
  : Parameters to merge volumes.

* **Returns:**

  [`MergeVolumesResults`](ansys.meshing.prime.MergeVolumesResults.md#ansys.meshing.prime.MergeVolumesResults)
  : Returns the MergeVolumesResults.

* **Return type:**

  [`MergeVolumesResults`](ansys.meshing.prime.MergeVolumesResults.md#ansys.meshing.prime.MergeVolumesResults)

### Examples

params = prime.MergeVolumesParams(model = model)
results = part.merge_volumes(volumes, params)

<!-- !! processed by numpydoc !! -->
