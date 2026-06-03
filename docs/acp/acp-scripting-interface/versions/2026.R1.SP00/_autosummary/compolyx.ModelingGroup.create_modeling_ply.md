# create_modeling_ply

<a id="compolyx.ModelingGroup.create_modeling_ply"></a>

## ModelingGroup.create_modeling_ply(name=None, id=None, ply_material=None, ply_angle=0.0, number_of_layers=1, global_ply_nr=None, oriented_selection_sets=None, selection_rules=None, draping='no_draping', draping_seed_point=None, auto_draping_direction=True, draping_thickness_correction=True, draping_direction=None, draping_mesh_size=0.0, use_default_draping_mesh_size=True, thickness_definition='nominal', core_geometry=None, active=True, taper_edges=None, thickness_field=None, thickness_field_type='absolute', angle_1_field=None, angle_2_field=None)

Create modeling ply.

### Parameters
  - name: Name of the new modeling ply.
  - id: Optional ID of the new modeling ply.
  - ply_material: Ply Material (Fabric, Stackup, SubLaminate).
  - ply_angle: Angle of the ply material.
  - number_of_layers: Multiplier of this layer.
  - global_ply_nr: Ply number for stacking sequence.
  - oriented_selection_sets: Oriented selection set for the expansion of the modeling ply.
  - selection_rules: Element selection rules for the modeling ply.
  - draping: The type of draping to be used. Valid options:  “no_draping”, “evaluate_draping”, and “tabular_values”.
  - draping_seed_point: Start/seed point for draping.
  - auto_draping_direction: Automatically set draping direction (default: ‘True’).
  - draping_direction: Direction to go in draping (default: ‘None’).
  - draping_mesh_size: Mesh size used for draping.
  - use_default_draping_mesh_size: Whether to use a default size for the draping mesh. Default is the average element size of the shell mesh.
  - thickness_definition: Enum that describes the method used for thickness definition (default: ‘Nominal’).
  - core_geometry: The assigned core geometry.
  - active: Modeling ply active.
  - taper_edges: Taper Edges for the modeling ply.
  - thickness_field: Look-Up table column with scalar values for thickness sampling (optional).
  - thickness_field_type: The type of thickness field. Valid options: ‘absolute’ or ‘relative’.
  - angle_1_field: Look-Up table column with scalar values for angle 1.
  - angle_2_field: Look-Up table column with scalar values for angle 2.
### Returns
  The created modeling ply.
### Example
  ```pycon
  >>> oes_1 = model.oriented_selection_sets['OrientedSelectionSet.1']
  >>> fabric_1 = model.material_data.fabrics['Fabric.1']
  >>> mpg = model.modeling_groups['PlyGroup.1']
  >>> mp_1 = mpg.create_modeling_ply( name='ModelingPly.1',
                                      ply_angle=0.0,
                                      global_ply_nr=0,
                                      number_of_layers=1,
                                      ply_material=fabric_1,
                                      oriented_selection_sets=(oes_1,),
                                      selection_rules=(rule1,),
                                      draping="no_draping",
                                      draping_seed_point = (1,0,0),
                                      auto_draping_direction = True)
  ```
