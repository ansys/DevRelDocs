---
uid: Ans.DataProcessing.operators.math.matrix_product_fc
---

# *class* matrix_product_fc(field_or_fields_container_A: object = None, field_or_fields_container_B: object = None, config: OperatorConfig = None)

matrix_product_fc()
matrix_product_fc(field_or_fields_container_A: object, field_or_fields_container_B: object, config: OperatorConfig)
matrix_product_fc(config: OperatorConfig)


**DPF Framework Reference:** [matrix_product_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027.1.sp00/operator-specifications/math/matrix_product_fc.md)

**Parameters:**

* **field_or_fields_container_A**
* **field_or_fields_container_B**
* **config**

## Inputs

### field_or_fields_container_A

Matrix field A (second-order tensor). Can also be a vector when pin 1 is the matrix.

**Type:** *LinkableInput*

### field_or_fields_container_B

Matrix field B (second-order tensor) or vector field B.

**Type:** *LinkableInput*

## Outputs

### fields_container

Result of the matrix product; a matrix field or a vector field depending on the inputs.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
