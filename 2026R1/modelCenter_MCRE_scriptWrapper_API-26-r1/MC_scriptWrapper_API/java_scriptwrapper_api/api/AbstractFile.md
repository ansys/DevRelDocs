# Class: AbstractFile

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.scriptwrapper.api.AbstractFile
```

**Implemented Interfaces**

- [`ParseableFile`](ParseableFile.md), `java.io.Closeable`, `java.lang.AutoCloseable`

**Direct Known Subclasses**

- `CAEOutputFile`, `PHXRowFieldFile`, `XPathFile`

--- 

## Declaration

```java
public abstract class AbstractFile
extends java.lang.Object
implements ParseableFile, java.io.Closeable
```

Common implementation for files (not file variables) used in script wrappers.

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.util.scriptwrapper.api.[ParseableFile](ParseableFile.md) 
`ParseableFile.Mode`

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `protected com.phoenix_int.util.PHXFileUtils.Encoding` | `encoding` |
| `protected java.lang.String` | `fileName` |
| `protected ParseableFile.Mode` | `mode` |
| `protected Parser` | `parser` |
| `protected java.lang.String` | `templateFileName` |
| `protected PHXScriptWrapperObject` | `wrapper` |

## Constructor Summary

| Modifier | Constructor and Description |
|----------|----------------------------|
| `protected` | `AbstractFile(java.io.File baseDir, ParseableFile.Mode mode)`<br>Pre-QuickWrap `PHXRowFieldFile` constructor did not have a `PHXScriptWrapperObject` argument. |
| `protected` | `AbstractFile(PHXScriptWrapperObject wrapper, ParseableFile.Mode mode)` |
| `protected` | `AbstractFile(PHXScriptWrapperObject wrapper, java.io.File dir, ParseableFile.Mode mode)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `protected void` | `actionByMode(ParseableFile.Mode mode)`<br>Perform an action consistent with ParseableFile.Mode |
| `void` | `backup()`<br>Backup the file on disk. |
| `void` | `close()`<br>Close the file and free up resources |
| `void` | `delete()`<br>Delete the file from disk. |
| `protected void` | `ensureFileParser(ParseableFile.Mode mode)`<br>Ensure there is a valid parser |
| `com.phoenix_int.util.PHXFileUtils.Encoding` | `getEncoding()` |
| `protected java.io.File` | `getRealFile(java.lang.String fileName)`<br>Get the file on disk, possibly relative to the current run-share directory |
| `protected abstract Parser` | `newParser(java.io.File rFile, Parser.Mode pmode)`<br>Generate a new parser for the given file and mode |
| `void` | `readTemplate()`<br>Read the template. |
| `void` | `setEncoding(com.phoenix_int.util.PHXFileUtils.Encoding enc)` |
| `void` | `setEncoding(java.lang.String enc)` |
| `void` | `setFileToGenerateOrParse(java.lang.String fileName)`<br>Set the file to generate or to parse, depending on the mode |
| `void` | `setTempEmbedded(java.lang.String option)`<br>This method applies only to ModelCenter and has no function in ModelCenter Remote Execution |
| `void` | `setTemplateFile(java.lang.String templateFileName)`<br>Set the template file to read. |
| `void` | `setVariable(java.lang.String name, java.lang.String value)`<br>Sets the value of a variable |
| `protected abstract void` | `transferVars(ParseableFile.Mode mode)`<br>Transfer values for variables that have been defined using methods from the concrete implementation |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Field Detail

### mode

```java
protected final ParseableFile.Mode mode
```

### wrapper

```java
protected final PHXScriptWrapperObject wrapper
```

### parser

```java
protected Parser parser
```

### templateFileName

```java
protected java.lang.String templateFileName
```

### fileName

```java
protected java.lang.String fileName
```

### encoding

```java
protected com.phoenix_int.util.PHXFileUtils.Encoding encoding
```

## Constructor Detail

### AbstractFile

```java
protected AbstractFile(java.io.File baseDir, 
                       ParseableFile.Mode mode)
```

Pre-QuickWrap `PHXRowFieldFile` constructor did not have a `PHXScriptWrapperObject` argument. This constructor handles the legacy case, which, in all likelihood, will continue to be used.

**Parameters:**
- `baseDir` - base directory containing template files, etc.
- `mode` - parsing mode

### AbstractFile

```java
protected AbstractFile(PHXScriptWrapperObject wrapper, 
                       ParseableFile.Mode mode)
```

### AbstractFile

```java
protected AbstractFile(PHXScriptWrapperObject wrapper, 
                       java.io.File dir, 
                       ParseableFile.Mode mode)
```

