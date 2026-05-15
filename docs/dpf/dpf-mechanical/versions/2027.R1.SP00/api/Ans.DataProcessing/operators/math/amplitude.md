---
uid: Ans.DataProcessing.operators.math.amplitude
---

# *class* amplitude(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

Computes amplitude of a real and an imaginary field.

available inputs: `fieldA` (Field, FieldsContainer), `fieldB` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [amplitude operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/amplitude.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = amplitude()

op = amplitude(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Inputs

### fieldA

field or fields container with only one field is expected

**Type:** *LinkableInput*

### fieldB

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
