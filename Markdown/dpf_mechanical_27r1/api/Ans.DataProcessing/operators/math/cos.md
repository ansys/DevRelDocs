---
uid: Ans.DataProcessing.operators.math.cos
---

# *class* cos(field: object = None, config: OperatorConfig = None)

Computes the entity-wise [cosine](https://en.wikipedia.org/wiki/Sine_and_cosine):

$\mathrm{out}[i] = \cos(\mathrm{in}[i])$.

The input must be dimensionless or carry an angle unit; any other unit raises an error.

When the input unit is an angle (e.g. degrees), values are automatically converted to radians

before the cosine is applied. The output is dimensionless.

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [cos operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/cos.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = cos()

op = cos(field=my_field)
```

## Inputs

### field

Dimensionless or angle-unit field or fields container.

**Type:** *LinkableInput*

## Outputs

### field

Dimensionless field with $\cos(\mathrm{in}[i])$ for each data entry.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
