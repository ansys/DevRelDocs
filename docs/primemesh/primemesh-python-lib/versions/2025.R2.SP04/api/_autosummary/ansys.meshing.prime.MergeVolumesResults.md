# MergeVolumesResults

<a id="ansys.meshing.prime.MergeVolumesResults"></a>

### *class* ansys.meshing.prime.MergeVolumesResults(model=None, merged_volumes=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with merge volumes operation.

* **Parameters:**

  **model: Model**
  : Model to create a `MergeVolumesResults` object with default parameters.

  **merged_volumes: Iterable[int], optional**
  : Ids of volumes to which input volumes are merged.

  **error_code: ErrorCode, optional**
  : Error code associated with the volume merge operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `MergeVolumesResults` object with provided parameters.

### Examples

```pycon
>>> merge_volumes_results = prime.MergeVolumesResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`MergeVolumesResults.print_default`](ansys.meshing.prime.MergeVolumesResults.print_default.md#ansys.meshing.prime.MergeVolumesResults.print_default)()   | Print the default values of `MergeVolumesResults` object.   |
| [`MergeVolumesResults.set_default`](ansys.meshing.prime.MergeVolumesResults.set_default.md#ansys.meshing.prime.MergeVolumesResults.set_default)([...])    | Set the default values of the `MergeVolumesResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`MergeVolumesResults.error_code`](ansys.meshing.prime.MergeVolumesResults.error_code.md#ansys.meshing.prime.MergeVolumesResults.error_code)             | Error code associated with the volume merge operation.   |
| [`MergeVolumesResults.merged_volumes`](ansys.meshing.prime.MergeVolumesResults.merged_volumes.md#ansys.meshing.prime.MergeVolumesResults.merged_volumes) | Ids of volumes to which input volumes are merged.        |
<!-- vale on -->