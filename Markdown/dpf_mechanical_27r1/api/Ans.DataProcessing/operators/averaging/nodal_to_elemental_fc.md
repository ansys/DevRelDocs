---
uid: Ans.DataProcessing.operators.averaging.nodal_to_elemental_fc
---

# *class* nodal_to_elemental_fc(fields_container: object = None, mesh: object = None, scoping: object = None, collapse_shell_layers: object = None, merge_solid_shell: object = None, shell_layer: object = None, config: OperatorConfig = None)

Transforms Nodal fields into Elemental fields using an averaging process. The result is computed on a given element's scoping. If the input fields are mixed shell/solid, and the shell's layers are not specified as collapsed, then the fields are split by element shape and the output fields container has an elshape label.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion, MeshesContainer) (optional), `scoping` (Scoping, ScopingsContainer) (optional), `collapse_shell_layers` (bool) (optional), `merge_solid_shell` (bool) (optional), `shell_layer` (Int32) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [nodal_to_elemental_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/nodal_to_elemental_fc.md)

**Parameters:**

* **fields_container**
* **mesh**
* **scoping**
* **collapse_shell_layers**
* **merge_solid_shell**
* **shell_layer**
* **config**

**Example:**

```python
op = nodal_to_elemental_fc()

op = nodal_to_elemental_fc(fields_container=my_fields_container,mesh=my_mesh,scoping=my_scoping,collapse_shell_layers=my_collapse_shell_layers,merge_solid_shell=my_merge_solid_shell,shell_layer=my_shell_layer)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh

The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.

**Type:** *LinkableInput*

### scoping

Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers.

**Type:** *LinkableInput*

### collapse_shell_layers

If true, the data across different shell layers is averaged as well (default is false).

**Type:** *LinkableInput*

### merge_solid_shell

For shell/solid mixed fields, group in the same field all solids and shells (false by default). If this pin is true and collapse_shell_layers is false, a shell_layer needs to be specified.

**Type:** *LinkableInput*

### shell_layer

0: Top, 1: Bottom, 2: TopBottom, 3: Mid, 4: TopBottomMid. If merge_solid_shell is true, this pin needs to be specified to a value that extracts only one layer (Top, Bottom or Mid).

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
