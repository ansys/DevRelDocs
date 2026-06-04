# ExtractVolumesResults

<a id="ansys.meshing.prime.ExtractVolumesResults"></a>

### *class* ansys.meshing.prime.ExtractVolumesResults(model=None, error_code=None, volumes=None, warning_codes=None, assigned_zone_name=None, face_zonelets_without_volumes=None, json_data=None, \*\*kwargs)

Results associated with compute volumes.

* **Parameters:**

  **model: Model**
  : Model to create a `ExtractVolumesResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **volumes: Iterable[int], optional**
  : Ids of computed volumes.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the compute volumes.

  **assigned_zone_name: str, optional**
  : Assigned name of zone for extracted flow volumes.

  **face_zonelets_without_volumes: Iterable[int], optional**
  : Ids of face zonelets for which volumes were not extracted.

  **json_data: dict, optional**
  : JSON dictionary to create a `ExtractVolumesResults` object with provided parameters.

### Examples

```pycon
>>> extract_volumes_results = prime.ExtractVolumesResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ExtractVolumesResults.print_default`](ansys.meshing.prime.ExtractVolumesResults.print_default.md#ansys.meshing.prime.ExtractVolumesResults.print_default)()   | Print the default values of `ExtractVolumesResults` object.   |
| [`ExtractVolumesResults.set_default`](ansys.meshing.prime.ExtractVolumesResults.set_default.md#ansys.meshing.prime.ExtractVolumesResults.set_default)([...])    | Set the default values of the `ExtractVolumesResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`ExtractVolumesResults.assigned_zone_name`](ansys.meshing.prime.ExtractVolumesResults.assigned_zone_name.md#ansys.meshing.prime.ExtractVolumesResults.assigned_zone_name)                                  | Assigned name of zone for extracted flow volumes.          |
| [`ExtractVolumesResults.error_code`](ansys.meshing.prime.ExtractVolumesResults.error_code.md#ansys.meshing.prime.ExtractVolumesResults.error_code)                                                          | Error code associated with the failure of operation.       |
| [`ExtractVolumesResults.face_zonelets_without_volumes`](ansys.meshing.prime.ExtractVolumesResults.face_zonelets_without_volumes.md#ansys.meshing.prime.ExtractVolumesResults.face_zonelets_without_volumes) | Ids of face zonelets for which volumes were not extracted. |
| [`ExtractVolumesResults.volumes`](ansys.meshing.prime.ExtractVolumesResults.volumes.md#ansys.meshing.prime.ExtractVolumesResults.volumes)                                                                   | Ids of computed volumes.                                   |
| [`ExtractVolumesResults.warning_codes`](ansys.meshing.prime.ExtractVolumesResults.warning_codes.md#ansys.meshing.prime.ExtractVolumesResults.warning_codes)                                                 | Warning codes associated with the compute volumes.         |
<!-- vale on -->