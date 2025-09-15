# Class: PHXRowFieldFile

**Package:**
- `com.phoenix_int.aserver.util.scriptwrapper.api`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.scriptwrapper.api.AbstractFile
    ↳ com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldFile
```

**Implemented Interfaces**

- [InputFile](InputFile.md)
- [OutputFile](OutputFile.md)
- [OutputFile2](OutputFile2.md)
- [ParseableFile](ParseableFile.md)
- java.io.Closeable
- java.lang.AutoCloseable

--- 
**Declaration**

```java
public class PHXRowFieldFile
extends AbstractFile
implements InputFile, OutputFile, OutputFile2
```

Class implements the parsing capabilities of the RowField type files from the fileWrapper facility. Typical use would be to write a function which creates an instance of this class and implements the parsing using the `transferVar()` function. Then, a mode can be passed in which specifies whether the function should read the template file, generate an input file, or parse an output file.
You will want to read the documentation on the fileWrapper utility for more specifics on how exactly the file parsing and options work.

Example usage from a java scriptwrapper (Comments show fileWrapper equivalents):

```java
  //RowFieldInputFile freqIN
  void rowFieldFreqIN(int mode)
      throws Exception
  {
     RowFieldFile file = new RowFieldFile(super.wrapper, mode)
     //templateFile: freq.txt.template
     file.setTemplateFile("freq.txt.template");
     //fileToGenerate: freq.txt
     file.setFileToGenerateOrParse("freq.txt");

     //variable: W1 double 1 2
     file.transferVar(super.W1, 1, 2);
     //variable: W2 double 2 2
     file.transferVar(super.W2, 2, 2);
     //variable: u1 double 3 2
     file.transferVar(super.u1, 3, 2);
     //variable: u2 double 4 2
     file.transferVar(super.u2, 4, 2);

     //Actually generate a file if we are told to
     if ( mode == RowFieldFile.GENERATE )
        file.generate();
  }
