# ComputeTopoVolumesResults

<a id="ansys.meshing.prime.ComputeTopoVolumesResults"></a>

### *class* ansys.meshing.prime.ComputeTopoVolumesResults(model=None, error_code=None, error_locations=None, topo_volumes=None, material_point_topo_volumes=None, external_open_topo_faces=None, new_topo_volumes=None, deleted_topo_volumes=None, warning_codes=None, json_data=None, \*\*kwargs)

Results associated with compute topovolumes.

* **Parameters:**

  **model: Model**
  : Model to create a `ComputeTopoVolumesResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **error_locations: Iterable[float], optional**
  : Coordinates of problematic locations in the surface mesh.

  **topo_volumes: Iterable[int], optional**
  : Ids of all topovolumes computed.

  **material_point_topo_volumes: Iterable[int], optional**
  : Ids of topovolumes enclosing material points.

  **external_open_topo_faces: Iterable[int], optional**
  : Topoface ids that are in external space and not part of any topovolumes.

  **new_topo_volumes: Iterable[int], optional**
  : Ids of new topovolumes computed.

  **deleted_topo_volumes: Iterable[int], optional**
  : Ids of existing topovolumes that got deleted.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the compute topovolumes.

  **json_data: dict, optional**
  : JSON dictionary to create a `ComputeTopoVolumesResults` object with provided parameters.

### Examples

```pycon
>>> compute_topo_volumes_results = prime.ComputeTopoVolumesResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`ComputeTopoVolumesResults.print_default`](ansys.meshing.prime.ComputeTopoVolumesResults.print_default.md#ansys.meshing.prime.ComputeTopoVolumesResults.print_default)()   | Print the default values of `ComputeTopoVolumesResults` object.   |
| [`ComputeTopoVolumesResults.set_default`](ansys.meshing.prime.ComputeTopoVolumesResults.set_default.md#ansys.meshing.prime.ComputeTopoVolumesResults.set_default)([...])    | Set the default values of the `ComputeTopoVolumesResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`ComputeTopoVolumesResults.deleted_topo_volumes`](ansys.meshing.prime.ComputeTopoVolumesResults.deleted_topo_volumes.md#ansys.meshing.prime.ComputeTopoVolumesResults.deleted_topo_volumes)                      | Ids of existing topovolumes that got deleted.                            |
| [`ComputeTopoVolumesResults.error_code`](ansys.meshing.prime.ComputeTopoVolumesResults.error_code.md#ansys.meshing.prime.ComputeTopoVolumesResults.error_code)                                                    | Error code associated with the failure of operation.                     |
| [`ComputeTopoVolumesResults.error_locations`](ansys.meshing.prime.ComputeTopoVolumesResults.error_locations.md#ansys.meshing.prime.ComputeTopoVolumesResults.error_locations)                                     | Coordinates of problematic locations in the surface mesh.                |
| [`ComputeTopoVolumesResults.external_open_topo_faces`](ansys.meshing.prime.ComputeTopoVolumesResults.external_open_topo_faces.md#ansys.meshing.prime.ComputeTopoVolumesResults.external_open_topo_faces)          | Topoface ids that are in external space and not part of any topovolumes. |
| [`ComputeTopoVolumesResults.material_point_topo_volumes`](ansys.meshing.prime.ComputeTopoVolumesResults.material_point_topo_volumes.md#ansys.meshing.prime.ComputeTopoVolumesResults.material_point_topo_volumes) | Ids of topovolumes enclosing material points.                            |
| [`ComputeTopoVolumesResults.new_topo_volumes`](ansys.meshing.prime.ComputeTopoVolumesResults.new_topo_volumes.md#ansys.meshing.prime.ComputeTopoVolumesResults.new_topo_volumes)                                  | Ids of new topovolumes computed.                                         |
| [`ComputeTopoVolumesResults.topo_volumes`](ansys.meshing.prime.ComputeTopoVolumesResults.topo_volumes.md#ansys.meshing.prime.ComputeTopoVolumesResults.topo_volumes)                                              | Ids of all topovolumes computed.                                         |
| [`ComputeTopoVolumesResults.warning_codes`](ansys.meshing.prime.ComputeTopoVolumesResults.warning_codes.md#ansys.meshing.prime.ComputeTopoVolumesResults.warning_codes)                                           | Warning codes associated with the compute topovolumes.                   |
<!-- vale on -->