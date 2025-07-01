# Interface: IPHXUnits

**Package:** `com.phoenix_int.aserver.types`

**All Known Subinterfaces:**
- [IRuntimeVariable](../../../../com/phoenix_int/pacz/api/v2/IRuntimeVariable.html)

**All Known Implementing Classes:**
- [PHXBoolean](../../../../com/phoenix_int/aserver/types/PHXBoolean.html)
- [PHXBooleanArray](../../../../com/phoenix_int/aserver/types/PHXBooleanArray.html)
- [PHXDouble](../../../../com/phoenix_int/aserver/types/PHXDouble.html)
- [PHXDoubleArray](../../../../com/phoenix_int/aserver/types/PHXDoubleArray.html)
- [PHXFile](../../../../com/phoenix_int/aserver/types/PHXFile.html)
- [PHXGeometry](../../../../com/phoenix_int/aserver/types/PHXGeometry.html)
- [PHXInteger](../../../../com/phoenix_int/aserver/types/PHXInteger.html)
- [PHXLong](../../../../com/phoenix_int/aserver/types/PHXLong.html)
- [PHXLongArray](../../../../com/phoenix_int/aserver/types/PHXLongArray.html)
- [PHXObjectArray](../../../../com/phoenix_int/aserver/types/PHXObjectArray.html)
- [PHXRawFile](../../../../com/phoenix_int/aserver/types/PHXRawFile.html)
- [PHXRawFileArray](../../../../com/phoenix_int/aserver/types/PHXRawFileArray.html)
- [PHXScriptObject](../../../../com/phoenix_int/aserver/types/PHXScriptObject.html)
- [PHXSimpleArray](../../../../com/phoenix_int/aserver/types/PHXSimpleArray.html)
- [PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html)
- [PHXString](../../../../com/phoenix_int/aserver/types/PHXString.html)
- [PHXStringArray](../../../../com/phoenix_int/aserver/types/PHXStringArray.html)

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