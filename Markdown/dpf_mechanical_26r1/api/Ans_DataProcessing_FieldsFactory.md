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

```python
result = obj.CreateMatrixField(numEntities, numLines, numCol, location)
```

**Parameters:**

- `numEntities` (*int*)
- `numLines` (*int*)
- `numCol` (*int*)
- `location` (*str* (optional))

**Returns:** *Field*

#### Create3DVectorField

```python
result = obj.Create3DVectorField(numEntities, location)
```

**Parameters:**

- `numEntities` (*int*)
- `location` (*str* (optional))

**Returns:** *Field*

#### CreateTensorField

```python
result = obj.CreateTensorField(numEntities, location)
```

**Parameters:**

- `numEntities` (*int*)
- `location` (*str* (optional))

**Returns:** *Field*

#### CreateScalarField

```python
result = obj.CreateScalarField(numEntities, location)
```

**Parameters:**

- `numEntities` (*int*)
- `location` (*str* (optional))

**Returns:** *Field*

#### CreateVectorField

```python
result = obj.CreateVectorField(numEntities, numComp, location)
```

**Parameters:**

- `numEntities` (*int*)
- `numComp` (*int*)
- `location` (*str* (optional))

**Returns:** *Field*
