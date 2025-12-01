---
uid: Ans.DataProcessing.operators.averaging.nodal_to_elemental
---

# nodal_to_elemental Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms a Nodal field to an Elemental field, The result is computed on a given element's scoping.   ///available inputs: field (Field, FieldsContainer), mesh_scoping (Scoping) (optional), collapse_shell_layers (bool) (optional)
            available outputs: field (Field)

nodal_to_elemental()
nodal_to_elemental(field: object, mesh_scoping: object, collapse_shell_layers: object, config: OperatorConfig)
nodal_to_elemental(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
nodal_to_elemental()
```

#### Constructor

```python
nodal_to_elemental(field, mesh_scoping, collapse_shell_layers, config)
```

**Parameters:**

- `field` (*object*)
- `mesh_scoping` (*object*)
- `collapse_shell_layers` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
nodal_to_elemental(config)
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
