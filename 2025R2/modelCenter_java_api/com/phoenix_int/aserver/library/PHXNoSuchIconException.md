# Class: PHXNoSuchIconException

**Package:** `com.phoenix_int.aserver.library`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ com.phoenix_int.aserver.library.PHXNoSuchIconException
```

**Implemented Interfaces**

- `java.io.Serializable`

--- 

**Declaration**

```
public class PHXNoSuchIconException
extends java.lang.Exception
```

An exception that is thrown when an invalid icon is specified.

## See Also

- [Serialized Form](../../../../serialized-form.md)

## Constructor Summary

| Constructor and Description |
|---------------------|
| `PHXNoSuchIconException(java.lang.String name)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `getInvalidIcon()`<br>Retrieves the name that was invalid |

### Methods inherited from class java.lang.Throwable

`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXNoSuchIconException

```
public PHXNoSuchIconException(java.lang.String name)
```

**Parameters:**
- `name` - The name that had no icon

## Method Detail

### getInvalidIcon

```
public java.lang.String getInvalidIcon()
```
Retrieves the name that was invalid

**Returns:**
- The invalid name