---
uid: Ans.DataProcessing.operators.mesh.mesh_extraction
---

# *class* mesh_extraction(mesh: object = None, mesh_scoping: object = None, extension: object = None, config: OperatorConfig = None)

Extracts a submesh from an input mesh using an elemental or nodal scoping.

A positive extension expands the scoping through mesh connectivity before extraction, once per requested layer.

When extension is omitted or non-positive, the supplied scoping is used without expansion.

For an elemental scoping, output contains selected elements and their nodes.

For a nodal scoping, output contains selected nodes.

Mesh property fields and named selections are restricted to the extracted mesh.

available inputs: `mesh` (MeshedRegion), `mesh_scoping` (Scoping), `extension` (Int32) (optional)

available outputs: `meshed_region` (MeshedRegion)

**DPF Framework Reference:** [mesh_extraction operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r2/operator-specifications/mesh/mesh_extraction.md)

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

Input mesh from which to extract a submesh.

**Type:** *LinkableInput*

### mesh_scoping

Elemental or nodal scoping identifying the mesh entities to extract.

**Type:** *LinkableInput*

### extension

Optional mesh-connectivity expansion count. Defaults to 0; non-positive values do not expand the scoping.

**Type:** *LinkableInput*

## Outputs

### meshed_region

Extracted submesh containing selected elements and their nodes, or selected nodes for a nodal scoping.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
