---
uid: Ans.DataProcessing.operators.min_max.time_of_min_by_entity
---

# *class* time_of_min_by_entity(fields_container: object = None, abs_value: object = None, compute_amplitude: object = None, config: OperatorConfig = None)

Evaluates time/frequency of minimum.

available inputs: `fields_container` (FieldsContainer), `abs_value` (bool) (optional), `compute_amplitude` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [time_of_min_by_entity operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/time_of_min_by_entity.md)

**Parameters:**

* **fields_container**
* **abs_value**
* **compute_amplitude**
* **config**

**Example:**

```python
op = time_of_min_by_entity()

op = time_of_min_by_entity(fields_container=my_fields_container,abs_value=my_abs_value,compute_amplitude=my_compute_amplitude)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### abs_value

Should use absolute value.

**Type:** *LinkableInput*

### compute_amplitude

Do calculate amplitude.

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
