---
uid: Ans.DataProcessing.operators.mesh.tri_mesh_skin
---

# *class* tri_mesh_skin(mesh: object = None, include_surfaces: object = None, mesh_scoping: object = None, config: OperatorConfig = None)

Extracts a skin of the mesh in triangles in a new meshed region.

available inputs: `mesh` (MeshedRegion), `include_surfaces` (bool) (optional), `mesh_scoping` (Scoping) (optional)

available outputs: `mesh` (MeshedRegion), `nodes_mesh_scoping` (Scoping)

**DPF Framework Reference:** [tri_mesh_skin operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/tri_mesh_skin.md)

**Parameters:**

* **mesh**
* **include_surfaces**
* **mesh_scoping**
* **config**

**Example:**

```python
op = tri_mesh_skin()

op = tri_mesh_skin(mesh=my_mesh,include_surfaces=my_include_surfaces,mesh_scoping=my_mesh_scoping)
```

## Inputs

### mesh

**Type:** *LinkableInput*

### include_surfaces

True: meshing will also take into account shell and skin elements. False: meshing will ignore shell and skin elements. The default is false.

**Type:** *LinkableInput*

### mesh_scoping

Nodal scoping to restrict the skin extraction to a set of nodes. If provided, a skin element is added to the skin mesh if all its nodes are in the scoping.

**Type:** *LinkableInput*

## Outputs

### mesh

**Type:** *LinkableOutput*

### nodes_mesh_scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
