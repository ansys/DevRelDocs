---
uid: Ans.DataProcessing.Collection
title: Collection
---

# Collection Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Collection[T]()
Collection[T](intptr: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseCollection` |

## Constructors

#### Constructor

```python
Collection`1()
```

#### Constructor

```python
Collection`1(intptr)
```

**Parameters:**

- `intptr` (*IntPtr*)

## Methods

#### Add

```python
obj.Add(obj)
```

**Parameters:**

- `obj` (*T*)

#### Set

```python
obj.Set(index, obj)
```

**Parameters:**

- `index` (*int*)
- `obj` (*T*)

#### Get

```python
result = obj.Get(index)
```

**Parameters:**

- `index` (*int*)

**Returns:** *T*

## Properties

#### Item

**Type:** *T*

```python
# Get or set the property
value = obj.Item
obj.Item = new_value
```
