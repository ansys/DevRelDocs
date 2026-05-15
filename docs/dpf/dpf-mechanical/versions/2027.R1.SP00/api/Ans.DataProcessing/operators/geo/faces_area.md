---
uid: Ans.DataProcessing.operators.geo.faces_area
---

# *class* faces_area(mesh: object = None, mesh_scoping: object = None, config: OperatorConfig = None)

Compute the measure of the Faces (surface for 2D faces of a 3D model or length for 1D faces of a 2D model) using default shape functions, except for polygons.

available inputs: `mesh` (MeshedRegion), `mesh_scoping` (Scoping)

available outputs: `field` (Field)

**DPF Framework Reference:** [faces_area operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/faces_area.md)

**Parameters:**

* **mesh**
* **mesh_scoping**
* **config**

**Example:**

```python
op = faces_area()

op = faces_area(mesh=my_mesh,mesh_scoping=my_mesh_scoping)
```

## Inputs

### mesh

**Type:** *LinkableInput*

### mesh_scoping

If not provided, the measure of all Faces in the mesh is computed. If provided, the Scoping needs to have "Faces" location.

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
