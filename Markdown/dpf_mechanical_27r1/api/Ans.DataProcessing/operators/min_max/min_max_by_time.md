---
uid: Ans.DataProcessing.operators.min_max.min_max_by_time
---

# *class* min_max_by_time(fields_container: object = None, compute_absolute_value: object = None, config: OperatorConfig = None)

Evaluates minimum, maximum by time or frequency over all the entities of each field

available inputs: `fields_container` (FieldsContainer), `compute_absolute_value` (bool) (optional)

available outputs: `min` (FieldsContainer), `max` (FieldsContainer)

**DPF Framework Reference:** [min_max_by_time operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max_by_time.md)

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

**Type:** *LinkableInput*

### compute_absolute_value

Calculate the absolute value of field entities before computing the min/max.

**Type:** *LinkableInput*

## Outputs

### min

**Type:** *LinkableOutput*

### max

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
