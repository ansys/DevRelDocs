# FileWriteParams

<a id="ansys.meshing.prime.FileWriteParams"></a>

### *class* ansys.meshing.prime.FileWriteParams(model=None, json_data=None, \*\*kwargs)

Parameters to write a file.

* **Parameters:**

  **model: Model**
  : Model to create a `FileWriteParams` object with default parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `FileWriteParams` object with provided parameters.

### Examples

```pycon
>>> file_write_params = prime.FileWriteParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`FileWriteParams.print_default`](ansys.meshing.prime.FileWriteParams.print_default.md#ansys.meshing.prime.FileWriteParams.print_default)()   | Print the default values of `FileWriteParams` object.   |
| [`FileWriteParams.set_default`](ansys.meshing.prime.FileWriteParams.set_default.md#ansys.meshing.prime.FileWriteParams.set_default)()         | Set the default values of the `FileWriteParams` object. |
<!-- vale on -->