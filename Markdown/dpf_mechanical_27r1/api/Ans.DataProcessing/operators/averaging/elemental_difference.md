---
uid: Ans.DataProcessing.operators.averaging.elemental_difference
---

# *class* elemental_difference(field: object = None, mesh_scoping: object = None, mesh: object = None, through_layers: object = None, config: OperatorConfig = None)

Transforms an Elemental Nodal or Nodal field into an Elemental field. Each elemental value is the maximum difference between the computed result for all nodes in this element. The result is computed on a given element scoping.

available inputs: `field` (Field, FieldsContainer), `mesh_scoping` (Scoping) (optional), `mesh` (MeshedRegion) (optional), `through_layers` (bool) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [elemental_difference operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_difference.md)

**Parameters:**

* **field**
* **mesh_scoping**
* **mesh**
* **through_layers**
* **config**

**Example:**

```python
op = elemental_difference()

op = elemental_difference(field=my_field,mesh_scoping=my_mesh_scoping,mesh=my_mesh,through_layers=my_through_layers)
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

### through_layers

The maximum elemental difference is taken through the different shell layers if true (default is false).

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
