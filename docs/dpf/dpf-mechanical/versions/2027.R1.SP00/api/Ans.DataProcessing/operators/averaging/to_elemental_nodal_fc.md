---
uid: Ans.DataProcessing.operators.averaging.to_elemental_nodal_fc
---

# *class* to_elemental_nodal_fc(fields_container: object = None, mesh_scoping: object = None, mesh: object = None, config: OperatorConfig = None)

Transforms fields into Elemental Nodal fields using an averaging process. The result is computed on a given element's scoping.

available inputs: `fields_container` (FieldsContainer), `mesh_scoping` (Scoping) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [to_elemental_nodal_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/to_elemental_nodal_fc.md)

**Parameters:**

* **fields_container**
* **mesh_scoping**
* **mesh**
* **config**

**Example:**

```python
op = to_elemental_nodal_fc()

op = to_elemental_nodal_fc(fields_container=my_fields_container,mesh_scoping=my_mesh_scoping,mesh=my_mesh)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### mesh

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
