---
uid: Ans.DataProcessing.operators.result.remove_rigid_body_motion
---

# *class* remove_rigid_body_motion(field: object = None, reference_node_id: object = None, mesh: object = None, config: OperatorConfig = None)

Removes rigid body mode from a total displacement field by minimization. Use a reference point in order to subtract its displacement to the result displacement field.

available inputs: `field` (Field, FieldsContainer), `reference_node_id` (Int32) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `field` (Field), `translation_field` (Field), `rotation_field` (Field), `center_field` (Field)

**DPF Framework Reference:** [remove_rigid_body_motion operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/result/remove_rigid_body_motion.md)

**Parameters:**

* **field**
* **reference_node_id**
* **mesh**
* **config**

**Example:**

```python
op = remove_rigid_body_motion()

op = remove_rigid_body_motion(field=my_field,reference_node_id=my_reference_node_id,mesh=my_mesh)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### reference_node_id

Id of the reference entity (node).

**Type:** *LinkableInput*

### mesh

default is the mesh in the support

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

### translation_field

Global rigid translation vector

**Type:** *LinkableOutput*

### rotation_field

Global rigid rotation angles

**Type:** *LinkableOutput*

### center_field

Center of the rigid rotation

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
