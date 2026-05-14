# Class: PHXGetByUrlException

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ com.phoenix_int.aserver.util.PHXGetByUrlException
```

**Implemented Interfaces**

- `java.io.Serializable`

--- 

**Declaration**

```java
public class PHXGetByUrlException
extends java.lang.Exception
```

An exception that is thrown when encountering an error getting a file's contents via url

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXGetByUrlException(java.lang.String reason)`<br>Constructor. |
| `PHXGetByUrlException(java.lang.String reason, java.lang.Throwable inner)`<br>Constructor. |

## Method Summary

### Methods inherited from class java.lang.Throwable
`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXGetByUrlException

```java
public PHXGetByUrlException(java.lang.String reason)
```
Constructor. Builds a combined string for the message about get by url failing with an inner reason.

**Parameters:**
- `reason` - The reason get by url failed

### PHXGetByUrlException

```java
public PHXGetByUrlException(java.lang.String reason, 
                            java.lang.Throwable inner)
```
Constructor. Builds a combined string for the message about get by url failing with an inner reason.

**Parameters:**
- `reason` - The reason get by url failed
- `inner` - Any inner exceptions