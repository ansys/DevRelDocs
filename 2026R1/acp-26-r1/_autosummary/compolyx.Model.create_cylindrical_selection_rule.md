# create_cylindrical_selection_rule

<a id="compolyx.Model.create_cylindrical_selection_rule"></a>

#### Model.create_cylindrical_selection_rule(name, id=None, origin=None, direction=None, radius=None, relative_rule_type=False, include_rule_type=True, rosette=None, use_global_coordinate_system=None)

Create new cylindrical selection rule.

### Parameters:
  - name: Name of the rule.
  - origin: Origin of the cylindrical rule.
  - direction: Direction of the cylindrical rule.
  - radius: Radius of the cylindrical rule.
  - relative_rule_type: If True, then the parameters are evaluated relative to size of the object.
  - include_rule_type: Include or exclude area in rule.
  - use_global_coordinate_system: Use global coordinate system to define rule parameters.
  - rosette: Rosette used if use_global_coordinate_system is false.
### Returns:
  The created cylindrical rule.
