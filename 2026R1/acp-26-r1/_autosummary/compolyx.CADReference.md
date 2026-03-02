# CADReference

<a id="compolyx.CADReference"></a>

### *class* compolyx.CADReference(graph, obj, parent=None)

Represents a CAD reference.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`CADReference.active`](compolyx.CADReference.active.md#compolyx.CADReference.active)                               | Active status of the object.                                                            |
| [`CADReference.bounding_box_max`](compolyx.CADReference.bounding_box_max.md#compolyx.CADReference.bounding_box_max) | Maximum of the bounding box.                                                       |
| [`CADReference.bounding_box_min`](compolyx.CADReference.bounding_box_min.md#compolyx.CADReference.bounding_box_min) | Minimum of the bounding box.                                                       |
| [`CADReference.cog`](compolyx.CADReference.cog.md#compolyx.CADReference.cog)                                        | Center of gravity of the linked shape.                                              |
| [`CADReference.dimension`](compolyx.CADReference.dimension.md#compolyx.CADReference.dimension)                      | Dimension of the linked shape (1 for lines, 2 for surfaces and 3 for solids).      |
| [`CADReference.enabled`](compolyx.CADReference.enabled.md#compolyx.CADReference.enabled)                            | Indicates whether the object is enabled.                                   |
| [`CADReference.id`](compolyx.CADReference.id.md#compolyx.CADReference.id)                                           | ID of the object.                                                                       |
| [`CADReference.is_dict_item`](compolyx.CADReference.is_dict_item.md#compolyx.CADReference.is_dict_item)             | Indicates whether the object is an item in a dictionary.                                   |
| [`CADReference.is_list_item`](compolyx.CADReference.is_list_item.md#compolyx.CADReference.is_list_item)             | Indicates whether the object is an item of a list.                                   |
| [`CADReference.link_path`](compolyx.CADReference.link_path.md#compolyx.CADReference.link_path)                      | Root path of the current node in the tree for links to this object.                 |
| [`CADReference.name`](compolyx.CADReference.name.md#compolyx.CADReference.name)                                     | Name of the object.                                                                     |
| [`CADReference.parent`](compolyx.CADReference.parent.md#compolyx.CADReference.parent)                               | Parent object in the tree.                                                              |
| [`CADReference.path`](compolyx.CADReference.path.md#compolyx.CADReference.path)                                     | Path to the linked CAD Component.                                                  |
| [`CADReference.root_path`](compolyx.CADReference.root_path.md#compolyx.CADReference.root_path)                      | Root path of the current node in the tree.                                          |
| [`CADReference.size`](compolyx.CADReference.size.md#compolyx.CADReference.size)                                     | Size of the linked cad shape.                                                       |
| [`CADReference.status`](compolyx.CADReference.status.md#compolyx.CADReference.status)                               | Status of the CADReference.                                                         |
| [`CADReference.status_changed`](compolyx.CADReference.status_changed.md#compolyx.CADReference.status_changed)       | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`CADReference.uid`](compolyx.CADReference.uid.md#compolyx.CADReference.uid)                                        | UID of the object.                                                                      |
| [`CADReference.vertex`](compolyx.CADReference.vertex.md#compolyx.CADReference.vertex)                               | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`CADReference.find_parent`](compolyx.CADReference.find_parent.md#compolyx.CADReference.find_parent)(type)                           | Steps up the tree and returns the first parent with given type.                                                     |
| [`CADReference.get_short_description`](compolyx.CADReference.get_short_description.md#compolyx.CADReference.get_short_description)() |                                                                                                                              |
| [`CADReference.obj_exists`](compolyx.CADReference.obj_exists.md#compolyx.CADReference.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (has not been reset to None by self._delete) and exists in the graph. |
| [`CADReference.serialize`](compolyx.CADReference.serialize.md#compolyx.CADReference.serialize)()                                     |                                                                                                                              |
| [`CADReference.serialize_name_and_id`](compolyx.CADReference.serialize_name_and_id.md#compolyx.CADReference.serialize_name_and_id)() | Serializes the name and ID.                                                                                    |
| [`CADReference.update`](compolyx.CADReference.update.md#compolyx.CADReference.update)()                                              |                                                                                                                              |
| [`CADReference.visit`](compolyx.CADReference.visit.md#compolyx.CADReference.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
