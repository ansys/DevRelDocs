---
uid: Ans.DataProcessing.operators.math.matrix_product
---

# *class* matrix_product(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

matrix_product()
matrix_product(fieldA: object, fieldB: object, config: OperatorConfig)
matrix_product(config: OperatorConfig)


**DPF Framework Reference:** [matrix_product operator specification](https://developer.ansys.com/docs/dpf-framework-2027.r1.sp00/operator-specifications/math/matrix_product.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

## Inputs

### fieldA

Matrix field A (second-order tensor). Can also be a vector when pin 1 is the matrix.

**Type:** *LinkableInput*

### fieldB

Matrix field B (second-order tensor) or vector field B.

**Type:** *LinkableInput*

## Outputs

### field

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
