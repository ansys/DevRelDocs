---
uid: Ans.DataProcessing.operators.math.cplx_dot
---

# *class* cplx_dot(fields_containerA: object = None, fields_containerB: object = None, config: OperatorConfig = None)

Computes the real-valued inner product

$\mathrm{out}[i] = \mathrm{Re}_1[i] \cdot \mathrm{Re}_2[i] + \mathrm{Im}_1[i] \cdot \mathrm{Im}_2[i]$

between matching fields in two complex-valued fields containers.

This equals the real part of the [Hermitian inner product](https://en.wikipedia.org/wiki/Dot_product#Complex_vectors)

$\mathrm{Re}(z_1 \cdot \overline{z_2})$.

Only the real-part result fields (complex label 0) are produced.

available inputs: `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [cplx_dot operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/cplx_dot.md)

**Parameters:**

* **fields_containerA**
* **fields_containerB**
* **config**

**Example:**

```python
op = cplx_dot()

op = cplx_dot(fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB)
```

## Inputs

### fields_containerA

**Type:** *LinkableInput*

### fields_containerB

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
