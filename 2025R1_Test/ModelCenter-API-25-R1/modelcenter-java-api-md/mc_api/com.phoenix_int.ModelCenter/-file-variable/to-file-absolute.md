//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[FileVariable](index.md)/[toFileAbsolute](to-file-absolute.md)

# toFileAbsolute


public [toFileAbsolute](to-file-absolute.md)(fileName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))

writes out contents to a file without validating the variable (same as writeFile()).

#### Parameters



| | |
|---|---|
| fileName | the file to write to |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |


public [toFileAbsolute](to-file-absolute.md)(fileName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), encoding: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))

writes out contents to a file without validating the variable. Will throw an exception if binary encoding is used on a text file and vice-vera. (same as writeFile()).

#### Parameters



| | |
|---|---|
| fileName | the file to write to |
| encoding | how to encode the file on disk |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
