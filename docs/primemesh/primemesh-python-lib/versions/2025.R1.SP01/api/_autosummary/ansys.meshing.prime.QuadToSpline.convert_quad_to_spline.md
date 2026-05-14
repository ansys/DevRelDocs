# convert_quad_to_spline

<a id="ansys.meshing.prime.QuadToSpline.convert_quad_to_spline"></a>

#### QuadToSpline.convert_quad_to_spline(input_scope, quad_to_spline_params)

Converts fully quad mesh with topology to spline with the given conversion parameters.

* **Parameters:**

  **input_scope**
  : Scope definition for input quad mesh.

  **quad_to_spline_params**
  : Parameters to convert quad to spline.

* **Returns:**

  [`IGAResults`](ansys.meshing.prime.IGAResults.md#ansys.meshing.prime.IGAResults)
  : Returns the IGAResults structure.

* **Return type:**

  [`IGAResults`](ansys.meshing.prime.IGAResults.md#ansys.meshing.prime.IGAResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = quadToSpline.convert_quad_to_spline(input_scope, quad_to_spline_params)
```

<!-- !! processed by numpydoc !! -->
