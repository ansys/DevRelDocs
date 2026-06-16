---
uid: Ans.DataProcessing.operators.averaging.to_elemental_fc
---

# *class* to_elemental_fc(fields_container: object = None, mesh: object = None, mesh_scoping: object = None, smoothen_values: object = None, collapse_shell_layers: object = None, merge_solid_shell: object = None, shell_layer: object = None, config: OperatorConfig = None)

Transforms Input fields into Elemental fields using an averaging process. The result is computed on a given element's scoping.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion) (optional), `mesh_scoping` (Scoping) (optional), `smoothen_values` (bool) (optional), `collapse_shell_layers` (bool) (optional), `merge_solid_shell` (bool) (optional), `shell_layer` (Int32) (optional)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [to_elemental_fc operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/averaging/to_elemental_fc.md)

**Parameters:**

* **fields_container**
* **mesh**
* **mesh_scoping**
* **smoothen_values**
* **collapse_shell_layers**
* **merge_solid_shell**
* **shell_layer**
* **config**

**Example:**

```python
op = to_elemental_fc()

op = to_elemental_fc(fields_container=my_fields_container,mesh=my_mesh,mesh_scoping=my_mesh_scoping,smoothen_values=my_smoothen_values,collapse_shell_layers=my_collapse_shell_layers,merge_solid_shell=my_merge_solid_shell,shell_layer=my_shell_layer)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### smoothen_values

if it is set to true, Elemental Nodal fields are first averaged on nodes and then averaged on elements (default is false).

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
