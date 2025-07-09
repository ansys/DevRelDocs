# Interface: IPHXVersionedLibrarian2

**Package:** `com.phoenix_int.aserver.library`

**All Superinterfaces:**
- [`IPHXLibrarian`](IPHXLibrarian.md)
- [`IPHXVersionedLibrarian`](IPHXVersionedLibrarian.md)

**All Known Implementing Classes:**
- [`PHXCVSLibrarian`](PHXCVSLibrarian.md)
- [`PHXLibrarianCombiner`](PHXLibrarianCombiner.md)
- [`PHXLibrarianMounter`](PHXLibrarianMounter.md)

---

**Declaration**

```
@Deprecated
public interface IPHXVersionedLibrarian2
extends IPHXVersionedLibrarian
```

**Deprecated**: It is preferred to use `IPHXVersionedLibrarian3` as this class supports methods that can cause file leaks.

This extends the [`IPHXLibrarian`](IPHXLibrarian.md) interface to include version information about components.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `getBranchesAndTags()`<br>**Deprecated.** Fetches a list of all branches and tags. |

### Methods inherited from interface [`IPHXVersionedLibrarian`](IPHXVersionedLibrarian.md)
`getComponentHistory`

### Methods inherited from interface [`IPHXLibrarian`](IPHXLibrarian.md)
`cleanUp`, `describe`, `getQueues`, `initialize`, `instantiate`, `instantiate`, `listComponents`, `listDirectories`

## Method Detail

### getBranchesAndTags

```
java.lang.String getBranchesAndTags()
                             throws java.lang.Exception
```

**Deprecated.** Fetches a list of all branches and tags.

**Throws:**
- `java.lang.Exception` - If anything goes wrong

