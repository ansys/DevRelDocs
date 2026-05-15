---
uid: Ans.DataProcessing.operators.math.sin_fc
---

# *class* sin_fc(fields_container: object = None, config: OperatorConfig = None)

Computes element-wise sine function on field data: sin(field[i]).

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [sin_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sin_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = sin_fc()

op = sin_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

Field containing numeric data for sine calculation

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with sine values applied element-wise to input data

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
