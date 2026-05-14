# Part

<a id="ansys.meshing.prime.Part"></a>

### *class* ansys.meshing.prime.Part(model, id, object_id, name)

Part contains zonelets and topoentities.

Topoentities and zonelets are characterized by dimension of entities.
Zonelets are a group of interconnected elements in a mesh. There are three types of zonelets. They are:

* FaceZonelet: A group of interconnected face elements.
* EdgeZonelet: A group of interconnected edge elements.
* CellZonelet: A group of interconnected cell elements.

Topoentities represent connectivity information.
Topoentities can be queried from higher order to lower order topoentities and vice versa.
Topoentities have geometric representation which may be defined by splines or facets.
The mesh generated on topoentities will be projected on geometry representation.

* TopoFace: Topoentity representing surfaces.
* TopoEdge: Topoentity representing curves.
* TopoVolume: Topoentity representing volumes.

* **Parameters:**

  **model**
  : Server model to create Part object.

  **id**
  : Id of the Part.

  **object_id**
  : Object id of the Part.

  **name**
  : Name of the Part.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`Part.add_labels_on_topo_entities`](ansys.meshing.prime.Part.add_labels_on_topo_entities.md#ansys.meshing.prime.Part.add_labels_on_topo_entities)(labels, ...)                                                        | Add the given labels on the provided topoentities.                                                 |
| [`Part.add_labels_on_zonelets`](ansys.meshing.prime.Part.add_labels_on_zonelets.md#ansys.meshing.prime.Part.add_labels_on_zonelets)(labels, zonelets)                                                                  | Add the given labels on the provided zonelets.                                                     |
| [`Part.add_topo_entities_to_zone`](ansys.meshing.prime.Part.add_topo_entities_to_zone.md#ansys.meshing.prime.Part.add_topo_entities_to_zone)(zone_id, ...)                                                             | Add topoentities to zone.                                                                          |
| [`Part.add_volumes_to_zone`](ansys.meshing.prime.Part.add_volumes_to_zone.md#ansys.meshing.prime.Part.add_volumes_to_zone)(zone_id, volumes)                                                                           | Add volumes to zone.                                                                               |
| [`Part.add_zonelets_to_zone`](ansys.meshing.prime.Part.add_zonelets_to_zone.md#ansys.meshing.prime.Part.add_zonelets_to_zone)(zone_id, zonelets)                                                                       | Add zonelets to zone.                                                                              |
| [`Part.compute_closed_volumes`](ansys.meshing.prime.Part.compute_closed_volumes.md#ansys.meshing.prime.Part.compute_closed_volumes)(params)                                                                            | Computes volume by identifying closed volumes defined by face zonelets of the part.                |
| [`Part.compute_topo_volumes`](ansys.meshing.prime.Part.compute_topo_volumes.md#ansys.meshing.prime.Part.compute_topo_volumes)(params)                                                                                  | Compute topovolumes by identifying closed volumes defined by topofaces of the part.                |
| [`Part.delete_topo_entities`](ansys.meshing.prime.Part.delete_topo_entities.md#ansys.meshing.prime.Part.delete_topo_entities)(params)                                                                                  | Delete topoentities of part controled by parameters.                                               |
| [`Part.delete_volumes`](ansys.meshing.prime.Part.delete_volumes.md#ansys.meshing.prime.Part.delete_volumes)(volumes, params)                                                                                           | Delete volumes by deleting its face zonelets.                                                      |
| [`Part.delete_zonelets`](ansys.meshing.prime.Part.delete_zonelets.md#ansys.meshing.prime.Part.delete_zonelets)(zonelets)                                                                                               | Delete given face zonelets.                                                                        |
| [`Part.extract_topo_volumes`](ansys.meshing.prime.Part.extract_topo_volumes.md#ansys.meshing.prime.Part.extract_topo_volumes)(topo_faces, params)                                                                      | Extract topovolumes connected to given cap topofaces.                                              |
| [`Part.extract_volumes`](ansys.meshing.prime.Part.extract_volumes.md#ansys.meshing.prime.Part.extract_volumes)(face_zonelets, params)                                                                                  | Extract volumes connected to given face zonelets.                                                  |
| [`Part.get_adjacent_face_zonelets_of_face_zonelets`](ansys.meshing.prime.Part.get_adjacent_face_zonelets_of_face_zonelets.md#ansys.meshing.prime.Part.get_adjacent_face_zonelets_of_face_zonelets)(...)                | Gets the adjacent facezonelets for the provided facezonelet ids.                                   |
| [`Part.get_adjacent_volumes_of_volumes`](ansys.meshing.prime.Part.get_adjacent_volumes_of_volumes.md#ansys.meshing.prime.Part.get_adjacent_volumes_of_volumes)(volumes)                                                | Get the adjacent volumes for the provided volume ids.                                              |
| [`Part.get_cell_zonelets`](ansys.meshing.prime.Part.get_cell_zonelets.md#ansys.meshing.prime.Part.get_cell_zonelets)()                                                                                                 | Get the cell zonelet ids in the part.                                                              |
| [`Part.get_component_children_by_path`](ansys.meshing.prime.Part.get_component_children_by_path.md#ansys.meshing.prime.Part.get_component_children_by_path)(path, params)                                              | Gets the child components for a component using the given parameters.                              |
| [`Part.get_components_by_path_expression`](ansys.meshing.prime.Part.get_components_by_path_expression.md#ansys.meshing.prime.Part.get_components_by_path_expression)(...)                                              | Gets component names with the provided path expression.                                            |
| [`Part.get_edge_zonelets`](ansys.meshing.prime.Part.get_edge_zonelets.md#ansys.meshing.prime.Part.get_edge_zonelets)()                                                                                                 | Get the edge zonelets of a part.                                                                   |
| [`Part.get_edge_zonelets_of_label_name_pattern`](ansys.meshing.prime.Part.get_edge_zonelets_of_label_name_pattern.md#ansys.meshing.prime.Part.get_edge_zonelets_of_label_name_pattern)(...)                            | Get edge zonelet ids of labels with name matching the given name pattern.                          |
| [`Part.get_edge_zones`](ansys.meshing.prime.Part.get_edge_zones.md#ansys.meshing.prime.Part.get_edge_zones)()                                                                                                          | Get all the edge zones of the part.                                                                |
| [`Part.get_face_zone_of_zonelet`](ansys.meshing.prime.Part.get_face_zone_of_zonelet.md#ansys.meshing.prime.Part.get_face_zone_of_zonelet)(zonelet)                                                                     | Gets the face zone of given zonelet.                                                               |
| [`Part.get_face_zonelets`](ansys.meshing.prime.Part.get_face_zonelets.md#ansys.meshing.prime.Part.get_face_zonelets)()                                                                                                 | Get the face zonelets of a part.                                                                   |
| [`Part.get_face_zonelets_of_component_body_name_pattern`](ansys.meshing.prime.Part.get_face_zonelets_of_component_body_name_pattern.md#ansys.meshing.prime.Part.get_face_zonelets_of_component_body_name_pattern)(...) | Gets face zonelet ids belonging to components or bodies with name matching the given name pattern. |
| [`Part.get_face_zonelets_of_label_name_pattern`](ansys.meshing.prime.Part.get_face_zonelets_of_label_name_pattern.md#ansys.meshing.prime.Part.get_face_zonelets_of_label_name_pattern)(...)                            | Get face zonelet ids of labels with name matching the given name pattern.                          |
| [`Part.get_face_zonelets_of_volumes`](ansys.meshing.prime.Part.get_face_zonelets_of_volumes.md#ansys.meshing.prime.Part.get_face_zonelets_of_volumes)(volumes)                                                         | Get the face zonelets of given volumes.                                                            |
| [`Part.get_face_zonelets_of_zone_name_pattern`](ansys.meshing.prime.Part.get_face_zonelets_of_zone_name_pattern.md#ansys.meshing.prime.Part.get_face_zonelets_of_zone_name_pattern)(...)                               | Get ids of face zonelets of zones with name matching the given name pattern.                       |
| [`Part.get_face_zones`](ansys.meshing.prime.Part.get_face_zones.md#ansys.meshing.prime.Part.get_face_zones)()                                                                                                          | Get all the face zones of the part.                                                                |
| [`Part.get_face_zones_of_name_pattern`](ansys.meshing.prime.Part.get_face_zones_of_name_pattern.md#ansys.meshing.prime.Part.get_face_zones_of_name_pattern)(...)                                                       | Get ids of face zones with name matching the given name pattern.                                   |
| [`Part.get_labels`](ansys.meshing.prime.Part.get_labels.md#ansys.meshing.prime.Part.get_labels)()                                                                                                                      | Get all labels on entities of part.                                                                |
| [`Part.get_labels_on_zonelet`](ansys.meshing.prime.Part.get_labels_on_zonelet.md#ansys.meshing.prime.Part.get_labels_on_zonelet)(zonelet_id)                                                                           | Gets labels associated with zonelet.                                                               |
| [`Part.get_name`](ansys.meshing.prime.Part.get_name.md#ansys.meshing.prime.Part.get_name)()                                                                                                                            | Gets the name of the Part.                                                                         |
| [`Part.get_splines`](ansys.meshing.prime.Part.get_splines.md#ansys.meshing.prime.Part.get_splines)()                                                                                                                   | Gets the list of spline ids.                                                                       |
| [`Part.get_summary`](ansys.meshing.prime.Part.get_summary.md#ansys.meshing.prime.Part.get_summary)(params)                                                                                                             | Get the part summary.                                                                              |
| [`Part.get_topo_edges`](ansys.meshing.prime.Part.get_topo_edges.md#ansys.meshing.prime.Part.get_topo_edges)()                                                                                                          | Get the topoedges of a part.                                                                       |
| [`Part.get_topo_edges_of_label_name_pattern`](ansys.meshing.prime.Part.get_topo_edges_of_label_name_pattern.md#ansys.meshing.prime.Part.get_topo_edges_of_label_name_pattern)(...)                                     | Get topoedge ids of labels with name matching the given name pattern.                              |
| [`Part.get_topo_faces`](ansys.meshing.prime.Part.get_topo_faces.md#ansys.meshing.prime.Part.get_topo_faces)()                                                                                                          | Get the topofaces of a part.                                                                       |
| [`Part.get_topo_faces_of_component_body_name_pattern`](ansys.meshing.prime.Part.get_topo_faces_of_component_body_name_pattern.md#ansys.meshing.prime.Part.get_topo_faces_of_component_body_name_pattern)(...)          | Gets topoface ids of component or bodies with name matching the given name pattern.                |
| [`Part.get_topo_faces_of_label_name_pattern`](ansys.meshing.prime.Part.get_topo_faces_of_label_name_pattern.md#ansys.meshing.prime.Part.get_topo_faces_of_label_name_pattern)(...)                                     | Get topoface ids of labels with name matching the given name pattern.                              |
| [`Part.get_topo_faces_of_topo_volumes`](ansys.meshing.prime.Part.get_topo_faces_of_topo_volumes.md#ansys.meshing.prime.Part.get_topo_faces_of_topo_volumes)(volumes)                                                   | Gets the topofaces of given topovolumes.                                                           |
| [`Part.get_topo_faces_of_zone_name_pattern`](ansys.meshing.prime.Part.get_topo_faces_of_zone_name_pattern.md#ansys.meshing.prime.Part.get_topo_faces_of_zone_name_pattern)(...)                                        | Get topoface ids of zones with name matching the given name pattern.                               |
| [`Part.get_topo_volumes`](ansys.meshing.prime.Part.get_topo_volumes.md#ansys.meshing.prime.Part.get_topo_volumes)()                                                                                                    | Get topovolumes of part.                                                                           |
| [`Part.get_topo_volumes_of_label_name_pattern`](ansys.meshing.prime.Part.get_topo_volumes_of_label_name_pattern.md#ansys.meshing.prime.Part.get_topo_volumes_of_label_name_pattern)(...)                               | Gets the topovolumes of labels of the given label name expression.                                 |
| [`Part.get_topo_volumes_of_zone_name_pattern`](ansys.meshing.prime.Part.get_topo_volumes_of_zone_name_pattern.md#ansys.meshing.prime.Part.get_topo_volumes_of_zone_name_pattern)(...)                                  | Gets the topovolume ids of zones with name matching the given name pattern.                        |
| [`Part.get_unstructured_spline_solid`](ansys.meshing.prime.Part.get_unstructured_spline_solid.md#ansys.meshing.prime.Part.get_unstructured_spline_solid)()                                                             | Gets the unstructured solid spline for the part.                                                   |
| [`Part.get_unstructured_spline_surface`](ansys.meshing.prime.Part.get_unstructured_spline_surface.md#ansys.meshing.prime.Part.get_unstructured_spline_surface)()                                                       | Gets the unstructured surface spline for the part.                                                 |
| [`Part.get_volume_zone_of_volume`](ansys.meshing.prime.Part.get_volume_zone_of_volume.md#ansys.meshing.prime.Part.get_volume_zone_of_volume)(volume)                                                                   | Gets the volume zone of given volume.                                                              |
| [`Part.get_volume_zones`](ansys.meshing.prime.Part.get_volume_zones.md#ansys.meshing.prime.Part.get_volume_zones)()                                                                                                    | Get all the volume zones of the part.                                                              |
| [`Part.get_volume_zones_of_name_pattern`](ansys.meshing.prime.Part.get_volume_zones_of_name_pattern.md#ansys.meshing.prime.Part.get_volume_zones_of_name_pattern)(...)                                                 | Get ids of volume zones with name matching the given name pattern.                                 |
| [`Part.get_volumes`](ansys.meshing.prime.Part.get_volumes.md#ansys.meshing.prime.Part.get_volumes)()                                                                                                                   | Get all the volumes of the part.                                                                   |
| [`Part.get_volumes_of_face_zonelet`](ansys.meshing.prime.Part.get_volumes_of_face_zonelet.md#ansys.meshing.prime.Part.get_volumes_of_face_zonelet)(face_zonelet)                                                       | Get volume ids of given face zonelet.                                                              |
| [`Part.get_volumes_of_zone_name_pattern`](ansys.meshing.prime.Part.get_volumes_of_zone_name_pattern.md#ansys.meshing.prime.Part.get_volumes_of_zone_name_pattern)(...)                                                 | Get volume ids of zones with name matching the given name pattern.                                 |
| [`Part.merge_volumes`](ansys.meshing.prime.Part.merge_volumes.md#ansys.meshing.prime.Part.merge_volumes)(volumes, params)                                                                                              | Merge volumes by removing shared face zonelets.                                                    |
| [`Part.merge_zonelets`](ansys.meshing.prime.Part.merge_zonelets.md#ansys.meshing.prime.Part.merge_zonelets)(zonelets, params)                                                                                          | Merge zonelets.                                                                                    |
| [`Part.remove_labels_from_topo_entities`](ansys.meshing.prime.Part.remove_labels_from_topo_entities.md#ansys.meshing.prime.Part.remove_labels_from_topo_entities)(...)                                                 | Remove the given labels from the provided topoentities.                                            |
| [`Part.remove_labels_from_zonelets`](ansys.meshing.prime.Part.remove_labels_from_zonelets.md#ansys.meshing.prime.Part.remove_labels_from_zonelets)(labels, ...)                                                        | Remove the given labels from the provided zonelets.                                                |
| [`Part.remove_zone_on_topo_entities`](ansys.meshing.prime.Part.remove_zone_on_topo_entities.md#ansys.meshing.prime.Part.remove_zone_on_topo_entities)(topo_entities)                                                   | Removes zone on the given topoentities.                                                            |
| [`Part.remove_zone_on_volumes`](ansys.meshing.prime.Part.remove_zone_on_volumes.md#ansys.meshing.prime.Part.remove_zone_on_volumes)(volumes)                                                                           | Removes zone on the given volumes.                                                                 |
| [`Part.remove_zone_on_zonelets`](ansys.meshing.prime.Part.remove_zone_on_zonelets.md#ansys.meshing.prime.Part.remove_zone_on_zonelets)(zonelets)                                                                       | Removes zone on the given zonelets.                                                                |
| [`Part.set_suggested_name`](ansys.meshing.prime.Part.set_suggested_name.md#ansys.meshing.prime.Part.set_suggested_name)(name)                                                                                          | Set the unique name for the part to a suggested name.                                              |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| [`Part.id`](ansys.meshing.prime.Part.id.md#ansys.meshing.prime.Part.id)                         | Get the id of Part.                                                                   |
| [`Part.name`](ansys.meshing.prime.Part.name.md#ansys.meshing.prime.Part.name)                   | Get the name of Part.                                                                 |
| [`Part.print_id`](ansys.meshing.prime.Part.print_id.md#ansys.meshing.prime.Part.print_id)       | Whether IDs of TopoEntities or zonelets are set to print along with the part summary. |
| [`Part.print_mesh`](ansys.meshing.prime.Part.print_mesh.md#ansys.meshing.prime.Part.print_mesh) | Whether the mesh summary is set to print along with the part summary.                 |
<!-- vale on -->