# Class: PHXRowFieldRange

**Package:**
- `com.phoenix_int.aserver.util.scriptwrapper.api`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldRange
```

**Implemented Interfaces**

- [IPHXRange](IPHXRange.md)

--- 
**Declaration**

```java
public class PHXRowFieldRange
extends java.lang.Object
implements IPHXRange
```

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `static java.lang.String` | `NAME_SEPARATOR` |
| `static java.lang.String` | `RANGE_SEPARATOR` |

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXRowFieldRange()` |
| `PHXRowFieldRange(java.lang.String str)` |
| `PHXRowFieldRange(java.lang.String start, java.lang.String end)` |
| `PHXRowFieldRange(java.lang.String pageName, int row)` |
| `PHXRowFieldRange(java.lang.String pageName, int row, int field)` |
| `PHXRowFieldRange(java.lang.String pageName, java.lang.String parent, int startRow)` |
| `PHXRowFieldRange(java.lang.String pageName, java.lang.String parent, java.lang.String startMark, int startOccurrence)` |
| `PHXRowFieldRange(java.lang.String pageName, java.lang.String startRow, java.lang.String endRow)` |
| `PHXRowFieldRange(java.lang.String pageName, java.lang.String parent, java.lang.String start, java.lang.String end)` |
| `PHXRowFieldRange(java.lang.String pageName, java.lang.String startRow, java.lang.String endRow, java.lang.String startCol, java.lang.String endCol)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `int` | `absoluteEndRow(`[`IPHXLineStore`](../IPHXLineStore.md)` lines, java.util.Vector bookmarks, java.util.Vector sections)` |
| `int` | `absoluteStartRow(`[`IPHXLineStore`](../IPHXLineStore.md)` lines, java.util.Vector bookmarks, java.util.Vector sections)`<br>Returns the actual starting row number |
| `void` | `assertEquals(`[`IPHXRange`](IPHXRange.md)` other)`<br>Test comparison function. |
| `void` | `clearEndingMark()` |
| `void` | `clearStartingMark()` |
| `void` | `fromString(java.lang.String str)` |
| `int` | `getAbsoluteStartRow()`<br>Returns the stored starting row number, assuming it has been stored. |
| `java.lang.String` | `getDelimiters()` |
| `java.lang.String` | `getEnd()` |
| `int` | `getEndCol()` |
| `java.lang.String` | `getEndMark()` |
| `int` | `getEndOccurrence()` |
| `int` | `getEndOffset()` |
| `java.lang.String` | `getEndParent()` |
| `int` | `getEndRow()` |
| `int` | `getNumDimensions()` |
| `int` | `getNumDimensions(java.lang.String fformat)` |
| `java.lang.String` | `getPageName()` |
| `java.lang.String` | `getParent()` |
| `java.lang.String` | `getRowColString()` |
| `java.lang.String` | `getStart()` |
| `java.lang.String` | `getStart(boolean addEscapes)` |
| `int` | `getStartCol()` |
| `java.lang.String` | `getStartMark()` |
| `int` | `getStartOccurrence()` |
| `int` | `getStartOffset()` |
| `int` | `getStartRow()` |
| `boolean` | `isArray()` |
| `boolean` | `isColArray()` |
| `boolean` | `isHorizontallyResizable()` |
| `boolean` | `isRowArray()` |
| `void` | `setAbsoluteStartRow(int row)`<br>Sets the stored starting row number. |
| `void` | `setDelimiters(java.lang.String delim)` |
| `void` | `setEndingCol(int col)` |
| `void` | `setEndingMark(java.lang.String mark, int occurrence, int offset)` |
| `void` | `setEndingRow(int row)` |
| `void` | `setEndParent(java.lang.String parent)` |
| `void` | `setPageName(java.lang.String pageName)` |
| `void` | `setParent(java.lang.String parent)` |
| `void` | `setStartingCol(int col)` |
| `void` | `setStartingMark(java.lang.String mark, int occurrence, int offset)` |
| `void` | `setStartingRow(int row)` |
| `static java.util.Vector<java.lang.String>` | `split(java.lang.String rangeStrings)`<br>Splits a multi-range string into individual range strings. |
| `java.lang.String` | `toString()` |
| `java.lang.String` | `toString(boolean showPageName)` |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Field Detail

### RANGE_SEPARATOR

```java
public static final java.lang.String RANGE_SEPARATOR
```

**See Also:**
- [Constant Field Values](../../../../../../constant-values.md)

### NAME_SEPARATOR

```java
public static final java.lang.String NAME_SEPARATOR
```

**See Also:**
- [Constant Field Values](../../../../../../constant-values.md)

## Constructor Detail

### PHXRowFieldRange

```java
public PHXRowFieldRange()
```

### PHXRowFieldRange

```java
public PHXRowFieldRange(java.lang.String str)
```

### PHXRowFieldRange

```java
public PHXRowFieldRange(java.lang.String start, 
                        java.lang.String end)
