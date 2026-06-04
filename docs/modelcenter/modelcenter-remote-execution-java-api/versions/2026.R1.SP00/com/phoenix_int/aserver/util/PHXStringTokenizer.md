# Class: PHXStringTokenizer

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.PHXStringTokenizer
```

**Implemented Interfaces**

- `java.util.Enumeration`

**Declaration**

```java
public class PHXStringTokenizer
extends java.lang.Object
implements java.util.Enumeration
```

This is a more sophisticated version of the Java `StringTokenizer`. Using the `StringTokenizer` source as a starting point, the source code was modified to recognize quoted strings as separate tokens.

The following is one example of the use of the tokenizer. The code:

```java
PHXStringTokenizer st = new PHXStringTokenizer( "this \"is a\" test" );
while ( st.hasMoreTokens() )
{
   System.out.println( st.nextToken() );
}
```

prints the following output:

```

This
is a
test
```

The "doUnslash" option is true by default and makes it unslash special backslash sequences correctly (like a unix shell prompt does). It can be set to false for backwards compatibility but is recommended strongly that we use true as much as possible.

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXStringTokenizer(PHXStringBuffer str)`<br>Constructs a string tokenizer for the specified string. |
| `PHXStringTokenizer(PHXStringBuffer str, boolean doUnslash)`<br>Constructs a string tokenizer for the specified string. |
| `PHXStringTokenizer(PHXStringBuffer str, java.lang.String delim)`<br>Constructs a string tokenizer for the specified string. |
| `PHXStringTokenizer(PHXStringBuffer str, java.lang.String delim, boolean doUnslash)`<br>Constructs a string tokenizer for the specified string. |
| `PHXStringTokenizer(java.lang.String str)`<br>Constructs a string tokenizer for the specified string. |
| `PHXStringTokenizer(java.lang.String str, boolean doUnslash)`<br>Constructs a string tokenizer for the specified string. |
| `PHXStringTokenizer(java.lang.String str, java.lang.String delim)`<br>Constructs a string tokenizer for the specified string. |
| `PHXStringTokenizer(java.lang.String str, java.lang.String delim, boolean doUnslash)`<br>Constructs a string tokenizer for the specified string. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `int` | `countTokens()`<br>Calculates the number of times that this tokenizer's `nextToken` method can be called before it generates an exception. |
| `long` | `getCurrentPosition()` |
| `java.lang.String` | `getRemainder()`<br>Returns the remainder of the string (stuff not yet returned via `nextToken()`) |
| `PHXStringBuffer` | `getRemainder2()`<br>Returns the remainder of the string (stuff not yet returned via `nextToken()`) |
| `boolean` | `hasMoreElements()`<br>Returns the same value as the `hasMoreTokens` method. |
| `boolean` | `hasMoreTokens()`<br>Tests if there are more tokens available from this tokenizer's string. |
| `static void` | `main(java.lang.String[] args)` |
| `java.lang.Object` | `nextElement()`<br>Returns the same value as the `nextToken` method, except that its declared return value is `Object` rather than `String`. |
| `java.lang.String` | `nextToken()`<br>Returns the next token from this string tokenizer. |
| `java.lang.String` | `nextToken(java.lang.String delim)`<br>Returns the next token in this string tokenizer's string. |
| `PHXStringBuffer` | `nextToken2()`<br>Returns the next token from this string tokenizer. |
| `PHXStringBuffer` | `nextToken2(boolean returnValue)`<br>Returns the next token from this string tokenizer. |
| `PHXStringBuffer` | `nextToken2(java.lang.String delim)`<br>Returns the next token in this string tokenizer's string. |
| `void` | `setQuoteChar(char c)`<br>Sets the character to be used to indicate the start and end of strings. |
| `void` | `skipDelimiters()`<br>Skips delimiters. |
| `boolean` | `wasLastTokenQuoted()`<br>Indicates whether the last token retrieved was a quoted string |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXStringTokenizer

```java
public PHXStringTokenizer(java.lang.String str, 
                          java.lang.String delim)
```

