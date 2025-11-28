---
uid: Ans.DataProcessing.StringCallback
title: StringCallback
---

# StringCallback Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

StringCallback(object: object, method: IntPtr)


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
StringCallback(object, method)
```

**Parameters:**

- `object` (*object*)
- `method` (*IntPtr*)

## Methods

#### Invoke

```python
obj.Invoke(message)
```

**Parameters:**

- `message` (*str*)

#### BeginInvoke

```python
result = obj.BeginInvoke(message, callback, object)
```

**Parameters:**

- `message` (*str*)
- `callback` (*AsyncCallback*)
- `object` (*object*)

**Returns:** *IAsyncResult*

#### EndInvoke

```python
obj.EndInvoke(result)
```

**Parameters:**

- `result` (*IAsyncResult*)
