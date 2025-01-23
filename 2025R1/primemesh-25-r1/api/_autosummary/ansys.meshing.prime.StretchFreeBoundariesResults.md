# StretchFreeBoundariesResults

<a id="ansys.meshing.prime.StretchFreeBoundariesResults"></a>

### *class* ansys.meshing.prime.StretchFreeBoundariesResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with stretch free boundaries operation.

* **Parameters:**

  **model: Model**
  : Model to create a `StretchFreeBoundariesResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `StretchFreeBoundariesResults` object with provided parameters.

### Examples

```pycon
>>> stretch_free_boundaries_results = prime.StretchFreeBoundariesResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`StretchFreeBoundariesResults.print_default`](ansys.meshing.prime.StretchFreeBoundariesResults.print_default.md#ansys.meshing.prime.StretchFreeBoundariesResults.print_default)()   | Print the default values of `StretchFreeBoundariesResults` object.   |
| [`StretchFreeBoundariesResults.set_default`](ansys.meshing.prime.StretchFreeBoundariesResults.set_default.md#ansys.meshing.prime.StretchFreeBoundariesResults.set_default)([...])    | Set the default values of the `StretchFreeBoundariesResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`StretchFreeBoundariesResults.error_code`](ansys.meshing.prime.StretchFreeBoundariesResults.error_code.md#ansys.meshing.prime.StretchFreeBoundariesResults.error_code)   | Error code associated with failure of operation.   |
<!-- vale on -->