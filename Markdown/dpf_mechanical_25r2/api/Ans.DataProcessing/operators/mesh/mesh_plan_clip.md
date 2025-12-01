---
uid: Ans.DataProcessing.operators.mesh.mesh_plan_clip
---

# mesh_plan_clip Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Clips a volume mesh along a plane and keeps one side.   ///available inputs: mesh_or_field (MeshedRegion, Field), normal (Field), origin (Field)
            available outputs: field (Field), mesh (MeshedRegion)

mesh_plan_clip()
mesh_plan_clip(mesh_or_field: object, normal: object, origin: object, config: OperatorConfig)
mesh_plan_clip(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
mesh_plan_clip()
```

#### Constructor

```python
mesh_plan_clip(mesh_or_field, normal, origin, config)
```

**Parameters:**

- `mesh_or_field` (*object*)
- `normal` (*object*)
- `origin` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_plan_clip(config)
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
