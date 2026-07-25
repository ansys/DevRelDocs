---
uid: Ans.DataProcessing.operators.math.qr_solve
---

# *class* qr_solve(fields_container: object = None, rhs: object = None, config: OperatorConfig = None)

Solves the linear system $A x = b$ using

[QR factorization](https://en.wikipedia.org/wiki/QR_decomposition).

For each time set, $A$ (pin 0) is factored via QR and the solution $x$ is obtained by back-substitution

against $b$ (pin 1). Both real and complex systems are supported.

The input matrix $A$ must have at least as many rows as columns.

The output unit is (unit of $b$) / (unit of $A$).

available inputs: `fields_container` (FieldsContainer), `rhs` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [qr_solve operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/qr_solve.md)

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

Fields container representing the matrix $A$. May be real or complex (complex label required for complex systems).

**Type:** *LinkableInput*

### rhs

Fields container representing the right-hand side $b$. Must have the same number of rows as $A$ and matching label structure.

**Type:** *LinkableInput*

## Outputs

### fields_container

Solution fields container $x$ satisfying $A x \approx b$. Same label structure as the input. Unit is (unit of $b$) / (unit of $A$).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
