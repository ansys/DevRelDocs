# WriteSizeFieldParams

<a id="ansys.meshing.prime.WriteSizeFieldParams"></a>

### *class* ansys.meshing.prime.WriteSizeFieldParams(model=None, write_only_active_size_fields=None, json_data=None, \*\*kwargs)

Parameters used to write size field file.

* **Parameters:**

  **model: Model**
  : Model to create a `WriteSizeFieldParams` object with default parameters.

  **write_only_active_size_fields: bool, optional**
  : Option to write only active size fields into the file.

  **json_data: dict, optional**
  : JSON dictionary to create a `WriteSizeFieldParams` object with provided parameters.

### Examples

```pycon
>>> write_size_field_params = prime.WriteSizeFieldParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`WriteSizeFieldParams.print_default`](ansys.meshing.prime.WriteSizeFieldParams.print_default.md#ansys.meshing.prime.WriteSizeFieldParams.print_default)()   | Print the default values of `WriteSizeFieldParams` object.   |
| [`WriteSizeFieldParams.set_default`](ansys.meshing.prime.WriteSizeFieldParams.set_default.md#ansys.meshing.prime.WriteSizeFieldParams.set_default)([...])    | Set the default values of the `WriteSizeFieldParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`WriteSizeFieldParams.write_only_active_size_fields`](ansys.meshing.prime.WriteSizeFieldParams.write_only_active_size_fields.md#ansys.meshing.prime.WriteSizeFieldParams.write_only_active_size_fields)   | Option to write only active size fields into the file.   |
<!-- vale on -->