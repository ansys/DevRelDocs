# create_cutoff_selection_rule

<a id="compolyx.Model.create_cutoff_selection_rule"></a>

#### Model.create_cutoff_selection_rule(name, id=None, cutoff_rule_type='geometry', offset=0.0, angle=0.0, origin=(0.0, 0.0, 0.0), direction=(1.0, 0.0, 0.0), distance_type='along_direction', ply_cutoff_type='production_ply_cutoff', ply_tapering=False, cutoff_geometry=None, edge_set=None, offset_method='laminate_stack', offset_type='out_of_plane')

Create new cut-off rule.

### Parameters:
  - name: Name of the rule.
  - cutoff_rule_type: Valid options: geometry, taper, and variable_taper.
  - offset: Offset of the rule (float for cutoff_rule_type=\`geometry\` or taper, LookUpTableColumn for cutoff_rule_type=\`variable_taper\`).
  - angle: Angle of the rule (ignored for cutoff_rule_type=\`geometry\`, float for taper, LookUpTableColumn for variable_taper).
  - origin: Origin of the offset and angle interpolation for variable_taper.
  - direction: Direction of the offset and angle interpolation for variable_taper.
  - distance_type: along_direction or along_edge (only relevant for variable_taper).
  - ply_cutoff_type: Determines on which ply level the cutoff is done.
  - ply_tapering: Use ply tapering.
  - cutoff_geometry: CADGeometry for the rule (only relevant for cutoff_rule_type=\`geometry\`).
  - edge_set: Edge Set for cutoff_rule_type=\`taper\` or variable_taper.
  - offset_method: Method to compute offset of plies laminate_stack or attached_plies.
  - offset_type: Measure offset from edge set normal to element reference surface (out_of_plane) or in element reference surface (in_plane).
### Returns:
  The created rule.
