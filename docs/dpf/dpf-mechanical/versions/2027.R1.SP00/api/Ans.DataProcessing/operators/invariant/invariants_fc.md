---
uid: Ans.DataProcessing.operators.invariant.invariants_fc
---

# *class* invariants_fc(generate_principal_stress: object = None, fields_container: object = None, config: OperatorConfig = None)

Computes the element-wise invariants of all the tensor fields of a fields container.

available inputs: `generate_principal_stress` (bool) (optional), `fields_container` (FieldsContainer)

available outputs: `fields_int` (FieldsContainer), `fields_eqv` (FieldsContainer), `fields_max_shear` (FieldsContainer), `fields_eig_1` (FieldsContainer), `fields_eig_2` (FieldsContainer), `fields_eig_3` (FieldsContainer)

**DPF Framework Reference:** [invariants_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/invariants_fc.md)

**Parameters:**

* **generate_principal_stress**
* **fields_container**
* **config**

**Example:**

```python
op = invariants_fc()

op = invariants_fc(generate_principal_stress=my_generate_principal_stress,fields_container=my_fields_container)
```

## Inputs

### generate_principal_stress

if true, generate principal stress in output pin 3/4/5 (default is false)

**Type:** *LinkableInput*

### fields_container

**Type:** *LinkableInput*

## Outputs

### fields_int

stress intensity field

**Type:** *LinkableOutput*

### fields_eqv

stress equivalent intensity

**Type:** *LinkableOutput*

### fields_max_shear

max shear stress field

**Type:** *LinkableOutput*

### fields_eig_1

first eigen value field

**Type:** *LinkableOutput*

### fields_eig_2

second eigen value field

**Type:** *LinkableOutput*

### fields_eig_3

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
