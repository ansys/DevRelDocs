# ProjectOnGeometryResults

<a id="ansys.meshing.prime.ProjectOnGeometryResults"></a>

### *class* ansys.meshing.prime.ProjectOnGeometryResults(model=None, success=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results associated with projection of topofaces nodes on its geometry.

* **Parameters:**

  **model: Model**
  : Model to create a `ProjectOnGeometryResults` object with default parameters.

  **success: bool, optional**
  : Defines the operation was successful or not.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **error_code: ErrorCode, optional**
  : Error code associated with failure of operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **warning_codes: List[WarningCode], optional**
  : Warning code associated with operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ProjectOnGeometryResults` object with provided parameters.

### Examples

```pycon
>>> project_on_geometry_results = prime.ProjectOnGeometryResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`ProjectOnGeometryResults.print_default`](ansys.meshing.prime.ProjectOnGeometryResults.print_default.md#ansys.meshing.prime.ProjectOnGeometryResults.print_default)()   | Print the default values of `ProjectOnGeometryResults` object.   |
| [`ProjectOnGeometryResults.set_default`](ansys.meshing.prime.ProjectOnGeometryResults.set_default.md#ansys.meshing.prime.ProjectOnGeometryResults.set_default)([...])    | Set the default values of the `ProjectOnGeometryResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`ProjectOnGeometryResults.error_code`](ansys.meshing.prime.ProjectOnGeometryResults.error_code.md#ansys.meshing.prime.ProjectOnGeometryResults.error_code)          | Error code associated with failure of operation.   |
| [`ProjectOnGeometryResults.success`](ansys.meshing.prime.ProjectOnGeometryResults.success.md#ansys.meshing.prime.ProjectOnGeometryResults.success)                   | Defines the operation was successful or not.       |
| [`ProjectOnGeometryResults.warning_codes`](ansys.meshing.prime.ProjectOnGeometryResults.warning_codes.md#ansys.meshing.prime.ProjectOnGeometryResults.warning_codes) | Warning code associated with operation.            |
<!-- vale on -->