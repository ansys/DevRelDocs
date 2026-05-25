---
uid: Ans.DataProcessing.operators.mesh.external_layer
---

# *class* external_layer(mesh: object = None, config: OperatorConfig = None)

Extracts the external layer (thick skin) of the mesh (3D elements) in a new meshed region.

available inputs: `mesh` (MeshedRegion)

available outputs: `mesh` (MeshedRegion), `nodes_mesh_scoping` (Scoping), `elements_mesh_scoping` (Scoping)

**DPF Framework Reference:** [external_layer operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/external_layer.md)

**Parameters:**

* **mesh**
* **config**

**Example:**

```python
op = external_layer()

op = external_layer(mesh=my_mesh)
```

## Inputs

### mesh

**Type:** *LinkableInput*

## Outputs

### mesh

**Type:** *LinkableOutput*

### nodes_mesh_scoping

**Type:** *LinkableOutput*

### elements_mesh_scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
