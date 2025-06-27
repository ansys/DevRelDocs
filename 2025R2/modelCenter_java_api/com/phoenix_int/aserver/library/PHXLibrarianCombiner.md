======== START OF CLASS DATA ========
com.phoenix_int.aserver.library
## Class PHXLibrarianCombiner
- java.lang.Object
- - com.phoenix_int.aserver.library.PHXLibrarianCombiner
- **All Implemented Interfaces:**
: [IPHXLibrarian](../../../../com/phoenix_int/aserver/library/IPHXLibrarian.html), com.phoenix_int.aserver.library.IPHXLibrarian2,[IPHXVersionedLibrarian](../../../../com/phoenix_int/aserver/library/IPHXVersionedLibrarian.html),[IPHXVersionedLibrarian2](../../../../com/phoenix_int/aserver/library/IPHXVersionedLibrarian2.html), com.phoenix_int.aserver.library.IPHXVersionedLibrarian3

---

```java
public class PHXLibrarianCombiner
extends java.lang.Object
implements com.phoenix_int.aserver.library.IPHXVersionedLibrarian3
```
This class combines several sub-librarians, adding dir lists and component lists together. If there is a conflict in
 component or directory name, the first librarian wins out, and no error is given.
**Version:**
: Dec 2001
**Author:**
: Nathan P Sharp- ======== CONSTRUCTOR SUMMARY ========
- ### Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXLibrarianCombiner()` |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `void` | `addLibrarian(IPHXLibrarianl)`Adds a librarian to our list |
| `void` | `cleanUp()`Recursively tells kids to clean themselves up |
| `PHXComponentDescription` | `describe(java.lang.String compClass,
        java.lang.String virtualDir)`describes the specified component. |
| `java.lang.String` | `getBranchesAndTags()`Fetches a list of all branches and tags |
| `PHXComponentBranch` | `getComponentHistory(java.lang.String compClass,
                   java.lang.String virtualDir)`Gets all version information about a particular component |
| `java.lang.String` | `getQueues(java.lang.String compClass,
         java.lang.String virtualDir)`get the queues for the specified component. |
| `void` | `initialize(com.phoenix_int.aserver.ascore.PHXConnection connection,IPHXFactoryfactories,
          com.phoenix_int.aserver.ascore.PHXAServerArgs args,
          org.w3c.dom.Node xmlOptions)`The XML initialization information for this class is simply a list of <librarian> tags which contain
 <librarianClass> and <librarianOptions> tags inside. |
| `IPHXComponent` | `instantiate(java.lang.String compClass,
           java.lang.String virtualDir)`creates an instance of the specified component. |
| `IPHXComponent` | `instantiate(java.lang.String compClass,
           java.lang.String virtualDir,
           java.lang.String connector,
           java.lang.String queue)` |
| `com.phoenix_int.aserver.PHXComponentResourcePair` | `instantiateManaged(java.lang.String compClass,
                  java.lang.String virtualDir)`Creates an instance of the specified component. |
| `com.phoenix_int.aserver.PHXComponentResourcePair` | `instantiateManaged(java.lang.String compClass,
                  java.lang.String virtualDir,
                  java.lang.String connector,
                  java.lang.String queue)`Creates an instance of the specified component. |
| `java.util.Collection` | `listComponents(java.lang.String virtualDir)`returns the components in a specific directory |
| `java.util.Collection` | `listDirectories(java.lang.String virtualDir)`Returns sub-directories from a specified directory |

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXLibrarianCombiner

```java
public PHXLibrarianCombiner()
```
============ METHOD DETAIL ==========
- ### Method Detail

- #### addLibrarian

```java
public void addLibrarian(IPHXLibrarian l)
```
Adds a librarian to our list

- #### initialize

```java
public void initialize(com.phoenix_int.aserver.ascore.PHXConnection connection,
                       IPHXFactory factories,
                       com.phoenix_int.aserver.ascore.PHXAServerArgs args,
                       org.w3c.dom.Node xmlOptions)
                throws java.lang.Exception
```
The XML initialization information for this class is simply a list of <librarian> tags which contain
 <librarianClass> and <librarianOptions> tags inside.
Example:

