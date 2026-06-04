# ControlData

<a id="ansys.meshing.prime.ControlData"></a>

### *class* ansys.meshing.prime.ControlData(model, id, object_id, name)

Contains all controls.

This class contains all controls, including size controls, prism controls, multizone controls
and wrapper controls.

* **Parameters:**

  **model**
  : Server model to create ControlData object.

  **id**
  : Id of the ControlData.

  **object_id**
  : Object id of the ControlData.

  **name**
  : Name of the ControlData.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| [`ControlData.create_multi_zone_control`](ansys.meshing.prime.ControlData.create_multi_zone_control.md#ansys.meshing.prime.ControlData.create_multi_zone_control)()                       | Create multizone control with defaults.                                     |
| [`ControlData.create_periodic_control`](ansys.meshing.prime.ControlData.create_periodic_control.md#ansys.meshing.prime.ControlData.create_periodic_control)()                             | Create a periodic control.                                                  |
| [`ControlData.create_prism_control`](ansys.meshing.prime.ControlData.create_prism_control.md#ansys.meshing.prime.ControlData.create_prism_control)()                                      | Create a prism control.                                                     |
| [`ControlData.create_shell_bl_control`](ansys.meshing.prime.ControlData.create_shell_bl_control.md#ansys.meshing.prime.ControlData.create_shell_bl_control)()                             | Create a ShellBL control.                                                   |
| [`ControlData.create_size_control`](ansys.meshing.prime.ControlData.create_size_control.md#ansys.meshing.prime.ControlData.create_size_control)(sizing_type)                              | Create a size control for a sizing type.                                    |
| [`ControlData.create_thin_volume_control`](ansys.meshing.prime.ControlData.create_thin_volume_control.md#ansys.meshing.prime.ControlData.create_thin_volume_control)()                    | Create a thin volume control.                                               |
| [`ControlData.create_volume_control`](ansys.meshing.prime.ControlData.create_volume_control.md#ansys.meshing.prime.ControlData.create_volume_control)()                                   | Create a volume control.                                                    |
| [`ControlData.create_wrapper_control`](ansys.meshing.prime.ControlData.create_wrapper_control.md#ansys.meshing.prime.ControlData.create_wrapper_control)()                                | Create a wrapper control with default values.                               |
| [`ControlData.delete_controls`](ansys.meshing.prime.ControlData.delete_controls.md#ansys.meshing.prime.ControlData.delete_controls)(control_ids)                                          | Delete the control for one or more IDs.                                     |
| [`ControlData.get_multi_zone_control_by_name`](ansys.meshing.prime.ControlData.get_multi_zone_control_by_name.md#ansys.meshing.prime.ControlData.get_multi_zone_control_by_name)(name)    | Get the multizone control by name.                                          |
| [`ControlData.get_multi_zone_controls`](ansys.meshing.prime.ControlData.get_multi_zone_controls.md#ansys.meshing.prime.ControlData.get_multi_zone_controls)()                             | Get ids of all the MultiZone controls.                                      |
| [`ControlData.get_part_zonelets`](ansys.meshing.prime.ControlData.get_part_zonelets.md#ansys.meshing.prime.ControlData.get_part_zonelets)(scope)                                          | Creates an array of part zonelet structure using the input ScopeDefinition. |
| [`ControlData.get_periodic_control_by_name`](ansys.meshing.prime.ControlData.get_periodic_control_by_name.md#ansys.meshing.prime.ControlData.get_periodic_control_by_name)(name)          | Get a periodic control by name.                                             |
| [`ControlData.get_prism_control_by_name`](ansys.meshing.prime.ControlData.get_prism_control_by_name.md#ansys.meshing.prime.ControlData.get_prism_control_by_name)(name)                   | Get a prism control by name.                                                |
| [`ControlData.get_scope_face_zonelets`](ansys.meshing.prime.ControlData.get_scope_face_zonelets.md#ansys.meshing.prime.ControlData.get_scope_face_zonelets)(scope, ...)                   | Get the face zonelet ids for the given scope.                               |
| [`ControlData.get_scope_parts`](ansys.meshing.prime.ControlData.get_scope_parts.md#ansys.meshing.prime.ControlData.get_scope_parts)(scope)                                                | Get the part ids for the given scope.                                       |
| [`ControlData.get_shell_bl_control_by_name`](ansys.meshing.prime.ControlData.get_shell_bl_control_by_name.md#ansys.meshing.prime.ControlData.get_shell_bl_control_by_name)(name)          | Get a shell bl control by name.                                             |
| [`ControlData.get_size_control_by_name`](ansys.meshing.prime.ControlData.get_size_control_by_name.md#ansys.meshing.prime.ControlData.get_size_control_by_name)(name)                      | Get a size control by name.                                                 |
| [`ControlData.get_thin_volume_control_by_name`](ansys.meshing.prime.ControlData.get_thin_volume_control_by_name.md#ansys.meshing.prime.ControlData.get_thin_volume_control_by_name)(name) | Get a thin volume control by name.                                          |
| [`ControlData.get_volume_control_by_name`](ansys.meshing.prime.ControlData.get_volume_control_by_name.md#ansys.meshing.prime.ControlData.get_volume_control_by_name)(name)                | Get a volume control by name.                                               |
| [`ControlData.get_wrapper_control_by_name`](ansys.meshing.prime.ControlData.get_wrapper_control_by_name.md#ansys.meshing.prime.ControlData.get_wrapper_control_by_name)(name)             | Get the wrapper control by name.                                            |
| [`ControlData.multi_zone_controls`](ansys.meshing.prime.ControlData.multi_zone_controls.md#ansys.meshing.prime.ControlData.multi_zone_controls)()                                         | Get the multizone controls.                                                 |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|
| [`ControlData.id`](ansys.meshing.prime.ControlData.id.md#ansys.meshing.prime.ControlData.id)                                                       | Get the id of ControlData.    |
| [`ControlData.name`](ansys.meshing.prime.ControlData.name.md#ansys.meshing.prime.ControlData.name)                                                 | Get the name of ControlData.  |
| [`ControlData.periodic_controls`](ansys.meshing.prime.ControlData.periodic_controls.md#ansys.meshing.prime.ControlData.periodic_controls)          | Get the periodic controls.    |
| [`ControlData.prism_controls`](ansys.meshing.prime.ControlData.prism_controls.md#ansys.meshing.prime.ControlData.prism_controls)                   | Get the prism controls.       |
| [`ControlData.shell_bl_controls`](ansys.meshing.prime.ControlData.shell_bl_controls.md#ansys.meshing.prime.ControlData.shell_bl_controls)          | Get the shell bl controls.    |
| [`ControlData.size_controls`](ansys.meshing.prime.ControlData.size_controls.md#ansys.meshing.prime.ControlData.size_controls)                      | Get the size controls.        |
| [`ControlData.thin_volume_controls`](ansys.meshing.prime.ControlData.thin_volume_controls.md#ansys.meshing.prime.ControlData.thin_volume_controls) | Get the thin volume controls. |
| [`ControlData.volume_controls`](ansys.meshing.prime.ControlData.volume_controls.md#ansys.meshing.prime.ControlData.volume_controls)                | Get the volume controls.      |
| [`ControlData.wrapper_controls`](ansys.meshing.prime.ControlData.wrapper_controls.md#ansys.meshing.prime.ControlData.wrapper_controls)             | Get the wrapper controls.     |
<!-- vale on -->