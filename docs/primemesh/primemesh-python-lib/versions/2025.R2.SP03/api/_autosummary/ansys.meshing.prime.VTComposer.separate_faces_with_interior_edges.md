# separate_faces_with_interior_edges

<a id="ansys.meshing.prime.VTComposer.separate_faces_with_interior_edges"></a>

#### VTComposer.separate_faces_with_interior_edges(topo_faces, params)

Separates the given topofaces having interior edges using the given VT Composer parameters.

* **Parameters:**

  **topo_faces**
  : Ids of input topofaces.

  **params**
  : VT composer parameters.

* **Returns:**

  [`VTComposerResults`](ansys.meshing.prime.VTComposerResults.md#ansys.meshing.prime.VTComposerResults)
  : Return results in VTComposerResults.

* **Return type:**

  [`VTComposerResults`](ansys.meshing.prime.VTComposerResults.md#ansys.meshing.prime.VTComposerResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = vtcomposer.separate_faces_with_interior_edges([1,2,3,4,5], params)
```

<!-- !! processed by numpydoc !! -->
