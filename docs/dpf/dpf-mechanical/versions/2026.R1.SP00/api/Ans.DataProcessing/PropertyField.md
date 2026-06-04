---
uid: Ans.DataProcessing.PropertyField
---

# PropertyField Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

PropertyField(pField: IntPtr)
PropertyField(numEntities: int, elementaryDataSize: int)


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

Method `GetEntityDataByIndex` data container of the entity asked

```python
result = obj.GetEntityDataByIndex(index)
```

**Parameters:**

- `index` (*int*)

**Returns:** *list*

#### GetEntityDataById

Method `GetEntityDataById` data container of the entity asked

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

Property `ElementaryDataCount` number of times numComp can be found in the data container

**Type:** *int*

```python
# Get the property (read-only)
value = obj.ElementaryDataCount
```

#### Data

Property `Data`access the data container row values

 Data can be seen as a list of elementary data (one by scoping id)

**Type:** *list*

```python
# Get or set the property
value = obj.Data
obj.Data = new_value
```

#### Scoping

Property `Scoping` entities ids representing a subset of the model and on which the data container is scoped

**Type:** *Scoping*

```python
# Get or set the property
value = obj.Scoping
obj.Scoping = new_value
```
