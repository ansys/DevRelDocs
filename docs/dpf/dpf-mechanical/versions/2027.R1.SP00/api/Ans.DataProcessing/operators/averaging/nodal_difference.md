---
uid: Ans.DataProcessing.operators.averaging.nodal_difference
---

# *class* nodal_difference(field: object = None, mesh_scoping: object = None, mesh: object = None, config: OperatorConfig = None)

Transforms an Elemental Nodal field into a Nodal field. Each nodal value is the maximum difference between the unaveraged computed result for all elements that share this particular node. The result is computed on a given node's scoping.

available inputs: `field` (Field, FieldsContainer), `mesh_scoping` (Scoping) (optional), `mesh` (MeshedRegion) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [nodal_difference operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/nodal_difference.md)

**Parameters:**

* **field**
* **mesh_scoping**
* **mesh**
* **config**

**Example:**

```python
op = nodal_difference()

op = nodal_difference(field=my_field,mesh_scoping=my_mesh_scoping,mesh=my_mesh)
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
