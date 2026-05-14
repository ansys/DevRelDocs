# refine_tet_mesh

<a id="ansys.meshing.prime.TrimmedSpline.refine_tet_mesh"></a>

#### TrimmedSpline.refine_tet_mesh(part_id, refine_params)

Refines tetrahedral mesh.

* **Parameters:**

  **part_id**
  : Part on which mesh refinement is performed.

  **refine_params**
  : Parameters to configure mesh refinement.

* **Returns:**

  [`TrimmedSplineResults`](ansys.meshing.prime.TrimmedSplineResults.md#ansys.meshing.prime.TrimmedSplineResults)
  : Returns the TrimmedSplineResults.

* **Return type:**

  [`TrimmedSplineResults`](ansys.meshing.prime.TrimmedSplineResults.md#ansys.meshing.prime.TrimmedSplineResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = trimmedSpline.RefineTetMesh(part_id, refine_params)
```

<!-- !! processed by numpydoc !! -->
