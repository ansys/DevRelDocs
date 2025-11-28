---
uid: Ans.DataProcessing.PropertyField
title: PropertyField
---

# PropertyField Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

PropertyField(pField: IntPtr)
PropertyField(numEntities: Int32, elementaryDataSize: Int32)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```csharp
new PropertyField(IntPtr pField)
```

**Parameters:**

- `pField` (*IntPtr*)

#### Constructor

```csharp
new PropertyField(Int32 numEntities, Int32 elementaryDataSize)
```

**Parameters:**

- `numEntities` (*Int32*)
- `elementaryDataSize` (*Int32*)

## Methods

#### Add

```csharp
Void Add(Int32 id, IList`1 data)
```

**Parameters:**

- `id` (*Int32*)
- `data` (*IList`1*)

#### GetEntityDataByIndex

```csharp
IList`1 GetEntityDataByIndex(Int32 index)
```

**Parameters:**

- `index` (*Int32*)

**Returns:** *IList`1*

#### GetEntityDataById

```csharp
IList`1 GetEntityDataById(Int32 id)
```

**Parameters:**

- `id` (*Int32*)

**Returns:** *IList`1*

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### ElementaryDataCount

```csharp
Int32 ElementaryDataCount { get; }
```

#### Data

```csharp
IList`1 Data { get; set; }
```

#### Scoping

```csharp
Scoping Scoping { get; set; }
```
