---
uid: Ans.DataProcessing.operators.mesh.split_mesh
---

# split_mesh Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Split the input mesh into several meshes based on a given property (material property be default)

available inputs: `mesh_scoping` (Scoping) (optional), `mesh` (MeshedRegion), `property` (string)

available outputs: `meshes` (MeshesContainer)

## Example

```python
op = split_mesh()

op = split_mesh(mesh_scoping=my_mesh_scoping,mesh=my_mesh,property=my_property)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_FEMutils_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh_scoping

Scoping

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

### property

**Type:** *LinkableInput*

## Outputs

### meshes

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
split_mesh()
```

#### Constructor

```python
split_mesh(mesh_scoping, mesh, property, config)
```

**Parameters:**

- `mesh_scoping` (*object*)
- `mesh` (*object*)
- `property` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
split_mesh(config)
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
