# Interface: InputFile

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**All Superinterfaces**

- [`ParseableFile`](ParseableFile.md)

**All Known Implementing Classes**

- [`PHXRowFieldFile`](PHXRowFieldFile.md), [`XPathFile`](XPathFile.md)
---
## Declaration

```java
public interface InputFile
extends ParseableFile
```

Interface for input files (not file variables) used in script-wrappers

**See Also:**

- [`ParseableFile`](ParseableFile.md) - Base interface for parseable files
- [`OutputFile`](OutputFile.md), [`OutputFile2`](OutputFile2.md) - Related output file interfaces
- [`PHXScriptWrapperObject`](PHXScriptWrapperObject.md) - Script wrapper object that uses input files

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.util.scriptwrapper.api.ParseableFile

[`ParseableFile.Mode`](ParseableFile.Mode.md) 

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `generate()`<br>Generate the input file |
| `void` | `setFileToGenerate(java.lang.String fileName)`<br>Set the file to be generated |

### Methods inherited from interface ParseableFile

`backup`, `close`, `delete`, `readTemplate`, `setFileToGenerateOrParse`, `setTempEmbedded`, `setTemplateFile`, `setVariable`

## Method Detail

### generate

```java
void generate() 
       throws java.io.IOException, 
              com.phoenix_int.aserver.util.PHXInvalidFormatException, 
              PHXNoSuchTokenException, 
              java.lang.IllegalAccessException, 
              java.lang.InstantiationException, 
              PHXNumberFormatException, 
              PHXBookmarkNotFoundException, 
              PHXSectionNotFoundException
```

Generate the input file

**Throws:**

- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- [`PHXNoSuchTokenException`](../../PHXNoSuchTokenException.md)
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- [`PHXNumberFormatException`](../../../types/PHXNumberFormatException.md)
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)

**See Also:**

- [`PHXRowFieldFile.generate()`](PHXRowFieldFile.md) - Implementation in PHXRowFieldFile
- [`XPathFile.generate()`](XPathFile.md) - Implementation in XPathFile
- [`PHXBookmark`](PHXBookmark.md) - Related bookmark functionality
- [`PHXSection`](PHXSection.md) - Related section functionality

### setFileToGenerate

```java
void setFileToGenerate(java.lang.String fileName)
```

Set the file to be generated

**Parameters:**

- `fileName` - file name

**See Also:**

- [`PHXRowFieldFile.setFileToGenerate(String)`](PHXRowFieldFile.md) - Implementation in PHXRowFieldFile
- [`XPathFile.setFileToGenerate(String)`](XPathFile.md) - Implementation in XPathFile