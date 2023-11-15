<!-- vale off -->

# ComputeVolumesResults

### *class* ansys.meshing.prime.ComputeVolumesResults(model=None, error_code=None, error_locations=None, volumes=None, material_point_volumes=None, external_open_face_zonelets=None, warning_codes=None, json_data=None, \*\*kwargs)

Results associated with compute volumes.

<!-- !! processed by numpydoc !! -->

### Methods

| [`ComputeVolumesResults.print_default`](ansys.meshing.prime.ComputeVolumesResults.print_default.md#ansys.meshing.prime.ComputeVolumesResults.print_default)()   | Print the default values of ComputeVolumesResults.   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`ComputeVolumesResults.set_default`](ansys.meshing.prime.ComputeVolumesResults.set_default.md#ansys.meshing.prime.ComputeVolumesResults.set_default)([...])    | Set the default values of ComputeVolumesResults.     |

### Attributes

| [`ComputeVolumesResults.error_code`](ansys.meshing.prime.ComputeVolumesResults.error_code.md#ansys.meshing.prime.ComputeVolumesResults.error_code)                                                    | Error code associated with the failure of operation.                              |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ComputeVolumesResults.error_locations`](ansys.meshing.prime.ComputeVolumesResults.error_locations.md#ansys.meshing.prime.ComputeVolumesResults.error_locations)                                     | Coordinates of problematic locations in the surface mesh.                         |
| [`ComputeVolumesResults.external_open_face_zonelets`](ansys.meshing.prime.ComputeVolumesResults.external_open_face_zonelets.md#ansys.meshing.prime.ComputeVolumesResults.external_open_face_zonelets) | Face zonelet ids that are in external space and not part of any computed volumes. |
| [`ComputeVolumesResults.material_point_volumes`](ansys.meshing.prime.ComputeVolumesResults.material_point_volumes.md#ansys.meshing.prime.ComputeVolumesResults.material_point_volumes)                | Ids of computed volumes enclosing material points.                                |
| [`ComputeVolumesResults.volumes`](ansys.meshing.prime.ComputeVolumesResults.volumes.md#ansys.meshing.prime.ComputeVolumesResults.volumes)                                                             | Ids of computed volumes.                                                          |
| [`ComputeVolumesResults.warning_codes`](ansys.meshing.prime.ComputeVolumesResults.warning_codes.md#ansys.meshing.prime.ComputeVolumesResults.warning_codes)                                           | Warning codes associated with the compute volumes.                                |
<!-- vale on -->
