---
uid: Ans.DataProcessing.operators.mesh.mesh_to_tetra
---

# *class* mesh_to_tetra(mesh: object = None, config: OperatorConfig = None)

mesh_to_tetra()
mesh_to_tetra(mesh: object, config: OperatorConfig)
mesh_to_tetra(config: OperatorConfig)


**DPF Framework Reference:** [mesh_to_tetra operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/mesh/mesh_to_tetra.md)

**Parameters:**

* **mesh**
* **config**

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
