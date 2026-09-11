---
uid: Ans.DataProcessing.operators.averaging.elemental_nodal_to_nodal_elemental_fc
---

# *class* elemental_nodal_to_nodal_elemental_fc(fields_container: object = None, mesh_scoping: object = None, mesh: object = None, config: OperatorConfig = None)

Transforms Elemental Nodal fields to Nodal Elemental fields. The result is computed on a given node's scoping.

available inputs: `fields_container` (FieldsContainer), `mesh_scoping` (Scoping, ScopingsContainer) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [elemental_nodal_to_nodal_elemental_fc operator specification](https://developer-a.synopsys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_nodal_to_nodal_elemental_fc.md)

**Parameters:**

* **fields_container**
* **mesh_scoping**
* **mesh**
* **config**

**Example:**

```python
op = elemental_nodal_to_nodal_elemental_fc()

op = elemental_nodal_to_nodal_elemental_fc(fields_container=my_fields_container,mesh_scoping=my_mesh_scoping,mesh=my_mesh)
```

## Inputs

### fields_container

Elemental nodal fields to transform into nodal elemental fields.

**Type:** *LinkableInput*

### mesh_scoping

Optional nodal scoping filter. A scoping container selects the scoping matching each field label space; if no matching scoping exists, that field is processed without a node filter.

**Type:** *LinkableInput*

### mesh

Optional mesh region used for every field when connected. If omitted, each field's mesh support is used.

**Type:** *LinkableInput*

## Outputs

### fields_container

Nodal elemental fields with input fields container label spaces preserved.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
