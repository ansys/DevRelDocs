---
uid: Ans.DataProcessing.operators.math.sqrt
---

# *class* sqrt(field: object = None, config: OperatorConfig = None)

Computes the entity-wise square root

([Hadamard root](https://en.wikipedia.org/wiki/Hadamard_product_(matrices)#Analogous_operations)):

$\mathrm{out}[i] = \sqrt{\mathrm{in}[i]}$.

All input values must be non-negative; a negative value raises an error.

The output unit is $\sqrt{u}$ where $u$ is the input unit.

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [sqrt operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sqrt.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = sqrt()

op = sqrt(field=my_field)
```

## Inputs

### field

Field or fields container containing non-negative numeric data.

**Type:** *LinkableInput*

## Outputs

### field

Field with $\sqrt{\mathrm{in}[i]}$ for each data entry; unit is $\sqrt{u}$, where $u$ is the input unit.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
