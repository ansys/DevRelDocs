---
uid: Ans.DataProcessing.operators.geo.rotate
---

# *class* rotate(field: object = None, field_rotation_matrix: object = None, config: OperatorConfig = None)

Applies a transformation (rotation) matrix on a field.

available inputs: `field` (Field, FieldsContainer), `field_rotation_matrix` (Field)

available outputs: `field` (Field)

**DPF Framework Reference:** [rotate operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/rotate.md)

**Parameters:**

* **field**
* **field_rotation_matrix**
* **config**

**Example:**

```python
op = rotate()

op = rotate(field=my_field,field_rotation_matrix=my_field_rotation_matrix)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### field_rotation_matrix

3-3 rotation matrix

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
