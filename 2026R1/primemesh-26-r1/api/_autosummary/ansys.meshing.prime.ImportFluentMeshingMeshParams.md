# ImportFluentMeshingMeshParams

<a id="ansys.meshing.prime.ImportFluentMeshingMeshParams"></a>

### *class* ansys.meshing.prime.ImportFluentMeshingMeshParams(model=None, append=None, enable_multi_threading=None, json_data=None, \*\*kwargs)

Parameters used to import fluent meshing mesh.

* **Parameters:**

  **model: Model**
  : Model to create a `ImportFluentMeshingMeshParams` object with default parameters.

  **append: bool, optional**
  : Option to append imported mesh to existing mesh instead of resetting model to imported mesh.

  **enable_multi_threading: bool, optional**
  : Option to import multiple files in parallel using multithreading.

  **json_data: dict, optional**
  : JSON dictionary to create a `ImportFluentMeshingMeshParams` object with provided parameters.

### Examples

```pycon
>>> import_fluent_meshing_mesh_params = prime.ImportFluentMeshingMeshParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`ImportFluentMeshingMeshParams.print_default`](ansys.meshing.prime.ImportFluentMeshingMeshParams.print_default.md#ansys.meshing.prime.ImportFluentMeshingMeshParams.print_default)()   | Print the default values of `ImportFluentMeshingMeshParams` object.   |
| [`ImportFluentMeshingMeshParams.set_default`](ansys.meshing.prime.ImportFluentMeshingMeshParams.set_default.md#ansys.meshing.prime.ImportFluentMeshingMeshParams.set_default)([...])    | Set the default values of the `ImportFluentMeshingMeshParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| [`ImportFluentMeshingMeshParams.append`](ansys.meshing.prime.ImportFluentMeshingMeshParams.append.md#ansys.meshing.prime.ImportFluentMeshingMeshParams.append)                                                 | Option to append imported mesh to existing mesh instead of resetting model to imported mesh.   |
| [`ImportFluentMeshingMeshParams.enable_multi_threading`](ansys.meshing.prime.ImportFluentMeshingMeshParams.enable_multi_threading.md#ansys.meshing.prime.ImportFluentMeshingMeshParams.enable_multi_threading) | Option to import multiple files in parallel using multithreading.                              |
<!-- vale on -->