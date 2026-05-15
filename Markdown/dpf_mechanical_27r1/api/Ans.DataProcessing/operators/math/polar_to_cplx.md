---
uid: Ans.DataProcessing.operators.math.polar_to_cplx
---

# *class* polar_to_cplx(fields_container: object = None, config: OperatorConfig = None)

Converts a complex-valued fields container from

[polar form](https://en.wikipedia.org/wiki/Complex_number#Polar_complex_plane) (amplitude, phase)

to rectangular form (real, imaginary):

$\mathrm{Re}[i] = A[i] \cdot \cos(\phi[i])$, $\mathrm{Im}[i] = A[i] \cdot \sin(\phi[i])$.

The input must contain amplitude fields tagged with complex label 2

and phase fields tagged with complex label 3.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [polar_to_cplx operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/polar_to_cplx.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = polar_to_cplx()

op = polar_to_cplx(fields_container=my_fields_container)
```

## Inputs

### fields_container

Complex-valued fields container with amplitude fields (complex label 2) paired with phase angle fields (complex label 3).

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container in rectangular form: real parts (complex label 0) and imaginary parts (complex label 1).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
