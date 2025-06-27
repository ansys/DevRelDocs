======== START OF CLASS DATA ========
com.phoenix_int.aserver.library
## Class PHXNoSuchCategoryException
- java.lang.Object
- - java.lang.Throwable
- - java.lang.Exception
- - com.phoenix_int.aserver.library.PHXNoSuchCategoryException
- **All Implemented Interfaces:**
: java.io.Serializable

---

```java
public class PHXNoSuchCategoryException
extends java.lang.Exception
```
An exception that is thrown when an invalid class category
 is specified.
**See Also:**
: [Serialized Form](../../../../serialized-form.html#com.phoenix_int.aserver.library.PHXNoSuchCategoryException)- ======== CONSTRUCTOR SUMMARY ========
- ### Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXNoSuchCategoryException(java.lang.String category)` |
| `PHXNoSuchCategoryException(java.lang.String msg,
                          java.lang.String category)`Constructor for this exception containing both a specific message and the category
 which could not be found. |
| `PHXNoSuchCategoryException(java.lang.String msg,
                          java.lang.String category,
                          java.lang.Exception ex)`Constructor which takes a message, a category, and an inner exception. |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `java.lang.String` | `getInvalidCategory()`retrieves the category name that was invalid |

- ### Methods inherited from class java.lang.Throwable
`addSuppressed, fillInStackTrace, getCause, getLocalizedMessage, getMessage, getStackTrace, getSuppressed, initCause, printStackTrace, printStackTrace, printStackTrace, setStackTrace, toString`

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXNoSuchCategoryException

```java
public PHXNoSuchCategoryException(java.lang.String category)
```

**Parameters:**
: `category`- the category name that was invalid

- #### PHXNoSuchCategoryException

```java
public PHXNoSuchCategoryException(java.lang.String msg,
                                  java.lang.String category)
```
Constructor for this exception containing both a specific message and the category
 which could not be found.
**Parameters:**
: `msg`- - The message associated with this exception.
: `category`- - The category which couldn't be found.

- #### PHXNoSuchCategoryException

```java
public PHXNoSuchCategoryException(java.lang.String msg,
                                  java.lang.String category,
                                  java.lang.Exception ex)
```
Constructor which takes a message, a category, and an inner exception.
**Parameters:**
: `msg`- - The message associated with this specific exception.
: `category`- - The category which could not be found.
: `ex`- - The inner exception.
============ METHOD DETAIL ==========
- ### Method Detail

- #### getInvalidCategory

```java
public java.lang.String getInvalidCategory()
```
retrieves the category name that was invalid
**Returns:**
: the invalid category name
========= END OF CLASS DATA =========