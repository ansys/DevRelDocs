======== START OF CLASS DATA ========
com.phoenix_int.aserver.library
## Interface IPHXVersionedLibrarian2
- **All Superinterfaces:**
: [IPHXLibrarian](../../../../com/phoenix_int/aserver/library/IPHXLibrarian.html),[IPHXVersionedLibrarian](../../../../com/phoenix_int/aserver/library/IPHXVersionedLibrarian.html)

**All Known Implementing Classes:**
: [PHXCVSLibrarian](../../../../com/phoenix_int/aserver/library/PHXCVSLibrarian.html),[PHXLibrarianCombiner](../../../../com/phoenix_int/aserver/library/PHXLibrarianCombiner.html),[PHXLibrarianMounter](../../../../com/phoenix_int/aserver/library/PHXLibrarianMounter.html)

---
Deprecated.It is preferred to use`IPHXVersionedLibrarian3`as this class supports
 methods that can cause file leaks.

```java
@Deprecated
public interface IPHXVersionedLibrarian2
extends IPHXVersionedLibrarian
```
This extends the IPHXLibrarian interface to include version information
 about components.
**Version:**
: Feb 2006
**Author:**
: Carlton Fraley- ========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `java.lang.String` | `getBranchesAndTags()`Deprecated.Fetches a list of all branches and tags |

- ### Methods inherited from interface com.phoenix_int.aserver.library.IPHXVersionedLibrarian
`getComponentHistory`

- ### Methods inherited from interface com.phoenix_int.aserver.library.IPHXLibrarian
`cleanUp,describe,getQueues,initialize,instantiate,instantiate,listComponents,listDirectories`- ============ METHOD DETAIL ==========
- ### Method Detail

- #### getBranchesAndTags

```java
java.lang.String getBranchesAndTags()
                             throws java.lang.Exception
```
Deprecated.Fetches a list of all branches and tags
**Throws:**
: `java.lang.Exception`- If anything goes wrong
========= END OF CLASS DATA =========