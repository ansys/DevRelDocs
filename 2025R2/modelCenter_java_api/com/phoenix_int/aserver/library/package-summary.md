# Package com.phoenix_int.aserver.library
Provides a library of available components and categories (directories) and factories for instantiating components.

## Interfaces
| Interface | Description |
| --- | --- |
| [`IPHXFactory`](IPHXFactory.md) | Deprecated. It is preferred to use `IPHXFactory2`, as this class has methods that can leak resources. |
| [`IPHXLibrarian`](IPHXLibrarian.md) | Deprecated. It is preferred to use `IPHXLibrarian2` as this class uses methods that can leak resources. |
| [`IPHXVersionedLibrarian`](IPHXVersionedLibrarian.md) | Deprecated. It is preferred to use `IPHXVersionedLibrarian3` as this class has methods that can leak resources. |
| [`IPHXVersionedLibrarian2`](IPHXVersionedLibrarian2.md) | Deprecated. It is preferred to use `IPHXVersionedLibrarian3` as this class supports methods that can cause file leaks. |

## Classes
| Class | Description |
| --- | --- |
| [`PHXCVSLibrarian`](PHXCVSLibrarian.md) | Implementation of IPHXLibrarian which loads files out of CVS. |
| [`PHXDirectoryLibrarian`](PHXDirectoryLibrarian.md) | This librarian provides a window into a directory on disk that contains wrapper and component files. |
| [`PHXLibrarianCombiner`](PHXLibrarianCombiner.md) | This class combines several sub-librarians, adding dir lists and component lists together. |
| [`PHXLibrarianMounter`](PHXLibrarianMounter.md) | This class has the functionality of providing a "virtual" directory tree where different sub-librarians can be "mounted" very similarly to the UNIX concept of mounting filesystems. |
| [`PHXUserDirLibrarian`](PHXUserDirLibrarian.md) | This librarian provides "user" directories by looking in a user path or by reading /etc/passwd. |

## Exceptions
| Exception | Description |
| --- | --- |
| [`PHXNoSuchAssociationException`](PHXNoSuchAssociationException.md) | An exception that is thrown when an invalid association is specified. |
| [`PHXNoSuchCategoryException`](PHXNoSuchCategoryException.md) | An exception that is thrown when an invalid class category is specified. |
| [`PHXNoSuchIconException`](PHXNoSuchIconException.md) | An exception that is thrown when an invalid icon is specified. |

## Package Description
Provides a library of available components and categories (directories) and factories for instantiating components. Contains the standard directory-based publishing technique as well as interfaces for writing archiving and versioning plug-ins.