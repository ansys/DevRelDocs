======== START OF CLASS DATA ========
com.phoenix_int.aserver.monitors
## Interface IPHXFileCallback
- ---

```java
public interface IPHXFileCallback
```
Callback interface to signal data available on a file being
 monitored.- ========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `boolean` | `dataReady(java.lang.String data)`Called when data is ready |
| `boolean` | `fileTruncated()`Indicates that the file was truncated back to 0 bytes. |- ============ METHOD DETAIL ==========
- ### Method Detail

- #### dataReady

```java
boolean dataReady(java.lang.String data)
```
Called when data is ready
**Parameters:**
: `data`- The available data
**Returns:**
: true to continue monitoring, false to abort monitoring

- #### fileTruncated

```java
boolean fileTruncated()
```
Indicates that the file was truncated back to 0 bytes.
**Returns:**
: true to continue monitoring, false to abort monitoring
========= END OF CLASS DATA =========