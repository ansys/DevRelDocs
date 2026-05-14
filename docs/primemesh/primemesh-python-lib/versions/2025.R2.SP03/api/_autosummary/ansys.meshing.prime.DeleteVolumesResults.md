# DeleteVolumesResults

<a id="ansys.meshing.prime.DeleteVolumesResults"></a>

### *class* ansys.meshing.prime.DeleteVolumesResults(model=None, deleted_volumes=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with delete volumes operation.

* **Parameters:**

  **model: Model**
  : Model to create a `DeleteVolumesResults` object with default parameters.

  **deleted_volumes: Iterable[int], optional**
  : Ids of deleted volumes.

  **error_code: ErrorCode, optional**
  : Error code associated with the volume deletion operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteVolumesResults` object with provided parameters.

### Examples

```pycon
>>> delete_volumes_results = prime.DeleteVolumesResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`DeleteVolumesResults.print_default`](ansys.meshing.prime.DeleteVolumesResults.print_default.md#ansys.meshing.prime.DeleteVolumesResults.print_default)()   | Print the default values of `DeleteVolumesResults` object.   |
| [`DeleteVolumesResults.set_default`](ansys.meshing.prime.DeleteVolumesResults.set_default.md#ansys.meshing.prime.DeleteVolumesResults.set_default)([...])    | Set the default values of the `DeleteVolumesResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`DeleteVolumesResults.deleted_volumes`](ansys.meshing.prime.DeleteVolumesResults.deleted_volumes.md#ansys.meshing.prime.DeleteVolumesResults.deleted_volumes)   | Ids of deleted volumes.                                   |
| [`DeleteVolumesResults.error_code`](ansys.meshing.prime.DeleteVolumesResults.error_code.md#ansys.meshing.prime.DeleteVolumesResults.error_code)                  | Error code associated with the volume deletion operation. |
<!-- vale on -->