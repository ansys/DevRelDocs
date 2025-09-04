# Package com.phoenix_int.aserver.util
Provides general purpose utility functions.

## Interface Summary
| Interface | Description |
| --- | --- |
| [IPHXLineStore](IPHXLineStore.md) | This is the interface for holding a set of lines. |
| [IPHXStringReplacer](IPHXStringReplacer.md) | This is the interface for a replacing strings, used by the PHXStringReplacer class |
| [Parser](Parser.md) | Interface to define the methods of a parser. |

## Class Summary
| Class | Description |
| --- | --- |
| [PHXFileLoader](PHXFileLoader.md) | This is a utility class for loading data files. |
| [PHXFileName](PHXFileName.md) | this is a utility class for easily managing file names. |
| [PHXFileParser](PHXFileParser.md) | This is a utility class for loading data files and extracting data. |
| [PHXIcon](PHXIcon.md) | This class provides utility functions for loading and creating an icon file |
| [PHXNameDivider](PHXNameDivider.md) | this is a utility class for breaking down names into smaller parts. |
| [PHXProcess](PHXProcess.md) | This is a utility class that extends `java.lang.Process` with a system dependent process ID. |
| [PHXProcessInfo](PHXProcessInfo.md) | This class represents information about a running process on the system. |
| [PHXRuntime](PHXRuntime.md) | This is a utility class for running processes. |
| [PHXStringBuffer](PHXStringBuffer.md) | Class that behaves like a `java.lang.StringBuffer` but has logic for cacheing out to disk if the size grows over a limit (currently 512K). |
| [PHXStringReplacer](PHXStringReplacer.md) | This is a utility class for replacing fields within a string. |
| [PHXStringTokenizer](PHXStringTokenizer.md) | This is a more sophisticated version of the Java StringTokenizer. |
 
## Enum Summary
| Enum | Description |
| --- | --- |
| [Parser.Mode](Parser.Mode.md) | File-access mode<br>Moved to type-safe enum from legacy integer constants |
 
## Exception Summary
| Exception | Description |
| --- | --- |
| [PHXClassNotFoundException](PHXClassNotFoundException.md) | Simple wrapper for `ClassNotFoundException` which can contain additional logging info. |
| [PHXGetByUrlException](PHXGetByUrlException.md) | An exception that is thrown when encountering an error getting a file's contents via url |
| [PHXNoSuchReplacementException](PHXNoSuchReplacementException.md) | An exception that is thrown when a replacement string cannot be found |
| [PHXNoSuchTokenException](PHXNoSuchTokenException.md) | An exception that is thrown when an object cannot be found |

## Package com.phoenix_int.aserver.util Description
Provides general purpose utility functions.