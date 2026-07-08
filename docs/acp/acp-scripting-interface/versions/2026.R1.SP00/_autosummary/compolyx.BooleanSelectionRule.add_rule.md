# add_rule

<a id="compolyx.BooleanSelectionRule.add_rule"></a>

## BooleanSelectionRule.add_rule(rule, template_rule=False, rule_values=(0.0, 0.0), operation_type='intersect')

Add selection rule to boolean selection rule.

### Parameters
  - rule: The rule to be added.
  - template_rule: Whether this is a template rule.
  - rule_values: Parameters of the template rule (for instance, the upper and lower limits of a ParallelSelectionRule).
  - operation_type: Boolean operation type (intersect, add, remove).

Example:
>>> boolean_rule.add_rule(rule=model.selection_rules[‘ParallelRule.1’],template_rule=True, rule_values=(-20.0, 50.0), operation_type=’intersect’)
