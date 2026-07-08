# create_boolean_selection_rule

<a id="compolyx.Model.create_boolean_selection_rule"></a>

## Model.create_boolean_selection_rule(name, id=None, include_rule_type=True, selection_rules=[])

Create a new boolean selection rule.

### Parameters
  - name: Name of the rule.
  - id: ID of the rule.
  - include_rule_type: Whether the rule is of include or exclude type.
  - selection_rules: list of tuples of attached rules, operation type, and template parameters.
### Returns
  The created boolean selection rule.
### Example
  >> model.create_boolean_selection_rule(‘Boolean Rule 1’, include_rule_type=True, selection_rules=[(rule1, ‘intersect’, False, (0,1)), (rule2, ‘remove’, True, (20, 4))])
