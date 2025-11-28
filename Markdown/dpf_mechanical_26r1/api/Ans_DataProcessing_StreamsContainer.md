---
uid: Ans.DataProcessing.StreamsContainer
title: StreamsContainer
---

# StreamsContainer Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

StreamsContainer(ptrStreams: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```csharp
new StreamsContainer(IntPtr ptrStreams)
```

**Parameters:**

- `ptrStreams` (*IntPtr*)

## Methods

#### ReleaseHandles

```csharp
Void ReleaseHandles()
```

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### DataSources

```csharp
DataSources DataSources { get; }
```
