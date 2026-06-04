---
uid: Ans.DataProcessing.operators.mesh.mesh_plan_clip
---

# *class* mesh_plan_clip(mesh_or_field: object = None, normal: object = None, origin: object = None, config: OperatorConfig = None)

Clips a volume mesh along a plane and keeps one side.

available inputs: `mesh_or_field` (MeshedRegion, Field), `normal` (Field), `origin` (Field)

available outputs: `field` (Field), `mesh` (MeshedRegion)

**DPF Framework Reference:** [mesh_plan_clip operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_plan_clip.md)

**Parameters:**

* **mesh_or_field**
* **normal**
* **origin**
* **config**

**Example:**

```python
op = mesh_plan_clip()

op = mesh_plan_clip(mesh_or_field=my_mesh_or_field,normal=my_normal,origin=my_origin)
```

## Inputs

### mesh_or_field

**Type:** *LinkableInput*

### normal

An overall 3D vector that gives the normal direction of the plane.

**Type:** *LinkableInput*

### origin

An overall 3D vector that gives a point of the plane.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

### mesh

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
