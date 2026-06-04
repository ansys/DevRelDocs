# CreateMaterialPointParams

<a id="ansys.meshing.prime.CreateMaterialPointParams"></a>

### *class* ansys.meshing.prime.CreateMaterialPointParams(model=None, type=None, json_data=None, \*\*kwargs)

Defines parameters to create material point.

* **Parameters:**

  **model: Model**
  : Model to create a `CreateMaterialPointParams` object with default parameters.

  **type: MaterialPointType, optional**
  : Defines the type of material point.

  **json_data: dict, optional**
  : JSON dictionary to create a `CreateMaterialPointParams` object with provided parameters.

### Examples

```pycon
>>> create_material_point_params = prime.CreateMaterialPointParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`CreateMaterialPointParams.print_default`](ansys.meshing.prime.CreateMaterialPointParams.print_default.md#ansys.meshing.prime.CreateMaterialPointParams.print_default)()   | Print the default values of `CreateMaterialPointParams` object.   |
| [`CreateMaterialPointParams.set_default`](ansys.meshing.prime.CreateMaterialPointParams.set_default.md#ansys.meshing.prime.CreateMaterialPointParams.set_default)([type])   | Set the default values of the `CreateMaterialPointParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| [`CreateMaterialPointParams.type`](ansys.meshing.prime.CreateMaterialPointParams.type.md#ansys.meshing.prime.CreateMaterialPointParams.type)   | Defines the type of material point.   |
<!-- vale on -->