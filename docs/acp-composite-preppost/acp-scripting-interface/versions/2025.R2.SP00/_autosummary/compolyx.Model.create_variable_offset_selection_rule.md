# create_variable_offset_selection_rule

<a id="compolyx.Model.create_variable_offset_selection_rule"></a>

#### Model.create_variable_offset_selection_rule(name, id=None, radius_origin=None, radius_direction=None, edge_set=None, offsets=None, angles=None, element_set=None, relative_rule_type=False, include_rule_type=True, use_offset_correction=False, distance_along_edge=False, inherit_from_lookup_table=True)

Create new slab offset rule.

* **Parameters:**
  - name: Name of the rule.
  - id: The unique ID of the rule.
  - radius_origin: Reference point of the 1D lookup table used for the offsets.
  - radius_direction: Normal of the cutting plane.
  - edge_set: Guide/axis of variable tube.
  - offsets: 1D lookup table including the radii of the variable tube.
  - angles: Optional taber edge angles.
  - element_set: Preselection of elements in the form of an element set where the rule is applied on.
  - include_rule_type: Boolean whether to select the element inside or outside the variable tube.
  - use_offset_correction: Boolean whether to evaluate the radius/offset along the surface.
  - distance_along_edge: Boolean whether to evaluate the distance along the edge or direction of the rule. Default is `False`.
  - inherit_from_lookup_table: Boolean whether to inherit origin and direction from the attached lookup table. Default is `False`.
* **Returns:**
  The created rule.
