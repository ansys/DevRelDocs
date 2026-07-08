# SubLaminate

<a id="compolyx.SubLaminate"></a>

### *class* compolyx.SubLaminate(graph, obj, parent=None)

Class to represent sublaminate.

### Attributes

| Name | Description |
|------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`SubLaminate.active`](compolyx.SubLaminate.active.md#compolyx.SubLaminate.active)                         | Active status of object                                                              |
| [`SubLaminate.area_price`](compolyx.SubLaminate.area_price.md#compolyx.SubLaminate.area_price)             | Price per area of the Sub Laminate                                                   |
| [`SubLaminate.area_weight`](compolyx.SubLaminate.area_weight.md#compolyx.SubLaminate.area_weight)          | Area weight of the Sub Laminate                                                      |
| [`SubLaminate.enabled`](compolyx.SubLaminate.enabled.md#compolyx.SubLaminate.enabled)                      | Whether this object is currently enabled or not                                     |
| [`SubLaminate.fabrics`](compolyx.SubLaminate.fabrics.md#compolyx.SubLaminate.fabrics)                      | Fabrics property of the Sub Laminate                                                 |
| [`SubLaminate.graph_plot`](compolyx.SubLaminate.graph_plot.md#compolyx.SubLaminate.graph_plot)             | Graph Plot object used to configure 2D plots                                       |
| [`SubLaminate.id`](compolyx.SubLaminate.id.md#compolyx.SubLaminate.id)                                     | ID of object                                                                         |
| [`SubLaminate.is_dict_item`](compolyx.SubLaminate.is_dict_item.md#compolyx.SubLaminate.is_dict_item)       | Specifies whether the object is an item of a dict                                     |
| [`SubLaminate.is_list_item`](compolyx.SubLaminate.is_list_item.md#compolyx.SubLaminate.is_list_item)       | Specifies whether the object is an item of a list                                     |
| [`SubLaminate.layup_sequence`](compolyx.SubLaminate.layup_sequence.md#compolyx.SubLaminate.layup_sequence) | Layup Sequence of the Sub Laminate. Available options: `Top-Down` or `Bottom-Up`                  |
| [`SubLaminate.link_path`](compolyx.SubLaminate.link_path.md#compolyx.SubLaminate.link_path)                | Root path of the current node in the tree for links to this object                   |
| [`SubLaminate.name`](compolyx.SubLaminate.name.md#compolyx.SubLaminate.name)                               | Name of object                                                                       |
| [`SubLaminate.parent`](compolyx.SubLaminate.parent.md#compolyx.SubLaminate.parent)                         | Parent object in tree                                                                |
| [`SubLaminate.root_path`](compolyx.SubLaminate.root_path.md#compolyx.SubLaminate.root_path)                | Root path of the current node in the tree                                            |
| [`SubLaminate.status`](compolyx.SubLaminate.status.md#compolyx.SubLaminate.status)                         | Status of the object                                                                 |
| [`SubLaminate.status_changed`](compolyx.SubLaminate.status_changed.md#compolyx.SubLaminate.status_changed) | Boolean flag which is set to true in C++ when up-to-date status of object changes   |
| [`SubLaminate.symmetry`](compolyx.SubLaminate.symmetry.md#compolyx.SubLaminate.symmetry)                   | Symmetry of the Sub Laminate. Available options: `No Symmetry`, `Even Symmetry`, or `Odd Symmetry` |
| [`SubLaminate.thickness`](compolyx.SubLaminate.thickness.md#compolyx.SubLaminate.thickness)                | Thickness of the Sub Laminate                                                        |
| [`SubLaminate.uid`](compolyx.SubLaminate.uid.md#compolyx.SubLaminate.uid)                                  | UID of object                                                                        |
| [`SubLaminate.vertex`](compolyx.SubLaminate.vertex.md#compolyx.SubLaminate.vertex)                         | This will throw an error if the object has been removed from the graph              |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`SubLaminate.add_fabric`](compolyx.SubLaminate.add_fabric.md#compolyx.SubLaminate.add_fabric)(fabric[, angle])                               | Add fabric at end of fabrics list                                                                                           |
| [`SubLaminate.capture_analysis_plot`](compolyx.SubLaminate.capture_analysis_plot.md#compolyx.SubLaminate.capture_analysis_plot)([path, size]) | Saves the 2D polar plot to a file                                                                                           |
| [`SubLaminate.clear_fabrics`](compolyx.SubLaminate.clear_fabrics.md#compolyx.SubLaminate.clear_fabrics)()                                     | Clear all fabrics                                                                                                           |
| [`SubLaminate.clt_query`](compolyx.SubLaminate.clt_query.md#compolyx.SubLaminate.clt_query)([query])                                          | Returns the properties of the classical laminate theory                                                                     |
| [`SubLaminate.create_plot`](compolyx.SubLaminate.create_plot.md#compolyx.SubLaminate.create_plot)([query, ...])                               | Generates 2D plots with the results of interest                                                                            |
| [`SubLaminate.find_parent`](compolyx.SubLaminate.find_parent.md#compolyx.SubLaminate.find_parent)(type)                                       | Function steps up the tree and returns the first parent with given type                                                     |
| [`SubLaminate.get_ordered_fabrics`](compolyx.SubLaminate.get_ordered_fabrics.md#compolyx.SubLaminate.get_ordered_fabrics)()                   | Returns a list with all sub-materials (fabrics and stackups) and orientations including symmetry and layup sequence option |
| [`SubLaminate.get_ordered_sub_materials`](compolyx.SubLaminate.get_ordered_sub_materials.md#compolyx.SubLaminate.get_ordered_sub_materials)() | Returns a list with all fabrics and orientations including symmetry and layup sequence option                               |
| [`SubLaminate.insert_fabric`](compolyx.SubLaminate.insert_fabric.md#compolyx.SubLaminate.insert_fabric)(pos, fabric, angle)                   | Insert fabric at given position                                                                                            |
| [`SubLaminate.is_constant`](compolyx.SubLaminate.is_constant.md#compolyx.SubLaminate.is_constant)()                                           | Returns true if all engineering constants and strength limits of the assigned fabrics are constant                          |
| [`SubLaminate.obj_exists`](compolyx.SubLaminate.obj_exists.md#compolyx.SubLaminate.obj_exists)()                                              | Checks if \_\_obj still references the C++ object (i.e. has not been reset to None by self._delete) and exists in the graph |
| [`SubLaminate.remove_fabric`](compolyx.SubLaminate.remove_fabric.md#compolyx.SubLaminate.remove_fabric)(pos)                                  | Remove fabric from position                                                                                                 |
| [`SubLaminate.serialize`](compolyx.SubLaminate.serialize.md#compolyx.SubLaminate.serialize)()                                                 | Serialize to Python string                                                                                                  |
| [`SubLaminate.serialize_name_and_id`](compolyx.SubLaminate.serialize_name_and_id.md#compolyx.SubLaminate.serialize_name_and_id)()             | Helper function to serialize name and ID                                                                                    |
| [`SubLaminate.update`](compolyx.SubLaminate.update.md#compolyx.SubLaminate.update)()                                                          |                                                                                                                              |
| [`SubLaminate.update_plot`](compolyx.SubLaminate.update_plot.md#compolyx.SubLaminate.update_plot)()                                           | Updates the data of the 2D plot                                                                                             |
| [`SubLaminate.visit`](compolyx.SubLaminate.visit.md#compolyx.SubLaminate.visit)(visitor)                                                      | Walk through the tree and let the visitor perform action on every descendant node                                          |
