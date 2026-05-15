---
uid: Ans.DataProcessing.operators.averaging.elemental_nodal_to_nodal_elemental_fc
---

# *class* elemental_nodal_to_nodal_elemental_fc(fields_container: object = None, mesh_scoping: object = None, config: OperatorConfig = None)

Transforms Elemental Nodal fields to Nodal Elemental fields. The result is computed on a given node's scoping.

available inputs: `fields_container` (FieldsContainer), `mesh_scoping` (Scoping) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [elemental_nodal_to_nodal_elemental_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_nodal_to_nodal_elemental_fc.md)

**Parameters:**

* **fields_container**
* **mesh_scoping**
* **config**

**Example:**

```python
op = elemental_nodal_to_nodal_elemental_fc()

op = elemental_nodal_to_nodal_elemental_fc(fields_container=my_fields_container,mesh_scoping=my_mesh_scoping)
```

## Inputs

### fields_container

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
