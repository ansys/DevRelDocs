# OptimizeQuadMeshParams

<a id="ansys.meshing.prime.OptimizeQuadMeshParams"></a>

### *class* ansys.meshing.prime.OptimizeQuadMeshParams(model=None, suppress_topo_edge_and_mesh_cleanup=None, edge_mesh_constant_size=None, surface_mesh_constant_size=None, generate_quads=None, project_on_geometry=None, delete_interior_nodes_params=None, json_data=None, \*\*kwargs)

Parameters for optimize quad mesh operations.

* **Parameters:**

  **model: Model**
  : Model to create a `OptimizeQuadMeshParams` object with default parameters.

  **suppress_topo_edge_and_mesh_cleanup: bool, optional**
  : Option to suppress topoedges and clean up mesh.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **edge_mesh_constant_size: float, optional**
  : Constant size used for edge meshing.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **surface_mesh_constant_size: float, optional**
  : Constant size used for surface meshing.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **generate_quads: bool, optional**
  : Option to generate quadrilateral surface mesh.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **project_on_geometry: bool, optional**
  : Option to project on geometry when meshing.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **delete_interior_nodes_params: DeleteInteriorNodesParams, optional**
  : Parameters to control delete interior nodes operation.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `OptimizeQuadMeshParams` object with provided parameters.

### Examples

```pycon
>>> optimize_quad_mesh_params = prime.OptimizeQuadMeshParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`OptimizeQuadMeshParams.print_default`](ansys.meshing.prime.OptimizeQuadMeshParams.print_default.md#ansys.meshing.prime.OptimizeQuadMeshParams.print_default)()   | Print the default values of `OptimizeQuadMeshParams` object.   |
| [`OptimizeQuadMeshParams.set_default`](ansys.meshing.prime.OptimizeQuadMeshParams.set_default.md#ansys.meshing.prime.OptimizeQuadMeshParams.set_default)([...])    | Set the default values of the `OptimizeQuadMeshParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| [`OptimizeQuadMeshParams.delete_interior_nodes_params`](ansys.meshing.prime.OptimizeQuadMeshParams.delete_interior_nodes_params.md#ansys.meshing.prime.OptimizeQuadMeshParams.delete_interior_nodes_params)                      | Parameters to control delete interior nodes operation.   |
| [`OptimizeQuadMeshParams.edge_mesh_constant_size`](ansys.meshing.prime.OptimizeQuadMeshParams.edge_mesh_constant_size.md#ansys.meshing.prime.OptimizeQuadMeshParams.edge_mesh_constant_size)                                     | Constant size used for edge meshing.                     |
| [`OptimizeQuadMeshParams.generate_quads`](ansys.meshing.prime.OptimizeQuadMeshParams.generate_quads.md#ansys.meshing.prime.OptimizeQuadMeshParams.generate_quads)                                                                | Option to generate quadrilateral surface mesh.           |
| [`OptimizeQuadMeshParams.project_on_geometry`](ansys.meshing.prime.OptimizeQuadMeshParams.project_on_geometry.md#ansys.meshing.prime.OptimizeQuadMeshParams.project_on_geometry)                                                 | Option to project on geometry when meshing.              |
| [`OptimizeQuadMeshParams.suppress_topo_edge_and_mesh_cleanup`](ansys.meshing.prime.OptimizeQuadMeshParams.suppress_topo_edge_and_mesh_cleanup.md#ansys.meshing.prime.OptimizeQuadMeshParams.suppress_topo_edge_and_mesh_cleanup) | Option to suppress topoedges and clean up mesh.          |
| [`OptimizeQuadMeshParams.surface_mesh_constant_size`](ansys.meshing.prime.OptimizeQuadMeshParams.surface_mesh_constant_size.md#ansys.meshing.prime.OptimizeQuadMeshParams.surface_mesh_constant_size)                            | Constant size used for surface meshing.                  |
<!-- vale on -->