```

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.util.scriptwrapper.api.ParseableFile 
`ParseableFile.Mode` 

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `static int` | `GENERATE`<br>Deprecated in favor of [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md) |
| `static int` | `PARSE`<br>Deprecated in favor of [ParseableFile.Mode.PARSE](ParseableFile.Mode.md) |
| `static int` | `READ_TEMPLATE`<br>Deprecated in favor of [ParseableFile.Mode.READ_TEMPLATE](ParseableFile.Mode.md) |

### Fields inherited from class com.phoenix_int.aserver.util.scriptwrapper.api.AbstractFile

`encoding`, `fileName`, `mode`, `parser`, `templateFileName`, `wrapper`

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXRowFieldFile(PHXScriptWrapperObject wrapper)`<br>Defaults to [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md) |
| `PHXRowFieldFile(PHXScriptWrapperObject wrapper, int mode)`<br>Deprecated in favor of [PHXRowFieldFile(PHXScriptWrapperObject, ParseableFile.Mode)](PHXRowFieldFile.md) |
| `PHXRowFieldFile(PHXScriptWrapperObject wrapper, ParseableFile.Mode mode)` |
| `PHXRowFieldFile(java.lang.String baseDirectory, int mode)`<br>Legacy (pre-QW) constructor. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `clearMarks()`<br>Removes effects of any previous `markAsBeginning()` or `markAsEnd()` calls |
| `void` | `defineBookmark(java.lang.String name, java.lang.String parent, java.lang.String start)` |
| `void` | `defineSection(java.lang.String name, java.lang.String start, java.lang.String end, java.lang.String delimiters)` |
| `void` | `defineVar(java.lang.String name, java.lang.String type, boolean isInput, java.lang.String rangeStr)` |
| `void` | `defineVar(java.lang.String name, java.lang.String type, boolean isInput, java.lang.String rangeStr, java.lang.String units, java.lang.String description, java.lang.String lowerBound, java.lang.String upperBound, java.lang.String enumValues, java.lang.String enumAliases, java.lang.String format)` |
| `void` | `defineVar(java.lang.String name, java.lang.String type, boolean isInput, java.lang.String rangesStr, java.lang.String units, java.lang.String description, java.lang.String lowerBound, java.lang.String upperBound, java.lang.String enumValues, java.lang.String enumAliases, java.lang.String format, java.lang.String fformat)` |
| `protected void` | `ensureFileParser(ParseableFile.Mode mode)`<br>Ensure there is a valid parser |
| `void` | `generate()`<br>Generate the input file |
| `void` | `markAsBeginning(int row)`<br>Makes the specified row act as row 1 for all subsequent calls until another markAsBeginning or clearMarks call. |
| `void` | `markAsBeginning(java.lang.String find)`<br>Searches for the specified string and makes the row where the string was found act as row 1 for all subsequent calls until another markAsBeginning or clearMarks call. |
| `void` | `markAsBeginning(java.lang.String find, int occurrence, int offset, boolean regex)`<br>Searches for the specified string and makes the row where the string was found act as row 1 for all subsequent calls until another markAsBeginning or clearMarks call. |
| `void` | `markAsEnd(int row)`<br>Makes the specified row act as row -1 (end of file) for all subsequent calls until another markAsBeginning or clearMarks call. |
| `void` | `markAsEnd(java.lang.String find)`<br>Searches for the specified string, starting from the end of the file and working towards the beginning, and makes the row where the string was found act as row -1 (end of file) for all subsequent calls until another markAsEnd or clearMarks call. |
| `void` | `markAsEnd(java.lang.String find, int occurrence, int offset, boolean regex)`<br>Searches for the specified string and makes the row where the string was found act as row -1 (end of file) for all subsequent calls until another markAsEnd or clearMarks call. |
| `protected Parser` | `newParser(java.io.File rFile, Parser.Mode pmode)`<br>Generate a new parser for the given file and mode |
| `void` | `parse()`<br>Parse the output file |
| `double` | `readDouble(int row, int field)`<br>Reads a value out of the input file. |
| `long` | `readLong(int row, int field)`<br>Reads a value out of the input file. |
| `java.lang.String` | `readValue(int row, int field)`<br>Reads a value out of the input file. |
| `void` | `setDecimalSeparator(char separator)`<br>Set decimal separator for floating point value literals. |
| `void` | `setDelimiters(java.lang.String delimiters)`<br>Sets the delimiters which should be used for parsing lines into fields. |
| `void` | `setFileToGenerate(java.lang.String fileName)`<br>Set the file to be generated |
| `void` | `setFileToParse(java.lang.String fileName)`<br>Set the file to be parsed |
| `void` | `transferArray(PHXSimpleArray var, int rowstart, int rowend, int fieldstart, int fieldend)`<br>Transfers the data for a particular array. |
| `void` | `transferArray(PHXSimpleArray var, int rowstart, int rowend, int fieldstart, int fieldend, boolean resizable, java.lang.String fformat)`<br>Transfers the data for a particular array. |
| `void` | `transferArray(PHXSimpleArray var, int rowstart, int rowend, int fieldstart, int fieldend, boolean resizable, java.lang.String fformat, int numDimensions)`<br>Transfers the data for a particular array. |
| `void` | `transferArray(PHXSimpleArray var, int rowstart, int rowend, int fieldstart, int fieldend, int numDimensions)`<br>Transfers the data for a particular array. |
| `void` | `transferKeyVar(PHXSimpleType var, java.lang.String key)`<br>Transfers the data for a particular variable. |
| `void` | `transferKeyVar(PHXSimpleType var, java.lang.String key, int occurrence, int rowOffset, int field, java.lang.String fformat)`<br>Transfers the data for a particular variable. |
| `void` | `transferVar(PHXSimpleType var, int row, int field)`<br>Transfers the data for a particular variable. |
| `void` | `transferVar(PHXSimpleType var, int row, int field, java.lang.String fformat)`<br>Transfers the data for a particular variable. |
| `void` | `transferVar(java.lang.String name, PHXSimpleType var, int row, int field)` |
| `void` | `transferVar(java.lang.String name, PHXSimpleType var, int row, int field, java.lang.String fformat)` |
| `protected void` | `transferVars(ParseableFile.Mode mode)`<br>Note that if wrapper is null, variable collection should be empty, and there should be no harm in calling this method |
| `void` | `writeValue(int row, int field, java.lang.String val)`<br>Writes a token out to the output file. |

