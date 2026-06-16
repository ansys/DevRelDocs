---
uid: Ans.DataProcessing.operators.math.ln_fc
---

# *class* ln_fc(fields_container: object = None, config: OperatorConfig = None)

Computes the entity-wise [natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm):

$\mathrm{out}[i] = \ln(\mathrm{in}[i])$.

The input must be dimensionless; a dimensional input raises an error.

The output is dimensionless.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [ln_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/ln_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = ln_fc()

op = ln_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

Dimensionless field, fields container, or numeric data.

**Type:** *LinkableInput*

## Outputs

### fields_container

Dimensionless field with $\ln(\mathrm{in}[i])$ for each data entry.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
