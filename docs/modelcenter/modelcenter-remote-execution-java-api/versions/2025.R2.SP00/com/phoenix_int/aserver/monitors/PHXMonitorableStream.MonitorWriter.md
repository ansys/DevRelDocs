# Class: PHXMonitorableStream.MonitorWriter

**Package:** `com.phoenix_int.aserver.monitors`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.io.Writer
    ↳ com.phoenix_int.aserver.monitors.PHXMonitorableStream.MonitorWriter
```

**All Implemented Interfaces**

- `java.io.Closeable`, `java.io.Flushable`, `java.lang.Appendable`, `java.lang.AutoCloseable`

**Enclosing class:**

- [PHXMonitorableStream](PHXMonitorableStream.md)

---

**Declaration**

```java
public class PHXMonitorableStream.MonitorWriter
extends java.io.Writer
```

## Field Summary

### Fields inherited from class java.io.Writer
`lock`

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `close()` |
| `void` | `flush()` |
| `void` | `write(char[] buf, int pos, int len)` |

### Methods inherited from class java.io.Writer
`append, append, append, write, write, write, write`

### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

## Method Detail

### flush

```java
public void flush()
```

**Specified by:**
- `flush` in interface `java.io.Flushable`
- `flush` in class `java.io.Writer`

### close

```java
public void close()
```

**Specified by:**
- `close` in interface `java.io.Closeable`
- `close` in interface `java.lang.AutoCloseable`
- `close` in class `java.io.Writer`

### write

```java
public void write(char[] buf, 
                  int pos, 
                  int len)
```

**Specified by:**
- `write` in class `java.io.Writer`