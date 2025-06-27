======== START OF CLASS DATA ========
com.phoenix_int.aserver.library
## Class PHXUserDirLibrarian
- java.lang.Object
- - com.phoenix_int.aserver.library.PHXUserDirLibrarian
- **All Implemented Interfaces:**
: [IPHXLibrarian](../../../../com/phoenix_int/aserver/library/IPHXLibrarian.html), com.phoenix_int.aserver.library.IPHXLibrarian2

---

```java
public class PHXUserDirLibrarian
extends java.lang.Object
implements com.phoenix_int.aserver.library.IPHXLibrarian2
```
This librarian provides "user" directories by looking in a user path
 or by reading /etc/passwd.  It looks for "public_mcre" directories
 inside of each users directory and provides a "virtual" directory
 by the name "~<username>" if it finds one.
**Version:**
: Dec 2001
**Author:**
: Nathan P Sharp- ======== CONSTRUCTOR SUMMARY ========
- ### Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXUserDirLibrarian()` |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `void` | `cleanUp()`Tells this librarian to clean up any resources used. |
| `PHXComponentDescription` | `describe(java.lang.String compClass,
        java.lang.String virtualDir)`describes the specified component. |
| `java.lang.String` | `getQueues(java.lang.String compClass,
         java.lang.String virtualDir)`method for getting Queues from CenterLink, MCRE just returns blank string |
| `void` | `initialize(com.phoenix_int.aserver.ascore.PHXConnection connection,IPHXFactoryfactories,
          com.phoenix_int.aserver.ascore.PHXAServerArgs args,
          org.w3c.dom.Node xmlOptions)`There are 2 options for this class. |
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
| `java.util.Collection` | `listDirectories(java.lang.String virtualDir)`lists any available sub-directories from a particular directory |

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXUserDirLibrarian

```java
public PHXUserDirLibrarian()
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
There are 2 options for this class.  The first is "userPath", which
 is a semi-colon separated list of paths to search.  Each path will
 be searched for public_mcre directories ONE LEVEL DEEP from the
 specified directory.
The other option is "smartUserScan", which tells this class to try
 and read the user's home directories from /etc/passwd

The XML format is:

```java

 <librarianOptions>
  <userPath>path1/here;path2</userPath>
  <smartUserScan/>
 </librarianOption>
 
```
Note, the mere existance of the smartUserScan tag turns the option on.
**Specified by:**
: `initialize`in interface`IPHXLibrarian`
**Throws:**
: `java.lang.Exception`

- #### cleanUp

```java
public void cleanUp()
```
Description copied from interface:`IPHXLibrarian`Tells this librarian to clean up any resources used.
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
: `PHXNoSuchCategoryException`
: `com.phoenix_int.aserver.security.PHXAccessDeniedException`

- #### listDirectories

```java
public java.util.Collection listDirectories(java.lang.String virtualDir)
                                     throws PHXNoSuchCategoryException,
                                            com.phoenix_int.aserver.security.PHXAccessDeniedException
```
Description copied from interface:`IPHXLibrarian`lists any available sub-directories from a particular directory
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
                          throws java.lang.Exception
```
creates an instance of the specified component.
**Specified by:**
: `instantiate`in interface`IPHXLibrarian`
**Parameters:**
: `compClass`- the class name for the component
: `virtualDir`- the directory to search for the component class
**Returns:**
: an instance of the associated component class with the file
        loaded
**Throws:**
: `java.lang.ClassNotFoundException`- if the class is not found
: `java.lang.IllegalAccessException`- cannot call constructor
: `java.lang.InstantiationException`- cannot call constructor
: `java.lang.reflect.InvocationTargetException`- if an exception
        if the specified component exists, but is not of the right type,
        or if an exception occurs while creating the class or loading
        the setup file
: `java.lang.Exception`

- #### instantiate

```java
public IPHXComponent instantiate(java.lang.String compClass,
                                 java.lang.String virtualDir)
                          throws java.lang.Exception
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
: `PHXNoSuchCategoryException`- If the virtualDirName passed in is invalid
: `java.lang.ClassNotFoundException`- If compClass doesn't indicate a valid class for the specified directory
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
: `virtualDir`- the directory to search for the component class
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