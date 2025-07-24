# delete_mesh_on_topo_faces

<a id="ansys.meshing.prime.TopoData.delete_mesh_on_topo_faces"></a>

#### TopoData.delete_mesh_on_topo_faces(topo_faces, params)

Delete mesh on the provided topofaces.

* **Parameters:**

  **topo_faces**
  : Ids of topofaces.

  **params**
  : Parameters to delete mesh on topofaces.

* **Returns:**


  [`DeleteMeshResults`](ansys.meshing.prime.DeleteMeshResults.md#ansys.meshing.prime.DeleteMeshResults)
  : Returns the DeleteMeshResults.

* **Return type:**

  [`DeleteMeshResults`](ansys.meshing.prime.DeleteMeshResults.md#ansys.meshing.prime.DeleteMeshResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> params = prime.DeleteMeshParams(model = model)
>>> result = topo_data.delete_mesh_on_topo_faces(top_faces, params)
```

<!-- !! processed by numpydoc !! -->
