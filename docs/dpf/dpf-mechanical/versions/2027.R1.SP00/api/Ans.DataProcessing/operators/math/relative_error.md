---
uid: Ans.DataProcessing.operators.math.relative_error
---

# *class* relative_error(value: object = None, reference: object = None, config: OperatorConfig = None)

relative_error()
relative_error(value: object, reference: object, config: OperatorConfig)
relative_error(config: OperatorConfig)


**DPF Framework Reference:** [relative_error operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/relative_error.md)

**Parameters:**

* **value**
* **reference**
* **config**

## Inputs

### value

field or fields container with only one field is expected

**Type:** *LinkableInput*

### reference

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

### zero_ref_scoping

Ids of entities where reference value is zero.

**Type:** *LinkableOutput*

### no_ref_scoping

Ids of entities where there are no reference value.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
