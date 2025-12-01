---
uid: Ans.DataProcessing.operators.mesh.mesh_extraction
---

# mesh_extraction Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Take a mesh and a scoping (elemental or nodal) and create a new mesh that contains this selection only.   ///available inputs: mesh (MeshedRegion), mesh_scoping (Scoping), extension (Int32) (optional)
            available outputs: meshed_region (MeshedRegion)

mesh_extraction()
mesh_extraction(mesh: object, mesh_scoping: object, extension: object, config: OperatorConfig)
mesh_extraction(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
mesh_extraction()
```

#### Constructor

```python
mesh_extraction(mesh, mesh_scoping, extension, config)
```

**Parameters:**

- `mesh` (*object*)
- `mesh_scoping` (*object*)
- `extension` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_extraction(config)
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
