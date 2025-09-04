# Class: PHXInvalidTypeException

**Package:** `com.phoenix_int.aserver.types`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ com.phoenix_int.aserver.types.PHXInvalidTypeException
```

**Implemented Interfaces**

- `java.io.Serializable`

--- 
**Declaration**

```java
public class PHXInvalidTypeException
extends java.lang.Exception
```

An exception that is thrown when trying to use a bad type

**See Also:**

[`Serialized Form`](../../../../serialized-form.md)

## Constructor Summary

| Constructor and Description |
|---------------------|
| `PHXInvalidTypeException(java.lang.String type)`<br>Create an invalid type exception |
| `PHXInvalidTypeException(java.lang.String type, java.lang.Throwable cause)`<br>Create an invalid type exception with a cause |

## Method Summary

### Methods inherited from class java.lang.Throwable

`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXInvalidTypeException

```java
public PHXInvalidTypeException(java.lang.String type)
```

Create an invalid type exception

**Parameters:**
- `type` - the bad type

### PHXInvalidTypeException

```java
public PHXInvalidTypeException(java.lang.String type,
                               java.lang.Throwable cause)
```

Create an invalid type exception with a cause

**Parameters:**
- `type` - the bad type
- `cause` - the exception that caused this exception