---
uid: Ans.DataProcessing.operators.min_max.min_max_fc_inc
---

# *class* min_max_fc_inc(fields_container: object = None, config: OperatorConfig = None)

Incremental variant that computes, for each time or frequency step of the input fields container, the per-component minimum and maximum across all successive calls of the operator.

At each call, results are merged with the previously-cached extrema.

The output minimum (pin 0) and maximum (pin 1) are fields with one entity per time or frequency step of the input.

**When to use:** the full set of fields does not fit in memory and results must be aggregated over successive server calls, one fields container at a time.

Example: peak of each stress component per time step accumulated over a long transient analysis processed one chunk of time steps at a time.

Use `min_max_by_time` for the non-incremental variant, or `min_max_inc` when input arrives one field at a time instead of one fields container at a time.

available inputs: `fields_container` (FieldsContainer)

available outputs: `field_min` (Field), `field_max` (Field)

**DPF Framework Reference:** [min_max_fc_inc operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_fc_inc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = min_max_fc_inc()

op = min_max_fc_inc(fields_container=my_fields_container)
```

## Inputs

### fields_container

Fields container for the current increment. Must expose a time-frequency support so that output entries can be indexed by time or frequency step.

**Type:** *LinkableInput*

## Outputs

### field_min

Field of per-step, per-component minima aggregated across all calls of the operator so far.

**Type:** *LinkableOutput*

### field_max

Field of per-step, per-component maxima aggregated across all calls of the operator so far.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
