---
uid: Ans.DataProcessing.operators.averaging.nodal_to_elemental_nodal_fc
title: nodal_to_elemental_nodal_fc
---

# nodal_to_elemental_nodal_fc Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms Nodal fields_container to Elemental Nodal fields_container.   ///available inputs: fields_container (FieldsContainer), mesh (MeshedRegion) (optional), mesh_scoping (Scoping) (optional)
            available outputs: fields_container (FieldsContainer)

nodal_to_elemental_nodal_fc()
nodal_to_elemental_nodal_fc(fields_container: object, mesh: object, mesh_scoping: object, config: OperatorConfig)
nodal_to_elemental_nodal_fc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
nodal_to_elemental_nodal_fc()
```

#### Constructor

```python
nodal_to_elemental_nodal_fc(fields_container, mesh, mesh_scoping, config)
```

**Parameters:**

- `fields_container` (*object*)
- `mesh` (*object*)
- `mesh_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
nodal_to_elemental_nodal_fc(config)
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
