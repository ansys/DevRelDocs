# Interface: PHXInternationalize.InternationalizedMessage

**Enclosing class:**
[PHXInternationalize](PHXInternationalize.md)

**Functional Interface:**
This is a functional interface and can therefore be used as the assignment target for a lambda expression or method reference.

**Package:** 
- `com.phoenix_int.util`

--- 
**Declaration**

```java
@FunctionalInterface
public static interface PHXInternationalize.InternationalizedMessage
```

Interface for a lazily computed translation message. Can be used for example to pass to a logger that will only do the translation if the log level is enabled.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `computeMessage()`<br>Compute the translation and return the message |

## Method Detail

### computeMessage

```java
java.lang.String computeMessage()
```

Compute the translation and return the message

**Returns:**
- The translated message