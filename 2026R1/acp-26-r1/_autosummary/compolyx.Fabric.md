# Fabric

<a id="compolyx.Fabric"></a>

### *class* compolyx.Fabric(graph, obj, parent=None)

Class to represent fabric.

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`Fabric.active`](compolyx.Fabric.active.md#compolyx.Fabric.active)                                                             | active status of object                                                            |
| [`Fabric.area_price`](compolyx.Fabric.area_price.md#compolyx.Fabric.area_price)                                                 | Area price of fabric                                                               |
| [`Fabric.area_weight`](compolyx.Fabric.area_weight.md#compolyx.Fabric.area_weight)                                              | Area weight of fabric                                                              |
| [`Fabric.cut_off_material`](compolyx.Fabric.cut_off_material.md#compolyx.Fabric.cut_off_material)                               | Cut-off material used in cut-off areas of this fabric.                             |
| [`Fabric.cut_off_material_handling`](compolyx.Fabric.cut_off_material_handling.md#compolyx.Fabric.cut_off_material_handling)    | Type defining how cut-off material is used in cut-off areas of this fabric.        |
| [`Fabric.draping_material_model`](compolyx.Fabric.draping_material_model.md#compolyx.Fabric.draping_material_model)             | Draping material model.                                                            |
| [`Fabric.draping_ud_coefficient`](compolyx.Fabric.draping_ud_coefficient.md#compolyx.Fabric.draping_ud_coefficient)             | UD draping coefficient                                                             |
| [`Fabric.drop_off_material`](compolyx.Fabric.drop_off_material.md#compolyx.Fabric.drop_off_material)                            | Drop-off material used in drop-off areas of this fabric.                           |
| [`Fabric.drop_off_material_handling`](compolyx.Fabric.drop_off_material_handling.md#compolyx.Fabric.drop_off_material_handling) | Type defining how drop-off material is used in drop-off areas of this fabric.      |
| [`Fabric.enabled`](compolyx.Fabric.enabled.md#compolyx.Fabric.enabled)                                                          | Whether this object is currently enabled or not.                                   |
| [`Fabric.graph_plot`](compolyx.Fabric.graph_plot.md#compolyx.Fabric.graph_plot)                                                 | Graph Plot object used to configure 2D plots.                                      |
| [`Fabric.id`](compolyx.Fabric.id.md#compolyx.Fabric.id)                                                                         | ID of object                                                                       |
| [`Fabric.ignore_for_postprocessing`](compolyx.Fabric.ignore_for_postprocessing.md#compolyx.Fabric.ignore_for_postprocessing)    | Flag if this material is NOT post-processed.                                       |
| [`Fabric.is_dict_item`](compolyx.Fabric.is_dict_item.md#compolyx.Fabric.is_dict_item)                                           | Specifies wether the object is an item of a dict                                   |
| [`Fabric.is_list_item`](compolyx.Fabric.is_list_item.md#compolyx.Fabric.is_list_item)                                           | Specifies wether the object is an item of a list                                   |
| [`Fabric.link_path`](compolyx.Fabric.link_path.md#compolyx.Fabric.link_path)                                                    | Root path of the current node in the tree for links to this object                 |
| [`Fabric.material`](compolyx.Fabric.material.md#compolyx.Fabric.material)                                                       | Material of the fabric                                                             |
| [`Fabric.name`](compolyx.Fabric.name.md#compolyx.Fabric.name)                                                                   | Name of object                                                                     |
| [`Fabric.parent`](compolyx.Fabric.parent.md#compolyx.Fabric.parent)                                                             | Parent object in tree                                                              |
| [`Fabric.root_path`](compolyx.Fabric.root_path.md#compolyx.Fabric.root_path)                                                    | Root path of the current node in the tree                                          |
| [`Fabric.status`](compolyx.Fabric.status.md#compolyx.Fabric.status)                                                             | Status of the object                                                               |
| [`Fabric.status_changed`](compolyx.Fabric.status_changed.md#compolyx.Fabric.status_changed)                                     | Boolean flag which is set to true in C++ when up-to-date status of object changes. |
| [`Fabric.thickness`](compolyx.Fabric.thickness.md#compolyx.Fabric.thickness)                                                    | Thickness of fabric                                                                |
| [`Fabric.uid`](compolyx.Fabric.uid.md#compolyx.Fabric.uid)                                                                      | UID of object                                                                      |
| [`Fabric.vertex`](compolyx.Fabric.vertex.md#compolyx.Fabric.vertex)                                                             | This will throw an error if the object has been removed from the graph.            |

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`Fabric.capture_analysis_plot`](compolyx.Fabric.capture_analysis_plot.md#compolyx.Fabric.capture_analysis_plot)([path, size])   | Saves the 2D polar plot to a file.                                                                                           |
| [`Fabric.clt_query`](compolyx.Fabric.clt_query.md#compolyx.Fabric.clt_query)([query])                                            | Returns the properties of the classical laminate theory:                                                                     |
| [`Fabric.create_plot`](compolyx.Fabric.create_plot.md#compolyx.Fabric.create_plot)([query])                                      | Generates 2D plots with the results of interest.                                                                             |
| [`Fabric.find_parent`](compolyx.Fabric.find_parent.md#compolyx.Fabric.find_parent)(type)                                         | Function steps up the tree and returns the first parent with given type.                                                     |
| [`Fabric.is_constant`](compolyx.Fabric.is_constant.md#compolyx.Fabric.is_constant)()                                             | Returns true if all engineering constants and strength limits of the assigned material are constant.                         |
| [`Fabric.obj_exists`](compolyx.Fabric.obj_exists.md#compolyx.Fabric.obj_exists)()                                                | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`Fabric.serialize`](compolyx.Fabric.serialize.md#compolyx.Fabric.serialize)()                                                   | Serialize to Python string.                                                                                                  |
| [`Fabric.serialize_name_and_id`](compolyx.Fabric.serialize_name_and_id.md#compolyx.Fabric.serialize_name_and_id)()               | Helper function to serialize name and ID.                                                                                    |
| [`Fabric.update`](compolyx.Fabric.update.md#compolyx.Fabric.update)()                                                            |                                                                                                                              |
| [`Fabric.update_plot`](compolyx.Fabric.update_plot.md#compolyx.Fabric.update_plot)()                                             | Updates the 2D plot.                                                                                                         |
| [`Fabric.visit`](compolyx.Fabric.visit.md#compolyx.Fabric.visit)(visitor)                                                        | Walk through the tree and let the visitor perform action on every descendant node.                                           |
