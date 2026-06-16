---
uid: Ans.DataProcessing.operators.math.sin_fc
---

# *class* sin_fc(fields_container: object = None, config: OperatorConfig = None)

Computes the entity-wise [sine](https://en.wikipedia.org/wiki/Sine_and_cosine):

$\mathrm{out}[i] = \sin(\mathrm{in}[i])$.

The input must be dimensionless or carry an angle unit; any other unit raises an error.

When the input unit is an angle (e.g. degrees), values are automatically converted to radians

before the sine is applied. The output is dimensionless.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [sin_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sin_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = sin_fc()

op = sin_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

Dimensionless or angle-unit field.

**Type:** *LinkableInput*

## Outputs

### fields_container

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
