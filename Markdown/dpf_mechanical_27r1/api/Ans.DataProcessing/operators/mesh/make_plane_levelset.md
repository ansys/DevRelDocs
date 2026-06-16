---
uid: Ans.DataProcessing.operators.mesh.make_plane_levelset
---

# *class* make_plane_levelset(coordinates: object = None, normal: object = None, origin: object = None, config: OperatorConfig = None)

Computes the level set for a plane using coordinates.

available inputs: `coordinates` (MeshedRegion, Field), `normal` (Field), `origin` (Field)

available outputs: `field` (Field)

**DPF Framework Reference:** [make_plane_levelset operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/make_plane_levelset.md)

**Parameters:**

* **coordinates**
* **normal**
* **origin**
* **config**

**Example:**

```python
op = make_plane_levelset()

op = make_plane_levelset(coordinates=my_coordinates,normal=my_normal,origin=my_origin)
```

## Inputs

### coordinates

**Type:** *LinkableInput*

### normal

An overall 3D vector that gives the normal direction of the plane.

**Type:** *LinkableInput*

### origin

An overall 3d vector that gives a point of the plane.

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
