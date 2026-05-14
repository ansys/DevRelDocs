# create_tet_mesh_on_trimmed_solid_spline

<a id="ansys.meshing.prime.TrimmedSpline.create_tet_mesh_on_trimmed_solid_spline"></a>

#### TrimmedSpline.create_tet_mesh_on_trimmed_solid_spline(part_id, mesh_params)

Creates tetrahedral mesh on trimmed solid spline.

* **Parameters:**

  **part_id**
  : Part on which the tetrahedral meshing is performed.

  **mesh_params**
  : Parameters to configure the meshing.

* **Returns:**

  [`TrimmedSplineResults`](ansys.meshing.prime.TrimmedSplineResults.md#ansys.meshing.prime.TrimmedSplineResults)
  : Returns the TrimmedSplineResults.

* **Return type:**

  [`TrimmedSplineResults`](ansys.meshing.prime.TrimmedSplineResults.md#ansys.meshing.prime.TrimmedSplineResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = trimmedSpline.CreateTetMeshOnTrimmedSolidSpline(part_id, mesh_params)
```

<!-- !! processed by numpydoc !! -->
