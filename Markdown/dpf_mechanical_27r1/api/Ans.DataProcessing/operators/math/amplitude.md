---
uid: Ans.DataProcessing.operators.math.amplitude
---

# *class* amplitude(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

Computes the [complex modulus](https://en.wikipedia.org/wiki/Absolute_value#Complex_numbers) (amplitude)

of a complex quantity given as separate real and imaginary fields:

$\mathrm{out}[i] = \sqrt{A[i]^2 + B[i]^2}$.

The output carries the unit of pin A.

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

Scalar field with $\sqrt{A[i]^2 + B[i]^2}$ for each data entry, carrying the unit of pin A.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
