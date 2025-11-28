---
uid: Ans.DataProcessing.CyclicSupport
title: CyclicSupport
---

# CyclicSupport Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

The cyclic support has information to allow cyclic expansion (or multistage)

CyclicSupport(ptrSupport: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```csharp
new CyclicSupport(IntPtr ptrSupport)
```

**Parameters:**

- `ptrSupport` (*IntPtr*)

## Methods

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

#### GetNumSectors

```csharp
Int32 GetNumSectors(Int32 istage (optional))
```

**Parameters:**

- `istage` (*Int32*)

**Returns:** *Int32*

#### GetSectorsScoping

```csharp
Scoping GetSectorsScoping(Int32 istage (optional))
```

**Parameters:**

- `istage` (*Int32*)

**Returns:** *Scoping*

#### GetBaseNodesScoping

```csharp
Scoping GetBaseNodesScoping(Int32 istage (optional))
```

**Parameters:**

- `istage` (*Int32*)

**Returns:** *Scoping*

#### GetBaseElementsScoping

```csharp
Scoping GetBaseElementsScoping(Int32 istage (optional))
```

**Parameters:**

- `istage` (*Int32*)

**Returns:** *Scoping*

#### GetNodeIdsWhenExpanded

```csharp
Scoping GetNodeIdsWhenExpanded(Int32 nodeId, Scoping sectorsScoping (optional), Int32 istage (optional))
```

**Parameters:**

- `nodeId` (*Int32*)
- `sectorsScoping` (*Scoping*)
- `istage` (*Int32*)

**Returns:** *Scoping*

#### GetElementIdsWhenExpanded

```csharp
Scoping GetElementIdsWhenExpanded(Int32 elementId, Scoping sectorsScoping (optional), Int32 istage (optional))
```

**Parameters:**

- `elementId` (*Int32*)
- `sectorsScoping` (*Scoping*)
- `istage` (*Int32*)

**Returns:** *Scoping*

#### GetCS

```csharp
Field GetCS()
```

**Returns:** *Field*

#### GetLowHighMap

```csharp
PropertyField GetLowHighMap(Int32 istage (optional))
```

**Parameters:**

- `istage` (*Int32*)

**Returns:** *PropertyField*

#### GetHighLowMap

```csharp
PropertyField GetHighLowMap(Int32 istage (optional))
```

**Parameters:**

- `istage` (*Int32*)

**Returns:** *PropertyField*

## Properties

#### NumStages

```csharp
Int32 NumStages { get; }
```
