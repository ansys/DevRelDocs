# set_default

<a id="ansys.meshing.prime.OptimizeQuadMeshParams.set_default"></a>

#### *static* OptimizeQuadMeshParams.set_default(suppress_topo_edge_and_mesh_cleanup=None, edge_mesh_constant_size=None, surface_mesh_constant_size=None, generate_quads=None, project_on_geometry=None, delete_interior_nodes_params=None)

Set the default values of the `OptimizeQuadMeshParams` object.

* **Parameters:**

  **suppress_topo_edge_and_mesh_cleanup: bool, optional**
  : Option to suppress topoedges and clean up mesh.

  **edge_mesh_constant_size: float, optional**
  : Constant size used for edge meshing.

  **surface_mesh_constant_size: float, optional**
  : Constant size used for surface meshing.

  **generate_quads: bool, optional**
  : Option to generate quadrilateral surface mesh.

  **project_on_geometry: bool, optional**
  : Option to project on geometry when meshing.

  **delete_interior_nodes_params: DeleteInteriorNodesParams, optional**
  : Parameters to control delete interior nodes operation.

<!-- !! processed by numpydoc !! -->
