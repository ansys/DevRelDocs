<!-- vale off -->

<a id="addlabelresults"></a>

# AddLabelResults

<a id="ansys.meshing.prime.AddLabelResults"></a>

### *class* ansys.meshing.prime.AddLabelResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with the add label operation.

* **Parameters:**

  **model: Model**
  : Model to create a `AddLabelResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the add label operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `AddLabelResults` object with provided parameters.

### Examples

```pycon
>>> add_label_results = prime.AddLabelResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`AddLabelResults.print_default`](ansys.meshing.prime.AddLabelResults.print_default.md#ansys.meshing.prime.AddLabelResults.print_default)()       | Print the default values of `AddLabelResults` object.   |
| [`AddLabelResults.set_default`](ansys.meshing.prime.AddLabelResults.set_default.md#ansys.meshing.prime.AddLabelResults.set_default)([error_code]) | Set the default values of the `AddLabelResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`AddLabelResults.error_code`](ansys.meshing.prime.AddLabelResults.error_code.md#ansys.meshing.prime.AddLabelResults.error_code)   | Error code associated with the add label operation.   |
<!-- vale on -->