======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Interface IPHXType2
- **All Superinterfaces:**
: [IPHXType](../../../../com/phoenix_int/aserver/types/IPHXType.html)

**All Known Subinterfaces:**
: [IRuntimeVariable](../../../../com/phoenix_int/pacz/api/v2/IRuntimeVariable.html)

**All Known Implementing Classes:**
: [PHXBoolean](../../../../com/phoenix_int/aserver/types/PHXBoolean.html),[PHXBooleanArray](../../../../com/phoenix_int/aserver/types/PHXBooleanArray.html),[PHXDouble](../../../../com/phoenix_int/aserver/types/PHXDouble.html),[PHXDoubleArray](../../../../com/phoenix_int/aserver/types/PHXDoubleArray.html),[PHXFile](../../../../com/phoenix_int/aserver/types/PHXFile.html),[PHXGeometry](../../../../com/phoenix_int/aserver/types/PHXGeometry.html),[PHXInteger](../../../../com/phoenix_int/aserver/types/PHXInteger.html),[PHXLong](../../../../com/phoenix_int/aserver/types/PHXLong.html),[PHXLongArray](../../../../com/phoenix_int/aserver/types/PHXLongArray.html),[PHXObjectArray](../../../../com/phoenix_int/aserver/types/PHXObjectArray.html),[PHXRawFile](../../../../com/phoenix_int/aserver/types/PHXRawFile.html),[PHXRawFileArray](../../../../com/phoenix_int/aserver/types/PHXRawFileArray.html),[PHXReference](../../../../com/phoenix_int/aserver/types/PHXReference.html),[PHXScriptObject](../../../../com/phoenix_int/aserver/types/PHXScriptObject.html),[PHXSimpleArray](../../../../com/phoenix_int/aserver/types/PHXSimpleArray.html),[PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html),[PHXString](../../../../com/phoenix_int/aserver/types/PHXString.html),[PHXStringArray](../../../../com/phoenix_int/aserver/types/PHXStringArray.html)

---

```java
public interface IPHXType2
extends IPHXType
```
The interface for Phoenix types which use PHXStringBuffer instead of String for performance.
**Author:**
: nsharp
**See Also:**
: [IPHXType](../../../../com/phoenix_int/aserver/types/IPHXType.html)- ======== NESTED CLASS SUMMARY ========
- ### Nested Class Summary

| Modifier and Type | Interface and Description |
| --- | --- |
| Modifier and Type | Interface and Description |
| `static interface` | `IPHXType2.IVisitor<T>`The interface of a visitor into an IPHXType2. |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`Accept a Visitor. |
| `void` | `fromString2(PHXStringBuffersb)`Configures the type based on a PHXStringBuffer representation of the type |
| `PHXStringBuffer` | `toString2()`Gets a PHXStringBuffer representation of the type |

- ### Methods inherited from interface com.phoenix_int.aserver.types.IPHXType
`fromString,toString`- ============ METHOD DETAIL ==========
- ### Method Detail

- #### toString2

```java
PHXStringBuffer toString2()
                   throws java.io.IOException
```
Gets a PHXStringBuffer representation of the type
**Returns:**
: PHXStringBuffer representation of the type
**Throws:**
: `java.io.IOException`

- #### fromString2

```java
void fromString2(PHXStringBuffer sb)
          throws java.io.IOException,
                 PHXGetByUrlException
```
Configures the type based on a PHXStringBuffer representation of the type
**Parameters:**
: `sb`- representation of the type to use
**Throws:**
: `java.io.IOException`
: `PHXGetByUrlException`

- #### Accept

```java
<T> T Accept(IPHXType2.IVisitor<T> visitor)
```
Accept a Visitor.
**Type Parameters:**
: `T`- Type of the result of the visit.
**Parameters:**
: `visitor`- The visitor to accept.
**Returns:**
: The results of the visit.
========= END OF CLASS DATA =========