# create_parallel_selection_rule

<a id="compolyx.Model.create_parallel_selection_rule"></a>

## Model.create_parallel_selection_rule(name, id=None, origin=None, direction=None, pos_distance=None, neg_distance=None, relative_rule_type=False, use_global_coordinate_system=None, rosette=None, include_rule_type=True)

Create a new parallel selection rule.

### Parameters
  - name: Name of the rule.
  - origin: Origin of the parallel selection rule.
  - direction: Direction of the parallel selection rule.
  - pos_distance: Positive distance of the parallel selection rule.
  - neg_distance: Negative distance of the parallel selection rule.
  - relative_rule_type: If True, then the parameters are evaluated relative to size of the object.
  - use_global_coordinate_system: Use global coordinate system to define rule parameters.
  - rosette: Rosette used if use_global_coordinate_system is false.
  - include_rule_type: Include or exclude area in rule.
### Returns
  The created parallel selection rule.
