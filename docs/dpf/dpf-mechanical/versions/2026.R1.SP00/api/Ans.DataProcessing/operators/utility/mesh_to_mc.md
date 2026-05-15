---
uid: Ans.DataProcessing.operators.utility.mesh_to_mc
---

# mesh_to_mc Class

**Namespace:** [Ans.DataProcessing.operators.utility](Ans_DataProcessing_operators_utility.md)

## Summary

Creates a meshes container containing the mesh provided on pin 0.

available inputs: `mesh` (MeshedRegion, MeshesContainer), `label` (LabelSpace)

available outputs: `meshes_container` (MeshesContainer)

## Example

```python
op = mesh_to_mc()

op = mesh_to_mc(mesh=my_mesh,label=my_label)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.utility` |
| Assembly | `Ans_Dpf_Native_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### mesh

If a meshes container is set in input, it is passed on as an output with the additional label space (if any).

**Type:** *LinkableInput*

### label

Sets a label space.

**Type:** *LinkableInput*

## Outputs

### meshes_container

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
mesh_to_mc()
```

#### Constructor

```python
mesh_to_mc(mesh, label, config)
```

**Parameters:**

- `mesh` (*object*)
- `label` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
mesh_to_mc(config)
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
