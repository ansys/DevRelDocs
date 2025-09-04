# delete_unwetted_surfaces

<a id="ansys.meshing.prime.SurfaceUtilities.delete_unwetted_surfaces"></a>

#### SurfaceUtilities.delete_unwetted_surfaces(face_zonelet_ids, live_material_point_names, params)

Delete unwetted surfaces based on material point list.

* **Parameters:**

  **face_zonelet_ids**
  : Ids of face zonelets.

  **live_material_point_names**
  : Names of material points.

  **params**
  : DeleteUnwettedParams to define material points.

* **Returns:**

  [`DeleteUnwettedResult`](ansys.meshing.prime.DeleteUnwettedResult.md#ansys.meshing.prime.DeleteUnwettedResult)
  : Returns a DeleteUnwettedResult.

* **Return type:**

  [`DeleteUnwettedResult`](ansys.meshing.prime.DeleteUnwettedResult.md#ansys.meshing.prime.DeleteUnwettedResult)

### Examples

```pycon
>>> result = surf_utils.delete_unwetted_surfaces(zonelets, live_mpt_names, prime.DeleteUnwettedParams(model))
```

<!-- !! processed by numpydoc !! -->
