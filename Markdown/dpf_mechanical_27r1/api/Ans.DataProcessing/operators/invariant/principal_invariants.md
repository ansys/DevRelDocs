---
uid: Ans.DataProcessing.operators.invariant.principal_invariants
---

# *class* principal_invariants(field: object = None, config: OperatorConfig = None)

Computes the element-wise Eigen values of a tensor field.

available inputs: `field` (Field)

available outputs: `field_eig_1` (Field), `field_eig_2` (Field), `field_eig_3` (Field)

**DPF Framework Reference:** [principal_invariants operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/principal_invariants.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = principal_invariants()

op = principal_invariants(field=my_field)
```

## Inputs

### field

**Type:** *LinkableInput*

## Outputs

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
