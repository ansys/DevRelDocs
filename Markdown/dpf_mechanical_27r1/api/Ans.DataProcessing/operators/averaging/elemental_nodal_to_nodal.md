---
uid: Ans.DataProcessing.operators.averaging.elemental_nodal_to_nodal
---

# *class* elemental_nodal_to_nodal(field: object = None, mesh_scoping: object = None, should_average: object = None, extend_to_mid_nodes: object = None, extend_weights_to_mid_nodes: object = None, mesh: object = None, config: OperatorConfig = None)

Transforms an Elemental Nodal field into a Nodal field using an averaging process. The result is computed on a given node's scoping.

available inputs: `field` (Field, FieldsContainer), `mesh_scoping` (Scoping) (optional), `should_average` (bool) (optional), `extend_to_mid_nodes` (bool) (optional), `extend_weights_to_mid_nodes` (bool) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `field` (Field), `weight` (PropertyField)

**DPF Framework Reference:** [elemental_nodal_to_nodal operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_nodal_to_nodal.md)

**Parameters:**

* **field**
* **mesh_scoping**
* **should_average**
* **extend_to_mid_nodes**
* **extend_weights_to_mid_nodes**
* **mesh**
* **config**

**Example:**

```python
op = elemental_nodal_to_nodal()

op = elemental_nodal_to_nodal(field=my_field,mesh_scoping=my_mesh_scoping,should_average=my_should_average,extend_to_mid_nodes=my_extend_to_mid_nodes,extend_weights_to_mid_nodes=my_extend_weights_to_mid_nodes,mesh=my_mesh)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### mesh_scoping

average only on these entities

**Type:** *LinkableInput*

### should_average

Each nodal value is divided by the number of elements linked to this node (default is true for discrete quantities).

**Type:** *LinkableInput*

### extend_to_mid_nodes

Compute mid nodes (when available) by averaging the neighbour primary nodes.

**Type:** *LinkableInput*

### extend_weights_to_mid_nodes

Extends weights to mid nodes (when available). Default is false.

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

### weight

Provides the number of times it was found in the elemental nodal field, for each node. Can be used to average later.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
