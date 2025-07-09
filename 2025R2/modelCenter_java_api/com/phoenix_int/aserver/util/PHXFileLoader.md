# Class: PHXFileLoader

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.PHXFileLoader
```
---
**Declaration**

```
public class PHXFileLoader
extends java.lang.Object
```

This is a utility class for loading data files. The class makes it easy to load files, line by line while ignoring comments (lines that begin with #).

Sample Usage:

```
PHXFileLoader fl;

try {
   fl = new PHXFileLoader( "myfile.dat" );
} catch ( IOException e ) {
   System.out.println( e );
}

String line = fl.nextLine();

while ( line != null ) {
   // process line
   ...
   line = fl.nextLine();
}

fl.close();
```

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXFileLoader(java.lang.String fileName)` |
| `PHXFileLoader(java.io.File file)` |
| `PHXFileLoader(java.io.StringReader inStream)` |
| `PHXFileLoader(java.io.InputStream inStream)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `close()`<br>closes the file |
| `void` | `finalize()` |
| `java.lang.String` | `getFileName()`<br>retrieves the file name |
| `int` | `getLineNumber()`<br>returns the line number of the last line read. |
| `java.lang.String` | `getRemainder()`<br>returns the rest of the file as a string |
| `java.lang.String` | `nextLine()`<br>extracts the next non-comment line from the data file |
| `java.lang.String` | `readNextLine()`<br>extracts the next line from the data file |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXFileLoader

```
public PHXFileLoader(java.lang.String fileName)
              throws java.io.IOException
```
**Parameters:**
- `fileName` - the file to load
**Throws:**
- `java.io.IOException` - if there is a problem opening the file

### PHXFileLoader

```
public PHXFileLoader(java.io.File file)
              throws java.io.IOException
```
**Parameters:**
- `file` - the file to load

**Throws:**
- `java.io.IOException` - if there is a problem opening the file

### PHXFileLoader

```
public PHXFileLoader(java.io.StringReader inStream)
              throws java.io.IOException
```
**Throws:**
- `java.io.IOException`

### PHXFileLoader

```
public PHXFileLoader(java.io.InputStream inStream)
              throws java.io.IOException
```
**Throws:**
- `java.io.IOException`

## Method Detail

### finalize

```
public void finalize()
```

**Overrides:**
- `finalize` in class `java.lang.Object`

### close

```
public void close()
```
closes the file

### getFileName

```
public java.lang.String getFileName()
```
retrieves the file name

**Returns:**
- the name of the file

### getLineNumber

```
public int getLineNumber()
```
returns the line number of the last line read. Indexing starts at 1

**Returns:**
- the last line number

### nextLine

```
public java.lang.String nextLine()
```
extracts the next non-comment line from the data file

**Returns:**
- a non-comment line

### readNextLine

```
public java.lang.String readNextLine()
```
extracts the next line from the data file

**Returns:**
- a line

### getRemainder

```
public java.lang.String getRemainder()
```
returns the rest of the file as a string

**Returns:**
- the remaining contents of the file