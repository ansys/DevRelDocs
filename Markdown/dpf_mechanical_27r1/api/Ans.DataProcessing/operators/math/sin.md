---
uid: Ans.DataProcessing.operators.math.sin
---

# *class* sin(field: object = None, config: OperatorConfig = None)

Computes the entity-wise [sine](https://en.wikipedia.org/wiki/Sine_and_cosine):

$\mathrm{out}[i] = \sin(\mathrm{in}[i])$.

The input must be dimensionless or carry an angle unit; any other unit raises an error.

When the input unit is an angle (e.g. degrees), values are automatically converted to radians

before the sine is applied. The output is dimensionless.

available inputs: `field` (Field)

available outputs: `field` (Field)

**DPF Framework Reference:** [sin operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sin.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = sin()

op = sin(field=my_field)
```

## Inputs

### field

Dimensionless or angle-unit field.

**Type:** *LinkableInput*

## Outputs

### field

Dimensionless field with $\sin(\mathrm{in}[i])$ for each data entry.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
