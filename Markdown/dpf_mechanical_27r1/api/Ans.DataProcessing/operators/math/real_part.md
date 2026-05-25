---
uid: Ans.DataProcessing.operators.math.real_part
---

# *class* real_part(fields_container: object = None, config: OperatorConfig = None)

Extracts element-wise real part of field containers containing complex fields.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [real_part operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/real_part.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = real_part()

op = real_part(fields_container=my_fields_container)
```

## Inputs

### fields_container

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
