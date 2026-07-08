# Scaffolder

<a id="ansys.meshing.prime.Scaffolder"></a>

### *class* ansys.meshing.prime.Scaffolder(model, part_id)

Scaffolder is used for achieving connections in structures made of sheets and beams. Solid bodies should be suppressed before applying scaffolding.

* **Parameters:**

  **model**
  : Server model to create Scaffolder object.

  **part_id**
  : Id of the part.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| [`Scaffolder.delete_shadowed_topo_faces`](ansys.meshing.prime.Scaffolder.delete_shadowed_topo_faces.md#ansys.meshing.prime.Scaffolder.delete_shadowed_topo_faces)(...)                | Delete fully shadowed topofaces.                   |
| [`Scaffolder.merge_overlapping_topo_faces`](ansys.meshing.prime.Scaffolder.merge_overlapping_topo_faces.md#ansys.meshing.prime.Scaffolder.merge_overlapping_topo_faces)(...)          | Merge overlapping topofaces.                       |
| [`Scaffolder.scaffold_topo_faces_and_beams`](ansys.meshing.prime.Scaffolder.scaffold_topo_faces_and_beams.md#ansys.meshing.prime.Scaffolder.scaffold_topo_faces_and_beams)(...)       | Scaffold faces and beams with provided parameters. |
| [`Scaffolder.split_topo_faces_by_mesh_region`](ansys.meshing.prime.Scaffolder.split_topo_faces_by_mesh_region.md#ansys.meshing.prime.Scaffolder.split_topo_faces_by_mesh_region)(...) | Split input topofaces by mesh region.              |
<!-- vale on -->