### Methods inherited from class com.phoenix_int.aserver.util.scriptwrapper.api.AbstractFile

`actionByMode`, `backup`, `close`, `delete`, `getEncoding`, `getRealFile`, `readTemplate`, `setEncoding`, `setEncoding`, `setFileToGenerateOrParse`, `setTempEmbedded`, `setTemplateFile`, s`etVariable`

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

### Methods inherited from interface com.phoenix_int.aserver.util.scriptwrapper.api.ParseableFile

`backup`, `close`, `delete`, `readTemplate`, `setFileToGenerateOrParse`, `setTempEmbedded`, `setTemplateFile`, `setVariable`

## Field Detail

### GENERATE

```java
@Deprecated
public static final int GENERATE
```

Deprecated in favor of [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md)

This mode makes the row field file prepare to generate the output file by reading the template file, then replacing the specified values passed to `transferVar()`.

### PARSE

```java
@Deprecated
public static final int PARSE
```

Deprecated in favor of [ParseableFile.Mode.PARSE](ParseableFile.Mode.md)

This mode makes the row field file read in values from the `fileToParse` when `transferVar()` is called.

### READ_TEMPLATE

```java
@Deprecated
public static final int READ_TEMPLATE
```

Deprecated in favor of [ParseableFile.Mode.READ_TEMPLATE](ParseableFile.Mode.md)

This mode makes the row field file read in values from the template file when `transferVar()` is called.

## Constructor Detail

### PHXRowFieldFile

```java
public PHXRowFieldFile(PHXScriptWrapperObject wrapper)
```

Defaults to [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md)

**Parameters:**
- `wrapper` - script-wrapper object

### PHXRowFieldFile

```java
public PHXRowFieldFile(PHXScriptWrapperObject wrapper, 
                       ParseableFile.Mode mode)
```

### PHXRowFieldFile

```java
@Deprecated
public PHXRowFieldFile(PHXScriptWrapperObject wrapper, 
                       int mode)
```

Deprecated in favor of [PHXRowFieldFile(PHXScriptWrapperObject, ParseableFile.Mode)](PHXRowFieldFile.md)

**Parameters:**
- `wrapper` - The row field file will find files relative to the run directory specified in this wrapper object.
- `mode` - parser mode

### PHXRowFieldFile

```java
public PHXRowFieldFile(java.lang.String baseDirectory, 
                       int mode)
```

Legacy (pre-QW) constructor.

Note: Using this constructor will make the resultant object incompatible with certain methods. This was necessary for compatibility with QuickWrap. The new constructors accept [PHXScriptWrapperObject](PHXScriptWrapperObject.md). This constructor passes `null` instead.

**Parameters:**
- `baseDirectory` - All files will be relative to this directory
- `mode` - parser mode

## Method Detail

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
- `generate` in interface `InputFile`

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNoSuchTokenException`
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `PHXNumberFormatException`
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)
- `com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException`

### setFileToGenerate

```java
public void setFileToGenerate(java.lang.String fileName)
```

Set the file to be generated

**Specified by:**
- `setFileToGenerate` in interface `InputFile`

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
- `parse` in interface `OutputFile`
- `parse` in interface `OutputFile2`

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNoSuchTokenException`
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `PHXNumberFormatException`
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)
- `com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException`

### setFileToParse

```java
public void setFileToParse(java.lang.String fileName)
```

Set the file to be parsed

**Specified by:**
- `setFileToParse` in interface `OutputFile`
- `setFileToParse` in interface `OutputFile2`

**Parameters:**
- `fileName` - file name

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

### ensureFileParser

```java
protected void ensureFileParser(ParseableFile.Mode mode)
                         throws java.io.IOException
```

Ensure there is a valid parser

**Overrides:**
- `ensureFileParser` in class `AbstractFile`

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
- `PHXNameAlreadyInUseException`
- `PHXInvalidNameException`
- `PHXInvalidTypeException`

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
- `PHXNameAlreadyInUseException`
- `PHXInvalidNameException`
- `PHXInvalidTypeException`

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
- `PHXNameAlreadyInUseException`
- `PHXInvalidNameException`
- `PHXInvalidTypeException`

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

