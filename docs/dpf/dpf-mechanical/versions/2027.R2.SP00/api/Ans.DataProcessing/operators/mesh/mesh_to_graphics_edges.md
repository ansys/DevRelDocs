---
uid: Ans.DataProcessing.operators.mesh.mesh_to_graphics_edges
---

# *class* mesh_to_graphics_edges(mesh_scoping: object = None, include_mid_nodes: object = None, mesh: object = None, config: OperatorConfig = None)

Generates edge connectivity for triangular and quadrilateral shell or surface elements in a mesh.

The output contains input mesh node coordinates and edge connectivity for each element.

Connectivity stores each edge as a pair of node IDs.

For 6-node triangles and 8-node quadrilaterals, `include_mid_nodes` controls whether mid-side nodes are included.

It defaults to `true`; when `false`, only corner nodes are used.

The mesh can be restricted with `mesh_scoping` before connectivity is generated.

available inputs: `mesh_scoping` (Scoping) (optional), `include_mid_nodes` (bool) (optional), `mesh` (MeshedRegion)

available outputs: `nodes` (Field), `connectivity` (PropertyField)

**DPF Framework Reference:** [mesh_to_graphics_edges operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r2/operator-specifications/mesh/mesh_to_graphics_edges.md)

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

Optional scoping used to restrict the input mesh before edge connectivity is generated. If omitted, the full input mesh is used.

**Type:** *LinkableInput*

### include_mid_nodes

Optional flag controlling whether mid-side nodes are included for second-order elements. Defaults to true; when false, only corner nodes are used.

**Type:** *LinkableInput*

### mesh

Surface mesh containing triangular or quadrilateral shell or surface elements with 3, 4, 6, or 8 nodes.

**Type:** *LinkableInput*

## Outputs

### nodes

Node coordinates from the input mesh.

**Type:** *LinkableOutput*

### connectivity

Edge connectivity for each input element, stored as consecutive node-ID pairs. Second-order element connectivity includes mid-side nodes when include_mid_nodes is true.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
