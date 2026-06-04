<!-- vale off -->

<a id="periodiccontrol"></a>

# PeriodicControl

<a id="ansys.meshing.prime.PeriodicControl"></a>

### *class* ansys.meshing.prime.PeriodicControl(model, id, object_id, name)

Periodic controls provide settings for the recovery of periodic surfaces.

A periodic control is specified by the scope (source surfaces) and the transformation parameters: the center, axis and angle.

* **Parameters:**

  **model**
  : Server model to create PeriodicControl object.

  **id**
  : Id of the PeriodicControl.

  **object_id**
  : Object id of the PeriodicControl.

  **name**
  : Name of the PeriodicControl.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| [`PeriodicControl.get_params`](ansys.meshing.prime.PeriodicControl.get_params.md#ansys.meshing.prime.PeriodicControl.get_params)()                             | Get the parameters of the periodic control.                                                  |
| [`PeriodicControl.get_scope`](ansys.meshing.prime.PeriodicControl.get_scope.md#ansys.meshing.prime.PeriodicControl.get_scope)()                                | Gets the scope for the periodic control.                                                     |
| [`PeriodicControl.get_summary`](ansys.meshing.prime.PeriodicControl.get_summary.md#ansys.meshing.prime.PeriodicControl.get_summary)(params)                    | Get the periodic control summary along with the evaluated scope for the provided parameters. |
| [`PeriodicControl.set_params`](ansys.meshing.prime.PeriodicControl.set_params.md#ansys.meshing.prime.PeriodicControl.set_params)(...)                          | Set the periodic control parameters.                                                         |
| [`PeriodicControl.set_scope`](ansys.meshing.prime.PeriodicControl.set_scope.md#ansys.meshing.prime.PeriodicControl.set_scope)(scope)                           | Sets the scope for periodic control to evaluate.                                             |
| [`PeriodicControl.set_suggested_name`](ansys.meshing.prime.PeriodicControl.set_suggested_name.md#ansys.meshing.prime.PeriodicControl.set_suggested_name)(name) | Sets the unique name for the periodic control based on the suggested name.                   |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------|----------------------------------|
| [`PeriodicControl.id`](ansys.meshing.prime.PeriodicControl.id.md#ansys.meshing.prime.PeriodicControl.id)       | Get the id of PeriodicControl.   |
| [`PeriodicControl.name`](ansys.meshing.prime.PeriodicControl.name.md#ansys.meshing.prime.PeriodicControl.name) | Get the name of PeriodicControl. |
<!-- vale on -->