Note that if wrapper is null, variable collection should be empty, and there should be no harm in calling this method.

Transfer values for variables that have been defined using methods from the concrete implementation, i.e. [defineVar(String, String, boolean, String)](PHXRowFieldFile.md)

Variables defined using [PHXScriptWrapperObject.addVariable(String, String, boolean)](PHXScriptWrapperObject.md) must be explicitly transferred using methods of the concrete implementation class.

**Specified by:**
- `transferVars` in class `AbstractFile`

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNoSuchTokenException`
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `PHXNumberFormatException`
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)
- `com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException`

### transferVar

```java
public void transferVar(PHXSimpleType var, 
                        int row, 
                        int field)
                 throws java.io.IOException,
                        PHXNoSuchTokenException,
                        PHXNumberFormatException,
                        PHXBookmarkNotFoundException,
                        PHXSectionNotFoundException,
                        com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException
```

Transfers the data for a particular variable. If mode is [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md), data is read from the var and put into the file, otherwise data is read from the file into the variable.

**Parameters:**
- `var` - The variable to read or write
- `row` - The row in the file to read/write from/to.
- `field` - The field within the row to read/write from/to.

**Throws:**
- `java.io.IOException`
- `PHXNoSuchTokenException`
- `PHXNumberFormatException`
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)
- `com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException`

### transferVar

```java
public void transferVar(java.lang.String name, 
                        PHXSimpleType var, 
                        int row, 
                        int field)
                 throws java.io.IOException,
                        PHXNoSuchTokenException,
                        PHXNumberFormatException,
                        PHXBookmarkNotFoundException,
                        PHXSectionNotFoundException,
                        com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException
```

**Throws:**
- `java.io.IOException`
- `PHXNoSuchTokenException`
- `PHXNumberFormatException`
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)
- `com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException`

### transferVar

```java
public void transferVar(PHXSimpleType var, 
                        int row, 
                        int field, 
                        java.lang.String fformat)
                 throws java.io.IOException,
                        PHXNoSuchTokenException,
                        com.phoenix_int.aserver.util.PHXInvalidFormatException,
                        PHXNumberFormatException,
                        PHXBookmarkNotFoundException,
                        PHXSectionNotFoundException,
                        com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException
```

Transfers the data for a particular variable. If mode is [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md), data is read from the var and put into the file, otherwise data is read from the file into the variable.

**Parameters:**
- `var` - The variable to read or write
- `row` - The row in the file to read/write from/to.
- `field` - The field within the row to read/write from/to.
- `fformat` - The fortran style format string to apply. Pass null
  for standard formatting.

**Throws:**
- `java.io.IOException`
- `PHXNoSuchTokenException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNumberFormatException`
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)
- `com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException`

### transferVar

```java
public void transferVar(java.lang.String name, 
                        PHXSimpleType var, 
                        int row, 
                        int field, 
                        java.lang.String fformat)
                 throws java.io.IOException,
                        PHXNoSuchTokenException,
                        com.phoenix_int.aserver.util.PHXInvalidFormatException,
                        PHXNumberFormatException,
                        PHXBookmarkNotFoundException,
                        PHXSectionNotFoundException,
                        com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException
```

**Throws:**
- `java.io.IOException`
- `PHXNoSuchTokenException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNumberFormatException`
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)
- `com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException`

### transferArray

```java
public void transferArray(PHXSimpleArray var, 
                          int rowstart, 
                          int rowend, 
                          int fieldstart, 
                          int fieldend)
                   throws java.io.IOException,
                          com.phoenix_int.aserver.util.PHXInvalidFormatException,
                          PHXNoSuchTokenException,
                          java.lang.IllegalAccessException,
                          java.lang.InstantiationException,
                          PHXNumberFormatException
```

Transfers the data for a particular array. If mode is [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md), data is read from the var and put into the file, otherwise data is read from the file into the variable.

**Parameters:**
- `var` - The array to read or write
- `rowstart` - The starting row in the file to read/write from/to
- `rowend` - The ending row in the file to read/write from/to
- `fieldstart` - The starting field within the row to read/write from/to
- `fieldend` - The ending field within the row to read/write from/to

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNoSuchTokenException`
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `PHXNumberFormatException`

