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

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`Mesh.compute_volumes`](ansys.meshing.prime.lucid.Mesh.compute_volumes.md#ansys.meshing.prime.lucid.Mesh.compute_volumes)([part_expression, ...])                                | Compute volumes in the parts defined by the part expression.               |
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

<!-- vale on -->
