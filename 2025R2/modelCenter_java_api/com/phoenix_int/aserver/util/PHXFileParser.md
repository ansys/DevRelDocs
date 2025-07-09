# Class: PHXFileParser

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.PHXFileParser
```

**Implemented Interfaces**

- `Parser`

--- 

**Declaration**

```
public class PHXFileParser
extends java.lang.Object
implements Parser
```

This is a utility class for loading data files and extracting data.

Sample Usage:

```
PHXFileParser fp;

try {
   fp = new PHXFileParser( "myfile.dat" );
} catch ( IOException e ) {
   System.out.println( e );
}

try {
   int row = 20;
   int field = 2;
   String token = fp.getToken( row, field );
} catch ( PHXNoSuchTokenException e ) {
   System.out.println( "Error: token not found" );
}
```

NOTES:
- This class works by remembering what things have changed, but not actually performing the changes until the file is written out. This prevents changes to one place in the file from messing up something elsewhere.
- Note however that there is a requirement that no changes overlap or are repeated. For example, you may not set the value of one token twice (the results of which are undefined). Neither may you change a token, then change the delimiters and change another token that includes part of the first. The same holds true for adding and removing lines. You may not add or remove lines to sections of the file previously altered.

## Nested Class Summary

| Modifier and Type | Class and Description |
|------------------|----------------------|
| `Parser.Mode` | `Parser.Mode`<br>Parser modes for file parsing. |

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `static int` | `AUTOMATIC`<br>Deprecated in favor of `Parser.Mode.AUTOMATIC` |
| `static int` | `BUFFERED`<br>Deprecated in favor of `Parser.Mode.BUFFERED` |
| `static long` | `FILE_SIZE_LIMIT`<br>Deprecated in favor of `Parser.Mode.FILE_SIZE_LIMIT` |
| `static int` | `FIRST` |
| `static int` | `LAST` |
| `static int` | `RANDOM_ACCESS`<br>Deprecated in favor of `Parser.Mode.RANDOM` |
| `static int` | `RESIZE_DISALLOW`<br>Don't allow the length of an array to change |
| `static int` | `RESIZE_ROWS`<br>Allow a square matrix to change sizes by adding or deleting rows. |

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXFileParser(java.io.File file, Parser.Mode mode)` |
| `PHXFileParser(java.io.File file, Parser.Mode mode, com.phoenix_int.util.PHXFileUtils.Encoding encoding)` |
| `PHXFileParser(IPHXLineStore store, java.lang.String fileName)` |
| `PHXFileParser(java.lang.String fileName)` |
| `PHXFileParser(java.lang.String fileName, int method)`<br>Deprecated in favor of `PHXFileParser(String, Parser.Mode)` |
| `PHXFileParser(java.lang.String fileName, Parser.Mode mode)` |
| `PHXFileParser(java.lang.String fileName, Parser.Mode mode, com.phoenix_int.util.PHXFileUtils.Encoding encoding)` |
| `PHXFileParser(java.lang.String fileName, com.phoenix_int.util.PHXFileUtils.Encoding encoding)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `addLines(int actualIndex, int count, java.lang.String line)` |
| `void` | `addLines(int actualIndex, java.lang.String[] lines)` |
| `void` | `clearMarks()`<br>resets the file to it's whole size by removing the starting and ending marks if they existed |
| `void` | `close()`<br>Close the parser |
| `void` | `closeFile()`<br>close the `PHXRandomAccessFileLineStore` |
| `int` | `countTokens(int row)`<br>counts the number of tokens on a specified row |
| `java.lang.String[]` | `getColumnArray(int startRow, int endRow, int field)`<br>gets an array of tokens for the specified range. |
| `char` | `getDecimalSeparator()`<br>gets decimal separator character for floating point literals |
| `java.lang.String` | `getDelimiters()` |
| `java.lang.String` | `getFileName()`<br>retrieves the name of the file that is being parsed |
| `IPHXLineStore` | `getLineStore()`<br>gets the underlying line store object for this parser |
| `java.lang.String[]` | `getMatrixArray(int startRow, int startField, int endRow, int endField)`<br>gets an array of tokens for the specified range. |
| `java.lang.String[]` | `getMatrixArray(int startRow, int startCol, int endRow, int endCol, int fieldWidth)`<br>gets an array of tokens for the specified range. |
| `java.lang.String[][]` | `getMatrixArray2d(int startRow, int startField, int endRow, int endField)`<br>gets an array of tokens for the specified range. |
| `java.lang.String[]` | `getRowArray(int startCol, int endCol, int row)`<br>gets an array of tokens for the specified range. |
| `java.lang.String` | `getToken(int row, int field)`<br>gets the token at the specified row and field. |
| `java.lang.String` | `getToken(int row, int startCol, int endCol)`<br>gets the token at the specified row and column. |
| `java.util.Vector` | `getToken(int row, int startField, int endField, java.lang.String delimiter)`<br>gets an array of tokens at the specified row and between start and end fields (all inclusive)<br>Indexing starts at 1. |
| `java.lang.String` | `getToken(java.lang.String string, int rowOffset, int field)`<br>gets the token relative to a search string. |
| `java.lang.String` | `getToken(java.lang.String string, int occurrence, int rowOffset, int field)`<br>gets the token relative to a search string. |
| `static void` | `main(java.lang.String[] args)` |
| `void` | `markBeginning(int row)`<br>marks the starting point from which to start counting rows and fields. |
| `void` | `markBeginning(java.lang.String string)`<br>same as `markBeginning` where the pattern is a regex and occurence value is 1 |
| `void` | `markBeginning(java.lang.String string, boolean isRegex)`<br>same as `markBeginning` with an occurrence value of 1 |
| `void` | `markBeginning(java.lang.String string, boolean isRegex, int occurrence)`<br>marks the starting point from which to start counting rows and fields. |
| `void` | `markBeginning(java.lang.String string, int occurrence)`<br>marks the starting point from which to start counting rows and fields. |
| `void` | `markBeginningFromEnd(java.lang.String string, boolean isRegex)`<br>marks the starting point from which to start counting rows. |
| `void` | `markBeginningOffset(int offset)`<br>marks the starting point from which to start counting rows and fields. |
| `void` | `markEnd(int row)`<br>marks the ending point of the file. |
| `void` | `markEnd(java.lang.String string, boolean isRegex)`<br>same as `markEnd` with an occurrence value of 1 |
| `void` | `markEnd(java.lang.String string, boolean isRegex, int occurrence)`<br>marks the ending point from which to start counting rows and fields. |
| `void` | `markEnd(java.lang.String string, int occurrence)`<br>marks the ending point from which to start counting rows and fields. |
| `void` | `markEndFromEnd(java.lang.String string, boolean isRegex)`<br>marks the starting point from which to start counting rows and fields. |
| `void` | `markEndOffset(int offset)`<br>marks the ending point from which to start counting rows and fields. |
| `void` | `removeLines(int actualIndex, int count)` |
| `void` | `resetDelimiters()`<br>resets the delimiters to whitespace |
| `void` | `setDecimalSeparator(char separator)`<br>sets decimal separator character for floating point literals |
| `void` | `setDelimiters(java.lang.String delimiters)`<br>sets the current delimiter set |
| `void` | `setMatrixArray(int startRow, int startCol, int endRow, int endCol, int fieldWidth, java.lang.String[] array)`<br>sets an array of tokens for the specified range. |
| `void` | `setMatrixArray(int startRow, int startCol, int endRow, int endCol, int fieldWidth, java.lang.String[] array, int resizeStyle)`<br>sets an array of tokens for the specified range. |
| `void` | `setMatrixArray(int startRow, int startCol, int endRow, int endCol, java.lang.String[] array)`<br>sets an array of tokens for the specified range. |
| `void` | `setMatrixArray(int startRow, int startCol, int endRow, int endCol, java.lang.String[] array, int resizeStyle)`<br>sets an array of tokens for the specified range. |
| `void` | `setMatrixArray2d(int startRow, int startCol, int endRow, int endCol, java.lang.String[][] array, int resizeStyle)`<br>sets an array of tokens for the specified range. |
| `void` | `setToken(int row, int startCol, int endCol, java.lang.String replacement)`<br>replaces the token at the specified row and column. |
| `void` | `setToken(int row, int field, java.lang.String replacement)`<br>replaces the token at the specified row and field. |
| `void` | `setToken(java.lang.String string, int occurrence, int rowOffset, int field, java.lang.String replacement)`<br>gets the token relative to a search string. |
| `void` | `setToken(java.lang.String string, int rowOffset, int field, java.lang.String replacement)`<br>gets the token relative to a search string. |
| `void` | `writeTo(java.io.OutputStream os)` |
| `void` | `writeTo(java.io.OutputStreamWriter fw)`<br>writes out the data to a file |
| `void` | `writeTo(java.lang.String fileName)` |
| `void` | `writeTo(java.lang.String fileName, com.phoenix_int.util.PHXFileUtils.Encoding encoding)` |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Field Detail

### RESIZE_DISALLOW

```
public static final int RESIZE_DISALLOW
```
Don't allow the length of an array to change

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### RESIZE_ROWS

```
public static final int RESIZE_ROWS
```
Allow a square matrix to change sizes by adding or deleting rows.

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### FIRST

```
public static final int FIRST
```

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### LAST

```
public static final int LAST
```

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### RANDOM_ACCESS

```
@Deprecated
public static final int RANDOM_ACCESS
```
Deprecated in favor of `Parser.Mode.RANDOM`

### BUFFERED

```
@Deprecated
public static final int BUFFERED
```
Deprecated in favor of `Parser.Mode.BUFFERED`

### AUTOMATIC

```
@Deprecated
public static final int AUTOMATIC
```
Deprecated in favor of `Parser.Mode.AUTOMATIC`

### FILE_SIZE_LIMIT

```
@Deprecated
public static final long FILE_SIZE_LIMIT
```
Deprecated in favor of `Parser.Mode.FILE_SIZE_LIMIT` cut-off limit of file size to use buffers for row files

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

## Constructor Detail

### PHXFileParser

```
public PHXFileParser(java.lang.String fileName)
              throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### PHXFileParser

