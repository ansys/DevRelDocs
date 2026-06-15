---
uid: Ans.DataProcessing.operators.mesh.mesh_to_tetra
---

# *class* mesh_to_tetra(mesh: object = None, config: OperatorConfig = None)

Converts 3D meshes of arbitrary 3D element types into a tetrahedral mesh, output at pin (0). Non 3D elements are ignored. Scopings providing the mapping from resulting nodes & elements to their original ID in the input mesh are provided, output pins (1) & (2) respectively.

available inputs: `mesh` (MeshedRegion)

available outputs: `mesh` (MeshedRegion), `node_mapping` (Scoping), `element_mapping` (Scoping)

**DPF Framework Reference:** [mesh_to_tetra operator specification](https://developer.ansys.com/docs/dpf-framework-2027.r1.sp00/operator-specifications/mesh/mesh_to_tetra.md)

**Parameters:**

* **mesh**
* **config**

**Example:**

```python
op = mesh_to_tetra()

op = mesh_to_tetra(mesh=my_mesh)
```

## Inputs

### mesh

Mesh with arbitrary element types.

**Type:** *LinkableInput*

## Outputs

### mesh

Tetrahedralized mesh.

**Type:** *LinkableOutput*

### node_mapping

Node mapping.

**Type:** *LinkableOutput*

### element_mapping

Element mapping.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
