# ImportedModelingPly

<a id="compolyx.ImportedModelingPly"></a>

### *class* compolyx.ImportedModelingPly(graph, obj, parent=None)

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| [`ImportedModelingPly.active`](compolyx.ImportedModelingPly.active.md#compolyx.ImportedModelingPly.active)                                                          | Whether the ply is active or surpressed                                               |
| [`ImportedModelingPly.angle_1_field`](compolyx.ImportedModelingPly.angle_1_field.md#compolyx.ImportedModelingPly.angle_1_field)                                     | Angle 1 Correction field                                                                |
| [`ImportedModelingPly.angle_2_field`](compolyx.ImportedModelingPly.angle_2_field.md#compolyx.ImportedModelingPly.angle_2_field)                                     | Angle 2 Correction field                                                                |
| [`ImportedModelingPly.draping`](compolyx.ImportedModelingPly.draping.md#compolyx.ImportedModelingPly.draping)                                                       | Type of draping to be used                                                              |
| [`ImportedModelingPly.enabled`](compolyx.ImportedModelingPly.enabled.md#compolyx.ImportedModelingPly.enabled)                                                       | Whether this object is currently enabled or not                                        |
| [`ImportedModelingPly.id`](compolyx.ImportedModelingPly.id.md#compolyx.ImportedModelingPly.id)                                                                      | ID of object                                                                            |
| [`ImportedModelingPly.is_dict_item`](compolyx.ImportedModelingPly.is_dict_item.md#compolyx.ImportedModelingPly.is_dict_item)                                        | Specifies whether the object is an item of a dict                                        |
| [`ImportedModelingPly.is_list_item`](compolyx.ImportedModelingPly.is_list_item.md#compolyx.ImportedModelingPly.is_list_item)                                        | Specifies whether the object is an item of a list                                        |
| [`ImportedModelingPly.link_path`](compolyx.ImportedModelingPly.link_path.md#compolyx.ImportedModelingPly.link_path)                                                 | Root path of the current node in the tree for links to this object                      |
| [`ImportedModelingPly.mesh`](compolyx.ImportedModelingPly.mesh.md#compolyx.ImportedModelingPly.mesh)                                                                |                                                                                         |
| [`ImportedModelingPly.mesh_geometry`](compolyx.ImportedModelingPly.mesh_geometry.md#compolyx.ImportedModelingPly.mesh_geometry)                                     | Geometry that defines the mesh/surface of this ply                                      |
| [`ImportedModelingPly.mesh_import_type`](compolyx.ImportedModelingPly.mesh_import_type.md#compolyx.ImportedModelingPly.mesh_import_type)                            | Defines the source of the imported mesh                                                 |
| [`ImportedModelingPly.name`](compolyx.ImportedModelingPly.name.md#compolyx.ImportedModelingPly.name)                                                                | Name of object                                                                          |
| [`ImportedModelingPly.offset`](compolyx.ImportedModelingPly.offset.md#compolyx.ImportedModelingPly.offset)                                                          | Defines whether the imported mesh defines the bottom, middle or top surface of the ply |
| [`ImportedModelingPly.parent`](compolyx.ImportedModelingPly.parent.md#compolyx.ImportedModelingPly.parent)                                                          | Parent object in tree                                                                   |
| [`ImportedModelingPly.ply_angle`](compolyx.ImportedModelingPly.ply_angle.md#compolyx.ImportedModelingPly.ply_angle)                                                 | Ply Angle of the Imported Modeling Ply                                                  |
| [`ImportedModelingPly.ply_material`](compolyx.ImportedModelingPly.ply_material.md#compolyx.ImportedModelingPly.ply_material)                                        | Material of the Modeling Ply                                                            |
| [`ImportedModelingPly.production_plies`](compolyx.ImportedModelingPly.production_plies.md#compolyx.ImportedModelingPly.production_plies)                            | Attached imported production plies                                                      |
| [`ImportedModelingPly.reference_direction_field`](compolyx.ImportedModelingPly.reference_direction_field.md#compolyx.ImportedModelingPly.reference_direction_field) | A lookup table column or None for external reference directions                        |
| [`ImportedModelingPly.root_path`](compolyx.ImportedModelingPly.root_path.md#compolyx.ImportedModelingPly.root_path)                                                 | Root path of the current node in the tree                                               |
| [`ImportedModelingPly.rosette_selection_method`](compolyx.ImportedModelingPly.rosette_selection_method.md#compolyx.ImportedModelingPly.rosette_selection_method)    | Defines the rosette selection method                                                    |
| [`ImportedModelingPly.rosettes`](compolyx.ImportedModelingPly.rosettes.md#compolyx.ImportedModelingPly.rosettes)                                                    | Rosettes of the Imported Modeling Ply.                                                  |
| [`ImportedModelingPly.rotation_angle`](compolyx.ImportedModelingPly.rotation_angle.md#compolyx.ImportedModelingPly.rotation_angle)                                  | Angle to rotate the reference directions (in degree).                                   |
| [`ImportedModelingPly.status`](compolyx.ImportedModelingPly.status.md#compolyx.ImportedModelingPly.status)                                                          | Status of the object                                                                    |
| [`ImportedModelingPly.status_changed`](compolyx.ImportedModelingPly.status_changed.md#compolyx.ImportedModelingPly.status_changed)                                  | Boolean flag which is set to true in C++ when up-to-date status of object changes.      |
| [`ImportedModelingPly.thickness_definition`](compolyx.ImportedModelingPly.thickness_definition.md#compolyx.ImportedModelingPly.thickness_definition)                | Type of thickness-definition to be used (from table, nominal)                           |
| [`ImportedModelingPly.thickness_field`](compolyx.ImportedModelingPly.thickness_field.md#compolyx.ImportedModelingPly.thickness_field)                               | LookUpTable Column with tabular thicknesses or None                                     |
| [`ImportedModelingPly.thickness_field_type`](compolyx.ImportedModelingPly.thickness_field_type.md#compolyx.ImportedModelingPly.thickness_field_type)                | The type of the Thickness field 'absolute' or 'relative'                                |
| [`ImportedModelingPly.uid`](compolyx.ImportedModelingPly.uid.md#compolyx.ImportedModelingPly.uid)                                                                   | UID of object                                                                           |
| [`ImportedModelingPly.vertex`](compolyx.ImportedModelingPly.vertex.md#compolyx.ImportedModelingPly.vertex)                                                          | Throws an error if the object has been removed from the graph.                 |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`ImportedModelingPly.clear_rosettes`](compolyx.ImportedModelingPly.clear_rosettes.md#compolyx.ImportedModelingPly.clear_rosettes)()                      | Clear rosettes of imported modeling ply                                                                                     |
| [`ImportedModelingPly.find_parent`](compolyx.ImportedModelingPly.find_parent.md#compolyx.ImportedModelingPly.find_parent)(type)                           | Function steps up the tree and returns the first parent with given type                                                     |
| [`ImportedModelingPly.obj_exists`](compolyx.ImportedModelingPly.obj_exists.md#compolyx.ImportedModelingPly.obj_exists)()                                  | Checks if \_\_obj still references the C++ object (i.e. has not been reset to None by self._delete) and exists in the graph |
| [`ImportedModelingPly.serialize_name_and_id`](compolyx.ImportedModelingPly.serialize_name_and_id.md#compolyx.ImportedModelingPly.serialize_name_and_id)() | Helper function to serialize name and ID                                                                                    |
| [`ImportedModelingPly.update`](compolyx.ImportedModelingPly.update.md#compolyx.ImportedModelingPly.update)()                                              |                                                                                                                              |
| [`ImportedModelingPly.visit`](compolyx.ImportedModelingPly.visit.md#compolyx.ImportedModelingPly.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node                                          |
