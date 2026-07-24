---
uid: Ans.DataProcessing.operators.math.ln_fc
---

# *class* ln_fc(fields_container: object = None, apply_to_time_freq_support: object = None, config: OperatorConfig = None)

Computes the entity-wise [natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm):

$\mathrm{out}[i] = \ln(\mathrm{in}[i])$.

The input must be dimensionless; a dimensional input raises an error.

The output is dimensionless.

available inputs: `fields_container` (FieldsContainer), `apply_to_time_freq_support` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [ln_fc operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/math/ln_fc.md)

**Parameters:**

* **fields_container**
* **apply_to_time_freq_support**
* **config**

**Example:**

```python
op = ln_fc()

op = ln_fc(fields_container=my_fields_container,apply_to_time_freq_support=my_apply_to_time_freq_support)
```

## Inputs

### fields_container

Dimensionless field, fields container, or numeric data.

**Type:** *LinkableInput*

### apply_to_time_freq_support

Boolean value indicating if the natural logarithm must be applied to the time/frequency values of the time/frequency support attached to the fields container (if present). Default to false.

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
