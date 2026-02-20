# ReadSizeFieldParams

<a id="ansys.meshing.prime.ReadSizeFieldParams"></a>

### *class* ansys.meshing.prime.ReadSizeFieldParams(model=None, append=None, json_data=None, \*\*kwargs)

Parameters used to read size field file.

* **Parameters:**

  **model: Model**
  : Model to create a `ReadSizeFieldParams` object with default parameters.

  **append: bool, optional**
  : Option to append the size fields from file.

  **json_data: dict, optional**
  : JSON dictionary to create a `ReadSizeFieldParams` object with provided parameters.

### Examples

```pycon
>>> read_size_field_params = prime.ReadSizeFieldParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`ReadSizeFieldParams.print_default`](ansys.meshing.prime.ReadSizeFieldParams.print_default.md#ansys.meshing.prime.ReadSizeFieldParams.print_default)()   | Print the default values of `ReadSizeFieldParams` object.   |
| [`ReadSizeFieldParams.set_default`](ansys.meshing.prime.ReadSizeFieldParams.set_default.md#ansys.meshing.prime.ReadSizeFieldParams.set_default)([append]) | Set the default values of the `ReadSizeFieldParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [`ReadSizeFieldParams.append`](ansys.meshing.prime.ReadSizeFieldParams.append.md#ansys.meshing.prime.ReadSizeFieldParams.append)   | Option to append the size fields from file.   |
<!-- vale on -->