<!-- vale off -->

# SizeControl

### *class* ansys.meshing.prime.SizeControl(model, id, object_id, name, local=False)

Compute the size field for a volumetric surface meshing.

* **Parameters:**
  **model**
  : Server model to create and modify size controls from.

  **id**
  : ID of the size control.

  **object_id**
  : Object ID of the size control.

  **name**
  : Name of the size control.

  **local**
  : Unused. The default is `False`.

<!-- !! processed by numpydoc !! -->

### Methods

| [`SizeControl.get_boi_sizing_params`](ansys.meshing.prime.SizeControl.get_boi_sizing_params.md#ansys.meshing.prime.SizeControl.get_boi_sizing_params)()                         | Get the body of influence sizing parameters of size control.                              |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| [`SizeControl.get_curvature_sizing_params`](ansys.meshing.prime.SizeControl.get_curvature_sizing_params.md#ansys.meshing.prime.SizeControl.get_curvature_sizing_params)()       | Get the curvature sizing parameters of size control.                                      |
| [`SizeControl.get_hard_sizing_params`](ansys.meshing.prime.SizeControl.get_hard_sizing_params.md#ansys.meshing.prime.SizeControl.get_hard_sizing_params)()                      | Get the hard sizing parameters of size control.                                           |
| [`SizeControl.get_meshed_sizing_params`](ansys.meshing.prime.SizeControl.get_meshed_sizing_params.md#ansys.meshing.prime.SizeControl.get_meshed_sizing_params)()                | Get the meshed sizing parameters of size control.                                         |
| [`SizeControl.get_proximity_sizing_params`](ansys.meshing.prime.SizeControl.get_proximity_sizing_params.md#ansys.meshing.prime.SizeControl.get_proximity_sizing_params)()       | Get the proximity sizing parameters of size control.                                      |
| [`SizeControl.get_scope`](ansys.meshing.prime.SizeControl.get_scope.md#ansys.meshing.prime.SizeControl.get_scope)()                                                             | Get the scope used by size control to evaluate entities.                                  |
| [`SizeControl.get_soft_sizing_params`](ansys.meshing.prime.SizeControl.get_soft_sizing_params.md#ansys.meshing.prime.SizeControl.get_soft_sizing_params)()                      | Get the soft sizing parameters of size control.                                           |
| [`SizeControl.get_summary`](ansys.meshing.prime.SizeControl.get_summary.md#ansys.meshing.prime.SizeControl.get_summary)(params)                                                 | Get the size control summary along with the evaluated scope for the provided parameters.. |
| [`SizeControl.set_boi_sizing_params`](ansys.meshing.prime.SizeControl.set_boi_sizing_params.md#ansys.meshing.prime.SizeControl.set_boi_sizing_params)(params)                   | Set the body of influence sizing parameters to compute volumetric size field.             |
| [`SizeControl.set_curvature_sizing_params`](ansys.meshing.prime.SizeControl.set_curvature_sizing_params.md#ansys.meshing.prime.SizeControl.set_curvature_sizing_params)(params) | Set the curvature sizing parameters to compute volumetric size field.                     |
| [`SizeControl.set_hard_sizing_params`](ansys.meshing.prime.SizeControl.set_hard_sizing_params.md#ansys.meshing.prime.SizeControl.set_hard_sizing_params)(params)                | Set the hard sizing parameters to compute volumetric size field.                          |
| [`SizeControl.set_meshed_sizing_params`](ansys.meshing.prime.SizeControl.set_meshed_sizing_params.md#ansys.meshing.prime.SizeControl.set_meshed_sizing_params)(params)          | Set the meshed sizing parameters to compute volumetric size field.                        |
| [`SizeControl.set_proximity_sizing_params`](ansys.meshing.prime.SizeControl.set_proximity_sizing_params.md#ansys.meshing.prime.SizeControl.set_proximity_sizing_params)(params) | Set the proximity sizing parameters to compute volumetric size field.                     |
| [`SizeControl.set_scope`](ansys.meshing.prime.SizeControl.set_scope.md#ansys.meshing.prime.SizeControl.set_scope)(scope)                                                        | Set the scope for size control to evaluate.                                               |
| [`SizeControl.set_soft_sizing_params`](ansys.meshing.prime.SizeControl.set_soft_sizing_params.md#ansys.meshing.prime.SizeControl.set_soft_sizing_params)(params)                | Set the soft sizing parameters to compute volumetric size field.                          |
| [`SizeControl.set_suggested_name`](ansys.meshing.prime.SizeControl.set_suggested_name.md#ansys.meshing.prime.SizeControl.set_suggested_name)(name)                              | Set the unique name for the size control to a suggested name.                             |

### Attributes

| [`SizeControl.id`](ansys.meshing.prime.SizeControl.id.md#ansys.meshing.prime.SizeControl.id)       | Get the id of SizeControl.    |
|----------------------------------------------------------------------------------------------------|-------------------------------|
| [`SizeControl.name`](ansys.meshing.prime.SizeControl.name.md#ansys.meshing.prime.SizeControl.name) | Get the name of size control. |
<!-- vale on -->
