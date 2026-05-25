---
uid: Ans.DataProcessing.operators.mesh.split_mesh
---

# *class* split_mesh(mesh_scoping: object = None, mesh: object = None, property: object = None, config: OperatorConfig = None)

Split the input mesh into several meshes based on a given property (material property be default)

available inputs: `mesh_scoping` (Scoping) (optional), `mesh` (MeshedRegion), `property` (string)

available outputs: `meshes` (MeshesContainer)

**DPF Framework Reference:** [split_mesh operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/split_mesh.md)

**Parameters:**

* **mesh_scoping**
* **mesh**
* **property**
* **config**

**Example:**

```python
op = split_mesh()

op = split_mesh(mesh_scoping=my_mesh_scoping,mesh=my_mesh,property=my_property)
```

## Inputs

### mesh_scoping

Scoping

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

### property

**Type:** *LinkableInput*

## Outputs

### meshes

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
