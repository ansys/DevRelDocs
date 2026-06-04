---
uid: Ans.DataProcessing.operators.mesh.mesh_to_graphics_edges
---

# *class* mesh_to_graphics_edges(mesh_scoping: object = None, include_mid_nodes: object = None, mesh: object = None, config: OperatorConfig = None)

Generate edges of surface elements for input mesh

available inputs: `mesh_scoping` (Scoping) (optional), `include_mid_nodes` (bool) (optional), `mesh` (MeshedRegion)

available outputs: `nodes` (Field), `connectivity` (PropertyField)

**DPF Framework Reference:** [mesh_to_graphics_edges operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_to_graphics_edges.md)

**Parameters:**

* **mesh_scoping**
* **include_mid_nodes**
* **mesh**
* **config**

**Example:**

```python
op = mesh_to_graphics_edges()

op = mesh_to_graphics_edges(mesh_scoping=my_mesh_scoping,include_mid_nodes=my_include_mid_nodes,mesh=my_mesh)
```

## Inputs

### mesh_scoping

**Type:** *LinkableInput*

### include_mid_nodes

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### nodes

node coordinates

**Type:** *LinkableOutput*

### connectivity

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
