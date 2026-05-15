---
uid: Ans.DataProcessing.operators.mesh.node_coordinates
---

# node_coordinates Class

**Namespace:** [Ans.DataProcessing.operators.mesh](Ans_DataProcessing_operators_mesh.md)

## Summary

Returns the node coordinates of the mesh(es) in input.

available inputs: `mesh` (MeshedRegion, MeshesContainer)

available outputs: `coordinates` (Field ,FieldsContainer)

## Example

```python
op = node_coordinates()

op = node_coordinates(mesh=my_mesh)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.mesh` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh

**Type:** *LinkableInput*

## Outputs

### coordinates

if the input is a meshed region, a field of coordinates is the output, else if the input is a  meshes container, a fields container (one field by mesh) is the output

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
node_coordinates()
```

#### Constructor

```python
node_coordinates(mesh, config)
```

**Parameters:**

- `mesh` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
node_coordinates(config)
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
