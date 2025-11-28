---
uid: Ans.DataProcessing.operators.scoping.connectivity_ids
title: connectivity_ids
---

# connectivity_ids Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Returns the ordered node ids corresponding to the element ids scoping in input. For each element the node ids are its connectivity.   ///available inputs: mesh_scoping (Scoping), mesh (MeshedRegion) (optional), take_mid_nodes (bool) (optional)
            available outputs: mesh_scoping (Scoping), elemental_scoping (Scoping)

connectivity_ids()
connectivity_ids(mesh_scoping: object, mesh: object, take_mid_nodes: object, config: OperatorConfig)
connectivity_ids(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
connectivity_ids()
```

#### Constructor

```python
connectivity_ids(mesh_scoping, mesh, take_mid_nodes, config)
```

**Parameters:**

- `mesh_scoping` (*object*)
- `mesh` (*object*)
- `take_mid_nodes` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
connectivity_ids(config)
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
