---
uid: Ans.DataProcessing.operators.math.sqrt_fc
---

# *class* sqrt_fc(fields_container: object = None, config: OperatorConfig = None)

Computes the entity-wise square root

([Hadamard root](https://en.wikipedia.org/wiki/Hadamard_product_(matrices)#Analogous_operations)):

$\mathrm{out}[i] = \sqrt{\mathrm{in}[i]}$.

All input values must be non-negative; a negative value raises an error.

The output unit is $\sqrt{u}$ where $u$ is the input unit.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [sqrt_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sqrt_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = sqrt_fc()

op = sqrt_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

Field or fields container containing non-negative numeric data.

**Type:** *LinkableInput*

## Outputs

### fields_container

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
