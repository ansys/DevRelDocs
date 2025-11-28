---
uid: Ans.DataProcessing.Field
title: Field
---

# Field Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

The field is the main simulation data container.
            Results data are defined by values associated to entities (scoping), and these entities are a subset of a model (support)

Field(pField: IntPtr)
Field()


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```csharp
new Field(IntPtr pField)
```

**Parameters:**

- `pField` (*IntPtr*)

#### Constructor

```csharp
new Field()
```

## Methods

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

#### UpdateEntityDataByEntityIndex

```csharp
Void UpdateEntityDataByEntityIndex(Int32 EntityIndex, IList`1 data)
```

**Parameters:**

- `EntityIndex` (*Int32*)
- `data` (*IList`1*)

#### Add

```csharp
Void Add(Int32 id, IList`1 data)
```

**Parameters:**

- `id` (*Int32*)
- `data` (*IList`1*)

#### Reserve

```csharp
Void Reserve(Int32 scopingSize, Int32 dataSize)
```

**Parameters:**

- `scopingSize` (*Int32*)
- `dataSize` (*Int32*)

#### GetHardCopy

```csharp
Field GetHardCopy(Boolean copyData (optional))
```

**Parameters:**

- `copyData` (*Boolean*)

**Returns:** *Field*

#### op_Addition

```csharp
BaseOperator op_Addition(Field a, Field b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Addition

```csharp
BaseOperator op_Addition(Field a, Double b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*Double*)

**Returns:** *BaseOperator*

#### op_Addition

```csharp
BaseOperator op_Addition(Double a, Field b)
```

**Parameters:**

- `a` (*Double*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Addition

```csharp
BaseOperator op_Addition(Field a, IList`1 b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*IList`1*)

**Returns:** *BaseOperator*

#### op_Addition

```csharp
BaseOperator op_Addition(IList`1 a, Field b)
```

**Parameters:**

- `a` (*IList`1*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Subtraction

```csharp
BaseOperator op_Subtraction(Field a, Field b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Subtraction

```csharp
BaseOperator op_Subtraction(Field a, Double b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*Double*)

**Returns:** *BaseOperator*

#### op_Subtraction

```csharp
BaseOperator op_Subtraction(Double a, Field b)
```

**Parameters:**

- `a` (*Double*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Subtraction

```csharp
BaseOperator op_Subtraction(IList`1 a, Field b)
```

**Parameters:**

- `a` (*IList`1*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Subtraction

```csharp
BaseOperator op_Subtraction(Field a, IList`1 b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*IList`1*)

**Returns:** *BaseOperator*

#### op_Multiply

```csharp
BaseOperator op_Multiply(Field a, Field b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Multiply

```csharp
BaseOperator op_Multiply(Field a, Double b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*Double*)

**Returns:** *BaseOperator*

#### op_Multiply

```csharp
BaseOperator op_Multiply(Double a, Field b)
```

**Parameters:**

- `a` (*Double*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Multiply

```csharp
BaseOperator op_Multiply(IList`1 a, Field b)
```

**Parameters:**

- `a` (*IList`1*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Multiply

```csharp
BaseOperator op_Multiply(Field a, IList`1 b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*IList`1*)

**Returns:** *BaseOperator*

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### Location

```csharp
String Location { get; set; }
```

#### NComp

```csharp
Int32 NComp { get; }
```

#### ComponentCount

```csharp
Int32 ComponentCount { get; }
```

#### ElementaryDataCount

```csharp
Int32 ElementaryDataCount { get; }
```

#### Data

```csharp
IList`1 Data { get; set; }
```

#### ScopingIds

```csharp
IList`1 ScopingIds { get; set; }
```

#### Scoping

```csharp
Scoping Scoping { get; set; }
```

#### Unit

```csharp
String Unit { get; set; }
```

#### eShellLayers

```csharp
shellLayers eShellLayers { get; set; }
```

#### MeshedRegionSupport

```csharp
MeshedRegion MeshedRegionSupport { get; set; }
```

#### TimeFreqSupport

```csharp
TimeFreqSupport TimeFreqSupport { get; set; }
```

#### Name

```csharp
String Name { get; set; }
```

#### Clone

```csharp
FieldCloning Clone { get; }
```

#### Id

```csharp
Int64 Id { get; }
```
