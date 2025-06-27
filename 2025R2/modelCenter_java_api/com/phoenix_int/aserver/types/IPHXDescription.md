======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Interface IPHXDescription
- **All Known Subinterfaces:**
: [IPHXRefPropInfo](../../../../com/phoenix_int/aserver/types/IPHXRefPropInfo.html)

**All Known Implementing Classes:**
: [PHXRefArrayProperty](../../../../com/phoenix_int/aserver/types/PHXRefArrayProperty.html),[PHXRefProperty](../../../../com/phoenix_int/aserver/types/PHXRefProperty.html)

---

```java
public interface IPHXDescription
```
Interface for types with descriptions
Example usage:

```java

 IPHXType var = wrapper.getVariable("myVar");
 if (var instanceof IPHXDescription)
 {
    ((IPHXDescription)var).setDescription("my variable");
 }
 
```
**Author:**
: bdurham- ========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `java.lang.String` | `getDescription()`Get the variable description |
| `void` | `setDescription(java.lang.String desc)`Set the variable description. |- ============ METHOD DETAIL ==========
- ### Method Detail

- #### getDescription

```java
java.lang.String getDescription()
```
Get the variable description
**Returns:**
: description

- #### setDescription

```java
void setDescription(java.lang.String desc)
```
Set the variable description.
 This should be a short, one-line description.
**Parameters:**
: `desc`- the description
========= END OF CLASS DATA =========