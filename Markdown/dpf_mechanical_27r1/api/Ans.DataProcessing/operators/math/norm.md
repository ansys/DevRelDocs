---
uid: Ans.DataProcessing.operators.math.norm
---

# *class* norm(field: object = None, scalar_int: object = None, config: OperatorConfig = None)

Computes the [$L_p$ norm](https://en.wikipedia.org/wiki/Norm_(mathematics)#p-norm) of the component vector

for each entity in the field:

$\mathrm{out}[k] = \left(\sum_{j=0}^{n_c-1} |v_{k,j}|^p\right)^{1/p}$,

where $n_c$ is the number of components. Default is $p = 2$ (Euclidean norm).

The output is a scalar field with one value per entity.

available inputs: `field` (Field, FieldsContainer), `scalar_int` (Int32) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [norm operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/norm.md)

**Parameters:**

* **field**
* **scalar_int**
* **config**

**Example:**

```python
op = norm()

op = norm(field=my_field,scalar_int=my_scalar_int)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### scalar_int

$L_p$ norm order $p$ (positive integer, default is 2 for the Euclidean norm).

**Type:** *LinkableInput*

## Outputs

### field

Scalar field containing the $L_p$ norm value for each entity.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
