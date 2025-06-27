# Package com.phoenix_int.aserver.library
Provides a library of available components and catgories (directories) and
factories for instantiating components.
See:Description
- | Interface | Description |
| --- | --- |
| [IPHXFactory](../../../../com/phoenix_int/aserver/library/IPHXFactory.html) | DeprecatedIt is preferred to use`IPHXFactory2`, as this class has methods that can leak resources |
| [IPHXLibrarian](../../../../com/phoenix_int/aserver/library/IPHXLibrarian.html) | DeprecatedIt is preferred to use`IPHXLibrarian2`as this class uses methods that can leak resources. |
| [IPHXVersionedLibrarian](../../../../com/phoenix_int/aserver/library/IPHXVersionedLibrarian.html) | DeprecatedIt is preferred to use`IPHXVersionedLibrarian3`as this class has methods that
 can leak resources |
| [IPHXVersionedLibrarian2](../../../../com/phoenix_int/aserver/library/IPHXVersionedLibrarian2.html) | DeprecatedIt is preferred to use`IPHXVersionedLibrarian3`as this class supports
 methods that can cause file leaks. |
- | Class | Description |
| --- | --- |
| [PHXCVSLibrarian](../../../../com/phoenix_int/aserver/library/PHXCVSLibrarian.html) | Implementation of IPHXLibrarian which loads files out of CVS. |
| [PHXDirectoryLibrarian](../../../../com/phoenix_int/aserver/library/PHXDirectoryLibrarian.html) | This librarian provides a window into a directory on disk that contains wrapper and component files. |
| [PHXLibrarianCombiner](../../../../com/phoenix_int/aserver/library/PHXLibrarianCombiner.html) | This class combines several sub-librarians, adding dir lists and component lists together. |
| [PHXLibrarianMounter](../../../../com/phoenix_int/aserver/library/PHXLibrarianMounter.html) | This class has the functionality of providing a "virtual" directory tree where different sub-librarians can be
 "mounted" very similarly to the UNIX concept of mounting filesystems. |
| [PHXUserDirLibrarian](../../../../com/phoenix_int/aserver/library/PHXUserDirLibrarian.html) | This librarian provides "user" directories by looking in a user path
 or by reading /etc/passwd. |
- | Exception | Description |
| --- | --- |
| [PHXNoSuchAssociationException](../../../../com/phoenix_int/aserver/library/PHXNoSuchAssociationException.html) | An exception that is thrown when an invalid association
 is specified. |
| [PHXNoSuchCategoryException](../../../../com/phoenix_int/aserver/library/PHXNoSuchCategoryException.html) | An exception that is thrown when an invalid class category
 is specified. |
| [PHXNoSuchIconException](../../../../com/phoenix_int/aserver/library/PHXNoSuchIconException.html) | An exception that is thrown when an invalid icon
 is specified. |

## Package com.phoenix_int.aserver.library Description
Provides a library of available components and catgories (directories) and
factories for instantiating components.  Contains the
standard directory-based publishing technique as well as interfaces for writing
archiving and versioning plug-ins.Put @see and @since tags down here.