# Class: PHXNoSuchWriteableObjectException

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ com.phoenix_int.aserver.PHXNoSuchObjectException
        ↳ com.phoenix_int.aserver.PHXNoSuchWriteableObjectException
```

**Implemented Interfaces**
- `java.io.Serializable`

---

**Declaration**
```java
public class PHXNoSuchWriteableObjectException
extends PHXNoSuchObjectException
```

An exception that the PHXObjectManager throws when it can't find an object.

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXNoSuchWriteableObjectException(java.lang.String object)` |

## Method Summary

### Methods inherited from class com.phoenix_int.aserver.[PHXNoSuchObjectException](PHXNoSuchObjectException.md)
`getInvalidObject`

### Methods inherited from class java.lang.Throwable
`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`

## Constructor Detail

### PHXNoSuchWriteableObjectException
```java
public PHXNoSuchWriteableObjectException(java.lang.String object)
```
**Parameters:**
- `object` - the object name that caused the exception.