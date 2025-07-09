## Interface: IAnalysisServerCallback

**Package:** `com.phoenix_int.aserver.client.v2`

**All Known Implementing Classes:**
- [AnalysisServerWaitCallback](AnalysisServerWaitCallback.md)

--- 

**Declaration**

```
public interface IAnalysisServerCallback
```

Callback for ModelCenter Remote Execution events.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `boolean` | `responseReceived(AnalysisServerResponse response)`<br>Callback when a response is received. |

## Method Detail

### responseReceived

```
boolean responseReceived(AnalysisServerResponse response)
```
Callback when a response is received.

**Parameters:**
- `response` - the response

**Returns:**
- true if this callback should be removed