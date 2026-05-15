---
uid: Ans.DataProcessing.operators.math.norm_fc
---

# *class* norm_fc(fields_container: object = None, scalar_int: object = None, config: OperatorConfig = None)

Computes the [$L_p$ norm](https://en.wikipedia.org/wiki/Norm_(mathematics)#p-norm) of the component vector

for each entity in every field of the input fields container:

$\mathrm{out}[k] = \left(\sum_{j=0}^{n_c-1} |v_{k,j}|^p\right)^{1/p}$.

Default is $p = 2$ (Euclidean norm). Each output field is scalar.

available inputs: `fields_container` (FieldsContainer), `scalar_int` (Int32) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [norm_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/norm_fc.md)

**Parameters:**

* **fields_container**
* **scalar_int**
* **config**

**Example:**

```python
op = norm_fc()

op = norm_fc(fields_container=my_fields_container,scalar_int=my_scalar_int)
```

## Inputs

### fields_container

Fields container containing fields for norm calculation

**Type:** *LinkableInput*

### scalar_int

$L_p$ norm order $p$ (positive integer, default is 2 for the Euclidean norm).

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container of scalar fields, one per input field, each containing the $L_p$ norm per entity.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
