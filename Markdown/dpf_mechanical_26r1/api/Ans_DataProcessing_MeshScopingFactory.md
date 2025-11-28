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

```csharp
Scoping NodalScoping(IList`1 nodeIds)
```

**Parameters:**

- `nodeIds` (*IList`1*)

**Returns:** *Scoping*

#### ElementalScoping

```csharp
Scoping ElementalScoping(IList`1 elementIds)
```

**Parameters:**

- `elementIds` (*IList`1*)

**Returns:** *Scoping*

#### NamedSelectionScoping

```csharp
Scoping NamedSelectionScoping(String name, Model model)
```

**Parameters:**

- `name` (*String*)
- `model` (*Model*)

**Returns:** *Scoping*
