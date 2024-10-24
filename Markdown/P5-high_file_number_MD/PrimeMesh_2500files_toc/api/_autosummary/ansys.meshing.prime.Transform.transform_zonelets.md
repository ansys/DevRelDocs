# ansys.meshing.prime.Transform.transform_zonelets

#### Transform.transform_zonelets(part_id, zonelets, params)

Transforms given zonelets using provided transform parameters.

* **Parameters:**
  **part_id**
  : Part id of zonelets to be transformed.

  **zonelets**
  : Ids of zonelets.

  **params**
  : Transform parameters.
* **Returns:**
  [`TransformResults`](ansys.meshing.prime.TransformResults.md#ansys.meshing.prime.TransformResults)
  : Returns the transform results.
* **Return type:**
  [`TransformResults`](ansys.meshing.prime.TransformResults.md#ansys.meshing.prime.TransformResults)

### Examples

```pycon
>>> transform_params = prime.TransformParams(model = model)
>>> zonelets = part.get_face_zonelets()
>>> results = surface_utilities.transform_zonelets(part.id, zonelets, params)
```

<!-- !! processed by numpydoc !! -->
