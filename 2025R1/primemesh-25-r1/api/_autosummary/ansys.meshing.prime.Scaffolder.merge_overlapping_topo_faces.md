# merge_overlapping_topo_faces

<a id="ansys.meshing.prime.Scaffolder.merge_overlapping_topo_faces"></a>

#### Scaffolder.merge_overlapping_topo_faces(topo_faces, params)

Merge overlapping topofaces.

* **Parameters:**

  **topo_faces**
  : Ids of topology faces.

  **params**
  : Scaffolder parameters.

* **Returns:**
  
    [`ScaffolderMergeResults`](ansys.meshing.prime.ScaffolderMergeResults.md#ansys.meshing.prime.ScaffolderMergeResults)
  : Return results in ScaffolderMergeResults.

* **Return type:**

  [`ScaffolderMergeResults`](ansys.meshing.prime.ScaffolderMergeResults.md#ansys.meshing.prime.ScaffolderMergeResults)

### Examples

```pycon
>>> results = scaffolder.MergeOverlappingTopoFaces([1,2,7,8], params)
```

<!-- !! processed by numpydoc !! -->
