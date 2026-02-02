# DeleteVolumesParams

<a id="ansys.meshing.prime.DeleteVolumesParams"></a>

### *class* ansys.meshing.prime.DeleteVolumesParams(model=None, delete_small_volumes=None, volume_limit=None, json_data=None, \*\*kwargs)

Parameters to delete volumes.

* **Parameters:**

  **model: Model**
  : Model to create a `DeleteVolumesParams` object with default parameters.

  **delete_small_volumes: bool, optional**
  : Option to delete only volumes smaller than provided volume limit.

  **volume_limit: float, optional**
  : Maximum volume limit to identify smaller volumes to be deleted.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteVolumesParams` object with provided parameters.

### Examples

```pycon
>>> delete_volumes_params = prime.DeleteVolumesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`DeleteVolumesParams.print_default`](ansys.meshing.prime.DeleteVolumesParams.print_default.md#ansys.meshing.prime.DeleteVolumesParams.print_default)()   | Print the default values of `DeleteVolumesParams` object.   |
| [`DeleteVolumesParams.set_default`](ansys.meshing.prime.DeleteVolumesParams.set_default.md#ansys.meshing.prime.DeleteVolumesParams.set_default)([...])    | Set the default values of the `DeleteVolumesParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| [`DeleteVolumesParams.delete_small_volumes`](ansys.meshing.prime.DeleteVolumesParams.delete_small_volumes.md#ansys.meshing.prime.DeleteVolumesParams.delete_small_volumes)   | Option to delete only volumes smaller than provided volume limit.   |
| [`DeleteVolumesParams.volume_limit`](ansys.meshing.prime.DeleteVolumesParams.volume_limit.md#ansys.meshing.prime.DeleteVolumesParams.volume_limit)                           | Maximum volume limit to identify smaller volumes to be deleted.     |
<!-- vale on -->