---
uid: Ans.DataProcessing.operators.math.qr_solve
---

# *class* qr_solve(fields_container: object = None, rhs: object = None, config: OperatorConfig = None)

Computes the solution using QR factorization.

available inputs: `fields_container` (FieldsContainer), `rhs` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [qr_solve operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/qr_solve.md)

**Parameters:**

* **fields_container**
* **rhs**
* **config**

**Example:**

```python
op = qr_solve()

op = qr_solve(fields_container=my_fields_container,rhs=my_rhs)
```

## Inputs

### fields_container

fields_container

**Type:** *LinkableInput*

### rhs

fields_container

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
