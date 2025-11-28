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

```csharp
new IntIntCallback(Object object, IntPtr method)
```

**Parameters:**

- `object` (*Object*)
- `method` (*IntPtr*)

## Methods

#### Invoke

```csharp
Void Invoke(Int32 id, Int32 state)
```

**Parameters:**

- `id` (*Int32*)
- `state` (*Int32*)

#### BeginInvoke

```csharp
IAsyncResult BeginInvoke(Int32 id, Int32 state, AsyncCallback callback, Object object)
```

**Parameters:**

- `id` (*Int32*)
- `state` (*Int32*)
- `callback` (*AsyncCallback*)
- `object` (*Object*)

**Returns:** *IAsyncResult*

#### EndInvoke

```csharp
Void EndInvoke(IAsyncResult result)
```

**Parameters:**

- `result` (*IAsyncResult*)
