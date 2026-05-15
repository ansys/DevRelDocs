# Interface: IPHXFormat

**Package:** `com.phoenix_int.aserver.types`

**All Known Implementing Classes:**
- [PHXDouble](./PHXDouble.md)
- [PHXDoubleArray](./PHXDoubleArray.md)
- [PHXInteger](./PHXInteger.md)
- [PHXLong](./PHXLong.md)
- [PHXLongArray](./PHXLongArray.md)

---

**Declaration**

```java
public interface IPHXFormat
```

Interface for variables that support formats.

Example usage:

```java
IPHXType var = wrapper.getVariable("myVar");
if (var instanceof IPHXFormat)
{
    ((IPHXFormat)var).setFormat("0.0");
}
```

## Method Summary

| Modifier and Type    | Method and Description                         |
|---------------------|------------------------------------------------|
| `java.lang.String`  | `getFormat()` <br>Get the format string for the variable |
| `boolean`           | `hasFormat()` <br>Whether or not the variable has a format |
| `void`              | `setFormat(java.lang.String format)` <br>Set the format string for the variable |

## Method Detail

### getFormat

```java
java.lang.String getFormat()
```

Get the format string for the variable

**Returns:**
- format string

### hasFormat

```java
boolean hasFormat()
```

Whether or not the variable has a format

**Returns:**
- true if variable has a format

### setFormat

```java
void setFormat(java.lang.String format)
```

Set the format string for the variable

**Parameters:**
- `format` - format string