---
uid: Ans.DataProcessing.FieldsContainerFactory
---

# FieldsContainerFactory Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

Helpers to create user defined fields container

## Example

```python
time1_disp = dpf.FieldsFactory.Create3DVectorField(numEntities=100)

time2_disp = dpf.FieldsFactory.Create3DVectorField(numEntities=100)

my_displacements = dpf.FieldsContainerFactory.OverTimeFreqFieldsContainer([time1_disp, time2_disp])
```

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

Method `ComplexFieldsContainer` create fields container with one real and one imaginary field

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
