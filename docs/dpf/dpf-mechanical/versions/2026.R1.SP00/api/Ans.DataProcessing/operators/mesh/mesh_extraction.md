---
uid: Ans.DataProcessing.operators.mesh.mesh_extraction
---

# mesh_extraction Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Take a mesh and a scoping (elemental or nodal) and create a new mesh that contains this selection only.

available inputs: `mesh` (MeshedRegion), `mesh_scoping` (Scoping), `extension` (Int32) (optional)

available outputs: `meshed_region` (MeshedRegion)

## Example

```python
op = mesh_extraction()

op = mesh_extraction(mesh=my_mesh,mesh_scoping=my_mesh_scoping,extension=my_extension)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh

**Type:** *LinkableInput*

### mesh_scoping

**Type:** *LinkableInput*

### extension

Number of extension layer

**Type:** *LinkableInput*

## Outputs

### meshed_region

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
mesh_extraction()
```

#### Constructor

```python
mesh_extraction(mesh, mesh_scoping, extension, config)
```

**Parameters:**

- `mesh` (*object*)
- `mesh_scoping` (*object*)
- `extension` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_extraction(config)
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
