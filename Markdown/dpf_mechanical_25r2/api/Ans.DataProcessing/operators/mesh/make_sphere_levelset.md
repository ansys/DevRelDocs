---
uid: Ans.DataProcessing.operators.mesh.make_sphere_levelset
---

# make_sphere_levelset Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Computes the level set for a sphere using coordinates.

available inputs: `coordinates` (MeshedRegion, Field), `origin` (Field), `radius` (double)

available outputs: `field` (Field)

## Example

```python
op = make_sphere_levelset()

op = make_sphere_levelset(coordinates=my_coordinates,origin=my_origin,radius=my_radius)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### coordinates

**Type:** *LinkableInput*

### origin

An overall 3d vector that gives a point of the plane.

**Type:** *LinkableInput*

### radius

Sphere radius.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
make_sphere_levelset()
```

#### Constructor

```python
make_sphere_levelset(coordinates, origin, radius, config)
```

**Parameters:**

- `coordinates` (*object*)
- `origin` (*object*)
- `radius` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
make_sphere_levelset(config)
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
