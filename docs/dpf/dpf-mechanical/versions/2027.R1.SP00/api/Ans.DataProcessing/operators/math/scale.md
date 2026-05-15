---
uid: Ans.DataProcessing.operators.math.scale
---

# *class* scale(field: object = None, weights: object = None, boolean: object = None, algorithm: object = None, config: OperatorConfig = None)

scale()
scale(field: object, weights: object, boolean: object, algorithm: object, config: OperatorConfig)
scale(config: OperatorConfig)


**DPF Framework Reference:** [scale operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/scale.md)

**Parameters:**

* **field**
* **weights**
* **boolean**
* **algorithm**
* **config**

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### weights

Double/Field/Vector of doubles. When scoped on overall, same value(s) applied on all the data, when scoped elsewhere, corresponding values will be multiplied due to the scoping

**Type:** *LinkableInput*

### ponderation

Deprecated alias of: weights

**Type:** *LinkableInput*

### boolean

Default is false. If set to true, output of scale is made dimensionless

**Type:** *LinkableInput*

### algorithm

Algorithm selection: 0 (default) uses MKL for optimization, 1 uses standard loops

**Type:** *LinkableInput*

## Outputs

### field

Field with scaled values (input_field * scale_factor)

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
