---
uid: Ans.DataProcessing.operators.math.img_part
---

# *class* img_part(fields_container: object = None, config: OperatorConfig = None)

Extracts the imaginary-part fields (complex label 1) from a complex-valued fields container.

The output container preserves all labels except the complex label.

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

Complex-valued fields container with real (complex label 0) and imaginary (complex label 1) part fields.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container containing only the imaginary-part fields, without the complex label.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
