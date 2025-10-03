# Class: PHXVersionException

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ com.phoenix_int.aserver.util.scriptwrapper.api.PHXVersionException
```

**Implemented Interfaces**

- `java.io.Serializable`

--- 

**Declaration**

```java
public class PHXVersionException
extends java.lang.Exception
```

## Constructor Summary

| Constructor and Description |
|---------------------|
| `PHXVersionException(int requiredMajorVersion, int requiredMinorVersion, int foundMajorVersion, int foundMinorVersion)`<br>Creates a new instance of PHXVersionException |

## Method Summary

### Methods inherited from class java.lang.Throwable
`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString` 

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXVersionException

```java
public PHXVersionException(int requiredMajorVersion,
                           int requiredMinorVersion,
                           int foundMajorVersion,
                           int foundMinorVersion)
```

Creates a new instance of `PHXVersionException`