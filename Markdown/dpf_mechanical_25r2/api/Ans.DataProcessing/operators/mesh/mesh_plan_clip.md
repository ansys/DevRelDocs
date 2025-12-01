---
uid: Ans.DataProcessing.operators.mesh.mesh_plan_clip
---

# mesh_plan_clip Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Clips a volume mesh along a plane and keeps one side.

available inputs: `mesh_or_field` (MeshedRegion, Field), `normal` (Field), `origin` (Field)

available outputs: `field` (Field), `mesh` (MeshedRegion)

## Example

```python
op = mesh_plan_clip()

op = mesh_plan_clip(mesh_or_field=my_mesh_or_field,normal=my_normal,origin=my_origin)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh_or_field

**Type:** *LinkableInput*

### normal

An overall 3D vector that gives the normal direction of the plane.

**Type:** *LinkableInput*

### origin

An overall 3D vector that gives a point of the plane.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

### mesh

**Type:** *LinkableOutput*

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
