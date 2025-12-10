---
uid: Ans.DataProcessing.operators.mesh.change_cs
---

# change_cs Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Applies a transformation (rotation and displacement) matrix on a mesh or meshes container.

available inputs: `meshes` (MeshedRegion, MeshesContainer), `coordinate_system` (Field)

available outputs: `meshed_region` (MeshedRegion ,MeshesContainer)

## Example

```python
op = change_cs()

op = change_cs(meshes=my_meshes,coordinate_system=my_coordinate_system)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### meshes

**Type:** *LinkableInput*

### coordinate_system

3-3 rotation matrix + 3 translations (X, Y, Z)

**Type:** *LinkableInput*

## Outputs

### meshed_region

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
change_cs()
```

#### Constructor

```python
change_cs(meshes, coordinate_system, config)
```

**Parameters:**

- `meshes` (*object*)
- `coordinate_system` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
change_cs(config)
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
