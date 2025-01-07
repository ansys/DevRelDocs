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

| [`Model.activate_volumetric_size_fields`](ansys.meshing.prime.Model.activate_volumetric_size_fields.md#ansys.meshing.prime.Model.activate_volumetric_size_fields)(...)       | Activate the sizefields identified by the given sizefield ids.           |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
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

| [`Model.control_data`](ansys.meshing.prime.Model.control_data.md#ansys.meshing.prime.Model.control_data)                      | Get the control data for the model.                            |
|-------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`Model.id`](ansys.meshing.prime.Model.id.md#ansys.meshing.prime.Model.id)                                                    | Get the id of Model.                                           |
| [`Model.logger`](ansys.meshing.prime.Model.logger.md#ansys.meshing.prime.Model.logger)                                        | Get PyPrimeMesh's logger instance.                             |
| [`Model.material_point_data`](ansys.meshing.prime.Model.material_point_data.md#ansys.meshing.prime.Model.material_point_data) | Get material point data for the model.                         |
| [`Model.name`](ansys.meshing.prime.Model.name.md#ansys.meshing.prime.Model.name)                                              | Get the name of Model.                                         |
| [`Model.parts`](ansys.meshing.prime.Model.parts.md#ansys.meshing.prime.Model.parts)                                           | Get the list of parts for the model.                           |
| [`Model.python_logger`](ansys.meshing.prime.Model.python_logger.md#ansys.meshing.prime.Model.python_logger)                   | Get python standard logger from PyPrimeMesh's logger instance. |
| [`Model.topo_data`](ansys.meshing.prime.Model.topo_data.md#ansys.meshing.prime.Model.topo_data)                               | Get the TopoData for the model.                                |

<a id="examples-using-model"></a>

## Examples using Model

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example shows how mesh and geometry formats are converted during import and export.">  <div class="sphx-glr-thumbnail-title">Convert data when importing and exporting mesh and CAD formats</div>
</div>
* [Convert data when importing and exporting mesh and CAD formats](../../examples/gallery_examples/gallery/00_lucid_file_IO.md#sphx-glr-examples-gallery-examples-gallery-00-lucid-file-io-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to use topology-based connection to generate conformal surface mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a mid-surfaced bracket for a structural analysis</div>
</div>
* [Mesh a mid-surfaced bracket for a structural analysis](../../examples/gallery_examples/gallery/01_bracket_scaffold.md#sphx-glr-examples-gallery-examples-gallery-01-bracket-scaffold-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a mixing elbow for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Mesh a mixing elbow for a flow analysis</div>
</div>
* [Mesh a mixing elbow for a flow analysis](../../examples/gallery_examples/gallery/02_lucid_mixing_elbow.md#sphx-glr-examples-gallery-examples-gallery-02-lucid-mixing-elbow-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a pipe T-section for both structural thermal and fluid flow simulation.">  <div class="sphx-glr-thumbnail-title">Mesh a pipe T-section for structural thermal and fluid flow analysis</div>
</div>
* [Mesh a pipe T-section for structural thermal and fluid flow analysis](../../examples/gallery_examples/gallery/03_lucid_pipe_tee.md#sphx-glr-examples-gallery-examples-gallery-03-lucid-pipe-tee-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to wrap a toy car for a flow analysis.">  <div class="sphx-glr-thumbnail-title">Wrap a toy car for a flow analysis</div>
</div>
* [Wrap a toy car for a flow analysis](../../examples/gallery_examples/gallery/04_lucid_toy_car.md#sphx-glr-examples-gallery-examples-gallery-04-lucid-toy-car-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a printed circuit board with mainly hexahedral elements for structural thermal simulation using the volume sweeper.">  <div class="sphx-glr-thumbnail-title">Mesh a PCB for structural thermal analysis</div>
</div>
* [Mesh a PCB for structural thermal analysis](../../examples/gallery_examples/gallery/05_pcb_stacker.md#sphx-glr-examples-gallery-examples-gallery-05-pcb-stacker-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to morph a structural hexahedral mesh of a turbine blade to a new deformed shape defined by a target geometry file.">  <div class="sphx-glr-thumbnail-title">Morph a hexahedral mesh of a turbine blade to a new shape</div>
</div>
* [Morph a hexahedral mesh of a turbine blade to a new shape](../../examples/gallery_examples/gallery/06_blade_morph.md#sphx-glr-examples-gallery-examples-gallery-06-blade-morph-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to create a contact patch for use with wrapping to avoid meshing into a narrow contact region between two objects.">  <div class="sphx-glr-thumbnail-title">Create a contact patch for wrapping between a wheel and ground interface</div>
</div>
* [Create a contact patch for wrapping between a wheel and ground interface](../../examples/gallery_examples/gallery/10_wheel_ground_contact_patch.md#sphx-glr-examples-gallery-examples-gallery-10-wheel-ground-contact-patch-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<div class="sphx-glr-thumbcontainer" tooltip="A block comment must be included at the top of any new example. Each example must have a reference tag in this format:">  <div class="sphx-glr-thumbnail-title">Add a new example</div>
</div>
* [Add a new example](../../examples/gallery_examples/misc/example_template.md#sphx-glr-examples-gallery-examples-misc-example-template-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
