---
uid: Ans.DataProcessing.operators.math.absolute_value_by_component_fc
---

# *class* absolute_value_by_component_fc(fields_container: object = None, config: OperatorConfig = None)

Applies the [absolute value](https://en.wikipedia.org/wiki/Absolute_value) function component-wise

to each scalar data entry: $\mathrm{out}[i] = |\mathrm{in}[i]|$.

This is a per-component operation and does not compute a vector norm.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [absolute_value_by_component_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/absolute_value_by_component_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = absolute_value_by_component_fc()

op = absolute_value_by_component_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

Field, fields container, or numeric data for which to compute absolute values

**Type:** *LinkableInput*

## Outputs

### fields_container

Field with $|\mathrm{in}[i]|$ applied to each data component, preserving the input unit and dimensionality.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
