# remesh_face_zonelets

<a id="ansys.meshing.prime.Surfer.remesh_face_zonelets"></a>

#### Surfer.remesh_face_zonelets(part_id, face_zonelets, edge_zonelets, params)

Perform meshing on face zonelets with given parameters.

* **Parameters:**

  **part_id**
  : ID of part.

  **face_zonelets**
  : IDs of the face zonelets.

  **edge_zonelets**
  : IDs of the edge zonelets.

  **params**
  : Surfer parameters.

* **Returns:**

  [`SurferResults`](ansys.meshing.prime.SurferResults.md#ansys.meshing.prime.SurferResults)
  : Results from meshing the face zonelets.

* **Return type:**

  [`SurferResults`](ansys.meshing.prime.SurferResults.md#ansys.meshing.prime.SurferResults)

### Examples

```pycon
>>> surfer = prime.Surfer(model)
>>> surfer_params = prime.SurferParams(model)
>>> results = surfer.remesh_face_zonelets(part_id,
                face_zonelets, edge_zonelets, surfer_params)
```

<!-- !! processed by numpydoc !! -->
