# DeleteTopoEntitiesResults

<a id="ansys.meshing.prime.DeleteTopoEntitiesResults"></a>

### *class* ansys.meshing.prime.DeleteTopoEntitiesResults(model=None, error_code=None, json_data=None, \*\*kwargs)

Results associated with delete topoentities.

* **Parameters:**

  **model: Model**
  : Model to create a `DeleteTopoEntitiesResults` object with default parameters.

  **error_code: ErrorCode, optional**
  : Error code associated with delete topoentities.

  **json_data: dict, optional**
  : JSON dictionary to create a `DeleteTopoEntitiesResults` object with provided parameters.

### Examples

```pycon
>>> delete_topo_entities_results = prime.DeleteTopoEntitiesResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
| [`DeleteTopoEntitiesResults.print_default`](ansys.meshing.prime.DeleteTopoEntitiesResults.print_default.md#ansys.meshing.prime.DeleteTopoEntitiesResults.print_default)()   | Print the default values of `DeleteTopoEntitiesResults` object.   |
| [`DeleteTopoEntitiesResults.set_default`](ansys.meshing.prime.DeleteTopoEntitiesResults.set_default.md#ansys.meshing.prime.DeleteTopoEntitiesResults.set_default)([...])    | Set the default values of the `DeleteTopoEntitiesResults` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`DeleteTopoEntitiesResults.error_code`](ansys.meshing.prime.DeleteTopoEntitiesResults.error_code.md#ansys.meshing.prime.DeleteTopoEntitiesResults.error_code)   | Error code associated with delete topoentities.   |
<!-- vale on -->