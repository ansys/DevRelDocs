---
uid: Ans.DataProcessing.operators.mesh.make_plane_levelset
---

# *class* make_plane_levelset(coordinates: object = None, normal: object = None, origin: object = None, config: OperatorConfig = None)

Computes the signed distance from each coordinate to a plane defined by an origin and a normal vector.

For coordinate $\mathbf{x}$, plane origin $\mathbf{x}_0$, and nonzero normal $\mathbf{n}$, the result is

$\frac{\mathbf{n}\cdot(\mathbf{x}-\mathbf{x}_0)}{\|\mathbf{n}\|}$. Positive and negative values identify

opposite sides of the plane, and zero identifies points on the plane. The coordinates input accepts either

a coordinate field or a meshed region; for a meshed region, its coordinate field is used.

available inputs: `coordinates` (MeshedRegion, Field), `normal` (Field), `origin` (Field)

available outputs: `field` (Field)

**DPF Framework Reference:** [make_plane_levelset operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r2/operator-specifications/mesh/make_plane_levelset.md)

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

A coordinate field or meshed region providing 3D coordinates. If a meshed region is provided, its coordinate field is used.

**Type:** *LinkableInput*

### normal

An overall 3D, nonzero vector with one entity that defines the plane normal.

**Type:** *LinkableInput*

### origin

An overall 3D vector with one entity that defines a point on the plane.

**Type:** *LinkableInput*

## Outputs

### field

A field containing one signed-distance value for each coordinate entity. It uses the coordinate input's scoping, location, unit, and support.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
