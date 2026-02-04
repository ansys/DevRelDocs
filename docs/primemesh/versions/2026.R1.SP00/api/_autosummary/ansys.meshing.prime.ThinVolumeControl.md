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

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| [`ThinVolumeControl.get_source_scope`](ansys.meshing.prime.ThinVolumeControl.get_source_scope.md#ansys.meshing.prime.ThinVolumeControl.get_source_scope)()                                     | Gets the source of thin volume control scope.             |
| [`ThinVolumeControl.get_target_scope`](ansys.meshing.prime.ThinVolumeControl.get_target_scope.md#ansys.meshing.prime.ThinVolumeControl.get_target_scope)()                                     | Gets the target of thin volume control scope.             |
| [`ThinVolumeControl.get_volume_scope`](ansys.meshing.prime.ThinVolumeControl.get_volume_scope.md#ansys.meshing.prime.ThinVolumeControl.get_volume_scope)()                                     | Gets the volume scope of thin volume control.             |
| [`ThinVolumeControl.set_source_scope`](ansys.meshing.prime.ThinVolumeControl.set_source_scope.md#ansys.meshing.prime.ThinVolumeControl.set_source_scope)(entities)                             | Sets the source surface scope of thin volume control.     |
| [`ThinVolumeControl.set_target_scope`](ansys.meshing.prime.ThinVolumeControl.set_target_scope.md#ansys.meshing.prime.ThinVolumeControl.set_target_scope)(entities)                             | Sets the target surface scope of thin volume control.     |
| [`ThinVolumeControl.set_thin_volume_mesh_params`](ansys.meshing.prime.ThinVolumeControl.set_thin_volume_mesh_params.md#ansys.meshing.prime.ThinVolumeControl.set_thin_volume_mesh_params)(...) | Sets thin volume mesh parameters for thin volume control. |
| [`ThinVolumeControl.set_volume_scope`](ansys.meshing.prime.ThinVolumeControl.set_volume_scope.md#ansys.meshing.prime.ThinVolumeControl.set_volume_scope)(entities)                             | Sets the volume scope of thin volume control.             |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------|------------------------------------|
| [`ThinVolumeControl.id`](ansys.meshing.prime.ThinVolumeControl.id.md#ansys.meshing.prime.ThinVolumeControl.id)       | Get the id of ThinVolumeControl.   |
| [`ThinVolumeControl.name`](ansys.meshing.prime.ThinVolumeControl.name.md#ansys.meshing.prime.ThinVolumeControl.name) | Get the name of ThinVolumeControl. |
<!-- vale on -->