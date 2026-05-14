---
uid: Ans.DataProcessing.operators.geo.spherical_to_cartesian
---

# *class* spherical_to_cartesian(field: object = None, config: OperatorConfig = None)

Converts 3D field from spherical coordinates to cartesian coordinates.

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [spherical_to_cartesian operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/spherical_to_cartesian.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = spherical_to_cartesian()

op = spherical_to_cartesian(field=my_field)
```

## Inputs

### field

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