```java

 <librarianOptions>
  <librarian>
   <librarianClass>com.phoenix_int.aserver.library.PHXDirectoryLibrarian</librarianClass>
   <librarianOptions> ... </librarianOptions>
  </librarian>
  <librarian>
   ....
  </librarian>
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
Recursively tells kids to clean themselves up
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
Returns sub-directories from a specified directory
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
                                 java.lang.String virtualDir)
                          throws java.lang.Exception
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
: `PHXNoSuchCategoryException`- If the virtualDirName passed in is invalid
: `java.lang.Exception`- If anything serious goes wrong

- #### instantiate

```java
public IPHXComponent instantiate(java.lang.String compClass,
                                 java.lang.String virtualDir,
                                 java.lang.String connector,
                                 java.lang.String queue)
                          throws java.lang.Exception
```

**Specified by:**
: `instantiate`in interface`IPHXLibrarian`
**Throws:**
: `java.lang.Exception`

- #### instantiateManaged

```java
public com.phoenix_int.aserver.PHXComponentResourcePair instantiateManaged(java.lang.String compClass,
                                                                           java.lang.String virtualDir)
                                                                    throws java.lang.Exception
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
: `PHXNoSuchCategoryException`- If the virtualDirName
   passed in is invalid
: `java.lang.ClassNotFoundException`- If compClass doesn't
   indicate a valid class for the specified directory
: `java.lang.Exception`- If anything serious goes wrong

- #### instantiateManaged

```java
public com.phoenix_int.aserver.PHXComponentResourcePair instantiateManaged(java.lang.String compClass,
                                                                           java.lang.String virtualDir,
                                                                           java.lang.String connector,
                                                                           java.lang.String queue)
                                                                    throws java.lang.Exception
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
: `PHXNoSuchCategoryException`- If the virtualDirName
   passed in is invalid
: `java.lang.ClassNotFoundException`- If compClass doesn't
   indicate a valid class for the specified directory
: `java.lang.Exception`- If anything serious goes wrong

- #### describe

```java
public PHXComponentDescription describe(java.lang.String compClass,
                                        java.lang.String virtualDir)
                                 throws java.lang.Exception
```
describes the specified component.
**Specified by:**
: `describe`in interface`IPHXLibrarian`
**Parameters:**
: `compClass`- the class name for the component
: `virtualDir`- The directory the client asked for
**Returns:**
: a description of the specified component class
**Throws:**
: `java.lang.ClassNotFoundException`- if the class is not found
: `PHXNoSuchCategoryException`- If the virtualDirName passed in is invalid
: `java.lang.Exception`- If anything goes wrong

- #### getQueues

```java
public java.lang.String getQueues(java.lang.String compClass,
                                  java.lang.String virtualDir)
                           throws java.lang.Exception
```
get the queues for the specified component.
**Specified by:**
: `getQueues`in interface`IPHXLibrarian`
**Parameters:**
: `compClass`- the class name for the component
: `virtualDir`- The directory the client asked for
**Returns:**
: a list of queues of the specified component class
**Throws:**
: `java.lang.ClassNotFoundException`- if the class is not found
: `PHXNoSuchCategoryException`- If the virtualDirName passed in is invalid
: `java.lang.Exception`- If anything goes wrong

- #### getComponentHistory

```java
public PHXComponentBranch getComponentHistory(java.lang.String compClass,
                                              java.lang.String virtualDir)
                                       throws java.lang.Exception
```
Description copied from interface:`IPHXVersionedLibrarian`Gets all version information about a particular component
It is important that this class throws
 PHXNoSuchCategoryException and ClassNotFoundException
 in the appropriate cases as they are handled
 in special ways by the librarian mounter and librarian
 combiner.
**Specified by:**
: `getComponentHistory`in interface`IPHXVersionedLibrarian`
**Parameters:**
: `compClass`- the class name for the component
: `virtualDir`- The directory the client asked for
**Returns:**
: An instance of PHXComponentBranch which contains
   all the versions and sub-branches available
**Throws:**
: `PHXNoSuchCategoryException`- If the virtualDirName
   passed in is invalid
: `java.lang.ClassNotFoundException`- If compClass doesn't
   indicate a valid class for the specified directory
: `java.lang.Exception`- If anything goes wrong

- #### getBranchesAndTags

```java
public java.lang.String getBranchesAndTags()
                                    throws java.lang.Exception
```
Description copied from interface:`IPHXVersionedLibrarian2`Fetches a list of all branches and tags
**Specified by:**
: `getBranchesAndTags`in interface`IPHXVersionedLibrarian2`
**Throws:**
: `java.lang.Exception`- If anything goes wrong
========= END OF CLASS DATA =========