# DeleteMaterialPointResults

<a id="ansys.meshing.prime.DeleteMaterialPointResults"></a>

### *class* ansys.meshing.prime.DeleteMaterialPointResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with delete material point operation.

* **Parameters:**

  **model: Model**
  : Model to create a `DeleteMaterialPointResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with the failure of operation.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteMaterialPointResults` object with provided parameters.

### Examples

```pycon
>>> delete_material_point_results = prime.DeleteMaterialPointResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| [`DeleteMaterialPointResults.print_default`](ansys.meshing.prime.DeleteMaterialPointResults.print_default.md#ansys.meshing.prime.DeleteMaterialPointResults.print_default)()   | Print the default values of `DeleteMaterialPointResults` object.   |
| [`DeleteMaterialPointResults.set_default`](ansys.meshing.prime.DeleteMaterialPointResults.set_default.md#ansys.meshing.prime.DeleteMaterialPointResults.set_default)([...])    | Set the default values of the `DeleteMaterialPointResults` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`DeleteMaterialPointResults.error_code`](ansys.meshing.prime.DeleteMaterialPointResults.error_code.md#ansys.meshing.prime.DeleteMaterialPointResults.error_code)   | Error code associated with the failure of operation.   |
<!-- vale on -->