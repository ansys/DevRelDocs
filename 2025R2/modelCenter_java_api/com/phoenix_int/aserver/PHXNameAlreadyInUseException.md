# Class: PHXNameAlreadyInUseException

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ com.phoenix_int.aserver.PHXNameAlreadyInUseException
```

**Implemented Interfaces**
- `java.io.Serializable`

**Declaration**
```java
public class PHXNameAlreadyInUseException
extends java.lang.Exception
```

An exception that is thrown when trying to create a new object with a name that already exists.

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXNameAlreadyInUseException(java.lang.String name)` |

## Method Summary

### Methods inherited from class java.lang.Throwable
`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`

## Constructor Detail

### PHXNameAlreadyInUseException
```java
public PHXNameAlreadyInUseException(java.lang.String name)
```

**Parameters:**
- `name` - the name that was already in use