======== START OF CLASS DATA ========
com.phoenix_int.aserver.library
## Class PHXNoSuchIconException
- java.lang.Object
- - java.lang.Throwable
- - java.lang.Exception
- - com.phoenix_int.aserver.library.PHXNoSuchIconException
- **All Implemented Interfaces:**
: java.io.Serializable

---

```java
public class PHXNoSuchIconException
extends java.lang.Exception
```
An exception that is thrown when an invalid icon
 is specified.
**See Also:**
: [Serialized Form](../../../../serialized-form.html#com.phoenix_int.aserver.library.PHXNoSuchIconException)- ======== CONSTRUCTOR SUMMARY ========
- ### Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXNoSuchIconException(java.lang.String name)` |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `java.lang.String` | `getInvalidIcon()`retrieves the name that was invalid |

- ### Methods inherited from class java.lang.Throwable
`addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXNoSuchIconException

```java
public PHXNoSuchIconException(java.lang.String name)
```

**Parameters:**
: `name`- the name that had no icon
============ METHOD DETAIL ==========
- ### Method Detail

- #### getInvalidIcon

```java
public java.lang.String getInvalidIcon()
```
retrieves the name that was invalid
**Returns:**
: the invalid name
========= END OF CLASS DATA =========