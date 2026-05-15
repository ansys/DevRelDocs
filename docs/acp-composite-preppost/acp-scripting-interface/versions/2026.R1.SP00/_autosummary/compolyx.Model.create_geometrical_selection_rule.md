# create_geometrical_selection_rule

<a id="compolyx.Model.create_geometrical_selection_rule"></a>

## Model.create_geometrical_selection_rule(name, geometrical_rule_type='geometry', id=None, use_defaults=True, in_plane_capture_tolerance=0.0, neg_capture_tolerance=0.0, pos_capture_tolerance=0.0, include_rule_type=True, geometry=None, use_projection_normal=False, projection_normal=(0.0, 0.0, 0.0), element_sets=None)

Create new geometrical selection rule.

### Parameters
  - name: Name of the rule.
  - geometrical_rule_type: Define whether the rule extent is defined by a geometry of element sets. Valid options: ‘geometry’ (default) or ‘element_sets’.
  - use_defaults: Whether to use the offset value of the CAD geometry.
  - in_plane_capture_tolerance: In-plane extend (extend) if CAD geometry is a surface.
  - neg_capture_tolerance: Offset in the negative direction if CAD geometry is a surface.
  - pos_capture_tolerance: Offset in the positive direction if CAD geometry is a surface.
  - include_rule_type: Whether the selection is inside or outside the CAD geometry.
  - geometry: CAD geometry used to determine the selection (only relevant for geometrical_rule_type=\`geometry\`).
  - use_projection_normal: Boolean on whether to use the projection normal.
  - projection_normal: Normal direction used to map elements on outlines/curves.
  - element_sets: Preselection of elements in the form of an element set where the rule is applied on (only relevant for geometrical_rule_type=\`element_sets\`).
### Returns
  The created rule.
