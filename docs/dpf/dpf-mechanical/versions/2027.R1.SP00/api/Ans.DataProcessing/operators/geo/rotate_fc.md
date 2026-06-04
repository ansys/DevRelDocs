---
uid: Ans.DataProcessing.operators.geo.rotate_fc
---

# *class* rotate_fc(fields_container: object = None, coordinate_system: object = None, config: OperatorConfig = None)

Apply a transformation (rotation) matrix on all the fields of a fields container.

available inputs: `fields_container` (FieldsContainer), `coordinate_system` (Field)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [rotate_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/rotate_fc.md)

**Parameters:**

* **fields_container**
* **coordinate_system**
* **config**

**Example:**

```python
op = rotate_fc()

op = rotate_fc(fields_container=my_fields_container,coordinate_system=my_coordinate_system)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### coordinate_system

3-3 rotation matrix

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
