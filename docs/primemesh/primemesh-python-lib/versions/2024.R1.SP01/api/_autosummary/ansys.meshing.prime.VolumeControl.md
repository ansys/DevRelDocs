<!-- vale off -->

# VolumeControl

### *class* ansys.meshing.prime.VolumeControl(model, id, object_id, name, local=False)

Defines the scope and type of volume mesh to generate.

* **Parameters:**
  **model**
  : Server model to create and modify volume controls from.

  **id**
  : ID of the volume control.

  **object_id**
  : Object ID of the volume control.

  **name**
  : Name of the volume control.

  **local**
  : Unused. The default is `False`.

<!-- !! processed by numpydoc !! -->

### Methods

| [`VolumeControl.get_params`](ansys.meshing.prime.VolumeControl.get_params.md#ansys.meshing.prime.VolumeControl.get_params)()                             | Get the parameters of the volume control.                             |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`VolumeControl.get_scope`](ansys.meshing.prime.VolumeControl.get_scope.md#ansys.meshing.prime.VolumeControl.get_scope)()                                | Gets the scope for the volume control.                                |
| [`VolumeControl.set_params`](ansys.meshing.prime.VolumeControl.set_params.md#ansys.meshing.prime.VolumeControl.set_params)(volume_control_params)        | Sets the volume control parameters.                                   |
| [`VolumeControl.set_scope`](ansys.meshing.prime.VolumeControl.set_scope.md#ansys.meshing.prime.VolumeControl.set_scope)(scope)                           | Sets the scope for volume control to evaluate.                        |
| [`VolumeControl.set_suggested_name`](ansys.meshing.prime.VolumeControl.set_suggested_name.md#ansys.meshing.prime.VolumeControl.set_suggested_name)(name) | Set the unique name for the volume control based on a suggested name. |

### Attributes

| [`VolumeControl.id`](ansys.meshing.prime.VolumeControl.id.md#ansys.meshing.prime.VolumeControl.id)       | Get the id of VolumeControl.        |
|----------------------------------------------------------------------------------------------------------|-------------------------------------|
| [`VolumeControl.name`](ansys.meshing.prime.VolumeControl.name.md#ansys.meshing.prime.VolumeControl.name) | Get the name of the volume control. |
<!-- vale on -->
