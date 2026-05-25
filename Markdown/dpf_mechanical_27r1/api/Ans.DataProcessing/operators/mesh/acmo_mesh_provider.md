---
uid: Ans.DataProcessing.operators.mesh.acmo_mesh_provider
---

# *class* acmo_mesh_provider(assembly_mesh: object = None, config: OperatorConfig = None)

Converts an Assembly Mesh into a DPF Meshes container

available inputs: `assembly_mesh` (AnsDispatchHolder), `unit` (string) (optional)

available outputs: `meshes_container` (MeshesContainer)

**DPF Framework Reference:** [acmo_mesh_provider operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/acmo_mesh_provider.md)

**Parameters:**

* **assembly_mesh**
* **config**

**Example:**

```python
op = acmo_mesh_provider()

op = acmo_mesh_provider(assembly_mesh=my_assembly_mesh)
```

## Inputs

### assembly_mesh

**Type:** *LinkableInput*

### unit

**Type:** *LinkableInput*

## Outputs

### meshes_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
