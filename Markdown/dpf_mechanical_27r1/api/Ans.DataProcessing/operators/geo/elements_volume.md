---
uid: Ans.DataProcessing.operators.geo.elements_volume
---

# *class* elements_volume(mesh: object = None, mesh_scoping: object = None, config: OperatorConfig = None)

Compute the measure of the Elements (volume for 3D elements, surface for 2D elements or length for 1D elements) using default shape functions, except for polyhedrons.

available inputs: `mesh` (MeshedRegion), `mesh_scoping` (Scoping)

available outputs: `field` (Field)

**DPF Framework Reference:** [elements_volume operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/geo/elements_volume.md)

**Parameters:**

* **mesh**
* **mesh_scoping**
* **config**

**Example:**

```python
op = elements_volume()

op = elements_volume(mesh=my_mesh,mesh_scoping=my_mesh_scoping)
```

## Inputs

### mesh

**Type:** *LinkableInput*

### mesh_scoping

If not provided, the measure of all elements for the mesh is computed. If provided, the Scoping needs to have "Elemental" location.

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
