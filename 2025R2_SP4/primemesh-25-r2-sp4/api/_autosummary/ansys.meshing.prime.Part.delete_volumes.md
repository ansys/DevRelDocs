# delete_volumes

<a id="ansys.meshing.prime.Part.delete_volumes"></a>

#### Part.delete_volumes(volumes, params)

Delete volumes by deleting its face zonelets.

* **Parameters:**

  **volumes**
  : Ids of volumes to be deleted.

  **params**
  : Parameters to delete volumes.

* **Returns:**

  [`DeleteVolumesResults`](ansys.meshing.prime.DeleteVolumesResults.md#ansys.meshing.prime.DeleteVolumesResults)
  : Returns the DeleteVolumesResults.

* **Return type:**

  [`DeleteVolumesResults`](ansys.meshing.prime.DeleteVolumesResults.md#ansys.meshing.prime.DeleteVolumesResults)

### Examples

params = prime.DeleteVolumesParams(model = model)
results = part.delete_volumes(volumes, params)

<!-- !! processed by numpydoc !! -->
