# Class: PHXCVSLibrarian

**Package:** `com.phoenix_int.aserver.library`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.library.PHXCVSLibrarian
```

**Implemented Interfaces**

- [`IPHXLibrarian`](IPHXLibrarian.md), [`IPHXLibrarian2`](IPHXLibrarian2.md), [`IPHXVersionedLibrarian`](IPHXVersionedLibrarian.md), [`IPHXVersionedLibrarian2`](IPHXVersionedLibrarian2.md), [`IPHXVersionedLibrarian3`](IPHXVersionedLibrarian3.md)

---
**Declaration**

```
public class PHXCVSLibrarian
extends java.lang.Object
implements com.phoenix_int.aserver.library.IPHXVersionedLibrarian3
```

Implementation of [`IPHXLibrarian`](IPHXLibrarian.md) which loads files out of CVS. This class generates a directory in the scratch directory called "CVSLIB" which contains its cache data. A single copy of the latest version out of cvs is kept there for component browsing. When a component is requested with "instantiate", it generates a temp directory in CVSLIB and checks out the entire directory that contains that component into the temp dir. The temp dir gets deleted when the connection is dropped. In order to have consistent files, it figures out the commit time for the component requested, and then checks out all the files in the directory from that same date.

The required configuration parameters are defined on the [`initialize`](#initialize) method.

This class requires passwordless access to cvs and does not currently provide any access control functions (.mcre files do not work).

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXCVSLibrarian()` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | [`cleanUp`](#cleanup)<br>Delete all the temp directories |
| [`PHXComponentDescription`](../PHXComponentDescription.md) | [`describe`](#describe)(java.lang.String compClass, java.lang.String virtualDir)<br>Describes the specified component. |
| `java.lang.String` | [`getBranchesAndTags`](#getbranchesandtags)()<br>Does not support branching and tagging |
| [`PHXComponentBranch`](../PHXComponentBranch.md) | [`getComponentHistory`](#getcomponenthistory)(java.lang.String compClass, java.lang.String virtualDir)<br>Gets all version information about a particular component |
| `java.lang.String` | [`getQueues`](#getqueues)(java.lang.String compClass, java.lang.String virtualDir)<br>Method for getting Queues from CenterLink, MCRE just returns blank string |
| `void` | [`initialize`](#initialize)(com.phoenix_int.aserver.ascore.PHXConnection connection, [`IPHXFactory`](IPHXFactory.md) factories, com.phoenix_int.aserver.ascore.PHXAServerArgs args, org.w3c.dom.Node xmlOptions)<br>There are 2 options for this class. |
| [`IPHXComponent`](../IPHXComponent.md) | [`instantiate`](#instantiate)(java.lang.String compClass, java.lang.String virtualDir)<br>Creates an instance of the specified component. |
| [`IPHXComponent`](../IPHXComponent.md) | [`instantiate`](#instantiate)(java.lang.String compClass, java.lang.String virtualDir, java.lang.String connector, java.lang.String queue)<br>Creates an instance of the specified component. |
| [`PHXComponentResourcePair`](../PHXComponentResourcePair.md) | [`instantiateManaged`](#instantiatemanaged)(java.lang.String compClass, java.lang.String virtualDir)<br>Creates an instance of the specified component. |
| [`PHXComponentResourcePair`](../PHXComponentResourcePair.md) | [`instantiateManaged`](#instantiatemanaged)(java.lang.String compClass, java.lang.String virtualDir, java.lang.String connector, java.lang.String queue)<br>Creates an instance of the specified component. |
| `java.util.Collection` | [`listComponents`](#listcomponents)(java.lang.String virtualDir)<br>Returns the components in a specific directory |
| `java.util.Collection` | [`listDirectories`](#listdirectories)(java.lang.String virtualDir)<br>Lists available sub-directories for the specified path |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXCVSLibrarian

```
public PHXCVSLibrarian()
```

## Method Detail

### initialize

```
public void initialize(com.phoenix_int.aserver.ascore.PHXConnection connection,
                       IPHXFactory factories,
                       com.phoenix_int.aserver.ascore.PHXAServerArgs args,
                       org.w3c.dom.Node xmlOptions)
                throws java.lang.Exception
```
There are 2 options for this class. The CVSROOT which should be set as if you were using the command line tools and the module in CVS which is the base for all the published components. The startModule cannot be blank.

The XML format is:

```
<librarianOptions>
 <CVSROOT>pathfinder:/shared/cvs</CVSROOT>
 <startModule>analyses</startModule>
</librarianOptions>
```

**Specified by:**
- `initialize` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Throws:**
- `java.lang.Exception`

### cleanUp

```
public void cleanUp()
```
Delete all the temp directories

**Specified by:**
- `cleanUp` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

### listComponents

```
public java.util.Collection listComponents(java.lang.String virtualDir)
                                    throws PHXNoSuchCategoryException,
                                           com.phoenix_int.aserver.security.PHXAccessDeniedException
```
Returns the components in a specific directory

**Specified by:**
- `listComponents` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `virtualDir` - The directory the client asked for

**Returns:**
- an array of class names

**Throws:**
- `com.phoenix_int.aserver.security.PHXAccessDeniedException` - if the directory could not be scanned
- [`PHXNoSuchCategoryException`](../PHXNoSuchCategoryException.md)

### listDirectories

```
public java.util.Collection listDirectories(java.lang.String virtualDir)
                                     throws PHXNoSuchCategoryException,
                                            com.phoenix_int.aserver.security.PHXAccessDeniedException
```
Lists available sub-directories for the specified path

**Specified by:**
- `listDirectories` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `virtualDir` - The directory the client asked for

**Returns:**
- a Collection of Strings

**Throws:**
- [`PHXNoSuchCategoryException`](../PHXNoSuchCategoryException.md)
- `com.phoenix_int.aserver.security.PHXAccessDeniedException`

### instantiate

```
public IPHXComponent instantiate(java.lang.String compClass,
                                 java.lang.String virtualDir,
                                 java.lang.String connector,
                                 java.lang.String queue)
                          throws java.lang.ClassNotFoundException,
                                 java.lang.IllegalAccessException,
                                 java.lang.InstantiationException,
                                 java.lang.reflect.InvocationTargetException,
                                 java.io.IOException,
                                 PHXServerSideException,
                                 java.net.MalformedURLException,
                                 com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException,
                                 PHXNoSuchCategoryException
```
Creates an instance of the specified component.

**Specified by:**
- `instantiate` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `compClass` - the class name for the component
- `virtualDir` - the directory to search for the component class

**Returns:**
- an instance of the associated component class with the file loaded

**Throws:**
- `java.lang.ClassNotFoundException` - if the class is not found
- `java.lang.IllegalAccessException` - cannot call constructor
- `java.lang.InstantiationException` - cannot call constructor
- `java.lang.reflect.InvocationTargetException` - if an exception if the specified component exists, but is not of the right type, or if an exception occurs while creating the class or loading the setup file
- `java.io.IOException`
- [`PHXServerSideException`](../PHXServerSideException.md)
- `java.net.MalformedURLException`
- `com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException`
- [`PHXNoSuchCategoryException`](../PHXNoSuchCategoryException.md)

### instantiate

```
public IPHXComponent instantiate(java.lang.String compClass,
                                 java.lang.String virtualDir)
                          throws java.lang.ClassNotFoundException,
                                 java.lang.IllegalAccessException,
                                 java.lang.InstantiationException,
                                 java.lang.reflect.InvocationTargetException,
                                 java.io.IOException,
                                 PHXServerSideException,
                                 java.net.MalformedURLException,
                                 com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException,
                                 PHXNoSuchCategoryException
```
Creates an instance of the specified component. Typically a librarian will find the appropriate files and pass the request off to the [`IPHXFactory`](IPHXFactory.md). It is important that this class throws [`PHXNoSuchCategoryException`](../PHXNoSuchCategoryException.md) and ClassNotFoundException in the appropriate cases as they are handled in special ways by the librarian mounter and librarian combiner.

**Specified by:**
- `instantiate` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `compClass` - the class name for the component
- `virtualDir` - The directory the client asked for

**Returns:**
- an instance of the specified component class

**Throws:**
- `java.lang.ClassNotFoundException` - If `compClass` doesn't indicate a valid class for the specified directory
- [`PHXNoSuchCategoryException`](../PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `java.lang.reflect.InvocationTargetException`
- `java.io.IOException`
- [`PHXServerSideException`](../PHXServerSideException.md)
- `java.net.MalformedURLException`
- `com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException`

### instantiateManaged

```
public com.phoenix_int.aserver.PHXComponentResourcePair instantiateManaged(java.lang.String compClass,
                                                                           java.lang.String virtualDir,
                                                                           java.lang.String connector,
                                                                           java.lang.String queue)
                                                                    throws java.lang.ClassNotFoundException,
                                                                           java.lang.IllegalAccessException,
                                                                           java.lang.InstantiationException,
                                                                           java.lang.reflect.InvocationTargetException,
                                                                           java.io.IOException,
                                                                           PHXServerSideException,
                                                                           java.net.MalformedURLException,
                                                                           com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException,
                                                                           PHXNoSuchCategoryException
```
Creates an instance of the specified component. Typically a librarian will find the appropriate files and pass the request off to the [`IPHXFactory`](IPHXFactory.md). It is important that this class throws [`PHXNoSuchCategoryException`](../PHXNoSuchCategoryException.md) and ClassNotFoundException in the appropriate cases as they are handled in special ways by the librarian mounter and librarian combiner.

**Specified by:**
- `instantiateManaged` in interface [`IPHXLibrarian2`](IPHXLibrarian2.md)

**Parameters:**
- `compClass` - the class name for the component
- `virtualDir` - The directory the client asked for
- `connector` - name of the connector object to use
- `queue` - name of the queue object to use

**Returns:**
- an instance of the specified component class and its managed resources

**Throws:**
- `java.lang.ClassNotFoundException` - If `compClass` doesn't indicate a valid class for the specified directory
- [`PHXNoSuchCategoryException`](../PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `java.lang.reflect.InvocationTargetException`
- `java.io.IOException`
- [`PHXServerSideException`](../PHXServerSideException.md)
- `java.net.MalformedURLException`
- `com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException`

### instantiateManaged

```
public com.phoenix_int.aserver.PHXComponentResourcePair instantiateManaged(java.lang.String compClass,
                                                                           java.lang.String virtualDir)
                                                                    throws java.lang.ClassNotFoundException,
                                                                           java.lang.IllegalAccessException,
                                                                           java.lang.InstantiationException,
                                                                           java.lang.reflect.InvocationTargetException,
                                                                           java.io.IOException,
                                                                           PHXServerSideException,
                                                                           java.net.MalformedURLException,
                                                                           com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException,
                                                                           PHXNoSuchCategoryException
```
Creates an instance of the specified component. Typically a librarian will find the appropriate files and pass the request off to the [`IPHXFactory`](IPHXFactory.md). It is important that this class throws [`PHXNoSuchCategoryException`](../PHXNoSuchCategoryException.md) and ClassNotFoundException in the appropriate cases as they are handled in special ways by the librarian mounter and librarian combiner.

**Specified by:**
- `instantiateManaged` in interface [`IPHXLibrarian2`](IPHXLibrarian2.md)

**Parameters:**
- `compClass` - the class name for the component
- `virtualDir` - The directory the client asked for

**Returns:**
- an instance of the specified component class and its managed resources

**Throws:**
- `java.lang.ClassNotFoundException` - If `compClass` doesn't indicate a valid class for the specified directory
- [`PHXNoSuchCategoryException`](../PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `java.lang.reflect.InvocationTargetException`
- `java.io.IOException`
- [`PHXServerSideException`](../PHXServerSideException.md)
- `java.net.MalformedURLException`
- `com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException`

### getComponentHistory

```
public PHXComponentBranch getComponentHistory(java.lang.String compClass,
                                              java.lang.String virtualDir)
                                       throws java.lang.ClassNotFoundException,
                                              PHXNoSuchCategoryException,
                                              java.io.IOException
```
Gets all version information about a particular component. It is important that this class throws [`PHXNoSuchCategoryException`](../PHXNoSuchCategoryException.md) and `ClassNotFoundException` in the appropriate cases as they are handled in special ways by the librarian mounter and librarian combiner.

**Specified by:**
- `getComponentHistory` in interface [`IPHXVersionedLibrarian`](IPHXVersionedLibrarian.md)

**Parameters:**
- `compClass` - the class name for the component
- `virtualDir` - The directory the client asked for

**Returns:**
- An instance of [`PHXComponentBranch`](../PHXComponentBranch.md) which contains all the versions and sub-branches available

**Throws:**
- `java.lang.ClassNotFoundException` - If `compClass` doesn't indicate a valid class for the specified directory
- [`PHXNoSuchCategoryException`](../PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.io.IOException`

### describe

```
public PHXComponentDescription describe(java.lang.String compClass,
                                        java.lang.String virtualDir)
                                 throws java.lang.ClassNotFoundException,
                                        java.io.IOException,
                                        PHXServerSideException,
                                        java.net.MalformedURLException,
                                        PHXNoSuchCategoryException
```
Describes the specified component. 

**Specified by:**
- `describe` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `compClass` - the class name for the component
- `virtualDir` - the directory to search for the component class

**Returns:**
- a description of the specified component class

**Throws:**
- `java.lang.ClassNotFoundException` - if the class is not found
- [`PHXNoSuchCategoryException`](../PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.io.IOException`
- [`PHXServerSideException`](../PHXServerSideException.md)
- `java.net.MalformedURLException`

### getQueues

```
public java.lang.String getQueues(java.lang.String compClass,
                                  java.lang.String virtualDir)
                           throws java.lang.Exception
```
Method for getting Queues from CenterLink, MCRE just returns blank string

**Specified by:**
- `getQueues` in interface [`IPHXLibrarian`](IPHXLibrarian.md)

**Parameters:**
- `compClass` - the class name for the component
- `virtualDir` - The directory the client asked for

**Returns:**
- a list of queues for the specified component class

**Throws:**
- [`PHXNoSuchCategoryException`](../PHXNoSuchCategoryException.md) - If the `virtualDirName` passed in is invalid
- `java.lang.ClassNotFoundException` - If `compClass` doesn't indicate a valid class for the specified directory
- `java.lang.Exception` - If anything goes wrong

### getBranchesAndTags

```
public java.lang.String getBranchesAndTags()
```
Does not support branching and tagging

**Specified by:**
- `getBranchesAndTags` in interface [`IPHXVersionedLibrarian2`](IPHXVersionedLibrarian2.md)

**Returns:**
- always returns empty string