### transferArray

```java
public void transferArray(PHXSimpleArray var, 
                          int rowstart, 
                          int rowend, 
                          int fieldstart, 
                          int fieldend, 
                          int numDimensions)
                   throws java.io.IOException,
                          com.phoenix_int.aserver.util.PHXInvalidFormatException,
                          PHXNoSuchTokenException,
                          java.lang.IllegalAccessException,
                          java.lang.InstantiationException,
                          PHXNumberFormatException
```

Transfers the data for a particular array. If mode is [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md), data is read from the var and put into the file, otherwise data is read from the file into the variable.

**Parameters:**
- `var` - The array to read or write
- `rowstart` - The starting row in the file to read/write from/to
- `rowend` - The ending row in the file to read/write from/to
- `fieldstart` - The starting field within the row to read/write from/to
- `fieldend` - The ending field within the row to read/write from/to
- `numDimensions` - Either 1 or 2 to read/write 1 or 2-d arrays.

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNoSuchTokenException`
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `PHXNumberFormatException`

### transferArray

```java
public void transferArray(PHXSimpleArray var, 
                          int rowstart, 
                          int rowend, 
                          int fieldstart, 
                          int fieldend, 
                          boolean resizable, 
                          java.lang.String fformat)
                   throws java.io.IOException,
                          com.phoenix_int.aserver.util.PHXInvalidFormatException,
                          PHXNoSuchTokenException,
                          java.lang.IllegalAccessException,
                          java.lang.InstantiationException,
                          PHXNumberFormatException
```

Transfers the data for a particular array. If mode is [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md), data is read from the var and put into the file, otherwise data is read from the file into the variable.

**Parameters:**
- `var` - The array to read or write
- `rowstart` - The starting row in the file to read/write from/to
- `rowend` - The ending row in the file to read/write from/to
- `fieldstart` - The starting field within the row to read/write from/to
- `fieldend` - The ending field within the row to read/write from/to
- `resizable` - Whether or not the array is resizable when using [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md).
- `fformat` - The fortran style format string to apply. Pass null for standard formatting.

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNoSuchTokenException`
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `PHXNumberFormatException`

### transferArray

```java
public void transferArray(PHXSimpleArray var, 
                          int rowstart, 
                          int rowend, 
                          int fieldstart, 
                          int fieldend, 
                          boolean resizable, 
                          java.lang.String fformat, 
                          int numDimensions)
                   throws java.io.IOException,
                          com.phoenix_int.aserver.util.PHXInvalidFormatException,
                          PHXNoSuchTokenException,
                          java.lang.IllegalAccessException,
                          java.lang.InstantiationException,
                          PHXNumberFormatException
```

Transfers the data for a particular array. If mode is [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md), data is read from the var and put into the file, otherwise data is read from the file into the variable.

**Parameters:**
- `var` - The array to read or write
- `rowstart` - The starting row in the file to read/write from/to
- `rowend` - The ending row in the file to read/write from/to
- `fieldstart` - The starting field within the row to read/write from/to
- `fieldend` - The ending field within the row to read/write from/to
- `resizable` - Whether or not the array is resizable when using [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md).
- `fformat` - The fortran style format string to apply. Pass null for standard formatting.
- `numDimensions` - The number of dimensions to read the array as. Must be 1 or 2.

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNoSuchTokenException`
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- `PHXNumberFormatException`

### transferKeyVar

```java
public void transferKeyVar(PHXSimpleType var, 
                           java.lang.String key)
                    throws java.io.IOException,
                           com.phoenix_int.aserver.util.PHXInvalidFormatException,
                           PHXNoSuchTokenException,
                           PHXNumberFormatException
```

Transfers the data for a particular variable. If mode is [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md), data is read from the var and put into the file, otherwise data is read from the file into the variable.

**Parameters:**
- `var` - The variable to read or write
- `key` - The string to search for that identifies the variable in the file.

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNoSuchTokenException`
- `PHXNumberFormatException`

### transferKeyVar

