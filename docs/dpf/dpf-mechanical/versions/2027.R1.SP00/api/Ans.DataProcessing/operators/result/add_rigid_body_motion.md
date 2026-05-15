---
uid: Ans.DataProcessing.operators.result.add_rigid_body_motion
---

# *class* add_rigid_body_motion(displacement_field: object = None, translation_field: object = None, rotation_field: object = None, center_field: object = None, mesh: object = None, config: OperatorConfig = None)

Adds a given rigid translation, center and rotation from a displacement field. The rotation is given in terms of rotations angles. Note that the displacement field has to be in the global coordinate system

available inputs: `displacement_field` (Field), `translation_field` (Field), `rotation_field` (Field), `center_field` (Field), `mesh` (MeshedRegion) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [add_rigid_body_motion operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/add_rigid_body_motion.md)

**Parameters:**

* **displacement_field**
* **translation_field**
* **rotation_field**
* **center_field**
* **mesh**
* **config**

**Example:**

```python
op = add_rigid_body_motion()

op = add_rigid_body_motion(displacement_field=my_displacement_field,translation_field=my_translation_field,rotation_field=my_rotation_field,center_field=my_center_field,mesh=my_mesh)
```

## Inputs

### displacement_field

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
