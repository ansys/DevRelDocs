---
uid: Ans.DataProcessing.FieldsContainerFactory
title: FieldsContainerFactory
---

# FieldsContainerFactory Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Helpers to create user defined fields container



## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Methods

#### OverTimeFreqFieldsContainer

```csharp
FieldsContainer OverTimeFreqFieldsContainer(IList`1 fields)
```

**Parameters:**

- `fields` (*IList`1*)

**Returns:** *FieldsContainer*

#### OverTimeFreqFieldsContainer

```csharp
FieldsContainer OverTimeFreqFieldsContainer(IDictionary`2 fields, String timeFreqUnit)
```

**Parameters:**

- `fields` (*IDictionary`2*)
- `timeFreqUnit` (*String*)

**Returns:** *FieldsContainer*

#### OverTimeFreqComplexFieldsContainer

```csharp
FieldsContainer OverTimeFreqComplexFieldsContainer(IList`1 realFields, IList`1 imaginaryFields)
```

**Parameters:**

- `realFields` (*IList`1*)
- `imaginaryFields` (*IList`1*)

**Returns:** *FieldsContainer*

#### ComplexFieldsContainer

```csharp
FieldsContainer ComplexFieldsContainer(Field realField, Field imaginaryField)
```

**Parameters:**

- `realField` (*Field*)
- `imaginaryField` (*Field*)

**Returns:** *FieldsContainer*

#### OverTimeFreqComplexFieldsContainer

```csharp
FieldsContainer OverTimeFreqComplexFieldsContainer(IDictionary`2 realFields, IDictionary`2 imaginaryFields, String timeFreqUnit)
```

**Parameters:**

- `realFields` (*IDictionary`2*)
- `imaginaryFields` (*IDictionary`2*)
- `timeFreqUnit` (*String*)

**Returns:** *FieldsContainer*
