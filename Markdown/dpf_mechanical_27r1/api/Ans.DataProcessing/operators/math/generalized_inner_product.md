---
uid: Ans.DataProcessing.operators.math.generalized_inner_product
---

# *class* generalized_inner_product(fieldA: object = None, fieldB: object = None, mesh: object = None, config: OperatorConfig = None)

generalized_inner_product()
generalized_inner_product(fieldA: object, fieldB: object, mesh: object, config: OperatorConfig)
generalized_inner_product(config: OperatorConfig)


**DPF Framework Reference:** [generalized_inner_product operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/generalized_inner_product.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **mesh**
* **config**

## Inputs

### fieldA

field or fields container with only one field is expected

**Type:** *LinkableInput*

### fieldB

field or fields container with only one field is expected

**Type:** *LinkableInput*

### mesh

Mesh required when computing the finite-element dot product between an elemental-nodal field (pin 0 or 1) and a nodal field.

**Type:** *LinkableInput*

## Outputs

### field

Inner product result field; dimensionality and unit are determined by the dispatched operation.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
