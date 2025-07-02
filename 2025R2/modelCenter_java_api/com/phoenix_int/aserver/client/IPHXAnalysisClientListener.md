# Interface: IPHXAnalysisClientListener

**Package:** `com.phoenix_int.aserver.client`

**Class Hierarchy**
```
↳ java.util.EventListener
  ↳ com.phoenix_int.aserver.client.IPHXAnalysisClientListener
```

**Declaration**
```java
public interface IPHXAnalysisClientListener
    extends java.util.EventListener
```

This interface is used by the [`PHXAnalysisClient`](PHXAnalysisClient.md) class. The `onResponse()` method is called each time a new response is received from the server.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `onException(PHXAnalysisClientExceptionEvent e)`<br>Called each time an exception occurs while reading from the connection to the ModelCenter Remote Execution. |
| `void` | `onResponse(PHXAnalysisClientEvent e)`<br>Called each time a new response is received from the ModelCenter Remote Execution. |

## Method Detail

### onResponse
```java
void onResponse(PHXAnalysisClientEvent e)
```
Called each time a new response is received from ModelCenter Remote Execution.

**Parameters:**
- `e` - The event structure holding the response object and event id.

### onException
```java
void onException(PHXAnalysisClientExceptionEvent e)
```
Called each time an exception occurs while reading from the connection to ModelCenter Remote Execution.

**Parameters:**
- `e` - The event structure holding the Exception object and event id.