```
public PHXFileParser(java.lang.String fileName, 
                     com.phoenix_int.util.PHXFileUtils.Encoding encoding)
              throws java.io.IOException
```

**Parameters:**
- `fileName` - the file to load

**Throws:**
- `java.io.IOException` - if there is a problem opening the file

### PHXFileParser

```
public PHXFileParser(java.io.File file, 
                     Parser.Mode mode)
              throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### PHXFileParser

```
public PHXFileParser(java.io.File file, 
                     Parser.Mode mode, 
                     com.phoenix_int.util.PHXFileUtils.Encoding encoding)
              throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### PHXFileParser

```
public PHXFileParser(java.lang.String fileName, 
                     Parser.Mode mode)
              throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### PHXFileParser

```
public PHXFileParser(java.lang.String fileName, 
                     Parser.Mode mode, 
                     com.phoenix_int.util.PHXFileUtils.Encoding encoding)
              throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### PHXFileParser

```
@Deprecated
public PHXFileParser(java.lang.String fileName, 
                     int method)
              throws java.io.IOException
```
Deprecated in favor of `PHXFileParser(String, Parser.Mode)`

**Parameters:**
- `fileName` - the file to load
- `method` - the method used to parse the file. `RANDOM_ACCESS` will scan the data file as needed. `BUFFERED` will read the file into a buffer prior to parsing. `RANDOM_ACCESS` is better for large files, but will be slower for small (<50k) files. `BUFFERED` is also preferable for parsing many variables from a file or for performing large numbers of searches.

