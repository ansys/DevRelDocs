======== START OF CLASS DATA ========
com.phoenix_int.aserver.library
## Class PHXDirectoryLibrarian
- java.lang.Object
- - com.phoenix_int.aserver.library.PHXDirectoryLibrarian
- **All Implemented Interfaces:**
: [IPHXLibrarian](../../../../com/phoenix_int/aserver/library/IPHXLibrarian.html), com.phoenix_int.aserver.library.IPHXLibrarian2

---

```java
public class PHXDirectoryLibrarian
extends java.lang.Object
implements com.phoenix_int.aserver.library.IPHXLibrarian2
```
This librarian provides a window into a directory on disk that contains wrapper and component files.
**Version:**
: Dec 2001
**Author:**
: Nathan P Sharp- ======== CONSTRUCTOR SUMMARY ========
- ### Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXDirectoryLibrarian()` |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `void` | `cleanUp()`This class has no cleaning up to do |
| `PHXComponentDescription` | `describe(java.lang.String compClass,
        java.lang.String virtualDir)`describes the specified component. |
| `java.lang.String` | `getQueues(java.lang.String compClass,
         java.lang.String virtualDir)`method for getting Queues from CenterLink, MCRE just returns blank string |
| `void` | `initialize(com.phoenix_int.aserver.ascore.PHXConnection connection,IPHXFactoryfactories,
          com.phoenix_int.aserver.ascore.PHXAServerArgs args,
          org.w3c.dom.Node xmlOptions)`There is only 1 option for this class, "analysesPath" which must be a single directory that exists on the local
 system. |
| `IPHXComponent` | `instantiate(java.lang.String compClass,
           java.lang.String virtualDir)`creates an instance of the specified component. |
| `IPHXComponent` | `instantiate(java.lang.String compClass,
           java.lang.String virtualDir,
           java.lang.String connector,
           java.lang.String queue)`creates an instance of the specified component. |
| `com.phoenix_int.aserver.PHXComponentResourcePair` | `instantiateManaged(java.lang.String compClass,
                  java.lang.String virtualDir)`Creates an instance of the specified component. |
| `com.phoenix_int.aserver.PHXComponentResourcePair` | `instantiateManaged(java.lang.String compClass,
                  java.lang.String virtualDir,
                  java.lang.String connector,
                  java.lang.String queue)`Creates an instance of the specified component. |
| `java.util.Collection` | `listComponents(java.lang.String virtualDir)`returns the components in a specific directory |
| `java.util.Collection` | `listDirectories(java.lang.String virtualDir)`Lists available sub-directories for the specified path |

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXDirectoryLibrarian

```java
public PHXDirectoryLibrarian()
```
============ METHOD DETAIL ==========
- ### Method Detail

- #### initialize

```java
public void initialize(com.phoenix_int.aserver.ascore.PHXConnection connection,
                       IPHXFactory factories,
                       com.phoenix_int.aserver.ascore.PHXAServerArgs args,
                       org.w3c.dom.Node xmlOptions)
                throws java.lang.Exception
```
There is only 1 option for this class, "analysesPath" which must be a single directory that exists on the local
 system.
The XML format is:

```java

 <librarianOptions>
  <analysesPath>path1/here</analysesPath>
 </librarianOptions>
 
```
**Specified by:**
: `initialize`in interface`IPHXLibrarian`
**Throws:**
: `java.lang.Exception`

- #### cleanUp

```java
public void cleanUp()
```
This class has no cleaning up to do
**Specified by:**
: `cleanUp`in interface`IPHXLibrarian`

- #### listComponents

```java
public java.util.Collection listComponents(java.lang.String virtualDir)
                                    throws PHXNoSuchCategoryException,
                                           com.phoenix_int.aserver.security.PHXAccessDeniedException
```
returns the components in a specific directory
**Specified by:**
: `listComponents`in interface`IPHXLibrarian`
**Parameters:**
: `virtualDir`- The directory the client asked for
**Returns:**
: an array of class names
**Throws:**
: `com.phoenix_int.aserver.security.PHXAccessDeniedException`- if the directory could not be scanned
: `PHXNoSuchCategoryException`

- #### listDirectories

```java
public java.util.Collection listDirectories(java.lang.String virtualDir)
                                     throws PHXNoSuchCategoryException,
                                            com.phoenix_int.aserver.security.PHXAccessDeniedException
```
Lists available sub-directories for the specified path
**Specified by:**
: `listDirectories`in interface`IPHXLibrarian`
**Parameters:**
: `virtualDir`- The directory the client asked for
**Returns:**
: a Collection of Strings
**Throws:**
: `PHXNoSuchCategoryException`
: `com.phoenix_int.aserver.security.PHXAccessDeniedException`

- #### instantiate

```java
public IPHXComponent instantiate(java.lang.String compClass,
                                 java.lang.String virtualDir,
                                 java.lang.String connector,
                                 java.lang.String queue)
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
creates an instance of the specified component.
**Specified by:**
: `instantiate`in interface`IPHXLibrarian`
**Parameters:**
: `compClass`- the class name for the component
: `virtualDir`- the directory to search for the component class
**Returns:**
: an instance of the associated component class with the file loaded
**Throws:**
: `java.lang.ClassNotFoundException`- if the class is not found
: `java.lang.IllegalAccessException`- cannot call constructor
: `java.lang.InstantiationException`- cannot call constructor
: `java.lang.reflect.InvocationTargetException`- if an exception if the specified component exists, but is
 not of the right type, or if an exception occurs while creating the class or loading the setup file
: `java.io.IOException`
: `PHXServerSideException`
: `java.net.MalformedURLException`
: `com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException`
: `PHXNoSuchCategoryException`

- #### instantiate

```java
public IPHXComponent instantiate(java.lang.String compClass,
                                 java.lang.String virtualDir)
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
creates an instance of the specified component. Typically a librarian will find the appropriate files and pass the
 request off to the IPHXFactory.
