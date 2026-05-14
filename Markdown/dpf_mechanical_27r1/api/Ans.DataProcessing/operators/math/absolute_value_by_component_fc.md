---
uid: Ans.DataProcessing.operators.math.absolute_value_by_component_fc
---

# *class* absolute_value_by_component_fc(fields_container: object = None, config: OperatorConfig = None)

Computes the absolute value of each data value in the input field component-wise, without performing vector norm operations.

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

Field with absolute values applied to each component

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
