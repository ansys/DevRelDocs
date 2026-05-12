---
uid: Ans.DataProcessing.operators.math.ln_fc
---

# *class* ln_fc(fields_container: object = None, config: OperatorConfig = None)

Computes element-wise ln(field[i]).

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [ln_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/ln_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = ln_fc()

op = ln_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with natural logarithm values applied element-wise

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