It is important that this class throws PHXNoSuchCategoryException and ClassNotFoundException in the appropriate
 cases as they are handled in special ways by the librarian mounter and librarian combiner.
**Specified by:**
: `instantiate`in interface`IPHXLibrarian`
**Parameters:**
: `compClass`- the class name for the component
: `virtualDir`- The directory the client asked for
**Returns:**
: an instance of the specified component class
**Throws:**
: `java.lang.ClassNotFoundException`- If compClass doesn't indicate a valid class for the specified directory
: `PHXNoSuchCategoryException`- If the virtualDirName passed in is invalid
: `java.lang.IllegalAccessException`
: `java.lang.InstantiationException`
: `java.lang.reflect.InvocationTargetException`
: `java.io.IOException`
: `PHXServerSideException`
: `java.net.MalformedURLException`
: `com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException`

- #### instantiateManaged

```java
public com.phoenix_int.aserver.PHXComponentResourcePair instantiateManaged(java.lang.String compClass,
                                                                           java.lang.String virtualDir,
                                                                           java.lang.String connector,
                                                                           java.lang.String queue)
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
 Typically a librarian will find the appropriate files
 and pass the request off to the IPHXFactory.
It is important that this class throws
 PHXNoSuchCategoryException and ClassNotFoundException
 in the appropriate cases as they are handled
 in special ways by the librarian mounter and librarian
 combiner.
**Specified by:**
: `instantiateManaged`in interface`com.phoenix_int.aserver.library.IPHXLibrarian2`
**Parameters:**
: `compClass`- the class name for the component
: `virtualDir`- The directory the client asked for
: `connector`- name of the connector object to use
: `queue`- name of the queue object to use
**Returns:**
: an instance of the specified component class and its managed resources
**Throws:**
: `java.lang.ClassNotFoundException`- If compClass doesn't
   indicate a valid class for the specified directory
: `PHXNoSuchCategoryException`- If the virtualDirName
   passed in is invalid
: `java.lang.IllegalAccessException`
: `java.lang.InstantiationException`
: `java.lang.reflect.InvocationTargetException`
: `java.io.IOException`
: `PHXServerSideException`
: `java.net.MalformedURLException`
: `com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException`

- #### instantiateManaged

```java
public com.phoenix_int.aserver.PHXComponentResourcePair instantiateManaged(java.lang.String compClass,
                                                                           java.lang.String virtualDir)
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
 Typically a librarian will find the appropriate files
 and pass the request off to the IPHXFactory.
It is important that this class throws
 PHXNoSuchCategoryException and ClassNotFoundException
 in the appropriate cases as they are handled
 in special ways by the librarian mounter and librarian
 combiner.
**Specified by:**
: `instantiateManaged`in interface`com.phoenix_int.aserver.library.IPHXLibrarian2`
**Parameters:**
: `compClass`- the class name for the component
: `virtualDir`- The directory the client asked for
**Returns:**
: an instance of the specified component class and its managed resources
**Throws:**
: `java.lang.ClassNotFoundException`- If compClass doesn't
   indicate a valid class for the specified directory
: `PHXNoSuchCategoryException`- If the virtualDirName
   passed in is invalid
: `java.lang.IllegalAccessException`
: `java.lang.InstantiationException`
: `java.lang.reflect.InvocationTargetException`
: `java.io.IOException`
: `PHXServerSideException`
: `java.net.MalformedURLException`
: `com.phoenix_int.aserver.util.proxywrapper.PHXProxyNotAllowedException`

- #### describe

```java
public PHXComponentDescription describe(java.lang.String compClass,
                                        java.lang.String virtualDir)
                                 throws java.lang.ClassNotFoundException,
                                        java.io.IOException,
                                        PHXServerSideException,
                                        java.net.MalformedURLException,
                                        PHXNoSuchCategoryException
```
describes the specified component.
**Specified by:**
: `describe`in interface`IPHXLibrarian`
**Parameters:**
: `compClass`- the class name for the component
: `virtualDir`- the directory to search for the component class
**Returns:**
: a description of the specified component class
**Throws:**
: `java.lang.ClassNotFoundException`- if the class is not found
: `PHXNoSuchCategoryException`- If the virtualDirName passed in is invalid
: `java.io.IOException`
: `PHXServerSideException`
: `java.net.MalformedURLException`

- #### getQueues

```java
public java.lang.String getQueues(java.lang.String compClass,
                                  java.lang.String virtualDir)
                           throws java.lang.Exception
```
method for getting Queues from CenterLink, MCRE just returns blank string
**Specified by:**
: `getQueues`in interface`IPHXLibrarian`
**Parameters:**
: `compClass`- the class name for the component
: `virtualDir`- The directory the client asked for
**Returns:**
: a list of queues for the specified component class
**Throws:**
: `PHXNoSuchCategoryException`- If the virtualDirName passed in is invalid
: `java.lang.ClassNotFoundException`- If compClass doesn't indicate a valid class for the specified directory
: `java.lang.Exception`- If anything goes wrong
========= END OF CLASS DATA =========