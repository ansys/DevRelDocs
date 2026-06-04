---
uid: Ans.DataProcessing.operators.scoping.nodal_from_mesh
---

# *class* nodal_from_mesh(mesh: object = None, config: OperatorConfig = None)

Retrieves the nodal scoping from a mesh, containing all node IDs.

available inputs: `mesh` (MeshedRegion)

available outputs: `mesh_scoping` (Scoping)

**DPF Framework Reference:** [nodal_from_mesh operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/nodal_from_mesh.md)

**Parameters:**

* **mesh**
* **config**

**Example:**

```python
op = nodal_from_mesh()

op = nodal_from_mesh(mesh=my_mesh)
```

## Inputs

### mesh

Mesh from which to extract the nodal scoping

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

Scoping containing all node IDs in the mesh

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