**Throws:**
- `java.io.IOException` - if there is a problem opening the file

### PHXFileParser

```
public PHXFileParser(IPHXLineStore store, 
                     java.lang.String fileName)
```

**Parameters:**
- `store` - The source of lines for the file parser.
- `fileName` - The name of the file for errors and advisories. This parameter is not used for any actual processing

## Method Detail

### getLineStore

```
public IPHXLineStore getLineStore()
```
Gets the underlying line store object for this parser

**Returns:**
- the line store used by the parser

### getFileName

```
public java.lang.String getFileName()
```
retrieves the name of the file that is being parsed

**Returns:**
- the name of the file

### writeTo

```
public void writeTo(java.lang.String fileName)
             throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### writeTo

```
public void writeTo(java.lang.String fileName, 
                    com.phoenix_int.util.PHXFileUtils.Encoding encoding)
             throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### writeTo

```
public void writeTo(java.io.OutputStream os)
             throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### writeTo

```
public void writeTo(java.io.OutputStreamWriter fw)
             throws java.io.IOException
```
writes out the data to a file

**Specified by:**
- `writeTo` in interface `Parser`

**Parameters:**
- `fw` - the stream to save to

**Throws:**
- `java.io.IOException` - thrown if the file cannot be written to

### close

```
public void close()
```
Description copied from interface: `Parser`

Close the parser

**Specified by:**
- `close` in interface `Parser`

### closeFile

```
public void closeFile()
```
close the `PHXRandomAccessFileLineStore`

### resetDelimiters

```
public void resetDelimiters()
```
resets the delimiters to whitespace

### getDelimiters

```
public java.lang.String getDelimiters()
```

### setDelimiters

```
public void setDelimiters(java.lang.String delimiters)
```
sets the current delimiter set

**Parameters:**
- `delimiters` - the delimiters to use for parsing

### getDecimalSeparator

```
public char getDecimalSeparator()
```
gets decimal separator character for floating point literals

**Returns:**
- decimal separator character

### setDecimalSeparator

```
public void setDecimalSeparator(char separator)
```
sets decimal separator character for floating point literals

**Parameters:**
- `separator` - decimal separator to use when parsing floating point literals

### markBeginning

```
public void markBeginning(int row)
                   throws PHXNoSuchTokenException
