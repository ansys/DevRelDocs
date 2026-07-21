---
uid: Ans.DataProcessing.operators.math.svd
---

# *class* svd(fields_container: object = None, config: OperatorConfig = None)

Computes the [Singular Value Decomposition (SVD)](https://en.wikipedia.org/wiki/Singular_value_decomposition)

$A = U \Sigma V^{*T}$ for each matrix field in the input fields container.

Both real and complex matrices are supported.

The decomposition satisfies $A = U S V^T$ (real) or $A = U S V^{*T}$ (complex),

where $S$ contains the singular values, $U$ is left-unitary, and $V^T$ (or $V^{*T}$) is right-unitary.

available inputs: `fields_container` (FieldsContainer)

available outputs: `s_svd` (FieldsContainer), `u_svd` (FieldsContainer), `vt_svd` (FieldsContainer)

**DPF Framework Reference:** [svd operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/svd.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = svd()

op = svd(fields_container=my_fields_container)
```

## Inputs

### fields_container

Fields container of matrix fields to decompose. May be real or complex (complex label required for complex inputs). Each field must represent a matrix.

**Type:** *LinkableInput*

## Outputs

### s_svd

Singular values $S$ of the decomposition $A = U S V^{*T}$. Same label structure as the input.

**Type:** *LinkableOutput*

### u_svd

Left unitary matrix $U$ of the decomposition $A = U S V^{*T}$. Same label structure as the input.

**Type:** *LinkableOutput*

### vt_svd

Conjugate transpose of the right unitary matrix $V^{*T}$ of the decomposition $A = U S V^{*T}$. Same label structure as the input.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
