# Interface: IPHXUnits

**Package:** `com.phoenix_int.aserver.types`

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
- [PHXScriptObject](PHXScriptObject.md)
- [PHXSimpleArray](PHXSimpleArray.md)
- [PHXSimpleType](PHXSimpleType.md)
- [PHXString](PHXString.md)
- [PHXStringArray](PHXStringArray.md)

---

**Declaration**
```java
public interface IPHXUnits
```

Interface for PHX variables that support units.

#### Example usage:

```java
IPHXType var = wrapper.getVariable("myVar");
if (var instanceof IPHXUnits)
{
   ((IPHXUnits)var).setUnits("m");
}
```

## Method Summary

| Modifier and Type    | Method and Description|
|---------------------|-----------------|
| `java.lang.String`  | `getUnits()` <br>Get the units string for the variable     |
| `void`              | `setUnits(java.lang.String units)` <br>Set the units string for the variable |

## Method Detail

### getUnits

```java
java.lang.String getUnits()
```
Get the units string for the variable.

**Returns:**
- units string

### setUnits

```java
void setUnits(java.lang.String units)
```
Set the units string for the variable.

**Parameters:**
- `units` - units for the variable