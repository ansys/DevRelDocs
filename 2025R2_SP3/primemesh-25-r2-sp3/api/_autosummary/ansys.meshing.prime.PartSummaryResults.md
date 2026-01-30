# PartSummaryResults

<a id="ansys.meshing.prime.PartSummaryResults"></a>

### *class* ansys.meshing.prime.PartSummaryResults(model=None, message=None, n_topo_edges=None, n_topo_faces=None, n_topo_volumes=None, n_edge_zonelets=None, n_face_zonelets=None, n_cell_zonelets=None, n_edge_zones=None, n_face_zones=None, n_volume_zones=None, n_labels=None, n_nodes=None, n_faces=None, n_cells=None, n_tri_faces=None, n_poly_faces=None, n_quad_faces=None, n_second_order_tri_faces=None, n_second_order_quad_faces=None, n_tet_cells=None, n_pyra_cells=None, n_prism_cells=None, n_poly_cells=None, n_hex_cells=None, n_second_order_tet_cells=None, n_second_order_pyra_cells=None, n_second_order_prism_cells=None, n_second_order_hex_cells=None, n_unmeshed_topo_faces=None, json_data=None, \*\*kwargs)

Results of part summary.

* **Parameters:**

  **model: Model**
  : Model to create a `PartSummaryResults` object with default parameters.

  **message: str, optional**
  : Part summary text.

  **n_topo_edges: int, optional**
  : Number of topoedges.

  **n_topo_faces: int, optional**
  : Number of topofaces.

  **n_topo_volumes: int, optional**
  : Number of topovolumes.

  **n_edge_zonelets: int, optional**
  : Number of edge zonelets.

  **n_face_zonelets: int, optional**
  : Number of face zonelets.

  **n_cell_zonelets: int, optional**
  : Number of cell zonelets.

  **n_edge_zones: int, optional**
  : Number of edge zones.

  **n_face_zones: int, optional**
  : Number of face zones.

  **n_volume_zones: int, optional**
  : Number of volume zones.

  **n_labels: int, optional**
  : Number of labels.

  **n_nodes: int, optional**
  : Number of nodes.

  **n_faces: int, optional**
  : Number of faces.

  **n_cells: int, optional**
  : Number of cells.

  **n_tri_faces: int, optional**
  : Number of triangular faces.

  **n_poly_faces: int, optional**
  : Number of polygonal faces.

  **n_quad_faces: int, optional**
  : Number of quadrilateral faces.

  **n_second_order_tri_faces: int, optional**
  : Number of second order triangular faces.

  **n_second_order_quad_faces: int, optional**
  : Number of second order quadrilateral faces.

  **n_tet_cells: int, optional**
  : Number of tetrahedral cells.

  **n_pyra_cells: int, optional**
  : Number of pyramid cells.

  **n_prism_cells: int, optional**
  : Number of prism cells.

  **n_poly_cells: int, optional**
  : Number of polyhedral cells.

  **n_hex_cells: int, optional**
  : Number of hexahedral cells.

  **n_second_order_tet_cells: int, optional**
  : Number of second order tetrahedral cells.

  **n_second_order_pyra_cells: int, optional**
  : Number of second order pyramid cells.

  **n_second_order_prism_cells: int, optional**
  : Number of second order prism cells.

  **n_second_order_hex_cells: int, optional**
  : Number of second order hexahedral cells.

  **n_unmeshed_topo_faces: int, optional**
  : Number of unmeshed topofaces.

  **json_data: dict, optional**
  : JSON dictionary to create a `PartSummaryResults` object with provided parameters.

### Examples

