---
uid: Ans.DataProcessing.operators.geo.elements_volume
---

# elements_volume Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

## Summary

Compute the measure of the Elements (volume for 3D elements, surface for 2D elements or length for 1D elements) using default shape functions, except for polyhedrons.

available inputs: `mesh` (MeshedRegion), `mesh_scoping` (Scoping)

available outputs: `field` (Field)

## Example

```python
op = elements_volume()

op = elements_volume(mesh=my_mesh,mesh_scoping=my_mesh_scoping)
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

If not provided, the measure of all elements for the mesh is computed. If provided, the Scoping needs to have "Elemental" location.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
elements_volume()
```

#### Constructor

```python
elements_volume(mesh, mesh_scoping, config)
```

**Parameters:**

- `mesh` (*object*)
- `mesh_scoping` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elements_volume(config)
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
