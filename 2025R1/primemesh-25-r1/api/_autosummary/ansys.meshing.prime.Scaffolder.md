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

<a id="examples-using-scaffolder"></a>

## Examples using Scaffolder

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to use topology-based connection to generate conformal surface mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a mid-surfaced bracket for a structural analysis</div>
</div>
* [Mesh a mid-surfaced bracket for a structural analysis](../../examples/gallery_examples/gallery/01_bracket_scaffold.md#sphx-glr-examples-gallery-examples-gallery-01-bracket-scaffold-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
