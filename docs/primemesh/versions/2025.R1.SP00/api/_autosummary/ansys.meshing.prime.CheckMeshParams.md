# CheckMeshParams

<a id="ansys.meshing.prime.CheckMeshParams"></a>

### *class* ansys.meshing.prime.CheckMeshParams(model=None, json_data=None, \*\*kwargs)

Parameters used to check mesh.

* **Parameters:**

  **model: Model**
  : Model to create a `CheckMeshParams` object with default parameters.

  **json_data: dict, optional**
  : JSON dictionary to create a `CheckMeshParams` object with provided parameters.

### Examples

```pycon
>>> check_mesh_params = prime.CheckMeshParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`CheckMeshParams.print_default`](ansys.meshing.prime.CheckMeshParams.print_default.md#ansys.meshing.prime.CheckMeshParams.print_default)()   | Print the default values of `CheckMeshParams` object.   |
| [`CheckMeshParams.set_default`](ansys.meshing.prime.CheckMeshParams.set_default.md#ansys.meshing.prime.CheckMeshParams.set_default)()         | Set the default values of the `CheckMeshParams` object. |


<!-- vale on -->
