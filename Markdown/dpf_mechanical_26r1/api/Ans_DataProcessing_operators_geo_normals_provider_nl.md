---
uid: Ans.DataProcessing.operators.geo.normals_provider_nl
---

# normals_provider_nl Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

Computes the normals on nodes/faces/elements based on integration points (more accurate for non-linear elements) on a skin mesh.   ///available inputs: mesh (MeshedRegion), mesh_scoping (Scoping) (optional), requested_location (string) (optional)
            available outputs: field (Field)

normals_provider_nl()
normals_provider_nl(mesh: object, mesh_scoping: object, requested_location: object, config: OperatorConfig)
normals_provider_nl(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
normals_provider_nl()
```

#### Constructor

```python
normals_provider_nl(mesh, mesh_scoping, requested_location, config)
```

**Parameters:**

- `mesh` (*object*)
- `mesh_scoping` (*object*)
- `requested_location` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
normals_provider_nl(config)
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
