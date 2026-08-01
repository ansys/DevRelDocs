---
uid: Ans.DataProcessing.operators.min_max.max_over_time_by_entity
---

# *class* max_over_time_by_entity(fields_container: object = None, abs_value: object = None, compute_amplitude: object = None, config: OperatorConfig = None)

Thin wrapper around `min_max_over_time_by_entity` that exposes only the per-entity, per-component maximum across all time or frequency steps.

The result forwarded on output pin 0 is pin 1 of `min_max_over_time_by_entity` (the `max` fields container), with the same shape: one value per entity, per component and per shell layer when available.

**When to use:** you only need the per-entity maximum over time.

Prefer `min_max_over_time_by_entity` directly when you also need the minimum, the time of extremum, or the incremental behaviour on multiple output pins.

available inputs: `fields_container` (FieldsContainer), `abs_value` (bool) (optional), `compute_amplitude` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [max_over_time_by_entity operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/max_over_time_by_entity.md)

**Parameters:**

* **fields_container**
* **abs_value**
* **compute_amplitude**
* **config**

**Example:**

```python
op = max_over_time_by_entity()

op = max_over_time_by_entity(fields_container=my_fields_container,abs_value=my_abs_value,compute_amplitude=my_compute_amplitude)
```

## Inputs

### fields_container

Fields container aggregated per entity across all time or frequency steps. Must expose the `time` label; otherwise the input is forwarded unchanged by the underlying operator.

**Type:** *LinkableInput*

### abs_value

When `true`, absolute values of the field entries are used before the max is computed. Default: `false`.

**Type:** *LinkableInput*

### compute_amplitude

When `true` and the input fields container has the `complex` label, the amplitude of the complex values is used before the max is computed. Ignored otherwise. Default: `false`.

**Type:** *LinkableInput*

## Outputs

### fields_container

Per-entity, per-component maximum across all time or frequency steps. Same shape as pin 1 of `min_max_over_time_by_entity`.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
