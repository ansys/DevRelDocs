# Interface: IPHXVersionedLibrarian

**Package:** `com.phoenix_int.aserver.library`

**All Superinterfaces:**
- [`IPHXLibrarian`](IPHXLibrarian.md)

**All Known Subinterfaces:**
- [`IPHXVersionedLibrarian2`](IPHXVersionedLibrarian2.md)

**All Known Implementing Classes:**
- [`PHXCVSLibrarian`](PHXCVSLibrarian.md)
- [`PHXLibrarianCombiner`](PHXLibrarianCombiner.md)
- [`PHXLibrarianMounter`](PHXLibrarianMounter.md)
- [`PHXDirectoryLibrarian`](PHXDirectoryLibrarian.md)

---

**Declaration**

```
@Deprecated
public interface IPHXVersionedLibrarian
extends IPHXLibrarian
```

**Deprecated**: It is preferred to use `IPHXVersionedLibrarian3` as this class has methods that can leak resources.

This extends the [`IPHXLibrarian`](IPHXLibrarian.md) interface to include version information about components.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `PHXComponentBranch` | `getComponentHistory(java.lang.String compClass, java.lang.String virtualDir)`<br>**Deprecated.** Gets all version information about a particular component. |

### Methods inherited from interface [`IPHXLibrarian`](IPHXLibrarian.md):
`cleanUp`, `describe`, `getQueues`, `initialize`, `instantiate`, `instantiate`, `listComponents`, `listDirectories`

## Method Detail

### getComponentHistory

```
PHXComponentBranch getComponentHistory(java.lang.String compClass,
                                       java.lang.String virtualDir)
                                throws java.lang.Exception
```

**Deprecated.** Gets all version information about a particular component. It is important that this class throws [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) and `ClassNotFoundException` in the appropriate cases as they are handled in special ways by the librarian mounter and librarian combiner.

**Parameters:**
- `compClass` - the class name for the component
- `virtualDir` - The directory the client asked for

**Returns:**
- An instance of [`PHXComponentBranch`](../PHXComponentBranch.md) which contains all the versions and sub-branches available

**Throws:**
- [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) - If the virtualDirName passed in is invalid
- `java.lang.ClassNotFoundException` - If compClass doesn't indicate a valid class for the specified directory
- `java.lang.Exception` - If anything goes wrong

