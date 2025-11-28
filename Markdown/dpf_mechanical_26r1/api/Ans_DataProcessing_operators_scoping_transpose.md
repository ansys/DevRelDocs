---
uid: Ans.DataProcessing.operators.scoping.transpose
title: transpose
---

# transpose Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

Transposes the input scoping or scopings container (Elemental/Faces --> Nodal, or Nodal ---> Elemental/Faces), based on the input mesh region.   ///available inputs: mesh_scoping (Scoping, ScopingsContainer), meshed_region (MeshedRegion, MeshesContainer), inclusive (Int32) (optional), requested_location (string) (optional)
            available outputs: mesh_scoping (Scoping ,ScopingsContainer)

transpose()
transpose(mesh_scoping: object, meshed_region: object, inclusive: object, requested_location: object, config: OperatorConfig)
transpose(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
transpose()
```

#### Constructor

```python
transpose(mesh_scoping, meshed_region, inclusive, requested_location, config)
```

**Parameters:**

- `mesh_scoping` (*object*)
- `meshed_region` (*object*)
- `inclusive` (*object*)
- `requested_location` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
transpose(config)
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
