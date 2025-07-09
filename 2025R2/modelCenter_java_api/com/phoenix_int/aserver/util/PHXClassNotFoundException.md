# Class: PHXClassNotFoundException

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ java.lang.ReflectiveOperationException
        ↳ java.lang.ClassNotFoundException
          ↳ com.phoenix_int.aserver.util.PHXClassNotFoundException
```

**Implemented Interfaces**

- `java.io.Serializable`

--- 

**Declaration**

```
public class PHXClassNotFoundException
extends java.lang.ClassNotFoundException
```

Simple wrapper for ClassNotFoundException which can contain additional logging info.

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXClassNotFoundException()`<br>Creates a new instance of PHXClassNotFoundException |
| `PHXClassNotFoundException(java.lang.String message)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `addException(java.lang.Exception e)` |
| `java.util.Iterator` | `getExceptions()` |

### Methods inherited from class java.lang.ClassNotFoundException
`getCause`, `getException`

### Methods inherited from class java.lang.Throwable
`addSuppressed`, `fillInStackTrace`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXClassNotFoundException

```
public PHXClassNotFoundException()
```
Creates a new instance of PHXClassNotFoundException

### PHXClassNotFoundException

```
public PHXClassNotFoundException(java.lang.String message)
```

## Method Detail

### addException

```
public void addException(java.lang.Exception e)
```

### getExceptions

```
public java.util.Iterator getExceptions()
```