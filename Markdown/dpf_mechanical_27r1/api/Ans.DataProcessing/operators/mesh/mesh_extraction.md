---
uid: Ans.DataProcessing.operators.mesh.mesh_extraction
---

# *class* mesh_extraction(mesh: object = None, mesh_scoping: object = None, extension: object = None, config: OperatorConfig = None)

Take a mesh and a scoping (elemental or nodal) and create a new mesh that contains this selection only.

available inputs: `mesh` (MeshedRegion), `mesh_scoping` (Scoping), `extension` (Int32) (optional)

available outputs: `meshed_region` (MeshedRegion)

**DPF Framework Reference:** [mesh_extraction operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_extraction.md)

**Parameters:**

* **mesh**
* **mesh_scoping**
* **extension**
* **config**

**Example:**

```python
op = mesh_extraction()

op = mesh_extraction(mesh=my_mesh,mesh_scoping=my_mesh_scoping,extension=my_extension)
```

## Inputs

### mesh

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### extension

Number of extension layer

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
