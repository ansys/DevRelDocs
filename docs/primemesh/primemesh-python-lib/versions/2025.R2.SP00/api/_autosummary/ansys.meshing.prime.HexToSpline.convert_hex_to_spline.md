# convert_hex_to_spline

<a id="ansys.meshing.prime.HexToSpline.convert_hex_to_spline"></a>

#### HexToSpline.convert_hex_to_spline(input_scope, hex_to_spline_params)

Converts fully hex mesh with topology to spline.

* **Parameters:**

  **input_scope**
  : Scope definition for input hex mesh.

  **hex_to_spline_params**
  : Parameters to convert hex to spline.

* **Returns:**

  [`IGAResults`](ansys.meshing.prime.IGAResults.md#ansys.meshing.prime.IGAResults)
  : Returns the IGAResults structure.

* **Return type:**

  [`IGAResults`](ansys.meshing.prime.IGAResults.md#ansys.meshing.prime.IGAResults)

### Notes

**This is a beta API**. **The behavior and implementation may change in future**.

### Examples

```pycon
>>> results = hexToSpline.ConvertHexToSpline(input_scope, hex_to_spline_params)
```

<!-- !! processed by numpydoc !! -->
