# Class: PHXAnalysisClientEvent

**Package:** `com.phoenix_int.aserver.client`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.util.EventObject
    ↳ com.phoenix_int.aserver.client.PHXAnalysisClientEvent
```

**Implemented Interfaces**

- `java.io.Serializable`

**Declaration**

```java
public class PHXAnalysisClientEvent
extends java.util.EventObject
```

This class is an event for the [`PHXAnalysisClient`](PHXAnalysisClient.md) class. The event is generated each time a new response is received from the server.


**See Also:**
- [Serialized Form](../../../../serialized-form.html#com.phoenix_int.aserver.client.PHXAnalysisClientEvent)

## Field Summary

### Fields inherited from class java.util.EventObject
`source`

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `com.phoenix_int.aserver.client.PHXResponse` | `getResponse()`<br>retrieves the response |

### Methods inherited from class java.util.EventObject
`getSource, toString`

### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

## Method Detail

### getResponse
```
public com.phoenix_int.aserver.client.PHXResponse getResponse()
```
retrieves the response

**Returns:**
- the response object