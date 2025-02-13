# ImportFluentCaseResults

<a id="ansys.meshing.prime.ImportFluentCaseResults"></a>

### *class* ansys.meshing.prime.ImportFluentCaseResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with fluent case import.

* **Parameters:**

  **model: Model**
  : Model to create a `ImportFluentCaseResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `ImportFluentCaseResults` object with provided parameters.

### Examples

```pycon
>>> import_fluent_case_results = prime.ImportFluentCaseResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`ImportFluentCaseResults.print_default`](ansys.meshing.prime.ImportFluentCaseResults.print_default.md#ansys.meshing.prime.ImportFluentCaseResults.print_default)()       | Print the default values of `ImportFluentCaseResults` object.   |
| [`ImportFluentCaseResults.set_default`](ansys.meshing.prime.ImportFluentCaseResults.set_default.md#ansys.meshing.prime.ImportFluentCaseResults.set_default)([error_code]) | Set the default values of the `ImportFluentCaseResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`ImportFluentCaseResults.error_code`](ansys.meshing.prime.ImportFluentCaseResults.error_code.md#ansys.meshing.prime.ImportFluentCaseResults.error_code)   | Error code associated with failure of operation.   |
<!-- vale on -->