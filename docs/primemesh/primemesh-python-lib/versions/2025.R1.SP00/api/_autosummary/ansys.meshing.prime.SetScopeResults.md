# SetScopeResults

<a id="ansys.meshing.prime.SetScopeResults"></a>

### *class* ansys.meshing.prime.SetScopeResults(model=None, error_code=None, warning_code=None, json_data=None, \*\*kwargs)

Results associated with the set scope operation.

* **Parameters:**

  **model: Model**
  : Model to create a `SetScopeResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the set scope.

  **warning_code: WarningCode, optional**
  : Warning code associated with the set scope.

  **json_data: dict, optional**
  : JSON dictionary to create a `SetScopeResults` object with provided parameters.

### Examples

```pycon
>>> set_scope_results = prime.SetScopeResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`SetScopeResults.print_default`](ansys.meshing.prime.SetScopeResults.print_default.md#ansys.meshing.prime.SetScopeResults.print_default)()            | Print the default values of `SetScopeResults` object.   |
| [`SetScopeResults.set_default`](ansys.meshing.prime.SetScopeResults.set_default.md#ansys.meshing.prime.SetScopeResults.set_default)([error_code, ...]) | Set the default values of the `SetScopeResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`SetScopeResults.error_code`](ansys.meshing.prime.SetScopeResults.error_code.md#ansys.meshing.prime.SetScopeResults.error_code)       | Error code associated with the set scope.   |
| [`SetScopeResults.warning_code`](ansys.meshing.prime.SetScopeResults.warning_code.md#ansys.meshing.prime.SetScopeResults.warning_code) | Warning code associated with the set scope. |
<!-- vale on -->