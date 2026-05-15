---
uid: Ans.DataProcessing.operators.math.exponential
---

# *class* exponential(field: object = None, config: OperatorConfig = None)

exponential()
exponential(field: object, config: OperatorConfig)
exponential(config: OperatorConfig)


**DPF Framework Reference:** [exponential operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/exponential.md)

**Parameters:**

* **field**
* **config**

## Inputs

### field

Dimensionless field, fields container, or numeric data.

**Type:** *LinkableInput*

## Outputs

### field

Dimensionless field with $e^{\mathrm{in}[i]}$ for each data entry.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
