---
uid: Ans.DataProcessing.operators.averaging.to_nodal
---

# to_nodal Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms a field into a Nodal field using an averaging process. The result is computed on a given node's scoping.   ///available inputs: field (Field, FieldsContainer), mesh_scoping (Scoping) (optional), merge_solid_shell (bool) (optional), shell_layer (Int32) (optional)
            available outputs: field (Field)

to_nodal()
to_nodal(field: object, mesh_scoping: object, merge_solid_shell: object, shell_layer: object, config: OperatorConfig)
to_nodal(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
to_nodal()
```

#### Constructor

```python
to_nodal(field, mesh_scoping, merge_solid_shell, shell_layer, config)
```

**Parameters:**

- `field` (*object*)
- `mesh_scoping` (*object*)
- `merge_solid_shell` (*object*)
- `shell_layer` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
to_nodal(config)
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