Constructs a string tokenizer for the specified string. The characters in the `delim` argument are the delimiters for separating tokens. If the `returnTokens` flag is `true`, then the delimiter characters are also returned as tokens. Each delimiter is returned as a string of length 1. If the flag is `false`, the delimiter characters are skipped and only serve as separators between tokens.

**Parameters:**
- `str` - a string to be parsed.
- `delim` - the delimiters.

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if `"` is specified as a delimiter

### PHXStringTokenizer

```java
public PHXStringTokenizer(java.lang.String str, 
                          java.lang.String delim, 
                          boolean doUnslash)
```

Constructs a string tokenizer for the specified string. The characters in the `delim` argument are the delimiters for separating tokens. If the `returnTokens` flag is `true`, then the delimiter characters are also returned as tokens. Each delimiter is returned as a string of length 1. If the flag is `false`, the delimiter characters are skipped and only serve as separators between tokens.

**Parameters:**
- `str` - a string to be parsed.
- `delim` - the delimiters.
- `doUnslash` - Whether to unslash slashed characters (\n)

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if `"` is specified as a delimiter

### PHXStringTokenizer

```java
public PHXStringTokenizer(PHXStringBuffer str, 
                          java.lang.String delim)
```

Constructs a string tokenizer for the specified string. The characters in the `delim` argument are the delimiters for separating tokens. If the `returnTokens` flag is `true`, then the delimiter characters are also returned as tokens. Each delimiter is returned as a string of length 1. If the flag is `false`, the delimiter characters are skipped and only serve as separators between tokens.

**Parameters:**
- `str` - a string to be parsed.
- `delim` - the delimiters.

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if `"` is specified as a delimiter

### PHXStringTokenizer

```java
public PHXStringTokenizer(PHXStringBuffer str, 
                          java.lang.String delim, 
                          boolean doUnslash)
```

Constructs a string tokenizer for the specified string. The characters in the `delim` argument are the delimiters for separating tokens. If the `returnTokens` flag is `true`, then the delimiter characters are also returned as tokens. Each delimiter is returned as a string of length 1. If the flag is `false`, the delimiter characters are skipped and only serve as separators between tokens.

**Parameters:**
- `str` - a string to be parsed.
- `delim` - the delimiters.
- `doUnslash` - Whether to unslash slashed characters (\n)

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if `"` is specified as a delimiter

### PHXStringTokenizer

```java
public PHXStringTokenizer(java.lang.String str)
```

Constructs a string tokenizer for the specified string. The tokenizer uses the default delimiter set, which is `"\t\n\r"`: the space character, the tab character, the newline character, and the carriage-return character.

**Parameters:**
- `str` - a string to be parsed.

### PHXStringTokenizer

```java
public PHXStringTokenizer(java.lang.String str, 
                          boolean doUnslash)
```

Constructs a string tokenizer for the specified string. The tokenizer uses the default delimiter set, which is `"\t\n\r"`: the space character, the tab character, the newline character, and the carriage-return character.

**Parameters:**
- `str` - a string to be parsed.
- `doUnslash` - Whether to unslash slashed characters (\n)

### PHXStringTokenizer

```java
public PHXStringTokenizer(PHXStringBuffer str)
```

Constructs a string tokenizer for the specified string. The tokenizer uses the default delimiter set, which is `"\t\n\r"`: the space character, the tab character, the newline character, and the carriage-return character.

**Parameters:**
- `str` - a string to be parsed.

### PHXStringTokenizer

```java
public PHXStringTokenizer(PHXStringBuffer str, 
                          boolean doUnslash)
```

Constructs a string tokenizer for the specified string. The tokenizer uses the default delimiter set, which is `"\t\n\r"`: the space character, the tab character, the newline character, and the carriage-return character.

**Parameters:**
- `str` - a string to be parsed.
- `doUnslash` - Whether to unslash slashed characters (\n)


## Method Detail

### setQuoteChar

```java
public void setQuoteChar(char c)
```

