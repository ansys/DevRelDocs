# RemoveZoneResults

<a id="ansys.meshing.prime.RemoveZoneResults"></a>

### *class* ansys.meshing.prime.RemoveZoneResults(model=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results associated with the remove zone operation.

* **Parameters:**

  **model: Model**
  : Model to create a `RemoveZoneResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the remove zone operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `RemoveZoneResults` object with provided parameters.

### Examples

```pycon
>>> remove_zone_results = prime.RemoveZoneResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`RemoveZoneResults.print_default`](ansys.meshing.prime.RemoveZoneResults.print_default.md#ansys.meshing.prime.RemoveZoneResults.print_default)()            | Print the default values of `RemoveZoneResults` object.   |
| [`RemoveZoneResults.set_default`](ansys.meshing.prime.RemoveZoneResults.set_default.md#ansys.meshing.prime.RemoveZoneResults.set_default)([error_code, ...]) | Set the default values of the `RemoveZoneResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`RemoveZoneResults.error_code`](ansys.meshing.prime.RemoveZoneResults.error_code.md#ansys.meshing.prime.RemoveZoneResults.error_code)          | Error code associated with the failure of operation.     |
| [`RemoveZoneResults.warning_codes`](ansys.meshing.prime.RemoveZoneResults.warning_codes.md#ansys.meshing.prime.RemoveZoneResults.warning_codes) | Warning codes associated with the remove zone operation. |
<!-- vale on -->