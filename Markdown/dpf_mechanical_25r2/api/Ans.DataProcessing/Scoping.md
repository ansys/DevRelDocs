---
uid: Ans.DataProcessing.Scoping
---

# Scoping Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

The scoping contains entities ids representing a subset of the model's support. Typically, scoping can represent node ids, element ids, time steps, frequencies, joints...

Its location indicates what kind of entity the scoping is referring to

## Example

```python
my_scoping = dpf.data.Scoping()

my_scoping.Location = 'Nodal' #optional

my_scoping.Ids = range(1,11)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```python
Scoping()
```

#### Constructor

```python
Scoping(ptrScoping)
```

**Parameters:**

- `ptrScoping` (*IntPtr*)

#### Constructor

```python
Scoping(ids, location)
```

**Parameters:**

- `ids` (*list*)
- `location` (*str*)

## Methods

#### IdByIndex

```python
result = obj.IdByIndex(index)
```

**Parameters:**

- `index` (*int*)

**Returns:** *int*

#### IndexById

```python
result = obj.IndexById(id)
```

**Parameters:**

- `id` (*int*)

**Returns:** *int*

#### HasId

```python
result = obj.HasId(id)
```

**Parameters:**

- `id` (*int*)

**Returns:** *bool*

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### Ids

Property `Ids` entity ids

**Type:** *list*

```python
# Get or set the property
value = obj.Ids
obj.Ids = new_value
```

#### Count

Property `Count` returns the number of ids in the scoping

**Type:** *int*

```python
# Get the property (read-only)
value = obj.Count
```

#### Location

Property `Location` indicates what kind of entity the scoping is referring to

**Type:** *str*

```python
# Get or set the property
value = obj.Location
obj.Location = new_value
```
