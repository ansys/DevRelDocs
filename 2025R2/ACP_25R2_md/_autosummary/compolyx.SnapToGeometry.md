# SnapToGeometry

<a id="compolyx.SnapToGeometry"></a>

### *class* compolyx.SnapToGeometry(obj, parent)

SnapToGeometry guide class

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`SnapToGeometry.active`](compolyx.SnapToGeometry.active.md#compolyx.SnapToGeometry.active)                                                 | Snap-To Geometry active                                                            |
| [`SnapToGeometry.cad_geometry`](compolyx.SnapToGeometry.cad_geometry.md#compolyx.SnapToGeometry.cad_geometry)                               | Associated Geometry.                                                               |
| [`SnapToGeometry.elements`](compolyx.SnapToGeometry.elements.md#compolyx.SnapToGeometry.elements)                                           | List of affected shell elements                                                    |
| [`SnapToGeometry.enabled`](compolyx.SnapToGeometry.enabled.md#compolyx.SnapToGeometry.enabled)                                              | Whether this object is currently enabled or not.                                   |
| [`SnapToGeometry.id`](compolyx.SnapToGeometry.id.md#compolyx.SnapToGeometry.id)                                                             | ID of object                                                                       |
| [`SnapToGeometry.is_dict_item`](compolyx.SnapToGeometry.is_dict_item.md#compolyx.SnapToGeometry.is_dict_item)                               | Specifies wether the object is an item of a dict                                   |
| [`SnapToGeometry.is_list_item`](compolyx.SnapToGeometry.is_list_item.md#compolyx.SnapToGeometry.is_list_item)                               | Specifies wether the object is an item of a list                                   |
| [`SnapToGeometry.link_path`](compolyx.SnapToGeometry.link_path.md#compolyx.SnapToGeometry.link_path)                                        | Root path of the current node in the tree for links to this object                 |
| [`SnapToGeometry.name`](compolyx.SnapToGeometry.name.md#compolyx.SnapToGeometry.name)                                                       | Name of object                                                                     |
| [`SnapToGeometry.orientation`](compolyx.SnapToGeometry.orientation.md#compolyx.SnapToGeometry.orientation)                                  | Orientation.                                                                       |
| [`SnapToGeometry.oriented_selection_set`](compolyx.SnapToGeometry.oriented_selection_set.md#compolyx.SnapToGeometry.oriented_selection_set) |                                                                                    |
| [`SnapToGeometry.parent`](compolyx.SnapToGeometry.parent.md#compolyx.SnapToGeometry.parent)                                                 | Parent object in tree                                                              |
| [`SnapToGeometry.root_path`](compolyx.SnapToGeometry.root_path.md#compolyx.SnapToGeometry.root_path)                                        | Root path of the current node in the tree                                          |
| [`SnapToGeometry.status`](compolyx.SnapToGeometry.status.md#compolyx.SnapToGeometry.status)                                                 | Status of the object                                                               |
| [`SnapToGeometry.status_changed`](compolyx.SnapToGeometry.status_changed.md#compolyx.SnapToGeometry.status_changed)                         | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`SnapToGeometry.uid`](compolyx.SnapToGeometry.uid.md#compolyx.SnapToGeometry.uid)                                                          | UID of object                                                                      |
| [`SnapToGeometry.vertex`](compolyx.SnapToGeometry.vertex.md#compolyx.SnapToGeometry.vertex)                                                 | This will throw an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`SnapToGeometry.find_parent`](compolyx.SnapToGeometry.find_parent.md#compolyx.SnapToGeometry.find_parent)(type)                           | Function steps up the tree and returns the first parent with given type.                                                     |
| [`SnapToGeometry.from_obj`](compolyx.SnapToGeometry.from_obj.md#compolyx.SnapToGeometry.from_obj)(obj, org_obj)                            |                                                                                                                              |
| [`SnapToGeometry.obj_exists`](compolyx.SnapToGeometry.obj_exists.md#compolyx.SnapToGeometry.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`SnapToGeometry.serialize`](compolyx.SnapToGeometry.serialize.md#compolyx.SnapToGeometry.serialize)()                                     |                                                                                                                              |
| [`SnapToGeometry.serialize_name_and_id`](compolyx.SnapToGeometry.serialize_name_and_id.md#compolyx.SnapToGeometry.serialize_name_and_id)() | Helper function to serialize name and ID.                                                                                    |
| [`SnapToGeometry.update`](compolyx.SnapToGeometry.update.md#compolyx.SnapToGeometry.update)()                                              |                                                                                                                              |
| [`SnapToGeometry.visit`](compolyx.SnapToGeometry.visit.md#compolyx.SnapToGeometry.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
