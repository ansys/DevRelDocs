---
uid: Ans.DataProcessing.operators.averaging.nodal_to_elemental
---

# *class* nodal_to_elemental(field: object = None, mesh_scoping: object = None, collapse_shell_layers: object = None, config: OperatorConfig = None)

Transforms a Nodal field to an Elemental field, The result is computed on a given element's scoping.

available inputs: `field` (Field, FieldsContainer), `mesh_scoping` (Scoping) (optional), `collapse_shell_layers` (bool) (optional)

available outputs: `field` (Field)

**DPF Framework Reference:** [nodal_to_elemental operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/nodal_to_elemental.md)

**Parameters:**

* **field**
* **mesh_scoping**
* **collapse_shell_layers**
* **config**

**Example:**

```python
op = nodal_to_elemental()

op = nodal_to_elemental(field=my_field,mesh_scoping=my_mesh_scoping,collapse_shell_layers=my_collapse_shell_layers)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### collapse_shell_layers

If true, the data across different shell layers is averaged as well (default is false).

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
