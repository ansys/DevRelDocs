# create_tube_selection_rule

<a id="compolyx.Model.create_tube_selection_rule"></a>

## Model.create_tube_selection_rule(name, id=None, outer_radius=1.0, inner_radius=0.0, include_rule_type=True, edge_set=None, extend_endings=False, symmetrical_extension=True, head=(0.0, 0.0, 0.0), head_extension=0.0, tail_extension=0.0)

Create a new tube selection rule.

### Parameters
  - name: Name of the rule.
  - outer_radius: The outer radius of the tube.
  - inner_radius: The inner radius of the tube.
  - include_rule_type: Include or exclude area in rule.
  - edge_set: Edge set for the rule.
  - extend_endings: Whether to extend the endings of the tube.
  - symmetrical_extension: If enabled, then the length of the extensions will be equal on both sides.
  - head: The free end which is closer to this point becomes the head of the tube. It is only necessary if symmetrical_extension is disabled.
  - head_extension: Defines the length of the extension at the head of the tube. If symmetrical_extension is enabled, it defines both sides.
  - tail_extension: Defines the length of the extension at the tail of the tube if symmetrical_extension is disabled.
### Returns
  The created rule.
