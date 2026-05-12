---
uid: Ans.DataProcessing.operators.math.sqr_fc
---

# *class* sqr_fc(fields_container: object = None, config: OperatorConfig = None)

Computes element-wise field[i]^2.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [sqr_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sqr_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = sqr_fc()

op = sqr_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with squared values applied element-wise to input data

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
