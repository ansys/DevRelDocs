---
uid: Ans.DataProcessing.operators.scoping.elemental_from_mesh
---

# elemental_from_mesh Class

**Namespace:** [Ans.DataProcessing.operators.scoping](Ans_DataProcessing_operators_scoping.md)

## Summary

Retrieves the elemental scoping from a mesh, containing all element IDs with elemental location.

available inputs: `mesh` (MeshedRegion)

available outputs: `mesh_scoping` (Scoping)

## Example

```python
op = elemental_from_mesh()

op = elemental_from_mesh(mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.scoping` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh

Mesh from which to extract the elemental scoping

**Type:** *LinkableInput*

## Outputs

### mesh_scoping

Scoping containing all element IDs in the mesh with 'Elemental' location

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
elemental_from_mesh()
```

#### Constructor

```python
elemental_from_mesh(mesh, config)
```

**Parameters:**

- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
elemental_from_mesh(config)
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
