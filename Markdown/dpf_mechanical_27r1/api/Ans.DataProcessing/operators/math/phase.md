---
uid: Ans.DataProcessing.operators.math.phase
---

# *class* phase(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

Computes the [argument](https://en.wikipedia.org/wiki/Argument_(complex_analysis)) (phase angle)

of a complex quantity given as separate real and imaginary fields:

$\phi[i] = \mathrm{atan2}(B[i],\, A[i])$.

The output is in radians.

available inputs: `fieldA` (Field, FieldsContainer), `fieldB` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [phase operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/phase.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = phase()

op = phase(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Inputs

### fieldA

field or fields container with only one field is expected

**Type:** *LinkableInput*

### fieldB

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

Field containing the phase angle $\mathrm{atan2}(B[i],\, A[i])$ in radians for each data entry.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