```pycon
>>> part_summary_results = prime.PartSummaryResults(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| [`PartSummaryResults.print_default`](ansys.meshing.prime.PartSummaryResults.print_default.md#ansys.meshing.prime.PartSummaryResults.print_default)()         | Print the default values of `PartSummaryResults` object.   |
| [`PartSummaryResults.set_default`](ansys.meshing.prime.PartSummaryResults.set_default.md#ansys.meshing.prime.PartSummaryResults.set_default)([message, ...]) | Set the default values of the `PartSummaryResults` object. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`PartSummaryResults.message`](ansys.meshing.prime.PartSummaryResults.message.md#ansys.meshing.prime.PartSummaryResults.message)                                                          | Part summary text.                          |
| [`PartSummaryResults.n_cell_zonelets`](ansys.meshing.prime.PartSummaryResults.n_cell_zonelets.md#ansys.meshing.prime.PartSummaryResults.n_cell_zonelets)                                  | Number of cell zonelets.                    |
| [`PartSummaryResults.n_cells`](ansys.meshing.prime.PartSummaryResults.n_cells.md#ansys.meshing.prime.PartSummaryResults.n_cells)                                                          | Number of cells.                            |
| [`PartSummaryResults.n_edge_zonelets`](ansys.meshing.prime.PartSummaryResults.n_edge_zonelets.md#ansys.meshing.prime.PartSummaryResults.n_edge_zonelets)                                  | Number of edge zonelets.                    |
| [`PartSummaryResults.n_edge_zones`](ansys.meshing.prime.PartSummaryResults.n_edge_zones.md#ansys.meshing.prime.PartSummaryResults.n_edge_zones)                                           | Number of edge zones.                       |
| [`PartSummaryResults.n_face_zonelets`](ansys.meshing.prime.PartSummaryResults.n_face_zonelets.md#ansys.meshing.prime.PartSummaryResults.n_face_zonelets)                                  | Number of face zonelets.                    |
| [`PartSummaryResults.n_face_zones`](ansys.meshing.prime.PartSummaryResults.n_face_zones.md#ansys.meshing.prime.PartSummaryResults.n_face_zones)                                           | Number of face zones.                       |
| [`PartSummaryResults.n_faces`](ansys.meshing.prime.PartSummaryResults.n_faces.md#ansys.meshing.prime.PartSummaryResults.n_faces)                                                          | Number of faces.                            |
| [`PartSummaryResults.n_hex_cells`](ansys.meshing.prime.PartSummaryResults.n_hex_cells.md#ansys.meshing.prime.PartSummaryResults.n_hex_cells)                                              | Number of hexahedral cells.                 |
| [`PartSummaryResults.n_labels`](ansys.meshing.prime.PartSummaryResults.n_labels.md#ansys.meshing.prime.PartSummaryResults.n_labels)                                                       | Number of labels.                           |
| [`PartSummaryResults.n_nodes`](ansys.meshing.prime.PartSummaryResults.n_nodes.md#ansys.meshing.prime.PartSummaryResults.n_nodes)                                                          | Number of nodes.                            |
| [`PartSummaryResults.n_poly_cells`](ansys.meshing.prime.PartSummaryResults.n_poly_cells.md#ansys.meshing.prime.PartSummaryResults.n_poly_cells)                                           | Number of polyhedral cells.                 |
| [`PartSummaryResults.n_poly_faces`](ansys.meshing.prime.PartSummaryResults.n_poly_faces.md#ansys.meshing.prime.PartSummaryResults.n_poly_faces)                                           | Number of polygonal faces.                  |
| [`PartSummaryResults.n_prism_cells`](ansys.meshing.prime.PartSummaryResults.n_prism_cells.md#ansys.meshing.prime.PartSummaryResults.n_prism_cells)                                        | Number of prism cells.                      |
| [`PartSummaryResults.n_pyra_cells`](ansys.meshing.prime.PartSummaryResults.n_pyra_cells.md#ansys.meshing.prime.PartSummaryResults.n_pyra_cells)                                           | Number of pyramid cells.                    |
| [`PartSummaryResults.n_quad_faces`](ansys.meshing.prime.PartSummaryResults.n_quad_faces.md#ansys.meshing.prime.PartSummaryResults.n_quad_faces)                                           | Number of quadrilateral faces.              |
| [`PartSummaryResults.n_second_order_hex_cells`](ansys.meshing.prime.PartSummaryResults.n_second_order_hex_cells.md#ansys.meshing.prime.PartSummaryResults.n_second_order_hex_cells)       | Number of second order hexahedral cells.    |
| [`PartSummaryResults.n_second_order_prism_cells`](ansys.meshing.prime.PartSummaryResults.n_second_order_prism_cells.md#ansys.meshing.prime.PartSummaryResults.n_second_order_prism_cells) | Number of second order prism cells.         |
| [`PartSummaryResults.n_second_order_pyra_cells`](ansys.meshing.prime.PartSummaryResults.n_second_order_pyra_cells.md#ansys.meshing.prime.PartSummaryResults.n_second_order_pyra_cells)    | Number of second order pyramid cells.       |
| [`PartSummaryResults.n_second_order_quad_faces`](ansys.meshing.prime.PartSummaryResults.n_second_order_quad_faces.md#ansys.meshing.prime.PartSummaryResults.n_second_order_quad_faces)    | Number of second order quadrilateral faces. |
| [`PartSummaryResults.n_second_order_tet_cells`](ansys.meshing.prime.PartSummaryResults.n_second_order_tet_cells.md#ansys.meshing.prime.PartSummaryResults.n_second_order_tet_cells)       | Number of second order tetrahedral cells.   |
| [`PartSummaryResults.n_second_order_tri_faces`](ansys.meshing.prime.PartSummaryResults.n_second_order_tri_faces.md#ansys.meshing.prime.PartSummaryResults.n_second_order_tri_faces)       | Number of second order triangular faces.    |
| [`PartSummaryResults.n_tet_cells`](ansys.meshing.prime.PartSummaryResults.n_tet_cells.md#ansys.meshing.prime.PartSummaryResults.n_tet_cells)                                              | Number of tetrahedral cells.                |
| [`PartSummaryResults.n_topo_edges`](ansys.meshing.prime.PartSummaryResults.n_topo_edges.md#ansys.meshing.prime.PartSummaryResults.n_topo_edges)                                           | Number of topoedges.                        |
| [`PartSummaryResults.n_topo_faces`](ansys.meshing.prime.PartSummaryResults.n_topo_faces.md#ansys.meshing.prime.PartSummaryResults.n_topo_faces)                                           | Number of topofaces.                        |
| [`PartSummaryResults.n_topo_volumes`](ansys.meshing.prime.PartSummaryResults.n_topo_volumes.md#ansys.meshing.prime.PartSummaryResults.n_topo_volumes)                                     | Number of topovolumes.                      |
| [`PartSummaryResults.n_tri_faces`](ansys.meshing.prime.PartSummaryResults.n_tri_faces.md#ansys.meshing.prime.PartSummaryResults.n_tri_faces)                                              | Number of triangular faces.                 |
| [`PartSummaryResults.n_unmeshed_topo_faces`](ansys.meshing.prime.PartSummaryResults.n_unmeshed_topo_faces.md#ansys.meshing.prime.PartSummaryResults.n_unmeshed_topo_faces)                | Number of unmeshed topofaces.               |
| [`PartSummaryResults.n_volume_zones`](ansys.meshing.prime.PartSummaryResults.n_volume_zones.md#ansys.meshing.prime.PartSummaryResults.n_volume_zones)                                     | Number of volume zones.                     |
<!-- vale on -->