---
uid: Ans.DataProcessing.operators.mesh.mesh_cut
title: mesh_cut
---

# mesh_cut Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Extracts a skin of the mesh in triangles in a new meshed region.   ///available inputs: field (Field), iso_value (double), closed_surface (Int32), mesh (MeshedRegion) (optional), slice_surfaces (bool)
            available outputs: mesh (MeshedRegion)

mesh_cut()
mesh_cut(field: object, iso_value: object, closed_surface: object, mesh: object, slice_surfaces: object, config: OperatorConfig)
mesh_cut(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
mesh_cut()
```

#### Constructor

```python
mesh_cut(field, iso_value, closed_surface, mesh, slice_surfaces, config)
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
mesh_cut(config)
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
