# create_base_face

<a id="ansys.meshing.prime.VolumeSweeper.create_base_face"></a>

#### VolumeSweeper.create_base_face(part_id, topo_volume_ids, params)

Create a face at the specified origin.

This method creates a face at the specified origin and perpendicular to the
specified direction. Also, it imprints model edges on the face, makes necessary
edge repairs, and duplicates relevant size controls on the base face.

* **Parameters:**
  **part_id**
  : ID of part.

  **topo_volume_ids**
  : IDs of the volumes to mesh.

  **params**
  : Mesh stacker parameters.
* **Returns:**
  :

  [`MeshStackerResults`](ansys.meshing.prime.MeshStackerResults.md#ansys.meshing.prime.MeshStackerResults)
  : Results from creating the face.
* **Return type:**
  [`MeshStackerResults`](ansys.meshing.prime.MeshStackerResults.md#ansys.meshing.prime.MeshStackerResults)

### Examples

```pycon
>>> results = volumesweeper.create_base_face(part_id, topo_volume_ids, params)
```

<!-- !! processed by numpydoc !! -->

<a id="examples-using-volumesweeper-create-base-face"></a>

## Examples using VolumeSweeper.create_base_face

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a printed circuit board with mainly hexahedral elements for structural thermal simulation using the volume sweeper.">  <div class="sphx-glr-thumbnail-title">Mesh a PCB for structural thermal analysis</div>
</div>
* [Mesh a PCB for structural thermal analysis](../../examples/gallery_examples/gallery/05_pcb_stacker.md#sphx-glr-examples-gallery-examples-gallery-05-pcb-stacker-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to set the base mesh size and number of layers for each solid in a generic PCB geometry and then generate a mesh.">  <div class="sphx-glr-thumbnail-title">Mesh a generic PCB geometry with multiple hexa layers</div>
</div>
* [Mesh a generic PCB geometry with multiple hexa layers](../../examples/gallery_examples/gallery/09_multi_layer_quad_mesh_pcb.md#sphx-glr-examples-gallery-examples-gallery-09-multi-layer-quad-mesh-pcb-py)

<div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a set of solder balls with mainly hexahedral elements. The solder is initially modelled as cylindrical to allow meshing using stacker and then local match morph controls are applied to recover the spherical shapes.">  <div class="sphx-glr-thumbnail-title">Mesh a set of solder balls (beta)</div>
</div>
* [Mesh a set of solder balls (beta)](../../examples/gallery_examples/gallery/11_solder_ball.md#sphx-glr-examples-gallery-examples-gallery-11-solder-ball-py)

<!-- thumbnail-parent-div-close --></div>
