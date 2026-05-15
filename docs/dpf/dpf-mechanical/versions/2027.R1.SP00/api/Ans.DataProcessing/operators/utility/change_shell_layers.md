---
uid: Ans.DataProcessing.operators.utility.change_shell_layers
---

# *class* change_shell_layers(fields_container: object = None, e_shell_layer: object = None, mesh: object = None, merge: object = None, config: OperatorConfig = None)

Extract the requested shell layers from the input fields. If the fields contain only one layer and the permissive configuration input is set to true then it returns the input fields. If permissive configuration input is set to false, any change which should not be permitted won't be achieved and the corresponding field in the output will be empty. If permissive configuration input is set to true (default), carefully check the result.

available inputs: `fields_container` (FieldsContainer, Field), `e_shell_layer` (Int32), `mesh` (MeshedRegion, MeshesContainer) (optional), `merge` (bool) (optional)

available outputs: `fields_container` (FieldsContainer ,Field)

**DPF Framework Reference:** [change_shell_layers operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/change_shell_layers.md)

**Parameters:**

* **fields_container**
* **e_shell_layer**
* **mesh**
* **merge**
* **config**

**Example:**

```python
op = change_shell_layers()

op = change_shell_layers(fields_container=my_fields_container,e_shell_layer=my_e_shell_layer,mesh=my_mesh,merge=my_merge)
```

## Inputs

### fields_container

**Type:** *LinkableInput*

### e_shell_layer

0: Top, 1: Bottom, 2: TopBottom, 3: Mid, 4: TopBottomMid.

**Type:** *LinkableInput*

### mesh

Mesh support of the input fields_container, in case it does not have one defined. If the fields_container contains mixed shell/solid results, the mesh is required (either by connecting this pin or in the support).

**Type:** *LinkableInput*

### merge

For fields with mixed shell layers (solid/shell elements with heterogeneous shell layers), group all of them in the same field (false by default).

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
