---
uid: Ans.DataProcessing.Scoping
title: Scoping
---

# Scoping Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

The scoping contains entities ids representing a subset of the model's support. Typically, scoping can represent node ids, element ids, time steps, frequencies, joints... 
            Its location indicates what kind of entity the scoping is referring to

Scoping()
Scoping(ptrScoping: IntPtr)
Scoping(ids: IList[Int32], location: str)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```csharp
new Scoping()
```

#### Constructor

```csharp
new Scoping(IntPtr ptrScoping)
```

**Parameters:**

- `ptrScoping` (*IntPtr*)

#### Constructor

```csharp
new Scoping(IList`1 ids, String location (optional))
```

**Parameters:**

- `ids` (*IList`1*)
- `location` (*String*)

## Methods

#### IdByIndex

```csharp
Int32 IdByIndex(Int32 index)
```

**Parameters:**

- `index` (*Int32*)

**Returns:** *Int32*

#### IndexById

```csharp
Int32 IndexById(Int32 id)
```

**Parameters:**

- `id` (*Int32*)

**Returns:** *Int32*

#### HasId

```csharp
Boolean HasId(Int32 id)
```

**Parameters:**

- `id` (*Int32*)

**Returns:** *Boolean*

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### Ids

```csharp
IList`1 Ids { get; set; }
```

#### Count

```csharp
Int32 Count { get; }
```

#### Location

```csharp
String Location { get; set; }
```
