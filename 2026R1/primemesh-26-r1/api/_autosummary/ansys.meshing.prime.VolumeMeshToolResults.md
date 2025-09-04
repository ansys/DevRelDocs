# VolumeMeshToolResults

<a id="ansys.meshing.prime.VolumeMeshToolResults"></a>

### *class* ansys.meshing.prime.VolumeMeshToolResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Result associated with the volume mesh tool operation.

* **Parameters:**

  **model: Model**
  : Model to create a `VolumeMeshToolResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the volume mesh tool operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `VolumeMeshToolResults` object with provided parameters.

### Examples

```pycon
>>> volume_mesh_tool_results = prime.VolumeMeshToolResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`VolumeMeshToolResults.print_default`](ansys.meshing.prime.VolumeMeshToolResults.print_default.md#ansys.meshing.prime.VolumeMeshToolResults.print_default)()       | Print the default values of `VolumeMeshToolResults` object.   |
| [`VolumeMeshToolResults.set_default`](ansys.meshing.prime.VolumeMeshToolResults.set_default.md#ansys.meshing.prime.VolumeMeshToolResults.set_default)([error_code]) | Set the default values of the `VolumeMeshToolResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`VolumeMeshToolResults.error_code`](ansys.meshing.prime.VolumeMeshToolResults.error_code.md#ansys.meshing.prime.VolumeMeshToolResults.error_code)   | Error code associated with the volume mesh tool operation.   |
<!-- vale on -->