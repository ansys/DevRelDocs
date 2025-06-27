# Class: CAEOutputFile

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.scriptwrapper.api.AbstractFile
    ↳ com.phoenix_int.aserver.util.scriptwrapper.api.CAEOutputFile
```

**Implemented Interfaces**

- `OutputFile2`, `ParseableFile`, `java.io.Closeable`, `java.lang.AutoCloseable`

--- 
## Declaration

```java
public class CAEOutputFile
extends AbstractFile
implements OutputFile2
```

This represents a binary output file from a CAE program such as NASTRAN or LSDyna.

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.util.scriptwrapper.api.ParseableFile
 `ParseableFile.Mode`

## Field Summary

### Fields inherited from class com.phoenix_int.aserver.util.scriptwrapper.api.AbstractFile
`encoding`, `fileName`, `mode`, `parser`, `templateFileName`, `wrapper` 

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `CAEOutputFile(PHXScriptWrapperObject wrapper, java.io.File file)` |
| `CAEOutputFile(PHXScriptWrapperObject wrapper, java.io.File file, FileType type)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `defineArrayVar(java.lang.String name, java.lang.String specifier)` |
| `void` | `defineVar(java.lang.String name, java.lang.String specifier)` |
| `protected Parser` | `newParser(java.io.File rFile, Parser.Mode pmode)`<br>Generate a new parser for the given file and mode |
| `void` | `parse()`<br>Parse the output file |
| `void` | `setFileToParse(java.lang.String fileName)`<br>Set the file to parse |
| `protected void` | `transferVars(ParseableFile.Mode mode)`<br>Transfer values for variables that have been defined using methods from the concrete implementation |

### Methods inherited from class AbstractFile

`actionByMode`, `backup`, `close`, `delete`, `ensureFileParser`, `getEncoding`, `getRealFile`, `readTemplate`, `setEncoding`, `setEncoding`, `setFileToGenerateOrParse`, `setTempEmbedded`, `setTemplateFile`, `setVariable`

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### CAEOutputFile

```java
public CAEOutputFile(PHXScriptWrapperObject wrapper, 
                     java.io.File file, 
                     FileType type) 
              throws PHXLicenseException
```

**Throws:**
- `PHXLicenseException`

### CAEOutputFile

```java
public CAEOutputFile(PHXScriptWrapperObject wrapper, 
                     java.io.File file) 
              throws PHXLicenseException
```

**Throws:**
- `PHXLicenseException`

## Method Detail

### defineArrayVar

```java
public void defineArrayVar(java.lang.String name, 
                           java.lang.String specifier) 
                    throws PHXNameAlreadyInUseException, 
                    PHXInvalidNameException, 
                    PHXInvalidTypeException
```

**Throws:**
- `PHXNameAlreadyInUseException`
- `PHXInvalidNameException`
- `PHXInvalidTypeException`

### defineVar

```java
public void defineVar(java.lang.String name, 
                      java.lang.String specifier) 
               throws PHXNameAlreadyInUseException, 
                      PHXInvalidNameException, 
                      PHXInvalidTypeException
```

**Throws:**
- `PHXNameAlreadyInUseException`
- `PHXInvalidNameException`
- `PHXInvalidTypeException`

### parse

```java
public void parse() throws java.lang.Exception
```
Parse the output file

**Specified by:**
- `parse` in interface `OutputFile2`

**Throws:**
- `java.lang.Exception`

### newParser

```java
protected Parser newParser(java.io.File rFile, 
                           Parser.Mode pmode) 
                    throws java.io.IOException
```
Generate a new parser for the given file and mode

**Specified by:**
- `newParser` in class `AbstractFile`

**Parameters:**
- `rFile` - The file to open
- `pmode` - caching mode for underlying parser

**Throws:**
- `java.io.IOException`

### transferVars

```java
protected void transferVars(ParseableFile.Mode mode) 
                     throws java.io.IOException, 
                            com.phoenix_int.aserver.util.PHXInvalidFormatException, 
                            PHXNoSuchTokenException, 
                            java.lang.IllegalAccessException, 
                            java.lang.InstantiationException, 
                            PHXNumberFormatException
```
Transfer values for variables that have been defined using methods from the concrete implementation, i.e. `PHXRowFieldFile.defineVar(String, String, boolean, String)`. Variables defined using `PHXScriptWrapperObject.addVariable(String, String, boolean)` must be explicitly transferred using methods of the concrete implementation class

**Specified by:**
- `transferVars` in class `AbstractFile`

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNoSuchTokenException`
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `PHXNumberFormatException`

### setFileToParse

```java
public void setFileToParse(java.lang.String fileName)
```
Set the file to parse

**Specified by:**
- `setFileToParse` in interface `OutputFile2`

**Parameters:**
- `fileName` -