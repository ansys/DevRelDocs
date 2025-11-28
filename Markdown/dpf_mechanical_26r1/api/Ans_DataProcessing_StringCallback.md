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

```csharp
new StringCallback(Object object, IntPtr method)
```

**Parameters:**

- `object` (*Object*)
- `method` (*IntPtr*)

## Methods

#### Invoke

```csharp
Void Invoke(String message)
```

**Parameters:**

- `message` (*String*)

#### BeginInvoke

```csharp
IAsyncResult BeginInvoke(String message, AsyncCallback callback, Object object)
```

**Parameters:**

- `message` (*String*)
- `callback` (*AsyncCallback*)
- `object` (*Object*)

**Returns:** *IAsyncResult*

#### EndInvoke

```csharp
Void EndInvoke(IAsyncResult result)
```

**Parameters:**

- `result` (*IAsyncResult*)
