# Class: AnalysisServerException

**Package:** `com.phoenix_int.aserver.client.v2`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ com.phoenix_int.aserver.client.v2.AnalysisServerException
```

**Implemented Interfaces**

- `java.io.Serializable`

**Declaration**

```
public class AnalysisServerException
extends java.lang.Exception
```

Exception thrown when a request fails on the server.

---

## Constructor Summary

| Constructor and Description |
| ---  |
| `AnalysisServerException(java.lang.String message)`<br>Constructor. |
| `AnalysisServerException(java.lang.String message, java.lang.Throwable cause)`<br>Constructor. |



## Method Summary

### Methods inherited from class java.lang.Throwable
`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`



## Constructor Detail



**Constructor:** AnalysisServerException

```
public AnalysisServerException(java.lang.String message)
```
Constructor.

**Parameters:**
- `message` - the error message



**Constructor:** AnalysisServerException

```
public AnalysisServerException(java.lang.String message,
                               java.lang.Throwable cause)
```
Constructor.

**Parameters:**
- `message` - the error message
- `cause` - the triggering exception

