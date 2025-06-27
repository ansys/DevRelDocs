# Class: ProcessHaltedException

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ java.io.IOException
        ↳ com.phoenix_int.aserver.ProcessHaltedException
```

**Implemented Interfaces**
- `java.io.Serializable`

**Declaration**
```java
public class ProcessHaltedException
    extends java.io.IOException
```

Exception indicating that the request cannot be handled because the associated process was halted.

## Method Summary

### Methods inherited from class java.lang.Throwable
`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`