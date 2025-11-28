---
uid: Ans.DataProcessing.operators.averaging.elemental_nodal_to_nodal_elemental
---

# elemental_nodal_to_nodal_elemental Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms an Elemental Nodal field to Nodal Elemental. The result is computed on a given node's scoping.   ///available inputs: field (Field, FieldsContainer), mesh_scoping (Scoping) (optional)
            available outputs: field (Field)

elemental_nodal_to_nodal_elemental()
elemental_nodal_to_nodal_elemental(field: object, mesh_scoping: object, config: OperatorConfig)
elemental_nodal_to_nodal_elemental(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
elemental_nodal_to_nodal_elemental()
```

#### Constructor

```python
elemental_nodal_to_nodal_elemental(field, mesh_scoping, config)
```

**Parameters:**

- `field` (*object*)
- `mesh_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_nodal_to_nodal_elemental(config)
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
