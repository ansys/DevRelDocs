---
uid: Ans.DataProcessing.Collection
title: Collection
---

# Collection Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Collection[T]()
Collection[T](intptr: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseCollection` |

## Constructors

#### Constructor

```csharp
new Collection`1()
```

#### Constructor

```csharp
new Collection`1(IntPtr intptr)
```

**Parameters:**

- `intptr` (*IntPtr*)

## Methods

#### Add

```csharp
Void Add(T obj)
```

**Parameters:**

- `obj` (*T*)

#### Set

```csharp
Void Set(Int32 index, T obj)
```

**Parameters:**

- `index` (*Int32*)
- `obj` (*T*)

#### Get

```csharp
T Get(Int32 index)
```

**Parameters:**

- `index` (*Int32*)

**Returns:** *T*

## Properties

#### Item

```csharp
T Item { get; set; }
```
