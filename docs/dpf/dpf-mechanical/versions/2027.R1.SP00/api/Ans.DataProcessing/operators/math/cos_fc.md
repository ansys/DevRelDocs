---
uid: Ans.DataProcessing.operators.math.cos_fc
---

# *class* cos_fc(fields_container: object = None, config: OperatorConfig = None)

Computes element-wise cosine function on field data: cos(field[i]).

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [cos_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/cos_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = cos_fc()

op = cos_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

Field or fields container containing numeric data for cosine calculation

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with cosine values applied element-wise to input data

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
