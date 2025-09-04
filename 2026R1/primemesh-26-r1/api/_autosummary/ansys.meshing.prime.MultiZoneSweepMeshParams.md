# MultiZoneSweepMeshParams

<a id="ansys.meshing.prime.MultiZoneSweepMeshParams"></a>

### *class* ansys.meshing.prime.MultiZoneSweepMeshParams(model=None, source_and_target_scope=None, sweep_mesh_size=None, n_divisions=None, thin_sweep=None, sweep_type=None, json_data=None, \*\*kwargs)

Defines MultiZone thin sweep mesh control parameters.

* **Parameters:**

  **model: Model**
  : Model to create a `MultiZoneSweepMeshParams` object with default parameters.

  **source_and_target_scope: ScopeDefinition, optional**
  : Source and target faces used to determine the direction of sweep in MultiZone meshing.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **sweep_mesh_size: float, optional**
  : Sweep mesh size used to determine the mesh size and number of divisions in the sweep direction.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **n_divisions: int, optional**
  : Number of divisions in the sweep direction.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **thin_sweep: bool, optional**
  : Thin sweep option set to True will generate sweep mesh in thin volumes by respecting nDivisions.   Thin sweep option set to False will generate sweep mesh whose number of divisions in the direction of sweep is determined by sweepMeshSize.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **sweep_type: SweepType, optional**
  : Option to specify the sweep mesh decomposition type.
    <br/>
    **This is a beta parameter**. **The behavior and name may change in the future**.

  **json_data: dict, optional**
  : JSON dictionary to create a `MultiZoneSweepMeshParams` object with provided parameters.

### Examples

```pycon
>>> multi_zone_sweep_mesh_params = prime.MultiZoneSweepMeshParams(model = model)
```

<!-- !! processed by numpydoc !! -->

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [`MultiZoneSweepMeshParams.print_default`](ansys.meshing.prime.MultiZoneSweepMeshParams.print_default.md#ansys.meshing.prime.MultiZoneSweepMeshParams.print_default)()   | Print the default values of `MultiZoneSweepMeshParams` object.   |
| [`MultiZoneSweepMeshParams.set_default`](ansys.meshing.prime.MultiZoneSweepMeshParams.set_default.md#ansys.meshing.prime.MultiZoneSweepMeshParams.set_default)([...])    | Set the default values of the `MultiZoneSweepMeshParams` object. |

### Attributes

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`MultiZoneSweepMeshParams.n_divisions`](ansys.meshing.prime.MultiZoneSweepMeshParams.n_divisions.md#ansys.meshing.prime.MultiZoneSweepMeshParams.n_divisions)                                     | Number of divisions in the sweep direction.                                                      |
| [`MultiZoneSweepMeshParams.source_and_target_scope`](ansys.meshing.prime.MultiZoneSweepMeshParams.source_and_target_scope.md#ansys.meshing.prime.MultiZoneSweepMeshParams.source_and_target_scope) | Source and target faces used to determine the direction of sweep in MultiZone meshing.           |
| [`MultiZoneSweepMeshParams.sweep_mesh_size`](ansys.meshing.prime.MultiZoneSweepMeshParams.sweep_mesh_size.md#ansys.meshing.prime.MultiZoneSweepMeshParams.sweep_mesh_size)                         | Sweep mesh size used to determine the mesh size and number of divisions in the sweep direction.  |
| [`MultiZoneSweepMeshParams.sweep_type`](ansys.meshing.prime.MultiZoneSweepMeshParams.sweep_type.md#ansys.meshing.prime.MultiZoneSweepMeshParams.sweep_type)                                        | Option to specify the sweep mesh decomposition type.                                             |
| [`MultiZoneSweepMeshParams.thin_sweep`](ansys.meshing.prime.MultiZoneSweepMeshParams.thin_sweep.md#ansys.meshing.prime.MultiZoneSweepMeshParams.thin_sweep)                                        | Thin sweep option set to True will generate sweep mesh in thin volumes by respecting nDivisions. |
<!-- vale on -->