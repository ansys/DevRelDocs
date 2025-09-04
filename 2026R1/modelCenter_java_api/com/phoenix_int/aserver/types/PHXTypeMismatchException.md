# Class PHXTypeMismatchException


**Package:** `com.phoenix_int.aserver.types`

```
↳ java.lang.Object
  ↳ java.lang.Throwable
    ↳ java.lang.Exception
      ↳ com.phoenix_int.aserver.types.PHXTypeMismatchException
```

**All Implemented Interfaces:**
- java.io.Serializable

---

```java
public class PHXTypeMismatchException
extends java.lang.Exception
```

An exception thrown when trying to set a value using an incompatible type, or when trying to compare two values of incompatible types

**See Also:**
- [Serialized Form](../../../../serialized-form.md)

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXTypeMismatchException(java.lang.String givenType, java.lang.String expectedType)`<br>Create an exception for attempting to compare two values of incompatible types |
| `PHXTypeMismatchException(java.lang.String name, java.lang.String type, java.lang.String expectedType)`<br>Create an exception for attempting to set a value using an incompatible type |
| `PHXTypeMismatchException(java.lang.String givenType, java.lang.String expectedType, java.lang.Throwable cause)`<br>Create an exception for attempting to compare two values of incompatible types |

## Method Summary

### Methods inherited from class java.lang.Throwable
`addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXTypeMismatchException

```java
public PHXTypeMismatchException(java.lang.String name,
                                java.lang.String type,
                                java.lang.String expectedType)
```

Create an exception for attempting to set a value using an incompatible type

**Parameters:**
- `name` - the name of the variable where the error occurred
- `type` - the bad type
- `expectedType` - the type that should have been used

### PHXTypeMismatchException

```java
public PHXTypeMismatchException(java.lang.String givenType,
                                java.lang.String expectedType)
```

Create an exception for attempting to compare two values of incompatible types

**Parameters:**
- `givenType` - the bad type that was passed to the comparator
- `expectedType` - the type expected by the comparator

### PHXTypeMismatchException

```java
public PHXTypeMismatchException(java.lang.String givenType,
                                java.lang.String expectedType,
                                java.lang.Throwable cause)
```

Create an exception for attempting to compare two values of incompatible types

**Parameters:**
- `givenType` - the bad type that was passed to the comparator
- `expectedType` - the type expected by the comparator
- `cause` - exception which caused this exception to be thrown
