# create_trimmed_uniform_solid_spline_by_brep_mapping

<a id="ansys.meshing.prime.TrimmedSpline.create_trimmed_uniform_solid_spline_by_brep_mapping"></a>

#### TrimmedSpline.create_trimmed_uniform_solid_spline_by_brep_mapping(part_id, spline_params)

Creates uniform solid spline and maps the CAD geometry in its parametric space.

* **Parameters:**

  **part_id**
  : Part on which the spline is to be created.

  **spline_params**
  : Parameters used to create the spline.

* **Returns:**


  [`TrimmedSplineResults`](ansys.meshing.prime.TrimmedSplineResults.md#ansys.meshing.prime.TrimmedSplineResults)
  : Returns the TrimmedSplineResults.

* **Return type:**

  [`TrimmedSplineResults`](ansys.meshing.prime.TrimmedSplineResults.md#ansys.meshing.prime.TrimmedSplineResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = trimmedSpline.CreateTrimmedUniformSolidSplineByBrepMapping(part_id, spline_params)
```

<!-- !! processed by numpydoc !! -->
