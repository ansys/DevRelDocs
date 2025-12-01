---
uid: Ans.DataProcessing.PropertyField
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

```python
PropertyField(pField)
```

**Parameters:**

- `pField` (*IntPtr*)

#### Constructor

```python
PropertyField(numEntities, elementaryDataSize)
```

**Parameters:**

- `numEntities` (*int*)
- `elementaryDataSize` (*int*)

## Methods

#### Add

```python
obj.Add(id, data)
```

**Parameters:**

- `id` (*int*)
- `data` (*list*)

#### GetEntityDataByIndex

```python
result = obj.GetEntityDataByIndex(index)
```

**Parameters:**

- `index` (*int*)

**Returns:** *list*

#### GetEntityDataById

```python
result = obj.GetEntityDataById(id)
```

**Parameters:**

- `id` (*int*)

**Returns:** *list*

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### ElementaryDataCount

**Type:** *int*

```python
# Get the property (read-only)
value = obj.ElementaryDataCount
```

#### Data

**Type:** *list*

```python
# Get or set the property
value = obj.Data
obj.Data = new_value
```

#### Scoping

**Type:** *Scoping*

```python
# Get or set the property
value = obj.Scoping
obj.Scoping = new_value
```
