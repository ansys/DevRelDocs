# Rosette

<a id="compolyx.Rosette"></a>

### *class* compolyx.Rosette(graph, obj, parent=None)

Rosette class.

Access:

```pycon
>>> model = db.models['class40.1']
>>> rosette_1 = model.rosettes['Rosette.1']
>>> rosette_2 = model.create_rosette(name='Rosette.2', origin=(1.5, 5.75, 7.), dir1=(-0.4, -0.4, 0.8), dir2=(-6.0, 0.6, 0.75), rosette_type='parallel' )
```

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`Rosette.active`](compolyx.Rosette.active.md#compolyx.Rosette.active)                         | Active status of the object.                                                            |
| [`Rosette.changed`](compolyx.Rosette.changed.md#compolyx.Rosette.changed)                      | Status boolean.                                                                    |
| [`Rosette.dir1`](compolyx.Rosette.dir1.md#compolyx.Rosette.dir1)                               | Direction 1 of the Rosette.                                                         |
| [`Rosette.dir2`](compolyx.Rosette.dir2.md#compolyx.Rosette.dir2)                               | Direction 2 of the Rosette.                                                         |
| [`Rosette.edge_set`](compolyx.Rosette.edge_set.md#compolyx.Rosette.edge_set)                   | Edge Set for Rosette.                                                               |
| [`Rosette.enabled`](compolyx.Rosette.enabled.md#compolyx.Rosette.enabled)                      | Indicates whether the object is enabled.                                   |
| [`Rosette.id`](compolyx.Rosette.id.md#compolyx.Rosette.id)                                     | ID of the object.                                                                       |
| [`Rosette.is_dict_item`](compolyx.Rosette.is_dict_item.md#compolyx.Rosette.is_dict_item)       | Indicates whether the object is an item in a dictionary.                                   |
| [`Rosette.is_list_item`](compolyx.Rosette.is_list_item.md#compolyx.Rosette.is_list_item)       | Indicates whether the object is an item of a list.                                   |
| [`Rosette.link_path`](compolyx.Rosette.link_path.md#compolyx.Rosette.link_path)                | Root path of the current node in the tree for links to this object.                 |
| [`Rosette.locked`](compolyx.Rosette.locked.md#compolyx.Rosette.locked)                         | Rosette is generated from an imported rosette and cannot be changed.               |
| [`Rosette.name`](compolyx.Rosette.name.md#compolyx.Rosette.name)                               | Name of the object.                                                                     |
| [`Rosette.origin`](compolyx.Rosette.origin.md#compolyx.Rosette.origin)                         | Origin of the Rosette.                                                              |
| [`Rosette.parent`](compolyx.Rosette.parent.md#compolyx.Rosette.parent)                         | Parent object in the tree.                                                              |
| [`Rosette.root_path`](compolyx.Rosette.root_path.md#compolyx.Rosette.root_path)                | Root path of the current node in the tree.                                          |
| [`Rosette.rosette_type`](compolyx.Rosette.rosette_type.md#compolyx.Rosette.rosette_type)       | Rosette Types can be: parallel,radial,cylindrical,spherical,edge_wise.              |
| [`Rosette.status`](compolyx.Rosette.status.md#compolyx.Rosette.status)                         | Status of the object.                                                               |
| [`Rosette.status_changed`](compolyx.Rosette.status_changed.md#compolyx.Rosette.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`Rosette.uid`](compolyx.Rosette.uid.md#compolyx.Rosette.uid)                                  | UID of the object.                                                                      |
| [`Rosette.vertex`](compolyx.Rosette.vertex.md#compolyx.Rosette.vertex)                         | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Rosette.find_parent`](compolyx.Rosette.find_parent.md#compolyx.Rosette.find_parent)(type)                                                      | Steps up the tree and returns the first parent with given type.                                                                        |
| [`Rosette.get_global_coordinates`](compolyx.Rosette.get_global_coordinates.md#compolyx.Rosette.get_global_coordinates)(coordinates)              | Evaluates the global coordinates of a point given in local rosette coordinates: CYLINDRICAL,  RADIAL, and SPHERICAL.                            |
| [`Rosette.get_global_vector_components`](compolyx.Rosette.get_global_vector_components.md#compolyx.Rosette.get_global_vector_components)(vector) | Gets global vector components from local rosette vector components CYLINDRICAL,  RADIAL and SPHERICAL coord sys type: Give phi and theta in RAD. |
| [`Rosette.get_local_coordinates`](compolyx.Rosette.get_local_coordinates.md#compolyx.Rosette.get_local_coordinates)(coordinates)                 | Evaluates the local rosette coordinates of a point given in global coordinates:.                                                                 |
| [`Rosette.get_local_vector_components`](compolyx.Rosette.get_local_vector_components.md#compolyx.Rosette.get_local_vector_components)(vector)    | Returns local rosette vector components from global vector components.                                                                          |
| [`Rosette.get_short_description`](compolyx.Rosette.get_short_description.md#compolyx.Rosette.get_short_description)()                            |                                                                                                                                                 |
| [`Rosette.local_direction`](compolyx.Rosette.local_direction.md#compolyx.Rosette.local_direction)(point, angle)                                  | Get local orientation for a given relative angle and position in space.                                                                         |
| [`Rosette.obj_exists`](compolyx.Rosette.obj_exists.md#compolyx.Rosette.obj_exists)()                                                             | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph.                    |
| [`Rosette.rotate`](compolyx.Rosette.rotate.md#compolyx.Rosette.rotate)(rot_x_angle_deg, ...)                                                     | Rotate the Rosette around its X, Y and Z axes as an intrisic rotation.                                                                          |
| [`Rosette.serialize`](compolyx.Rosette.serialize.md#compolyx.Rosette.serialize)()                                                                | Serialize to Python string.                                                                                                                     |
| [`Rosette.serialize_name_and_id`](compolyx.Rosette.serialize_name_and_id.md#compolyx.Rosette.serialize_name_and_id)()                            | Serializes the name and ID.                                                                                                       |
| `Rosette.set_Xy`()                                                                                                                               | Sets dir2 orthogonal to dir1 as y- and x-axis.                                                                                                  |
| `Rosette.set_Xz`()                                                                                                                               | Sets dir2 orthogonal to dir1 as z- and x-axis.                                                                                                  |
| `Rosette.set_Yz`()                                                                                                                               | Sets dir2 orthogonal to dir1 as z- and y-axis.                                                                                                  |
| [`Rosette.set_xY`](compolyx.Rosette.set_Xy.md#compolyx.Rosette.set_xY)()                                                                         | Sets dir1 orthogonal to dir2 as x- and y-axis.                                                                                                  |
| [`Rosette.set_xZ`](compolyx.Rosette.set_Xz.md#compolyx.Rosette.set_xZ)()                                                                         | Sets dir1 orthogonal to dir2 as x- and z-axis.                                                                                                  |
| [`Rosette.set_yZ`](compolyx.Rosette.set_Yz.md#compolyx.Rosette.set_yZ)()                                                                         | Sets dir1 orthogonal to dir2 as y- and z-axis.                                                                                                  |
| [`Rosette.translate`](compolyx.Rosette.translate.md#compolyx.Rosette.translate)(translation_x, ...)                                              | Translate the rosette, either along its own axes or the global one depending on the type of translation.                                        |
| [`Rosette.update`](compolyx.Rosette.update.md#compolyx.Rosette.update)()                                                                         |                                                                                                                                                 |
| [`Rosette.visit`](compolyx.Rosette.visit.md#compolyx.Rosette.visit)(visitor)                                                                     | Walk through the tree and let the visitor perform action on every descendant node.                                                              |
