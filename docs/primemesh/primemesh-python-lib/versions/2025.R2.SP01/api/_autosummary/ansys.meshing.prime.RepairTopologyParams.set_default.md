# set_default

<a id="ansys.meshing.prime.RepairTopologyParams.set_default"></a>

#### *static* RepairTopologyParams.set_default(connect_faces=None, repair_edges=None, split_topo_edges_at_apex_point=None, fillet_max_radius=None, smallest_edge_length=None, merge_edge_allow_self_close=None, suppress_shared_edges_when_merging=None, edge_connect_type=None, connect_faces_params=None, repair_edges_params=None)

Set the default values of the `RepairTopologyParams` object.

* **Parameters:**

  **connect_faces: bool, optional**
  : Option to connect faces.

  **repair_edges: bool, optional**
  : Option to repair edges.

  **split_topo_edges_at_apex_point: bool, optional**
  : Option to split edges at apex point.

  **fillet_max_radius: float, optional**
  : Maximum radius of fillets to be detected.

  **smallest_edge_length: float, optional**
  : Length of smallest edge for which split is applied.

  **merge_edge_allow_self_close: bool, optional**
  : Option for merging self-closing edge loops.

  **suppress_shared_edges_when_merging: bool, optional**
  : Option for suppressing shared edges when merging.

  **edge_connect_type: int, optional**
  : Edge connection type.

  **connect_faces_params: ConnectFacesParams, optional**
  : Parameters for connect faces operation.

  **repair_edges_params: RepairEdgesParams, optional**
  : Parameters for repair edges operation.

<!-- !! processed by numpydoc !! -->
