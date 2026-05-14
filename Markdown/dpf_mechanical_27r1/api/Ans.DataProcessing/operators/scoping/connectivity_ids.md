---
uid: Ans.DataProcessing.operators.scoping.connectivity_ids
---

# *class* connectivity_ids(mesh_scoping: object = None, mesh: object = None, take_mid_nodes: object = None, config: OperatorConfig = None)

Returns the ordered node ids corresponding to the element ids scoping in input. For each element the node ids are its connectivity.

available inputs: `mesh_scoping` (Scoping), `mesh` (MeshedRegion) (optional), `take_mid_nodes` (bool) (optional)

available outputs: `mesh_scoping` (Scoping), `elemental_scoping` (Scoping)

**DPF Framework Reference:** [connectivity_ids operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/scoping/connectivity_ids.md)

**Parameters:**

* **mesh_scoping**
* **mesh**
* **take_mid_nodes**
* **config**

**Example:**

```python
op = connectivity_ids()

op = connectivity_ids(mesh_scoping=my_mesh_scoping,mesh=my_mesh,take_mid_nodes=my_take_mid_nodes)
```

## Inputs

### mesh_scoping

Elemental scoping

**Type:** *LinkableInput*

### mesh

the support of the scoping is expected if there is no mesh in input

**Type:** *LinkableInput*

### take_mid_nodes

default is true

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

**Type:** *LinkableOutput*

### elemental_scoping

same as the input scoping but with ids duplicated to have the same size as nodal output scoping

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
