# FileReadParams

<a id="ansys.meshing.prime.FileReadParams"></a>

### *class* ansys.meshing.prime.FileReadParams(model=None, append=None, json_data=None, \*\*kwargs)

Parameters to read file.

* **Parameters:**

  **model: Model**
  : Model to create a `FileReadParams` object with default parameters.

  **append: bool, optional**
  : Option to append imported mesh to existing mesh instead of resetting model to imported mesh.

  **json_data: dict, optional**
  : JSON dictionary to create a `FileReadParams` object with provided parameters.

### Examples

```pycon
>>> file_read_params = prime.FileReadParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`FileReadParams.print_default`](ansys.meshing.prime.FileReadParams.print_default.md#ansys.meshing.prime.FileReadParams.print_default)()   | Print the default values of `FileReadParams` object.   |
| [`FileReadParams.set_default`](ansys.meshing.prime.FileReadParams.set_default.md#ansys.meshing.prime.FileReadParams.set_default)([append]) | Set the default values of the `FileReadParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`FileReadParams.append`](ansys.meshing.prime.FileReadParams.append.md#ansys.meshing.prime.FileReadParams.append)   | Option to append imported mesh to existing mesh instead of resetting model to imported mesh.   |
<!-- vale on -->