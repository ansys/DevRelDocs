---
uid: Ans.DataProcessing.operators.mesh.mesh_to_graphics_edges
title: mesh_to_graphics_edges
---

# mesh_to_graphics_edges Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Generate edges of surface elements for input mesh   ///available inputs: mesh_scoping (Scoping) (optional), include_mid_nodes (bool) (optional), mesh (MeshedRegion)
            available outputs: nodes (Field), connectivity (PropertyField)

mesh_to_graphics_edges()
mesh_to_graphics_edges(mesh_scoping: object, include_mid_nodes: object, mesh: object, config: OperatorConfig)
mesh_to_graphics_edges(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
mesh_to_graphics_edges()
```

#### Constructor

```python
mesh_to_graphics_edges(mesh_scoping, include_mid_nodes, mesh, config)
```

**Parameters:**

- `mesh_scoping` (*object*)
- `include_mid_nodes` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_to_graphics_edges(config)
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
