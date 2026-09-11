---
uid: Ans.DataProcessing.operators.math.mechanical_min_max_over_time
---

# *class* mechanical_min_max_over_time(fields_container: object = None, int32: object = None, config: OperatorConfig = None)

Dispatch operator that selects and runs a minimum/maximum operator over time or frequency, based on the integer selector on pin 5.

Selector values on pin 5:

- `0`: `min_max_by_time` - per-step, per-component minimum and maximum, aggregating every entity of each field (elemental-nodal values collapse into the reduction).

- `1`: `max_over_time_by_entity` - per-entity, per-component maximum across all time or frequency steps.

- `2`: `time_of_max_by_entity` - time or frequency at which each per-entity, per-component maximum occurs.

- `7`: `min_over_time_by_entity` - per-entity, per-component minimum across all time or frequency steps.

- `8`: `time_of_min_by_entity` - time or frequency at which each per-entity, per-component minimum occurs.

Selectors 1, 2, 7 and 8 keep the entity axis: the underlying operator (`min_max_over_time_by_entity`) returns one value per entity, per component and per shell layer when available. Selector 0 (`min_max_by_time`) reduces across entities instead.

Output pin 0 holds the primary result of the selected operator.

Output pin 1 is optional and populated only when the selected operator produces two outputs (currently only selector `0`).

available inputs: `fields_container` (FieldsContainer), `int32` (Int32)

available outputs: `field_container_1` (FieldsContainer), `field_container_2` (FieldsContainer)

**DPF Framework Reference:** [mechanical_min_max_over_time operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/mechanical_min_max_over_time.md)

**Parameters:**

* **fields_container**
* **int32**
* **config**

**Example:**

```python
op = mechanical_min_max_over_time()

op = mechanical_min_max_over_time(fields_container=my_fields_container,int32=my_int32)
```

## Inputs

### fields_container

Input fields container passed through to the selected underlying operator.

**Type:** *LinkableInput*

### int32

Selector integer that chooses the underlying operator. Supported values: `0` (min_max_by_time), `1` (max_over_time_by_entity), `2` (time_of_max_by_entity), `7` (min_over_time_by_entity), `8` (time_of_min_by_entity).

**Type:** *LinkableInput*

## Outputs

### field_container_1

Primary result forwarded from the selected underlying operator.

**Type:** *LinkableOutput*

### field_container_2

Secondary result forwarded from the selected underlying operator. Populated only when the underlying operator produces two outputs (currently only selector `0` populates this pin).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
