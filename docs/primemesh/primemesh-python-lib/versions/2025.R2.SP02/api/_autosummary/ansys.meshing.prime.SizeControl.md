# SizeControl

<a id="ansys.meshing.prime.SizeControl"></a>

### *class* ansys.meshing.prime.SizeControl(model, id, object_id, name, local=False)

Size control is used to compute the size field.

The size field is computed based on the size control defined.
Different type of size controls provide control over how the mesh size is distributed on a
surface or within the volume.

* **Parameters:**

  **model**
  : Server model to create SizeControl object.

  **id**
  : Id of the SizeControl.

  **object_id**
  : Object id of the SizeControl.

  **name**
  : Name of the SizeControl..

  **local**
  : Unused. The default is `False`.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| [`SizeControl.get_boi_sizing_params`](ansys.meshing.prime.SizeControl.get_boi_sizing_params.md#ansys.meshing.prime.SizeControl.get_boi_sizing_params)()                         | Get the body of influence sizing parameters of size control.                              |
| [`SizeControl.get_curvature_sizing_params`](ansys.meshing.prime.SizeControl.get_curvature_sizing_params.md#ansys.meshing.prime.SizeControl.get_curvature_sizing_params)()       | Get the curvature sizing parameters of size control.                                      |
| [`SizeControl.get_hard_sizing_params`](ansys.meshing.prime.SizeControl.get_hard_sizing_params.md#ansys.meshing.prime.SizeControl.get_hard_sizing_params)()                      | Get the hard sizing parameters of size control.                                           |
| [`SizeControl.get_meshed_sizing_params`](ansys.meshing.prime.SizeControl.get_meshed_sizing_params.md#ansys.meshing.prime.SizeControl.get_meshed_sizing_params)()                | Get the meshed sizing parameters of size control.                                         |
| [`SizeControl.get_proximity_sizing_params`](ansys.meshing.prime.SizeControl.get_proximity_sizing_params.md#ansys.meshing.prime.SizeControl.get_proximity_sizing_params)()       | Get the proximity sizing parameters of size control.                                      |
| [`SizeControl.get_scope`](ansys.meshing.prime.SizeControl.get_scope.md#ansys.meshing.prime.SizeControl.get_scope)()                                                             | Get the scope used by size control to evaluate entities.                                  |
| [`SizeControl.get_sizing_type`](ansys.meshing.prime.SizeControl.get_sizing_type.md#ansys.meshing.prime.SizeControl.get_sizing_type)()                                           | Gets the sizing type for the size control.                                                |
| [`SizeControl.get_soft_sizing_params`](ansys.meshing.prime.SizeControl.get_soft_sizing_params.md#ansys.meshing.prime.SizeControl.get_soft_sizing_params)()                      | Get the soft sizing parameters of size control.                                           |
| [`SizeControl.get_soi_sizing_params`](ansys.meshing.prime.SizeControl.get_soi_sizing_params.md#ansys.meshing.prime.SizeControl.get_soi_sizing_params)()                         | Get the sphere of influence sizing parameters of size control.                            |
| [`SizeControl.get_summary`](ansys.meshing.prime.SizeControl.get_summary.md#ansys.meshing.prime.SizeControl.get_summary)(params)                                                 | Get the size control summary along with the evaluated scope for the provided parameters.. |
| [`SizeControl.set_boi_sizing_params`](ansys.meshing.prime.SizeControl.set_boi_sizing_params.md#ansys.meshing.prime.SizeControl.set_boi_sizing_params)(params)                   | Set the body of influence sizing parameters to compute volumetric size field.             |
| [`SizeControl.set_curvature_sizing_params`](ansys.meshing.prime.SizeControl.set_curvature_sizing_params.md#ansys.meshing.prime.SizeControl.set_curvature_sizing_params)(params) | Set the curvature sizing parameters to compute volumetric size field.                     |
| [`SizeControl.set_hard_sizing_params`](ansys.meshing.prime.SizeControl.set_hard_sizing_params.md#ansys.meshing.prime.SizeControl.set_hard_sizing_params)(params)                | Set the hard sizing parameters to compute volumetric size field.                          |
| [`SizeControl.set_meshed_sizing_params`](ansys.meshing.prime.SizeControl.set_meshed_sizing_params.md#ansys.meshing.prime.SizeControl.set_meshed_sizing_params)(params)          | Set the meshed sizing parameters to compute volumetric size field.                        |
| [`SizeControl.set_proximity_sizing_params`](ansys.meshing.prime.SizeControl.set_proximity_sizing_params.md#ansys.meshing.prime.SizeControl.set_proximity_sizing_params)(params) | Set the proximity sizing parameters to compute volumetric size field.                     |
| [`SizeControl.set_scope`](ansys.meshing.prime.SizeControl.set_scope.md#ansys.meshing.prime.SizeControl.set_scope)(scope)                                                        | Set the scope for size control to evaluate.                                               |
| [`SizeControl.set_soft_sizing_params`](ansys.meshing.prime.SizeControl.set_soft_sizing_params.md#ansys.meshing.prime.SizeControl.set_soft_sizing_params)(params)                | Set the soft sizing parameters to compute volumetric size field.                          |
| [`SizeControl.set_soi_sizing_params`](ansys.meshing.prime.SizeControl.set_soi_sizing_params.md#ansys.meshing.prime.SizeControl.set_soi_sizing_params)(params)                   | Set the sphere of influence sizing parameters to compute volumetric size field.           |
| [`SizeControl.set_suggested_name`](ansys.meshing.prime.SizeControl.set_suggested_name.md#ansys.meshing.prime.SizeControl.set_suggested_name)(name)                              | Set the unique name for the size control to a suggested name.                             |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------|-------------------------------|
| [`SizeControl.id`](ansys.meshing.prime.SizeControl.id.md#ansys.meshing.prime.SizeControl.id)       | Get the id of SizeControl.    |
| [`SizeControl.name`](ansys.meshing.prime.SizeControl.name.md#ansys.meshing.prime.SizeControl.name) | Get the name of size control. |
<!-- vale on -->