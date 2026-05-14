---
uid: Ans.DataProcessing.operators.averaging.elemental_to_elemental_nodal
---

# *class* elemental_to_elemental_nodal(field: object = None, mesh_scoping: object = None, mesh: object = None, config: OperatorConfig = None)

Transforms an Elemental field to an Elemental Nodal field.

available inputs: `field` (Field, FieldsContainer), `mesh_scoping` (Scoping) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [elemental_to_elemental_nodal operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_to_elemental_nodal.md)

**Parameters:**

* **field**
* **mesh_scoping**
* **mesh**
* **config**

**Example:**

```python
op = elemental_to_elemental_nodal()

op = elemental_to_elemental_nodal(field=my_field,mesh_scoping=my_mesh_scoping,mesh=my_mesh)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### mesh_scoping

average only on these entities

**Type:** *LinkableInput*

### mesh

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
