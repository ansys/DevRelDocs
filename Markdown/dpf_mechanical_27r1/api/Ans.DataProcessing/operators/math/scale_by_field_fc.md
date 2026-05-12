---
uid: Ans.DataProcessing.operators.math.scale_by_field_fc
---

# *class* scale_by_field_fc(field_or_fields_container_A: object = None, field_or_fields_container_B: object = None, config: OperatorConfig = None)

DEPRECATED, PLEASE USE SCALE. Scales a field (in 0) by a scalar field (in 1). If one field's scoping has an 'overall' location, then this field's values are applied on the other field entirely.

available inputs: `field_or_fields_container_A` (Field, FieldsContainer), `field_or_fields_container_B` (Field, FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [scale_by_field_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/scale_by_field_fc.md)

**Parameters:**

* **field_or_fields_container_A**
* **field_or_fields_container_B**
* **config**

**Example:**

```python
op = scale_by_field_fc()

op = scale_by_field_fc(field_or_fields_container_A=my_field_or_fields_container_A,field_or_fields_container_B=my_field_or_fields_container_B)
```

## Inputs

### field_or_fields_container_A

field or fields container with only one field is expected

**Type:** *LinkableInput*

### field_or_fields_container_B

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
