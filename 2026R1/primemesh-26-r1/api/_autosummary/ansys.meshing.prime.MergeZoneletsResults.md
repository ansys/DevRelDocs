# MergeZoneletsResults

<a id="ansys.meshing.prime.MergeZoneletsResults"></a>

### *class* ansys.meshing.prime.MergeZoneletsResults(model=None, merged_zonelets=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with merge zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `MergeZoneletsResults` object with default parameters.

  **merged_zonelets: Iterable[int], optional**
  : Ids of zonelets to which input zonelets are merged.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `MergeZoneletsResults` object with provided parameters.

### Examples

```pycon
>>> merge_zonelets_results = prime.MergeZoneletsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`MergeZoneletsResults.print_default`](ansys.meshing.prime.MergeZoneletsResults.print_default.md#ansys.meshing.prime.MergeZoneletsResults.print_default)()   | Print the default values of `MergeZoneletsResults` object.   |
| [`MergeZoneletsResults.set_default`](ansys.meshing.prime.MergeZoneletsResults.set_default.md#ansys.meshing.prime.MergeZoneletsResults.set_default)([...])    | Set the default values of the `MergeZoneletsResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`MergeZoneletsResults.error_code`](ansys.meshing.prime.MergeZoneletsResults.error_code.md#ansys.meshing.prime.MergeZoneletsResults.error_code)                | Error code associated with the failure of operation.   |
| [`MergeZoneletsResults.merged_zonelets`](ansys.meshing.prime.MergeZoneletsResults.merged_zonelets.md#ansys.meshing.prime.MergeZoneletsResults.merged_zonelets) | Ids of zonelets to which input zonelets are merged.    |
<!-- vale on -->