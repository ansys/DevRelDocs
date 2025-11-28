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

```csharp
new StringIntCallback(Object object, IntPtr method)
```

**Parameters:**

- `object` (*Object*)
- `method` (*IntPtr*)

## Methods

#### Invoke

```csharp
Void Invoke(String id, Int32 value)
```

**Parameters:**

- `id` (*String*)
- `value` (*Int32*)

#### BeginInvoke

```csharp
IAsyncResult BeginInvoke(String id, Int32 value, AsyncCallback callback, Object object)
```

**Parameters:**

- `id` (*String*)
- `value` (*Int32*)
- `callback` (*AsyncCallback*)
- `object` (*Object*)

**Returns:** *IAsyncResult*

#### EndInvoke

```csharp
Void EndInvoke(IAsyncResult result)
```

**Parameters:**

- `result` (*IAsyncResult*)