```
marks the starting point from which to start counting rows and fields. Position is marked relative to the last marked position.

**Parameters:**
- `row` - the row where the new beginning will occur. This row becomes row 1.

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### markEnd

```
public void markEnd(int row)
             throws PHXNoSuchTokenException
```
marks the ending point of the file. Position is marked relative to the last marked position.

**Parameters:**
- `row` - the row where the new ending will occur. This row becomes the last row.

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### markBeginningOffset

```
public void markBeginningOffset(int offset)
```
marks the starting point from which to start counting rows and fields. Position is marked relative to the last marked position.

**Parameters:**
- `offset` - the offset from the current starting line

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if the specified offset moves past the end or beginning of the file

### markBeginning

```
public void markBeginning(java.lang.String string, 
                          boolean isRegex)
                   throws PHXNoSuchTokenException
```
same as `markBeginning` with an occurrence value of 1

**Parameters:**
- `string` - the pattern that marks the new first line
- `isRegex` - if `true`, the pattern is a regular expression

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### markBeginning

```
public void markBeginning(java.lang.String string)
                   throws PHXNoSuchTokenException
```
same as `markBeginning` where the pattern is a regex and occurrence value is 1

**Parameters:**
- `string` - the pattern that marks the new first line

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### markBeginning

```
public void markBeginning(java.lang.String string, 
                          boolean isRegex, 
                          int occurrence)
                   throws PHXNoSuchTokenException
```
marks the starting point from which to start counting rows and fields. Position is marked relative to the last marked position.

**Parameters:**
- `string` - the search pattern
- `occurrence` - the number of times to search for the pattern. may be negative to search from end
- `isRegex` - if `true`, the string is a regular expression.

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### markBeginning

```
public void markBeginning(java.lang.String string, 
                          int occurrence)
                   throws PHXNoSuchTokenException
```
marks the starting point from which to start counting rows and fields. Position is marked relative to the last marked position.

**Parameters:**
- `string` - the search pattern
- `occurrence` - the number of times to search for the pattern. may be negative to search from end

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### markEndOffset

```
public void markEndOffset(int offset)
```
marks the ending point from which to start counting rows and fields. Position is marked relative to the previously marked position.

**Parameters:**
- `offset` - the offset from the current starting line

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if the specified offset moves past the end or beginning of the file

### markEnd

```
public void markEnd(java.lang.String string, 
                    boolean isRegex)
             throws PHXNoSuchTokenException
