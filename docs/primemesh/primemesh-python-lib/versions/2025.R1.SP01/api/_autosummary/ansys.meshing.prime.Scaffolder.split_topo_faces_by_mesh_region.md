# split_topo_faces_by_mesh_region

<a id="ansys.meshing.prime.Scaffolder.split_topo_faces_by_mesh_region"></a>

#### Scaffolder.split_topo_faces_by_mesh_region(topo_faces)

Split input topofaces by mesh region.

* **Parameters:**

  **topo_faces**
  : Ids of topology faces.

* **Returns:**

  [`ScaffolderSplitResults`](ansys.meshing.prime.ScaffolderSplitResults.md#ansys.meshing.prime.ScaffolderSplitResults)
  : Return results in ScaffolderSplitResults type.

* **Return type:**

  [`ScaffolderSplitResults`](ansys.meshing.prime.ScaffolderSplitResults.md#ansys.meshing.prime.ScaffolderSplitResults)

### Examples

```pycon
>>> results = scaffolder.split_topo_faces_by_mesh_region([1,2,7,8])
```

<!-- !! processed by numpydoc !! -->
