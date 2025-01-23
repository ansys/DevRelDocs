# delete_shadowed_topo_faces

<a id="ansys.meshing.prime.Scaffolder.delete_shadowed_topo_faces"></a>

#### Scaffolder.delete_shadowed_topo_faces(topo_faces, params)

Delete fully shadowed topofaces.

* **Parameters:**

  **topo_faces**
  : Ids of input topofaces.

  **params**
  : Volumetric scaffolder parameters.

* **Returns:**

  [`ScaffolderMergeResults`](ansys.meshing.prime.ScaffolderMergeResults.md#ansys.meshing.prime.ScaffolderMergeResults)
  : Return results in ScaffolderMergeResults.

* **Return type:**

  [`ScaffolderMergeResults`](ansys.meshing.prime.ScaffolderMergeResults.md#ansys.meshing.prime.ScaffolderMergeResults)

### Examples

```pycon
>>> results = scaffolder.delete_shadowed_topo_faces([1,2,3,4,5], params)
```

<!-- !! processed by numpydoc !! -->
