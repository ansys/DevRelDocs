# ExtrusionGuide

<a id="compolyx.ExtrusionGuide"></a>

### *class* compolyx.ExtrusionGuide(obj, parent=None)

Extrusion guide class

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ExtrusionGuide.active`](compolyx.ExtrusionGuide.active.md#compolyx.ExtrusionGuide.active)                                                       | Extrusion Guide active                                                                                                                                   |
| [`ExtrusionGuide.cad_geometry`](compolyx.ExtrusionGuide.cad_geometry.md#compolyx.ExtrusionGuide.cad_geometry)                                     | Associated CADGeometry.                                                                                                                                  |
| [`ExtrusionGuide.depth`](compolyx.ExtrusionGuide.depth.md#compolyx.ExtrusionGuide.depth)                                                          | intensity for the propagation of mesh corrections, depth=1 leads to a linear decay from the guide to the radius, depth<1 leads to more local corrections |
| [`ExtrusionGuide.direction`](compolyx.ExtrusionGuide.direction.md#compolyx.ExtrusionGuide.direction)                                              | extrusion direction                                                                                                                                      |
| [`ExtrusionGuide.edge_set`](compolyx.ExtrusionGuide.edge_set.md#compolyx.ExtrusionGuide.edge_set)                                                 | Associated EdgeSet.                                                                                                                                      |
| [`ExtrusionGuide.enabled`](compolyx.ExtrusionGuide.enabled.md#compolyx.ExtrusionGuide.enabled)                                                    | Indicates whether the object is enabled.                                                                                                         |
| [`ExtrusionGuide.id`](compolyx.ExtrusionGuide.id.md#compolyx.ExtrusionGuide.id)                                                                   | ID of the object                                                                                                                                             |
| [`ExtrusionGuide.is_dict_item`](compolyx.ExtrusionGuide.is_dict_item.md#compolyx.ExtrusionGuide.is_dict_item)                                     | Indicates whether the object is an item in a dictionary                                                                                                         |
| [`ExtrusionGuide.is_list_item`](compolyx.ExtrusionGuide.is_list_item.md#compolyx.ExtrusionGuide.is_list_item)                                     | Indicates whether the object is an item of a list                                                                                                         |
| [`ExtrusionGuide.link_path`](compolyx.ExtrusionGuide.link_path.md#compolyx.ExtrusionGuide.link_path)                                              | Root path of the current node in the tree for links to this object                                                                                       |
| [`ExtrusionGuide.name`](compolyx.ExtrusionGuide.name.md#compolyx.ExtrusionGuide.name)                                                             | Name of the object                                                                                                                                           |
| [`ExtrusionGuide.parent`](compolyx.ExtrusionGuide.parent.md#compolyx.ExtrusionGuide.parent)                                                       | Parent object in the tree                                                                                                                                    |
| [`ExtrusionGuide.radius`](compolyx.ExtrusionGuide.radius.md#compolyx.ExtrusionGuide.radius)                                                       | radius up to which nodal guide translations are propagated through the mesh                                                                              |
| [`ExtrusionGuide.root_path`](compolyx.ExtrusionGuide.root_path.md#compolyx.ExtrusionGuide.root_path)                                              | Root path of the current node in the tree                                                                                                                |
| [`ExtrusionGuide.status`](compolyx.ExtrusionGuide.status.md#compolyx.ExtrusionGuide.status)                                                       | Status of the object                                                                                                                                     |
| [`ExtrusionGuide.status_changed`](compolyx.ExtrusionGuide.status_changed.md#compolyx.ExtrusionGuide.status_changed)                               | Boolean flag which is set to true in C++ when up-to-date status of object changes.                                                                       |
| [`ExtrusionGuide.uid`](compolyx.ExtrusionGuide.uid.md#compolyx.ExtrusionGuide.uid)                                                                | UID of the object                                                                                                                                            |
| [`ExtrusionGuide.use_curvature_correction`](compolyx.ExtrusionGuide.use_curvature_correction.md#compolyx.ExtrusionGuide.use_curvature_correction) | whether to use curvature correction algorithm to smooth mesh adapted to extrusion guide.                                                                 |
| [`ExtrusionGuide.vertex`](compolyx.ExtrusionGuide.vertex.md#compolyx.ExtrusionGuide.vertex)                                                       | Raises an error if the object has been removed from the graph.                                                                                  |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`ExtrusionGuide.find_parent`](compolyx.ExtrusionGuide.find_parent.md#compolyx.ExtrusionGuide.find_parent)(type)                           | Steps up the tree and returns the first parent with given type.                                                     |
| [`ExtrusionGuide.from_obj`](compolyx.ExtrusionGuide.from_obj.md#compolyx.ExtrusionGuide.from_obj)(obj, org_obj)                            |                                                                                                                              |
| [`ExtrusionGuide.obj_exists`](compolyx.ExtrusionGuide.obj_exists.md#compolyx.ExtrusionGuide.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`ExtrusionGuide.serialize`](compolyx.ExtrusionGuide.serialize.md#compolyx.ExtrusionGuide.serialize)()                                     |                                                                                                                              |
| [`ExtrusionGuide.serialize_name_and_id`](compolyx.ExtrusionGuide.serialize_name_and_id.md#compolyx.ExtrusionGuide.serialize_name_and_id)() | Serializes the name and ID.                                                                                    |
| [`ExtrusionGuide.update`](compolyx.ExtrusionGuide.update.md#compolyx.ExtrusionGuide.update)()                                              |                                                                                                                              |
| [`ExtrusionGuide.visit`](compolyx.ExtrusionGuide.visit.md#compolyx.ExtrusionGuide.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node.                                           |
