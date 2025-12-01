---
uid: Ans.DataProcessing.operators.mesh.points_from_coordinates
---

# points_from_coordinates Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Extract a mesh made of points elements. This mesh is made from input meshes coordinates on the input scopings.   ///available inputs: nodes_to_keep (Scoping, ScopingsContainer), mesh (MeshedRegion, MeshesContainer)
            available outputs: meshed_region (MeshedRegion)

points_from_coordinates()
points_from_coordinates(nodes_to_keep: object, mesh: object, config: OperatorConfig)
points_from_coordinates(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
points_from_coordinates()
```

#### Constructor

```python
points_from_coordinates(nodes_to_keep, mesh, config)
```

**Parameters:**

- `nodes_to_keep` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
points_from_coordinates(config)
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
