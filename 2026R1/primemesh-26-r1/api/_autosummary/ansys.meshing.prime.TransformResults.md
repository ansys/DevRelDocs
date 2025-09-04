# TransformResults

<a id="ansys.meshing.prime.TransformResults"></a>

### *class* ansys.meshing.prime.TransformResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with the transformation.

* **Parameters:**

  **model: Model**
  : Model to create a `TransformResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `TransformResults` object with provided parameters.

### Examples

```pycon
>>> transform_results = prime.TransformResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`TransformResults.print_default`](ansys.meshing.prime.TransformResults.print_default.md#ansys.meshing.prime.TransformResults.print_default)()       | Print the default values of `TransformResults` object.   |
| [`TransformResults.set_default`](ansys.meshing.prime.TransformResults.set_default.md#ansys.meshing.prime.TransformResults.set_default)([error_code]) | Set the default values of the `TransformResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`TransformResults.error_code`](ansys.meshing.prime.TransformResults.error_code.md#ansys.meshing.prime.TransformResults.error_code)   | Error code associated with the failure of operation.   |
<!-- vale on -->