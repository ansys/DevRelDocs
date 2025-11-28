---
uid: Ans.DataProcessing.operators.averaging.nodal_to_elemental_fc
title: nodal_to_elemental_fc
---

# nodal_to_elemental_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms Nodal fields into Elemental fields using an averaging process. The result is computed on a given element's scoping. If the input fields are mixed shell/solid, and the shell's layers are not specified as collapsed, then the fields are split by element shape and the output fields container has an elshape label.   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion, MeshesContainer) (optional), scoping (Scoping, ScopingsContainer) (optional), collapse_shell_layers (bool) (optional), merge_solid_shell (bool) (optional), shell_layer (Int32) (optional)
            available outputs: fields_container (FieldsContainer)

nodal_to_elemental_fc()
nodal_to_elemental_fc(fields_container: object, mesh: object, scoping: object, collapse_shell_layers: object, merge_solid_shell: object, shell_layer: object, config: OperatorConfig)
nodal_to_elemental_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
nodal_to_elemental_fc()
```

#### Constructor

```python
nodal_to_elemental_fc(fields_container, mesh, scoping, collapse_shell_layers, merge_solid_shell, shell_layer, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `scoping` (*object*)
- `collapse_shell_layers` (*object*)
- `merge_solid_shell` (*object*)
- `shell_layer` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
nodal_to_elemental_fc(config)
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
