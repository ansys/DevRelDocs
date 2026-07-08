# ScaffolderSplitResults

<a id="ansys.meshing.prime.ScaffolderSplitResults"></a>

### *class* ansys.meshing.prime.ScaffolderSplitResults(model=None, new_faces=None, error_code=None, json_data=None, \*\*kwargs)

Result structure associated to split topofaces operation.

* **Parameters:**

  **model: Model**
  : Model to create a `ScaffolderSplitResults` object with default parameters.

  **new_faces: Iterable[int], optional**
  : Topofaces created after split operation.

  **error_code: ErrorCode, optional**
  : Error code associated with split topofaces operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `ScaffolderSplitResults` object with provided parameters.

### Examples

```pycon
>>> scaffolder_split_results = prime.ScaffolderSplitResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`ScaffolderSplitResults.print_default`](ansys.meshing.prime.ScaffolderSplitResults.print_default.md#ansys.meshing.prime.ScaffolderSplitResults.print_default)()   | Print the default values of `ScaffolderSplitResults` object.   |
| [`ScaffolderSplitResults.set_default`](ansys.meshing.prime.ScaffolderSplitResults.set_default.md#ansys.meshing.prime.ScaffolderSplitResults.set_default)([...])    | Set the default values of the `ScaffolderSplitResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`ScaffolderSplitResults.error_code`](ansys.meshing.prime.ScaffolderSplitResults.error_code.md#ansys.meshing.prime.ScaffolderSplitResults.error_code)   | Error code associated with split topofaces operation.   |
| [`ScaffolderSplitResults.new_faces`](ansys.meshing.prime.ScaffolderSplitResults.new_faces.md#ansys.meshing.prime.ScaffolderSplitResults.new_faces)      | Topofaces created after split operation.                |
<!-- vale on -->