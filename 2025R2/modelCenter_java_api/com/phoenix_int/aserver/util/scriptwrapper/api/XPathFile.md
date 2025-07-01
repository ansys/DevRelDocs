# Class: XPathFile

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.scriptwrapper.api.AbstractFile
    ↳ com.phoenix_int.aserver.util.scriptwrapper.api.XPathFile
```

**Implemented Interfaces**

- [`InputFile`](InputFile.md), [`OutputFile`](OutputFile.md), [`OutputFile2`](OutputFile2.md), [`ParseableFile`](ParseableFile.md), `java.io.Closeable`, `java.lang.AutoCloseable`

--- 
**Declaration**

```java
public class XPathFile
extends AbstractFile
implements OutputFile, OutputFile2, InputFile
```

Represents an XML file (not a file variable) used in a script wrapper, with access to the XML node values via XPath statements

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.util.scriptwrapper.api.[ParseableFile](ParseableFile.md) 
 `ParseableFile.Mode` 

## Field Summary

### Fields inherited from class com.phoenix_int.aserver.util.scriptwrapper.api.[AbstractFile](AbstractFile.md)
`encoding`, `fileName`, `mode`, `parser`, `templateFileName`, `wrapper` 

## Constructor Summary

| Constructor and Description |
|---------------------|
| `XPathFile(PHXScriptWrapperObject wrapper, ParseableFile.Mode mode)` <br>Constructs a new XPathFile |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `addVariable(java.lang.String name, java.lang.String type, boolean isInput, java.lang.String xpath)` <br>Add a variable to the wrapper. |
| `void` | `generate()` <br>Generate the input file |
| `com.phoenix_int.aserver.util.XPathParser` | `getParser()` <br>Get the XPath parser |
| `protected com.phoenix_int.aserver.util.XPathParser` | `newParser(java.io.File file)` <br>Allow a sub-class to form a parser using custom options/features, such as handling DTD and entities |
| `protected Parser` | `newParser(java.io.File rFile, Parser.Mode pmode)` <br>Generate a new parser for the given file and mode |
| `void` | `parse()` <br>Parse the output file |
| `void` | `setFileToGenerate(java.lang.String fileName)` <br>Set the file to be generated |
| `void` | `setFileToParse(java.lang.String fileName)` <br>Set the file to be parsed |
| `void` | `transferArray(PHXSimpleArray var, java.lang.String exp)` <br>Transfer an array of values, either from the file to the variable, or vice-versa, depending on ParseableFile.Mode |
| `void` | `transferVar(IPHXType var, java.lang.String exp)` <br>Transfer a value, either from the file to the variable, or vice-versa, depending on ParseableFile.Mode |
| `protected void` | `transferVars(ParseableFile.Mode mode)` <br>Transfer values for variables that have been defined using methods from the concrete implementation |

### Methods inherited from class com.phoenix_int.aserver.util.scriptwrapper.api.AbstractFile

`actionByMode`, `backup`, `close`, `delete`, `ensureFileParser`, `getEncoding`, `getRealFile`, `readTemplate`, `setEncoding`, `setEncoding`, `setFileToGenerateOrParse`, `setTempEmbedded`, `setTemplateFile`, `setVariable`

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

### Methods inherited from interface com.phoenix_int.aserver.util.scriptwrapper.api.ParseableFile

`backup`, `close`, `delete`, `readTemplate`, `setFileToGenerateOrParse`, `setTempEmbedded`, `setTemplateFile`, `setVariable`

## Constructor Detail

### XPathFile

```java
public XPathFile(PHXScriptWrapperObject wrapper,
                 ParseableFile.Mode mode)
```
Construct a new XPathFile

**Parameters:**

- `wrapper` - script wrapper object
- `mode` - parser mode

## Method Detail

### addVariable

```java
public void addVariable(java.lang.String name,
                        java.lang.String type,
                        boolean isInput,
                        java.lang.String xpath)
                 throws PHXNameAlreadyInUseException,
                        PHXInvalidNameException,
                        PHXInvalidTypeException
