---
uid: Ans.DataProcessing.operators.math.phase_fc
---

# *class* phase_fc(fields_container: object = None, config: OperatorConfig = None)

Computes phase (in rad) between real and imaginary fields.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [phase_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/phase_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = phase_fc()

op = phase_fc(fields_container=my_fields_container)
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
