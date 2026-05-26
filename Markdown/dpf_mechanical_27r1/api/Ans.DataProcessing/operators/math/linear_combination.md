---
uid: Ans.DataProcessing.operators.math.linear_combination
---

# *class* linear_combination(a: object = None, fields_containerA: object = None, fields_containerB: object = None, b: object = None, fields_containerC: object = None, config: OperatorConfig = None)

Computes the [linear combination](https://en.wikipedia.org/wiki/Linear_combination)

$a \cdot X \cdot Y + b \cdot Z$,

where $a$ (pin 0) and $b$ (pin 3) are real scalars,

and $X$ (pin 1), $Y$ (pin 2), $Z$ (pin 4) are complex-valued fields containers.

The product $X \cdot Y$ is a standard complex multiplication.

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

Real scalar factor $a$ applied to the complex product $X \cdot Y$.

**Type:** *LinkableInput*

### fields_containerA

**Type:** *LinkableInput*

### fields_containerB

**Type:** *LinkableInput*

### b

Real scalar factor $b$ applied to the complex addend $Z$.

**Type:** *LinkableInput*

### fields_containerC

Third complex-valued fields container $Z$.

**Type:** *LinkableInput*

## Outputs

### fields_container

Fields container with the complex result $a \cdot X \cdot Y + b \cdot Z$ (real and imaginary parts).

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
