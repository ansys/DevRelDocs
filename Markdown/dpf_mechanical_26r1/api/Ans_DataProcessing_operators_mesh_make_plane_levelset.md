---
uid: Ans.DataProcessing.operators.mesh.make_plane_levelset
---

# make_plane_levelset Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Computes the level set for a plane using coordinates.   ///available inputs: coordinates (MeshedRegion, Field), normal (Field), origin (Field)
            available outputs: field (Field)

make_plane_levelset()
make_plane_levelset(coordinates: object, normal: object, origin: object, config: OperatorConfig)
make_plane_levelset(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
make_plane_levelset()
```

#### Constructor

```python
make_plane_levelset(coordinates, normal, origin, config)
```

**Parameters:**

- `coordinates` (*object*)
- `normal` (*object*)
- `origin` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
make_plane_levelset(config)
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
