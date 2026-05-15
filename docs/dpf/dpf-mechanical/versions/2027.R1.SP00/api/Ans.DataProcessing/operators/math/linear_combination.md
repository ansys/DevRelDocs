---
uid: Ans.DataProcessing.operators.math.linear_combination
---

# *class* linear_combination(a: object = None, fields_containerA: object = None, fields_containerB: object = None, b: object = None, fields_containerC: object = None, config: OperatorConfig = None)

Computes aXY + bZ where a,b (in 0, in 3) are scalar and X,Y,Z (in 1,2,4) are complex numbers.

available inputs: `a` (double), `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer), `b` (double), `fields_containerC` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [linear_combination operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/linear_combination.md)

**Parameters:**

* **a**
* **fields_containerA**
* **fields_containerB**
* **b**
* **fields_containerC**
* **config**

**Example:**

```python
op = linear_combination()

op = linear_combination(a=my_a,fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB,b=my_b,fields_containerC=my_fields_containerC)
```

## Inputs

### a

Double

**Type:** *LinkableInput*

### fields_containerA

**Type:** *LinkableInput*

### fields_containerB

**Type:** *LinkableInput*

### b

Double

**Type:** *LinkableInput*

### fields_containerC

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
