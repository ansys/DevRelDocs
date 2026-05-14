# Stackup

<a id="compolyx.Stackup"></a>

### *class* compolyx.Stackup(graph, obj, parent=None)

Class to represent stackup.

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`Stackup.active`](compolyx.Stackup.active.md#compolyx.Stackup.active)                                                             | Active status of object                                                            |
| [`Stackup.area_price`](compolyx.Stackup.area_price.md#compolyx.Stackup.area_price)                                                 | Price per area of the Stackup                                                      |
| [`Stackup.area_weight`](compolyx.Stackup.area_weight.md#compolyx.Stackup.area_weight)                                              | Area weight of the Stackup                                                         |
| [`Stackup.cut_off_material`](compolyx.Stackup.cut_off_material.md#compolyx.Stackup.cut_off_material)                               | Cut-off material used in cut-off areas of this Stackup                            |
| [`Stackup.cut_off_material_handling`](compolyx.Stackup.cut_off_material_handling.md#compolyx.Stackup.cut_off_material_handling)    | Type defining how cut-off material is used in cut-off areas of this stackup       |
| [`Stackup.draping_material_model`](compolyx.Stackup.draping_material_model.md#compolyx.Stackup.draping_material_model)             | Draping material model                                                            |
| [`Stackup.draping_ud_coefficient`](compolyx.Stackup.draping_ud_coefficient.md#compolyx.Stackup.draping_ud_coefficient)             | UD Draping Coefficient                                                             |
| [`Stackup.drop_off_material`](compolyx.Stackup.drop_off_material.md#compolyx.Stackup.drop_off_material)                            | Drop-off material used in drop-off areas of this Stackup                          |
| [`Stackup.drop_off_material_handling`](compolyx.Stackup.drop_off_material_handling.md#compolyx.Stackup.drop_off_material_handling) | Type defining how drop-off material is used in drop-off areas of this stackup    |
| [`Stackup.enabled`](compolyx.Stackup.enabled.md#compolyx.Stackup.enabled)                                                          | Whether this object is currently enabled or not                                   |
| [`Stackup.fabrics`](compolyx.Stackup.fabrics.md#compolyx.Stackup.fabrics)                                                          | Fabrics property of the Stackup                                                    |
| [`Stackup.graph_plot`](compolyx.Stackup.graph_plot.md#compolyx.Stackup.graph_plot)                                                 | Graph Plot object used to configure 2D plots                                     |
| [`Stackup.id`](compolyx.Stackup.id.md#compolyx.Stackup.id)                                                                         | ID of object                                                                       |
| [`Stackup.is_dict_item`](compolyx.Stackup.is_dict_item.md#compolyx.Stackup.is_dict_item)                                           | Specifies whether the object is an item of a dict                                   |
| [`Stackup.is_list_item`](compolyx.Stackup.is_list_item.md#compolyx.Stackup.is_list_item)                                           | Specifies whether the object is an item of a list                                   |
| [`Stackup.layup_sequence`](compolyx.Stackup.layup_sequence.md#compolyx.Stackup.layup_sequence)                                     | Layup Sequence of the Stackup. Available options: `Top-Down` or `Bottom-Up`                     |
| [`Stackup.link_path`](compolyx.Stackup.link_path.md#compolyx.Stackup.link_path)                                                    | Root path of the current node in the tree for links to this object                 |
| [`Stackup.name`](compolyx.Stackup.name.md#compolyx.Stackup.name)                                                                   | Name of object                                                                     |
| [`Stackup.parent`](compolyx.Stackup.parent.md#compolyx.Stackup.parent)                                                             | Parent object in tree                                                              |
| [`Stackup.root_path`](compolyx.Stackup.root_path.md#compolyx.Stackup.root_path)                                                    | Root path of the current node in the tree                                          |
| [`Stackup.status`](compolyx.Stackup.status.md#compolyx.Stackup.status)                                                             | Status of the object                                                               |
| [`Stackup.status_changed`](compolyx.Stackup.status_changed.md#compolyx.Stackup.status_changed)                                     | Boolean flag which is set to true in C++ when up-to-date status of object changes |
| [`Stackup.symmetry`](compolyx.Stackup.symmetry.md#compolyx.Stackup.symmetry)                                                       | Symmetry of the Stackup. Available options: `No Symmetry`, `Even Symmetry`, or `Odd Symmetry`    |
| [`Stackup.thickness`](compolyx.Stackup.thickness.md#compolyx.Stackup.thickness)                                                    | Thickness of the Stackup                                                           |
| [`Stackup.uid`](compolyx.Stackup.uid.md#compolyx.Stackup.uid)                                                                      | UID of object                                                                      |
| [`Stackup.vertex`](compolyx.Stackup.vertex.md#compolyx.Stackup.vertex)                                                             | This will throw an error if the object has been removed from the graph            |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`Stackup.add_fabric`](compolyx.Stackup.add_fabric.md#compolyx.Stackup.add_fabric)(fabric[, angle])                               | Add fabric at end of fabrics of the stackup                                                                                 |
| [`Stackup.capture_analysis_plot`](compolyx.Stackup.capture_analysis_plot.md#compolyx.Stackup.capture_analysis_plot)([path, size]) | Saves the 2D polar plot to a file                                                                                           |
| [`Stackup.clear_fabrics`](compolyx.Stackup.clear_fabrics.md#compolyx.Stackup.clear_fabrics)()                                     | Clear all fabrics                                                                                                           |
| [`Stackup.clt_query`](compolyx.Stackup.clt_query.md#compolyx.Stackup.clt_query)([query])                                          | Returns the properties of the classical laminate theory                                                                     |
| [`Stackup.create_plot`](compolyx.Stackup.create_plot.md#compolyx.Stackup.create_plot)([query, core_scale_factor])                 | Generates 2D plots with the results of interest                                                                             |
| [`Stackup.find_parent`](compolyx.Stackup.find_parent.md#compolyx.Stackup.find_parent)(type)                                       | Function steps up the tree and returns the first parent with given type                                                    |
| [`Stackup.get_ordered_fabrics`](compolyx.Stackup.get_ordered_fabrics.md#compolyx.Stackup.get_ordered_fabrics)()                   | Returns all fabrics and orientations including symmetry and layup sequence option                                           |
| [`Stackup.insert_fabric`](compolyx.Stackup.insert_fabric.md#compolyx.Stackup.insert_fabric)(pos, fabric, angle)                   | Insert fabric at given position                                                                                             |
| [`Stackup.is_constant`](compolyx.Stackup.is_constant.md#compolyx.Stackup.is_constant)()                                           | Returns true if all engineering constants and strength limits of the assigned fabrics are constant                          |
| [`Stackup.obj_exists`](compolyx.Stackup.obj_exists.md#compolyx.Stackup.obj_exists)()                                              | Checks if \_\_obj still references the C++ object (i.e. has not been reset to None by self._delete) and exists in the graph |
| [`Stackup.remove_fabric`](compolyx.Stackup.remove_fabric.md#compolyx.Stackup.remove_fabric)(pos)                                  | Remove fabric from position                                                                                                 |
| [`Stackup.serialize`](compolyx.Stackup.serialize.md#compolyx.Stackup.serialize)()                                                 | Serialize to Python string                                                                                                  |
| [`Stackup.serialize_name_and_id`](compolyx.Stackup.serialize_name_and_id.md#compolyx.Stackup.serialize_name_and_id)()             | Helper function to serialize name and ID                                                                                    |
| [`Stackup.update`](compolyx.Stackup.update.md#compolyx.Stackup.update)()                                                          |                                                                                                                              |
| [`Stackup.update_plot`](compolyx.Stackup.update_plot.md#compolyx.Stackup.update_plot)()                                           | updates the data of the 2D plot                                                                                             |
| [`Stackup.visit`](compolyx.Stackup.visit.md#compolyx.Stackup.visit)(visitor)                                                      | Walk through the tree and let the visitor perform action on every descendant node                                           |
