---
uid: Ans.DataProcessing.operators.geo.cartesian_to_spherical
---

# *class* cartesian_to_spherical(field: object = None, config: OperatorConfig = None)

Converts 3D field from cartesian coordinates to spherical coordinates.

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [cartesian_to_spherical operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/cartesian_to_spherical.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = cartesian_to_spherical()

op = cartesian_to_spherical(field=my_field)
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
