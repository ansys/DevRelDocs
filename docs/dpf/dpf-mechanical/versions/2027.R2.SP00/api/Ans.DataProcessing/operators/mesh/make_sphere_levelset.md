---
uid: Ans.DataProcessing.operators.mesh.make_sphere_levelset
---

# *class* make_sphere_levelset(coordinates: object = None, origin: object = None, radius: object = None, config: OperatorConfig = None)

Computes a scalar value for each coordinate relative to a sphere.

For coordinate $\mathbf{x}$, sphere center $\mathbf{x}_0$, and radius $r$, the value is

$\sqrt{\|\mathbf{x}-\mathbf{x}_0\|^2-r^2}$.

Values are zero on the sphere surface. For coordinates inside the sphere, the square-root argument is negative

and the output value is NaN. The coordinates input accepts either a coordinate field or a meshed region; for a

meshed region, its coordinate field is used.

available inputs: `coordinates` (MeshedRegion, Field), `origin` (Field), `radius` (double)

available outputs: `field` (Field)

**DPF Framework Reference:** [make_sphere_levelset operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r2/operator-specifications/mesh/make_sphere_levelset.md)

**Parameters:**

* **coordinates**
* **origin**
* **radius**
* **config**

**Example:**

```python
op = make_sphere_levelset()

op = make_sphere_levelset(coordinates=my_coordinates,origin=my_origin,radius=my_radius)
```

## Inputs

### coordinates

A coordinate field or meshed region providing 3D coordinates. If a meshed region is provided, its coordinate field is used.

**Type:** *LinkableInput*

### origin

An overall 3-component vector with one entity defining the sphere center.

**Type:** *LinkableInput*

### radius

A scalar sphere radius. The implementation squares this value, so its sign does not affect the result.

**Type:** *LinkableInput*

## Outputs

### field

A scalar field with one value for each coordinate entity. It uses the coordinate input's scoping and unit and is supported by the coordinate field or mesh.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
