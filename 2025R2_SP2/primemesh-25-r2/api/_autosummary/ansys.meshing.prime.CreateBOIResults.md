# CreateBOIResults

<a id="ansys.meshing.prime.CreateBOIResults"></a>

### *class* ansys.meshing.prime.CreateBOIResults(model=None, error_code=None, part_id=None, json_data=None, \*\*kwargs)

Result structure associated with BOI creation of zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `CreateBOIResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.

  **part_id: int, optional**
  : The BOI part id.

  **json_data: dict, optional**
  : JSON dictionary to create a `CreateBOIResults` object with provided parameters.

### Examples

```pycon
>>> create_boiresults = prime.CreateBOIResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`CreateBOIResults.print_default`](ansys.meshing.prime.CreateBOIResults.print_default.md#ansys.meshing.prime.CreateBOIResults.print_default)()            | Print the default values of `CreateBOIResults` object.   |
| [`CreateBOIResults.set_default`](ansys.meshing.prime.CreateBOIResults.set_default.md#ansys.meshing.prime.CreateBOIResults.set_default)([error_code, ...]) | Set the default values of the `CreateBOIResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`CreateBOIResults.error_code`](ansys.meshing.prime.CreateBOIResults.error_code.md#ansys.meshing.prime.CreateBOIResults.error_code)   | Error code associated with failure of operation.   |
| [`CreateBOIResults.part_id`](ansys.meshing.prime.CreateBOIResults.part_id.md#ansys.meshing.prime.CreateBOIResults.part_id)            | The BOI part id.                                   |
<!-- vale on -->