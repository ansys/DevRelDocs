---
uid: Ans.DataProcessing.operators.math.real_part
---

# *class* real_part(fields_container: object = None, config: OperatorConfig = None)

Extracts the real-part fields (complex label 0) from a complex-valued fields container.

The output container preserves all labels except the complex label.

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

Complex-valued fields container with real (complex label 0) and imaginary (complex label 1) part fields.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container containing only the real-part fields, without the complex label.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
