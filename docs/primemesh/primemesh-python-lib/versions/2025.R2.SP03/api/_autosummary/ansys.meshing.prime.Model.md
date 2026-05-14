# Model

<a id="ansys.meshing.prime.Model"></a>

### *class* ansys.meshing.prime.Model(comm, id, object_id, name)

Model is the nucleus of Prime. Model forms the base and contains all the information about Prime.

You can access any information in Prime only through Model.
Model allows you to query TopoData, ControlData, Parts, SizeFields and more.

* **Parameters:**

  **comm**
  : Communicator to connect with the Ansys Prime server.

  **id**
  : Id of the Model.

  **object_id**
  : Object id of the Model.

  **name**
  : Name of the Model.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| [`Model.activate_volumetric_size_fields`](ansys.meshing.prime.Model.activate_volumetric_size_fields.md#ansys.meshing.prime.Model.activate_volumetric_size_fields)(...)       | Activate the sizefields identified by the given sizefield ids.           |
| [`Model.as_polydata`](ansys.meshing.prime.Model.as_polydata.md#ansys.meshing.prime.Model.as_polydata)([update])                                                              | Get the model as a polydata.                                             |
| [`Model.create_zone`](ansys.meshing.prime.Model.create_zone.md#ansys.meshing.prime.Model.create_zone)(suggested_name, type)                                                  | Creates zone for the given zone type.                                    |
| [`Model.deactivate_volumetric_size_fields`](ansys.meshing.prime.Model.deactivate_volumetric_size_fields.md#ansys.meshing.prime.Model.deactivate_volumetric_size_fields)(...) | Deactivate the size fields with the given size field ids.                |
| [`Model.delete_parts`](ansys.meshing.prime.Model.delete_parts.md#ansys.meshing.prime.Model.delete_parts)(part_ids)                                                           | Delete parts and their contents.                                         |
| [`Model.delete_volumetric_size_fields`](ansys.meshing.prime.Model.delete_volumetric_size_fields.md#ansys.meshing.prime.Model.delete_volumetric_size_fields)(...)             | Delete the sizefields identified by the given sizefield ids.             |
| [`Model.delete_zone`](ansys.meshing.prime.Model.delete_zone.md#ansys.meshing.prime.Model.delete_zone)(zone_id)                                                               | Deletes zone with the given id.                                          |
| [`Model.get_active_volumetric_size_fields`](ansys.meshing.prime.Model.get_active_volumetric_size_fields.md#ansys.meshing.prime.Model.get_active_volumetric_size_fields)()    | Get the active sizefield ids.                                            |
| [`Model.get_global_sizing_params`](ansys.meshing.prime.Model.get_global_sizing_params.md#ansys.meshing.prime.Model.get_global_sizing_params)()                               | Get global sizing parameters.                                            |
| [`Model.get_num_compute_nodes`](ansys.meshing.prime.Model.get_num_compute_nodes.md#ansys.meshing.prime.Model.get_num_compute_nodes)()                                        | Get the number of compute nodes.                                         |
| [`Model.get_num_threads`](ansys.meshing.prime.Model.get_num_threads.md#ansys.meshing.prime.Model.get_num_threads)()                                                          | Get the number of threads enabled for multithreaded operation.           |
| [`Model.get_part`](ansys.meshing.prime.Model.get_part.md#ansys.meshing.prime.Model.get_part)(id)                                                                             | Get the part by ID.                                                      |
| [`Model.get_part_by_name`](ansys.meshing.prime.Model.get_part_by_name.md#ansys.meshing.prime.Model.get_part_by_name)(name)                                                   | Get the part by name.                                                    |
| [`Model.get_scoped_polydata`](ansys.meshing.prime.Model.get_scoped_polydata.md#ansys.meshing.prime.Model.get_scoped_polydata)(scope[, update])                               | Get the scoped polydata of the model.                                    |
| [`Model.get_size_field_name`](ansys.meshing.prime.Model.get_size_field_name.md#ansys.meshing.prime.Model.get_size_field_name)(size_field_id)                                 | Gets the name of size field with the given id.                           |
| [`Model.get_volumetric_size_fields`](ansys.meshing.prime.Model.get_volumetric_size_fields.md#ansys.meshing.prime.Model.get_volumetric_size_fields)()                         | Get the sizefield ids.                                                   |
| [`Model.get_zone_by_name`](ansys.meshing.prime.Model.get_zone_by_name.md#ansys.meshing.prime.Model.get_zone_by_name)(zone_name)                                              | Gets the zone with the provided name.                                    |
| [`Model.get_zone_name`](ansys.meshing.prime.Model.get_zone_name.md#ansys.meshing.prime.Model.get_zone_name)(id)                                                              | Get the name of given zone.                                              |
| [`Model.merge_parts`](ansys.meshing.prime.Model.merge_parts.md#ansys.meshing.prime.Model.merge_parts)(part_ids, params)                                                      | Merge multiple parts into a single part.                                 |
| [`Model.set_global_sizing_params`](ansys.meshing.prime.Model.set_global_sizing_params.md#ansys.meshing.prime.Model.set_global_sizing_params)(params)                         | Set global sizing parameters.                                            |
| [`Model.set_num_threads`](ansys.meshing.prime.Model.set_num_threads.md#ansys.meshing.prime.Model.set_num_threads)(num)                                                       | Sets the number of threads for multithreaded operation.                  |
| [`Model.set_suggested_size_field_name`](ansys.meshing.prime.Model.set_suggested_size_field_name.md#ansys.meshing.prime.Model.set_suggested_size_field_name)(...)             | Sets the suggested name of size field with the given id.                 |
| [`Model.set_suggested_zone_name`](ansys.meshing.prime.Model.set_suggested_zone_name.md#ansys.meshing.prime.Model.set_suggested_zone_name)(id, name)                          | Sets the unique name for zone with given id based on the suggested name. |
| [`Model.set_working_directory`](ansys.meshing.prime.Model.set_working_directory.md#ansys.meshing.prime.Model.set_working_directory)(path)                                    | Set working directory.                                                   |
| [`Model.start_distributed_meshing`](ansys.meshing.prime.Model.start_distributed_meshing.md#ansys.meshing.prime.Model.start_distributed_meshing)()                            | Enables distributed meshing mode.                                        |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`Model.control_data`](ansys.meshing.prime.Model.control_data.md#ansys.meshing.prime.Model.control_data)                      | Get the control data for the model.                            |
| [`Model.id`](ansys.meshing.prime.Model.id.md#ansys.meshing.prime.Model.id)                                                    | Get the id of Model.                                           |
| [`Model.logger`](ansys.meshing.prime.Model.logger.md#ansys.meshing.prime.Model.logger)                                        | Get PyPrimeMesh's logger instance.                             |
| [`Model.material_point_data`](ansys.meshing.prime.Model.material_point_data.md#ansys.meshing.prime.Model.material_point_data) | Get material point data for the model.                         |
| [`Model.name`](ansys.meshing.prime.Model.name.md#ansys.meshing.prime.Model.name)                                              | Get the name of Model.                                         |
| [`Model.parts`](ansys.meshing.prime.Model.parts.md#ansys.meshing.prime.Model.parts)                                           | Get the list of parts for the model.                           |
| [`Model.python_logger`](ansys.meshing.prime.Model.python_logger.md#ansys.meshing.prime.Model.python_logger)                   | Get python standard logger from PyPrimeMesh's logger instance. |
| [`Model.topo_data`](ansys.meshing.prime.Model.topo_data.md#ansys.meshing.prime.Model.topo_data)                               | Get the TopoData for the model.                                |
<!-- vale on -->