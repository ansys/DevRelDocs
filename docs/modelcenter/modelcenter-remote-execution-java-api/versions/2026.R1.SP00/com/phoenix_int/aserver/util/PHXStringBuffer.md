# Class: PHXStringBuffer

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.PHXStringBuffer
```

**Implemented Interfaces**

- `java.io.Serializable`

**Declaration**

```java
public class PHXStringBuffer
extends java.lang.Object
implements java.io.Serializable
```

Class that behaves like a `java.lang.StringBuffer` but has logic for caching out to disk if the size grows over a limit (currently 512K). Has additional functionality to make it perform better for large files and includes `getReader()` and `getInputStream()` to read the string linearly.

**See Also:**

[Serialized Form](./../../../../serialized-form.md)

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `static long` | `SIZECUTOFF` |

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXStringBuffer()` <br>Creates a new, empty string buffer |
| `PHXStringBuffer(long initialSize)` <br>Creates a new, empty string buffer which has an internal buffer of the size specified. |
| `PHXStringBuffer(java.lang.String initial)` <br>Creates a new string buffer which contains the specified string. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `PHXStringBuffer` | `addEscapes()` |
| `static java.lang.String` | `addEscapes(java.lang.String input)` <br>`Convenience static for adding escapes to plain strings` |
| `static java.lang.String` | `addEscapes(java.lang.String input, java.lang.String additionalEscapeChars)` |
| `PHXStringBuffer` | `addEscapesExtra(java.lang.String additionalEscapeChars)` |
| `PHXStringBuffer` | `append(byte[] buf)` <br>Appends a byte array using the default encoding |
| `PHXStringBuffer` | `append(byte[] buf, int offset, int len)` <br>Appends a byte array using the default encoding |
| `PHXStringBuffer` | `append(char ch)` <br>Appends a single char to this buffer |
| `PHXStringBuffer` | `append(char[] buf)` <br>Appends a char array to this buffer |
| `PHXStringBuffer` | `append(char[] buf, int offset, int len)` <br>Appends a char array to this buffer |
| `PHXStringBuffer` | `append(float num)` <br>Appends a float to this buffer |
| `PHXStringBuffer` | `append(java.io.InputStream in)` <br>Fully reads the contents of InputStream into this buffer using UTF-8 encoding. |
| `PHXStringBuffer` | `append(int num)` <br>Appends an integer to this buffer |
| `PHXStringBuffer` | `append(long num)` <br>Appends a long to this buffer |
| `PHXStringBuffer` | `append(PHXStringBuffer app)` <br>Appends a PHXStringBuffer to this buffer. |
| `PHXStringBuffer` | `append(java.io.Reader in)` |
| `PHXStringBuffer` | `append(java.lang.String app)` <br>Appends a string to this buffer |
| `char` | `charAt(long index)` <br>Get the character at the specified index |
| `void` | `clear()` <br>This is for performance only, it allows large temp files and memory to be freed. |
| `boolean` | `equals(java.lang.Object test)` <br>Compares this to another String or PHXStringBuffer. |
| `boolean` | `equalsIgnoreCase(java.lang.Object test)` <br>Compares this to another String or PHXStringBuffer. |
| `java.lang.String` | `firstWord()` <br>Returns the first word of this string, whitespace delimited. |
| `java.io.InputStream` | `getInputStream()` <br>Returns an InputStream which can be read sequentially and contains the contents of the string. |
| `java.io.Reader` | `getReader()` <br>Returns a Reader which can be read sequentially and contains the contents of the string. |
| `long` | `indexOf(char ch)` <br>Searches for a given character and returns the index to that character, or -1 if not found |
| `long` | `indexOf(char ch, int startAt)` |
| `long` | `indexOf(char ch, long startAt)` <br>Searches for a given character and returns the index to that character, or -1 if not found |
| `long` | `indexOf(java.lang.String str, int startAt)` |
| `long` | `indexOf(java.lang.String str, long startAt)` |
| `long` | `length()` <br>Returns the actual length of the string held by this buffer object. |
| `PHXStringBuffer` | `removeEscapes()` |
| `static java.lang.String` | `removeEscapes(java.lang.String input)` |
| `boolean` | `startsWith(java.lang.String test)` <br>Returns true if this string starts with the specified string |
| `PHXStringBuffer` | `substring(long start)` <br>Creates a PHXStringBuffer with the contents of this string starting at a specified point and going to the end of the string. |
| `PHXStringBuffer` | `substring(long start, long end)` <br>Creates a PHXStringBuffer with the contents of this string starting at a specified point and including up to the character before the specified end point. |
| `java.lang.String` | `toString()` <br>Returns a string representation of this object. |
| `void` | `writeTo(java.io.OutputStream os)` <br>Writes this string buffer out to an output stream efficiently does utf-8 conversion before writing |

### Methods inherited from class java.lang.Object

`clone`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Field Detail

### SIZECUTOFF

```java
public static final long SIZECUTOFF
```

**See Also:**

[Constant Field Values](./../../../../constant-values.md)

## Constructor Detail

### PHXStringBuffer

```java
public PHXStringBuffer()
```

Creates a new, empty string buffer

### PHXStringBuffer

```java
public PHXStringBuffer(long initialSize)
```

Creates a new, empty string buffer which has an internal buffer of the size specified. This is more efficient if you know the approximate size that the string will eventually be as it doesn't have to guess small and grow. In particular, if the size is over the cutoff limit, it immediately caches to disk.

