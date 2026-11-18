---
uid: Ans.DataProcessing.operators.mesh.mesh_to_graphics
---

# *class* mesh_to_graphics(mesh_scoping: object = None, node_normals: object = None, mesh: object = None, config: OperatorConfig = None)

Converts a shell mesh into graphics-ready coordinates, normals, and connectivity.

By default, each element receives separate nodes and element-node normals.

When `node_normals` is true, the output uses mesh nodes and connectivity with averaged normals at mesh nodes.

available inputs: `mesh_scoping` (Scoping) (optional), `node_normals` (bool) (optional), `mesh` (MeshedRegion)

available outputs: `nodes` (Field), `normals` (Field), `connectivity` (PropertyField)

**DPF Framework Reference:** [mesh_to_graphics operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r2/operator-specifications/mesh/mesh_to_graphics.md)

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

Optional scoping used to restrict the mesh before generating outputs. If omitted, the full input mesh is used.

**Type:** *LinkableInput*

### node_normals

Whether to use averaged normals at mesh nodes. Defaults to false; when false, normals are generated for each element node.

**Type:** *LinkableInput*

### mesh

Shell mesh to convert into graphics-ready coordinates, normals, and connectivity.

**Type:** *LinkableInput*

## Outputs

### nodes

Coordinates. By default, duplicated per element at elemental-nodal location; otherwise, nodal coordinates.

**Type:** *LinkableOutput*

### normals

Normals. By default, one normal per element node; with node_normals=true, averaged normals at mesh nodes.

**Type:** *LinkableOutput*

### connectivity

Connectivity for output elements; links generated nodes by default and original mesh nodes when node_normals is true.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
