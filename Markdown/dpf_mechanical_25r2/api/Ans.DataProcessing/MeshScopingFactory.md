---
uid: Ans.DataProcessing.MeshScopingFactory
---

# MeshScopingFactory Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

Helpers to create mesh scoping inputs

## Example

```python
my_displacement = dpf.operators.result.displacement(mesh_scoping = MeshScopingFactory.NodalScoping([1,2,3]))

my_stress = dpf.operators.result.stress(mesh_scoping = MeshScopingFactory.ElementalScoping([1,2,3]))
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Methods

#### NodalScoping

```python
result = obj.NodalScoping(nodeIds)
```

**Parameters:**

- `nodeIds` (*list*)

**Returns:** *Scoping*

#### ElementalScoping

```python
result = obj.ElementalScoping(elementIds)
```

**Parameters:**

- `elementIds` (*list*)

**Returns:** *Scoping*

#### NamedSelectionScoping

Method `NamedSelectionScoping` create elements scoping

```python
result = obj.NamedSelectionScoping(name, model)
```

**Parameters:**

- `name` (*str*)
- `model` (*Model*)

**Returns:** *Scoping*
