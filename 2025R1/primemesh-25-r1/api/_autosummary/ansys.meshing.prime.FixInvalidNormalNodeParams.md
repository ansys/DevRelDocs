# FixInvalidNormalNodeParams

<a id="ansys.meshing.prime.FixInvalidNormalNodeParams"></a>

### *class* ansys.meshing.prime.FixInvalidNormalNodeParams(model=None, nugget_size=None, nugget_mesh_size=None, label=None, json_data=None, \*\*kwargs)

Parameters to fix invalid average face normal at nodes by creating a nugget.

* **Parameters:**

  **model: Model**
  : Model to create a `FixInvalidNormalNodeParams` object with default parameters.

  **nugget_size: float, optional**
  : Relative size used to create nugget at invalid normal node. The size is relative to mesh size at the node.

  **nugget_mesh_size: float, optional**
  : Relative size used as max size to mesh nugget created at invalid normal node. The size is relative to mesh size at the node.

  **label: str, optional**
  : Label to set on new face zonelets created.

  **json_data: dict, optional**
  : JSON dictionary to create a `FixInvalidNormalNodeParams` object with provided parameters.

### Examples

```pycon
>>> fix_invalid_normal_node_params = prime.FixInvalidNormalNodeParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`FixInvalidNormalNodeParams.print_default`](ansys.meshing.prime.FixInvalidNormalNodeParams.print_default.md#ansys.meshing.prime.FixInvalidNormalNodeParams.print_default)()   | Print the default values of `FixInvalidNormalNodeParams` object.   |
| [`FixInvalidNormalNodeParams.set_default`](ansys.meshing.prime.FixInvalidNormalNodeParams.set_default.md#ansys.meshing.prime.FixInvalidNormalNodeParams.set_default)([...])    | Set the default values of the `FixInvalidNormalNodeParams` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [`FixInvalidNormalNodeParams.label`](ansys.meshing.prime.FixInvalidNormalNodeParams.label.md#ansys.meshing.prime.FixInvalidNormalNodeParams.label)                                  | Label to set on new face zonelets created.                                    |
| [`FixInvalidNormalNodeParams.nugget_mesh_size`](ansys.meshing.prime.FixInvalidNormalNodeParams.nugget_mesh_size.md#ansys.meshing.prime.FixInvalidNormalNodeParams.nugget_mesh_size) | Relative size used as max size to mesh nugget created at invalid normal node. |
| [`FixInvalidNormalNodeParams.nugget_size`](ansys.meshing.prime.FixInvalidNormalNodeParams.nugget_size.md#ansys.meshing.prime.FixInvalidNormalNodeParams.nugget_size)                | Relative size used to create nugget at invalid normal node.                   |
<!-- vale on -->