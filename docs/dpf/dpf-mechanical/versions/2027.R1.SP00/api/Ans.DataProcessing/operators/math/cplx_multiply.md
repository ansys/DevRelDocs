---
uid: Ans.DataProcessing.operators.math.cplx_multiply
---

# *class* cplx_multiply(fields_containerA: object = None, fields_containerB: object = None, config: OperatorConfig = None)

Computes the standard [complex multiplication](https://en.wikipedia.org/wiki/Complex_number#Multiplication_and_square)

$z_1 \cdot z_2$ for matching fields in two complex-valued fields containers:

$\mathrm{Re}(z_\mathrm{out})[i] = \mathrm{Re}_1 \mathrm{Re}_2 - \mathrm{Im}_1 \mathrm{Im}_2$,

$\mathrm{Im}(z_\mathrm{out})[i] = \mathrm{Re}_1 \mathrm{Im}_2 + \mathrm{Im}_1 \mathrm{Re}_2$.

Both containers must have the same size.

available inputs: `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [cplx_multiply operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/cplx_multiply.md)

**Parameters:**

* **fields_containerA**
* **fields_containerB**
* **config**

**Example:**

```python
op = cplx_multiply()

op = cplx_multiply(fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB)
```

## Inputs

### fields_containerA

**Type:** *LinkableInput*

### fields_containerB

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with the complex product fields (real and imaginary parts).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
