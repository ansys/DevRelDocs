---
uid: Ans.DataProcessing.operators.math.add_constant_fc
---

# *class* add_constant_fc(fields_container: object = None, weights: object = None, config: OperatorConfig = None)

add_constant_fc()
add_constant_fc(fields_container: object, weights: object, config: OperatorConfig)
add_constant_fc(config: OperatorConfig)


**DPF Framework Reference:** [add_constant_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/add_constant_fc.md)

**Parameters:**

* **fields_container**
* **weights**
* **config**

## Inputs

### fields_container

field or fields container with only one field is expected

**Type:** *LinkableInput*

### weights

double or vector of double

**Type:** *LinkableInput*

### ponderation

Deprecated alias of: weights

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
