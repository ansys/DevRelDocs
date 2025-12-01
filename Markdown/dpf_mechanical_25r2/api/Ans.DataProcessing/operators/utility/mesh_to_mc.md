---
uid: Ans.DataProcessing.operators.utility.mesh_to_mc
---

# mesh_to_mc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

Creates a meshes container containing the mesh provided on pin 0.   ///available inputs: mesh (MeshedRegion, MeshesContainer), label (LabelSpace)
            available outputs: meshes_container (MeshesContainer)

mesh_to_mc()
mesh_to_mc(mesh: object, label: object, config: OperatorConfig)
mesh_to_mc(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
mesh_to_mc()
```

#### Constructor

```python
mesh_to_mc(mesh, label, config)
```

**Parameters:**

- `mesh` (*object*)
- `label` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_to_mc(config)
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
