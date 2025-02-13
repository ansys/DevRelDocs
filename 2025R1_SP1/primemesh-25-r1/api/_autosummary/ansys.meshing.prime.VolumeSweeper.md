<!-- vale off -->

<a id="volumesweeper"></a>

# VolumeSweeper

<a id="ansys.meshing.prime.VolumeSweeper"></a>

### *class* ansys.meshing.prime.VolumeSweeper(model)

VolumeSweeper class provide functions to volume mesh a given set of topovolumes by sweeping or stacking a set of face and edge zonelets. Provide operations to generate volume mesh using stacker technology.

* **Parameters:**
  **model**
  : Server model to create VolumeSweeper object.

  **part_id**
  : Id of the part.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| [`VolumeSweeper.create_base_face`](ansys.meshing.prime.VolumeSweeper.create_base_face.md#ansys.meshing.prime.VolumeSweeper.create_base_face)(part_id, ...)   | Create a face at the specified origin.          |
| [`VolumeSweeper.stack_base_face`](ansys.meshing.prime.VolumeSweeper.stack_base_face.md#ansys.meshing.prime.VolumeSweeper.stack_base_face)(part_id, ...)      | Generate volume mesh by stacking a meshed face. |

<a id="examples-using-volumesweeper"></a>

## Examples using VolumeSweeper

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a printed circuit board with mainly hexahedral elements for structural thermal simulation using the volume sweeper.">  <div class="sphx-glr-thumbnail-title">Mesh a PCB for structural thermal analysis</div>
</div>
* [Mesh a PCB for structural thermal analysis](../../examples/gallery_examples/gallery/05_pcb_stacker.md#sphx-glr-examples-gallery-examples-gallery-05-pcb-stacker-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
