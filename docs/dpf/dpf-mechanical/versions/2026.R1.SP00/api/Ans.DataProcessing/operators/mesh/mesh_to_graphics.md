---
uid: Ans.DataProcessing.operators.mesh.mesh_to_graphics
---

# mesh_to_graphics Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Generate tessellation for input mesh

available inputs: `mesh_scoping` (Scoping) (optional), `node_normals` (bool) (optional), `mesh` (MeshedRegion)

available outputs: `nodes` (Field), `normals` (Field), `connectivity` (PropertyField)

## Example

```python
op = mesh_to_graphics()

op = mesh_to_graphics(mesh_scoping=my_mesh_scoping,node_normals=my_node_normals,mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `meshOperatorsCore_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh_scoping

**Type:** *LinkableInput*

### node_normals

average element normals for node normals (default no, use element normals for node normals)

**Type:** *LinkableInput*

### mesh

**Type:** *LinkableInput*

## Outputs

### nodes

node coordinates

**Type:** *LinkableOutput*

### normals

node normals

**Type:** *LinkableOutput*

### connectivity

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
mesh_to_graphics()
```

#### Constructor

```python
mesh_to_graphics(mesh_scoping, node_normals, mesh, config)
```

**Parameters:**

- `mesh_scoping` (*object*)
- `node_normals` (*object*)
- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_to_graphics(config)
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
