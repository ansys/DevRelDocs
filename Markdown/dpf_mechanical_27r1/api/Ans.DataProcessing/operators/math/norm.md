---
uid: Ans.DataProcessing.operators.math.norm
---

# *class* norm(field: object = None, scalar_int: object = None, config: OperatorConfig = None)

Computes the element-wise Lp norm of the field elementary data. Default Lp=L2

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

Lp normalisation type, p = 1, 2, ...n - Default Lp=L2

**Type:** *LinkableInput*

## Outputs

### field

Scalar field containing the Lp norm values for each element

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
