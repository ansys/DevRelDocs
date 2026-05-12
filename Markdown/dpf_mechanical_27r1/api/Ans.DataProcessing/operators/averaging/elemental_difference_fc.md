---
uid: Ans.DataProcessing.operators.averaging.elemental_difference_fc
---

# *class* elemental_difference_fc(fields_container: object = None, mesh: object = None, scoping: object = None, collapse_shell_layers: object = None, config: OperatorConfig = None)

Transforms an Elemental Nodal or Nodal field into an Elemental field. Each elemental value is the maximum difference between the unaveraged or averaged (depending on the input fields) computed result for all nodes in this element. The result is computed on a given element scoping. If the input fields are mixed shell/solid, and the shell's layers are not specified as collapsed, then the fields are split by element shape and the output fields container has an elshape label.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion, MeshesContainer) (optional), `scoping` (Scoping, ScopingsContainer) (optional), `collapse_shell_layers` (bool) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [elemental_difference_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_difference_fc.md)

**Parameters:**

* **fields_container**
* **mesh**
* **scoping**
* **collapse_shell_layers**
* **config**

**Example:**

```python
op = elemental_difference_fc()

op = elemental_difference_fc(fields_container=my_fields_container,mesh=my_mesh,scoping=my_scoping,collapse_shell_layers=my_collapse_shell_layers)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh

The mesh region in this pin is used to perform the averaging, used if there is no fields support.

**Type:** *LinkableInput*

### scoping

Average only on these elements. If it is scoping container, the label must correspond to the one of the fields container.

**Type:** *LinkableInput*

### collapse_shell_layers

If true, the data across different shell layers is averaged as well (default is false).

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
