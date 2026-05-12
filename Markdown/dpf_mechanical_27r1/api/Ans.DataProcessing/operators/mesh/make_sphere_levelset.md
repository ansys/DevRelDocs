---
uid: Ans.DataProcessing.operators.mesh.make_sphere_levelset
---

# *class* make_sphere_levelset(coordinates: object = None, origin: object = None, radius: object = None, config: OperatorConfig = None)

Computes the level set for a sphere using coordinates.

available inputs: `coordinates` (MeshedRegion, Field), `origin` (Field), `radius` (double)

available outputs: `field` (Field)

**DPF Framework Reference:** [make_sphere_levelset operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/make_sphere_levelset.md)

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

**Type:** *LinkableInput*

### origin

An overall 3d vector that gives a point of the plane.

**Type:** *LinkableInput*

### radius

Sphere radius.

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
