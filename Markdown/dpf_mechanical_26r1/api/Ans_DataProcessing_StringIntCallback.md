---
uid: Ans.DataProcessing.StringIntCallback
title: StringIntCallback
---

# StringIntCallback Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

StringIntCallback(object: object, method: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `System.MulticastDelegate` |
| Interfaces | `ICloneable, ISerializable` |

## Constructors

#### Constructor

```python
StringIntCallback(object, method)
```

**Parameters:**

- `object` (*object*)
- `method` (*IntPtr*)

## Methods

#### Invoke

```python
obj.Invoke(id, value)
```

**Parameters:**

- `id` (*str*)
- `value` (*int*)

#### BeginInvoke

```python
result = obj.BeginInvoke(id, value, callback, object)
```

**Parameters:**

- `id` (*str*)
- `value` (*int*)
- `callback` (*AsyncCallback*)
- `object` (*object*)

**Returns:** *IAsyncResult*

#### EndInvoke

```python
obj.EndInvoke(result)
```

**Parameters:**

- `result` (*IAsyncResult*)
