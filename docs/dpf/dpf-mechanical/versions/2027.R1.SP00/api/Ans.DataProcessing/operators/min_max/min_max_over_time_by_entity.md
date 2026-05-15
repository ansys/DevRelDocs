---
uid: Ans.DataProcessing.operators.min_max.min_max_over_time_by_entity
---

# *class* min_max_over_time_by_entity(fields_container: object = None, compute_absolute_value: object = None, compute_amplitude: object = None, config: OperatorConfig = None)

For each entity and component, evaluates minimum and maximum over time/frequency.

Input pin 4 `compute_amplitude` is only effective when given `fields_container` contains the `complex` label.

if given input `fields_container` has a `time_freq_support`, output pins 2 and 3 `fields_container` contains time/freq indices of the minimum and maximum values.

available inputs: `fields_container` (FieldsContainer), `compute_absolute_value` (bool) (optional), `compute_amplitude` (bool) (optional)

available outputs: `min` (FieldsContainer), `max` (FieldsContainer), `time_freq_of_min` (FieldsContainer), `time_freq_of_max` (FieldsContainer)

**DPF Framework Reference:** [min_max_over_time_by_entity operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_over_time_by_entity.md)

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

**Type:** *LinkableInput*

### compute_absolute_value

Calculate the absolute value of field entities before computing the min/max.

**Type:** *LinkableInput*

### compute_amplitude

Do calculate amplitude.

**Type:** *LinkableInput*

## Outputs

### min

**Type:** *LinkableOutput*

### max

**Type:** *LinkableOutput*

### time_freq_of_min

**Type:** *LinkableOutput*

### time_freq_of_max

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