Sets the character to be used to indicate the start and end of strings. By default it is double quotes: '"'. Use this function to set it to a single quote instead.

**Parameters:**
- `c` - the quote character

### getCurrentPosition

```java
public long getCurrentPosition()
```

### skipDelimiters

```java
public void skipDelimiters()
```

Skips delimiters.

### wasLastTokenQuoted

```java
public boolean wasLastTokenQuoted()
```

Indicates whether the last token retrieved was a quoted string

**Returns:**
- `true` or `false`

### hasMoreTokens

```java
public boolean hasMoreTokens()
```

Tests if there are more tokens available from this tokenizer's string.

**Returns:**
- `true` if there are more tokens available from this tokenizer's string; `false` otherwise.

### getRemainder

```java
public java.lang.String getRemainder()
```

Returns the remainder of the string (stuff not yet returned via `nextToken()`)

**Returns:**
- the remainder of the untokenized string

### getRemainder2

```java
public PHXStringBuffer getRemainder2()
```

Returns the remainder of the string (stuff not yet returned via `nextToken()`)

**Returns:**
- the remainder of the untokenized string

### nextToken

```java
public java.lang.String nextToken()
```

Returns the next token from this string tokenizer.

**Returns:**
- the next token from this string tokenizer.

**Throws:**
- `java.util.NoSuchElementException` - if there are no more tokens in this tokenizer's string.

### nextToken2

```java
public PHXStringBuffer nextToken2()
```

Returns the next token from this string tokenizer.

**Returns:**
- the next token from this string tokenizer.

**Throws:**
- `java.util.NoSuchElementException` - if there are no more tokens in this tokenizer's string.

### nextToken2

```java
public PHXStringBuffer nextToken2(boolean returnValue)
```

Returns the next token from this string tokenizer.

**Parameters:**
- `returnValue` - if false, the value returned is always null

**Returns:**
- the next token from this string tokenizer.

**Throws:**
- `java.util.NoSuchElementException` - if there are no more tokens in this tokenizer's string.

### nextToken

```java
public java.lang.String nextToken(java.lang.String delim)
```

Returns the next token in this string tokenizer's string. The new delimiter set remains the default after this call.

**Parameters:**
- `delim` - the new delimiters.

**Returns:**
- the next token, after switching to the new delimiter set.

**Throws:**
- `java.util.NoSuchElementException` - if there are no more tokens in this tokenizer's string.
- `java.lang.IllegalArgumentException` - thrown if `"` is specified as a delimeter

### nextToken2

```java
public PHXStringBuffer nextToken2(java.lang.String delim)
```

Returns the next token in this string tokenizer's string. The new delimiter set remains the default after this call.

**Parameters:**
- `delim` - the new delimiters.

**Returns:**
- the next token, after switching to the new delimiter set.

**Throws:**
- `java.util.NoSuchElementException` - if there are no more tokens in this tokenizer's string.
- `java.lang.IllegalArgumentException` - thrown if `"` is specified as a delimeter

### hasMoreElements

```java
public boolean hasMoreElements()
```

Returns the same value as the `hasMoreTokens` method. It exists so that this class can implement the `Enumeration` interface.

**Specified by:**
- `hasMoreElements` in interface `java.util.Enumeration`

**Returns:**
- `true` if there are more tokens; `false` otherwise.

### nextElement

```java
public java.lang.Object nextElement()
```

Returns the same value as the `nextToken` method, except that its declared return value is `Object` rather than `String`. It exists so that this class can implement the `Enumeration` interface.

**Specified by:**
- `nextElement` in interface `java.util.Enumeration`

**Returns:**
- the next token in the string.

**Throws:**
- `java.util.NoSuchElementException` - if there are no more tokens in this tokenizer's string.

### countTokens

```java
public int countTokens()
```

Calculates the number of times that this tokenizer's `nextToken` method can be called before it generates an exception.

**Returns:**
- the number of tokens remaining in the string using the current delimiter set.

### main

```java
public static void main(java.lang.String[] args)
```
