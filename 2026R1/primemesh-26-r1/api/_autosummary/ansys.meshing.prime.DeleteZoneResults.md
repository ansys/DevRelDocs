# DeleteZoneResults

<a id="ansys.meshing.prime.DeleteZoneResults"></a>

### *class* ansys.meshing.prime.DeleteZoneResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with the delete zone.

* **Parameters:**

  **model: Model**
  : Model to create a `DeleteZoneResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the delete zone operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteZoneResults` object with provided parameters.

### Examples

```pycon
>>> delete_zone_results = prime.DeleteZoneResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`DeleteZoneResults.print_default`](ansys.meshing.prime.DeleteZoneResults.print_default.md#ansys.meshing.prime.DeleteZoneResults.print_default)()       | Print the default values of `DeleteZoneResults` object.   |
| [`DeleteZoneResults.set_default`](ansys.meshing.prime.DeleteZoneResults.set_default.md#ansys.meshing.prime.DeleteZoneResults.set_default)([error_code]) | Set the default values of the `DeleteZoneResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| [`DeleteZoneResults.error_code`](ansys.meshing.prime.DeleteZoneResults.error_code.md#ansys.meshing.prime.DeleteZoneResults.error_code)   | Error code associated with the delete zone operation.   |
<!-- vale on -->