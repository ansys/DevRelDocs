---
uid: Ans.DataProcessing.operators.math.modulus
---

# *class* modulus(fields_container: object = None, config: OperatorConfig = None)

Computes the [complex modulus](https://en.wikipedia.org/wiki/Absolute_value#Complex_numbers)

$|z[i]| = \sqrt{\mathrm{Re}[i]^2 + \mathrm{Im}[i]^2}$ for each value in a complex-valued fields container,

where $\mathrm{Re}$ and $\mathrm{Im}$ are the real and imaginary parts (complex labels 0 and 1 respectively).

The output container has no complex label.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [modulus operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/modulus.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = modulus()

op = modulus(fields_container=my_fields_container)
```

## Inputs

### fields_container

Complex-valued fields container with real (complex label 0) and imaginary (complex label 1) part fields.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with the modulus $\sqrt{\mathrm{Re}^2 + \mathrm{Im}^2}$ for each entry, without the complex label.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