```

### PHXRowFieldRange

```java
public PHXRowFieldRange(java.lang.String pageName, 
                        java.lang.String parent, 
                        java.lang.String start, 
                        java.lang.String end)
```

### PHXRowFieldRange

```java
public PHXRowFieldRange(java.lang.String pageName, 
                        int row)
```

### PHXRowFieldRange

```java
public PHXRowFieldRange(java.lang.String pageName, 
                        int row, 
                        int field)
```

### PHXRowFieldRange

```java
public PHXRowFieldRange(java.lang.String pageName, 
                        java.lang.String parent, 
                        int startRow)
```

### PHXRowFieldRange

```java
public PHXRowFieldRange(java.lang.String pageName, 
                        java.lang.String parent, 
                        java.lang.String startMark, 
                        int startOccurrence)
```

### PHXRowFieldRange

```java
public PHXRowFieldRange(java.lang.String pageName, 
                        java.lang.String startRow, 
                        java.lang.String endRow)
```

### PHXRowFieldRange

```java
public PHXRowFieldRange(java.lang.String pageName, 
                        java.lang.String startRow, 
                        java.lang.String endRow, 
                        java.lang.String startCol, 
                        java.lang.String endCol)
```

# Method Detail

### generate

```java
public void generate()
              throws java.io.IOException,
                     com.phoenix_int.aserver.util.PHXInvalidFormatException,
                     PHXNoSuchTokenException,
                     java.lang.IllegalAccessException,
                     java.lang.InstantiationException,
                     PHXNumberFormatException,
                     PHXBookmarkNotFoundException,
                     PHXSectionNotFoundException,
                     com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException
```
Generate the input file

**Specified by:**
- `generate` in interface [`InputFile`](InputFile.md)

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- [`PHXNoSuchTokenException`](../PHXNoSuchTokenException.md)
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- [`PHXNumberFormatException`](../../types/PHXNumberFormatException.md)
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)
- `com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException`

### setFileToGenerate

```java
public void setFileToGenerate(java.lang.String fileName)
```
Set the file to be generated

**Specified by:**
- `setFileToGenerate` in interface [`InputFile`](InputFile.md)

**Parameters:**
- `fileName` - file name

### parse

```java
public void parse()
           throws java.io.IOException,
                  com.phoenix_int.aserver.util.PHXInvalidFormatException,
                  PHXNoSuchTokenException,
                  java.lang.IllegalAccessException,
                  java.lang.InstantiationException,
                  PHXNumberFormatException,
                  PHXBookmarkNotFoundException,
                  PHXSectionNotFoundException,
                  com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException
```
Parse the output file

**Specified by:**
- `parse` in interface [`OutputFile`](OutputFile.md)
- `parse` in interface [`OutputFile2`](OutputFile2.md)

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- [`PHXNoSuchTokenException`](../PHXNoSuchTokenException.md)
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- [`PHXNumberFormatException`](../../types/PHXNumberFormatException.md)
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)
- `com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException`

### setFileToParse

```java
public void setFileToParse(java.lang.String fileName)
```
Set the file to be parsed

**Specified by:**
- `setFileToParse` in interface [`OutputFile`](OutputFile.md)
- `setFileToParse` in interface [`OutputFile2`](OutputFile2.md)

**Parameters:**
- `fileName` - file name

### newParser

```java
protected [`Parser`](../Parser.md) newParser(java.io.File rFile, 
                           [`Parser.Mode`](../Parser.Mode.md) pmode)
                    throws java.io.IOException
