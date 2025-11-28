---
uid: Ans.DataProcessing.Element
title: Element
---

# Element Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Element(id: Int32, ptr: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Constructors

#### Constructor

```csharp
new Element(Int32 id, IntPtr ptr)
```

**Parameters:**

- `id` (*Int32*)
- `ptr` (*IntPtr*)

## Methods

#### GetMidNodeAdjacentNodes

```csharp
Void GetMidNodeAdjacentNodes(Int32 indexMidNode, Int32& indexCornerNode1 (out), Int32& indexCornerNode2 (out))
```

**Parameters:**

- `indexMidNode` (*Int32*)
- `indexCornerNode1` (*Int32&*)
- `indexCornerNode2` (*Int32&*)

## Properties

#### Id

```csharp
Int32 Id { get; }
```

#### Type

```csharp
Int32 Type { get; }
```

#### NodeIds

```csharp
IList`1 NodeIds { get; }
```

#### Nodes

```csharp
IList`1 Nodes { get; }
```

#### CornerNodeIds

```csharp
IList`1 CornerNodeIds { get; }
```

#### MidNodeIds

```csharp
IList`1 MidNodeIds { get; }
```

#### CornerNodes

```csharp
IList`1 CornerNodes { get; }
```
