# ImportedAnalysisPly

<a id="compolyx.ImportedAnalysisPly"></a>

### *class* compolyx.ImportedAnalysisPly(graph, obj, parent=None)

Represents an imported modeling ply.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`ImportedAnalysisPly.active`](compolyx.ImportedAnalysisPly.active.md#compolyx.ImportedAnalysisPly.active)                                        | Active status of the object                                                            |
| [`ImportedAnalysisPly.active_in_post_mode`](compolyx.ImportedAnalysisPly.active_in_post_mode.md#compolyx.ImportedAnalysisPly.active_in_post_mode) | Whether ply is active in ACP Post                                                  |
| [`ImportedAnalysisPly.angle`](compolyx.ImportedAnalysisPly.angle.md#compolyx.ImportedAnalysisPly.angle)                                           | Ply Angle                                                                          |
| [`ImportedAnalysisPly.enabled`](compolyx.ImportedAnalysisPly.enabled.md#compolyx.ImportedAnalysisPly.enabled)                                     | Indicates whether the object is enabled.                                   |
| [`ImportedAnalysisPly.id`](compolyx.ImportedAnalysisPly.id.md#compolyx.ImportedAnalysisPly.id)                                                    | ID of the object                                                                       |
| [`ImportedAnalysisPly.is_dict_item`](compolyx.ImportedAnalysisPly.is_dict_item.md#compolyx.ImportedAnalysisPly.is_dict_item)                      | Indicates whether the object is an item in a dictionary                                   |
| [`ImportedAnalysisPly.is_list_item`](compolyx.ImportedAnalysisPly.is_list_item.md#compolyx.ImportedAnalysisPly.is_list_item)                      | Indicates whether the object is an item of a list                                   |
| [`ImportedAnalysisPly.link_path`](compolyx.ImportedAnalysisPly.link_path.md#compolyx.ImportedAnalysisPly.link_path)                               | Root path of the current node in the tree for links to this object                 |
| [`ImportedAnalysisPly.material`](compolyx.ImportedAnalysisPly.material.md#compolyx.ImportedAnalysisPly.material)                                  | Ply material                                                                       |
| [`ImportedAnalysisPly.mesh`](compolyx.ImportedAnalysisPly.mesh.md#compolyx.ImportedAnalysisPly.mesh)                                              |                                                                                    |
| [`ImportedAnalysisPly.name`](compolyx.ImportedAnalysisPly.name.md#compolyx.ImportedAnalysisPly.name)                                              | Name of the object                                                                     |
| [`ImportedAnalysisPly.parent`](compolyx.ImportedAnalysisPly.parent.md#compolyx.ImportedAnalysisPly.parent)                                        | Parent object in the tree                                                              |
| [`ImportedAnalysisPly.root_path`](compolyx.ImportedAnalysisPly.root_path.md#compolyx.ImportedAnalysisPly.root_path)                               | Root path of the current node in the tree                                          |
| [`ImportedAnalysisPly.status`](compolyx.ImportedAnalysisPly.status.md#compolyx.ImportedAnalysisPly.status)                                        | Status of the object                                                               |
| [`ImportedAnalysisPly.status_changed`](compolyx.ImportedAnalysisPly.status_changed.md#compolyx.ImportedAnalysisPly.status_changed)                | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`ImportedAnalysisPly.thickness`](compolyx.ImportedAnalysisPly.thickness.md#compolyx.ImportedAnalysisPly.thickness)                               | Average ply thickness                                                              |
| [`ImportedAnalysisPly.uid`](compolyx.ImportedAnalysisPly.uid.md#compolyx.ImportedAnalysisPly.uid)                                                 | UID of the object                                                                      |
| [`ImportedAnalysisPly.vertex`](compolyx.ImportedAnalysisPly.vertex.md#compolyx.ImportedAnalysisPly.vertex)                                        | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`ImportedAnalysisPly.find_parent`](compolyx.ImportedAnalysisPly.find_parent.md#compolyx.ImportedAnalysisPly.find_parent)(type)                           | Steps up the tree and returns the first parent with given type.                                                     |
| [`ImportedAnalysisPly.is_reinforcing`](compolyx.ImportedAnalysisPly.is_reinforcing.md#compolyx.ImportedAnalysisPly.is_reinforcing)()                      | True if the AnalysisPly is a reinforcing ply.                                                                                |
| [`ImportedAnalysisPly.obj_exists`](compolyx.ImportedAnalysisPly.obj_exists.md#compolyx.ImportedAnalysisPly.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`ImportedAnalysisPly.serialize_name_and_id`](compolyx.ImportedAnalysisPly.serialize_name_and_id.md#compolyx.ImportedAnalysisPly.serialize_name_and_id)() | Serializes the name and ID.                                                                                    |
| [`ImportedAnalysisPly.update`](compolyx.ImportedAnalysisPly.update.md#compolyx.ImportedAnalysisPly.update)()                                              |                                                                                                                              |
| [`ImportedAnalysisPly.visit`](compolyx.ImportedAnalysisPly.visit.md#compolyx.ImportedAnalysisPly.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
