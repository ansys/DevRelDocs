---
uid: Ans.DataProcessing.operators.geo.to_polar_coordinates
---

# *class* to_polar_coordinates(field: object = None, coordinate_system: object = None, config: OperatorConfig = None)

Finds r, theta (rad), and z coordinates of a coordinates (nodal) field in a cartesian coordinates system where the input coordinate system defines the rotation axis and the origin.

available inputs: `field` (Field, FieldsContainer), `coordinate_system` (Field) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [to_polar_coordinates operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/to_polar_coordinates.md)

**Parameters:**

* **field**
* **coordinate_system**
* **config**

**Example:**

```python
op = to_polar_coordinates()

op = to_polar_coordinates(field=my_field,coordinate_system=my_coordinate_system)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### coordinate_system

3-3 rotation matrix and origin coordinates must be set here to define a coordinate system. By default, the rotation axis is the z axis and the origin is [0,0,0].

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
