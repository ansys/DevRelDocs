# Material

<a id="compolyx.Material"></a>

### *class* compolyx.Material(graph, obj, parent=None)

Represents a material.

Provides access to all material properties defined in the loaded finite element model.

* **Access:**
  ```pycon
  >>> import compolyx
  >>> db = compolyx.DB()
  >>> model = db.models['class40.1']
  >>> materials = model.material_data.materials
  >>> mat_UD300 = materials['UD300_GLAS']
  >>> print mat_UD300.property_names
  ```

  [‘density’, ‘engineering_constants’, ‘larc_constants’, ‘puck_constants’, ‘strain_limits’, ‘stress_limits’,
  ‘thermal_expansion_coefficients’, ‘tsai_wu_constants’, ‘woven_characterization’, ‘woven_puck_constants_1’,
  ‘woven_puck_constants_2’, ‘woven_stress_limits_1’, ‘woven_stress_limits_2’]
  ```pycon
  >>> property_set_eng_const = mat_UD300['engineering_constants']
  ```

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`Material.active`](compolyx.Material.active.md#compolyx.Material.active)                                  | Active status of the object                                                            |
| [`Material.active_properties`](compolyx.Material.active_properties.md#compolyx.Material.active_properties) | List of the active properties for the underlying material.                         |
| [`Material.enabled`](compolyx.Material.enabled.md#compolyx.Material.enabled)                               | Indicates whether the object is enabled.                                   |
| [`Material.ext_id`](compolyx.Material.ext_id.md#compolyx.Material.ext_id)                                  | ID of corresponding Material in external source.                                   |
| [`Material.id`](compolyx.Material.id.md#compolyx.Material.id)                                              | ID of the object                                                                       |
| [`Material.is_constant`](compolyx.Material.is_constant.md#compolyx.Material.is_constant)                   | True if engineering constants are constant.                                        |
| [`Material.is_dict_item`](compolyx.Material.is_dict_item.md#compolyx.Material.is_dict_item)                | Indicates whether the object is an item in a dictionary                                   |
| [`Material.is_isotropic`](compolyx.Material.is_isotropic.md#compolyx.Material.is_isotropic)                | True if ply_type is isotropic or isotropic_homogeneous_core.                       |
| [`Material.is_list_item`](compolyx.Material.is_list_item.md#compolyx.Material.is_list_item)                | Indicates whether the object is an item of a list                                   |
| [`Material.link_path`](compolyx.Material.link_path.md#compolyx.Material.link_path)                         | Root path of the current node in the tree for links to this object                 |
| [`Material.locked`](compolyx.Material.locked.md#compolyx.Material.locked)                                  | Material is generated from an external source and cannot be changed.               |
| [`Material.name`](compolyx.Material.name.md#compolyx.Material.name)                                        | Name of the object                                                                     |
| [`Material.parent`](compolyx.Material.parent.md#compolyx.Material.parent)                                  | Parent object in the tree                                                              |
| [`Material.ply_type`](compolyx.Material.ply_type.md#compolyx.Material.ply_type)                            | Ply type.                                                                          |
| [`Material.property_names`](compolyx.Material.property_names.md#compolyx.Material.property_names)          | List with all available property keys.                                             |
| [`Material.root_path`](compolyx.Material.root_path.md#compolyx.Material.root_path)                         | Root path of the current node in the tree                                          |
| [`Material.status`](compolyx.Material.status.md#compolyx.Material.status)                                  | Status of the object                                                               |
| [`Material.status_changed`](compolyx.Material.status_changed.md#compolyx.Material.status_changed)          | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`Material.uid`](compolyx.Material.uid.md#compolyx.Material.uid)                                           | UID of the object                                                                      |
| [`Material.vertex`](compolyx.Material.vertex.md#compolyx.Material.vertex)                                  | Raises an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`Material.create_property_set`](compolyx.Material.create_property_set.md#compolyx.Material.create_property_set)(property_name, ...)   | Function to create a specific property set                                                                                   |
| [`Material.delete_property_set`](compolyx.Material.delete_property_set.md#compolyx.Material.delete_property_set)(property_name)        | Function to delete a specific property set                                                                                   |
| [`Material.find_parent`](compolyx.Material.find_parent.md#compolyx.Material.find_parent)(type)                                         | Steps up the tree and returns the first parent with given type.                                                     |
| [`Material.obj_exists`](compolyx.Material.obj_exists.md#compolyx.Material.obj_exists)()                                                | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`Material.serialize`](compolyx.Material.serialize.md#compolyx.Material.serialize)()                                                   | Serialize to Python string.                                                                                                  |
| [`Material.serialize_name_and_id`](compolyx.Material.serialize_name_and_id.md#compolyx.Material.serialize_name_and_id)()               | Serializes the name and ID.                                                                                    |
| [`Material.update`](compolyx.Material.update.md#compolyx.Material.update)()                                                            |                                                                                                                              |
| [`Material.visit`](compolyx.Material.visit.md#compolyx.Material.visit)(visitor)                                                        | Walk through the tree and let the visitor perform action on every descendant node.                                           |
