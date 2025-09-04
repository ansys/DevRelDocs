# CreateMaterialPointResults

<a id="ansys.meshing.prime.CreateMaterialPointResults"></a>

### *class* ansys.meshing.prime.CreateMaterialPointResults(model=None, id=None, assigned_name=None, error_code=None, warning_codes=None, json_data=None, \*\*kwargs)

Results structure associated with create material point operation.

* **Parameters:**

  **model: Model**
  : Model to create a `CreateMaterialPointResults` object with default parameters.

  **id: int, optional**
  : Id of the material point created.

  **assigned_name: str, optional**
  : Assigned name of the material point created.

  **error_code: ErrorCode, optional**
  : Error code associated with create material point operation.

  **warning_codes: List[WarningCode], optional**
  : Warning codes associated with create material point operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `CreateMaterialPointResults` object with provided parameters.

### Examples

```pycon
>>> create_material_point_results = prime.CreateMaterialPointResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`CreateMaterialPointResults.print_default`](ansys.meshing.prime.CreateMaterialPointResults.print_default.md#ansys.meshing.prime.CreateMaterialPointResults.print_default)()    | Print the default values of `CreateMaterialPointResults` object.   |
| [`CreateMaterialPointResults.set_default`](ansys.meshing.prime.CreateMaterialPointResults.set_default.md#ansys.meshing.prime.CreateMaterialPointResults.set_default)([id, ...]) | Set the default values of the `CreateMaterialPointResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`CreateMaterialPointResults.assigned_name`](ansys.meshing.prime.CreateMaterialPointResults.assigned_name.md#ansys.meshing.prime.CreateMaterialPointResults.assigned_name)   | Assigned name of the material point created.                   |
| [`CreateMaterialPointResults.error_code`](ansys.meshing.prime.CreateMaterialPointResults.error_code.md#ansys.meshing.prime.CreateMaterialPointResults.error_code)            | Error code associated with create material point operation.    |
| [`CreateMaterialPointResults.id`](ansys.meshing.prime.CreateMaterialPointResults.id.md#ansys.meshing.prime.CreateMaterialPointResults.id)                                    | Id of the material point created.                              |
| [`CreateMaterialPointResults.warning_codes`](ansys.meshing.prime.CreateMaterialPointResults.warning_codes.md#ansys.meshing.prime.CreateMaterialPointResults.warning_codes)   | Warning codes associated with create material point operation. |
<!-- vale on -->