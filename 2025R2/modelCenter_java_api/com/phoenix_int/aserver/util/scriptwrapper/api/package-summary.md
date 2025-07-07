# Package com.phoenix_int.aserver.util.scriptwrapper.api

Provides utilities which are designed to make writing ScriptWrappers with FileWrapper-like capabilities.

## Interface Summary
| Interface | Description |
| --- | --- |
| [`InputFile`](InputFile.md) | Interface for input files (not file variables) used in script-wrappers |
| [`IPHXRange`](IPHXRange.md) |  |
| [`IPHXRangeChangeListener`](IPHXRangeChangeListener.md) |  |
| [`OutputFile`](OutputFile.md) | Deprecated in favor of [`OutputFile2`](OutputFile2.md) |
| [`OutputFile2`](OutputFile2.md) | Interface for output files (not file variables) used in script-wrappers |
| [`ParseableFile`](ParseableFile.md) | Interface for files (not file variables) used in script wrappers |

## Class Summary
| Class | Description |
| --- | --- |
| [`AbstractFile`](AbstractFile.md) | Common implementation for files (not file variables) used in script wrappers. |
| [`CAEOutputFile`](CAEOutputFile.md) | This represents a binary output file from a CAE program such as NASTRAN or LSDyna. |
| [`PHXBookmark`](PHXBookmark.md) |  |
| [`PHXCAERange`](PHXCAERange.md) |  |
| [`PHXRowFieldFile`](PHXRowFieldFile.md) | Class implements the parsing capabilities of the RowField type files from the fileWrapper facility. |
| [`PHXRowFieldRange`](PHXRowFieldRange.md) |  |
| [`PHXRunShareContext`](PHXRunShareContext.md) | This class handles runshare capabilities for any component which needs it. |
| [`PHXScriptWrapperObject`](PHXScriptWrapperObject.md) | This object is passed to Script Wrapper scripts and provides the "wrapper" global object which provides runtime services for the wrapper. |
| [`PHXSection`](PHXSection.md) |  |
| [`XPathFile`](XPathFile.md) | Represents an XML file (not a file variable) used in a script wrapper, with access to the XML node values via XPath statements |

## Enum Summary
| Enum | Description |
| --- | --- |
| [`ParseableFile.Mode`](ParseableFile.Mode.md) | File mode
 Moved to type-safe enum from legacy integer constants |

 ## Exception Summary
| Exception | Description |
| --- | --- |
| [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md) |  |
| [`PHXScriptWrapperAPIException`](PHXScriptWrapperAPIException.md) | Represents a problem with transferring data in a [`PHXRowFieldFile`](PHXRowFieldFile.md) object. |
| [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md) |  |
| [`PHXVersionException`](PHXVersionException.md) |  |

## Package com.phoenix_int.aserver.util.scriptwrapper.api Description
Provides utilities which are designed to make writing ScriptWrappers with FileWrapper-like capabilities.  These classes may also be used from Java Components.