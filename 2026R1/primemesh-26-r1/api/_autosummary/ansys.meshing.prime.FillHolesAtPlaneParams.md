# FillHolesAtPlaneParams

<a id="ansys.meshing.prime.FillHolesAtPlaneParams"></a>

### *class* ansys.meshing.prime.FillHolesAtPlaneParams(model=None, create_zone=None, suggested_zone_name=None, json_data=None, \*\*kwargs)

Parameters to fill holes at given plane.

* **Parameters:**

  **model: Model**
  : Model to create a `FillHolesAtPlaneParams` object with default parameters.

  **create_zone: bool, optional**
  : Option to create a face zone for the zonelets created to fill holes.

  **suggested_zone_name: str, optional**
  : Suggested name to be set on merged part. If the suggested name is empty, the parameter uses the default name.

  **json_data: dict, optional**
  : JSON dictionary to create a `FillHolesAtPlaneParams` object with provided parameters.

### Examples

```pycon
>>> fill_holes_at_plane_params = prime.FillHolesAtPlaneParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`FillHolesAtPlaneParams.print_default`](ansys.meshing.prime.FillHolesAtPlaneParams.print_default.md#ansys.meshing.prime.FillHolesAtPlaneParams.print_default)()   | Print the default values of `FillHolesAtPlaneParams` object.   |
| [`FillHolesAtPlaneParams.set_default`](ansys.meshing.prime.FillHolesAtPlaneParams.set_default.md#ansys.meshing.prime.FillHolesAtPlaneParams.set_default)([...])    | Set the default values of the `FillHolesAtPlaneParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`FillHolesAtPlaneParams.create_zone`](ansys.meshing.prime.FillHolesAtPlaneParams.create_zone.md#ansys.meshing.prime.FillHolesAtPlaneParams.create_zone)                         | Option to create a face zone for the zonelets created to fill holes.   |
| [`FillHolesAtPlaneParams.suggested_zone_name`](ansys.meshing.prime.FillHolesAtPlaneParams.suggested_zone_name.md#ansys.meshing.prime.FillHolesAtPlaneParams.suggested_zone_name) | Suggested name to be set on merged part.                               |
<!-- vale on -->