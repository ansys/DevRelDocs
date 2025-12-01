---
uid: Ans.DataProcessing.operators.min_max
---

# Ans.DataProcessing.operators.min_max Namespace

## Classes

| Class | Description |
|-------|-------------|
| [max_by_component](Ans_DataProcessing_operators_min_max_max_by_component.md) | Give the maximum for each element rank by comparing several fields.   ///available inputs: use_absolute_value (bool), field1 (Field, FieldsContainer), field2 (Field, FieldsContainer) |
| [max_over_phase](Ans_DataProcessing_operators_min_max_max_over_phase.md) | Returns, for each entity, the maximum value of (real value * cos(theta) - imaginary value * sin(theta)) for theta in [0, 360]degrees with the increment in input.   ///available inputs: real_field (Field), imaginary_field (Field), abs_value (bool) (optional), phase_increment (double) (optional) |
| [max_over_time_by_entity](Ans_DataProcessing_operators_min_max_max_over_time_by_entity.md) | Evaluates maximum over time/frequency.   ///available inputs: fields_container (FieldsContainer), abs_value (bool) (optional), compute_amplitude (bool) (optional) |
| [min_by_component](Ans_DataProcessing_operators_min_max_min_by_component.md) | Give the minimum for each element rank by comparing several fields.   ///available inputs: use_absolute_value (bool), field1 (Field, FieldsContainer), field2 (Field, FieldsContainer) |
| [min_max](Ans_DataProcessing_operators_min_max_min_max.md) | Compute the component-wise minimum (out 0) and maximum (out 1) over a field.   ///available inputs: field (Field, FieldsContainer) |
| [min_max_by_entity](Ans_DataProcessing_operators_min_max_min_max_by_entity.md) | Compute the entity-wise minimum (out 0) and maximum (out 1) through all fields of a fields container.   ///available inputs: fields_container (FieldsContainer) |
| [min_max_by_time](Ans_DataProcessing_operators_min_max_min_max_by_time.md) | Evaluates minimum, maximum by time or frequency over all the entities of each field   ///available inputs: fields_container (FieldsContainer), compute_absolute_value (bool) (optional) |
| [min_max_fc](Ans_DataProcessing_operators_min_max_min_max_fc.md) | Compute the component-wise minimum (out 0) and maximum (out 1) over a fields container.   ///available inputs: fields_container (FieldsContainer) |
| [min_max_fc_inc](Ans_DataProcessing_operators_min_max_min_max_fc_inc.md) | Compute the component-wise minimum (out 0) and maximum (out 1) over a fields container.   ///available inputs: fields_container (FieldsContainer) |
| [min_max_inc](Ans_DataProcessing_operators_min_max_min_max_inc.md) | Compute the component-wise minimum (out 0) and maximum (out 1) over coming fields.   ///available inputs: field (Field), domain_id (Int32) (optional) |
| [min_max_over_label_fc](Ans_DataProcessing_operators_min_max_min_max_over_label_fc.md) | Create two fields (0 min 1 max) by looping over the fields container in input and taking the min/max value by component through all the fields having the same id for the label set in input (in pin 1). If no label is specified or if the specified label doesn't exist, the operation is done over all the fields. The fields out are located on the label set in input, so their scoping are the labels ids.For each min max value, the label id for one other fields container labels is kept and returned in a scoping in pin 2 (min) and 3 (max).The field's scoping ids of the value kept in min max are also returned in the scopings in pin 4 (min) and 5 (max).   ///available inputs: fields_container (FieldsContainer), label (string) |
| [min_max_over_time_by_entity](Ans_DataProcessing_operators_min_max_min_max_over_time_by_entity.md) | Evaluates minimum, maximum over time/frequency and returns those min max as well as the time/freq where they occurred   ///available inputs: fields_container (FieldsContainer), compute_absolute_value (bool) (optional), compute_amplitude (bool) (optional) |
| [min_over_time_by_entity](Ans_DataProcessing_operators_min_max_min_over_time_by_entity.md) | Evaluates minimum over time/frequency.   ///available inputs: fields_container (FieldsContainer), abs_value (bool) (optional), compute_amplitude (bool) (optional) |
| [phase_of_max](Ans_DataProcessing_operators_min_max_phase_of_max.md) | Evaluates phase of maximum.   ///available inputs: real_field (Field), imaginary_field (Field), abs_value (bool) (optional), phase_increment (double) |
| [time_of_max_by_entity](Ans_DataProcessing_operators_min_max_time_of_max_by_entity.md) | Evaluates time/frequency of maximum.   ///available inputs: fields_container (FieldsContainer), abs_value (bool) (optional), compute_amplitude (bool) (optional) |
| [time_of_min_by_entity](Ans_DataProcessing_operators_min_max_time_of_min_by_entity.md) | Evaluates time/frequency of minimum.   ///available inputs: fields_container (FieldsContainer), abs_value (bool) (optional), compute_amplitude (bool) (optional) |
