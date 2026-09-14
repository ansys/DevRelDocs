---
uid: Ans.DataProcessing.operators.min_max.min_max_inc
---

# *class* min_max_inc(field: object = None, domain_id: object = None, config: OperatorConfig = None)

Incremental variant that computes, for each component, the minimum and the maximum of successive input fields across all calls of the operator.

At each call, the per-component minimum and maximum are updated by comparing the current input field with the previously-cached extrema.

When the optional `domain_id` pin is connected, outputs 2 and 3 return, for each component, the domain id of the call that produced the minimum and maximum, respectively.

**When to use:** successive fields arrive one at a time (typically streamed from a solver) and the full history does not fit in memory.

Example: running envelope of nodal stress updated at each iteration of a transient run.

Use `min_max` for the non-incremental variant, or `min_max_fc_inc` when input arrives one fields container at a time.

available inputs: `field` (Field), `domain_id` (Int32) (optional)

available outputs: `field_min` (Field), `field_max` (Field), `domain_ids_min` (Scoping), `domain_ids_max` (Scoping)

**DPF Framework Reference:** [min_max_inc operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_inc.md)

**Parameters:**

* **field**
* **domain_id**
* **config**

**Example:**

```python
op = min_max_inc()

op = min_max_inc(field=my_field,domain_id=my_domain_id)
```

## Inputs

### field

Input field for the current increment. Combined with the previously-cached extrema.

**Type:** *LinkableInput*

### domain_id

Optional identifier for the current call. When set, outputs 2 and 3 track the domain id that produced each per-component minimum and maximum.

**Type:** *LinkableInput*

## Outputs

### field_min

Per-component minimum aggregated across all calls of the operator so far.

**Type:** *LinkableOutput*

### field_max

Per-component maximum aggregated across all calls of the operator so far.

**Type:** *LinkableOutput*

### domain_ids_min

For each component of the output minimum, the id of the call (as passed on the `domain_id` input pin) that produced the current minimum. Populated only when the `domain_id` input pin is connected.

**Type:** *LinkableOutput*

### domain_ids_max

For each component of the output maximum, the id of the call (as passed on the `domain_id` input pin) that produced the current maximum. Populated only when the `domain_id` input pin is connected.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
