# Class: PHXAnalysisClientExceptionEvent

**Package:** `com.phoenix_int.aserver.client`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.util.EventObject
    ↳ com.phoenix_int.aserver.client.PHXAnalysisClientExceptionEvent
```

**Implemented Interfaces**

- `java.io.Serializable`

**Declaration**

```java
public class PHXAnalysisClientExceptionEvent
extends java.util.EventObject
```

This class is an event for the [`PHXAnalysisClient`](PHXAnalysisClient.md) class. The event is generated when an exception occurs on the read thread.

**See Also:**
- [Serialized Form](./../../../../serialized-form.md)

## Field Summary

### Fields inherited from class java.util.EventObject
`source`

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.Exception` | `getException()`<br>retrieves the Exception object |

### Methods inherited from class java.util.EventObject
`getSource`, `toString`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Method Detail

### getException
```java
public java.lang.Exception getException()
```

retrieves the Exception object

**Returns:**
- the Exception object.