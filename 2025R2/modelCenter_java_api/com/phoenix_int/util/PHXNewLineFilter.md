# Class: PHXNewLineFilter

**Package:** `com.phoenix_int.util`

**Class Hierarchy**

```java
↳ java.lang.Object
  ↳ java.io.Reader
    ↳ com.phoenix_int.util.PHXNewLineFilter
```

**Implemented Interfaces**

- `java.io.Closeable`, `java.lang.AutoCloseable`, `java.lang.Readable`

---

**Declaration**

```java
public class PHXNewLineFilter
extends java.io.Reader
```

Implementation of a FilterReader that processes out newlines into Java style newlines '\n' with the same logic as `BufferedReader.readLine()`

## Field Summary

### Fields inherited from class java.io.Reader

`lock`

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXNewLineFilter(java.io.Reader in)`<br>Creates a new instance of PHXNewLineFilter |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `close()` |
| `int` | `read(char[] cbuf, int off, int len)` |

### Methods inherited from class java.io.Reader

`mark`, `markSupported`, `read`, `read`, `read`, `ready`, `reset`, `skip`

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXNewLineFilter

```java
public PHXNewLineFilter(java.io.Reader in)
```

Creates a new instance of PHXNewLineFilter

## Method Detail

### close

```java
public void close()
           throws java.io.IOException
```

**Specified by:**
- `close` in interface `java.io.Closeable`
- `close` in interface `java.lang.AutoCloseable`
- `close` in class `java.io.Reader`

**Throws:**
- `java.io.IOException`

### read

```java
public int read(char[] cbuf, 
                int off, 
                int len)
         throws java.io.IOException
```

**Specified by:**
- `read` in class `java.io.Reader`

**Throws:**
- `java.io.IOException`