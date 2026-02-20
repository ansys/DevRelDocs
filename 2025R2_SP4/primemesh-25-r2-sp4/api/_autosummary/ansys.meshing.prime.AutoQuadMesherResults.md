# AutoQuadMesherResults

<a id="ansys.meshing.prime.AutoQuadMesherResults"></a>

### *class* ansys.meshing.prime.AutoQuadMesherResults(model=None, error_code=None, warning_codes=None, failed_topo_face_ids=None, json_data=None, \*\*kwargs)

Results of auto quad mesher.

* **Parameters:**

  **model: Model**
  : Model to create a `AutoQuadMesherResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code if AutoQuadMesher operation is unsuccessful.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **warning_codes: List[WarningCode], optional**
  : Warning code if AutoQuadMesher operation is partially successful.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **failed_topo_face_ids: Iterable[int], optional**
  : Ids of the failed topofaces during topology check.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `AutoQuadMesherResults` object with provided parameters.

### Examples

```pycon
>>> auto_quad_mesher_results = prime.AutoQuadMesherResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AutoQuadMesherResults.print_default`](ansys.meshing.prime.AutoQuadMesherResults.print_default.md#ansys.meshing.prime.AutoQuadMesherResults.print_default)()   | Print the default values of `AutoQuadMesherResults` object.   |
| [`AutoQuadMesherResults.set_default`](ansys.meshing.prime.AutoQuadMesherResults.set_default.md#ansys.meshing.prime.AutoQuadMesherResults.set_default)([...])    | Set the default values of the `AutoQuadMesherResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`AutoQuadMesherResults.error_code`](ansys.meshing.prime.AutoQuadMesherResults.error_code.md#ansys.meshing.prime.AutoQuadMesherResults.error_code)                               | Error code if AutoQuadMesher operation is unsuccessful.           |
| [`AutoQuadMesherResults.failed_topo_face_ids`](ansys.meshing.prime.AutoQuadMesherResults.failed_topo_face_ids.md#ansys.meshing.prime.AutoQuadMesherResults.failed_topo_face_ids) | Ids of the failed topofaces during topology check.                |
| [`AutoQuadMesherResults.warning_codes`](ansys.meshing.prime.AutoQuadMesherResults.warning_codes.md#ansys.meshing.prime.AutoQuadMesherResults.warning_codes)                      | Warning code if AutoQuadMesher operation is partially successful. |
<!-- vale on -->