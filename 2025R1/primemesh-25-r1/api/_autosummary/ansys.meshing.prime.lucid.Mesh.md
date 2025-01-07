# Mesh

<a id="ansys.meshing.prime.lucid.Mesh"></a>

### *class* ansys.meshing.prime.lucid.Mesh(model)

Provides methods for users who are new to meshing.

This class also serves as a tutorial for commonly used meshing workflows.

The `Mesh` class provides these functionalities:

* Surface meshing with constant and variable sizing with triangle
  or quad dominant mesh
* Volume meshing with prism, tetrahedral, and polyhedral elements
* Surface wrapping
* Helper method for creating zones from labels
* Helper methods for reading and writing files

<!-- !! processed by numpydoc !! -->

### Methods

| [`Mesh.compute_volumes`](ansys.meshing.prime.lucid.Mesh.compute_volumes.md#ansys.meshing.prime.lucid.Mesh.compute_volumes)([part_expression, ...])                                | Compute volumes in the parts defined by the part expression.               |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`Mesh.connect_faces`](ansys.meshing.prime.lucid.Mesh.connect_faces.md#ansys.meshing.prime.lucid.Mesh.connect_faces)([part_expression, ...])                                      | Connect face zonelets with a label name pattern within a given tolerance.  |
| [`Mesh.create_constant_size_control`](ansys.meshing.prime.lucid.Mesh.create_constant_size_control.md#ansys.meshing.prime.lucid.Mesh.create_constant_size_control)([...])          | Generate constant size control on a scope.                                 |
| [`Mesh.create_curvature_size_control`](ansys.meshing.prime.lucid.Mesh.create_curvature_size_control.md#ansys.meshing.prime.lucid.Mesh.create_curvature_size_control)([...])       | Generate a curvature size control on a scope.                              |
| [`Mesh.create_flow_volume`](ansys.meshing.prime.lucid.Mesh.create_flow_volume.md#ansys.meshing.prime.lucid.Mesh.create_flow_volume)([...])                                        | Create flow volume by the face labels defining the boundary of the volume. |
| [`Mesh.create_zones_from_labels`](ansys.meshing.prime.lucid.Mesh.create_zones_from_labels.md#ansys.meshing.prime.lucid.Mesh.create_zones_from_labels)([...])                      | Create zones from labels.                                                  |
| [`Mesh.delete_topology`](ansys.meshing.prime.lucid.Mesh.delete_topology.md#ansys.meshing.prime.lucid.Mesh.delete_topology)([part_expression, ...])                                | Delete topology in one or more parts.                                      |
| [`Mesh.merge_parts`](ansys.meshing.prime.lucid.Mesh.merge_parts.md#ansys.meshing.prime.lucid.Mesh.merge_parts)([parts_expression, new_name])                                      | Merge multiple parts into a single part.                                   |
| [`Mesh.read`](ansys.meshing.prime.lucid.Mesh.read.md#ansys.meshing.prime.lucid.Mesh.read)(file_name[, append, cad_reader_route])                                                  | Read or import files of different formats based on file extensions.        |
| [`Mesh.surface_mesh`](ansys.meshing.prime.lucid.Mesh.surface_mesh.md#ansys.meshing.prime.lucid.Mesh.surface_mesh)([min_size, max_size, ...])                                      | Generate a surface mesh on a scope.                                        |
| [`Mesh.surface_mesh_with_size_controls`](ansys.meshing.prime.lucid.Mesh.surface_mesh_with_size_controls.md#ansys.meshing.prime.lucid.Mesh.surface_mesh_with_size_controls)([...]) | Generate a surface mesh on a scope using the given size controls.          |
| [`Mesh.volume_mesh`](ansys.meshing.prime.lucid.Mesh.volume_mesh.md#ansys.meshing.prime.lucid.Mesh.volume_mesh)([volume_fill_type, ...])                                           | Generate a volume mesh on the model.                                       |
| [`Mesh.wrap`](ansys.meshing.prime.lucid.Mesh.wrap.md#ansys.meshing.prime.lucid.Mesh.wrap)([min_size, max_size, growth_rate, ...])                                                 | Wrap and remesh the input.                                                 |
| [`Mesh.write`](ansys.meshing.prime.lucid.Mesh.write.md#ansys.meshing.prime.lucid.Mesh.write)(file_name)                                                                           | Write or export files of different formats based on file extensions.       |

<a id="examples-using-mesh"></a>

## Examples using Mesh

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example shows how mesh and geometry formats are converted during import and export.">  <div class="sphx-glr-thumbnail-title">Convert data when importing and exporting mesh and CAD formats</div>
</div>
* [Convert data when importing and exporting mesh and CAD formats](../../examples/gallery_examples/gallery/00_lucid_file_IO.md#sphx-glr-examples-gallery-examples-gallery-00-lucid-file-io-py)

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
