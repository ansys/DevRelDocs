# Class: PHXServerSideException

**Package:** `com.phoenix_int.aserver.client`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ com.phoenix_int.aserver.client.PHXServerSideException
```

**Implemented Interfaces**

- `java.io.Serializable`

**Declaration**

```
public class PHXServerSideException
extends java.lang.Exception
```

An exception that is thrown when an error is returned from the server.

**See Also:**
- [Serialized Form](../../../../serialized-form.md)

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXServerSideException(java.lang.String msg)` |

## Method Summary

### Methods inherited from class java.lang.Throwable
`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString``

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXServerSideException
```
public PHXServerSideException(java.lang.String msg)
```
Constructor

**Parameters:**
- `msg` - the error text from the server