# Class: PHXNoSuchAssociationException

**Package:** `com.phoenix_int.aserver.library`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ com.phoenix_int.aserver.library.PHXNoSuchAssociationException
```

**Implemented Interfaces**

- `java.io.Serializable`

--- 

**Declaration**

```
public class PHXNoSuchAssociationException
extends java.lang.Exception
```

An exception that is thrown when an invalid association is specified.

## See Also

- [Serialized Form](../../../../serialized-form.md)

## Constructor Summary

| Constructor and Description |
|---------------------|
| `PHXNoSuchAssociationException(java.lang.String name)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `getInvalidAssociation()`<br>Retrieves the name that was invalid |

### Methods inherited from class java.lang.Throwable

`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXNoSuchAssociationException

```
public PHXNoSuchAssociationException(java.lang.String name)
```

**Parameters:**
- `name` - The name that had no association

## Method Detail

### getInvalidAssociation

```
public java.lang.String getInvalidAssociation()
```
Retrieves the name that was invalid

**Returns:**
- The invalid name