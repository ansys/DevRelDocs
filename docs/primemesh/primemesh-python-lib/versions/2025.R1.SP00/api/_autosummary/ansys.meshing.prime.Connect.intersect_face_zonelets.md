# intersect_face_zonelets

<a id="ansys.meshing.prime.Connect.intersect_face_zonelets"></a>

#### Connect.intersect_face_zonelets(part_id, face_zonelet_ids, with_face_zonelet_ids, params)

Perform intersection between specified face zonelets of the part with the given intersect parameters.

* **Parameters:**

  **part_id**
  : Id of the part.

  **face_zonelet_ids**
  : Face zonelets to be intersected.

  **with_face_zonelet_ids**
  : Face zonelets to be intersected with.

  **params**
  : Parameters for intersection.

* **Returns:**
  

  [`ConnectResults`](ansys.meshing.prime.ConnectResults.md#ansys.meshing.prime.ConnectResults)
  : Returns the ConnectResults.

* **Return type:**

  [`ConnectResults`](ansys.meshing.prime.ConnectResults.md#ansys.meshing.prime.ConnectResults)

### Examples

```pycon
>>> connect = Connect(model = model)
>>> results = connect.intersect_face_zonelets (part_id, face_zonelet_ids, with_face_zonelet_ids, params)
```

<!-- !! processed by numpydoc !! -->
