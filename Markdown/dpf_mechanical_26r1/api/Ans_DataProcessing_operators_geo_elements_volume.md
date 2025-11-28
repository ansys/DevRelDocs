---
uid: Ans.DataProcessing.operators.geo.elements_volume
title: elements_volume
---

# elements_volume Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

Compute the measure of the Elements (volume for 3D elements, surface for 2D elements or length for 1D elements) using default shape functions, except for polyhedrons.   ///available inputs: mesh (MeshedRegion), mesh_scoping (Scoping)
            available outputs: field (Field)

elements_volume()
elements_volume(mesh: object, mesh_scoping: object, config: OperatorConfig)
elements_volume(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
elements_volume()
```

#### Constructor

```python
elements_volume(mesh, mesh_scoping, config)
```

**Parameters:**

- `mesh` (*object*)
- `mesh_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elements_volume(config)
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
