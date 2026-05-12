# TopoData

<a id="ansys.meshing.prime.TopoData"></a>

### *class* ansys.meshing.prime.TopoData(model, id, object_id, name)

Topodata has all information about connectivity of nodes, edges, elements and more.

* **Parameters:**

  **model**
  : Server model to create TopoData object.

  **id**
  : Id of the TopoData.

  **object_id**
  : Object id of the TopoData.

  **name**
  : Name of the TopoData.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`TopoData.delete_mesh_on_topo_faces`](ansys.meshing.prime.TopoData.delete_mesh_on_topo_faces.md#ansys.meshing.prime.TopoData.delete_mesh_on_topo_faces)(...)                                     | Delete mesh on the provided topofaces.                        |
| [`TopoData.get_adjacent_topo_edges_of_topo_edges`](ansys.meshing.prime.TopoData.get_adjacent_topo_edges_of_topo_edges.md#ansys.meshing.prime.TopoData.get_adjacent_topo_edges_of_topo_edges)(...) | Get the adjacent topoedges for the provided topoedge ids.     |
| [`TopoData.get_adjacent_topo_faces_of_topo_faces`](ansys.meshing.prime.TopoData.get_adjacent_topo_faces_of_topo_faces.md#ansys.meshing.prime.TopoData.get_adjacent_topo_faces_of_topo_faces)(...) | Get the adjacent topofaces for the provided topoface ids.     |
| [`TopoData.get_geom_zonelets_of_topo_edges`](ansys.meshing.prime.TopoData.get_geom_zonelets_of_topo_edges.md#ansys.meshing.prime.TopoData.get_geom_zonelets_of_topo_edges)(...)                   | Get the geometry edge zonelets for the provided topoedge ids. |
| [`TopoData.get_geom_zonelets_of_topo_faces`](ansys.meshing.prime.TopoData.get_geom_zonelets_of_topo_faces.md#ansys.meshing.prime.TopoData.get_geom_zonelets_of_topo_faces)(...)                   | Get the geometry face zonelets for the provided topoface ids. |
| [`TopoData.get_mesh_zonelets_of_topo_edges`](ansys.meshing.prime.TopoData.get_mesh_zonelets_of_topo_edges.md#ansys.meshing.prime.TopoData.get_mesh_zonelets_of_topo_edges)(...)                   | Get the mesh edge zonelets for the provided topoedge ids.     |
| [`TopoData.get_mesh_zonelets_of_topo_faces`](ansys.meshing.prime.TopoData.get_mesh_zonelets_of_topo_faces.md#ansys.meshing.prime.TopoData.get_mesh_zonelets_of_topo_faces)(...)                   | Get the mesh face zonelets for the provided topoface ids.     |
| [`TopoData.get_topo_edges_of_topo_faces`](ansys.meshing.prime.TopoData.get_topo_edges_of_topo_faces.md#ansys.meshing.prime.TopoData.get_topo_edges_of_topo_faces)(topo_faces)                     | Get the topoedges of the provided topoface ids.               |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------|---------------------------|
| [`TopoData.id`](ansys.meshing.prime.TopoData.id.md#ansys.meshing.prime.TopoData.id)       | Get the id of TopoData.   |
| [`TopoData.name`](ansys.meshing.prime.TopoData.name.md#ansys.meshing.prime.TopoData.name) | Get the name of TopoData. |
<!-- vale on -->