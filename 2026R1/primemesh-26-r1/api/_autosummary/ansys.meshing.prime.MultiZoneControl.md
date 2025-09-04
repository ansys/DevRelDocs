# MultiZoneControl

<a id="ansys.meshing.prime.MultiZoneControl"></a>

### *class* ansys.meshing.prime.MultiZoneControl(model, id, object_id, name)

MultiZoneControl provides a way to gather all the information required for MultiZone meshing.

The MultiZone meshing provides hex meshing capabilities.
Different type of mesh can be generated using MultiZoneControl. For example, sweep mesh, map mesh and edge biased mesh.

* **Parameters:**

  **model**
  : Server model to create MultiZoneControl object.

  **id**
  : Id of the MultiZoneControl.

  **object_id**
  : Object id of the MultiZoneControl.

  **name**
  : Name of the MultiZoneControl.

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| [`MultiZoneControl.set_edge_biasing_params`](ansys.meshing.prime.MultiZoneControl.set_edge_biasing_params.md#ansys.meshing.prime.MultiZoneControl.set_edge_biasing_params)(...)                   | Sets the parameters for edge biasing in terms of topoedges and topofaces during MultiZone mesh.                                                  |
| [`MultiZoneControl.set_map_mesh_params`](ansys.meshing.prime.MultiZoneControl.set_map_mesh_params.md#ansys.meshing.prime.MultiZoneControl.set_map_mesh_params)(scope_info)                        | Set the parameters for map meshing in terms of topofaces during MultiZone mesh.                                                                  |
| [`MultiZoneControl.set_multi_zone_sizing_params`](ansys.meshing.prime.MultiZoneControl.set_multi_zone_sizing_params.md#ansys.meshing.prime.MultiZoneControl.set_multi_zone_sizing_params)(params) | Sets the MultiZone parameters.                                                                                                                   |
| [`MultiZoneControl.set_surface_scope`](ansys.meshing.prime.MultiZoneControl.set_surface_scope.md#ansys.meshing.prime.MultiZoneControl.set_surface_scope)(scope_info)                              | Sets the scope for surface in terms of topofaces.                                                                                                |
| [`MultiZoneControl.set_sweep_mesh_params`](ansys.meshing.prime.MultiZoneControl.set_sweep_mesh_params.md#ansys.meshing.prime.MultiZoneControl.set_sweep_mesh_params)(...)                         | Set the parameters for sweep meshing in terms of topofaces during MultiZone mesh.                                                                |
| [`MultiZoneControl.set_volume_scope`](ansys.meshing.prime.MultiZoneControl.set_volume_scope.md#ansys.meshing.prime.MultiZoneControl.set_volume_scope)(scope_info)                                 | Sets the scope for volume in terms of topovolumes.The topovolumes given by the scope are imported by MultiZone to generate MultiZone mesh on it. |

### Attributes

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| [`MultiZoneControl.id`](ansys.meshing.prime.MultiZoneControl.id.md#ansys.meshing.prime.MultiZoneControl.id)       | Get the id of MultiZoneControl.   |
| [`MultiZoneControl.name`](ansys.meshing.prime.MultiZoneControl.name.md#ansys.meshing.prime.MultiZoneControl.name) | Get the name of MultiZoneControl. |
<!-- vale on -->