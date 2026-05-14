---
uid: Ans.DataProcessing.operators.math.sqrt_fc
---

# *class* sqrt_fc(fields_container: object = None, config: OperatorConfig = None)

Computes element-wise square root function on field data: sqrt(field[i]).

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [sqrt_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sqrt_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = sqrt_fc()

op = sqrt_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

Field or fields container containing numeric data for square root calculation

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with square root values applied element-wise to input data

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
