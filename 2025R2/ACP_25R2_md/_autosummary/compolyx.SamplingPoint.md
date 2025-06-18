# SamplingPoint

<a id="compolyx.SamplingPoint"></a>

### *class* compolyx.SamplingPoint(graph, obj, parent=None)

The sampling point enables picking through the laminate at a certain point to run detailed analyses.

Key features:
: - Layup in the object tree of the closest element to the selected point.
  - Sampling direction defines the ply order (bottom-up or top-down).
  - Reference direction defines the 0 degree axis of the element used for the evaluations (CLT).
  - Optional a user-defined coordinate system can be selected to compute the reference direction. The element normal and reference direction.
    defines the result coordinate system.
  - 2D plots showing the layup, stress, strain and failure distribution through the laminate.
  - Polar plot of the laminate properties.
  - Analysis based on the Classical Laminate Theory (CLT).
  - Export to ESAComp, CSV file, etc.

* **Usage:**
  ```pycon
  >>> model.create_sampling_point(name='Sampling Point')
  ```

### Attributes

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [`SamplingPoint.active`](compolyx.SamplingPoint.active.md#compolyx.SamplingPoint.active)                                                                            | active status of object                                                                                    |
| [`SamplingPoint.consider_coupling_effect`](compolyx.SamplingPoint.consider_coupling_effect.md#compolyx.SamplingPoint.consider_coupling_effect)                      | Whether to consider coupling effects (B-Matrix) for the calculation of the laminate engineering constants. |
| [`SamplingPoint.direction`](compolyx.SamplingPoint.direction.md#compolyx.SamplingPoint.direction)                                                                   | Sampling Point Direction                                                                                   |
| [`SamplingPoint.element_id`](compolyx.SamplingPoint.element_id.md#compolyx.SamplingPoint.element_id)                                                                | Element ID (label) of the Sampling Point                                                                   |
| [`SamplingPoint.enabled`](compolyx.SamplingPoint.enabled.md#compolyx.SamplingPoint.enabled)                                                                         | Whether this object is currently enabled.                                                                  |
| [`SamplingPoint.graph_plot`](compolyx.SamplingPoint.graph_plot.md#compolyx.SamplingPoint.graph_plot)                                                                | Graph Plot object used to configure 2D plots.                                                              |
| [`SamplingPoint.id`](compolyx.SamplingPoint.id.md#compolyx.SamplingPoint.id)                                                                                        | ID of object                                                                                               |
| [`SamplingPoint.is_dict_item`](compolyx.SamplingPoint.is_dict_item.md#compolyx.SamplingPoint.is_dict_item)                                                          | Specifies wether the object is an item of a dict                                                           |
| [`SamplingPoint.is_list_item`](compolyx.SamplingPoint.is_list_item.md#compolyx.SamplingPoint.is_list_item)                                                          | Specifies wether the object is an item of a list                                                           |
| [`SamplingPoint.link_path`](compolyx.SamplingPoint.link_path.md#compolyx.SamplingPoint.link_path)                                                                   | Root path of the current node in the tree for links to this object                                         |
| [`SamplingPoint.locked`](compolyx.SamplingPoint.locked.md#compolyx.SamplingPoint.locked)                                                                            | Sampling Point is generated from an imported source and cannot be changed.                                 |
| [`SamplingPoint.name`](compolyx.SamplingPoint.name.md#compolyx.SamplingPoint.name)                                                                                  | Name of object                                                                                             |
| [`SamplingPoint.offset_is_middle`](compolyx.SamplingPoint.offset_is_middle.md#compolyx.SamplingPoint.offset_is_middle)                                              | Whether to offset the reference surface to the mid-plane of the laminate.                                  |
| [`SamplingPoint.parent`](compolyx.SamplingPoint.parent.md#compolyx.SamplingPoint.parent)                                                                            | Parent object in tree                                                                                      |
| [`SamplingPoint.plies`](compolyx.SamplingPoint.plies.md#compolyx.SamplingPoint.plies)                                                                               | Plies of the Sampling Point                                                                                |
| [`SamplingPoint.point`](compolyx.SamplingPoint.point.md#compolyx.SamplingPoint.point)                                                                               | Sampling Point Point                                                                                       |
| [`SamplingPoint.reference_direction`](compolyx.SamplingPoint.reference_direction.md#compolyx.SamplingPoint.reference_direction)                                     | Reference direction                                                                                        |
| [`SamplingPoint.root_path`](compolyx.SamplingPoint.root_path.md#compolyx.SamplingPoint.root_path)                                                                   | Root path of the current node in the tree                                                                  |
| [`SamplingPoint.rosette`](compolyx.SamplingPoint.rosette.md#compolyx.SamplingPoint.rosette)                                                                         | Rosette of the Sampling Point                                                                              |
| [`SamplingPoint.solution_set`](compolyx.SamplingPoint.solution_set.md#compolyx.SamplingPoint.solution_set)                                                          | Solution and Set selection                                                                                 |
| [`SamplingPoint.status`](compolyx.SamplingPoint.status.md#compolyx.SamplingPoint.status)                                                                            | Status of the object                                                                                       |
| [`SamplingPoint.status_changed`](compolyx.SamplingPoint.status_changed.md#compolyx.SamplingPoint.status_changed)                                                    | Boolean flag which is set to true in C++ when up-to-date status of object changes.                         |
| [`SamplingPoint.uid`](compolyx.SamplingPoint.uid.md#compolyx.SamplingPoint.uid)                                                                                     | UID of object                                                                                              |
| [`SamplingPoint.use_default_reference_direction`](compolyx.SamplingPoint.use_default_reference_direction.md#compolyx.SamplingPoint.use_default_reference_direction) | Flag to use default reference direction                                                                    |
| [`SamplingPoint.vertex`](compolyx.SamplingPoint.vertex.md#compolyx.SamplingPoint.vertex)                                                                            | This will throw an error if the object has been removed from the graph.                                    |

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`SamplingPoint.aligned`](compolyx.SamplingPoint.aligned.md#compolyx.SamplingPoint.aligned)()                                                       | Returns true if the sampling direction is aligned with the normal direction of the closest element.                          |
| [`SamplingPoint.capture_analysis_plot`](compolyx.SamplingPoint.capture_analysis_plot.md#compolyx.SamplingPoint.capture_analysis_plot)([path, size]) | Saves the sampling point analysis plot to a file.                                                                            |
| [`SamplingPoint.clt_query`](compolyx.SamplingPoint.clt_query.md#compolyx.SamplingPoint.clt_query)([query, ...])                                     | Returns the properties of the classical laminate theory:                                                                     |
| [`SamplingPoint.create_plot`](compolyx.SamplingPoint.create_plot.md#compolyx.SamplingPoint.create_plot)([query, ...])                               | Generates 2D plots with the results of interest.                                                                             |
| [`SamplingPoint.export_laminate`](compolyx.SamplingPoint.export_laminate.md#compolyx.SamplingPoint.export_laminate)(filename[, ...])                |                                                                                                                              |
| [`SamplingPoint.find_parent`](compolyx.SamplingPoint.find_parent.md#compolyx.SamplingPoint.find_parent)(type)                                       | Function steps up the tree and returns the first parent with given type.                                                     |
| [`SamplingPoint.obj_exists`](compolyx.SamplingPoint.obj_exists.md#compolyx.SamplingPoint.obj_exists)()                                              | Checks if \_\_obj still references the c++ object (i.e. has not been reset to None by self._delete) AND exists in the graph. |
| [`SamplingPoint.serialize`](compolyx.SamplingPoint.serialize.md#compolyx.SamplingPoint.serialize)()                                                 |                                                                                                                              |
| [`SamplingPoint.serialize_name_and_id`](compolyx.SamplingPoint.serialize_name_and_id.md#compolyx.SamplingPoint.serialize_name_and_id)()             | Helper function to serialize name and ID.                                                                                    |
| [`SamplingPoint.update`](compolyx.SamplingPoint.update.md#compolyx.SamplingPoint.update)()                                                          |                                                                                                                              |
| [`SamplingPoint.update_plot`](compolyx.SamplingPoint.update_plot.md#compolyx.SamplingPoint.update_plot)(offset_is_middle, ...)                      | Updates the 2D plot.                                                                                                         |
| [`SamplingPoint.visit`](compolyx.SamplingPoint.visit.md#compolyx.SamplingPoint.visit)(visitor)                                                      | Walk through the tree and let the visitor perform action on every descendant node.                                           |
