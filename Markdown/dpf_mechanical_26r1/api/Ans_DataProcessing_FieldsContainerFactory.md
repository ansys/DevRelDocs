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

```python
result = obj.OverTimeFreqFieldsContainer(fields)
```

**Parameters:**

- `fields` (*list*)

**Returns:** *FieldsContainer*

#### OverTimeFreqFieldsContainer

```python
result = obj.OverTimeFreqFieldsContainer(fields, timeFreqUnit)
```

**Parameters:**

- `fields` (*dict*)
- `timeFreqUnit` (*str*)

**Returns:** *FieldsContainer*

#### OverTimeFreqComplexFieldsContainer

```python
result = obj.OverTimeFreqComplexFieldsContainer(realFields, imaginaryFields)
```

**Parameters:**

- `realFields` (*list*)
- `imaginaryFields` (*list*)

**Returns:** *FieldsContainer*

#### ComplexFieldsContainer

```python
result = obj.ComplexFieldsContainer(realField, imaginaryField)
```

**Parameters:**

- `realField` (*Field*)
- `imaginaryField` (*Field*)

**Returns:** *FieldsContainer*

#### OverTimeFreqComplexFieldsContainer

```python
result = obj.OverTimeFreqComplexFieldsContainer(realFields, imaginaryFields, timeFreqUnit)
```

**Parameters:**

- `realFields` (*dict*)
- `imaginaryFields` (*dict*)
- `timeFreqUnit` (*str*)

**Returns:** *FieldsContainer*
