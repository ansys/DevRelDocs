# Sensor

<a id="compolyx.Sensor"></a>

### *class* compolyx.Sensor(graph, obj, parent=None)

Sensor object for meassuring areas, prices, weights, and centers of gravity.

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`Sensor.active`](compolyx.Sensor.active.md#compolyx.Sensor.active)                                        | Whether the sensor is computed on update or not                                   |
| [`Sensor.area`](compolyx.Sensor.area.md#compolyx.Sensor.area)                                              | Area covered by all Entities of the Sensor                                         |
| [`Sensor.center_of_gravity`](compolyx.Sensor.center_of_gravity.md#compolyx.Sensor.center_of_gravity)       | Center of Gravity over all Entities of the Sensor                                  |
| [`Sensor.enabled`](compolyx.Sensor.enabled.md#compolyx.Sensor.enabled)                                     | Whether this object is currently enabled or not                                   |
| [`Sensor.entities`](compolyx.Sensor.entities.md#compolyx.Sensor.entities)                                  | Entities of the Sensor                                                             |
| [`Sensor.id`](compolyx.Sensor.id.md#compolyx.Sensor.id)                                                    | ID of object                                                                       |
| [`Sensor.is_dict_item`](compolyx.Sensor.is_dict_item.md#compolyx.Sensor.is_dict_item)                      | Specifies whether the object is an item of a dict                                   |
| [`Sensor.is_list_item`](compolyx.Sensor.is_list_item.md#compolyx.Sensor.is_list_item)                      | Specifies whether the object is an item of a list                                   |
| [`Sensor.link_path`](compolyx.Sensor.link_path.md#compolyx.Sensor.link_path)                               | Root path of the current node in the tree for links to this object                 |
| [`Sensor.locked`](compolyx.Sensor.locked.md#compolyx.Sensor.locked)                                        | Sensor cut was imported and cannot be changed.                                     |
| [`Sensor.modeling_ply_area`](compolyx.Sensor.modeling_ply_area.md#compolyx.Sensor.modeling_ply_area)       | Cumulated area of all modeling-plies involved                                      |
| [`Sensor.name`](compolyx.Sensor.name.md#compolyx.Sensor.name)                                              | Name of object                                                                     |
| [`Sensor.parent`](compolyx.Sensor.parent.md#compolyx.Sensor.parent)                                        | Parent object in tree                                                              |
| [`Sensor.price`](compolyx.Sensor.price.md#compolyx.Sensor.price)                                           | Price over all Entities of the Sensor                                              |
| [`Sensor.production_ply_area`](compolyx.Sensor.production_ply_area.md#compolyx.Sensor.production_ply_area) | Cumulated area of all production-plies involved                                    |
| [`Sensor.root_path`](compolyx.Sensor.root_path.md#compolyx.Sensor.root_path)                               | Root path of the current node in the tree                                          |
| [`Sensor.sensor_type`](compolyx.Sensor.sensor_type.md#compolyx.Sensor.sensor_type)                         | Sensor type.                                                                       |
| [`Sensor.status`](compolyx.Sensor.status.md#compolyx.Sensor.status)                                        | Status of the object                                                               |
| [`Sensor.status_changed`](compolyx.Sensor.status_changed.md#compolyx.Sensor.status_changed)                | Boolean flag which is set to true in C++ when up-to-date status of object changes |
| [`Sensor.uid`](compolyx.Sensor.uid.md#compolyx.Sensor.uid)                                                 | UID of object                                                                      |
| [`Sensor.vertex`](compolyx.Sensor.vertex.md#compolyx.Sensor.vertex)                                        | This will throw an error if the object has been removed from the graph           |
| [`Sensor.weight`](compolyx.Sensor.weight.md#compolyx.Sensor.weight)                                        | Weight over all Entities of the Sensor                                             |

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`Sensor.add_entity`](compolyx.Sensor.add_entity.md#compolyx.Sensor.add_entity)(entity)                            | Add entity to sensor                                                                                                       |
| [`Sensor.clear_entities`](compolyx.Sensor.clear_entities.md#compolyx.Sensor.clear_entities)()                      | Clear all entities of this sensor                                                                                         |
| [`Sensor.find_parent`](compolyx.Sensor.find_parent.md#compolyx.Sensor.find_parent)(type)                           | Function steps up the tree and returns the first parent with given type                                                    |
| [`Sensor.obj_exists`](compolyx.Sensor.obj_exists.md#compolyx.Sensor.obj_exists)()                                  | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph |
| [`Sensor.remove_entity`](compolyx.Sensor.remove_entity.md#compolyx.Sensor.remove_entity)(entity)                   | Remove entity from sensor.                                                                                                   |
| [`Sensor.serialize`](compolyx.Sensor.serialize.md#compolyx.Sensor.serialize)()                                     |                                                                                                                              |
| [`Sensor.serialize_name_and_id`](compolyx.Sensor.serialize_name_and_id.md#compolyx.Sensor.serialize_name_and_id)() | Helper function to serialize name and ID                                                                                    |
| [`Sensor.update`](compolyx.Sensor.update.md#compolyx.Sensor.update)()                                              |                                                                                                                              |
| [`Sensor.visit`](compolyx.Sensor.visit.md#compolyx.Sensor.visit)(visitor)                                          | Walk through the tree and let the visitor perform action on every descendant node                                           |
