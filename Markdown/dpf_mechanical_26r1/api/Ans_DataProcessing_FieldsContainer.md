---
uid: Ans.DataProcessing.FieldsContainer
title: FieldsContainer
---

# FieldsContainer Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Container of fields.
            Can be used to handle results on different times/frequencies, to handle real and imaginary fields in complex results or
            to split spatially results on properties (bodies, element shapes (solid, shell, beams), material...)

FieldsContainer()
FieldsContainer(intptr: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfTypeCollection`1[[Ans.DataProcessing.Field, CS_DataProcessing, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null]]` |

## Constructors

#### Constructor

```csharp
new FieldsContainer()
```

#### Constructor

```csharp
new FieldsContainer(IntPtr intptr)
```

**Parameters:**

- `intptr` (*IntPtr*)

## Methods

#### GetFieldByTimeId

```csharp
Field GetFieldByTimeId(Int32 timeId)
```

**Parameters:**

- `timeId` (*Int32*)

**Returns:** *Field*

#### GetImaginaryField

```csharp
Field GetImaginaryField(Int32 timeId)
```

**Parameters:**

- `timeId` (*Int32*)

**Returns:** *Field*

#### AddFieldByTimeId

```csharp
Void AddFieldByTimeId(Field field, Int32 timeId)
```

**Parameters:**

- `field` (*Field*)
- `timeId` (*Int32*)

#### AddImaginaryField

```csharp
Void AddImaginaryField(Field field, Int32 timeId)
```

**Parameters:**

- `field` (*Field*)
- `timeId` (*Int32*)

#### op_Addition

```csharp
BaseOperator op_Addition(FieldsContainer a, FieldsContainer b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Addition

```csharp
BaseOperator op_Addition(FieldsContainer a, Double b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*Double*)

**Returns:** *BaseOperator*

#### op_Addition

```csharp
BaseOperator op_Addition(Field a, FieldsContainer b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Addition

```csharp
BaseOperator op_Addition(FieldsContainer a, Field b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Addition

```csharp
BaseOperator op_Addition(Double a, FieldsContainer b)
```

**Parameters:**

- `a` (*Double*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Addition

```csharp
BaseOperator op_Addition(FieldsContainer a, IList`1 b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*IList`1*)

**Returns:** *BaseOperator*

#### op_Addition

```csharp
BaseOperator op_Addition(IList`1 a, FieldsContainer b)
```

**Parameters:**

- `a` (*IList`1*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Subtraction

```csharp
BaseOperator op_Subtraction(FieldsContainer a, FieldsContainer b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Subtraction

```csharp
BaseOperator op_Subtraction(FieldsContainer a, Double b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*Double*)

**Returns:** *BaseOperator*

#### op_Subtraction

```csharp
BaseOperator op_Subtraction(Field a, FieldsContainer b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Subtraction

```csharp
BaseOperator op_Subtraction(FieldsContainer a, Field b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Subtraction

```csharp
BaseOperator op_Subtraction(Double a, FieldsContainer b)
```

**Parameters:**

- `a` (*Double*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Subtraction

```csharp
BaseOperator op_Subtraction(FieldsContainer a, IList`1 b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*IList`1*)

**Returns:** *BaseOperator*

#### op_Subtraction

```csharp
BaseOperator op_Subtraction(IList`1 a, FieldsContainer b)
```

**Parameters:**

- `a` (*IList`1*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Multiply

```csharp
BaseOperator op_Multiply(FieldsContainer a, FieldsContainer b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Multiply

```csharp
BaseOperator op_Multiply(FieldsContainer a, Double b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*Double*)

**Returns:** *BaseOperator*

#### op_Multiply

```csharp
BaseOperator op_Multiply(Field a, FieldsContainer b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Multiply

```csharp
BaseOperator op_Multiply(FieldsContainer a, Field b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Multiply

```csharp
BaseOperator op_Multiply(Double a, FieldsContainer b)
```

**Parameters:**

- `a` (*Double*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Multiply

```csharp
BaseOperator op_Multiply(FieldsContainer a, IList`1 b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*IList`1*)

**Returns:** *BaseOperator*

#### op_Multiply

```csharp
BaseOperator op_Multiply(IList`1 a, FieldsContainer b)
```

**Parameters:**

- `a` (*IList`1*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

## Properties

#### FieldCount

```csharp
Int32 FieldCount { get; }
```

#### TimeFreqSupport

```csharp
TimeFreqSupport TimeFreqSupport { get; set; }
```

#### Id

```csharp
Int64 Id { get; }
```
