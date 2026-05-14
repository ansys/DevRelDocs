---
uid: Ans.DataProcessing.operators.math.minus
---

# *class* minus(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

minus()
minus(fieldA: object, fieldB: object, config: OperatorConfig)
minus(config: OperatorConfig)


**DPF Framework Reference:** [minus operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/minus.md)

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

Field whose data equals $A[i] - B[i]$, carrying pin A's unit (or the corresponding temperature-difference unit when subtracting two temperature fields).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
