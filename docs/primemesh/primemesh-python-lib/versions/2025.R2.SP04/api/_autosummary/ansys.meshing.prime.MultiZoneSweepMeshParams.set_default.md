# set_default

<a id="ansys.meshing.prime.MultiZoneSweepMeshParams.set_default"></a>

#### *static* MultiZoneSweepMeshParams.set_default(source_and_target_scope=None, sweep_mesh_size=None, n_divisions=None, thin_sweep=None, sweep_type=None)

Set the default values of the `MultiZoneSweepMeshParams` object.

* **Parameters:**

  **source_and_target_scope: ScopeDefinition, optional**
  : Source and target faces used to determine the direction of sweep in MultiZone meshing.

  **sweep_mesh_size: float, optional**
  : Sweep mesh size used to determine the mesh size and number of divisions in the sweep direction.

  **n_divisions: int, optional**
  : Number of divisions in the sweep direction.

  **thin_sweep: bool, optional**
  : Thin sweep option set to True will generate sweep mesh in thin volumes by respecting nDivisions.   Thin sweep option set to False will generate sweep mesh whose number of divisions in the direction of sweep is determined by sweepMeshSize.

  **sweep_type: SweepType, optional**
  : Option to specify the sweep mesh decomposition type.

<!-- !! processed by numpydoc !! -->
