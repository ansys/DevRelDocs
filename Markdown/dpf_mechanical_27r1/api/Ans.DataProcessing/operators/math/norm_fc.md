---
uid: Ans.DataProcessing.operators.math.norm_fc
---

# *class* norm_fc(fields_container: object = None, scalar_int: object = None, config: OperatorConfig = None)

Computes the element-wise L2 norm of the field elementary data. This process is applied on each field of the input fields container.

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

FieldsContainer containing fields for norm calculation

**Type:** *LinkableInput*

### scalar_int

Lp normalisation type, p = 1, 2, ...n - Default Lp=2

**Type:** *LinkableInput*

## Outputs

### fields_container

FieldsContainer with computed norms for each field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
