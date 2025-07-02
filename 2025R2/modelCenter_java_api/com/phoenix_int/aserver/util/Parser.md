## Interface: Parser

**Package:** `com.phoenix_int.aserver.util`

**All Known Implementing Classes:**
- [PHXFileParser](PHXFileParser.md)

-- 

**Declaration**

```java
public interface Parser
```

Interface to define the methods of a parser. Defined after-the-fact from the existing PHXFileParser with the intent to be useful for PHXXMLParser.

## Nested Class Summary

| Modifier and Type | Interface and Description |
|-------------------|-------------------------|
| `static class` | `Parser.Mode`<br>File-access mode. Moved to type-safe enum from legacy integer constants |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `close()`<br>Close the parser |
| `void` | `writeTo(java.io.OutputStreamWriter fw)`<br>Write any changes to the output stream |

## Method Detail

### writeTo

```java
void writeTo(java.io.OutputStreamWriter fw)
      throws java.io.IOException
```
Write any changes to the output stream

**Throws:**
- `java.io.IOException`

### close

```java
void close()
```
Close the parser