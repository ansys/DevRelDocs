---
uid: Ans.DataProcessing.operators.math.sqr
---

# *class* sqr(field: object = None, config: OperatorConfig = None)

Computes the entity-wise square

([Hadamard power](https://en.wikipedia.org/wiki/Hadamard_product_(matrices)#Analogous_operations) of two):

$\mathrm{out}[i] = \mathrm{in}[i]^2$.

The output unit is $u^2$ where $u$ is the input unit.

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [sqr operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sqr.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = sqr()

op = sqr(field=my_field)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

Field with $\mathrm{in}[i]^2$ for each data entry; unit is $u^2$, where $u$ is the input unit.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
