---
uid: Ans.DataProcessing.operators.math.amplitude_fc
---

# *class* amplitude_fc(fields_container: object = None, config: OperatorConfig = None)

Computes the [complex modulus](https://en.wikipedia.org/wiki/Absolute_value#Complex_numbers) (amplitude)

$\sqrt{\mathrm{Re}[i]^2 + \mathrm{Im}[i]^2}$ for each complex-valued field pair in the input fields container,

where pairs are matched by complex label.

If no imaginary part is found for a real field, that real field is returned unchanged.

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

Complex-valued fields container with paired real (complex label 0) and imaginary (complex label 1) fields.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with amplitude fields $\sqrt{\mathrm{Re}[i]^2 + \mathrm{Im}[i]^2}$, carrying the unit of the real input field.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
