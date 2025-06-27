# Interface: OutputFile

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**Interface Hierarchy**

```
↳ com.phoenix_int.aserver.util.scriptwrapper.api.ParseableFile
  ↳ com.phoenix_int.aserver.util.scriptwrapper.api.OutputFile
```

**All Superinterfaces:**
[ParseableFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/ParseableFile.html)

**All Known Implementing Classes:**
[PHXRowFieldFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.html), [XPathFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/XPathFile.html)

@Deprecated in favor of [OutputFile2](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile2.html)

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
`ParseableFile.Mode` 

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
- `PHXNoSuchTokenException`
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `PHXNumberFormatException`
- `PHXBookmarkNotFoundException`
- `PHXSectionNotFoundException`

### setFileToParse

```java
void setFileToParse(java.lang.String fileName)
```
@Deprecated. Set the file to be parsed

**Parameters:**
- `fileName` - file name