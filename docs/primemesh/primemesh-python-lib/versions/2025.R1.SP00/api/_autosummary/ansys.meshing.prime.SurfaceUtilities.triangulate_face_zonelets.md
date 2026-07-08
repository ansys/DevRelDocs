# triangulate_face_zonelets

<a id="ansys.meshing.prime.SurfaceUtilities.triangulate_face_zonelets"></a>

#### SurfaceUtilities.triangulate_face_zonelets(face_zonelet_ids, params)

Split faces in zonelets to get triangular faces.

* **Parameters:**

  **face_zonelet_ids**
  : Ids of face zonelets.

  **params**
  : Parameters to control the split operation.

* **Returns:**

  [`TriangulateResults`](ansys.meshing.prime.TriangulateResults.md#ansys.meshing.prime.TriangulateResults)
  : Returns the TriangulateResults.

* **Return type:**

  [`TriangulateResults`](ansys.meshing.prime.TriangulateResults.md#ansys.meshing.prime.TriangulateResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> result = surf_utils.triangulate_face_zonelets(face_zonelet_ids, params)
```

<!-- !! processed by numpydoc !! -->
