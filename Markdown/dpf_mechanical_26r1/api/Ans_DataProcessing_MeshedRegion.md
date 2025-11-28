---
uid: Ans.DataProcessing.MeshedRegion
title: MeshedRegion
---

# MeshedRegion Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Describe a mesh. 
            Node and element scopings, element types, connectivity (list of node indices composing each element) 
            and node coordinates are the fundamental entities composing the meshed region.

MeshedRegion(numNodes: Int32, numElements: Int32)
MeshedRegion(pMeshedRegion: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```csharp
new MeshedRegion(Int32 numNodes, Int32 numElements)
```

**Parameters:**

- `numNodes` (*Int32*)
- `numElements` (*Int32*)

#### Constructor

```csharp
new MeshedRegion(IntPtr pMeshedRegion)
```

**Parameters:**

- `pMeshedRegion` (*IntPtr*)

## Methods

#### NodeById

```csharp
Node NodeById(Int32 nodeId)
```

**Parameters:**

- `nodeId` (*Int32*)

**Returns:** *Node*

#### ElementById

```csharp
Element ElementById(Int32 elementId)
```

**Parameters:**

- `elementId` (*Int32*)

**Returns:** *Element*

#### GetPropertyField

```csharp
PropertyField GetPropertyField(String propertyName)
```

**Parameters:**

- `propertyName` (*String*)

**Returns:** *PropertyField*

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

#### AddNode

```csharp
Void AddNode(Int32 id, IList`1 coordinates)
```

**Parameters:**

- `id` (*Int32*)
- `coordinates` (*IList`1*)

#### AddBeamElement

```csharp
Void AddBeamElement(Int32 id, IList`1 connectivity)
```

**Parameters:**

- `id` (*Int32*)
- `connectivity` (*IList`1*)

#### AddShellElement

```csharp
Void AddShellElement(Int32 id, IList`1 connectivity)
```

**Parameters:**

- `id` (*Int32*)
- `connectivity` (*IList`1*)

#### AddSolidElement

```csharp
Void AddSolidElement(Int32 id, IList`1 connectivity)
```

**Parameters:**

- `id` (*Int32*)
- `connectivity` (*IList`1*)

#### AddPointElement

```csharp
Void AddPointElement(Int32 id, IList`1 connectivity)
```

**Parameters:**

- `id` (*Int32*)
- `connectivity` (*IList`1*)

#### AddPointElement

```csharp
Void AddPointElement(Int32 id, Int32 connectivity)
```

**Parameters:**

- `id` (*Int32*)
- `connectivity` (*Int32*)

## Properties

#### NodeCount

```csharp
Int32 NodeCount { get; }
```

#### ElementCount

```csharp
Int32 ElementCount { get; }
```

#### NodeIds

```csharp
IList`1 NodeIds { get; }
```

#### ElementIds

```csharp
IList`1 ElementIds { get; }
```

#### NodeScoping

```csharp
Scoping NodeScoping { get; }
```

#### ElementScoping

```csharp
Scoping ElementScoping { get; }
```

#### Unit

```csharp
String Unit { get; set; }
```

#### HasShell

```csharp
Boolean HasShell { get; }
```

#### HasOnlyShell

```csharp
Boolean HasOnlyShell { get; }
```

#### HasBeam

```csharp
Boolean HasBeam { get; }
```

#### HasOnlyBeam

```csharp
Boolean HasOnlyBeam { get; }
```

#### HasSolid

```csharp
Boolean HasSolid { get; }
```

#### HasGasket

```csharp
Boolean HasGasket { get; }
```

#### HasOnlySolid

```csharp
Boolean HasOnlySolid { get; }
```

#### HasPoint

```csharp
Boolean HasPoint { get; }
```

#### HasOnlyPoint

```csharp
Boolean HasOnlyPoint { get; }
```

#### HasSkin

```csharp
Boolean HasSkin { get; }
```

#### HasPolygons

```csharp
Boolean HasPolygons { get; }
```

#### HasPolyhedrons

```csharp
Boolean HasPolyhedrons { get; }
```

#### Nodes

```csharp
IList`1 Nodes { get; }
```

#### Elements

```csharp
IList`1 Elements { get; }
```

#### CoordinatesField

```csharp
Field CoordinatesField { get; }
```

#### ConnectivityPropertyField

```csharp
PropertyField ConnectivityPropertyField { get; }
```

#### NodalConnectivityPropertyField

```csharp
PropertyField NodalConnectivityPropertyField { get; }
```
