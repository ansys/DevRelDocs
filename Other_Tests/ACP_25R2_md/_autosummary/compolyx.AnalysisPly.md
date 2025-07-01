# AnalysisPly

<a id="compolyx.AnalysisPly"></a>

### *class* compolyx.AnalysisPly(graph, obj, parent=None)

ComPoLyX class to represent analysis ply.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`AnalysisPly.active`](compolyx.AnalysisPly.active.md#compolyx.AnalysisPly.active)                                        | Sequence entity is active                                                          |
| [`AnalysisPly.active_in_post_mode`](compolyx.AnalysisPly.active_in_post_mode.md#compolyx.AnalysisPly.active_in_post_mode) | True if failure criteria will be processed for this ply                           |
| [`AnalysisPly.angle`](compolyx.AnalysisPly.angle.md#compolyx.AnalysisPly.angle)                                           | Ply Angle of the analysis ply                                                      |
| [`AnalysisPly.draping_obj`](compolyx.AnalysisPly.draping_obj.md#compolyx.AnalysisPly.draping_obj)                         | Get the fiber directions of the analysis ply                                       |
| [`AnalysisPly.enabled`](compolyx.AnalysisPly.enabled.md#compolyx.AnalysisPly.enabled)                                     | Whether this object is currently enabled or not                                   |
| [`AnalysisPly.id`](compolyx.AnalysisPly.id.md#compolyx.AnalysisPly.id)                                                    | ID of object                                                                       |
| [`AnalysisPly.is_dict_item`](compolyx.AnalysisPly.is_dict_item.md#compolyx.AnalysisPly.is_dict_item)                      | Specifies whether the object is an item of a dict                                   |
| [`AnalysisPly.is_list_item`](compolyx.AnalysisPly.is_list_item.md#compolyx.AnalysisPly.is_list_item)                      | Specifies whether the object is an item of a list                                   |
| [`AnalysisPly.link_path`](compolyx.AnalysisPly.link_path.md#compolyx.AnalysisPly.link_path)                               | Root path of the current node in the tree for links to this object                 |
| [`AnalysisPly.material`](compolyx.AnalysisPly.material.md#compolyx.AnalysisPly.material)                                  | Ply material of the analysis ply                                                   |
| [`AnalysisPly.mesh`](compolyx.AnalysisPly.mesh.md#compolyx.AnalysisPly.mesh)                                              | Mesh                                                                              |
| [`AnalysisPly.name`](compolyx.AnalysisPly.name.md#compolyx.AnalysisPly.name)                                              | Name of object                                                                     |
| [`AnalysisPly.parent`](compolyx.AnalysisPly.parent.md#compolyx.AnalysisPly.parent)                                        | Parent object in tree                                                              |
| [`AnalysisPly.ply_material`](compolyx.AnalysisPly.ply_material.md#compolyx.AnalysisPly.ply_material)                      | Ply material of the analysis ply                                                   |
| [`AnalysisPly.root_path`](compolyx.AnalysisPly.root_path.md#compolyx.AnalysisPly.root_path)                               | Root path of the current node in the tree                                          |
| [`AnalysisPly.status`](compolyx.AnalysisPly.status.md#compolyx.AnalysisPly.status)                                        | Status of the object                                                               |
| [`AnalysisPly.status_changed`](compolyx.AnalysisPly.status_changed.md#compolyx.AnalysisPly.status_changed)                | Boolean flag which is set to true in C++ when up-to-date status of object changes |
| [`AnalysisPly.thickness`](compolyx.AnalysisPly.thickness.md#compolyx.AnalysisPly.thickness)                               | Thickness of the analysis ply                                                      |
| [`AnalysisPly.uid`](compolyx.AnalysisPly.uid.md#compolyx.AnalysisPly.uid)                                                 | UID of object                                                                      |
| [`AnalysisPly.vertex`](compolyx.AnalysisPly.vertex.md#compolyx.AnalysisPly.vertex)                                        | Throws an error if the object has been removed from the graph            |

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`AnalysisPly.boundaries`](compolyx.AnalysisPly.boundaries.md#compolyx.AnalysisPly.boundaries)([offset_type])                         |                                                                                                                              |
| [`AnalysisPly.direction_arrows`](compolyx.AnalysisPly.direction_arrows.md#compolyx.AnalysisPly.direction_arrows)([arrow_length, ...]) | Direction arrows of the ply                                                                                                 |
| [`AnalysisPly.find_parent`](compolyx.AnalysisPly.find_parent.md#compolyx.AnalysisPly.find_parent)(type)                               | Steps up the tree and returns the first parent with given type                                                     |
| [`AnalysisPly.get_short_description`](compolyx.AnalysisPly.get_short_description.md#compolyx.AnalysisPly.get_short_description)()     |                                                                                                                              |
| [`AnalysisPly.is_reinforcing`](compolyx.AnalysisPly.is_reinforcing.md#compolyx.AnalysisPly.is_reinforcing)()                          | True if the AnalysisPly is a reinforcing ply                                                                                |
| [`AnalysisPly.obj_exists`](compolyx.AnalysisPly.obj_exists.md#compolyx.AnalysisPly.obj_exists)()                                      | Checks if \_\_obj still references the C++ object (i.e. has not been reset to None by self._delete) and exists in the graph |
| [`AnalysisPly.serialize`](compolyx.AnalysisPly.serialize.md#compolyx.AnalysisPly.serialize)()                                         |                                                                                                                              |
| [`AnalysisPly.serialize_name_and_id`](compolyx.AnalysisPly.serialize_name_and_id.md#compolyx.AnalysisPly.serialize_name_and_id)()     | Helper function to serialize name and ID                                                                                    |
| [`AnalysisPly.update`](compolyx.AnalysisPly.update.md#compolyx.AnalysisPly.update)()                                                  | Update the analysis ply                                                                                                     |
| [`AnalysisPly.visit`](compolyx.AnalysisPly.visit.md#compolyx.AnalysisPly.visit)(visitor)                                              | Walk through the tree and let the visitor perform an action on every descendant node                                          |
| [`AnalysisPly.write_boundaries`](compolyx.AnalysisPly.write_boundaries.md#compolyx.AnalysisPly.write_boundaries)(filename[, ...])     | Write boundaries in .iges/.step format                                                                                      |
