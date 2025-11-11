# remesh_face_zonelets_locally

<a id="ansys.meshing.prime.Surfer.remesh_face_zonelets_locally"></a>

#### Surfer.remesh_face_zonelets_locally(part_id, face_zonelets, register_id, local_surfer_params)

Remesh face zonelets locally at the registered faces with given parameters.

* **Parameters:**
  **part_id**
  : ID of part.

  **face_zonelets**
  : IDs of the face zonelets.

  **register_id**
  : Register ID of the target faces.

  **local_surfer_params**
  : Local surfer parameters.
* **Returns:**
  :

  [`LocalSurferResults`](ansys.meshing.prime.LocalSurferResults.md#ansys.meshing.prime.LocalSurferResults)
  : Results from remeshing the face zonelets.
* **Return type:**
  [`LocalSurferResults`](ansys.meshing.prime.LocalSurferResults.md#ansys.meshing.prime.LocalSurferResults)

### Examples

```pycon
>>> surfer = prime.Surfer(model)
>>> local_surfer_params = prime.LocalSurferParams(model)
>>> results = surfer.remesh_face_zonelets_locally(part_id,
                face_zonelets, register_id, local_surfer_params)
```

<!-- !! processed by numpydoc !! -->
