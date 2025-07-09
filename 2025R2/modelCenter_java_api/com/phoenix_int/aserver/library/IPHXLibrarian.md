# Interface: IPHXLibrarian

**Package:** `com.phoenix_int.aserver.library`

**All Known Subinterfaces:**
- [`IPHXVersionedLibrarian`](IPHXVersionedLibrarian.md)
- [`IPHXVersionedLibrarian2`](IPHXVersionedLibrarian2.md)

**All Known Implementing Classes:**
- [`PHXCVSLibrarian`](PHXCVSLibrarian.md)
- [`PHXDirectoryLibrarian`](PHXDirectoryLibrarian.md)
- [`PHXLibrarianCombiner`](PHXLibrarianCombiner.md)
- [`PHXLibrarianMounter`](PHXLibrarianMounter.md)
- [`PHXUserDirLibrarian`](PHXUserDirLibrarian.md)

---

**Declaration**

```
@Deprecated
public interface IPHXLibrarian
```

**Deprecated**: It is preferred to use `IPHXLibrarian2` as this class uses methods that can leak resources.

This is an interface for classes that manage a directory hierarchy of available components. An instance of this class is generated for each incoming connection.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `cleanUp()`<br>**Deprecated.** Tells this librarian to clean up any resources used. |
| [`PHXComponentDescription`](../PHXComponentDescription.md) | `describe(java.lang.String compClass, java.lang.String virtualDirName)`<br>**Deprecated.** Describes the specified component. |
| `java.lang.String` | `getQueues(java.lang.String compClass, java.lang.String virtualDirName)`<br>**Deprecated.** Gets the available run queues. |
| `void` | `initialize(com.phoenix_int.aserver.ascore.PHXConnection connection, [`IPHXFactory`](IPHXFactory.md) factories, com.phoenix_int.aserver.ascore.PHXAServerArgs args, org.w3c.dom.Node xmlOptions)`<br>**Deprecated.** Tells this librarian to configure itself based on the XML node passed in. |
| [`IPHXComponent`](../IPHXComponent.md) | `instantiate(java.lang.String compClass, java.lang.String virtualDirName)`<br>**Deprecated.** |
| [`IPHXComponent`](../IPHXComponent.md) | `instantiate(java.lang.String compClass, java.lang.String virtualDirName, java.lang.String connector, java.lang.String queue)`<br>**Deprecated.** |
| `java.util.Collection` | `listComponents(java.lang.String virtualDirName)`<br>**Deprecated.** Lists components within a specified directory. |
| `java.util.Collection` | `listDirectories(java.lang.String virtualDir)`<br>**Deprecated.** Lists any available sub-directories from a particular directory. |

## Method Detail

### initialize

```
void initialize(com.phoenix_int.aserver.ascore.PHXConnection connection,
                IPHXFactory factories,
                com.phoenix_int.aserver.ascore.PHXAServerArgs args,
                org.w3c.dom.Node xmlOptions)
         throws java.lang.Exception
```

**Deprecated.** Tells this librarian to configure itself based on the XML node passed in. The XML node should be a `<librarianOptions>` node whose format is specific to the particular type of librarian.

**Throws:**
- `java.lang.Exception`

### cleanUp

```
void cleanUp()
```

**Deprecated.** Tells this librarian to clean up any resources used.

### listComponents

```
java.util.Collection listComponents(java.lang.String virtualDirName)
                             throws PHXNoSuchCategoryException, 
                                    com.phoenix_int.aserver.security.PHXAccessDeniedException
```

**Deprecated.** Lists components within a specified directory.

**Parameters:**
- `virtualDirName` - The directory the client asked for

**Returns:**
- a Collection of Strings

**Throws:**
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md)
- com.phoenix_int.aserver.security.PHXAccessDeniedException

### listDirectories

```
java.util.Collection listDirectories(java.lang.String virtualDir)
                              throws PHXNoSuchCategoryException, 
                                     com.phoenix_int.aserver.security.PHXAccessDeniedException
```

**Deprecated.** Lists any available sub-directories from a particular directory.

**Parameters:**
- `virtualDir` - The directory the client asked for

**Returns:**
- a Collection of Strings

**Throws:**
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md)
- com.phoenix_int.aserver.security.PHXAccessDeniedException

### instantiate

```
@Deprecated
IPHXComponent instantiate(java.lang.String compClass,
                          java.lang.String virtualDirName)
                   throws java.lang.Exception
```

**Deprecated.** Creates an instance of the specified component. Typically a librarian will find the appropriate files and pass the request off to the [`IPHXFactory`](IPHXFactory.md).
It is important that this class throws [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) and ClassNotFoundException in the appropriate cases as they are handled in special ways by the librarian mounter and librarian combiner.

**Parameters:**
- `compClass` - the class name for the component
- `virtualDirName` - The directory the client asked for

**Returns:**
- an instance of the specified component class

**Throws:**
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) - If the virtualDirName passed in is invalid
- `java.lang.ClassNotFoundException` - If compClass doesn't indicate a valid class for the specified directory
- `java.lang.Exception` - If anything serious goes wrong

### instantiate

```
@Deprecated
IPHXComponent instantiate(java.lang.String compClass,
                          java.lang.String virtualDirName,
                          java.lang.String connector,
                          java.lang.String queue)
                   throws java.lang.Exception
```

**Deprecated.**

**Throws:**
- `java.lang.Exception`

### describe

```
PHXComponentDescription describe(java.lang.String compClass,
                                 java.lang.String virtualDirName)
                          throws java.lang.Exception
```

**Deprecated.** Describes the specified component. It is important that this class throws [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) and `ClassNotFoundException` in the appropriate cases as they are handled in special ways by the librarian mounter and librarian combiner.

**Parameters:**
- `compClass` - the class name for the component
- `virtualDirName` - The directory the client asked for

**Returns:**
- a description of the specified component class

**Throws:**
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.ClassNotFoundException` - If `compClass` doesn't indicate a valid class for the specified directory
- `java.lang.Exception` - If anything goes wrong

### getQueues

```
java.lang.String getQueues(java.lang.String compClass,
                           java.lang.String virtualDirName)
                    throws java.lang.Exception
```

**Deprecated.** Gets the available run queues. It is important that this class throws [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) and `ClassNotFoundException` in the appropriate cases as they are handled in special ways by the librarian mounter and librarian combiner.

**Parameters:**
- `compClass` - the class name for the component
- `virtualDirName` - The directory the client asked for

**Returns:**
- a list of queues for the specified component class

**Throws:**
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.ClassNotFoundException` - If `compClass` doesn't indicate a valid class for the specified directory
- `java.lang.Exception` - If anything goes wrong


