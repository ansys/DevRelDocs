---
uid: Ans.DataProcessing.operators.mesh.mesh_clip
title: mesh_clip
---

# mesh_clip Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

mesh_clip()
mesh_clip(field: object, iso_value: object, closed_surface: object, mesh: object, slice_surfaces: object, config: OperatorConfig)
mesh_clip(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
mesh_clip()
```

#### Constructor

```python
mesh_clip(field, iso_value, closed_surface, mesh, slice_surfaces, config)
```

**Parameters:**

- `field` (*object*)
- `iso_value` (*object*)
- `closed_surface` (*object*)
- `mesh` (*object*)
- `slice_surfaces` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_clip(config)
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
