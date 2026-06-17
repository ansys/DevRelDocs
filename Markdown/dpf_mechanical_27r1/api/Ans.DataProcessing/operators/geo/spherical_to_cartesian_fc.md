---
uid: Ans.DataProcessing.operators.geo.spherical_to_cartesian_fc
---

# *class* spherical_to_cartesian_fc(fields_container: object = None, config: OperatorConfig = None)

Converts 3D field from spherical coordinates to cartesian coordinates.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [spherical_to_cartesian_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/spherical_to_cartesian_fc.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = spherical_to_cartesian_fc()

op = spherical_to_cartesian_fc(fields_container=my_fields_container)
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
