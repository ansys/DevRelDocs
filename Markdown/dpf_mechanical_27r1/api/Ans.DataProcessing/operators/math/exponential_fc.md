---
uid: Ans.DataProcessing.operators.math.exponential_fc
---

# *class* exponential_fc(fields_container: object = None, config: OperatorConfig = None)

Computes element-wise exponential function on field data: exp(field[i]).

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [exponential_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/exponential_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = exponential_fc()

op = exponential_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

Field, fields container, or numeric data for exponential calculation

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with exponential values applied element-wise to input data

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
