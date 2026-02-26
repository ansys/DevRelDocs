# create_imported_modeling_ply

<a id="compolyx.ImportedModelingGroup.create_imported_modeling_ply"></a>

## ImportedModelingGroup.create_imported_modeling_ply(name=None, id=None, active=True, offset='bottom', ply_material=None, ply_angle=0.0, mesh_import_type='from_geometry', mesh_geometry=None, rosette_selection_method='minimum_angle', rosettes=[], thickness_definition='nominal', thickness_field=None, thickness_field_type='absolute', draping='no_draping', angle_1_field=None, angle_2_field=None, rotation_angle=0.0)

Create modeling ply.

### Parameters
  - name: Name of the new imported modeling ply.
  - id: Optional ID of the new imported modeling ply.
  - active: Whether the ply is active.
  - offset: whether the mesh defines the bottom, middle, or top surface of the ply.
  - ply_material: Ply material (fabric).
  - ply_angle: Angle of the ply material.
  - mesh_import_type: The source of the imported mesh (‘from_h5_composite_cae’ or ‘from_geometry’).
  - mesh_geometry: If mesh_import_type is from_geometry, then this geometry defines the surface of the ply.
  - rosette_selection_method: Method to calculate element orientation. Valid options: ‘minimum_angle’, ‘maximum_angle’, ‘minimum_distance’,
    : ‘minimum_angle_superposed’, ‘minimum_distance_superposed’,
      ‘maximum_angle_superposed’, ‘ansys_classic’, and
      ‘tabular_values’.
  - rosettes: Rosettes for the imported modeling ply.
  - reference_direction_field: Table column used to compute reference directions. Only needed if rosette_selection_method is tabular_values.
  - thickness_definition: Enum that describes the method used for thickness definition (the default is nominal).
  - thickness_field: Look-Up table column with scalar values for thickness sampling (optional).
  - thickness_field_type: The type of thickness field (‘absolute’ or ‘relative’).
  - draping: The type of draping to be used (“no_draping” or “tabular_values”).
  - angle_1_field: Look-Up table column with scalar values for angle 1.
  - angle_2_field: Look-Up table column with scalar values for angle 2.
  - rotation_angle: Angle to rotate the reference directions (in degree).
### Returns
  The created imported modeling ply.
### Example
  ```pycon
  >>> modeling_group = db.active_model.create_imported_modeling_group( name='ImportedModelingGroup' )
  >>> modeling_group.create_imported_modeling_ply(name='ImportedModelingPly.1', offset='middle', ply_angle=45)
  ```
