---
uid: Ans.DataProcessing.operators.math.add
---

# *class* add(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

add()
add(fieldA: object, fieldB: object, config: OperatorConfig)
add(config: OperatorConfig)


**DPF Framework Reference:** [add operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/add.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

## Inputs

### fieldA

field or fields container with only one field is expected

**Type:** *LinkableInput*

### fieldB

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

Field containing the element-wise sum of the two input fields

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
