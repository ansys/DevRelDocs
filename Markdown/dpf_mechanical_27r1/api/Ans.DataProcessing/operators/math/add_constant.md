---
uid: Ans.DataProcessing.operators.math.add_constant
---

# *class* add_constant(field: object = None, weights: object = None, config: OperatorConfig = None)

add_constant()
add_constant(field: object, weights: object, config: OperatorConfig)
add_constant(config: OperatorConfig)


**DPF Framework Reference:** [add_constant operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/add_constant.md)

**Parameters:**

* **field**
* **weights**
* **config**

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### weights

double or vector of double

**Type:** *LinkableInput*

### ponderation

Deprecated alias of: weights

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
