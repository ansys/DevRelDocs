# Class: AnalysisServerWaitCallback

**Package:** `com.phoenix_int.aserver.client.v2`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.client.v2.AnalysisServerWaitCallback
```

**Implemented Interfaces**

- `IAnalysisServerCallback`

--- 

**Declaration**

```java
public class AnalysisServerWaitCallback
extends java.lang.Object
implements IAnalysisServerCallback
```
Callback object which uses a monitor to allow the caller to block until a response is received.

## Constructor Summary

| Constructor and Description |
| --- |
| `AnalysisServerWaitCallback()` |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `AnalysisServerResponse` | `getResponse()`<br>Get the response, or null if it has not been received. |
| `boolean` | `responseReceived(AnalysisServerResponse response)`<br>Callback when a response is received. |
| `AnalysisServerResponse` | `waitForResponse()`<br>Wait until the response has been received, if it has not already. |
| `AnalysisServerResponse` | `waitForResponse(int timeout)`<br>Wait until the response has been received, if it has not already. |

### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

## Constructor Detail

### AnalysisServerWaitCallback

```java
public AnalysisServerWaitCallback()
```

## Method Detail

### getResponse

```java
public AnalysisServerResponse getResponse()
```
Get the response, or null if it has not been received.

### waitForResponse

```java
public AnalysisServerResponse waitForResponse()
    throws java.lang.InterruptedException
```
Wait until the response has been received, if it has not already.

**Returns:**
- the response

**Throws:**
- `java.lang.InterruptedException` - if the current thread is interrupted during the wait

### waitForResponse

```java
public AnalysisServerResponse waitForResponse(int timeout)
    throws java.lang.InterruptedException
```
Wait until the response has been received, if it has not already.

**Parameters:**
- `timeout` - the amount of time in ms to wait; 0 for infinite

**Returns:**
- the response, or null if it has not yet been received

**Throws:**
- `java.lang.InterruptedException` - if the current thread is interrupted during the wait

### responseReceived

```java
public boolean responseReceived(AnalysisServerResponse response)
```
Callback when a response is received.

**Parameters:**
- `response` - the response

**Returns:**
- true if this callback should be removed

**Specified by:**
- `responseReceived` in interface `IAnalysisServerCallback`