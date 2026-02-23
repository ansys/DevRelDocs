# InterfaceLayer

<a id="compolyx.InterfaceLayer"></a>

### *class* compolyx.InterfaceLayer(graph, obj, parent=None)

Represents interface layer.

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`InterfaceLayer.active`](compolyx.InterfaceLayer.active.md#compolyx.InterfaceLayer.active)                                                    | Indicates whether the sequence entity is active.                                                          |
| [`InterfaceLayer.enabled`](compolyx.InterfaceLayer.enabled.md#compolyx.InterfaceLayer.enabled)                                                 | Whether this object is currently enabled.                                          |
| [`InterfaceLayer.global_ply_nr`](compolyx.InterfaceLayer.global_ply_nr.md#compolyx.InterfaceLayer.global_ply_nr)                               |                                                                                    |
| [`InterfaceLayer.id`](compolyx.InterfaceLayer.id.md#compolyx.InterfaceLayer.id)                                                                | ID of the object.                                                                       |
| [`InterfaceLayer.is_dict_item`](compolyx.InterfaceLayer.is_dict_item.md#compolyx.InterfaceLayer.is_dict_item)                                  | Indicates whether the object is an item in a dictionary.                                   |
| [`InterfaceLayer.is_list_item`](compolyx.InterfaceLayer.is_list_item.md#compolyx.InterfaceLayer.is_list_item)                                  | Indicates whether the object is an item of a list.                                   |
| [`InterfaceLayer.link_path`](compolyx.InterfaceLayer.link_path.md#compolyx.InterfaceLayer.link_path)                                           | Root path of the current node in the tree for links to this object.                 |
| [`InterfaceLayer.name`](compolyx.InterfaceLayer.name.md#compolyx.InterfaceLayer.name)                                                          | Name of the object.                                                                     |
| [`InterfaceLayer.open_area_sets`](compolyx.InterfaceLayer.open_area_sets.md#compolyx.InterfaceLayer.open_area_sets)                            | Open area set(s) of the Interface Layer.                                            |
| [`InterfaceLayer.oriented_selection_sets`](compolyx.InterfaceLayer.oriented_selection_sets.md#compolyx.InterfaceLayer.oriented_selection_sets) | Oriented Selection Sets of the Interface Layer.                                     |
| [`InterfaceLayer.parent`](compolyx.InterfaceLayer.parent.md#compolyx.InterfaceLayer.parent)                                                    | Parent object in the tree.                                                              |
| [`InterfaceLayer.ply_offsets`](compolyx.InterfaceLayer.ply_offsets.md#compolyx.InterfaceLayer.ply_offsets)                                     | Returns the offsetted Interface Layer.                                                  |
| [`InterfaceLayer.root_path`](compolyx.InterfaceLayer.root_path.md#compolyx.InterfaceLayer.root_path)                                           | Root path of the current node in the tree.                                          |
| [`InterfaceLayer.status`](compolyx.InterfaceLayer.status.md#compolyx.InterfaceLayer.status)                                                    | Status of the object.                                                               |
| [`InterfaceLayer.status_changed`](compolyx.InterfaceLayer.status_changed.md#compolyx.InterfaceLayer.status_changed)                            | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`InterfaceLayer.uid`](compolyx.InterfaceLayer.uid.md#compolyx.InterfaceLayer.uid)                                                             | UID of the object.                                                                      |
| [`InterfaceLayer.vertex`](compolyx.InterfaceLayer.vertex.md#compolyx.InterfaceLayer.vertex)                                                    | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`InterfaceLayer.add_open_area_set`](compolyx.InterfaceLayer.add_open_area_set.md#compolyx.InterfaceLayer.add_open_area_set)(value)                                   | Add open area set to interface layer.                                                                                        |
| [`InterfaceLayer.add_oriented_selection_set`](compolyx.InterfaceLayer.add_oriented_selection_set.md#compolyx.InterfaceLayer.add_oriented_selection_set)(...)          | Add oriented selection set.                                                                                                  |
| [`InterfaceLayer.clear_open_area_sets`](compolyx.InterfaceLayer.clear_open_area_sets.md#compolyx.InterfaceLayer.clear_open_area_sets)()                               | Clears the open area selection.                                                                                              |
| [`InterfaceLayer.clear_oriented_selection_sets`](compolyx.InterfaceLayer.clear_oriented_selection_sets.md#compolyx.InterfaceLayer.clear_oriented_selection_sets)()    | Clear all oriented selection sets of the interface layer.                                                                    |
| [`InterfaceLayer.find_parent`](compolyx.InterfaceLayer.find_parent.md#compolyx.InterfaceLayer.find_parent)(type)                                                      | Steps up the tree and returns the first parent with given type.                                                     |
| [`InterfaceLayer.obj_exists`](compolyx.InterfaceLayer.obj_exists.md#compolyx.InterfaceLayer.obj_exists)()                                                             | Checks if \_\_obj still references the c++ object (has not been reset to None by self._delete) and exists in the graph. |
| [`InterfaceLayer.remove_open_area_set`](compolyx.InterfaceLayer.remove_open_area_set.md#compolyx.InterfaceLayer.remove_open_area_set)(value)                          | Remove open area set from interface layer.                                                                                   |
| [`InterfaceLayer.remove_oriented_selection_set`](compolyx.InterfaceLayer.remove_oriented_selection_set.md#compolyx.InterfaceLayer.remove_oriented_selection_set)(...) | Remove oriented selection set from interface layer.                                                                          |
| [`InterfaceLayer.serialize`](compolyx.InterfaceLayer.serialize.md#compolyx.InterfaceLayer.serialize)()                                                                | Serialize to Python string.                                                                                                  |
| [`InterfaceLayer.serialize_name_and_id`](compolyx.InterfaceLayer.serialize_name_and_id.md#compolyx.InterfaceLayer.serialize_name_and_id)()                            | Serializes the name and ID.                                                                                    |
| [`InterfaceLayer.update`](compolyx.InterfaceLayer.update.md#compolyx.InterfaceLayer.update)()                                                                         |                                                                                                                              |
| [`InterfaceLayer.visit`](compolyx.InterfaceLayer.visit.md#compolyx.InterfaceLayer.visit)(visitor)                                                                     | Walk through the tree and let the visitor perform action on every descendant node.                                           |
