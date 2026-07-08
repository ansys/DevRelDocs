# MergeVolumesParams

<a id="ansys.meshing.prime.MergeVolumesParams"></a>

### *class* ansys.meshing.prime.MergeVolumesParams(model=None, merge_to_neighbor_volume=None, neighbor_volumes=None, json_data=None, \*\*kwargs)

Parameters to merge volumes.

* **Parameters:**

  **model: Model**
  : Model to create a `MergeVolumesParams` object with default parameters.

  **merge_to_neighbor_volume: bool, optional**
  : Option to merge given volumes to their neighbor volume.

  **neighbor_volumes: Iterable[int], optional**
  : Ids of volume that are neighbors to given volumes for merging.

  **json_data: dict, optional**
  : JSON dictionary to create a `MergeVolumesParams` object with provided parameters.

### Examples

```pycon
>>> merge_volumes_params = prime.MergeVolumesParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`MergeVolumesParams.print_default`](ansys.meshing.prime.MergeVolumesParams.print_default.md#ansys.meshing.prime.MergeVolumesParams.print_default)()   | Print the default values of `MergeVolumesParams` object.   |
| [`MergeVolumesParams.set_default`](ansys.meshing.prime.MergeVolumesParams.set_default.md#ansys.meshing.prime.MergeVolumesParams.set_default)([...])    | Set the default values of the `MergeVolumesParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`MergeVolumesParams.merge_to_neighbor_volume`](ansys.meshing.prime.MergeVolumesParams.merge_to_neighbor_volume.md#ansys.meshing.prime.MergeVolumesParams.merge_to_neighbor_volume)   | Option to merge given volumes to their neighbor volume.        |
| [`MergeVolumesParams.neighbor_volumes`](ansys.meshing.prime.MergeVolumesParams.neighbor_volumes.md#ansys.meshing.prime.MergeVolumesParams.neighbor_volumes)                           | Ids of volume that are neighbors to given volumes for merging. |
<!-- vale on -->