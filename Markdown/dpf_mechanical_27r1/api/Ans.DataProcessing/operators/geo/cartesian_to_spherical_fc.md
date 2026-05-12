---
uid: Ans.DataProcessing.operators.geo.cartesian_to_spherical_fc
---

# *class* cartesian_to_spherical_fc(fields_container: object = None, config: OperatorConfig = None)

Converts 3D field from cartesian coordinates to spherical coordinates.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [cartesian_to_spherical_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/cartesian_to_spherical_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = cartesian_to_spherical_fc()

op = cartesian_to_spherical_fc(fields_container=my_fields_container)
```

## Inputs

### fields_container

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
