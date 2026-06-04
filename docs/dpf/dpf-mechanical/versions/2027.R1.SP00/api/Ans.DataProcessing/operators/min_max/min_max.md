---
uid: Ans.DataProcessing.operators.min_max.min_max
---

# *class* min_max(field: object = None, config: OperatorConfig = None)

Compute the component-wise minimum (out 0) and maximum (out 1) over a field.

available inputs: `field` (Field, FieldsContainer)

available outputs: `field_min` (Field), `field_max` (Field)

**DPF Framework Reference:** [min_max operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/min_max/min_max.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = min_max()

op = min_max(field=my_field)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field_min

**Type:** *LinkableOutput*

### field_max

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
