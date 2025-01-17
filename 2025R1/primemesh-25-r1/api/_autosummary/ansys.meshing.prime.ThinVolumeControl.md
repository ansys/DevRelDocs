# ThinVolumeControl

<a id="ansys.meshing.prime.ThinVolumeControl"></a>

### *class* ansys.meshing.prime.ThinVolumeControl(model, id, object_id, name)

ThinVolumeControl allows you to generate prisms in the space between surfaces.

ThinVolumeControl allows you to control generation of prisms in the thin space between surfaces. Controls include setting the source face scope, target face scope and thin volume mesh parameters.

* **Parameters:**
  **model**
  : Server model to create ThinVolumeControl object.

  **id**
  : Id of the ThinVolumeControl.

  **object_id**
  : Object id of the ThinVolumeControl.

  **name**
  : Name of the ThinVolumeControl.

<!-- !! processed by numpydoc !! -->

### Methods

| [`ThinVolumeControl.set_source_scope`](ansys.meshing.prime.ThinVolumeControl.set_source_scope.md#ansys.meshing.prime.ThinVolumeControl.set_source_scope)(entities)                             | Sets the source surface scope of thin volume control.     |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`ThinVolumeControl.set_target_scope`](ansys.meshing.prime.ThinVolumeControl.set_target_scope.md#ansys.meshing.prime.ThinVolumeControl.set_target_scope)(entities)                             | Sets the target surface scope of thin volume control.     |
| [`ThinVolumeControl.set_thin_volume_mesh_params`](ansys.meshing.prime.ThinVolumeControl.set_thin_volume_mesh_params.md#ansys.meshing.prime.ThinVolumeControl.set_thin_volume_mesh_params)(...) | Sets thin volume mesh parameters for thin volume control. |
| [`ThinVolumeControl.set_volume_scope`](ansys.meshing.prime.ThinVolumeControl.set_volume_scope.md#ansys.meshing.prime.ThinVolumeControl.set_volume_scope)(entities)                             | Sets the volume scope of thin volume control.             |

### Attributes

| [`ThinVolumeControl.id`](ansys.meshing.prime.ThinVolumeControl.id.md#ansys.meshing.prime.ThinVolumeControl.id)       | Get the id of ThinVolumeControl.   |
|----------------------------------------------------------------------------------------------------------------------|------------------------------------|
| [`ThinVolumeControl.name`](ansys.meshing.prime.ThinVolumeControl.name.md#ansys.meshing.prime.ThinVolumeControl.name) | Get the name of ThinVolumeControl. |

<a id="examples-using-thinvolumecontrol"></a>

## Examples using ThinVolumeControl

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to mesh a thin solid with hexahedral and prism cells.">  <div class="sphx-glr-thumbnail-title">Mesh a saddle bracket for a structural analysis</div>
</div>
* [Mesh a saddle bracket for a structural analysis](../../examples/gallery_examples/gallery/07_saddle_bracket.md#sphx-glr-examples-gallery-examples-gallery-07-saddle-bracket-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
