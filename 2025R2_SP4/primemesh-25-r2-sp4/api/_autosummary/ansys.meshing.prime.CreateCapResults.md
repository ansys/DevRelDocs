# CreateCapResults

<a id="ansys.meshing.prime.CreateCapResults"></a>

### *class* ansys.meshing.prime.CreateCapResults(model=None, error_code=None, created_face_zonelets=None, json_data=None, \*\*kwargs)

Results associated with create cap on face zonelets.

* **Parameters:**

  **model: Model**
  : Model to create a `CreateCapResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **created_face_zonelets: Iterable[int], optional**
  : Ids of cap face zonelets created.

  **json_data: dict, optional**
  : JSON dictionary to create a `CreateCapResults` object with provided parameters.

### Examples

```pycon
>>> create_cap_results = prime.CreateCapResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`CreateCapResults.print_default`](ansys.meshing.prime.CreateCapResults.print_default.md#ansys.meshing.prime.CreateCapResults.print_default)()            | Print the default values of `CreateCapResults` object.   |
| [`CreateCapResults.set_default`](ansys.meshing.prime.CreateCapResults.set_default.md#ansys.meshing.prime.CreateCapResults.set_default)([error_code, ...]) | Set the default values of the `CreateCapResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`CreateCapResults.created_face_zonelets`](ansys.meshing.prime.CreateCapResults.created_face_zonelets.md#ansys.meshing.prime.CreateCapResults.created_face_zonelets)   | Ids of cap face zonelets created.                    |
| [`CreateCapResults.error_code`](ansys.meshing.prime.CreateCapResults.error_code.md#ansys.meshing.prime.CreateCapResults.error_code)                                    | Error code associated with the failure of operation. |
<!-- vale on -->