# Class: PHXUserDirLibrarian

**Package:** `com.phoenix_int.aserver.library`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.library.PHXUserDirLibrarian
```

**Implemented Interfaces**

- [`IPHXLibrarian`](IPHXLibrarian.md), `IPHXLibrarian2`

---

**Declaration**

```java
public class PHXUserDirLibrarian
extends java.lang.Object
implements com.phoenix_int.aserver.library.IPHXLibrarian2
```

This librarian provides "user" directories by looking in a user path or by reading `/etc/passwd`. It looks for "public_mcre" directories inside of each user's directory and provides a "virtual" directory by the name `~<username>` if it finds one.

## Constructor Summary

| Constructor and Description |
|---------------------|
| `PHXUserDirLibrarian()` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `cleanUp()`<br>Tells this librarian to clean up any resources used. |
| [`PHXComponentDescription`](../PHXComponentDescription.md) | `describe(java.lang.String compClass, java.lang.String virtualDir)`<br>Describes the specified component. |
| `java.lang.String` | `getQueues(java.lang.String compClass, java.lang.String virtualDir)`<br>Method for getting Queues from CenterLink, MCRE just returns blank string |
| `void` | `initialize(com.phoenix_int.aserver.ascore.PHXConnection connection, IPHXFactory factories, com.phoenix_int.aserver.ascore.PHXAServerArgs args, org.w3c.dom.Node xmlOptions)`<br>There are 2 options for this class. |
| `IPHXComponent` | `instantiate(java.lang.String compClass, java.lang.String virtualDir)`<br>Creates an instance of the specified component. |
| `IPHXComponent` | `instantiate(java.lang.String compClass, java.lang.String virtualDir, java.lang.String connector, java.lang.String queue)`<br>Creates an instance of the specified component. |
| [`PHXComponentResourcePair`](../PHXComponentResourcePair.md) | `instantiateManaged(java.lang.String compClass, java.lang.String virtualDir)`<br>Creates an instance of the specified component. |
| [`PHXComponentResourcePair`](../PHXComponentResourcePair.md) | `instantiateManaged(java.lang.String compClass, java.lang.String virtualDir, java.lang.String connector, java.lang.String queue)`<br>Creates an instance of the specified component. |
| `java.util.Collection` | `listComponents(java.lang.String virtualDir)`<br>Returns the components in a specific directory |
| `java.util.Collection` | `listDirectories(java.lang.String virtualDir)`<br>Lists any available sub-directories from a particular directory |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXUserDirLibrarian

```java
public PHXUserDirLibrarian()
```

## Method Detail

### initialize

```java
public void initialize(com.phoenix_int.aserver.ascore.PHXConnection connection,
                       IPHXFactory factories,
                       com.phoenix_int.aserver.ascore.PHXAServerArgs args,
                       org.w3c.dom.Node xmlOptions)
                throws java.lang.Exception
```
There are 2 options for this class. The first is `userPath`, which is a semi-colon separated list of paths to search. Each path will be searched for public_mcre directories ONE LEVEL DEEP from the specified directory. The other option is `smartUserScan`, which tells this class to try and read the user's home directories from `/etc/passwd`.

The XML format is:

```java
 <librarianOptions>
  <userPath>path1/here;path2</userPath>
  <smartUserScan/>
 </librarianOption>
```
Note: the mere existence of the `smartUserScan` tag turns the option on.

**Specified By:**
- `initialize` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Throws:**
- `java.lang.Exception`

### cleanUp

```java
public void cleanUp()
```
Tells this librarian to clean up any resources used.

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
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md)
- `com.phoenix_int.aserver.security.PHXAccessDeniedException`

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
                                 java.lang.String virtualDir,
                                 java.lang.String connector,
                                 java.lang.String queue)
                          throws java.lang.Exception
```
Creates an instance of the specified component.

**Specified By:**
- `instantiate` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `compClass` - The class name for the component
- `virtualDir` - The directory to search for the component class
- `connector` - Name of the connector object to use
- `queue` - Name of the queue object to use

**Returns:**
- An instance of the associated component class with the file loaded

**Throws:**
- `java.lang.ClassNotFoundException` - if the class is not found
- `java.lang.IllegalAccessException` - cannot call constructor
- `java.lang.InstantiationException` - cannot call constructor
- `java.lang.reflect.InvocationTargetException` - if an exception if the specified component exists, but is not of the right type, or if an exception occurs while creating the class or loading the setup file
- `java.lang.Exception`

### instantiate (overload)

```java
public IPHXComponent instantiate(java.lang.String compClass,
                                 java.lang.String virtualDir)
                          throws java.lang.Exception
```
Creates an instance of the specified component. Typically a librarian will find the appropriate files and pass the request off to the [`IPHXFactory`](IPHXFactory.md).

It is important that this class throws [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) and `ClassNotFoundException` in the appropriate cases as they are handled in special ways by the librarian mounter and librarian combiner.

**Specified By:**
- `instantiate` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `compClass` - The class name for the component
- `virtualDir` - The directory the client asked for

**Returns:**
- An instance of the specified component class

**Throws:**
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.ClassNotFoundException` - If `compClass` doesn't indicate a valid class for the specified directory
- `java.lang.Exception` - If anything serious goes wrong

### instantiateManaged

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

### instantiateManaged (overload)

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
- `virtualDir` - The directory to search for the component class

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
Method for getting Queues from CenterLink, MCRE just returns blank string

**Specified By:**
- `getQueues` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `compClass` - The class name for the component
- `virtualDir` - The directory the client asked for

**Returns:**
- A list of queues for the specified component class

**Throws:**
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.ClassNotFoundException` - If `compClass` doesn't indicate a valid class for the specified directory
- `java.lang.Exception` - If anything goes wrong