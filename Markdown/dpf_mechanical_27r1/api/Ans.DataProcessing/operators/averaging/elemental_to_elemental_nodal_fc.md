---
uid: Ans.DataProcessing.operators.averaging.elemental_to_elemental_nodal_fc
---

# *class* elemental_to_elemental_nodal_fc(fields_container: object = None, mesh: object = None, mesh_scoping: object = None, config: OperatorConfig = None)

Transforms Elemental field to Elemental Nodal field.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion) (optional), `mesh_scoping` (Scoping) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [elemental_to_elemental_nodal_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_to_elemental_nodal_fc.md)

**Parameters:**

* **fields_container**
* **mesh**
* **mesh_scoping**
* **config**

**Example:**

```python
op = elemental_to_elemental_nodal_fc()

op = elemental_to_elemental_nodal_fc(fields_container=my_fields_container,mesh=my_mesh,mesh_scoping=my_mesh_scoping)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

### mesh_scoping

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
