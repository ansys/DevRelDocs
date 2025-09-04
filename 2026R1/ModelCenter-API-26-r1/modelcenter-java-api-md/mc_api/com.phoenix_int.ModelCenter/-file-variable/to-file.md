# toFile


public [toFile](to-file.md)(fileName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))

writes out contents to a file (same as writeFile()).

#### Parameters



| | |
|---|---|
| fileName | the file to write to |

#### Throws

| |
|---|
| [ModelCenterException](./../-model-center-exception/index.md) |


public [toFile](to-file.md)(fileName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), encoding: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))

writes out contents to a file (same as writeFile()). Encoding can be ASCII, UTF-8, or binary. If encoding string is blank, will default to ASCII encoding for text files and binary encoding for binary files. Will throw an exception if binary encoding is used on a text file and vice-vera.

#### Parameters



| | |
|---|---|
| fileName | the file to write to |
| encoding | how to encode the file on disk: 'ascii', 'utf-8', or 'binary'. |

#### Throws

| |
|---|
| [ModelCenterException](./../-model-center-exception/index.md) |
