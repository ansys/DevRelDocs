# Class: PHXInvalidNameException

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ com.phoenix_int.aserver.PHXInvalidNameException
```

**Implemented Interfaces**
- `java.io.Serializable`

**Declaration**
```
public class PHXInvalidNameException
extends java.lang.Exception
```

An exception that is thrown when trying to create a new object using an invalid name.

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXInvalidNameException(java.lang.String name)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `static void` | `checkGroup(java.lang.String name)`<br>Checks a name to see if it's valid. |
| `static void` | `checkName(java.lang.String name)`<br>Checks a name to see if it's valid. |

### Methods inherited from class java.lang.Throwable
`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`

## Constructor Detail

### PHXInvalidNameException
```
public PHXInvalidNameException(java.lang.String name)
```
**Parameters:**
- `name` - the name that was already in use

## Method Detail

### checkName
```
public static void checkName(java.lang.String name)
                      throws PHXInvalidNameException
```
Checks a name to see if it's valid.
