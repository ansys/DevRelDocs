# CreateZoneResults

<a id="ansys.meshing.prime.CreateZoneResults"></a>

### *class* ansys.meshing.prime.CreateZoneResults(model=None, error_code=None, zone_id=None, assigned_name=None, json_data=None, \*\*kwargs)

Results associated with the create zone.

* **Parameters:**

  **model: Model**
  : Model to create a `CreateZoneResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the create zone operation.

  **zone_id: int, optional**
  : Id of newly created zone.

  **assigned_name: str, optional**
  : Assigned name of newly created zone.

  **json_data: dict, optional**
  : JSON dictionary to create a `CreateZoneResults` object with provided parameters.

### Examples

```pycon
>>> create_zone_results = prime.CreateZoneResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`CreateZoneResults.print_default`](ansys.meshing.prime.CreateZoneResults.print_default.md#ansys.meshing.prime.CreateZoneResults.print_default)()            | Print the default values of `CreateZoneResults` object.   |
| [`CreateZoneResults.set_default`](ansys.meshing.prime.CreateZoneResults.set_default.md#ansys.meshing.prime.CreateZoneResults.set_default)([error_code, ...]) | Set the default values of the `CreateZoneResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`CreateZoneResults.assigned_name`](ansys.meshing.prime.CreateZoneResults.assigned_name.md#ansys.meshing.prime.CreateZoneResults.assigned_name)   | Assigned name of newly created zone.                  |
| [`CreateZoneResults.error_code`](ansys.meshing.prime.CreateZoneResults.error_code.md#ansys.meshing.prime.CreateZoneResults.error_code)            | Error code associated with the create zone operation. |
| [`CreateZoneResults.zone_id`](ansys.meshing.prime.CreateZoneResults.zone_id.md#ansys.meshing.prime.CreateZoneResults.zone_id)                     | Id of newly created zone.                             |
<!-- vale on -->