---
uid: Ans.DataProcessing.operators.averaging.elemental_nodal_to_nodal
title: elemental_nodal_to_nodal
---

# elemental_nodal_to_nodal Class

**Namespace:** [Ans.DataProcessing.operators.averaging](Ans_DataProcessing_operators_averaging.md)

Transforms an Elemental Nodal field into a Nodal field using an averaging process. The result is computed on a given node's scoping.   ///available inputs: field (Field, FieldsContainer), mesh_scoping (Scoping) (optional), should_average (bool) (optional), extend_to_mid_nodes (bool) (optional), extend_weights_to_mid_nodes (bool) (optional), mesh (MeshedRegion) (optional)
            available outputs: field (Field), weight (PropertyField)

elemental_nodal_to_nodal()
elemental_nodal_to_nodal(field: object, mesh_scoping: object, should_average: object, extend_to_mid_nodes: object, extend_weights_to_mid_nodes: object, mesh: object, config: OperatorConfig)
elemental_nodal_to_nodal(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.averaging` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
elemental_nodal_to_nodal()
```

#### Constructor

```python
elemental_nodal_to_nodal(field, mesh_scoping, should_average, extend_to_mid_nodes, extend_weights_to_mid_nodes, mesh, config)
```

**Parameters:**

- `field` (*object*)
- `mesh_scoping` (*object*)
- `should_average` (*object*)
- `extend_to_mid_nodes` (*object*)
- `extend_weights_to_mid_nodes` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_nodal_to_nodal(config)
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
