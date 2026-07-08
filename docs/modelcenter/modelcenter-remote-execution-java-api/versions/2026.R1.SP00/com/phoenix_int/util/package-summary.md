# Package com.phoenix_int.util

## Interface Summary
| Interface | Description |
| --- | --- |
| [PHXInternationalize.InternationalizedMessage](PHXInternationalize.InternationalizedMessage.md) | Interface for a lazily computed translation message. |

## Class Summary
| Class | Description |
| --- | --- |
| [BufferedRandomAccessFile](BufferedRandomAccessFile.md) | Replacement for `RandomAccessFile` to use buffered I/O as much as  possible. |
| [PHXBlocker](PHXBlocker.md) | Class to simplify wait and notify calls. |
| [PHXInternationalize](PHXInternationalize.md) | Helper class to do internationalization. |
| [PHXNewLineAddFilter](PHXNewLineAddFilter.md) | Implementation of a `FilterReader` that basically does the opposite of the `PHXNewLineFilter`, adding in the platform dependent newlines from java style newlines '\n'. |
| [PHXNewLineFilter](PHXNewLineFilter.md) | Implementation of a `FilterReader` that processes out newlines into Java style newlines '\n' with the same logic as `BufferedReader.readLine()` |