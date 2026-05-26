---
uid: Ans.DataProcessing.operators.math.sqr_fc
---

# *class* sqr_fc(fields_container: object = None, config: OperatorConfig = None)

Computes the entity-wise square

([Hadamard power](https://en.wikipedia.org/wiki/Hadamard_product_(matrices)#Analogous_operations) of two):

$\mathrm{out}[i] = \mathrm{in}[i]^2$.

The output unit is $u^2$ where $u$ is the input unit.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [sqr_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sqr_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = sqr_fc()

op = sqr_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### fields_container

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