```
Add a variable to the wrapper. The transfer of variable values will be handled automatically during any call to `generate()`, `parse()`, or `AbstractFile.readTemplate()`.

**Parameters:**

- `name` - variable name
- `type` - variable type
- `isInput` - whether variable is an input
- `xpath` - XPath expression

**Throws:**

- [`PHXNameAlreadyInUseException`](../../PHXNameAlreadyInUseException.md)
- [`PHXInvalidNameException`](../../PHXInvalidNameException.md)
- [`PHXInvalidTypeException`](../../../types/PHXInvalidTypeException.md)

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

### newParser

```java
protected com.phoenix_int.aserver.util.XPathParser newParser(java.io.File file)
                            throws java.io.IOException,
                                   org.xml.sax.SAXException,
                                   javax.xml.parsers.ParserConfigurationException
```
Allow a sub-class to form a parser using custom options/features, such as handling DTD and entities

**Parameters:**

- `file` -

**Returns:**

**Throws:**

- `java.io.IOException`
- `org.xml.sax.SAXException`
- `javax.xml.parsers.ParserConfigurationException`

### getParser

```java
public com.phoenix_int.aserver.util.XPathParser getParser()
                            throws java.io.IOException
```
Get the XPath parser

**Returns:**

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
Transfer values for variables that have been defined using methods from the concrete implementation, i.e.[PHXRowFieldFile.defineVar(String, String, boolean, String)](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.html#defineVar-java.lang.String-java.lang.String-boolean-java.lang.String-)

Variables defined using[PHXScriptWrapperObject.addVariable(String, String, boolean)](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXScriptWrapperObject.html#addVariable-java.lang.String-java.lang.String-boolean-)must be explicitly transferred using methods of the concrete implementation class

**Specified by:**

- `transferVars` in class `AbstractFile`

**Throws:**

- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- [`PHXNoSuchTokenException`](../../PHXNoSuchTokenException.md)
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- [`PHXNumberFormatException`](../../../types/PHXNumberFormatException.md)

### transferArray

```java
public void transferArray(PHXSimpleArray var,
                          java.lang.String exp)
                   throws PHXNoSuchTokenException,
                          java.io.IOException,
                          javax.xml.xpath.XPathExpressionException
```
Transfer an array of values, either from the file to the variable, or vice-versa, depending on `ParseableFile.Mode`

**Parameters:**

- `var` - array variable
- `exp` - XPath expression

**Throws:**

- [`PHXNoSuchTokenException`](../../PHXNoSuchTokenException.md)
- `java.io.IOException`
- `javax.xml.xpath.XPathExpressionException`

### transferVar

```java
public void transferVar(IPHXType var,
                        java.lang.String exp)
                 throws javax.xml.xpath.XPathExpressionException,
                        PHXNoSuchTokenException,
                        java.io.IOException
```
Transfer a value, either from the file to the variable, or vice-versa, depending on `ParseableFile.Mode`

**Parameters:**

- `var` - variable
- `exp` - XPath expression

**Throws:**

- `javax.xml.xpath.XPathExpressionException`
- [`PHXNoSuchTokenException`](../../PHXNoSuchTokenException.md)
- `java.io.IOException`

### parse

```java
public void parse()
           throws java.io.IOException,
                  com.phoenix_int.aserver.util.PHXInvalidFormatException,
                  PHXNoSuchTokenException,
                  java.lang.IllegalAccessException,
                  java.lang.InstantiationException,
                  PHXNumberFormatException
```
Parse the output file

**Specified by:**

- `parse` in interface `OutputFile`
- `parse` in interface `OutputFile2`

**Throws:**

- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- [`PHXNoSuchTokenException`](../../PHXNoSuchTokenException.md)
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- [`PHXNumberFormatException`](../../../types/PHXNumberFormatException.md)

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

### generate

```java
public void generate()
              throws java.io.IOException,
                     com.phoenix_int.aserver.util.PHXInvalidFormatException,
                     PHXNoSuchTokenException,
                     java.lang.IllegalAccessException,
                     java.lang.InstantiationException,
                     PHXNumberFormatException
```
Generate the input file

**Specified by:**

- `generate` in interface `InputFile`

**Throws:**

- `java.io.IOException`
- `com.phoenix_int.aserver.util.PHXInvalidFormatException`
- [`PHXNoSuchTokenException`](../../PHXNoSuchTokenException.md)
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`
- [`PHXNumberFormatException`](../../../types/PHXNumberFormatException.md)

### setFileToGenerate

```java
public void setFileToGenerate(java.lang.String fileName)
```
Set the file to be generated

**Specified by:**

- `setFileToGenerate` in interface `InputFile`

**Parameters:**

- `fileName` - file name