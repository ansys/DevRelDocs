---
uid: Ans.DataProcessing.operators.geo.faces_area
---

# faces_area Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

## Summary

Compute the measure of the Faces (surface for 2D faces of a 3D model or length for 1D faces of a 2D model) using default shape functions, except for polygons.

available inputs: `mesh` (MeshedRegion), `mesh_scoping` (Scoping)

available outputs: `field` (Field)

## Example

```python
op = faces_area()

op = faces_area(mesh=my_mesh,mesh_scoping=my_mesh_scoping)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh

**Type:** *LinkableInput*

### mesh_scoping

If not provided, the measure of all Faces in the mesh is computed. If provided, the Scoping needs to have "Faces" location.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
faces_area()
```

#### Constructor

```python
faces_area(mesh, mesh_scoping, config)
```

**Parameters:**

- `mesh` (*object*)
- `mesh_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
faces_area(config)
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
