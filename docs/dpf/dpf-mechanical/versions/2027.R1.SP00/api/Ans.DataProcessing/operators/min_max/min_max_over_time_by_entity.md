---
uid: Ans.DataProcessing.operators.min_max.min_max_over_time_by_entity
---

# *class* min_max_over_time_by_entity(fields_container: object = None, compute_absolute_value: object = None, compute_amplitude: object = None, config: OperatorConfig = None)

For each entity, each component and each shell layer (when available), computes the minimum and maximum across all time or frequency steps of the input fields container.

Elemental-nodal values are folded into the per-entity reduction; shell-layer values are preserved when the input exposes them.

The input `compute_amplitude` pin has effect only when the input fields container carries the `complex` label: when `true`, the amplitude of the complex values is used before the extremum is computed.

When the input has a time-frequency support, output pins 2 and 3 return fields containers holding the time or frequency value at which each per-entity, per-component minimum and maximum occurred.

When `compute_absolute_value` is `true`, extrema are computed on the absolute values of the field entries.

**When to use:** you want to keep the entity axis but reduce across time or frequency, giving one per-component min/max per entity across the whole history.

Example: peak stress ever reached at each node over an entire transient analysis, along with the time at which each peak occurred (pins 2 and 3).

Use `min_max_by_time` for the dual reduction (keep time, collapse entities), or `min_max_by_entity` when the fields are not indexed by time.

available inputs: `fields_container` (FieldsContainer), `compute_absolute_value` (bool) (optional), `compute_amplitude` (bool) (optional)

available outputs: `min` (FieldsContainer), `max` (FieldsContainer), `time_freq_of_min` (FieldsContainer), `time_freq_of_max` (FieldsContainer)

**DPF Framework Reference:** [min_max_over_time_by_entity operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_over_time_by_entity.md)

**Parameters:**

* **fields_container**
* **compute_absolute_value**
* **compute_amplitude**
* **config**

**Example:**

```python
op = min_max_over_time_by_entity()

op = min_max_over_time_by_entity(fields_container=my_fields_container,compute_absolute_value=my_compute_absolute_value,compute_amplitude=my_compute_amplitude)
```

## Inputs

### fields_container

Fields container aggregated per entity across all time or frequency steps. Must expose the `time` label; otherwise the input is forwarded unchanged.

**Type:** *LinkableInput*

### compute_absolute_value

When `true`, absolute values of the field entries are used before the min and max are computed. Default: `false`.

**Type:** *LinkableInput*

### compute_amplitude

When `true` and the input fields container has the `complex` label, the amplitude of the complex values is used before the extremum is computed. Ignored otherwise. Default: `false`.

**Type:** *LinkableInput*

## Outputs

### min

Per-entity, per-component minima aggregated across all time or frequency steps. Grouped by all input labels except `time` (and `complex` when `compute_amplitude` is active).

**Type:** *LinkableOutput*

### max

Per-entity, per-component maxima aggregated across all time or frequency steps. Grouped by all input labels except `time` (and `complex` when `compute_amplitude` is active).

**Type:** *LinkableOutput*

### time_freq_of_min

For each entry of the output minimum, the time or frequency value at which it occurred. Populated only when the input carries a time-frequency support.

**Type:** *LinkableOutput*

### time_freq_of_max

For each entry of the output maximum, the time or frequency value at which it occurred. Populated only when the input carries a time-frequency support.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
