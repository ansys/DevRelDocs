---
uid: Ans.DataProcessing.operators.math.svd
---

# *class* svd(fields_container: object = None, config: OperatorConfig = None)

Computes the matrix singular value decomposition (SVD) for each field in the given fields container.

available inputs: `fields_container` (FieldsContainer)

available outputs: `s_svd` (FieldsContainer), `u_svd` (FieldsContainer), `vt_svd` (FieldsContainer)

**DPF Framework Reference:** [svd operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/svd.md)

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

fields_container

**Type:** *LinkableInput*

## Outputs

### s_svd

Singular values of the input data, where A=U.S.Vt

**Type:** *LinkableOutput*

### u_svd

U of the input data, where A=U.S.Vt

**Type:** *LinkableOutput*

### vt_svd

Vt of the input data, where A=U.S.Vt

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
