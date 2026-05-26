---
uid: Ans.DataProcessing.operators.math.generalized_inner_product_fc
---

# *class* generalized_inner_product_fc(field_or_fields_container_A: object = None, field_or_fields_container_B: object = None, mesh: object = None, config: OperatorConfig = None)

generalized_inner_product_fc()
generalized_inner_product_fc(field_or_fields_container_A: object, field_or_fields_container_B: object, mesh: object, config: OperatorConfig)
generalized_inner_product_fc(config: OperatorConfig)


**DPF Framework Reference:** [generalized_inner_product_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/generalized_inner_product_fc.md)

**Parameters:**

* **field_or_fields_container_A**
* **field_or_fields_container_B**
* **mesh**
* **config**

## Inputs

### field_or_fields_container_A

field or fields container with only one field is expected

**Type:** *LinkableInput*

### field_or_fields_container_B

field or fields container with only one field is expected

**Type:** *LinkableInput*

### mesh

Mesh required when computing the finite-element dot product between an elemental-nodal field (pin 0 or 1) and a nodal field.

**Type:** *LinkableInput*

## Outputs

### fields_container

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
