# ImportedProductionPly

<a id="compolyx.ImportedProductionPly"></a>

### *class* compolyx.ImportedProductionPly(graph, obj, parent=None)

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`ImportedProductionPly.active`](compolyx.ImportedProductionPly.active.md#compolyx.ImportedProductionPly.active)                         | Active status of the object.                                                            |
| [`ImportedProductionPly.analysis_plies`](compolyx.ImportedProductionPly.analysis_plies.md#compolyx.ImportedProductionPly.analysis_plies) | Analysis Plies of the Production Ply.                                               |
| [`ImportedProductionPly.angle`](compolyx.ImportedProductionPly.angle.md#compolyx.ImportedProductionPly.angle)                            | Ply Angle of the Production Ply.                                                    |
| [`ImportedProductionPly.enabled`](compolyx.ImportedProductionPly.enabled.md#compolyx.ImportedProductionPly.enabled)                      | Indicates whether the object is enabled.                                   |
| [`ImportedProductionPly.id`](compolyx.ImportedProductionPly.id.md#compolyx.ImportedProductionPly.id)                                     | ID of the object.                                                                       |
| [`ImportedProductionPly.is_dict_item`](compolyx.ImportedProductionPly.is_dict_item.md#compolyx.ImportedProductionPly.is_dict_item)       | Indicates whether the object is an item in a dictionary.                                   |
| [`ImportedProductionPly.is_list_item`](compolyx.ImportedProductionPly.is_list_item.md#compolyx.ImportedProductionPly.is_list_item)       | Indicates whether the object is an item of a list.                                   |
| [`ImportedProductionPly.link_path`](compolyx.ImportedProductionPly.link_path.md#compolyx.ImportedProductionPly.link_path)                | Root path of the current node in the tree for links to this object.                 |
| [`ImportedProductionPly.mesh`](compolyx.ImportedProductionPly.mesh.md#compolyx.ImportedProductionPly.mesh)                               |                                                                                    |
| [`ImportedProductionPly.name`](compolyx.ImportedProductionPly.name.md#compolyx.ImportedProductionPly.name)                               | Name of the object.                                                                     |
| [`ImportedProductionPly.parent`](compolyx.ImportedProductionPly.parent.md#compolyx.ImportedProductionPly.parent)                         | Parent object in the tree.                                                              |
| [`ImportedProductionPly.ply_material`](compolyx.ImportedProductionPly.ply_material.md#compolyx.ImportedProductionPly.ply_material)       | Ply Material of the Production Ply.                                                 |
| [`ImportedProductionPly.root_path`](compolyx.ImportedProductionPly.root_path.md#compolyx.ImportedProductionPly.root_path)                | Root path of the current node in the tree.                                          |
| [`ImportedProductionPly.status`](compolyx.ImportedProductionPly.status.md#compolyx.ImportedProductionPly.status)                         | Status of the object.                                                               |
| [`ImportedProductionPly.status_changed`](compolyx.ImportedProductionPly.status_changed.md#compolyx.ImportedProductionPly.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`ImportedProductionPly.thickness`](compolyx.ImportedProductionPly.thickness.md#compolyx.ImportedProductionPly.thickness)                | Thickness of the Production Ply.                                                    |
| [`ImportedProductionPly.uid`](compolyx.ImportedProductionPly.uid.md#compolyx.ImportedProductionPly.uid)                                  | UID of the object.                                                                      |
| [`ImportedProductionPly.vertex`](compolyx.ImportedProductionPly.vertex.md#compolyx.ImportedProductionPly.vertex)                         | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`ImportedProductionPly.find_parent`](compolyx.ImportedProductionPly.find_parent.md#compolyx.ImportedProductionPly.find_parent)(type)                           | Steps up the tree and returns the first parent with given type.                                                     |
| [`ImportedProductionPly.obj_exists`](compolyx.ImportedProductionPly.obj_exists.md#compolyx.ImportedProductionPly.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`ImportedProductionPly.serialize_name_and_id`](compolyx.ImportedProductionPly.serialize_name_and_id.md#compolyx.ImportedProductionPly.serialize_name_and_id)() | Serializes the name and ID.                                                                                    |
| [`ImportedProductionPly.update`](compolyx.ImportedProductionPly.update.md#compolyx.ImportedProductionPly.update)()                                              |                                                                                                                              |
| [`ImportedProductionPly.visit`](compolyx.ImportedProductionPly.visit.md#compolyx.ImportedProductionPly.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
