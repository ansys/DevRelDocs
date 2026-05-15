---
uid: Ans.DataProcessing.operators.geo.rotate_in_cylindrical_cs_fc
---

# *class* rotate_in_cylindrical_cs_fc(field: object = None, coordinate_system: object = None, mesh: object = None, config: OperatorConfig = None)

Rotates all the fields of a fields container (not defined with a cynlindrical coordinate system) to its corresponding values into the specified cylindrical coordinate system (corresponding to the field position). If a coordinate system is not set in the coordinate_system pin, the field is rotated on each node following the local polar coordinate system.

available inputs: `field` (Field, FieldsContainer), `coordinate_system` (Field) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [rotate_in_cylindrical_cs_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/rotate_in_cylindrical_cs_fc.md)

**Parameters:**

* **field**
* **coordinate_system**
* **mesh**
* **config**

**Example:**

```python
op = rotate_in_cylindrical_cs_fc()

op = rotate_in_cylindrical_cs_fc(field=my_field,coordinate_system=my_coordinate_system,mesh=my_mesh)
```

## Inputs

### field

**Type:** *LinkableInput*

### coordinate_system

3-3 rotation matrix and origin coordinates must be set here to define a coordinate system.

**Type:** *LinkableInput*

### mesh

Mesh support of the input fields_container, in case it does not have one defined.

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
