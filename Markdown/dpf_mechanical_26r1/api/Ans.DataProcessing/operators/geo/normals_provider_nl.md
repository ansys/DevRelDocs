---
uid: Ans.DataProcessing.operators.geo.normals_provider_nl
---

# normals_provider_nl Class

**Namespace:** [Ans.DataProcessing.operators.geo](Ans_DataProcessing_operators_geo.md)

## Summary

Computes the normals on nodes/faces/elements based on integration points (more accurate for non-linear elements) on a skin mesh.

available inputs: `mesh` (MeshedRegion), `mesh_scoping` (Scoping) (optional), `requested_location` (string) (optional)

available outputs: `field` (Field)

## Example

```python
op = normals_provider_nl()

op = normals_provider_nl(mesh=my_mesh,mesh_scoping=my_mesh_scoping,requested_location=my_requested_location)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.geo` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh

Skin, face, or shell mesh region.

**Type:** *LinkableInput*

### mesh_scoping

Elemental, ElementalNodal, or Nodal scoping. Location derived from this.

**Type:** *LinkableInput*

### requested_location

If no scoping, specifies location. If scoping is Elemental or ElementalNodal this overrides scoping. Default is Elemental.

**Type:** *LinkableInput*

## Outputs

### field

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
normals_provider_nl()
```

#### Constructor

```python
normals_provider_nl(mesh, mesh_scoping, requested_location, config)
```

**Parameters:**

- `mesh` (*object*)
- `mesh_scoping` (*object*)
- `requested_location` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
normals_provider_nl(config)
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
