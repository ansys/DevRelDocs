# CopyZoneletsResults

<a id="ansys.meshing.prime.CopyZoneletsResults"></a>

### *class* ansys.meshing.prime.CopyZoneletsResults(model=None, error_code=None, copied_zonelets=None, copied_face_zonelets=None, json_data=None, \*\*kwargs)

Result structure associated with copying zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `CopyZoneletsResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.

  **copied_zonelets: Iterable[int], optional**
  : Ids of the copied zonelets.

  **copied_face_zonelets: Iterable[int], optional**
  : Ids of the copied bounding faces of cell zonelets.

  **json_data: dict, optional**
  : JSON dictionary to create a `CopyZoneletsResults` object with provided parameters.

### Examples

```pycon
>>> copy_zonelets_results = prime.CopyZoneletsResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`CopyZoneletsResults.print_default`](ansys.meshing.prime.CopyZoneletsResults.print_default.md#ansys.meshing.prime.CopyZoneletsResults.print_default)()   | Print the default values of `CopyZoneletsResults` object.   |
| [`CopyZoneletsResults.set_default`](ansys.meshing.prime.CopyZoneletsResults.set_default.md#ansys.meshing.prime.CopyZoneletsResults.set_default)([...])    | Set the default values of the `CopyZoneletsResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`CopyZoneletsResults.copied_face_zonelets`](ansys.meshing.prime.CopyZoneletsResults.copied_face_zonelets.md#ansys.meshing.prime.CopyZoneletsResults.copied_face_zonelets)   | Ids of the copied bounding faces of cell zonelets.   |
| [`CopyZoneletsResults.copied_zonelets`](ansys.meshing.prime.CopyZoneletsResults.copied_zonelets.md#ansys.meshing.prime.CopyZoneletsResults.copied_zonelets)                  | Ids of the copied zonelets.                          |
| [`CopyZoneletsResults.error_code`](ansys.meshing.prime.CopyZoneletsResults.error_code.md#ansys.meshing.prime.CopyZoneletsResults.error_code)                                 | Error code associated with failure of operation.     |
<!-- vale on -->