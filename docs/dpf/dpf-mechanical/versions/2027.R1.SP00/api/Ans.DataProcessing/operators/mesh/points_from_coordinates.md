---
uid: Ans.DataProcessing.operators.mesh.points_from_coordinates
---

# *class* points_from_coordinates(nodes_to_keep: object = None, mesh: object = None, config: OperatorConfig = None)

Extract a mesh made of points elements. This mesh is made from input meshes coordinates on the input scopings.

available inputs: `nodes_to_keep` (Scoping, ScopingsContainer), `mesh` (MeshedRegion, MeshesContainer)

available outputs: `meshed_region` (MeshedRegion)

**DPF Framework Reference:** [points_from_coordinates operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/points_from_coordinates.md)

**Parameters:**

* **nodes_to_keep**
* **mesh**
* **config**

**Example:**

```python
op = points_from_coordinates()

op = points_from_coordinates(nodes_to_keep=my_nodes_to_keep,mesh=my_mesh)
```

## Inputs

### nodes_to_keep

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### meshed_region

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
