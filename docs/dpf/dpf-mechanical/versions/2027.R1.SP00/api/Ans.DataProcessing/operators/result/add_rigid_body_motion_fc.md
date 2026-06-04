---
uid: Ans.DataProcessing.operators.result.add_rigid_body_motion_fc
---

# *class* add_rigid_body_motion_fc(fields_container: object = None, translation_field: object = None, rotation_field: object = None, center_field: object = None, mesh: object = None, config: OperatorConfig = None)

Adds a given rigid translation, center and rotation from a displacement field. The rotation is given in terms of rotations angles. Note that the displacement field has to be in the global coordinate system

available inputs: `fields_container` (FieldsContainer), `translation_field` (Field), `rotation_field` (Field), `center_field` (Field), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [add_rigid_body_motion_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/add_rigid_body_motion_fc.md)

**Parameters:**

* **fields_container**
* **translation_field**
* **rotation_field**
* **center_field**
* **mesh**
* **config**

**Example:**

```python
op = add_rigid_body_motion_fc()

op = add_rigid_body_motion_fc(fields_container=my_fields_container,translation_field=my_translation_field,rotation_field=my_rotation_field,center_field=my_center_field,mesh=my_mesh)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### translation_field

**Type:** *LinkableInput*

### rotation_field

**Type:** *LinkableInput*

### center_field

**Type:** *LinkableInput*

### mesh

default is the mesh in the support

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
