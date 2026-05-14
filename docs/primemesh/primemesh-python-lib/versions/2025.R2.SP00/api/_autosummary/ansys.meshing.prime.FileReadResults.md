# FileReadResults

<a id="ansys.meshing.prime.FileReadResults"></a>

### *class* ansys.meshing.prime.FileReadResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results of file read operation.

* **Parameters:**

  **model: Model**
  : Model to create a `FileReadResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code if file read operation was unsuccessful.

  **json_data: dict, optional**
  : JSON dictionary to create a `FileReadResults` object with provided parameters.

### Examples

```pycon
>>> file_read_results = prime.FileReadResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`FileReadResults.print_default`](ansys.meshing.prime.FileReadResults.print_default.md#ansys.meshing.prime.FileReadResults.print_default)()       | Print the default values of `FileReadResults` object.   |
| [`FileReadResults.set_default`](ansys.meshing.prime.FileReadResults.set_default.md#ansys.meshing.prime.FileReadResults.set_default)([error_code]) | Set the default values of the `FileReadResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`FileReadResults.error_code`](ansys.meshing.prime.FileReadResults.error_code.md#ansys.meshing.prime.FileReadResults.error_code)   | Error code if file read operation was unsuccessful.   |
<!-- vale on -->