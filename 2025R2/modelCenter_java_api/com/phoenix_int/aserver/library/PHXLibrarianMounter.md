# Class: PHXLibrarianMounter

**Package:** `com.phoenix_int.aserver.library`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.library.PHXLibrarianMounter
```

**Implemented Interfaces**

- [`IPHXLibrarian`](IPHXLibrarian.md), [`IPHXLibrarian2`](IPHXLibrarian2.md), [`IPHXVersionedLibrarian`](IPHXVersionedLibrarian.md), [`IPHXVersionedLibrarian2`](IPHXVersionedLibrarian2.md), `IPHXVersionedLibrarian3`

--- 

**Declaration**

```java
public class PHXLibrarianMounter
extends java.lang.Object
implements com.phoenix_int.aserver.library.IPHXVersionedLibrarian3
```

This class has the functionality of providing a "virtual" directory tree where different sub-librarians can be mounted very similarly to the UNIX concept of mounting filesystems. When a librarian is mounted to a particular location, any components and directories that are available via a librarian mounted higher up in the directory tree are hidden.

This class will automatically add empty directories as necessary to ensure that you can "browse" to a mount point. For example, if you have not mounted anything to the root ("" or "/"), you can still mount to a subdirectory like "mount/here" and this class will create the empty directory "mount".

Only one librarian can be mounted in a given location. Use a [`PHXLibrarianCombiner`](PHXLibrarianCombiner.md) to put multiple librarians in the same place.

## Constructor Summary

| Constructor and Description |
|---------------------|
| `PHXLibrarianMounter()` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `addLibrarian(java.lang.String mountPoint, IPHXLibrarian l)`<br>Creates a librarian mount. |
| `void` | `cleanUp()`<br>Recursively calls cleanUp on all our mount points |
| [`PHXComponentDescription`](../PHXComponentDescription.md) | `describe(java.lang.String compClass, java.lang.String virtualDir)`<br>Describes the specified component. |
| `java.lang.String` | `getBranchesAndTags()`<br>Fetches a list of all branches and tags |
| [`PHXComponentBranch`](../PHXComponentBranch.md) | `getComponentHistory(java.lang.String compClass, java.lang.String virtualDir)`<br>Gets all version information about a particular component |
| `java.lang.String` | `getQueues(java.lang.String compClass, java.lang.String virtualDir)`<br>Gets queues for the specified component. |
| `void` | `initialize(com.phoenix_int.aserver.ascore.PHXConnection connection, IPHXFactory factories, com.phoenix_int.aserver.ascore.PHXAServerArgs args, org.w3c.dom.Node xmlOptions)`<br>The XML initialization information for this class is simply a list of <librarian> tags which contain <className>, <mountPoint>, and <librarianOptions> tags inside. |
| `IPHXComponent` | `instantiate(java.lang.String compClass, java.lang.String virtualDir)`<br>Creates an instance of the specified component. |
| `IPHXComponent` | `instantiate(java.lang.String compClass, java.lang.String virtualDir, java.lang.String connector, java.lang.String queue)` |
| [`PHXComponentResourcePair`](../PHXComponentResourcePair.md) | `instantiateManaged(java.lang.String compClass, java.lang.String virtualDir)`<br>Creates an instance of the specified component. |
| [`PHXComponentResourcePair`](../PHXComponentResourcePair.md) | `instantiateManaged(java.lang.String compClass, java.lang.String virtualDir, java.lang.String connector, java.lang.String queue)`<br>Creates an instance of the specified component. |
| `java.util.Collection` | `listComponents(java.lang.String virtualDir)`<br>Returns the components in a specific directory |
| `java.util.Collection` | `listDirectories(java.lang.String virtualDir)`<br>Lists any available sub-directories from a particular directory |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXLibrarianMounter

```java
public PHXLibrarianMounter()
```

## Method Detail

### addLibrarian

```java
public void addLibrarian(java.lang.String mountPoint,
                         IPHXLibrarian l)
```
Creates a librarian mount.

### initialize

```java
public void initialize(com.phoenix_int.aserver.ascore.PHXConnection connection,
                       IPHXFactory factories,
                       com.phoenix_int.aserver.ascore.PHXAServerArgs args,
                       org.w3c.dom.Node xmlOptions)
```
The XML initialization information for this class is simply a list of `<librarian>` tags which contain `<className>`, `<mountPoint>`, and `<librarianOptions>` tags inside.

Example:

```java
 <librarianOptions>
  <librarian>
   <mountPoint>/mounthere</mountPoint>
   <className>com.phoenix_int.aserver.library.PHXDirectoryLibrarian</className>
   <librarianOptions> ... </librarianOptions>
  </librarian>
  <librarian>
   ....
  </librarian>
 </librarianOptions>
```

**Specified By:**
- `initialize` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

### cleanUp

```java
public void cleanUp()
```
Recursively calls cleanUp on all our mount points

**Specified By:**
- `cleanUp` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

### listComponents

```java
public java.util.Collection listComponents(java.lang.String virtualDir)
                                    throws PHXNoSuchCategoryException,
                                           com.phoenix_int.aserver.security.PHXAccessDeniedException
```
Returns the components in a specific directory

**Specified By:**
- `listComponents` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `virtualDir` - The directory the client asked for

**Returns:**
- An array of class names

**Throws:**
- `com.phoenix_int.aserver.security.PHXAccessDeniedException` - if the directory could not be scanned
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md)

### listDirectories

```java
public java.util.Collection listDirectories(java.lang.String virtualDir)
                                     throws PHXNoSuchCategoryException,
                                            com.phoenix_int.aserver.security.PHXAccessDeniedException
