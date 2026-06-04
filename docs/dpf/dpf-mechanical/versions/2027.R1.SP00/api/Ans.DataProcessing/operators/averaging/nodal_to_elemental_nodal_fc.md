---
uid: Ans.DataProcessing.operators.averaging.nodal_to_elemental_nodal_fc
---

# *class* nodal_to_elemental_nodal_fc(fields_container: object = None, mesh: object = None, mesh_scoping: object = None, extend_to_mid_nodes: object = None, config: OperatorConfig = None)

Transforms Nodal fields_container to Elemental Nodal fields_container.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion) (optional), `mesh_scoping` (Scoping) (optional), `extend_to_mid_nodes` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [nodal_to_elemental_nodal_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/nodal_to_elemental_nodal_fc.md)

**Parameters:**

* **fields_container**
* **mesh**
* **mesh_scoping**
* **extend_to_mid_nodes**
* **config**

**Example:**

```python
op = nodal_to_elemental_nodal_fc()

op = nodal_to_elemental_nodal_fc(fields_container=my_fields_container,mesh=my_mesh,mesh_scoping=my_mesh_scoping,extend_to_mid_nodes=my_extend_to_mid_nodes)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### extend_to_mid_nodes

Copy values from midside nodes to ElementalNodal field. Default: false

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
