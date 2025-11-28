---
uid: Ans.DataProcessing.operators.averaging.elemental_to_elemental_nodal
title: elemental_to_elemental_nodal
---

# elemental_to_elemental_nodal Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms an Elemental field to an Elemental Nodal field.   ///available inputs: field (Field, FieldsContainer), mesh_scoping (Scoping) (optional), mesh (MeshedRegion) (optional)
            available outputs: field (Field)

elemental_to_elemental_nodal()
elemental_to_elemental_nodal(field: object, mesh_scoping: object, mesh: object, config: OperatorConfig)
elemental_to_elemental_nodal(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
elemental_to_elemental_nodal()
```

#### Constructor

```python
elemental_to_elemental_nodal(field, mesh_scoping, mesh, config)
```

**Parameters:**

- `field` (*object*)
- `mesh_scoping` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_to_elemental_nodal(config)
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
