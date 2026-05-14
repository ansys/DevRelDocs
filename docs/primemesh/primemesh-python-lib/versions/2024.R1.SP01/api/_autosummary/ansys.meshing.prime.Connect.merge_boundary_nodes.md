# ansys.meshing.prime.Connect.merge_boundary_nodes

#### Connect.merge_boundary_nodes(part_id, face_zonelet_ids, with_face_zonelet_ids, params)

Merge boundary nodes of source face zonelets with boundary nodes of target face zonelets according to the provided parameters.

* **Parameters:**
  **part_id**
  : Id of the part where merging has to take place.

  **face_zonelet_ids**
  : Ids of the source face zonelets.

  **with_face_zonelet_ids**
  : Ids of the target face zonelets.

  **params**
  : Parameters for merging boundary nodes.
* **Returns:**
  [`MergeBoundaryNodesResults`](ansys.meshing.prime.MergeBoundaryNodesResults.md#ansys.meshing.prime.MergeBoundaryNodesResults)
  : Returns the MergeBoundaryNodesResults.
* **Return type:**
  [`MergeBoundaryNodesResults`](ansys.meshing.prime.MergeBoundaryNodesResults.md#ansys.meshing.prime.MergeBoundaryNodesResults)

### Notes

This API is a Beta. API Behavior and implementation may change in future.

### Examples

```pycon
>>> connect = Connect(model = model)
>>> results = connect.MergeBoundaryNodes(2, [2,3], [4,5], params)
```

<!-- !! processed by numpydoc !! -->
