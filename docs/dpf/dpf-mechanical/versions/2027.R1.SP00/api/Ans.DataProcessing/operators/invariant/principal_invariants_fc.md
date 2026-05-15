---
uid: Ans.DataProcessing.operators.invariant.principal_invariants_fc
---

# *class* principal_invariants_fc(fields_container: object = None, config: OperatorConfig = None)

Computes the element-wise Eigen values of all the tensor fields of a fields container.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_eig_1` (FieldsContainer), `fields_eig_2` (FieldsContainer), `fields_eig_3` (FieldsContainer)

**DPF Framework Reference:** [principal_invariants_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/invariant/principal_invariants_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = principal_invariants_fc()

op = principal_invariants_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

## Outputs

### fields_eig_1

first eigen value fields

**Type:** *LinkableOutput*

### fields_eig_2

second eigen value fields

**Type:** *LinkableOutput*

### fields_eig_3

third eigen value fields

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
