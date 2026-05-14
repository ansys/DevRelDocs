# join_face_zonelets

<a id="ansys.meshing.prime.Connect.join_face_zonelets"></a>

#### Connect.join_face_zonelets(part_id, face_zonelet_ids, with_face_zonelet_ids, params)

Joins a set of face zones with another set of face zones.

* **Parameters:**

  **part_id**
  : Id of the part.

  **face_zonelet_ids**
  : Face zonelets to be joined.

  **with_face_zonelet_ids**
  : Face zonelets to be joined with.

  **params**
  : Parameters for join.

* **Returns:**

  [`ConnectResults`](ansys.meshing.prime.ConnectResults.md#ansys.meshing.prime.ConnectResults)
  : Returns the ConnectResults.

* **Return type:**

  [`ConnectResults`](ansys.meshing.prime.ConnectResults.md#ansys.meshing.prime.ConnectResults)

### Examples

```pycon
>>> connect = Connect(model = model)
>>> results = connect.join_face_zonelets (part_id, face_zonelet_ids, with_face_zonelet_ids, params)
```

<!-- !! processed by numpydoc !! -->
