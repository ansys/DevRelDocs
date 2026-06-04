---
uid: Ans.DataProcessing.operators.math.img_part
---

# *class* img_part(fields_container: object = None, config: OperatorConfig = None)

Extracts element-wise imaginary part of field containers containing complex fields.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [img_part operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/img_part.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = img_part()

op = img_part(fields_container=my_fields_container)
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