```
Lists any available sub-directories from a particular directory

**Specified By:**
- `listDirectories` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `virtualDir` - The directory the client asked for

**Returns:**
- A Collection of Strings

**Throws:**
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md)
- `com.phoenix_int.aserver.security.PHXAccessDeniedException`

### instantiate

```java
public IPHXComponent instantiate(java.lang.String compClass,
                                 java.lang.String virtualDir)
                          throws java.lang.Exception
```
Creates an instance of the specified component.

**Specified By:**
- `instantiate` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `compClass` - The class name for the component
- `virtualDir` - The directory to search for the component class

**Returns:**
- An instance of the associated component class with the file loaded

**Throws:**
- `java.lang.ClassNotFoundException` - if the class is not found
- `java.lang.IllegalAccessException` - cannot call constructor
- `java.lang.InstantiationException` - cannot call constructor
- `java.lang.reflect.InvocationTargetException` - if an exception if the specified component exists, but is not of the right type, or if an exception occurs while creating the class or loading the setup file
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.Exception` - If anything serious goes wrong

### instantiate (overload)

```java
public IPHXComponent instantiate(java.lang.String compClass,
                                 java.lang.String virtualDir,
                                 java.lang.String connector,
                                 java.lang.String queue)
                          throws java.lang.Exception
```
**Specified By:**
- `instantiate` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Throws:**
- `java.lang.Exception`

### instantiateManaged

```java
public com.phoenix_int.aserver.PHXComponentResourcePair instantiateManaged(java.lang.String compClass,
                                                                           java.lang.String virtualDir)
                                                                    throws java.lang.Exception
```
Creates an instance of the specified component. Typically a librarian will find the appropriate files and pass the request off to the [`IPHXFactory`](IPHXFactory.md).

It is important that this class throws [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) and `ClassNotFoundException` in the appropriate cases as they are handled in special ways by the librarian mounter and librarian combiner.

**Specified By:**
- `instantiateManaged` in interface [`IPHXLibrarian2`](IPHXLibrarian2.md)

**Parameters:**
- `compClass` - The class name for the component
- `virtualDir` - The directory the client asked for

**Returns:**
- An instance of the specified component class and its managed resources ([`PHXComponentResourcePair`](../PHXComponentResourcePair.md))

**Throws:**
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.ClassNotFoundException` - If `compClass` doesn't indicate a valid class for the specified directory
- `java.lang.Exception` - If anything serious goes wrong

### instantiateManaged (overload)

```java
public com.phoenix_int.aserver.PHXComponentResourcePair instantiateManaged(java.lang.String compClass,
                                                                           java.lang.String virtualDir,
                                                                           java.lang.String connector,
                                                                           java.lang.String queue)
                                                                    throws java.lang.Exception
```
Creates an instance of the specified component. Typically a librarian will find the appropriate files and pass the request off to the [`IPHXFactory`](IPHXFactory.md).

It is important that this class throws [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) and `ClassNotFoundException` in the appropriate cases as they are handled in special ways by the librarian mounter and librarian combiner.

**Specified By:**
- `instantiateManaged` in interface [`IPHXLibrarian2`](IPHXLibrarian2.md)

**Parameters:**
- `compClass` - The class name for the component
- `virtualDir` - The directory the client asked for
- `connector` - Name of the connector object to use
- `queue` - Name of the queue object to use

**Returns:**
- An instance of the specified component class and its managed resources ([`PHXComponentResourcePair`](../PHXComponentResourcePair.md))

**Throws:**
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.ClassNotFoundException` - If `compClass` doesn't indicate a valid class for the specified directory
- `java.lang.Exception` - If anything serious goes wrong

### describe

```java
public PHXComponentDescription describe(java.lang.String compClass,
                                        java.lang.String virtualDir)
                                 throws java.lang.Exception
```
Describes the specified component.

**Specified By:**
- `describe` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `compClass` - The class name for the component
- `virtualDir` - The directory the client asked for

**Returns:**
- A description of the specified component class ([`PHXComponentDescription`](../PHXComponentDescription.md))

**Throws:**
- `java.lang.ClassNotFoundException` - if the class is not found
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.Exception` - If anything goes wrong

### getQueues

```java
public java.lang.String getQueues(java.lang.String compClass,
                                  java.lang.String virtualDir)
                           throws java.lang.Exception
```
Gets queues for the specified component.

**Specified By:**
- `getQueues` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `compClass` - The class name for the component
- `virtualDir` - The directory the client asked for

**Returns:**
- A list of queues for the specified component class

**Throws:**
- `java.lang.ClassNotFoundException` - if the class is not found
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.Exception` - If anything goes wrong

### getComponentHistory

```java
public PHXComponentBranch getComponentHistory(java.lang.String compClass,
                                              java.lang.String virtualDir)
                                       throws java.lang.Exception
```
Gets all version information about a particular component.

**Specified By:**
- `getComponentHistory` in interface [`IPHXVersionedLibrarian`](IPHXVersionedLibrarian.md)

**Parameters:**
- `compClass` - The class name for the component
- `virtualDir` - The directory the client asked for

**Returns:**
- An instance of [`PHXComponentBranch`](../PHXComponentBranch.md) which contains all the versions and sub-branches available

**Throws:**
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.ClassNotFoundException` - If `compClass` doesn't indicate a valid class for the specified directory
- `java.lang.Exception` - If anything goes wrong

### getBranchesAndTags

```java
public java.lang.String getBranchesAndTags()
                                    throws java.lang.Exception
```
Fetches a list of all branches and tags.

**Specified By:**
- `getBranchesAndTags` in interface [`IPHXVersionedLibrarian2`](IPHXVersionedLibrarian2.md)

**Throws:**
- `java.lang.Exception` - If anything goes wrong