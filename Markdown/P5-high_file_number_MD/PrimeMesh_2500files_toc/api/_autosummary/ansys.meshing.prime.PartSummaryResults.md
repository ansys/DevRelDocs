<!-- vale off -->

# PartSummaryResults

### *class* ansys.meshing.prime.PartSummaryResults(model=None, message=None, n_topo_edges=None, n_topo_faces=None, n_topo_volumes=None, n_edge_zonelets=None, n_face_zonelets=None, n_cell_zonelets=None, n_edge_zones=None, n_face_zones=None, n_volume_zones=None, n_labels=None, n_nodes=None, n_faces=None, n_cells=None, n_tri_faces=None, n_poly_faces=None, n_quad_faces=None, n_tet_cells=None, n_pyra_cells=None, n_prism_cells=None, n_poly_cells=None, n_hex_cells=None, n_unmeshed_topo_faces=None, json_data=None, \*\*kwargs)

Results of part summary.

<!-- !! processed by numpydoc !! -->

### Methods

| [`PartSummaryResults.print_default`](ansys.meshing.prime.PartSummaryResults.print_default.md#ansys.meshing.prime.PartSummaryResults.print_default)()         | Print the default values of PartSummaryResults.   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| [`PartSummaryResults.set_default`](ansys.meshing.prime.PartSummaryResults.set_default.md#ansys.meshing.prime.PartSummaryResults.set_default)([message, ...]) | Set the default values of PartSummaryResults.     |

### Attributes

| [`PartSummaryResults.message`](ansys.meshing.prime.PartSummaryResults.message.md#ansys.meshing.prime.PartSummaryResults.message)                                           | Part summary text.             |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| [`PartSummaryResults.n_cell_zonelets`](ansys.meshing.prime.PartSummaryResults.n_cell_zonelets.md#ansys.meshing.prime.PartSummaryResults.n_cell_zonelets)                   | Number of cell zonelets.       |
| [`PartSummaryResults.n_cells`](ansys.meshing.prime.PartSummaryResults.n_cells.md#ansys.meshing.prime.PartSummaryResults.n_cells)                                           | Number of cells.               |
| [`PartSummaryResults.n_edge_zonelets`](ansys.meshing.prime.PartSummaryResults.n_edge_zonelets.md#ansys.meshing.prime.PartSummaryResults.n_edge_zonelets)                   | Number of edge zonelets.       |
| [`PartSummaryResults.n_edge_zones`](ansys.meshing.prime.PartSummaryResults.n_edge_zones.md#ansys.meshing.prime.PartSummaryResults.n_edge_zones)                            | Number of edge zones.          |
| [`PartSummaryResults.n_face_zonelets`](ansys.meshing.prime.PartSummaryResults.n_face_zonelets.md#ansys.meshing.prime.PartSummaryResults.n_face_zonelets)                   | Number of face zonelets.       |
| [`PartSummaryResults.n_face_zones`](ansys.meshing.prime.PartSummaryResults.n_face_zones.md#ansys.meshing.prime.PartSummaryResults.n_face_zones)                            | Number of face zones.          |
| [`PartSummaryResults.n_faces`](ansys.meshing.prime.PartSummaryResults.n_faces.md#ansys.meshing.prime.PartSummaryResults.n_faces)                                           | Number of faces.               |
| [`PartSummaryResults.n_hex_cells`](ansys.meshing.prime.PartSummaryResults.n_hex_cells.md#ansys.meshing.prime.PartSummaryResults.n_hex_cells)                               | Number of hexahedral cells.    |
| [`PartSummaryResults.n_labels`](ansys.meshing.prime.PartSummaryResults.n_labels.md#ansys.meshing.prime.PartSummaryResults.n_labels)                                        | Number of labels.              |
| [`PartSummaryResults.n_nodes`](ansys.meshing.prime.PartSummaryResults.n_nodes.md#ansys.meshing.prime.PartSummaryResults.n_nodes)                                           | Number of nodes.               |
| [`PartSummaryResults.n_poly_cells`](ansys.meshing.prime.PartSummaryResults.n_poly_cells.md#ansys.meshing.prime.PartSummaryResults.n_poly_cells)                            | Number of polyhedral cells.    |
| [`PartSummaryResults.n_poly_faces`](ansys.meshing.prime.PartSummaryResults.n_poly_faces.md#ansys.meshing.prime.PartSummaryResults.n_poly_faces)                            | Number of polygonal faces.     |
| [`PartSummaryResults.n_prism_cells`](ansys.meshing.prime.PartSummaryResults.n_prism_cells.md#ansys.meshing.prime.PartSummaryResults.n_prism_cells)                         | Number of prism cells.         |
| [`PartSummaryResults.n_pyra_cells`](ansys.meshing.prime.PartSummaryResults.n_pyra_cells.md#ansys.meshing.prime.PartSummaryResults.n_pyra_cells)                            | Number of pyramid cells.       |
| [`PartSummaryResults.n_quad_faces`](ansys.meshing.prime.PartSummaryResults.n_quad_faces.md#ansys.meshing.prime.PartSummaryResults.n_quad_faces)                            | Number of quadrilateral faces. |
| [`PartSummaryResults.n_tet_cells`](ansys.meshing.prime.PartSummaryResults.n_tet_cells.md#ansys.meshing.prime.PartSummaryResults.n_tet_cells)                               | Number of tetrahedral cells.   |
| [`PartSummaryResults.n_topo_edges`](ansys.meshing.prime.PartSummaryResults.n_topo_edges.md#ansys.meshing.prime.PartSummaryResults.n_topo_edges)                            | Number of topoedges.           |
| [`PartSummaryResults.n_topo_faces`](ansys.meshing.prime.PartSummaryResults.n_topo_faces.md#ansys.meshing.prime.PartSummaryResults.n_topo_faces)                            | Number of topofaces.           |
| [`PartSummaryResults.n_topo_volumes`](ansys.meshing.prime.PartSummaryResults.n_topo_volumes.md#ansys.meshing.prime.PartSummaryResults.n_topo_volumes)                      | Number of topovolumes.         |
| [`PartSummaryResults.n_tri_faces`](ansys.meshing.prime.PartSummaryResults.n_tri_faces.md#ansys.meshing.prime.PartSummaryResults.n_tri_faces)                               | Number of triangular faces.    |
| [`PartSummaryResults.n_unmeshed_topo_faces`](ansys.meshing.prime.PartSummaryResults.n_unmeshed_topo_faces.md#ansys.meshing.prime.PartSummaryResults.n_unmeshed_topo_faces) | Number of unmeshed topofaces.  |
| [`PartSummaryResults.n_volume_zones`](ansys.meshing.prime.PartSummaryResults.n_volume_zones.md#ansys.meshing.prime.PartSummaryResults.n_volume_zones)                      | Number of volume zones.        |
<!-- vale on -->
