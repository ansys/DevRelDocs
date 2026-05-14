---
uid: Ans.DataProcessing.operators.compression.apply_svd
---

# *class* apply_svd(field_contaner_to_compress: object = None, scalar_int: object = None, scalar_double: object = None, boolean: object = None, config: OperatorConfig = None)

Computes the coefficients (=U*Sigma) and VT components from SVD.

available inputs: `field_contaner_to_compress` (FieldsContainer), `scalar_int` (Int32) (optional), `scalar_double` (double) (optional), `boolean` (bool) (optional)

available outputs: `us_svd` (FieldsContainer), `vt_svd` (FieldsContainer), `sigma` (Field ,FieldsContainer)

**DPF Framework Reference:** [apply_svd operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/compression/apply_svd.md)

**Parameters:**

* **field_contaner_to_compress**
* **scalar_int**
* **scalar_double**
* **boolean**
* **config**

**Example:**

```python
op = apply_svd()

op = apply_svd(field_contaner_to_compress=my_field_contaner_to_compress,scalar_int=my_scalar_int,scalar_double=my_scalar_double,boolean=my_boolean)
```

## Inputs

### field_contaner_to_compress

Fields container with data to be compressed

**Type:** *LinkableInput*

### scalar_int

Number of vectors (r) to keep for the future reconstraction of the matrix A, ex.A[m,n] = coef[m,r] * VT[r,n], where coef = U * Sigma

**Type:** *LinkableInput*

### scalar_double

Threshold (precision) as a double (Default : 1e-7). If both pin1 and pin2 are provided, choose the min r-vectors

**Type:** *LinkableInput*

### boolean

Apply SVD on the initial data (Default : false), otherwise use reduced data (square matrix with the smallest dimensions).

**Type:** *LinkableInput*

## Outputs

### us_svd

The output entity is a fields container (time dependant); it contains the product of two matrices, U and S, where A=U.S.Vt

**Type:** *LinkableOutput*

### vt_svd

The output entity is a field container (space dependant), containing the Vt, where A=U.S.Vt

**Type:** *LinkableOutput*

### sigma

The output entity is a field (or a field container if input fc contains several labels, where field contains results per label), containing singular (S) values of the input data, where A=U.S.Vt

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
