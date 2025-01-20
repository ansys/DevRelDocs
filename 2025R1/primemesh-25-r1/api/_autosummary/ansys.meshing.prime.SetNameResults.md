# SetNameResults

<a id="ansys.meshing.prime.SetNameResults"></a>

### *class* ansys.meshing.prime.SetNameResults(model=None, warning_code=None, assigned_name=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with the set name.

* **Parameters:**

  **model: Model**
  : Model to create a `SetNameResults` object with default parameters.

  **warning_code: WarningCode, optional**
  : Warning code associated with the set name of given entity.

  **assigned_name: str, optional**
  : Assigned name of given entity.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `SetNameResults` object with provided parameters.

### Examples

```pycon
>>> set_name_results = prime.SetNameResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`SetNameResults.print_default`](ansys.meshing.prime.SetNameResults.print_default.md#ansys.meshing.prime.SetNameResults.print_default)()              | Print the default values of `SetNameResults` object.   |
| [`SetNameResults.set_default`](ansys.meshing.prime.SetNameResults.set_default.md#ansys.meshing.prime.SetNameResults.set_default)([warning_code, ...]) | Set the default values of the `SetNameResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`SetNameResults.assigned_name`](ansys.meshing.prime.SetNameResults.assigned_name.md#ansys.meshing.prime.SetNameResults.assigned_name)   | Assigned name of given entity.                             |
| [`SetNameResults.error_code`](ansys.meshing.prime.SetNameResults.error_code.md#ansys.meshing.prime.SetNameResults.error_code)            | Error code associated with the failure of operation.       |
| [`SetNameResults.warning_code`](ansys.meshing.prime.SetNameResults.warning_code.md#ansys.meshing.prime.SetNameResults.warning_code)      | Warning code associated with the set name of given entity. |
<!-- vale on -->