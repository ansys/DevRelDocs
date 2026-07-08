# merge_boundary_nodes

<a id="ansys.meshing.prime.Connect.merge_boundary_nodes"></a>

#### Connect.merge_boundary_nodes(part_id, face_zonelet_ids, with_face_zonelet_ids, params)

Merges boundary nodes of source face zonelets with boundary nodes of target face zonelets according to the provided parameters.

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

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> connect = Connect(model = model)
>>> results = connect.MergeBoundaryNodes(2, [2,3], [4,5], params)
```

<!-- !! processed by numpydoc !! -->
