<!-- vale off -->

<a id="addtozoneresults"></a>

# AddToZoneResults

<a id="ansys.meshing.prime.AddToZoneResults"></a>

### *class* ansys.meshing.prime.AddToZoneResults(model=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results associated with the add to zone operation.

* **Parameters:**

  **model: Model**
  : Model to create a `AddToZoneResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with the add to zone operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `AddToZoneResults` object with provided parameters.

### Examples

```pycon
>>> add_to_zone_results = prime.AddToZoneResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`AddToZoneResults.print_default`](ansys.meshing.prime.AddToZoneResults.print_default.md#ansys.meshing.prime.AddToZoneResults.print_default)()            | Print the default values of `AddToZoneResults` object.   |
| [`AddToZoneResults.set_default`](ansys.meshing.prime.AddToZoneResults.set_default.md#ansys.meshing.prime.AddToZoneResults.set_default)([error_code, ...]) | Set the default values of the `AddToZoneResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`AddToZoneResults.error_code`](ansys.meshing.prime.AddToZoneResults.error_code.md#ansys.meshing.prime.AddToZoneResults.error_code)          | Error code associated with the failure of operation.     |
| [`AddToZoneResults.warning_codes`](ansys.meshing.prime.AddToZoneResults.warning_codes.md#ansys.meshing.prime.AddToZoneResults.warning_codes) | Warning codes associated with the add to zone operation. |
<!-- vale on -->