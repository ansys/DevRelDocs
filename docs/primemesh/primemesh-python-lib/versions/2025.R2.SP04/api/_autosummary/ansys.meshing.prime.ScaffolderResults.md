# ScaffolderResults

<a id="ansys.meshing.prime.ScaffolderResults"></a>

### *class* ansys.meshing.prime.ScaffolderResults(model=None, n_incomplete_topo_faces=None, error_code=None, json_data=None, \*\*kwargs)

Results structure associated to scaffold operation.

* **Parameters:**

  **model: Model**
  : Model to create a `ScaffolderResults` object with default parameters.

  **n_incomplete_topo_faces: int, optional**
  : Number of topofaces failed in scaffold operation.

  **error_code: ErrorCode, optional**
  : Error code associated with scaffold operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `ScaffolderResults` object with provided parameters.

### Examples

```pycon
>>> scaffolder_results = prime.ScaffolderResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`ScaffolderResults.print_default`](ansys.meshing.prime.ScaffolderResults.print_default.md#ansys.meshing.prime.ScaffolderResults.print_default)()   | Print the default values of `ScaffolderResults` object.   |
| [`ScaffolderResults.set_default`](ansys.meshing.prime.ScaffolderResults.set_default.md#ansys.meshing.prime.ScaffolderResults.set_default)([...])    | Set the default values of the `ScaffolderResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`ScaffolderResults.error_code`](ansys.meshing.prime.ScaffolderResults.error_code.md#ansys.meshing.prime.ScaffolderResults.error_code)                                        | Error code associated with scaffold operation.    |
| [`ScaffolderResults.n_incomplete_topo_faces`](ansys.meshing.prime.ScaffolderResults.n_incomplete_topo_faces.md#ansys.meshing.prime.ScaffolderResults.n_incomplete_topo_faces) | Number of topofaces failed in scaffold operation. |
<!-- vale on -->