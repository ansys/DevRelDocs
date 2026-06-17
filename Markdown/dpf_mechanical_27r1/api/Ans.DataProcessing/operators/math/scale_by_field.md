---
uid: Ans.DataProcessing.operators.math.scale_by_field
---

# *class* scale_by_field(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

DEPRECATED, PLEASE USE SCALE. Scales a field (in 0) by a scalar field (in 1). If one field's scoping has an 'overall' location, then this field's values are applied on the other field entirely.

available inputs: `fieldA` (Field, FieldsContainer), `fieldB` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [scale_by_field operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/scale_by_field.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = scale_by_field()

op = scale_by_field(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Inputs

### fieldA

field or fields container with only one field is expected

**Type:** *LinkableInput*

### fieldB

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
