# Class: BufferedRandomAccessFile

**Package:** `com.phoenix_int.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.util.BufferedRandomAccessFile
```

---
**Declaration**

```java
public class BufferedRandomAccessFile
extends java.lang.Object
```

Replacement for RandomAccessFile to use buffered I/O as much as possible. Mostly identical to `java.io.RandomAccessFile` API, or at least as close enough for what I needed.

**Note:** This class is not threadsafe.

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `protected long` | `_actualPos` |
| `protected byte[]` | `_buffer` |
| `protected long` | `_bufStart` |
| `protected long` | `_fileLen` |
| `protected long` | `_filePos` |
| `protected int` | `_readOffset` |
| `protected java.io.RandomAccessFile` | `_wrapped` |
| `protected int` | `_writeOffset` |

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `BufferedRandomAccessFile(java.io.File file, java.lang.String mode, int bufSize)` <br>Constructs a BufferedRandomAccessFile |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `boolean` | `_readBuf()` |
| `void` | `close()` |
| `void` | `flush()` |
| `long` | `length()` |
| `int` | `read()` |
| `int` | `read(byte[] buf)` |
| `int` | `read(byte[] buf, int offset, int len)` |
| `void` | `seek(long position)` |
| `void` | `write(byte[] buf)` |
| `void` | `write(byte[] buf, int offset, int len)` |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Field Detail

### _wrapped

```java
protected java.io.RandomAccessFile _wrapped
```

### _filePos

```java
protected long _filePos
```

### _fileLen

```java
protected long _fileLen
```

### _actualPos

```java
protected long _actualPos
```

### _bufStart

```java
protected long _bufStart
```

### _buffer

```java
protected byte[] _buffer
```

### _writeOffset

```java
protected int _writeOffset
```

### _readOffset

```java
protected int _readOffset
```

## Constructor Detail

### BufferedRandomAccessFile

```java
public BufferedRandomAccessFile(java.io.File file,
                                java.lang.String mode,
                                int bufSize)
                         throws java.io.IOException
```

**Parameters:**
- `file` - The file to open
- `mode` - Same as for RandomAccessFile's constructor
- `bufSize` - How big to make the in-memory cache.

**Throws:**
- `java.io.IOException`

## Method Detail

### length

```java
public long length()
            throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### seek

```java
public void seek(long position)
```

### close

```java
public void close()
           throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### write

```java
public void write(byte[] buf)
           throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### write

```java
public void write(byte[] buf,
                  int offset,
                  int len)
           throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### flush

```java
public void flush()
           throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### read

```java
public int read()
         throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### read

```java
public int read(byte[] buf)
         throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### read

```java
public int read(byte[] buf,
                int offset,
                int len)
         throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### _readBuf

```java
public boolean _readBuf()
                 throws java.io.IOException
```

**Throws:**
- `java.io.IOException`