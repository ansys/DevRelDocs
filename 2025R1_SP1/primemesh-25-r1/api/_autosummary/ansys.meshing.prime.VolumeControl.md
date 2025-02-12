<!-- vale off -->

<a id="volumecontrol"></a>

# VolumeControl

<a id="ansys.meshing.prime.VolumeControl"></a>

### *class* ansys.meshing.prime.VolumeControl(model, id, object_id, name, local=False)

Defines the scope and type of volume mesh to generate.

* **Parameters:**
  **model**
  : Server model to create VolumeControl object.

  **id**
  : Id of the VolumeControl.

  **object_id**
  : Object id of the VolumeControl.

  **name**
  : Name of the VolumeControl.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`VolumeControl.get_params`](ansys.meshing.prime.VolumeControl.get_params.md#ansys.meshing.prime.VolumeControl.get_params)()                             | Get the parameters of the volume control.                             |
| [`VolumeControl.get_scope`](ansys.meshing.prime.VolumeControl.get_scope.md#ansys.meshing.prime.VolumeControl.get_scope)()                                | Gets the scope for the volume control.                                |
| [`VolumeControl.set_params`](ansys.meshing.prime.VolumeControl.set_params.md#ansys.meshing.prime.VolumeControl.set_params)(volume_control_params)        | Sets the volume control parameters.                                   |
| [`VolumeControl.set_scope`](ansys.meshing.prime.VolumeControl.set_scope.md#ansys.meshing.prime.VolumeControl.set_scope)(scope)                           | Sets the scope for volume control to evaluate.                        |
| [`VolumeControl.set_suggested_name`](ansys.meshing.prime.VolumeControl.set_suggested_name.md#ansys.meshing.prime.VolumeControl.set_suggested_name)(name) | Set the unique name for the volume control based on a suggested name. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------|-------------------------------------|
| [`VolumeControl.id`](ansys.meshing.prime.VolumeControl.id.md#ansys.meshing.prime.VolumeControl.id)       | Get the id of VolumeControl.        |
| [`VolumeControl.name`](ansys.meshing.prime.VolumeControl.name.md#ansys.meshing.prime.VolumeControl.name) | Get the name of the volume control. |

<a id="examples-using-volumecontrol"></a>

## Examples using VolumeControl

<div class="sphx-glr-thumbnails">
<!-- thumbnail-parent-div-open --><div class="sphx-glr-thumbcontainer" tooltip="Summary: This example demonstrates how to generate a mesh for a generic F1 rear wing STL file model.">  <div class="sphx-glr-thumbnail-title">Mesh a generic F1 car rear wing for external aero simulation</div>
</div>
* [Mesh a generic F1 car rear wing for external aero simulation](../../examples/gallery_examples/gallery/08_lucid_generic_f1_rear_wing.md#sphx-glr-examples-gallery-examples-gallery-08-lucid-generic-f1-rear-wing-py)

<!-- thumbnail-parent-div-close --></div>
<!-- vale on -->
