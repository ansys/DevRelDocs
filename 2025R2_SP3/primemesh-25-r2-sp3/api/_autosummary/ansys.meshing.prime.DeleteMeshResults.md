# DeleteMeshResults

<a id="ansys.meshing.prime.DeleteMeshResults"></a>

### *class* ansys.meshing.prime.DeleteMeshResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results structure associated with delete mesh on topofaces.

* **Parameters:**

  **model: Model**
  : Model to create a `DeleteMeshResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteMeshResults` object with provided parameters.

### Examples

```pycon
>>> delete_mesh_results = prime.DeleteMeshResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`DeleteMeshResults.print_default`](ansys.meshing.prime.DeleteMeshResults.print_default.md#ansys.meshing.prime.DeleteMeshResults.print_default)()       | Print the default values of `DeleteMeshResults` object.   |
| [`DeleteMeshResults.set_default`](ansys.meshing.prime.DeleteMeshResults.set_default.md#ansys.meshing.prime.DeleteMeshResults.set_default)([error_code]) | Set the default values of the `DeleteMeshResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`DeleteMeshResults.error_code`](ansys.meshing.prime.DeleteMeshResults.error_code.md#ansys.meshing.prime.DeleteMeshResults.error_code)   | Error code associated with the failure of operation.   |
<!-- vale on -->