```java
public void transferKeyVar(PHXSimpleType var, 
                           java.lang.String key, 
                           int occurrence, 
                           int rowOffset, 
                           int field, 
                           java.lang.String fformat)
                    throws java.io.IOException,
                           com.phoenix_int.aserver.util.PHXInvalidFormatException,
                           PHXNoSuchTokenException,
                           PHXNumberFormatException
```

Transfers the data for a particular variable. If mode is [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md), data is read from the var and put into the file, otherwise data is read from the file into the variable.

**Parameters:**
- `var` - The variable to read or write
- `key` - The string to search for that identifies the variable in the file.
- `occurrence` - (default 1). Which occurrence of string to find.
- `rowOffset` - (default 0). Once the string is found, offset by this many rows
- `field` - (default 1). Once the string is found, offset by this many fields. If a negative number is used, it will count from the end of the row backwards, but will not count past the key variable.
- `fformat` - The fortran style format string to apply. Pass null for standard formatting.

**Throws:**
- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- `PHXNoSuchTokenException`
- `PHXNumberFormatException`

### readValue

```java
public java.lang.String readValue(int row, 
                                  int field)
                           throws java.io.IOException,
                                  PHXNoSuchTokenException,
                                  com.phoenix_int.aserver.util.PHXInvalidFormatException,
                                  PHXBookmarkNotFoundException,
                                  PHXSectionNotFoundException,
                                  com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException
```

Reads a value out of the input file. If mode is [ParseableFile.Mode.PARSE](ParseableFile.Mode.md), the input file is the fileToParse, otherwise it is the template file.

**Parameters:**
- `row` - The row of the file to read from
- `field` - The field of the file to read from.

**Throws:**
- `java.lang.IllegalArgumentException`- This function does not work if `setDelimiters("columns")` has been specified.
- `java.io.IOException`
- `PHXNoSuchTokenException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)
- `com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException`

### readLong

```java
public long readLong(int row, 
                     int field)
              throws java.io.IOException,
                     PHXNoSuchTokenException,
                     java.lang.NumberFormatException,
                     com.phoenix_int.aserver.util.PHXInvalidFormatException,
                     PHXBookmarkNotFoundException,
                     PHXSectionNotFoundException,
                     com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException
```

Reads a value out of the input file. If mode is [ParseableFile.Mode.PARSE](ParseableFile.Mode.md), the input file is the fileToParse, otherwise it is the template file. Returns it as a long value.

**Parameters:**
- `row` - The row of the file to read from
- `field` - The field of the file to read from.

**Throws:**
- `java.lang.IllegalArgumentException`- This function does not work if `setDelimiters("columns")` has been specified.
- `java.io.IOException`
- `PHXNoSuchTokenException`
- `java.lang.NumberFormatException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)
- `com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException`

### readDouble

```java
public double readDouble(int row, 
                         int field)
                  throws java.io.IOException,
                         PHXNoSuchTokenException,
                         java.lang.NumberFormatException,
                         com.phoenix_int.aserver.util.PHXInvalidFormatException,
                         PHXBookmarkNotFoundException,
                         PHXSectionNotFoundException,
                         com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException
```

Reads a value out of the input file. If mode is [ParseableFile.Mode.PARSE](ParseableFile.Mode.md), the input file is the fileToParse, otherwise it is the template file. Returns it as a double value.

**Parameters:**
- `row` - The row of the file to read from
- `field` - The field of the file to read from.

**Throws:**
- `java.lang.IllegalArgumentException`- This function does not work if `setDelimiters("columns") `has been specified.
- `java.io.IOException`
- `PHXNoSuchTokenException`
- `java.lang.NumberFormatException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- [`PHXBookmarkNotFoundException`](PHXBookmarkNotFoundException.md)
- [`PHXSectionNotFoundException`](PHXSectionNotFoundException.md)
- `com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldOutOfFileException`

### writeValue

```java
public void writeValue(int row, 
                       int field, 
                       java.lang.String val)
                throws java.io.IOException,
                       PHXNoSuchTokenException
