---
uid: Ans.DataProcessing.operators.min_max
---

# Ans.DataProcessing.operators.min_max Namespace

## Classes

| Class | Description |
|-------|-------------|
| [max_by_component](Ans_DataProcessing_operators_min_max_max_by_component.md) | Give the maximum for each element rank by comparing several fields.   ///available inputs: use_absolute_value (bool), field1 (Field, FieldsContainer), field2 (Field, FieldsContainer) |
| [max_over_phase](Ans_DataProcessing_operators_min_max_max_over_phase.md) | Returns, for each entity, the maximum value of (real value * cos(theta) - imaginary value * sin(theta)) for theta in [0, 360]degrees with the increment in input.   ///available inputs: real_field (Field), imaginary_field (Field), abs_value (bool) (optional), phase_increment (double) (optional) |
| [max_over_time_by_entity](Ans_DataProcessing_operators_min_max_max_over_time_by_entity.md) | Thin wrapper around `min_max_over_time_by_entity` that exposes only the per-entity, per-component maximum across all time or frequency steps. |
| [min_by_component](Ans_DataProcessing_operators_min_max_min_by_component.md) | Give the minimum for each element rank by comparing several fields.   ///available inputs: use_absolute_value (bool), field1 (Field, FieldsContainer), field2 (Field, FieldsContainer) |
| [min_max](Ans_DataProcessing_operators_min_max_min_max.md) | Computes, for each component of the input field, the minimum and the maximum across all entities. |
| [min_max_by_entity](Ans_DataProcessing_operators_min_max_min_max_by_entity.md) | Computes, for each entity and each component, the minimum and the maximum across all fields of the input fields container. |
| [min_max_by_time](Ans_DataProcessing_operators_min_max_min_max_by_time.md) | For each time or frequency step of the input fields container, computes the per-component minimum and maximum across all entities of the field at that step. |
| [min_max_fc](Ans_DataProcessing_operators_min_max_min_max_fc.md) | Computes, for each field of the input fields container and for each component, the minimum and the maximum across all entities of that field. |
| [min_max_fc_inc](Ans_DataProcessing_operators_min_max_min_max_fc_inc.md) | Incremental variant that computes, for each time or frequency step of the input fields container, the per-component minimum and maximum across all successive calls of the operator. |
| [min_max_inc](Ans_DataProcessing_operators_min_max_min_max_inc.md) | Incremental variant that computes, for each component, the minimum and the maximum of successive input fields across all calls of the operator. |
| [min_max_over_label_fc](Ans_DataProcessing_operators_min_max_min_max_over_label_fc.md) | Groups the fields of the input fields container by the given label and, within each group, computes the per-component minimum and maximum across all fields of the group. |
| [min_max_over_time_by_entity](Ans_DataProcessing_operators_min_max_min_max_over_time_by_entity.md) | For each entity, each component and each shell layer (when available), computes the minimum and maximum across all time or frequency steps of the input fields container. |
| [min_over_time_by_entity](Ans_DataProcessing_operators_min_max_min_over_time_by_entity.md) | Thin wrapper around `min_max_over_time_by_entity` that exposes only the per-entity, per-component minimum across all time or frequency steps. |
| [phase_of_max](Ans_DataProcessing_operators_min_max_phase_of_max.md) | Evaluates phase of maximum.   ///available inputs: real_field (Field), imaginary_field (Field), abs_value (bool) (optional), phase_increment (double) |
| [time_of_max_by_entity](Ans_DataProcessing_operators_min_max_time_of_max_by_entity.md) | Thin wrapper around `min_max_over_time_by_entity` that exposes only the time or frequency value at which each per-entity, per-component maximum occurred. |
| [time_of_min_by_entity](Ans_DataProcessing_operators_min_max_time_of_min_by_entity.md) | Thin wrapper around `min_max_over_time_by_entity` that exposes only the time or frequency value at which each per-entity, per-component minimum occurred. |
