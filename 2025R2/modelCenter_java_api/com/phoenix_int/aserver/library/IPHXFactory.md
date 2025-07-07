# Interface: IPHXFactory

**Package:** `com.phoenix_int.aserver.library`

---

**Declaration**

```java
public interface IPHXFactory
```

A factory is a class that has the logic for turning a file on disk into a real component instance and for retrieving component meta data.

> **Deprecated**: It is preferred to use `IPHXFactory2`, as this class has methods that can leak resources.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| [`PHXComponentDescription`](../PHXComponentDescription.md) | `describe(java.io.File dir, java.lang.String compClass, java.lang.String virtualDir)`<br>**Deprecated.** Describes the specified component. |
| `java.io.File` | `getFileFor(java.io.File dir, java.lang.String compClass, java.lang.String virtualDir)`<br>**Deprecated.** Returns a File object which points to the file on disk which contains the implementation of this component. |
| [`IPHXComponent`](../IPHXComponent.md) | `instantiate(java.io.File dir, java.lang.String compClass, java.lang.String virtualDir)`<br>**Deprecated.** It is preferred to use `IPHXFactory2.instantiateManaged(java.io.File, java.lang.String, java.lang.String)` as this method can lead to resource leaks. |
| `java.util.Collection` | `listComponents(java.io.File dir, java.lang.String virtualDir)`<br>**Deprecated.** List out all of the identifiers (historically "class" names) for a given directory as a collection of strings. |

## Method Detail

### listComponents

```java
java.util.Collection listComponents(java.io.File dir,
                                    java.lang.String virtualDir)
```

> **Deprecated.** List out all of the identifiers (historically "class" names) for a given directory as a collection of strings.

Much of the documentation was added to this class retroactively and may make assumptions or have other unknown limitations.

**Parameters:**
- `dir` - a directory to search for components
- `virtualDir` - the virtual directory to search

**Returns:**
- an array of "class" names. For non-jar factories, this just means any sub-file identifier. Because a file can have multiple components (at least jars can) this text is used to identify them. This text is later fed back to this API via the other three methods in this interface. So really it just was a list of text that identify sub-components inside a single file. Even though this is generic and not enforced by the compiler only lists of strings should be used.

### instantiate

```java
@Deprecated
IPHXComponent instantiate(java.io.File dir,
                          java.lang.String compClass,
                          java.lang.String virtualDir)
                   throws java.lang.ClassNotFoundException,
                          java.lang.IllegalAccessException,
                          java.lang.InstantiationException,
                          java.lang.reflect.InvocationTargetException,
                          PHXServerSideException,
                          java.net.MalformedURLException,
                          java.io.IOException,
                          com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException
```

> **Deprecated.** It is preferred to use `IPHXFactory2.instantiateManaged(java.io.File, java.lang.String, java.lang.String)` as this method can lead to resource leaks. Creates an instance of the specified component.

**Parameters:**
- `dir` - a directory to search for components
- `compClass` - the component class identifier
- `virtualDir` - the virtual directory

**Returns:**
- an instance of the specified component class

**Throws:**
- `java.lang.ClassNotFoundException` - if the specified class does not exist
- `java.lang.IllegalAccessException` - the class can't be instantiated
- `java.lang.InstantiationException` - the class can't be instantiated
- `java.lang.reflect.InvocationTargetException` - if an exception occurs while instantiating the specified class
- [`PHXServerSideException`](../client/PHXServerSideException.md)
- `java.net.MalformedURLException`
- `java.io.IOException`
- `com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException`

### describe

```java
PHXComponentDescription describe(java.io.File dir,
                                 java.lang.String compClass,
                                 java.lang.String virtualDir)
                          throws java.lang.ClassNotFoundException,
                                 java.io.IOException,
                                 PHXServerSideException,
                                 java.net.MalformedURLException
```

> **Deprecated.** Describes the specified component. Should throw `ClassNotFoundException` if unable to handle/parse the given file.

Much of the documentation was added to this class retroactively and may make assumptions or have other unknown limitations.

**Parameters:**
- `dir` - the path on disk to the file to be described
- `compClass` - This is the same "class" string that was returned by the `listComponents` method. This usually is not a class name, but it was originally but expanded beyond that -- it seems now just to be the identifier that exceeds the file name (like a file that implements multiple components).
- `virtualDir` - the virtual directory

**Returns:**
- an instance of the specified component class

**Throws:**
- `java.lang.ClassNotFoundException` - thrown if the class is not found, or the given factory is not able to handle this file. Callers of this method often expect this exception if the factory cannot handle the given file/compClass(id).
- `java.io.IOException`
- [`PHXServerSideException`](../client/PHXServerSideException.md)
- `java.net.MalformedURLException`

### getFileFor

```java
java.io.File getFileFor(java.io.File dir,
                        java.lang.String compClass,
                        java.lang.String virtualDir)
                 throws java.lang.ClassNotFoundException,
                        java.io.IOException
```

> **Deprecated.** Returns a File object which points to the file on disk which contains the implementation of this component.

**Parameters:**
- `dir` - the directory containing the component
- `compClass` - the component class identifier
- `virtualDir` - the virtual directory

**Returns:**
- a File object pointing to the implementation file

**Throws:**
- `java.lang.ClassNotFoundException`
- `java.io.IOException`

