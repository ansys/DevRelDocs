# SizeFieldFileReadResults

<a id="ansys.meshing.prime.SizeFieldFileReadResults"></a>

### *class* ansys.meshing.prime.SizeFieldFileReadResults(model=None, error_code=None, size_field_ids=None, json_data=None, \*\*kwargs)

Results of size field file read operation.

* **Parameters:**

  **model: Model**
  : Model to create a `SizeFieldFileReadResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code if size field file read operation was unsuccessful.

  **size_field_ids: Iterable[int], optional**
  : Ids of size fields read by read size field operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `SizeFieldFileReadResults` object with provided parameters.

### Examples

```pycon
>>> size_field_file_read_results = prime.SizeFieldFileReadResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`SizeFieldFileReadResults.print_default`](ansys.meshing.prime.SizeFieldFileReadResults.print_default.md#ansys.meshing.prime.SizeFieldFileReadResults.print_default)()   | Print the default values of `SizeFieldFileReadResults` object.   |
| [`SizeFieldFileReadResults.set_default`](ansys.meshing.prime.SizeFieldFileReadResults.set_default.md#ansys.meshing.prime.SizeFieldFileReadResults.set_default)([...])    | Set the default values of the `SizeFieldFileReadResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`SizeFieldFileReadResults.error_code`](ansys.meshing.prime.SizeFieldFileReadResults.error_code.md#ansys.meshing.prime.SizeFieldFileReadResults.error_code)             | Error code if size field file read operation was unsuccessful.   |
| [`SizeFieldFileReadResults.size_field_ids`](ansys.meshing.prime.SizeFieldFileReadResults.size_field_ids.md#ansys.meshing.prime.SizeFieldFileReadResults.size_field_ids) | Ids of size fields read by read size field operation.            |
<!-- vale on -->