---
uid: Ans.DataProcessing.operators.averaging.to_elemental_fc
title: to_elemental_fc
---

# to_elemental_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms Input fields into Elemental fields using an averaging process. The result is computed on a given element's scoping.   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion) (optional), mesh_scoping (Scoping) (optional), smoothen_values (bool) (optional), collapse_shell_layers (bool) (optional), merge_solid_shell (bool) (optional), shell_layer (Int32) (optional)
            available outputs: fields_container (FieldsContainer)

to_elemental_fc()
to_elemental_fc(fields_container: object, mesh: object, mesh_scoping: object, smoothen_values: object, collapse_shell_layers: object, merge_solid_shell: object, shell_layer: object, config: OperatorConfig)
to_elemental_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
to_elemental_fc()
```

#### Constructor

```python
to_elemental_fc(fields_container, mesh, mesh_scoping, smoothen_values, collapse_shell_layers, merge_solid_shell, shell_layer, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `mesh_scoping` (*object*)
- `smoothen_values` (*object*)
- `collapse_shell_layers` (*object*)
- `merge_solid_shell` (*object*)
- `shell_layer` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
to_elemental_fc(config)
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
