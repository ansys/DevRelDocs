## Interface: IPHXStringReplacer

**Package:** `com.phoenix_int.aserver.util`

--- 

**Declaration**

```java
public interface IPHXStringReplacer
```

This is the interface for replacing strings, used by the PHXStringReplacer class.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `getReplacement(java.lang.String s)`<br>replaces the specified string with some other value. |

## Method Detail

### getReplacement

```java
java.lang.String getReplacement(java.lang.String s)
                         throws PHXNoSuchReplacementException
```
replaces the specified string with some other value. If the string does not match a known entity, just return it.

**Parameters:**
- `s` - the String to replace

**Returns:**
- the replacement

**Throws:**
- [`PHXNoSuchReplacementException`](PHXNoSuchReplacementException.md) - thrown if no replacement exists