---
uid: Ans.DataProcessing.FieldsFactory
title: FieldsFactory
---

# FieldsFactory Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Helpers to create user defined fields



## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Methods

#### CreateMatrixField

```csharp
Field CreateMatrixField(Int32 numEntities, Int32 numLines, Int32 numCol, String location (optional))
```

**Parameters:**

- `numEntities` (*Int32*)
- `numLines` (*Int32*)
- `numCol` (*Int32*)
- `location` (*String*)

**Returns:** *Field*

#### Create3DVectorField

```csharp
Field Create3DVectorField(Int32 numEntities, String location (optional))
```

**Parameters:**

- `numEntities` (*Int32*)
- `location` (*String*)

**Returns:** *Field*

#### CreateTensorField

```csharp
Field CreateTensorField(Int32 numEntities, String location (optional))
```

**Parameters:**

- `numEntities` (*Int32*)
- `location` (*String*)

**Returns:** *Field*

#### CreateScalarField

```csharp
Field CreateScalarField(Int32 numEntities, String location (optional))
```

**Parameters:**

- `numEntities` (*Int32*)
- `location` (*String*)

**Returns:** *Field*

#### CreateVectorField

```csharp
Field CreateVectorField(Int32 numEntities, Int32 numComp, String location (optional))
```

**Parameters:**

- `numEntities` (*Int32*)
- `numComp` (*Int32*)
- `location` (*String*)

**Returns:** *Field*
