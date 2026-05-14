<!-- vale off -->

<a id="addthicknessresults"></a>

# AddThicknessResults

<a id="ansys.meshing.prime.AddThicknessResults"></a>

### *class* ansys.meshing.prime.AddThicknessResults(model=None, error_code=None, part_id=None, json_data=None, \*\*kwargs)

Result structure associated with add thickness zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `AddThicknessResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.

  **part_id: int, optional**
  : The created thickness part id.

  **json_data: dict, optional**
  : JSON dictionary to create a `AddThicknessResults` object with provided parameters.

### Examples

```pycon
>>> add_thickness_results = prime.AddThicknessResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`AddThicknessResults.print_default`](ansys.meshing.prime.AddThicknessResults.print_default.md#ansys.meshing.prime.AddThicknessResults.print_default)()   | Print the default values of `AddThicknessResults` object.   |
| [`AddThicknessResults.set_default`](ansys.meshing.prime.AddThicknessResults.set_default.md#ansys.meshing.prime.AddThicknessResults.set_default)([...])    | Set the default values of the `AddThicknessResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`AddThicknessResults.error_code`](ansys.meshing.prime.AddThicknessResults.error_code.md#ansys.meshing.prime.AddThicknessResults.error_code)   | Error code associated with failure of operation.   |
| [`AddThicknessResults.part_id`](ansys.meshing.prime.AddThicknessResults.part_id.md#ansys.meshing.prime.AddThicknessResults.part_id)            | The created thickness part id.                     |
<!-- vale on -->