# Interface: IPHXType2

**Package:** `com.phoenix_int.aserver.types`

**All Superinterfaces:**
- [IPHXType](IPHXType.md)

**All Known Subinterfaces:**
- [IRuntimeVariable](../../pacz/api/v2/IRuntimeVariable.md)

**All Known Implementing Classes:**
- [PHXBoolean](PHXBoolean.md)
- [PHXBooleanArray](PHXBooleanArray.md)
- [PHXDouble](PHXDouble.md)
- [PHXDoubleArray](PHXDoubleArray.md)
- [PHXFile](PHXFile.md)
- [PHXGeometry](PHXGeometry.md)
- [PHXInteger](PHXInteger.md)
- [PHXLong](PHXLong.md)
- [PHXLongArray](PHXLongArray.md)
- [PHXObjectArray](PHXObjectArray.md)
- [PHXRawFile](PHXRawFile.md)
- [PHXRawFileArray](PHXRawFileArray.md)
- [PHXReference](PHXReference.md)
- [PHXScriptObject](PHXScriptObject.md)
- [PHXSimpleArray](PHXSimpleArray.md)
- [PHXSimpleType](PHXSimpleType.md)
- [PHXString](PHXString.md)
- [PHXStringArray](PHXStringArray.md)

---

**Declaration**

```java
public interface IPHXType2
extends IPHXType
```

The interface for Phoenix types which use [PHXStringBuffer](../util/PHXStringBuffer.md) instead of String for performance.

**See Also:**
- [IPHXType](IPHXType.md)

## Nested Class Summary

| Modifier and Type | Interface and Description |
|-------------------|-------------------------|
| `static interface` | IPHXType2.IVisitor<T> The interface of a visitor into an IPHXType2. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)` Accept a Visitor. |
| `void` | `fromString2(PHXStringBuffer sb)` Configures the type based on a PHXStringBuffer representation of the type |
| `PHXStringBuffer` | `toString2()` Gets a PHXStringBuffer representation of the type |

### Methods inherited from interface com.phoenix_int.aserver.types.IPHXType
- `fromString`
- `toString`

## Method Detail

### toString2

```java
PHXStringBuffer toString2()
                   throws java.io.IOException
```

Gets a [PHXStringBuffer](../util/PHXStringBuffer.md) representation of the type

**Returns:**
- PHXStringBuffer representation of the type

**Throws:**
- `java.io.IOException`

### fromString2

```java
void fromString2(PHXStringBuffer sb)
          throws java.io.IOException, PHXGetByUrlException
```

Configures the type based on a [PHXStringBuffer](../util/PHXStringBuffer.md) representation of the type

**Parameters:**
- `sb` - representation of the type to use

**Throws:**
- `java.io.IOException`
- [`PHXGetByUrlException`](../util/PHXGetByUrlException.md)

### Accept

```
<T> T Accept(IPHXType2.IVisitor<T> visitor)
```

Accept a Visitor.

**Type Parameters:**
- `T` - Type of the result of the visit.

**Parameters:**
- `visitor` - The visitor to accept.

**Returns:**
- The results of the visit.