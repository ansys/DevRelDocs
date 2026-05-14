# ImportFluentMeshingMeshResults

<a id="ansys.meshing.prime.ImportFluentMeshingMeshResults"></a>

### *class* ansys.meshing.prime.ImportFluentMeshingMeshResults(model=None, error_code=None, new_parts_created=None, json_data=None, \*\*kwargs)

Results associated with fluent meshing mesh import.

* **Parameters:**

  **model: Model**
  : Model to create a `ImportFluentMeshingMeshResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **new_parts_created: Iterable[int], optional**
  : Ids of new parts created for each file unreferenced fluent meshing mesh zones.

  **json_data: dict, optional**
  : JSON dictionary to create a `ImportFluentMeshingMeshResults` object with provided parameters.

### Examples

```pycon
>>> import_fluent_meshing_mesh_results = prime.ImportFluentMeshingMeshResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| [`ImportFluentMeshingMeshResults.print_default`](ansys.meshing.prime.ImportFluentMeshingMeshResults.print_default.md#ansys.meshing.prime.ImportFluentMeshingMeshResults.print_default)()   | Print the default values of `ImportFluentMeshingMeshResults` object.   |
| [`ImportFluentMeshingMeshResults.set_default`](ansys.meshing.prime.ImportFluentMeshingMeshResults.set_default.md#ansys.meshing.prime.ImportFluentMeshingMeshResults.set_default)([...])    | Set the default values of the `ImportFluentMeshingMeshResults` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| [`ImportFluentMeshingMeshResults.error_code`](ansys.meshing.prime.ImportFluentMeshingMeshResults.error_code.md#ansys.meshing.prime.ImportFluentMeshingMeshResults.error_code)                      | Error code associated with the failure of operation.                           |
| [`ImportFluentMeshingMeshResults.new_parts_created`](ansys.meshing.prime.ImportFluentMeshingMeshResults.new_parts_created.md#ansys.meshing.prime.ImportFluentMeshingMeshResults.new_parts_created) | Ids of new parts created for each file unreferenced fluent meshing mesh zones. |
<!-- vale on -->