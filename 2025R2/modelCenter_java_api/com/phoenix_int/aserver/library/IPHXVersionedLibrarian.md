======== START OF CLASS DATA ========
com.phoenix_int.aserver.library
## Interface IPHXVersionedLibrarian
- **All Superinterfaces:**
: [IPHXLibrarian](../../../../com/phoenix_int/aserver/library/IPHXLibrarian.html)

**All Known Subinterfaces:**
: [IPHXVersionedLibrarian2](../../../../com/phoenix_int/aserver/library/IPHXVersionedLibrarian2.html)

**All Known Implementing Classes:**
: [PHXCVSLibrarian](../../../../com/phoenix_int/aserver/library/PHXCVSLibrarian.html),[PHXLibrarianCombiner](../../../../com/phoenix_int/aserver/library/PHXLibrarianCombiner.html),[PHXLibrarianMounter](../../../../com/phoenix_int/aserver/library/PHXLibrarianMounter.html)

---
Deprecated.It is preferred to use`IPHXVersionedLibrarian3`as this class has methods that
 can leak resources

```java
@Deprecated
public interface IPHXVersionedLibrarian
extends IPHXLibrarian
```
This extends the IPHXLibrarian interface to include version information
 about components.
**Version:**
: Jan 2002
**Author:**
: Nathan P Sharp- ========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `PHXComponentBranch` | `getComponentHistory(java.lang.String compClass,
                   java.lang.String virtualDir)`Deprecated.Gets all version information about a particular component |

- ### Methods inherited from interface com.phoenix_int.aserver.library.IPHXLibrarian
`cleanUp,describe,getQueues,initialize,instantiate,instantiate,listComponents,listDirectories`- ============ METHOD DETAIL ==========
- ### Method Detail

- #### getComponentHistory

```java
PHXComponentBranch getComponentHistory(java.lang.String compClass,
                                       java.lang.String virtualDir)
                                throws java.lang.Exception
```
Deprecated.Gets all version information about a particular component
It is important that this class throws
 PHXNoSuchCategoryException and ClassNotFoundException
 in the appropriate cases as they are handled
 in special ways by the librarian mounter and librarian
 combiner.
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
========= END OF CLASS DATA =========