```

Writes a token out to the output file. This is only useful if mode is [ParseableFile.Mode.GENERATE](ParseableFile.Mode.md).

**Parameters:**
- `row` - The row of the file to read from
- `field` - The field of the file to read from.
- `val` - The string to write

**Throws:**
- `java.lang.IllegalArgumentException`- This function does not work if `setDelimiters("columns")` has been specified.
- `java.io.IOException`
- `PHXNoSuchTokenException`

### setDelimiters

```java
public void setDelimiters(java.lang.String delimiters)
                   throws java.io.IOException
```

Sets the delimiters which should be used for parsing lines into fields. 

Acceptable values:
- "columns" - Fortran style column based fields.
- null - default delimiters (whitespace)
- "whitespace" - default delimiters (whitespace)
- "default" - default delimiters (whitespace)
- "" - default delimiters (whitespace)
- "none" - No delimiters (entire line as single field)
- Any other string is taken as a list of character delimiters

**Throws:**
- `java.io.IOException`

### setDecimalSeparator

```java
public void setDecimalSeparator(char separator)
```

Set decimal separator for floating point value literals.

**Parameters:**
- `separator` - character to be used as a decimal separator

### clearMarks

```java
public void clearMarks()
                throws java.io.IOException
```

Removes effects of any previous `markAsBeginning()` or `markAsEnd()` calls

**Throws:**
- `java.io.IOException`

### markAsBeginning

```java
public void markAsBeginning(java.lang.String find)
                     throws java.io.IOException,
                            PHXNoSuchTokenException
```

Searches for the specified string and makes the row where the string was found act as row 1 for all subsequent calls until another `markAsBeginning` or `clearMarks` call.

**Throws:**
- `java.io.IOException`
- `PHXNoSuchTokenException`

### markAsBeginning

```java
public void markAsBeginning(java.lang.String find, 
                            int occurrence, 
                            int offset, 
                            boolean regex)
                     throws java.io.IOException,
                            PHXNoSuchTokenException
```

Searches for the specified string and makes the row where the string was found act as row 1 for all subsequent calls until another `markAsBeginning` or `clearMarks` call.

**Parameters:**
- `find` - The string to search for.
- `occurrence` - Search for the Nth occurrence of string (default 1)
- `offset` - After finding string, move down offset rows. May  be negative to move up. (default 0)
- `regex` - If `true`, the find parameter is a regular expression. (default `false`)

**Throws:**
- `java.io.IOException`
- `PHXNoSuchTokenException`

### markAsBeginning

```java
public void markAsBeginning(int row)
                     throws java.io.IOException,
                            PHXNoSuchTokenException
```

Makes the specified row act as row 1 for all subsequent calls until another `markAsBeginning` or `clearMarks` call.

**Parameters:**
- `row` - The row to set

**Throws:**
- `java.io.IOException`
- `PHXNoSuchTokenException`

### markAsEnd

```java
public void markAsEnd(java.lang.String find)
               throws java.io.IOException,
                      PHXNoSuchTokenException
```

Searches for the specified string, starting from the end of the file and working towards the beginning, and makes the row where the string was found act as row -1 (end of file) for all subsequent calls until another `markAsEnd` or `clearMarks` call.

**Parameters:**
- `find` - The string to search for.

**Throws:**
- `java.io.IOException`
- `PHXNoSuchTokenException`

### markAsEnd

```java
public void markAsEnd(java.lang.String find, 
                      int occurrence, 
                      int offset, 
                      boolean regex)
               throws java.io.IOException,
                      PHXNoSuchTokenException
```

Searches for the specified string and makes the row where the string was found act as row -1 (end of file) for all subsequent calls until another `markAsEnd` or `clearMarks` call.

**Parameters:**
- `find` - The string to search for.
- `occurrence` - Search for the Nth occurrence of string (default 1)
- `offset` - After finding string, move down offset rows. May be negative to move up. (default 0)
- `regex` - If `true`, the find parameter is a regular expression. (default `false`)

**Throws:**
- `java.io.IOException`
- `PHXNoSuchTokenException`

### markAsEnd

```java
public void markAsEnd(int row)
               throws java.io.IOException,
                      PHXNoSuchTokenException
```

Makes the specified row act as row -1 (end of file) for all subsequent calls until another `markAsBeginning` or `clearMarks` call.

**Parameters:**
- `row` - The row to set

**Throws:**
- `java.io.IOException`
- `PHXNoSuchTokenException`
