# Interface: ParseableFile

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**All Known Subinterfaces:**

[`InputFile`](InputFile.md), [`OutputFile`](OutputFile.md)

**All Known Implementing Classes:**

[`AbstractFile`](AbstractFile.md), [`CAEOutputFile`](CAEOutputFile.md), [`PHXRowFieldFile`](PHXRowFieldFile.md), [`XPathFile`](XPathFile.md)

--- 
**Declaration:**
```java
public interface ParseableFile
```

Interface for files (not file variables) used in script wrappers

## Nested Class Summary

| Modifier and Type | Interface and Description |
|-------------------|-------------------------|
| `static class`    | [`ParseableFile.Mode`](ParseableFile.Mode.md)<br>File mode. Moved to type-safe enum from legacy integer constants |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `backup()`<br>Backup the file on disk. |
| `void` | `close()` <br>Close the file and free up resources |
| `void` | `delete()` <br>Delete the file from disk. |
| `void` | `readTemplate()` <br>Read the template. |
| `void` | `setFileToGenerateOrParse(java.lang.String fileName)` <br>Set the file to generate or to parse, depending on the mode |
| `void` | `setTempEmbedded(java.lang.String option)` <br>This method applies only to ModelCenter and has no function in ModelCenter Remote Execution |
| `void` | `setTemplateFile(java.lang.String templateFileName)` <br>Set the template file to read. |
| `void` | `setVariable(java.lang.String name, java.lang.String value)` <br>Sets the value of a variable |

## Method Detail

### backup

```java
void backup()
```

Backup the file on disk. File is at the same location with ".bac" appended to the end. If a file by that name already exists, it is deleted prior to moving.

### close

```java
void close()
```

Close the file and free up resources

### delete

```java
void delete()
```

Delete the file from disk.

### readTemplate

```java
void readTemplate()
           throws java.io.IOException,
                  com.phoenix_int.aserver.util.PHXInvalidFormatException,
                  PHXNoSuchTokenException,
                  java.lang.IllegalAccessException,
                  java.lang.InstantiationException,
                  PHXNumberFormatException,
                  PHXBookmarkNotFoundException,
                  PHXSectionNotFoundException
```

Read the template. In MCRE 7.1, this method was changed to never throw any exceptions. Reading the templates allows you to fill in default values if you can, but is not mandatory.

**Throws:**

- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- [`PHXNoSuchTokenException`](../../PHXNoSuchTokenException.md)
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- [`PHXNumberFormatException`](../../../types/PHXNumberFormatException.md)
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)

### setFileToGenerateOrParse

```java
void setFileToGenerateOrParse(java.lang.String fileName)
```

Set the file to generate or to parse, depending on the mode

**Parameters:**
- `fileName` -

### setTempEmbedded

```java
void setTempEmbedded(java.lang.String option)
```

This method applies only to ModelCenter and has no function in ModelCenter Remote Execution

### setTemplateFile

```java
void setTemplateFile(java.lang.String templateFileName)
```

Set the template file to read. If the template file is not specified, it defaults to the file that is parsed or generated, for [`Mode.PARSE`](ParseableFile.Mode.md) or [`Mode.GENERATE`](ParseableFile.Mode.md), respectively.

**Parameters:**
- `templateFileName` - file name

### setVariable

```java
void setVariable(java.lang.String name,
                 java.lang.String value)
          throws PHXNoSuchObjectException
```

Sets the value of a variable

**Parameters:**
- `name` - variable name
- `value` - variable value as a string

**Throws:**

- [`PHXNoSuchObjectException`](../../../PHXNoSuchObjectException.md)