---
uid: Ans.DataProcessing.operators.averaging.to_nodal_fc
---

# to_nodal_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

## Summary

Transforms fields into Nodal fields using an averaging process. The result is computed on a given node's scoping.

available inputs: `fields_container` (FieldsContainer), `mesh` (MeshedRegion) (optional), `mesh_scoping` (Scoping) (optional), `merge_solid_shell` (bool) (optional), `shell_layer` (Int32) (optional)

available outputs: `fields_container` (FieldsContainer)

## Example

```python
op = to_nodal_fc()

op = to_nodal_fc(fields_container=my_fields_container,mesh=my_mesh,mesh_scoping=my_mesh_scoping,merge_solid_shell=my_merge_solid_shell,shell_layer=my_shell_layer)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### fields_container

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

### mesh_scoping

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

## Constructors

#### Constructor

```python
to_nodal_fc()
```

#### Constructor

```python
to_nodal_fc(fields_container, mesh, mesh_scoping, merge_solid_shell, shell_layer, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `mesh_scoping` (*object*)
- `merge_solid_shell` (*object*)
- `shell_layer` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
to_nodal_fc(config)
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
