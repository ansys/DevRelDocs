# Interface: IPHXFileCallback

**Package:** `com.phoenix_int.aserver.monitors`

---
**Declaration**

```java
public interface IPHXFileCallback
```

Callback interface to signal data available on a file being monitored.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `boolean` | `dataReady(java.lang.String data)`<br>Called when data is ready |
| `boolean` | `fileTruncated()`<br>Indicates that the file was truncated back to 0 bytes. |

## Method Detail

### dataReady

```java
boolean dataReady(java.lang.String data)
```

Called when data is ready.

**Parameters:**
- `data` - The available data

**Returns:**
- `true` to continue monitoring, `false` to abort monitoring

### fileTruncated

```java
boolean fileTruncated()
```

Indicates that the file was truncated back to 0 bytes.

**Returns:**
- `true` to continue monitoring, `false` to abort monitoring