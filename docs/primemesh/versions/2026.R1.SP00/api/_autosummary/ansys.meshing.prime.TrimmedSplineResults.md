# TrimmedSplineResults

<a id="ansys.meshing.prime.TrimmedSplineResults"></a>

### *class* ansys.meshing.prime.TrimmedSplineResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results of IGA operations.

* **Parameters:**

  **model: Model**
  : Model to create a `TrimmedSplineResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code if IGA operation is unsuccessful.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `TrimmedSplineResults` object with provided parameters.

### Examples

```pycon
>>> trimmed_spline_results = prime.TrimmedSplineResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`TrimmedSplineResults.print_default`](ansys.meshing.prime.TrimmedSplineResults.print_default.md#ansys.meshing.prime.TrimmedSplineResults.print_default)()       | Print the default values of `TrimmedSplineResults` object.   |
| [`TrimmedSplineResults.set_default`](ansys.meshing.prime.TrimmedSplineResults.set_default.md#ansys.meshing.prime.TrimmedSplineResults.set_default)([error_code]) | Set the default values of the `TrimmedSplineResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| [`TrimmedSplineResults.error_code`](ansys.meshing.prime.TrimmedSplineResults.error_code.md#ansys.meshing.prime.TrimmedSplineResults.error_code)   | Error code if IGA operation is unsuccessful.   |
<!-- vale on -->