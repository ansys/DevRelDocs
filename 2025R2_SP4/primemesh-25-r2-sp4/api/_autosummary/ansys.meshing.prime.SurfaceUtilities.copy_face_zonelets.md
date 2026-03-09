# copy_face_zonelets

<a id="ansys.meshing.prime.SurfaceUtilities.copy_face_zonelets"></a>

#### SurfaceUtilities.copy_face_zonelets(face_zonelets, target_part_id, params)

Copy face zonelets.

* **Parameters:**

  **face_zonelets**
  : Ids of face zonelets to be copied.

  **target_part_id**
  : Part id to be used to move the copied zonelets.

  **params**
  : Parameters to copy face zonelets.

* **Returns:**

  [`CopyZoneletsResults`](ansys.meshing.prime.CopyZoneletsResults.md#ansys.meshing.prime.CopyZoneletsResults)
  : Returns the CopyZoneletsResults.

* **Return type:**

  [`CopyZoneletsResults`](ansys.meshing.prime.CopyZoneletsResults.md#ansys.meshing.prime.CopyZoneletsResults)

### Examples

>>>> surfaceutil = SurfaceUtilities(model = model)
>>>> surfaceutil = surfaceutil.copy_face_zonelets(face_zonelets, target_part_id = new_part.id, prime.CopyZoneletsParams(model = model))

<!-- !! processed by numpydoc !! -->
