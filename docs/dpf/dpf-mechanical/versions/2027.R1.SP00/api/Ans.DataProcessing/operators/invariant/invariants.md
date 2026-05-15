---
uid: Ans.DataProcessing.operators.invariant.invariants
---

# *class* invariants(generate_principal_stress: object = None, field: object = None, config: OperatorConfig = None)

Computes the element-wise invariants of a tensor field.

available inputs: `generate_principal_stress` (bool) (optional), `field` (Field)

available outputs: `field_int` (Field), `field_eqv` (Field), `field_max_shear` (Field), `field_eig_1` (Field), `field_eig_2` (Field), `field_eig_3` (Field)

**DPF Framework Reference:** [invariants operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/invariants.md)

**Parameters:**

* **generate_principal_stress**
* **field**
* **config**

**Example:**

```python
op = invariants()

op = invariants(generate_principal_stress=my_generate_principal_stress,field=my_field)
```

## Inputs

### generate_principal_stress

if true, generate principal stress in output pin 3/4/5 (default is false)

**Type:** *LinkableInput*

### field

**Type:** *LinkableInput*

## Outputs

### field_int

stress intensity field

**Type:** *LinkableOutput*

### field_eqv

stress equivalent intensity

**Type:** *LinkableOutput*

### field_max_shear

max shear stress field

**Type:** *LinkableOutput*

### field_eig_1

first eigen value field

**Type:** *LinkableOutput*

### field_eig_2

second eigen value field

**Type:** *LinkableOutput*

### field_eig_3

third eigen value field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
