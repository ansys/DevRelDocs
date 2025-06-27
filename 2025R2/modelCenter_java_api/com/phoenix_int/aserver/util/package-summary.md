# Package com.phoenix_int.aserver.util
Provides general purpose utility functions.

## Interface Summary
| Interface | Description |
| --- | --- |
| [IPHXLineStore](../../../../com/phoenix_int/aserver/util/IPHXLineStore.html) | This is the interface for holding a set of lines. |
| [IPHXStringReplacer](../../../../com/phoenix_int/aserver/util/IPHXStringReplacer.html) | This is the interface for a replacing strings, used by the PHXStringReplacer class |
| [Parser](../../../../com/phoenix_int/aserver/util/Parser.html) | Interface to define the methods of a parser. |

## Class Summary
| Class | Description |
| --- | --- |
| [PHXFileLoader](../../../../com/phoenix_int/aserver/util/PHXFileLoader.html) | This is a utility class for loading data files. |
| [PHXFileName](../../../../com/phoenix_int/aserver/util/PHXFileName.html) | this is a utility class for easily managing file names. |
| [PHXFileParser](../../../../com/phoenix_int/aserver/util/PHXFileParser.html) | This is a utility class for loading data files and extracting data. |
| [PHXIcon](../../../../com/phoenix_int/aserver/util/PHXIcon.html) | This class provides utility functions for loading and creating an icon file |
| [PHXNameDivider](../../../../com/phoenix_int/aserver/util/PHXNameDivider.html) | this is a utility class for breaking down names into smaller parts. |
| [PHXProcess](../../../../com/phoenix_int/aserver/util/PHXProcess.html) | This is a utility class that extends `java.lang.Process` with a system dependent process ID. |
| [PHXProcessInfo](../../../../com/phoenix_int/aserver/util/PHXProcessInfo.html) | This class represents information about a running process on the system. |
| [PHXRuntime](../../../../com/phoenix_int/aserver/util/PHXRuntime.html) | This is a utility class for running processes. |
| [PHXStringBuffer](../../../../com/phoenix_int/aserver/util/PHXStringBuffer.html) | Class that behaves like a `java.lang.StringBuffer` but has logic for cacheing out to disk if the size grows over a limit (currently 512K). |
| [PHXStringReplacer](../../../../com/phoenix_int/aserver/util/PHXStringReplacer.html) | This is a utility class for replacing fields within a string. |
| [PHXStringTokenizer](../../../../com/phoenix_int/aserver/util/PHXStringTokenizer.html) | This is a more sophisticated version of the Java StringTokenizer. |
 
## Enum Summary
| Enum | Description |
| --- | --- |
| [Parser.Mode](../../../../com/phoenix_int/aserver/util/Parser.Mode.html) | File-access mode<br>Moved to type-safe enum from legacy integer constants |
 
## Exception Summary
| Exception | Description |
| --- | --- |
| [PHXClassNotFoundException](../../../../com/phoenix_int/aserver/util/PHXClassNotFoundException.html) | Simple wrapper for `ClassNotFoundException` which can contain additional logging info. |
| [PHXGetByUrlException](../../../../com/phoenix_int/aserver/util/PHXGetByUrlException.html) | An exception that is thrown when encountering an error getting a file's contents via url |
| [PHXNoSuchReplacementException](../../../../com/phoenix_int/aserver/util/PHXNoSuchReplacementException.html) | An exception that is thrown when a replacement string cannot be found |
| [PHXNoSuchTokenException](../../../../com/phoenix_int/aserver/util/PHXNoSuchTokenException.html) | An exception that is thrown when an object cannot be found |

## Package com.phoenix_int.aserver.util Description
Provides general purpose utility functions.Put @see and @since tags down here.