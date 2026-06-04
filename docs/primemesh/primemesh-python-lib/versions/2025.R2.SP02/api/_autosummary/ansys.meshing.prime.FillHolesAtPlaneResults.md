# FillHolesAtPlaneResults

<a id="ansys.meshing.prime.FillHolesAtPlaneResults"></a>

### *class* ansys.meshing.prime.FillHolesAtPlaneResults(model=None, error_code=None, warning_codes=None, created_face_zonelets=None, assigned_zone_name=None, created_zone_id=None, json_data=None, \*\*kwargs)

Results associated with fill holes at given plane.

* **Parameters:**

  **model: Model**
  : Model to create a `FillHolesAtPlaneResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with operation.

  **created_face_zonelets: Iterable[int], optional**
  : Ids of face zonelets created to fill the holes.

  **assigned_zone_name: str, optional**
  : Name assigned to zone created. Suffix is added to suggested name if the name not available.

  **created_zone_id: int, optional**
  : Id assigned to zone created.

  **json_data: dict, optional**
  : JSON dictionary to create a `FillHolesAtPlaneResults` object with provided parameters.

### Examples

```pycon
>>> fill_holes_at_plane_results = prime.FillHolesAtPlaneResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`FillHolesAtPlaneResults.print_default`](ansys.meshing.prime.FillHolesAtPlaneResults.print_default.md#ansys.meshing.prime.FillHolesAtPlaneResults.print_default)()   | Print the default values of `FillHolesAtPlaneResults` object.   |
| [`FillHolesAtPlaneResults.set_default`](ansys.meshing.prime.FillHolesAtPlaneResults.set_default.md#ansys.meshing.prime.FillHolesAtPlaneResults.set_default)([...])    | Set the default values of the `FillHolesAtPlaneResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`FillHolesAtPlaneResults.assigned_zone_name`](ansys.meshing.prime.FillHolesAtPlaneResults.assigned_zone_name.md#ansys.meshing.prime.FillHolesAtPlaneResults.assigned_zone_name)          | Name assigned to zone created.                       |
| [`FillHolesAtPlaneResults.created_face_zonelets`](ansys.meshing.prime.FillHolesAtPlaneResults.created_face_zonelets.md#ansys.meshing.prime.FillHolesAtPlaneResults.created_face_zonelets) | Ids of face zonelets created to fill the holes.      |
| [`FillHolesAtPlaneResults.created_zone_id`](ansys.meshing.prime.FillHolesAtPlaneResults.created_zone_id.md#ansys.meshing.prime.FillHolesAtPlaneResults.created_zone_id)                   | Id assigned to zone created.                         |
| [`FillHolesAtPlaneResults.error_code`](ansys.meshing.prime.FillHolesAtPlaneResults.error_code.md#ansys.meshing.prime.FillHolesAtPlaneResults.error_code)                                  | Error code associated with the failure of operation. |
| [`FillHolesAtPlaneResults.warning_codes`](ansys.meshing.prime.FillHolesAtPlaneResults.warning_codes.md#ansys.meshing.prime.FillHolesAtPlaneResults.warning_codes)                         | Warning codes associated with operation.             |
<!-- vale on -->