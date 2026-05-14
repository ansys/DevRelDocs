# CutOffGeometry

<a id="compolyx.CutOffGeometry"></a>

### *class* compolyx.CutOffGeometry(obj, parent=None)

CutOffGeometry guide class

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`CutOffGeometry.active`](compolyx.CutOffGeometry.active.md#compolyx.CutOffGeometry.active)                                        | Cut-Off Geometry active                                                            |
| [`CutOffGeometry.cad_geometry`](compolyx.CutOffGeometry.cad_geometry.md#compolyx.CutOffGeometry.cad_geometry)                      | Associated CADGeometry                                                            |
| [`CutOffGeometry.enabled`](compolyx.CutOffGeometry.enabled.md#compolyx.CutOffGeometry.enabled)                                     | Whether this object is currently enabled or not                                   |
| [`CutOffGeometry.id`](compolyx.CutOffGeometry.id.md#compolyx.CutOffGeometry.id)                                                    | ID of object                                                                       |
| [`CutOffGeometry.is_dict_item`](compolyx.CutOffGeometry.is_dict_item.md#compolyx.CutOffGeometry.is_dict_item)                      | Specifies whether the object is an item of a dict                                   |
| [`CutOffGeometry.is_list_item`](compolyx.CutOffGeometry.is_list_item.md#compolyx.CutOffGeometry.is_list_item)                      | Specifies whether the object is an item of a list                                   |
| [`CutOffGeometry.link_path`](compolyx.CutOffGeometry.link_path.md#compolyx.CutOffGeometry.link_path)                               | Root path of the current node in the tree for links to this object                 |
| [`CutOffGeometry.name`](compolyx.CutOffGeometry.name.md#compolyx.CutOffGeometry.name)                                              | Name of object                                                                     |
| [`CutOffGeometry.orientation`](compolyx.CutOffGeometry.orientation.md#compolyx.CutOffGeometry.orientation)                         | Orientation                                                                      |
| [`CutOffGeometry.parent`](compolyx.CutOffGeometry.parent.md#compolyx.CutOffGeometry.parent)                                        | Parent object in tree                                                              |
| [`CutOffGeometry.rel_merge_tolerance`](compolyx.CutOffGeometry.rel_merge_tolerance.md#compolyx.CutOffGeometry.rel_merge_tolerance) | Relative Merge Tolerance                                                           |
| [`CutOffGeometry.root_path`](compolyx.CutOffGeometry.root_path.md#compolyx.CutOffGeometry.root_path)                               | Root path of the current node in the tree                                          |
| [`CutOffGeometry.status`](compolyx.CutOffGeometry.status.md#compolyx.CutOffGeometry.status)                                        | Status of the object                                                               |
| [`CutOffGeometry.status_changed`](compolyx.CutOffGeometry.status_changed.md#compolyx.CutOffGeometry.status_changed)                | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`CutOffGeometry.uid`](compolyx.CutOffGeometry.uid.md#compolyx.CutOffGeometry.uid)                                                 | UID of object                                                                      |
| [`CutOffGeometry.vertex`](compolyx.CutOffGeometry.vertex.md#compolyx.CutOffGeometry.vertex)                                        | This will throw an error if the object has been removed from the graph           |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`CutOffGeometry.find_parent`](compolyx.CutOffGeometry.find_parent.md#compolyx.CutOffGeometry.find_parent)(type)                           | Steps up the tree and returns the first parent with given type                                                    |
| [`CutOffGeometry.from_obj`](compolyx.CutOffGeometry.from_obj.md#compolyx.CutOffGeometry.from_obj)(obj, org_obj)                            |                                                                                                                              |
| [`CutOffGeometry.obj_exists`](compolyx.CutOffGeometry.obj_exists.md#compolyx.CutOffGeometry.obj_exists)()                                  | Checks if \_\_obj still references the C++ object (i.e. has not been reset to None by self._delete) and exists in the graph |
| [`CutOffGeometry.serialize`](compolyx.CutOffGeometry.serialize.md#compolyx.CutOffGeometry.serialize)()                                     |                                                                                                                              |
| [`CutOffGeometry.serialize_name_and_id`](compolyx.CutOffGeometry.serialize_name_and_id.md#compolyx.CutOffGeometry.serialize_name_and_id)() | Helper function to serialize name and ID                                                                                    |
| [`CutOffGeometry.update`](compolyx.CutOffGeometry.update.md#compolyx.CutOffGeometry.update)()                                              |                                                                                                                              |
| [`CutOffGeometry.visit`](compolyx.CutOffGeometry.visit.md#compolyx.CutOffGeometry.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node                                          |
