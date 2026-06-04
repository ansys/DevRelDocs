---
uid: Ans.DataProcessing.operators.averaging.elemental_nodal_to_nodal_elemental
---

# *class* elemental_nodal_to_nodal_elemental(field: object = None, mesh_scoping: object = None, config: OperatorConfig = None)

Transforms an Elemental Nodal field to Nodal Elemental. The result is computed on a given node's scoping.

available inputs: `field` (Field, FieldsContainer), `mesh_scoping` (Scoping) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [elemental_nodal_to_nodal_elemental operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_nodal_to_nodal_elemental.md)

**Parameters:**

* **field**
* **mesh_scoping**
* **config**

**Example:**

```python
op = elemental_nodal_to_nodal_elemental()

op = elemental_nodal_to_nodal_elemental(field=my_field,mesh_scoping=my_mesh_scoping)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
