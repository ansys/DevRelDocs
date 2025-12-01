---
uid: Ans.DataProcessing.operators.utility.change_shell_layers
---

# change_shell_layers Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Extract the requested shell layers from the input fields. If the fields contain only one layer and the permissive configuration input is set to true then it returns the input fields. If permissive configuration input is set to false, any change which should not be permitted won't be achieved and the corresponding field in the output will be empty. If permissive configuration input is set to true (default), carefully check the result.

available inputs: `fields_container` (FieldsContainer, Field), `e_shell_layer` (Int32), `mesh` (MeshedRegion, MeshesContainer) (optional), `merge` (bool) (optional)

available outputs: `fields_container` (FieldsContainer ,Field)

## Example

```python
op = change_shell_layers()

op = change_shell_layers(fields_container=my_fields_container,e_shell_layer=my_e_shell_layer,mesh=my_mesh,merge=my_merge)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### e_shell_layer

0: Top, 1: Bottom, 2: BottomTop, 3: Mid, 4: BottomTopMid.

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

## Constructors

#### Constructor

```python
change_shell_layers()
```

#### Constructor

```python
change_shell_layers(fields_container, e_shell_layer, mesh, merge, config)
```

**Parameters:**

- `fields_container` (*object*)
- `e_shell_layer` (*object*)
- `mesh` (*object*)
- `merge` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
change_shell_layers(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
