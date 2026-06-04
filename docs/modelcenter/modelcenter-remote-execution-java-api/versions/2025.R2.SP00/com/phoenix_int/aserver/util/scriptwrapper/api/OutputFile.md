# Interface: OutputFile

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**Interface Hierarchy**

```
↳ com.phoenix_int.aserver.util.scriptwrapper.api.ParseableFile
  ↳ com.phoenix_int.aserver.util.scriptwrapper.api.OutputFile
```

**All Superinterfaces:**

[`ParseableFile`](ParseableFile.md)

**All Known Implementing Classes:**

[`PHXRowFieldFile`](PHXRowFieldFile.md), [`XPathFile`](XPathFile.md)

@Deprecated in favor of [`OutputFile2`](OutputFile2.md)

--- 
**Declaration**

```java
@Deprecated
public interface OutputFile
extends ParseableFile
```

Interface for output files (not file variables) used in script-wrappers

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.util.scriptwrapper.api.ParseableFile 

[`ParseableFile.Mode`](ParseableFile.Mode.md) 

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `parse()`<br>@Deprecated. Parse the output file |
| `void` | `setFileToParse(java.lang.String fileName)`<br>@Deprecated. Set the file to be parsed |

### Methods inherited from interface com.phoenix_int.aserver.util.scriptwrapper.api.ParseableFile

`backup`, `close`, `delete`, `readTemplate`, `setFileToGenerateOrParse`, `setTempEmbedded`, `setTemplateFile`, `setVariable`

## Method Detail

### parse

```java
void parse()
    throws java.io.IOException,
           com.phoenix_int.aserver.util.PHXInvalidFormatException,
           PHXNoSuchTokenException,
           java.lang.IllegalAccessException,
           java.lang.InstantiationException,
           PHXNumberFormatException,
           PHXBookmarkNotFoundException,
           PHXSectionNotFoundException
```

@Deprecated. Parse the output file

**Throws:**

- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- [`PHXNoSuchTokenException`](../../PHXNoSuchTokenException.md)
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- [`PHXNumberFormatException`](../../../types/PHXNumberFormatException.md)
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)

### setFileToParse

```java
void setFileToParse(java.lang.String fileName)
```

@Deprecated. Set the file to be parsed

**Parameters:**
- `fileName` - file name