```
Generate a new parser for the given file and mode

**Specified by:**
- `newParser` in class [`AbstractFile`](AbstractFile.md)

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

**Overrides:**
- `ensureFileParser` in class [`AbstractFile`](AbstractFile.md)

**Parameters:**
- `mode` - parser mode in current context

**Throws:**
- `java.io.IOException`

### defineSection

```java
public void defineSection(java.lang.String name, 
                          java.lang.String start, 
                          java.lang.String end, 
                          java.lang.String delimiters)
                   throws com.phoenix_int.aserver.util.PHXNoSuchBookmarkException
```

**Throws:**
- `com.phoenix_int.aserver.util.PHXNoSuchBookmarkException`

### defineBookmark

```java
public void defineBookmark(java.lang.String name, 
                           java.lang.String parent, 
                           java.lang.String start)
```

### defineVar

```java
public void defineVar(java.lang.String name, 
                      java.lang.String type, 
                      boolean isInput, 
                      java.lang.String rangeStr)
               throws PHXNameAlreadyInUseException, 
                      PHXInvalidNameException, 
                      PHXInvalidTypeException
```

**Throws:**
- [`PHXNameAlreadyInUseException`](../../PHXNameAlreadyInUseException.md)
- [`PHXInvalidNameException`](../../PHXInvalidNameException.md)
- [`PHXInvalidTypeException`](../../types/PHXInvalidTypeException.md)

### defineVar

```java
public void defineVar(java.lang.String name, 
                      java.lang.String type, 
                      boolean isInput, 
                      java.lang.String rangeStr, 
                      java.lang.String units, 
                      java.lang.String description, 
                      java.lang.String lowerBound, 
                      java.lang.String upperBound, 
                      java.lang.String enumValues, 
                      java.lang.String enumAliases, 
                      java.lang.String format)
               throws PHXNameAlreadyInUseException, 
                      PHXInvalidNameException, 
                      PHXInvalidTypeException
```

**Throws:**
- [`PHXNameAlreadyInUseException`](../../PHXNameAlreadyInUseException.md)
- [`PHXInvalidNameException`](../../PHXInvalidNameException.md)
- [`PHXInvalidTypeException`](../../types/PHXInvalidTypeException.md)

### defineVar

```java
public void defineVar(java.lang.String name, 
                      java.lang.String type, 
                      boolean isInput, 
                      java.lang.String rangesStr, 
                      java.lang.String units, 
                      java.lang.String description, 
                      java.lang.String lowerBound, 
                      java.lang.String upperBound, 
                      java.lang.String enumValues, 
                      java.lang.String enumAliases, 
                      java.lang.String format, 
                      java.lang.String fformat)
               throws PHXNameAlreadyInUseException, 
                      PHXInvalidNameException, 
                      PHXInvalidTypeException
```

**Throws:**
- [`PHXNameAlreadyInUseException`](../../PHXNameAlreadyInUseException.md)
- [`PHXInvalidNameException`](../../PHXInvalidNameException.md)
- [`PHXInvalidTypeException`](../../types/PHXInvalidTypeException.md)

### transferVars

```java
protected void transferVars(ParseableFile.Mode mode)
                     throws java.io.IOException,
                            com.phoenix_int.aserver.util.PHXInvalidFormatException,
                            PHXNoSuchTokenException,
                            java.lang.IllegalAccessException,
                            java.lang.InstantiationException,
                            PHXNumberFormatException,
                            PHXBookmarkNotFoundException,
                            PHXSectionNotFoundException,
                            com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException
```
Note that if wrapper is null, variable collection should be empty, and there should be no harm in calling this method

Transfer values for variables that have been defined using methods from the concrete implementation, i.e. [`defineVar(String, String, boolean, String)`](PHXRowFieldFile.md)

Variables defined using [`PHXScriptWrapperObject.addVariable(String, String, boolean)`](PHXScriptWrapperObject.md) must be explicitly transferred using methods of the concrete implementation class

**Specified by:**
- `transferVars` in class [`AbstractFile`](AbstractFile.md)

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- [`PHXNoSuchTokenException`](../PHXNoSuchTokenException.md)
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- [`PHXNumberFormatException`](../../types/PHXNumberFormatException.md)
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)
- `com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException`