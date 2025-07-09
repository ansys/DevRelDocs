# Class: PHXNoSuchResponseException

**Package:** `com.phoenix_int.aserver.client`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ com.phoenix_int.aserver.client.PHXNoSuchResponseException
```

**Implemented Interfaces**

- `java.io.Serializable`

**Declaration**

```
public class PHXNoSuchResponseException
extends java.lang.Exception
```

An exception that is thrown when an invalid response is specified.

**See Also:**
- [Serialized Form](../../../../serialized-form.md)

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `getInvalidID()`<br>retrieves the id that didn't have a response |

### Methods inherited from class java.lang.Throwable
`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Method Detail

### getInvalidID
```
public java.lang.String getInvalidID()
```
retrieves the id that didn't have a response

**Returns:**
- the invalid id