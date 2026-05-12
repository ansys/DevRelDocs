---
uid: Ans.DataProcessing.operators.mesh.mesh_to_graphics
---

# *class* mesh_to_graphics(mesh_scoping: object = None, node_normals: object = None, mesh: object = None, config: OperatorConfig = None)

Generate tessellation for input mesh

available inputs: `mesh_scoping` (Scoping) (optional), `node_normals` (bool) (optional), `mesh` (MeshedRegion)

available outputs: `nodes` (Field), `normals` (Field), `connectivity` (PropertyField)

**DPF Framework Reference:** [mesh_to_graphics operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_to_graphics.md)

**Parameters:**

* **mesh_scoping**
* **node_normals**
* **mesh**
* **config**

**Example:**

```python
op = mesh_to_graphics()

op = mesh_to_graphics(mesh_scoping=my_mesh_scoping,node_normals=my_node_normals,mesh=my_mesh)
```

## Inputs

### mesh_scoping

**Type:** *LinkableInput*

### node_normals

average element normals for node normals (default no, use element normals for node normals)

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### nodes

node coordinates

**Type:** *LinkableOutput*

### normals

node normals

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
