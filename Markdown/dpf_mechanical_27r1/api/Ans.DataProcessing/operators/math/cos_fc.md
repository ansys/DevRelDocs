---
uid: Ans.DataProcessing.operators.math.cos_fc
---

# *class* cos_fc(fields_container: object = None, config: OperatorConfig = None)

Computes the entity-wise [cosine](https://en.wikipedia.org/wiki/Sine_and_cosine):

$\mathrm{out}[i] = \cos(\mathrm{in}[i])$.

The input must be dimensionless or carry an angle unit; any other unit raises an error.

When the input unit is an angle (e.g. degrees), values are automatically converted to radians

before the cosine is applied. The output is dimensionless.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [cos_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/cos_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = cos_fc()

op = cos_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

Dimensionless or angle-unit field or fields container.

**Type:** *LinkableInput*

## Outputs

### fields_container

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