**Parameters:**
- `wrapper` - may be null for legacy constructor compatibility
- `dir` -
- `mode` -

## Method Detail

### backup

```java
public void backup()
```

Backup the file on disk. File is at the same location with ".bac" appended to the end. If a file by that name already exists, it is deleted prior to moving.

**Specified by:**
- `backup` in interface `ParseableFile`

### close

```java
public void close()
```

Close the file and free up resources

**Specified by:**
- `close` in interface `ParseableFile`
- `close` in interface `java.io.Closeable`
- `close` in interface `java.lang.AutoCloseable`

### delete

```java
public void delete()
```

Delete the file from disk.

**Specified by:**
- `delete` in interface `ParseableFile`

### newParser

```java
protected abstract Parser newParser(java.io.File rFile, 
                                    Parser.Mode pmode) 
                             throws java.io.IOException
```

Generate a new parser for the given file and mode

**Parameters:**
- `rFile` - The file to open
- `pmode` - caching mode for underlying parser

**Throws:**
- `java.io.IOException`

### ensureFileParser

```java
protected void ensureFileParser(ParseableFile.Mode mode) 
                         throws java.io.IOException
```

Ensure there is a valid parser

**Parameters:**
- `mode` - parser mode in current context

**Throws:**
- `java.io.IOException`

### getEncoding

```java
public com.phoenix_int.util.PHXFileUtils.Encoding getEncoding()
```

### setEncoding

```java
public void setEncoding(com.phoenix_int.util.PHXFileUtils.Encoding enc)
```

### setEncoding

```java
public void setEncoding(java.lang.String enc)
```

### getRealFile

```java
protected java.io.File getRealFile(java.lang.String fileName)
```

Get the file on disk, possibly relative to the current run-share directory

**Parameters:**
- `fileName` -

**Returns:**

### actionByMode

```java
protected void actionByMode(ParseableFile.Mode mode) 
                     throws java.io.IOException, 
                            com.phoenix_int.aserver.util.PHXInvalidFormatException, 
                            PHXNoSuchTokenException, 
                            java.lang.IllegalAccessException, 
                            java.lang.InstantiationException, 
                            PHXNumberFormatException, 
                            PHXBookmarkNotFoundException, 
                            PHXSectionNotFoundException
```

Perform an action consistent with `ParseableFile.Mode`

**Parameters:**
- `mode` -

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNoSuchTokenException`
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `PHXNumberFormatException`
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)

### readTemplate

```java
public void readTemplate() 
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

**Specified by:**
- `readTemplate` in interface `ParseableFile`

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNoSuchTokenException`
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `PHXNumberFormatException`
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)

### setFileToGenerateOrParse

```java
public void setFileToGenerateOrParse(java.lang.String fileName)
```

Set the file to generate or to parse, depending on the mode

**Specified by:**
- `setFileToGenerateOrParse` in interface `ParseableFile`

### setTempEmbedded

```java
public void setTempEmbedded(java.lang.String option)
```

This method applies only to ModelCenter and has no function in ModelCenter Remote Execution

**Specified by:**
- `setTempEmbedded` in interface `ParseableFile`

### setTemplateFile

```java
public void setTemplateFile(java.lang.String templateFileName)
```

Set the template file to read. If the template file is not specified, it defaults to the file that is parsed or generated, for `Mode.PARSE` or `Mode.GENERATE`, respectively.

**Specified by:**
- `setTemplateFile` in interface `ParseableFile`

**Parameters:**
- `templateFileName` - file name

### setVariable

```java
public void setVariable(java.lang.String name, 
                        java.lang.String value) 
                 throws PHXNoSuchObjectException
```

Sets the value of a variable

**Specified by:**
- `setVariable` in interface `ParseableFile`

**Parameters:**
- `name` - variable name
- `value` - variable value as a string

**Throws:**
- `PHXNoSuchObjectException`

### transferVars

```java
protected abstract void transferVars(ParseableFile.Mode mode) 
                              throws java.io.IOException, 
                                     com.phoenix_int.aserver.util.PHXInvalidFormatException, 
                                     PHXNoSuchTokenException, 
                                     java.lang.IllegalAccessException, 
                                     java.lang.InstantiationException, 
                                     PHXNumberFormatException, 
                                     PHXBookmarkNotFoundException, 
                                     PHXSectionNotFoundException
```

Transfer values for variables that have been defined using methods from the concrete implementation, i.e. `PHXRowFieldFile.defineVar(String, String, boolean, String)`. Variables defined using `PHXScriptWrapperObject.addVariable(String, String, boolean)` must be explicitly transferred using methods of the concrete implementation class

**Parameters:**
- `mode` -

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNoSuchTokenException`
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `PHXNumberFormatException`
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)