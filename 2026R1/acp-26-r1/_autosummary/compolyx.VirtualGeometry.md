# VirtualGeometry

<a id="compolyx.VirtualGeometry"></a>

### *class* compolyx.VirtualGeometry(graph, obj, parent=None)

Represents a VirtualGeometry.

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`VirtualGeometry.active`](compolyx.VirtualGeometry.active.md#compolyx.VirtualGeometry.active)                         | Active status of the object.                                                            |
| [`VirtualGeometry.cad_geometry`](compolyx.VirtualGeometry.cad_geometry.md#compolyx.VirtualGeometry.cad_geometry)       | Returns the linked CADGeometry.                                                    |
| [`VirtualGeometry.cad_references`](compolyx.VirtualGeometry.cad_references.md#compolyx.VirtualGeometry.cad_references) | Dictionary of all CAD references.                                                  |
| [`VirtualGeometry.dimension`](compolyx.VirtualGeometry.dimension.md#compolyx.VirtualGeometry.dimension)                | Highest dimension of all CAD references.                                           |
| [`VirtualGeometry.enabled`](compolyx.VirtualGeometry.enabled.md#compolyx.VirtualGeometry.enabled)                      | Indicates whether the object is enabled.                                   |
| [`VirtualGeometry.id`](compolyx.VirtualGeometry.id.md#compolyx.VirtualGeometry.id)                                     | ID of the object.                                                                       |
| [`VirtualGeometry.is_dict_item`](compolyx.VirtualGeometry.is_dict_item.md#compolyx.VirtualGeometry.is_dict_item)       | Indicates whether the object is an item in a dictionary.                                   |
| [`VirtualGeometry.is_list_item`](compolyx.VirtualGeometry.is_list_item.md#compolyx.VirtualGeometry.is_list_item)       | Indicates whether the object is an item of a list.                                   |
| [`VirtualGeometry.link_path`](compolyx.VirtualGeometry.link_path.md#compolyx.VirtualGeometry.link_path)                | Root path of the current node in the tree for links to this object.                 |
| [`VirtualGeometry.name`](compolyx.VirtualGeometry.name.md#compolyx.VirtualGeometry.name)                               | Name of the object.                                                                     |
| [`VirtualGeometry.parent`](compolyx.VirtualGeometry.parent.md#compolyx.VirtualGeometry.parent)                         | Parent object in the tree.                                                              |
| [`VirtualGeometry.root_path`](compolyx.VirtualGeometry.root_path.md#compolyx.VirtualGeometry.root_path)                | Root path of the current node in the tree.                                          |
| [`VirtualGeometry.status`](compolyx.VirtualGeometry.status.md#compolyx.VirtualGeometry.status)                         | Status of the object.                                                               |
| [`VirtualGeometry.status_changed`](compolyx.VirtualGeometry.status_changed.md#compolyx.VirtualGeometry.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`VirtualGeometry.sub_shapes`](compolyx.VirtualGeometry.sub_shapes.md#compolyx.VirtualGeometry.sub_shapes)             | Sub components of the VirtualGeometry.                                             |
| [`VirtualGeometry.uid`](compolyx.VirtualGeometry.uid.md#compolyx.VirtualGeometry.uid)                                  | UID of the object.                                                                      |
| [`VirtualGeometry.vertex`](compolyx.VirtualGeometry.vertex.md#compolyx.VirtualGeometry.vertex)                         | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`VirtualGeometry.add`](compolyx.VirtualGeometry.add.md#compolyx.VirtualGeometry.add)(shape)                                                          | Creates a new CADReference object for the given shape.                                                                       |
| [`VirtualGeometry.clear_cad_references`](compolyx.VirtualGeometry.clear_cad_references.md#compolyx.VirtualGeometry.clear_cad_references)()            | Clear all linked references (VirtualGeometry becomes empty).                                                                 |
| [`VirtualGeometry.create_cad_reference`](compolyx.VirtualGeometry.create_cad_reference.md#compolyx.VirtualGeometry.create_cad_reference)([name, ...]) | Creates a new CAD reference and links it with the virtual geometry.                                                          |
| [`VirtualGeometry.find_parent`](compolyx.VirtualGeometry.find_parent.md#compolyx.VirtualGeometry.find_parent)(type)                                   | Steps up the tree and returns the first parent with given type.                                                     |
| [`VirtualGeometry.get_short_description`](compolyx.VirtualGeometry.get_short_description.md#compolyx.VirtualGeometry.get_short_description)()         |                                                                                                                              |
| [`VirtualGeometry.obj_exists`](compolyx.VirtualGeometry.obj_exists.md#compolyx.VirtualGeometry.obj_exists)()                                          | Checks if \_\_obj still references the c++ object (has not been reset to None by self._delete) and exists in the graph. |
| [`VirtualGeometry.remove`](compolyx.VirtualGeometry.remove.md#compolyx.VirtualGeometry.remove)(shape)                                                 | Removes the CADReference object for the given shape.                                                                         |
| [`VirtualGeometry.serialize`](compolyx.VirtualGeometry.serialize.md#compolyx.VirtualGeometry.serialize)()                                             | Serialize to Python string.                                                                                                  |
| [`VirtualGeometry.serialize_name_and_id`](compolyx.VirtualGeometry.serialize_name_and_id.md#compolyx.VirtualGeometry.serialize_name_and_id)()         | Serializes the name and ID.                                                                                    |
| [`VirtualGeometry.set`](compolyx.VirtualGeometry.set.md#compolyx.VirtualGeometry.set)(shapes)                                                         | Clears the existing CAD references and creates a new one for each given shape.                                               |
| [`VirtualGeometry.update`](compolyx.VirtualGeometry.update.md#compolyx.VirtualGeometry.update)()                                                      |                                                                                                                              |
| [`VirtualGeometry.visit`](compolyx.VirtualGeometry.visit.md#compolyx.VirtualGeometry.visit)(visitor)                                                  | Walk through the tree and let the visitor perform action on every descendant node.                                           |
