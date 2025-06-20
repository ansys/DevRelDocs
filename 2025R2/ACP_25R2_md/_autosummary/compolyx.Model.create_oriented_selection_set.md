# create_oriented_selection_set

<a id="compolyx.Model.create_oriented_selection_set"></a>

#### Model.create_oriented_selection_set(name, id=None, orientation_point=(0.0, 0.0, 0.0), orientation_direction=(0.0, 0.0, 0.0), element_sets=None, geometries=None, rosettes=None, rosette_selection_method='minimum_angle', selection_rules=None, draping=False, draping_seed_point=(0.0, 0.0, 0.0), auto_draping_direction=True, draping_direction=(0.0, 0.0, 1.0), draping_mesh_size=0.0, use_default_draping_mesh_size=True, draping_material_model='woven', draping_ud_coefficient=0.0, reference_direction_field=None, rotation_angle=0.0)

Create a new oriented selection set.

* **Parameters:**
  - name: The name of the oriented element set.
  - id: The ID of the oriented element set.
  - orientation_point: Orientation point for the oriented selection set.
  - orientation_direction: Orientation direction for the oriented selection set.
  - element_sets: Element sets.
  - geometries: Virtual geometries.
  - rosettes: Rosettes for the oriented selection set.
  - rosette_selection_method: Method to calculate element orientation
    : (‘minimum_angle’, ‘maximum_angle’, ‘minimum_distance’,
      ‘minimum_angle_superposed’, ‘minimum_distance_superposed’,
      ‘maximum_angle_superposed’, ‘ansys_classic’, or
      ‘tabular_values’).
  - reference_direction_field: Table column used to compute reference directions.
  - draping: Draping enabled.
  - draping_seed_point: Seed point used to start draping.
  - draping_direction: Direction for draping.
  - auto_draping_direction: Generate direction for draping.
  - draping_mesh_size: Mesh size for draping.
  - use_default_draping_mesh_size: Enable this property to use the default size for the draping mesh. The default is the average element size of the shell mesh.
  - draping_material_model: Material model for draping, either ‘woven’ or ‘unidirectional’.
  - draping_ud_coefficient: Coefficient for the unidirectional draping material model.
  - rotation_angle: Angle to rotate the reference directions around the orientation directions (in degree).
* **Returns:**
  The created oriented selection set.