```
same as `markEnd` with an occurrence value of 1

**Parameters:**
- `string` - the pattern that marks the new first line
- `isRegex` - if `true`, the pattern is a regular expression

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### markEnd

```
public void markEnd(java.lang.String string, 
                    boolean isRegex, 
                    int occurrence)
             throws PHXNoSuchTokenException
```
marks the ending point from which to start counting rows and fields. Position is marked relative to the last marked position.

**Parameters:**
- `string` - the pattern that marks the new last line
- `isRegex` - if `true`, the pattern is a regular expression
- `occurrence` - the number of times to search for regex value may be negative to search from beginning

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### markEnd

```
public void markEnd(java.lang.String string, 
                    int occurrence)
             throws PHXNoSuchTokenException
```
marks the ending point from which to start counting rows and fields. Position is marked relative to the last marked position. Search string is a regex.

**Parameters:**
- `string` - the pattern that marks the new last line
- `occurrence` - the number of times to search for regex value may be negative to search from end

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### markBeginningFromEnd

```
public void markBeginningFromEnd(java.lang.String string, 
                                 boolean isRegex)
                          throws PHXNoSuchTokenException
```
marks the starting point from which to start counting rows. Position is marked relative to the previously marked position.

**Parameters:**
- `string` - the pattern that marks the new first line
- `isRegex` - if `true`, the pattern is a regular expression

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### markEndFromEnd

```
public void markEndFromEnd(java.lang.String string, 
                           boolean isRegex)
                    throws PHXNoSuchTokenException
```
marks the starting point from which to start counting rows and fields. Position is marked relative to the previously marked position.

**Parameters:**
- `string` - the pattern that marks the new first line
- `isRegex` - if `true`, the pattern is a regular expression

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### clearMarks

```
public void clearMarks()
```
resets the file to its whole size by removing the starting and ending marks if they existed

### getToken

```
public java.lang.String getToken(java.lang.String string, 
                                 int occurrence, 
                                 int rowOffset, 
                                 int field)
                          throws PHXNoSuchTokenException
```
gets the token relative to a search string. Indexing starts at 1.

**Parameters:**
- `string` - the value to search for
- `occurrence` - the number of times to match the search
- `rowOffset` - row relative to the search results where the token is found
- `field` - the field in the specified row for the token

**Returns:**
- the token found

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### getToken

```
public java.lang.String getToken(java.lang.String string, 
                                 int rowOffset, 
                                 int field)
                          throws PHXNoSuchTokenException
```
gets the token relative to a search string. Indexing starts at 1.

**Parameters:**
- `string` - the value to search for
- `rowOffset` - row relative to the search results where the token is found
- `field` - the field in the specified row for the token

**Returns:**
- the token found

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### getToken

```
public java.lang.String getToken(int row, 
                                 int field)
                          throws PHXNoSuchTokenException
```
gets the token at the specified row and field. Indexing starts at 1.

**Parameters:**
- `row` - the row that the token is on
- `field` - the field in the specified row for the token

**Returns:**
- the token found at row, field

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### getToken

```
public java.lang.String getToken(int row, 
                                 int startCol, 
                                 int endCol)
                          throws PHXNoSuchTokenException
```
gets the token at the specified row and column. Indexing starts at 1.

**Parameters:**
- `row` - the row that the token is on
- `startCol` - the start column
- `endCol` - the end column

**Returns:**
- the token between `startCol` and `endCol` on row row

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### getToken

```
public java.util.Vector getToken(int row, 
                                 int startField, 
                                 int endField, 
                                 java.lang.String delimiter)
                          throws PHXNoSuchTokenException
```
gets an array of tokens at the specified row and between start and end fields (all inclusive). Indexing starts at 1. Eg: if line = "IP = 1.5, 2.5, 3.5, 4.5", then `getToken(row, 2, 4, " \t,=")` would return `[1.5,2.5,3.5]`.

**Parameters:**
- `row` - the row that the tokens are on
- `startField` - the start field (inclusive)
- `endField` - the end field (inclusive)
- `delimiter` - the delimiters

**Returns:**
- the token between `startField` and `endField` (all inclusive) on row `row`

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### setToken

```
public void setToken(java.lang.String string, 
                     int occurrence, 
                     int rowOffset, 
                     int field, 
                     java.lang.String replacement)
              throws PHXNoSuchTokenException
