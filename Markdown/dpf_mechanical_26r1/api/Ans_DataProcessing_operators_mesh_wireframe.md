---
uid: Ans.DataProcessing.operators.mesh.wireframe
title: wireframe
---

# wireframe Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

Take a mesh and extracts its sharp edges, using pin 1 value as a threshold angle.   ///available inputs: mesh (MeshedRegion), threshold (double)
            available outputs: wireframe (MeshedRegion)

wireframe()
wireframe(mesh: object, threshold: object, config: OperatorConfig)
wireframe(config: OperatorConfig)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Constructors

#### Constructor

```python
wireframe()
```

#### Constructor

```python
wireframe(mesh, threshold, config)
```

**Parameters:**

- `mesh` (*object*)
- `threshold` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
wireframe(config)
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
