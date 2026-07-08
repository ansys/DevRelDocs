# transform_zonelets

<a id="ansys.meshing.prime.Transform.transform_zonelets"></a>

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
>>> params = prime.TransformParams(model=model)
>>> # scale by a factor of 2 using a 4x4 transformation matrix
>>> params.transformation_matrix = [
>>>    2, 0, 0, 0,
>>>    0, 2, 0, 0,
>>>    0, 0, 2, 0,
>>>    0, 0, 0, 1,
>>> ]
>>> part = model.get_part_by_name("part_name")
>>> zonelets = part.get_face_zonelets()
>>> result = prime.SurfaceUtilities(model).transform_zonelets(part.id, zonelets, params)
```

<!-- !! processed by numpydoc !! -->
