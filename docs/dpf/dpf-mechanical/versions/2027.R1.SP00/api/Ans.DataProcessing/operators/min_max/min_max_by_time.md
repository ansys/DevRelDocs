---
uid: Ans.DataProcessing.operators.min_max.min_max_by_time
---

# *class* min_max_by_time(fields_container: object = None, compute_absolute_value: object = None, config: OperatorConfig = None)

For each time or frequency step of the input fields container, computes the per-component minimum and maximum across all entities of the field at that step.

Results exposed by component, collapsed by time, shell layers (when available).

The result is grouped by all labels of the input fields container except `time`.

For every remaining label combination, the output minimum (pin 0) and maximum (pin 1) each contain one field whose entity ids are the time or frequency step ids and whose values are the per-component minima and maxima at that step.

If the input does not contain the `time` label, the input fields container is forwarded unchanged.

**When to use:** you want to keep the time or frequency axis but reduce across entities, giving one per-component min/max value per step.

Example: peak displacement across the mesh at every time step of a transient analysis.

Use `min_max_over_time_by_entity` for the dual reduction (keep entities, collapse time), or `min_max_fc_inc` for the incremental variant.

available inputs: `fields_container` (FieldsContainer), `compute_absolute_value` (bool) (optional)

available outputs: `min` (FieldsContainer), `max` (FieldsContainer)

**DPF Framework Reference:** [min_max_by_time operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_by_time.md)

**Parameters:**

* **fields_container**
* **compute_absolute_value**
* **config**

**Example:**

```python
op = min_max_by_time()

op = min_max_by_time(fields_container=my_fields_container,compute_absolute_value=my_compute_absolute_value)
```

## Inputs

### fields_container

Fields container aggregated per time or frequency step. Must expose the `time` label to trigger the aggregation; otherwise the input is forwarded unchanged.

**Type:** *LinkableInput*

### compute_absolute_value

When set to `true`, absolute values of the field entries are used before the min and max are computed. Default: `false`.

**Type:** *LinkableInput*

## Outputs

### min

Per-component minima grouped by all input labels except `time`. Within each output field, entity ids are the time or frequency step ids.

**Type:** *LinkableOutput*

### max

Per-component maxima grouped by all input labels except `time`. Within each output field, entity ids are the time or frequency step ids.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
