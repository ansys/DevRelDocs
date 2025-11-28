---
uid: Ans.DataProcessing.IntIntCallback
title: IntIntCallback
---

# IntIntCallback Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

IntIntCallback(object: object, method: IntPtr)


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
IntIntCallback(object, method)
```

**Parameters:**

- `object` (*object*)
- `method` (*IntPtr*)

## Methods

#### Invoke

```python
obj.Invoke(id, state)
```

**Parameters:**

- `id` (*int*)
- `state` (*int*)

#### BeginInvoke

```python
result = obj.BeginInvoke(id, state, callback, object)
```

**Parameters:**

- `id` (*int*)
- `state` (*int*)
- `callback` (*AsyncCallback*)
- `object` (*object*)

**Returns:** *IAsyncResult*

#### EndInvoke

```python
obj.EndInvoke(result)
```

**Parameters:**

- `result` (*IAsyncResult*)
