---
uid: Ans.DataProcessing.operators.math.cplx_divide
---

# *class* cplx_divide(fields_containerA: object = None, fields_containerB: object = None, config: OperatorConfig = None)

Computes the [complex division](https://en.wikipedia.org/wiki/Complex_number#Multiplicative_inverse)

$z_1 / z_2$ for matching fields in two complex-valued fields containers:

$\mathrm{Re}(z_\mathrm{out}[i]) = (\mathrm{Re}_1 \mathrm{Re}_2 + \mathrm{Im}_1 \mathrm{Im}_2) / D$,

$\mathrm{Im}(z_\mathrm{out}[i]) = (\mathrm{Im}_1 \mathrm{Re}_2 - \mathrm{Re}_1 \mathrm{Im}_2) / D$

where $D = \mathrm{Re}_2^2 + \mathrm{Im}_2^2$. Raises an error if $D = 0$.

available inputs: `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [cplx_divide operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/cplx_divide.md)

**Parameters:**

* **fields_containerA**
* **fields_containerB**
* **config**

**Example:**

```python
op = cplx_divide()

op = cplx_divide(fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB)
```

## Inputs

### fields_containerA

Numerator complex-valued fields container.

**Type:** *LinkableInput*

### fields_containerB

Denominator complex-valued fields container.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with the complex quotient $z_1 / z_2$ (real and imaginary parts).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
