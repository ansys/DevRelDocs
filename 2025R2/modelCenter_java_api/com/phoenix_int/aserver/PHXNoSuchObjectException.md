# Class: PHXNoSuchObjectException

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ com.phoenix_int.aserver.PHXNoSuchObjectException
```

**Implemented Interfaces**
- `java.io.Serializable`

**Direct Known Subclasses:**
- [PHXNoSuchWriteableObjectException](PHXNoSuchWriteableObjectException.md)

**Declaration**
```java
public class PHXNoSuchObjectException
extends java.lang.Exception
```

An exception that is thrown when an object cannot be found.

## Constructor Summary

| Modifier    | Constructor and Description |
|-------------|----------------------------|
| `protected` | `PHXNoSuchObjectException(int i, java.lang.String msg)` |
|             | `PHXNoSuchObjectException(java.lang.String object)` |

## Method Summary

| Modifier and Type    | Method and Description |
|---------------------|----------------------|
| `java.lang.String`  | `getInvalidObject()`<br>Retrieves the object name that was invalid. |

### Methods inherited from class java.lang.Throwable
`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`

## Constructor Detail

### PHXNoSuchObjectException
```java
protected PHXNoSuchObjectException(int i, java.lang.String msg)
```

### PHXNoSuchObjectException
```java
public PHXNoSuchObjectException(java.lang.String object)
```
**Parameters:**
- `object` - the object name that caused the exception.

## Method Detail

### getInvalidObject
```java
public java.lang.String getInvalidObject()
```
Retrieves the object name that was invalid.

**Returns:**
- the invalid object name