# Interface: IPHXType

**Package:** `com.phoenix_int.aserver.types`

**All Known Subinterfaces:**
- [IPHXType2](IPHXType2.md)
- [IRuntimeVariable](./../../pacz/api/v2/IRuntimeVariable.md)

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
public interface IPHXType
```

The interface for all MCRE types. MCRE types are usually composite classes that provide subproperties for things like descriptions, units, etc. Implementing this interface permits ModelCenter Remote Execution to set and get values directly from the object even though the value may actually be stored as a sub-property.

## Method Summary

| Modifier and Type    | Method and Description|
|---------------------|------------------------------|
| `void`| `fromString(java.lang.String value)`<br>Set the value for the variable using a string |
| `java.lang.String`  | `toString()` <br>Gets the value for the variable           |

## Method Detail

### fromString

```java
void fromString(java.lang.String value)
```

Set the value for the variable using a string

**Parameters:**
- `value` - the value of the variable

### toString

```java
java.lang.String toString()
```

Gets the value for the variable

**Overrides:**
- `toString` in class `java.lang.Object`

**Returns:**
- the value as a String