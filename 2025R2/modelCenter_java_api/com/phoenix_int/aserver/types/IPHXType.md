======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Interface IPHXType
- **All Known Subinterfaces:**
: [IPHXType2](../../../../com/phoenix_int/aserver/types/IPHXType2.html),[IRuntimeVariable](../../../../com/phoenix_int/pacz/api/v2/IRuntimeVariable.html)

**All Known Implementing Classes:**
: [PHXBoolean](../../../../com/phoenix_int/aserver/types/PHXBoolean.html),[PHXBooleanArray](../../../../com/phoenix_int/aserver/types/PHXBooleanArray.html),[PHXDouble](../../../../com/phoenix_int/aserver/types/PHXDouble.html),[PHXDoubleArray](../../../../com/phoenix_int/aserver/types/PHXDoubleArray.html),[PHXFile](../../../../com/phoenix_int/aserver/types/PHXFile.html),[PHXGeometry](../../../../com/phoenix_int/aserver/types/PHXGeometry.html),[PHXInteger](../../../../com/phoenix_int/aserver/types/PHXInteger.html),[PHXLong](../../../../com/phoenix_int/aserver/types/PHXLong.html),[PHXLongArray](../../../../com/phoenix_int/aserver/types/PHXLongArray.html),[PHXObjectArray](../../../../com/phoenix_int/aserver/types/PHXObjectArray.html),[PHXRawFile](../../../../com/phoenix_int/aserver/types/PHXRawFile.html),[PHXRawFileArray](../../../../com/phoenix_int/aserver/types/PHXRawFileArray.html),[PHXReference](../../../../com/phoenix_int/aserver/types/PHXReference.html),[PHXScriptObject](../../../../com/phoenix_int/aserver/types/PHXScriptObject.html),[PHXSimpleArray](../../../../com/phoenix_int/aserver/types/PHXSimpleArray.html),[PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html),[PHXString](../../../../com/phoenix_int/aserver/types/PHXString.html),[PHXStringArray](../../../../com/phoenix_int/aserver/types/PHXStringArray.html)

---

```java
public interface IPHXType
```
The interface for all Phoenix types. Phoenix types are
 usually composite classes that provide subproperties for things
 like descriptions, units, etc. Implementing this interface permits
 the ModelCenter Remote Execution to set and get values directly from the object 
 even though the value may actually be stored as a sub-property.
**Author:**
: Woyak- ========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `void` | `fromString(java.lang.String value)`Set the value for the variable using a string |
| `java.lang.String` | `toString()`Gets the value for the variable |- ============ METHOD DETAIL ==========
- ### Method Detail

- #### fromString

```java
void fromString(java.lang.String value)
```
Set the value for the variable using a string
**Parameters:**
: `value`- the value of the variable

- #### toString

```java
java.lang.String toString()
```
Gets the value for the variable
**Overrides:**
: `toString`in class`java.lang.Object`
**Returns:**
: the value as a String
========= END OF CLASS DATA =========