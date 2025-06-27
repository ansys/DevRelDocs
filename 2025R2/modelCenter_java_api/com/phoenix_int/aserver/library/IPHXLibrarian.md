======== START OF CLASS DATA ========
com.phoenix_int.aserver.library
## Interface IPHXLibrarian
- **All Known Subinterfaces:**
: [IPHXVersionedLibrarian](../../../../com/phoenix_int/aserver/library/IPHXVersionedLibrarian.html),[IPHXVersionedLibrarian2](../../../../com/phoenix_int/aserver/library/IPHXVersionedLibrarian2.html)

**All Known Implementing Classes:**
: [PHXCVSLibrarian](../../../../com/phoenix_int/aserver/library/PHXCVSLibrarian.html),[PHXDirectoryLibrarian](../../../../com/phoenix_int/aserver/library/PHXDirectoryLibrarian.html),[PHXLibrarianCombiner](../../../../com/phoenix_int/aserver/library/PHXLibrarianCombiner.html),[PHXLibrarianMounter](../../../../com/phoenix_int/aserver/library/PHXLibrarianMounter.html),[PHXUserDirLibrarian](../../../../com/phoenix_int/aserver/library/PHXUserDirLibrarian.html)

---
Deprecated.It is preferred to use`IPHXLibrarian2`as this class uses methods that can leak resources.

```java
@Deprecated
public interface IPHXLibrarian
```
This is an interface for classes that manage a directory heirarchy of available components. An instance of this class
 is generated for each incoming connection.
**Version:**
: Dec 2001
**Author:**
: Nathan P Sharp- ========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `void` | `cleanUp()`Deprecated.Tells this librarian to clean up any resources used. |
| `PHXComponentDescription` | `describe(java.lang.String compClass,
        java.lang.String virtualDirName)`Deprecated.describes the specified component |
| `java.lang.String` | `getQueues(java.lang.String compClass,
         java.lang.String virtualDirName)`Deprecated.gets the available run queues |
| `void` | `initialize(com.phoenix_int.aserver.ascore.PHXConnection connection,IPHXFactoryfactories,
          com.phoenix_int.aserver.ascore.PHXAServerArgs args,
          org.w3c.dom.Node xmlOptions)`Deprecated.Tells this librarian to configure itself based on the XML node passed in. |
| `IPHXComponent` | `instantiate(java.lang.String compClass,
           java.lang.String virtualDirName)`Deprecated. |
| `IPHXComponent` | `instantiate(java.lang.String compClass,
           java.lang.String virtualDirName,
           java.lang.String connector,
           java.lang.String queue)`Deprecated. |
| `java.util.Collection` | `listComponents(java.lang.String virtualDirName)`Deprecated.lists components within a specified directory |
| `java.util.Collection` | `listDirectories(java.lang.String virtualDir)`Deprecated.lists any available sub-directories from a particular directory |- ============ METHOD DETAIL ==========
- ### Method Detail

- #### initialize

```java
void initialize(com.phoenix_int.aserver.ascore.PHXConnection connection,
                IPHXFactory factories,
                com.phoenix_int.aserver.ascore.PHXAServerArgs args,
                org.w3c.dom.Node xmlOptions)
         throws java.lang.Exception
```
Deprecated.Tells this librarian to configure itself based on the XML node passed in. The XML node should be a
 <librarianOptions> node whose format is specific to the particular type of librarian
**Throws:**
: `java.lang.Exception`

- #### cleanUp

```java
void cleanUp()
```
Deprecated.Tells this librarian to clean up any resources used.

- #### listComponents

```java
java.util.Collection listComponents(java.lang.String virtualDirName)
                             throws PHXNoSuchCategoryException,
                                    com.phoenix_int.aserver.security.PHXAccessDeniedException
```
Deprecated.lists components within a specified directory
**Parameters:**
: `virtualDirName`- The directory the client asked for
**Returns:**
: a Collection of Strings
**Throws:**
: `PHXNoSuchCategoryException`
: `com.phoenix_int.aserver.security.PHXAccessDeniedException`

- #### listDirectories

```java
java.util.Collection listDirectories(java.lang.String virtualDir)
                              throws PHXNoSuchCategoryException,
                                     com.phoenix_int.aserver.security.PHXAccessDeniedException
```
Deprecated.lists any available sub-directories from a particular directory
**Parameters:**
: `virtualDir`- The directory the client asked for
**Returns:**
: a Collection of Strings
**Throws:**
: `PHXNoSuchCategoryException`
: `com.phoenix_int.aserver.security.PHXAccessDeniedException`

- #### instantiate

```java
@Deprecated
IPHXComponent instantiate(java.lang.String compClass,
                                       java.lang.String virtualDirName)
                                throws java.lang.Exception
```
Deprecated.creates an instance of the specified component. Typically a librarian will find the appropriate files and pass the
 request off to the IPHXFactory.
It is important that this class throws PHXNoSuchCategoryException and ClassNotFoundException in the appropriate
 cases as they are handled in special ways by the librarian mounter and librarian combiner.
**Parameters:**
: `compClass`- the class name for the component
: `virtualDirName`- The directory the client asked for
**Returns:**
: an instance of the specified component class
**Throws:**
: `PHXNoSuchCategoryException`- If the virtualDirName passed in is invalid
: `java.lang.ClassNotFoundException`- If compClass doesn't indicate a valid class for the specified directory
: `java.lang.Exception`- If anything serious goes wrong

- #### instantiate

```java
@Deprecated
IPHXComponent instantiate(java.lang.String compClass,
                                       java.lang.String virtualDirName,
                                       java.lang.String connector,
                                       java.lang.String queue)
                                throws java.lang.Exception
```
Deprecated.
**Throws:**
: `java.lang.Exception`

- #### describe

```java
PHXComponentDescription describe(java.lang.String compClass,
                                 java.lang.String virtualDirName)
                          throws java.lang.Exception
```
Deprecated.describes the specified component
It is important that this class throws PHXNoSuchCategoryException and ClassNotFoundException in the appropriate
 cases as they are handled in special ways by the librarian mounter and librarian combiner.
**Parameters:**
: `compClass`- the class name for the component
: `virtualDirName`- The directory the client asked for
**Returns:**
: a description of the specified component class
**Throws:**
: `PHXNoSuchCategoryException`- If the virtualDirName passed in is invalid
: `java.lang.ClassNotFoundException`- If compClass doesn't indicate a valid class for the specified directory
: `java.lang.Exception`- If anything goes wrong

- #### getQueues

```java
java.lang.String getQueues(java.lang.String compClass,
                           java.lang.String virtualDirName)
                    throws java.lang.Exception
```
Deprecated.gets the available run queues
It is important that this class throws PHXNoSuchCategoryException and ClassNotFoundException in the appropriate
 cases as they are handled in special ways by the librarian mounter and librarian combiner.
**Parameters:**
: `compClass`- the class name for the component
: `virtualDirName`- The directory the client asked for
**Returns:**
: a list of queues for the specified component class
**Throws:**
: `PHXNoSuchCategoryException`- If the virtualDirName passed in is invalid
: `java.lang.ClassNotFoundException`- If compClass doesn't indicate a valid class for the specified directory
: `java.lang.Exception`- If anything goes wrong
========= END OF CLASS DATA =========