### PHXStringBuffer

```java
public PHXStringBuffer(java.lang.String initial)
```

Creates a new string buffer which contains the specified string. Will cache to disk immediately if the length of the string is over the cutoff.

## Method Detail

### clear

```java
public void clear()
```

This is for performance only, it allows large temp files and memory to be freed. This will happen when the garbage collector runs, but sometimes this is not good enough when you are dealing with large files.

### append

```java
public PHXStringBuffer append(java.lang.String app)
```

Appends a string to this buffer

### append

```java
public PHXStringBuffer append(char[] buf)
```

Appends a char array to this buffer

### append

```java
public PHXStringBuffer append(char[] buf, 
                              int offset, 
                              int len)
```

Appends a char array to this buffer

**Parameters:**

- `offset` - The offset to start copying at
- `len` - The number of chars to copy

### append

```java
public PHXStringBuffer append(byte[] buf)
```

Appends a byte array using the default encoding

### append

```java
public PHXStringBuffer append(byte[] buf, 
                              int offset, 
                              int len)
```

Appends a byte array using the default encoding

### append

```java
public PHXStringBuffer append(PHXStringBuffer app)
```

Appends a `PHXStringBuffer` to this buffer. In particular this is more efficient than using `append(String)` when one or both of the buffers are currently cached out to disk.

### append

```java
public PHXStringBuffer append(java.io.InputStream in) 
                       throws java.io.IOException
```

Fully reads the contents of `InputStream` into this buffer using UTF-8 encoding. Will not close the `InputStream` when done.

**Parameters:**

- `in` - The `InputStream` to read, should be in UTF-8 encoding.

**Returns:**

- this

**Throws:**

- `java.io.IOException`

### append

```java
public PHXStringBuffer append(java.io.Reader in) 
                       throws java.io.IOException
```

**Throws:**

- `java.io.IOException`

### append

```java
public PHXStringBuffer append(int num)
```

Appends an integer to this buffer

### append

```java
public PHXStringBuffer append(long num)
```

Appends a long to this buffer

### append

```java
public PHXStringBuffer append(float num)
```

Appends a float to this buffer

### append

```java
public PHXStringBuffer append(char ch)
```

Appends a single char to this buffer

### addEscapes

```java
public static java.lang.String addEscapes(java.lang.String input)
```

Convenience static for adding escapes to plain strings

### addEscapes

```java
public static java.lang.String addEscapes(java.lang.String input, 
                                          java.lang.String additionalEscapeChars)
```

### addEscapes

```java
public PHXStringBuffer addEscapes()
```

### addEscapesExtra

```java
public PHXStringBuffer addEscapesExtra(java.lang.String additionalEscapeChars)
```

### removeEscapes

```java
public static java.lang.String removeEscapes(java.lang.String input)
```

### removeEscapes

```java
public PHXStringBuffer removeEscapes()
```

### length

```java
public long length()
```

Returns the actual length of the string held by this buffer object.

### toString

```java
public java.lang.String toString()
```

Returns a string representation of this object.

NOTE: This is very bad performance for large files. Avoid this if possible if you know you will be handling large strings.

**Overrides:**

- `toString` in class `java.lang.Object`

**See Also:**

[getReader()](PHXStringBuffer.md), [getInputStream()](PHXStringBuffer.md)

### getReader

```java
public java.io.Reader getReader()
```

Returns a `Reader` which can be read sequentially and contains the contents of the string. This is an efficient way to read the whole string.

### getInputStream

```java
public java.io.InputStream getInputStream()
```

Returns an `InputStream` which can be read sequentially and contains the contents of the string. This is an efficient way to read the whole string. The stream will be UTF-8 encoded.

### charAt

```java
public char charAt(long index)
```

Get the character at the specified index

### indexOf

```java
public long indexOf(char ch)
```

Searches for a given character and returns the index to that character, or -1 if not found

### indexOf

```java
public long indexOf(char ch, 
                    int startAt)
```

### indexOf

```java
public long indexOf(char ch, 
                    long startAt)
```

Searches for a given character and returns the index to that character, or -1 if not found

### indexOf

```java
public long indexOf(java.lang.String str, 
                    int startAt)
```

### indexOf

```java
public long indexOf(java.lang.String str, 
                    long startAt)
```

### startsWith

```java
public boolean startsWith(java.lang.String test)
```

Returns true if this string starts with the specified string

### equals

```java
public boolean equals(java.lang.Object test)
```

Compares this to another `String` or `PHXStringBuffer`. Returns `false` if you pass in null.

**Overrides:**

- `equals` in class `java.lang.Object`

### equalsIgnoreCase

```java
public boolean equalsIgnoreCase(java.lang.Object test)
```

Compares this to another `String` or `PHXStringBuffer`. Returns `false` if you pass in null. Is insensitive to case.

### firstWord

```java
public java.lang.String firstWord()
```

Returns the first word of this string, whitespace delimited.

### substring

```java
public PHXStringBuffer substring(long start)
```

Creates a `PHXStringBuffer` with the contents of this string starting at a specified point and going to the end of the string.

### substring

```java
public PHXStringBuffer substring(long start, 
                                 long end)
```

Creates a `PHXStringBuffer` with the contents of this string starting at a specified point and including up to the character before the specified end point.

### writeTo

```java
public void writeTo(java.io.OutputStream os) 
             throws java.io.IOException
```

Writes this string buffer out to an output stream efficiently does utf-8 conversion before writing

**Throws:**

- `java.io.IOException`