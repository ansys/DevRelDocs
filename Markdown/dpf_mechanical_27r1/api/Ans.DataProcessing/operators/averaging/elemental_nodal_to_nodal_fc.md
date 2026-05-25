---
uid: Ans.DataProcessing.operators.averaging.elemental_nodal_to_nodal_fc
---

# *class* elemental_nodal_to_nodal_fc(fields_container: object = None, mesh: object = None, should_average: object = None, scoping: object = None, extend_to_mid_nodes: object = None, extend_weights_to_mid_nodes: object = None, merge_solid_shell: object = None, shell_layer: object = None, config: OperatorConfig = None)

Transforms Elemental Nodal fields into Nodal fields using an averaging process. The result is computed on a given node's scoping. If the input fields are mixed shell/solid, then the fields are split by element shape and the output fields container has an elshape label depending on the merge_solid_shell input.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion, MeshesContainer) (optional), `should_average` (bool) (optional), `scoping` (Scoping, ScopingsContainer) (optional), `extend_to_mid_nodes` (bool) (optional), `extend_weights_to_mid_nodes` (bool) (optional), `merge_solid_shell` (bool) (optional), `shell_layer` (Int32) (optional)

available outputs: `fields_container` (FieldsContainer), `weights` ()

**DPF Framework Reference:** [elemental_nodal_to_nodal_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/elemental_nodal_to_nodal_fc.md)

**Parameters:**

* **fields_container**
* **mesh**
* **should_average**
* **scoping**
* **extend_to_mid_nodes**
* **extend_weights_to_mid_nodes**
* **merge_solid_shell**
* **shell_layer**
* **config**

**Example:**

```python
op = elemental_nodal_to_nodal_fc()

op = elemental_nodal_to_nodal_fc(fields_container=my_fields_container,mesh=my_mesh,should_average=my_should_average,scoping=my_scoping,extend_to_mid_nodes=my_extend_to_mid_nodes,extend_weights_to_mid_nodes=my_extend_weights_to_mid_nodes,merge_solid_shell=my_merge_solid_shell,shell_layer=my_shell_layer)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh

The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.

**Type:** *LinkableInput*

### should_average

Each nodal value is divided by the number of elements linked to this node (default is true for discrete quantities).

**Type:** *LinkableInput*

### scoping

Average only on these nodes. If it is a scoping container, the label must correspond to the one of the fields containers.

**Type:** *LinkableInput*

### extend_to_mid_nodes

Compute mid nodes (when available) by averaging the neighbour primary nodes.

**Type:** *LinkableInput*

### extend_weights_to_mid_nodes

Extends weights to mid nodes (when available). Default is false.

**Type:** *LinkableInput*

### merge_solid_shell

For shell/solid mixed fields, group in the same field all solids and shells (false by default). If this pin is true, a shell_layer needs to be specified.

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
