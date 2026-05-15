---
uid: Ans.DataProcessing.operators.scoping.elemental_from_mesh
---

# *class* elemental_from_mesh(mesh: object = None, config: OperatorConfig = None)

Retrieves the elemental scoping from a mesh, containing all element IDs with elemental location.

available inputs: `mesh` (MeshedRegion)

available outputs: `mesh_scoping` (Scoping)

**DPF Framework Reference:** [elemental_from_mesh operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/elemental_from_mesh.md)

**Parameters:**

* **mesh**
* **config**

**Example:**

```python
op = elemental_from_mesh()

op = elemental_from_mesh(mesh=my_mesh)
```

## Inputs

### mesh

Mesh from which to extract the elemental scoping

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

Scoping containing all element IDs in the mesh with 'Elemental' location

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
