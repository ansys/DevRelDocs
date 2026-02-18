# ProjectOnGeometryParams

<a id="ansys.meshing.prime.ProjectOnGeometryParams"></a>

### *class* ansys.meshing.prime.ProjectOnGeometryParams(model=None, project_only_mid_nodes=None, project_on_facets_if_cadnot_found=None, json_data=None, \*\*kwargs)

Parameters used to project topoface nodes on associated geometry.

* **Parameters:**

  **model: Model**
  : Model to create a `ProjectOnGeometryParams` object with default parameters.

  **project_only_mid_nodes: bool, optional**
  : Option to project only the mid nodes.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **project_on_facets_if_cadnot_found: bool, optional**
  : Option to project on facet if geometry is not found.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `ProjectOnGeometryParams` object with provided parameters.

### Examples

```pycon
>>> project_on_geometry_params = prime.ProjectOnGeometryParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [`ProjectOnGeometryParams.print_default`](ansys.meshing.prime.ProjectOnGeometryParams.print_default.md#ansys.meshing.prime.ProjectOnGeometryParams.print_default)()   | Print the default values of `ProjectOnGeometryParams` object.   |
| [`ProjectOnGeometryParams.set_default`](ansys.meshing.prime.ProjectOnGeometryParams.set_default.md#ansys.meshing.prime.ProjectOnGeometryParams.set_default)([...])    | Set the default values of the `ProjectOnGeometryParams` object. |

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`ProjectOnGeometryParams.project_on_facets_if_cadnot_found`](ansys.meshing.prime.ProjectOnGeometryParams.project_on_facets_if_cadnot_found.md#ansys.meshing.prime.ProjectOnGeometryParams.project_on_facets_if_cadnot_found)   | Option to project on facet if geometry is not found.   |
| [`ProjectOnGeometryParams.project_only_mid_nodes`](ansys.meshing.prime.ProjectOnGeometryParams.project_only_mid_nodes.md#ansys.meshing.prime.ProjectOnGeometryParams.project_only_mid_nodes)                                    | Option to project only the mid nodes.                  |
<!-- vale on -->