```
gets the token relative to a search string. Indexing starts at 1.

**Parameters:**
- `string` - the value to search for
- `occurrence` - the number of times to match the search
- `rowOffset` - row relative to the search results where the token is found
- `field` - the field in the specified row for the token
- `replacement` - the string to substitute into the field

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### setToken

```
public void setToken(java.lang.String string, 
                     int rowOffset, 
                     int field, 
                     java.lang.String replacement)
              throws PHXNoSuchTokenException
```
gets the token relative to a search string. Indexing starts at 1.

**Parameters:**
- `string` - the value to search for
- `rowOffset` - row relative to the search results where the token is found
- `field` - the field in the specified row for the token
- `replacement` - the string to substitute into the field

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### setToken

```
public void setToken(int row, 
                     int field, 
                     java.lang.String replacement)
              throws PHXNoSuchTokenException
```
replaces the token at the specified row and field. Indexing starts at 1.

**Parameters:**
- `row` - the row that the token is on
- `field` - the field in the specified row for the token
- `replacement` - the string to substitute into the field

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### setToken

```
public void setToken(int row, 
                     int startCol, 
                     int endCol, 
                     java.lang.String replacement)
              throws PHXNoSuchTokenException
```
replaces the token at the specified row and column. Indexing starts at 1.

**Parameters:**
- `row` - the row that the token is on
- `startCol` - the start column
- `endCol` - the end column
- `replacement` - the string to substitute into the field

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the token is not found

### addLines

```
public void addLines(int actualIndex, 
                     int count, 
                     java.lang.String line)
```

### addLines

```
public void addLines(int actualIndex, 
                     java.lang.String[] lines)
```

### removeLines

```
public void removeLines(int actualIndex, 
                        int count)
```

### countTokens

```
public int countTokens(int row)
                throws PHXNoSuchTokenException
```
counts the number of tokens on a specified row

**Parameters:**
- `row` - the row to count tokens

**Returns:**
- the number of tokens on the specified row

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if the row specified is invalid

### getColumnArray

```
public java.lang.String[] getColumnArray(int startRow, 
                                         int endRow, 
                                         int field)
                                  throws PHXNoSuchTokenException
```
gets an array of tokens for the specified range. Indexing starts at 1.

**Parameters:**
- `startRow` - the row for the first element in the array
- `endRow` - the row for the last element in the array
- `field` - the field in the specified row for the token

**Returns:**
- an array of String tokens

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if a token is not found

### getRowArray

```
public java.lang.String[] getRowArray(int startCol, 
                                      int endCol, 
                                      int row)
                               throws PHXNoSuchTokenException
```
gets an array of tokens for the specified range. Indexing starts at 1.

**Parameters:**
- `startCol` - the field for the first element in the array
- `endCol` - the field for the last element in the array
- `row` - the row to extract tokens from

**Returns:**
- an array of String tokens

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if a token is not found

### getMatrixArray

```
public java.lang.String[] getMatrixArray(int startRow, 
                                         int startField, 
                                         int endRow, 
                                         int endField)
                                  throws PHXNoSuchTokenException
```
gets an array of tokens for the specified range. Indexing starts at 1.

**Parameters:**
- `startRow` - the row for the first element in the array
- `startField` - the field for the first element in the array
- `endRow` - the row for the last element in the array
- `endField` - the field for the last element in the array

**Returns:**
- an array of String tokens

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if a token is not found

### getMatrixArray2d

```
public java.lang.String[][] getMatrixArray2d(int startRow, 
                                             int startField, 
                                             int endRow, 
                                             int endField)
                                      throws PHXNoSuchTokenException
