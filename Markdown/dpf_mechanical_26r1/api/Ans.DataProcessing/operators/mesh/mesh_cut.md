---
uid: Ans.DataProcessing.operators.mesh.mesh_cut
---

# mesh_cut Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Extracts a skin of the mesh in triangles in a new meshed region.

available inputs: `field` (Field), `iso_value` (double), `closed_surface` (Int32), `mesh` (MeshedRegion) (optional), `slice_surfaces` (bool)

available outputs: `mesh` (MeshedRegion)

## Example

```python
op = mesh_cut()

op = mesh_cut(field=my_field,iso_value=my_iso_value,closed_surface=my_closed_surface,mesh=my_mesh,slice_surfaces=my_slice_surfaces)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### field

Field containing the values for the iso-surface computation. The mesh can be retrieved from this field's support or through pin 2.

**Type:** *LinkableInput*

### iso_value

iso value

**Type:** *LinkableInput*

### closed_surface

1: closed surface, 0: iso surface.

**Type:** *LinkableInput*

### mesh

Mesh to compute the iso-surface from. Used when not given through the support of the field in pin 0.

**Type:** *LinkableInput*

### slice_surfaces

True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true.

**Type:** *LinkableInput*

## Outputs

### mesh

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
mesh_cut()
```

#### Constructor

```python
mesh_cut(field, iso_value, closed_surface, mesh, slice_surfaces, config)
```

**Parameters:**

- `field` (*object*)
- `iso_value` (*object*)
- `closed_surface` (*object*)
- `mesh` (*object*)
- `slice_surfaces` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_cut(config)
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
