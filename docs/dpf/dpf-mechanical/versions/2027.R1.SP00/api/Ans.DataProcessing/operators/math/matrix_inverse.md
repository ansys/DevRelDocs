---
uid: Ans.DataProcessing.operators.math.matrix_inverse
---

# *class* matrix_inverse(fields_container: object = None, config: OperatorConfig = None)

Computes the [matrix inverse](https://en.wikipedia.org/wiki/Invertible_matrix)

for each complex square matrix field in the input fields container.

Both real and imaginary parts must be present (complex label required).

The input fields must be square ($n \times n$) matrices; non-square inputs throw an error.

The output unit is the inverse of the input unit.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [matrix_inverse operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/matrix_inverse.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = matrix_inverse()

op = matrix_inverse(fields_container=my_fields_container)
```

## Inputs

### fields_container

Fields container of complex square matrix fields to invert. Must have a complex label with real (index 0) and imaginary (index 1) parts. Each field must be a square matrix.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container of inverted complex matrices. Same label structure as the input. Unit is the inverse of the input unit.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
