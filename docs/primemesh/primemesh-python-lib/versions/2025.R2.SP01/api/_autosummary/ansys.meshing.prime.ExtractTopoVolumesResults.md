# ExtractTopoVolumesResults

<a id="ansys.meshing.prime.ExtractTopoVolumesResults"></a>

### *class* ansys.meshing.prime.ExtractTopoVolumesResults(model=None, volumes=None, error_code=None, json_data=None, \*\*kwargs)

Parameters to extract flow topovolumes.

* **Parameters:**

  **model: Model**
  : Model to create a `ExtractTopoVolumesResults` object with default parameters.

  **volumes: Iterable[int], optional**
  : Ids of extracted flow topovolumes.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExtractTopoVolumesResults` object with provided parameters.

### Examples

```pycon
>>> extract_topo_volumes_results = prime.ExtractTopoVolumesResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`ExtractTopoVolumesResults.print_default`](ansys.meshing.prime.ExtractTopoVolumesResults.print_default.md#ansys.meshing.prime.ExtractTopoVolumesResults.print_default)()   | Print the default values of `ExtractTopoVolumesResults` object.   |
| [`ExtractTopoVolumesResults.set_default`](ansys.meshing.prime.ExtractTopoVolumesResults.set_default.md#ansys.meshing.prime.ExtractTopoVolumesResults.set_default)([...])    | Set the default values of the `ExtractTopoVolumesResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`ExtractTopoVolumesResults.error_code`](ansys.meshing.prime.ExtractTopoVolumesResults.error_code.md#ansys.meshing.prime.ExtractTopoVolumesResults.error_code)   | Error code associated with the failure of operation.   |
| [`ExtractTopoVolumesResults.volumes`](ansys.meshing.prime.ExtractTopoVolumesResults.volumes.md#ansys.meshing.prime.ExtractTopoVolumesResults.volumes)            | Ids of extracted flow topovolumes.                     |
<!-- vale on -->