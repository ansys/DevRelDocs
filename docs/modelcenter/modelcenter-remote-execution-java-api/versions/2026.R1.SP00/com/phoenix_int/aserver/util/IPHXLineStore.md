# Interface: IPHXLineStore

**Package:** `com.phoenix_int.aserver.util`

---

**Declaration**

```java
public interface IPHXLineStore
```

This is the interface for holding a set of lines. It is used by the [`PHXFileParser`](PHXFileParser.md) class. Concrete classes include `PHXFileLineStore` and `PHXRandomAccessFileLineStore`.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `close()`<br>Closes any resources associated with this line store |


## Method Detail

### getNumLines

```java
int getNumLines()
```

Gets the total number of lines

### getLine

```java
java.lang.String getLine(int index) 
                  throws java.io.IOException
```

Retrieves the specified line

**Parameters:**

- `index` - the index of the line to retrieve

**Throws:**

- `java.io.IOException`

**See Also:**

- [`PHXFileParser.getLine(int)`](PHXFileParser.md) - Related method in file parser

### close

```java
void close()
```

Closes any resources associated with this line store