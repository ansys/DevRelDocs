<!-- vale off -->

# WrapperControl

### *class* ansys.meshing.prime.WrapperControl(model, id, object_id, name)

Provides all parameters and controls used for wrapping.

* **Parameters:**
  **model**
  : Server model to create and modify wrapper controls from.

  **id**
  : ID of the wrapper control.

  **object_id**
  : Object ID of the wrapper control.

  **name**
  : Name of the wrapper control

<!-- !! processed by numpydoc !! -->

### Methods

| [`WrapperControl.get_geometry_scope`](ansys.meshing.prime.WrapperControl.get_geometry_scope.md#ansys.meshing.prime.WrapperControl.get_geometry_scope)()                                            | Gets geometry scope of wrapper control.                                                    |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`WrapperControl.get_live_material_points`](ansys.meshing.prime.WrapperControl.get_live_material_points.md#ansys.meshing.prime.WrapperControl.get_live_material_points)()                          | Gets list of material point names.                                                         |
| [`WrapperControl.set_contact_preventions`](ansys.meshing.prime.WrapperControl.set_contact_preventions.md#ansys.meshing.prime.WrapperControl.set_contact_preventions)(params)                       | Set contact preventions to the wrapper control.                                            |
| [`WrapperControl.set_feature_recoveries`](ansys.meshing.prime.WrapperControl.set_feature_recoveries.md#ansys.meshing.prime.WrapperControl.set_feature_recoveries)(params)                          | Set feature recoveries to the wrapper control.                                             |
| [`WrapperControl.set_geometry_scope`](ansys.meshing.prime.WrapperControl.set_geometry_scope.md#ansys.meshing.prime.WrapperControl.set_geometry_scope)(scope)                                       | Sets geometry scope to given scope.                                                        |
| [`WrapperControl.set_leak_preventions`](ansys.meshing.prime.WrapperControl.set_leak_preventions.md#ansys.meshing.prime.WrapperControl.set_leak_preventions)(params)                                | Set leak preventions to the wrapper control.                                               |
| [`WrapperControl.set_live_material_points`](ansys.meshing.prime.WrapperControl.set_live_material_points.md#ansys.meshing.prime.WrapperControl.set_live_material_points)(...)                       | Set live material points to the wrapper control.                                           |
| [`WrapperControl.set_shadow_geometry_scope`](ansys.meshing.prime.WrapperControl.set_shadow_geometry_scope.md#ansys.meshing.prime.WrapperControl.set_shadow_geometry_scope)(scope)                  | Sets shadow geometry scope to given scope.                                                 |
| [`WrapperControl.set_suggested_name`](ansys.meshing.prime.WrapperControl.set_suggested_name.md#ansys.meshing.prime.WrapperControl.set_suggested_name)(name)                                        | Set the unique name for the wrapper control based on a suggested name.                     |
| [`WrapperControl.set_suggested_wrapper_part_name`](ansys.meshing.prime.WrapperControl.set_suggested_wrapper_part_name.md#ansys.meshing.prime.WrapperControl.set_suggested_wrapper_part_name)(name) | Sets the given name for the created wrapper part  after wrapping with the wrapper control. |

### Attributes

| [`WrapperControl.id`](ansys.meshing.prime.WrapperControl.id.md#ansys.meshing.prime.WrapperControl.id)       | Get the id of WrapperControl.        |
|-------------------------------------------------------------------------------------------------------------|--------------------------------------|
| [`WrapperControl.name`](ansys.meshing.prime.WrapperControl.name.md#ansys.meshing.prime.WrapperControl.name) | Get the name of the wrapper control. |
<!-- vale on -->
