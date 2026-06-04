# CheckTopologyParams

<a id="ansys.meshing.prime.CheckTopologyParams"></a>

### *class* ansys.meshing.prime.CheckTopologyParams(model=None, topo_search_field_mask=None, json_data=None, \*\*kwargs)

Parameters for check topology operations.

* **Parameters:**

  **model: Model**
  : Model to create a `CheckTopologyParams` object with default parameters.

  **topo_search_field_mask: int, optional**
  : Toposearch field option for topology check.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `CheckTopologyParams` object with provided parameters.

### Examples

```pycon
>>> check_topology_params = prime.CheckTopologyParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| [`CheckTopologyParams.print_default`](ansys.meshing.prime.CheckTopologyParams.print_default.md#ansys.meshing.prime.CheckTopologyParams.print_default)()   | Print the default values of `CheckTopologyParams` object.   |
| [`CheckTopologyParams.set_default`](ansys.meshing.prime.CheckTopologyParams.set_default.md#ansys.meshing.prime.CheckTopologyParams.set_default)([...])    | Set the default values of the `CheckTopologyParams` object. |

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| [`CheckTopologyParams.topo_search_field_mask`](ansys.meshing.prime.CheckTopologyParams.topo_search_field_mask.md#ansys.meshing.prime.CheckTopologyParams.topo_search_field_mask)   | Toposearch field option for topology check.   |
<!-- vale on -->