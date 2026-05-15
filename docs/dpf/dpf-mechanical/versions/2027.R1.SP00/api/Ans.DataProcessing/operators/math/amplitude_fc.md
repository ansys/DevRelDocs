---
uid: Ans.DataProcessing.operators.math.amplitude_fc
---

# *class* amplitude_fc(fields_container: object = None, config: OperatorConfig = None)

Computes the amplitude of a real and an imaginary field.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [amplitude_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/amplitude_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = amplitude_fc()

op = amplitude_fc(fields_container=my_fields_container)
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
