# set_default

<a id="ansys.meshing.prime.EdgeConnectivityResults.set_default"></a>

#### *static* EdgeConnectivityResults.set_default(error_code=None, edge_zonelet_ids=None, topo_edge_ids=None, mesh_edge_ids=None, topo_edge_types=None, num_nodes_per_edge_zonelet=None, node_coords=None, num_edge_list_per_edge_zonelet=None, edge_list=None, num_edges_per_edge_zonelet=None)

Set the default values of the `EdgeConnectivityResults` object.

* **Parameters:**

  **error_code: ErrorCode, optional**
  : Error code associated with the get edge connectivity operation.

  **edge_zonelet_ids: Iterable[int], optional**
  : Edge zonelet ids for which connectivity data is available.

  **topo_edge_ids: Iterable[int], optional**
  : TopoEdge ids corresponding to each edge zonelet id for topology based mesh.

  **mesh_edge_ids: Iterable[int], optional**
  : Mesh edge ids corresponding to each topoedge.

  **topo_edge_types: Iterable[int], optional**
  : TopoEdge type corresponding to each topoedge.

  **num_nodes_per_edge_zonelet: Iterable[int], optional**
  : Number of nodes per edge zonelet.

  **node_coords: Iterable[float], optional**
  : Node coordinates describing edges of edge zonelet.

  **num_edge_list_per_edge_zonelet: Iterable[int], optional**
  : Number of edge list per edge zonelet.

  **edge_list: Iterable[int], optional**
  : Edge list describing connectivity of node coordinates.

  **num_edges_per_edge_zonelet: Iterable[int], optional**
  : Number of edges per edge zonelet.

<!-- !! processed by numpydoc !! -->
