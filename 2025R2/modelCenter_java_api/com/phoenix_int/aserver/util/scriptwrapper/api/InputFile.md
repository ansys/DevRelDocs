# Interface: InputFile

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**All Superinterfaces**

- `ParseableFile`

**All Known Implementing Classes**

- `PHXRowFieldFile`, `XPathFile`
---
## Declaration

```java
public interface InputFile
extends ParseableFile
```

Interface for input files (not file variables) used in script-wrappers

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.util.scriptwrapper.api.ParseableFile
`ParseableFile.Mode` 

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
- `PHXNoSuchTokenException`
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `PHXNumberFormatException`
- `PHXBookmarkNotFoundException`
- `PHXSectionNotFoundException`

### setFileToGenerate

```java
void setFileToGenerate(java.lang.String fileName)
```
Set the file to be generated

**Parameters:**
- `fileName` - file name