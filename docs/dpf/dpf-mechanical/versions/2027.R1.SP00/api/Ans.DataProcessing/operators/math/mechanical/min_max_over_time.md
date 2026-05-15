---
uid: Ans.DataProcessing.operators.math.mechanical.min_max_over_time
---

# *class* min_max_over_time(fields_container: object = None, int32: object = None, config: OperatorConfig = None)

Evaluates minimum/maximum over time/frequency.

available inputs: `fields_container` (FieldsContainer), `int32` (Int32)

available outputs: `field_container_1` (FieldsContainer), `field_container_2` (FieldsContainer)

**DPF Framework Reference:** [min_max_over_time operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/min_max_over_time.md)

**Parameters:**

* **fields_container**
* **int32**
* **config**

**Example:**

```python
op = min_max_over_time()

op = min_max_over_time(fields_container=my_fields_container,int32=my_int32)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### int32

Define min or max.

**Type:** *LinkableInput*

## Outputs

### field_container_1

**Type:** *LinkableOutput*

### field_container_2

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
