# Interface: OutputFile2

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**Interface Hierarchy**

```
↳ com.phoenix_int.aserver.util.scriptwrapper.api.OutputFile2
```

**All Known Implementing Classes:**

[`CAEOutputFile`](CAEOutputFile.md), [`PHXRowFieldFile`](PHXRowFieldFile.md), [`XPathFile`](XPathFile.md)
---
**Declaration**

```java
public interface OutputFile2
```

Interface for output files (not file variables) used in script-wrappers

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `parse()`<br>Parse the output file |
| `void` | `setFileToParse(java.lang.String fileName)`<br>Sets the file that will be parsed. |

## Method Detail

### parse

```java
void parse()
    throws java.lang.Exception
```
Parse the output file

**Throws:**
- `java.lang.Exception`

### setFileToParse

```java
void setFileToParse(java.lang.String fileName)
```
Sets the file that will be parsed. Usually this is synonymous with [`ParseableFile.setFileToGenerateOrParse(String)`](ParseableFile.md)

**Parameters:**
- `fileName` - The file to parse