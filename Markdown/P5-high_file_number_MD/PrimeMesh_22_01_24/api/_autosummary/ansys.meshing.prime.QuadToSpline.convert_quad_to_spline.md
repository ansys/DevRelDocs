# ansys.meshing.prime.QuadToSpline.convert_quad_to_spline

#### QuadToSpline.convert_quad_to_spline(part_id, quad_mesh_face_zonelet_ids, topo_face_ids, quad_to_spline_params)

Converts fully quad mesh with topology to spline with the given conversion parameters.

* **Parameters:**
  **part_id**
  : Id of the Part.

  **quad_mesh_face_zonelet_ids**
  : Ids of the face zonelets of quad mesh.

  **topo_face_ids**
  : Ids of topofaces.

  **quad_to_spline_params**
  : Parameters to convert quad to spline.
* **Returns:**
  [`IGAResults`](ansys.meshing.prime.IGAResults.md#ansys.meshing.prime.IGAResults)
  : Returns the IGAResults structure.
* **Return type:**
  [`IGAResults`](ansys.meshing.prime.IGAResults.md#ansys.meshing.prime.IGAResults)

### Notes

This API is a Beta. API Behavior and implementation may change in future.

### Examples

```pycon
>>> results = quadToSpline.ConvertQuadToSpline(part_id, quad_mesh_face_zonelet_ids, topo_face_ids, quad_to_spline_params)
```

<!-- !! processed by numpydoc !! -->
