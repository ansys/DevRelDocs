<!-- vale off -->

# EdgeConnectivityResults

### *class* ansys.meshing.prime.EdgeConnectivityResults(model=None, error_code=None, edge_zonelet_ids=None, topo_edge_ids=None, mesh_edge_ids=None, topo_edge_types=None, num_nodes_per_edge_zonelet=None, node_coords=None, num_edge_list_per_edge_zonelet=None, edge_list=None, num_edges_per_edge_zonelet=None, json_data=None, \*\*kwargs)

Result of the edge connectivity information.

<!-- !! processed by numpydoc !! -->

### Methods

| [`EdgeConnectivityResults.print_default`](ansys.meshing.prime.EdgeConnectivityResults.print_default.md#ansys.meshing.prime.EdgeConnectivityResults.print_default)()   | Print the default values of EdgeConnectivityResults.   |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| [`EdgeConnectivityResults.set_default`](ansys.meshing.prime.EdgeConnectivityResults.set_default.md#ansys.meshing.prime.EdgeConnectivityResults.set_default)([...])    | Set the default values of EdgeConnectivityResults.     |

### Attributes

| [`EdgeConnectivityResults.edge_list`](ansys.meshing.prime.EdgeConnectivityResults.edge_list.md#ansys.meshing.prime.EdgeConnectivityResults.edge_list)                                                                | Edge list describing connectivity of node coordinates.                      |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| [`EdgeConnectivityResults.edge_zonelet_ids`](ansys.meshing.prime.EdgeConnectivityResults.edge_zonelet_ids.md#ansys.meshing.prime.EdgeConnectivityResults.edge_zonelet_ids)                                           | Edge zonelet ids for which connectivity data is available.                  |
| [`EdgeConnectivityResults.error_code`](ansys.meshing.prime.EdgeConnectivityResults.error_code.md#ansys.meshing.prime.EdgeConnectivityResults.error_code)                                                             | Error code associated with the get edge connectivity operation.             |
| [`EdgeConnectivityResults.mesh_edge_ids`](ansys.meshing.prime.EdgeConnectivityResults.mesh_edge_ids.md#ansys.meshing.prime.EdgeConnectivityResults.mesh_edge_ids)                                                    | Mesh edge ids corresponding to each topoedge.                               |
| [`EdgeConnectivityResults.node_coords`](ansys.meshing.prime.EdgeConnectivityResults.node_coords.md#ansys.meshing.prime.EdgeConnectivityResults.node_coords)                                                          | Node coordinates describing edges of edge zonelet.                          |
| [`EdgeConnectivityResults.num_edge_list_per_edge_zonelet`](ansys.meshing.prime.EdgeConnectivityResults.num_edge_list_per_edge_zonelet.md#ansys.meshing.prime.EdgeConnectivityResults.num_edge_list_per_edge_zonelet) | Number of edge list per edge zonelet.                                       |
| [`EdgeConnectivityResults.num_edges_per_edge_zonelet`](ansys.meshing.prime.EdgeConnectivityResults.num_edges_per_edge_zonelet.md#ansys.meshing.prime.EdgeConnectivityResults.num_edges_per_edge_zonelet)             | Number of edges per edge zonelet.                                           |
| [`EdgeConnectivityResults.num_nodes_per_edge_zonelet`](ansys.meshing.prime.EdgeConnectivityResults.num_nodes_per_edge_zonelet.md#ansys.meshing.prime.EdgeConnectivityResults.num_nodes_per_edge_zonelet)             | Number of nodes per edge zonelet.                                           |
| [`EdgeConnectivityResults.topo_edge_ids`](ansys.meshing.prime.EdgeConnectivityResults.topo_edge_ids.md#ansys.meshing.prime.EdgeConnectivityResults.topo_edge_ids)                                                    | TopoEdge ids corresponding to each edge zonelet id for topology based mesh. |
| [`EdgeConnectivityResults.topo_edge_types`](ansys.meshing.prime.EdgeConnectivityResults.topo_edge_types.md#ansys.meshing.prime.EdgeConnectivityResults.topo_edge_types)                                              | TopoEdge type corresponding to each topoedge.                               |
<!-- vale on -->
