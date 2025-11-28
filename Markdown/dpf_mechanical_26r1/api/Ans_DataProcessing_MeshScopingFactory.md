---
uid: Ans.DataProcessing.MeshScopingFactory
title: MeshScopingFactory
---

# MeshScopingFactory Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Helpers to create mesh scoping inputs



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

```python
result = obj.NamedSelectionScoping(name, model)
```

**Parameters:**

- `name` (*str*)
- `model` (*Model*)

**Returns:** *Scoping*
