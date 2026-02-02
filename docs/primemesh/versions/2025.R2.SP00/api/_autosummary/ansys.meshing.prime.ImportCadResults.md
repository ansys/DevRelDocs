# ImportCadResults

<a id="ansys.meshing.prime.ImportCadResults"></a>

### *class* ansys.meshing.prime.ImportCadResults(model=None, error_code=None, cad_parameters=None, json_data=None, \*\*kwargs)

Results associated with the CAD import.

* **Parameters:**

  **model: Model**
  : Model to create a `ImportCadResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.

  **cad_parameters: Dict[str, Union[str, int, float, bool]], optional**
  : Returns the parameters associated with CAD. Available only with WorkBench CAD Reader route.

  **json_data: dict, optional**
  : JSON dictionary to create a `ImportCadResults` object with provided parameters.

### Examples

```pycon
>>> import_cad_results = prime.ImportCadResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`ImportCadResults.print_default`](ansys.meshing.prime.ImportCadResults.print_default.md#ansys.meshing.prime.ImportCadResults.print_default)()            | Print the default values of `ImportCadResults` object.   |
| [`ImportCadResults.set_default`](ansys.meshing.prime.ImportCadResults.set_default.md#ansys.meshing.prime.ImportCadResults.set_default)([error_code, ...]) | Set the default values of the `ImportCadResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| [`ImportCadResults.cad_parameters`](ansys.meshing.prime.ImportCadResults.cad_parameters.md#ansys.meshing.prime.ImportCadResults.cad_parameters)   | Returns the parameters associated with CAD.      |
| [`ImportCadResults.error_code`](ansys.meshing.prime.ImportCadResults.error_code.md#ansys.meshing.prime.ImportCadResults.error_code)               | Error code associated with failure of operation. |
<!-- vale on -->