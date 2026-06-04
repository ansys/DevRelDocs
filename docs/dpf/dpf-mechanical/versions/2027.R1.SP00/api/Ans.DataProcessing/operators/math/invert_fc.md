---
uid: Ans.DataProcessing.operators.math.invert_fc
---

# *class* invert_fc(fields_container: object = None, config: OperatorConfig = None)

DEPRECATED, PLEASE USE DIVIDE. Computes the element-wise and component-wise inverse of a field (1./x).

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [invert_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/invert_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = invert_fc()

op = invert_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with inverse values (1/x) applied element-wise to input data

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
