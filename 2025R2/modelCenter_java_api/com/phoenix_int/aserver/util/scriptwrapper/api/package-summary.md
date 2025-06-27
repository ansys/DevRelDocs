# Package com.phoenix_int.aserver.util.scriptwrapper.api

Provides utilities which are designed to make writing ScriptWrappers
with FileWrapper-like capabilities.

## Interface Summary
| Interface | Description |
| --- | --- |
| [InputFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/InputFile.html) | Interface for input files (not file variables) used in script-wrappers |
| [IPHXRange](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/IPHXRange.html) |  |
| [IPHXRangeChangeListener](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/IPHXRangeChangeListener.html) |  |
| [OutputFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile.html) | Deprecatedin favor of [OutputFile2](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile2.html) |
| [OutputFile2](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile2.html) | Interface for output files (not file variables) used in script-wrappers |
| [ParseableFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/ParseableFile.html) | Interface for files (not file variables) used in script wrappers |

## Class Summary
| Class | Description |
| --- | --- |
| [AbstractFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/AbstractFile.html) | Common implementation for files (not file variables) used in script wrappers. |
| [CAEOutputFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/CAEOutputFile.html) | This represents a binary output file from a CAE program such as NASTRAN or LSDyna. |
| [PHXBookmark](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXBookmark.html) |  |
| [PHXCAERange](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXCAERange.html) |  |
| [PHXRowFieldFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.html) | Class implements the parsing capabilities of the RowField type files from the fileWrapper facility. |
| [PHXRowFieldRange](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldRange.html) |  |
| [PHXRunShareContext](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXRunShareContext.html) | This class handles runshare capabilities for any component which needs it. |
| [PHXScriptWrapperObject](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXScriptWrapperObject.html) | This object is passed to Script Wrapper scripts and provides the "wrapper" global object which provides runtime services for the wrapper. |
| [PHXSection](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXSection.html) |  |
| [XPathFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/XPathFile.html) | Represents an XML file (not a file variable) used in a script wrapper, with access to the XML node values via XPath statements |

## Enum Summary
| Enum | Description |
| --- | --- |
| [ParseableFile.Mode](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/ParseableFile.Mode.html) | File mode
 Moved to type-safe enum from legacy integer constants |

 ## Exception Summary
| Exception | Description |
| --- | --- |
| [PHXBookmarkNotFoundException](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXBookmarkNotFoundException.html) |  |
| [PHXScriptWrapperAPIException](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXScriptWrapperAPIException.html) | Represents a problem with transferring data in a `PHXRowFieldFile` object. |
| [PHXSectionNotFoundException](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXSectionNotFoundException.html) |  |
| [PHXVersionException](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXVersionException.html) |  |

## Package com.phoenix_int.aserver.util.scriptwrapper.api Description
Provides utilities which are designed to make writing ScriptWrappers
with FileWrapper-like capabilities.  These classes may also be used
from Java Components.