```
gets an array of tokens for the specified range. Indexing starts at 1.

**Parameters:**
- `startRow` - the row for the first element in the array
- `startField` - the field for the first element in the array
- `endRow` - the row for the last element in the array
- `endField` - the field for the last element in the array

**Returns:**
- an array of String tokens

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if a token is not found

### getMatrixArray

```
public java.lang.String[] getMatrixArray(int startRow, 
                                         int startCol, 
                                         int endRow, 
                                         int endCol, 
                                         int fieldWidth)
                                  throws PHXNoSuchTokenException
```
gets an array of tokens for the specified range. Indexing starts at 1. Columns are actual columns and not field indexes.

**Parameters:**
- `startRow` - the row for the first element in the array
- `startCol` - the column for the first element in the array
- `endRow` - the row for the last element in the array
- `endCol` - the column for the last element in the array
- `fieldWidth` - UNUSED. How wide one field is.

**Returns:**
- an array of String tokens

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if a token is not found

### setMatrixArray

```
public void setMatrixArray(int startRow, 
                           int startCol, 
                           int endRow, 
                           int endCol, 
                           java.lang.String[] array)
                    throws PHXNoSuchTokenException
```
sets an array of tokens for the specified range. Indexing starts at 1.

**Parameters:**
- `startRow` - the row for the first element in the array
- `startCol` - the field for the first element in the array
- `endRow` - the row for the last element in the array
- `endCol` - the field for the last element in the array
- `array` - the values

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if a token is not found

### setMatrixArray

```
public void setMatrixArray(int startRow, 
                           int startCol, 
                           int endRow, 
                           int endCol, 
                           java.lang.String[] array, 
                           int resizeStyle)
                    throws PHXNoSuchTokenException
```
sets an array of tokens for the specified range. Indexing starts at 1.

**Parameters:**
- `startRow` - the row for the first element in the array
- `startCol` - the field for the first element in the array
- `endRow` - the row for the last element in the array
- `endCol` - the field for the last element in the array
- `array` - the values
- `resizeStyle` - How to resize (`RESIZE_DISALLOW`, `RESIZE_ROWS`)

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if a token is not found

### setMatrixArray2d

```
public void setMatrixArray2d(int startRow, 
                             int startCol, 
                             int endRow, 
                             int endCol, 
                             java.lang.String[][] array, 
                             int resizeStyle)
                      throws PHXNoSuchTokenException
```
sets an array of tokens for the specified range. Indexing starts at 1.

**Parameters:**
- `startRow` - the row for the first element in the array
- `startCol` - the field for the first element in the array
- `endRow` - the row for the last element in the array
- `endCol` - the field for the last element in the array
- `array` - the values
- `resizeStyle` - How to resize (`RESIZE_DISALLOW`, `RESIZE_ROWS`)

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if a token is not found

### setMatrixArray

```
public void setMatrixArray(int startRow, 
                           int startCol, 
                           int endRow, 
                           int endCol, 
                           int fieldWidth, 
                           java.lang.String[] array)
                    throws PHXNoSuchTokenException
```
sets an array of tokens for the specified range. Indexing starts at 1. Columns are specified instead of fields.

**Parameters:**
- `startRow` - the row for the first element in the array
- `startCol` - the field for the first element in the array
- `endRow` - the row for the last element in the array
- `endCol` - the field for the last element in the array
- `fieldWidth` - UNUSED. How wide one field is.
- `array` - the values

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if a token is not found

### setMatrixArray

```
public void setMatrixArray(int startRow, 
                           int startCol, 
                           int endRow, 
                           int endCol, 
                           int fieldWidth, 
                           java.lang.String[] array, 
                           int resizeStyle)
                    throws PHXNoSuchTokenException
```
sets an array of tokens for the specified range. Indexing starts at 1. Columns are specified instead of fields.

**Parameters:**
- `startRow` - the row for the first element in the array
- `startCol` - the field for the first element in the array
- `endRow` - the row for the last element in the array
- `endCol` - the field for the last element in the array
- `fieldWidth` - UNUSED. How wide one field is.
- `array` - the values
- `resizeStyle` - How to resize (`RESIZE_DISALLOW`, `RESIZE_ROWS`)

**Throws:**
- [`PHXNoSuchTokenException`](PHXNoSuchTokenException.md) - thrown if a token is not found

### main

```
public static void main(java.lang.String[] args)
```