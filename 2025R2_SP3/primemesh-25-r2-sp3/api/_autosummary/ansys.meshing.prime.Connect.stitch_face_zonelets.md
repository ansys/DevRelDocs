# stitch_face_zonelets

<a id="ansys.meshing.prime.Connect.stitch_face_zonelets"></a>

#### Connect.stitch_face_zonelets(part_id, face_zonelet_ids, with_face_zonelet_ids, params)

Stitches a set of face zonelets with another set of face zonelets.

* **Parameters:**

  **part_id**
  : Id of the part.

  **face_zonelet_ids**
  : Face zonelets to be stitched.

  **with_face_zonelet_ids**
  : Face zonelets to be stitched with.

  **params**
  : Parameters for stitch.

* **Returns:**

  [`ConnectResults`](ansys.meshing.prime.ConnectResults.md#ansys.meshing.prime.ConnectResults)
  : Returns the ConnectResults.

* **Return type:**

  [`ConnectResults`](ansys.meshing.prime.ConnectResults.md#ansys.meshing.prime.ConnectResults)

### Examples

```pycon
>>> connect = Connect(model = model)
>>> results = connect.stitch_face_zonelets (part_id, face_zonelet_ids, with_face_zonelet_ids, stitch_params)
```

<!-- !! processed by numpydoc !! -->
