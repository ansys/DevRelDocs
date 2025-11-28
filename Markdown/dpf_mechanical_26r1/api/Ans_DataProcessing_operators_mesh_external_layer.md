---
uid: Ans.DataProcessing.operators.mesh.external_layer
title: external_layer
---

# external_layer Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Extracts the external layer (thick skin) of the mesh (3D elements) in a new meshed region.   ///available inputs: mesh (MeshedRegion)
            available outputs: mesh (MeshedRegion), nodes_mesh_scoping (Scoping), elements_mesh_scoping (Scoping)

external_layer()
external_layer(mesh: object, config: OperatorConfig)
external_layer(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
external_layer()
```

#### Constructor

```python
external_layer(mesh, config)
```

**Parameters:**

- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
external_layer(config)
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
