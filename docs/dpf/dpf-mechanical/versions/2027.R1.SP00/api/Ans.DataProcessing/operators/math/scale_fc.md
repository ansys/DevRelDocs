---
uid: Ans.DataProcessing.operators.math.scale_fc
---

# *class* scale_fc(fields_container: object = None, weights: object = None, boolean: object = None, algorithm: object = None, config: OperatorConfig = None)

scale_fc()
scale_fc(fields_container: object, weights: object, boolean: object, algorithm: object, config: OperatorConfig)
scale_fc(config: OperatorConfig)


**DPF Framework Reference:** [scale_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/scale_fc.md)

**Parameters:**

* **fields_container**
* **weights**
* **boolean**
* **algorithm**
* **config**

## Inputs

### fields_container

fields container to be scaled

**Type:** *LinkableInput*

### weights

Double/Vector of doubles/Field/FieldsContainer. When scoped on overall, same value(s) applied on all the data, when scoped elsewhere, corresponding values will be multiplied due to the scoping

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

### fields_container

FieldsContainer with scaled field values

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
