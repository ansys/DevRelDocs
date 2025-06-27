======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Interface IPHXFormat
- **All Known Implementing Classes:**
: [PHXDouble](../../../../com/phoenix_int/aserver/types/PHXDouble.html),[PHXDoubleArray](../../../../com/phoenix_int/aserver/types/PHXDoubleArray.html),[PHXInteger](../../../../com/phoenix_int/aserver/types/PHXInteger.html),[PHXLong](../../../../com/phoenix_int/aserver/types/PHXLong.html),[PHXLongArray](../../../../com/phoenix_int/aserver/types/PHXLongArray.html)

---

```java
public interface IPHXFormat
```
Interface for variables that support formats
Example usage:

```java

 IPHXType var = wrapper.getVariable("myVar");
 if (var instanceof IPHXFormat)
 {
    ((IPHXFormat)var).setFormat("0.0");
 }
 
```
**Author:**
: bdurham- ========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `java.lang.String` | `getFormat()`Get the format string for the variable |
| `boolean` | `hasFormat()`Whether or not the variable has a format |
| `void` | `setFormat(java.lang.String format)`Set the format string for the variable |- ============ METHOD DETAIL ==========
- ### Method Detail

- #### getFormat

```java
java.lang.String getFormat()
```
Get the format string for the variable
**Returns:**
: format string

- #### hasFormat

```java
boolean hasFormat()
```
Whether or not the variable has a format
**Returns:**
: true if variable has a format

- #### setFormat

```java
void setFormat(java.lang.String format)
```
Set the format string for the variable
**Parameters:**
: `format`- format string
========= END OF CLASS DATA =========