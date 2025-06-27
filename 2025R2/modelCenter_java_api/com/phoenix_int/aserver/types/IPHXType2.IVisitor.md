======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Interface IPHXType2.IVisitor<T>
- **Type Parameters:**
: `T`- The results type from the visitation.

**Enclosing interface:**
: [IPHXType2](../../../../com/phoenix_int/aserver/types/IPHXType2.html)

---

```java
public static interface IPHXType2.IVisitor<T>
```
The interface of a visitor into an IPHXType2.
A part of the visitor pattern.

**Note:**PHXFile, PHXFloatArray, PHXInteger, PHXIntegerArray, PHXObjectArray, PHXReference and PHXScriptObject are 
 not supported by the visitor pattern of IPXHType2.- ========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `T` | `visit(PHXBooleanhost)`Visit a PHXBoolean. |
| `T` | `visit(PHXBooleanArrayhost)`Visit a PHXBooleanArray. |
| `T` | `visit(PHXDoublehost)`Visit a PHXDouble. |
| `T` | `visit(PHXDoubleArrayhost)`Visit a PHXDoubleArray. |
| `T` | `visit(PHXGeometryhost)`Visit a PHXGeometry. |
| `T` | `visit(PHXLonghost)`Visit a PHXLong. |
| `T` | `visit(PHXLongArrayhost)`Visit a PHXLongArray. |
| `T` | `visit(PHXRawFilehost)`Visit a PHXRawFile. |
| `T` | `visit(PHXRawFileArrayhost)`Visit a PHXRawFileArray. |
| `T` | `visit(PHXStringhost)`Visit a PHXString. |
| `T` | `visit(PHXStringArrayhost)`Visit a PHXStringArray. |- ============ METHOD DETAIL ==========
- ### Method Detail

- #### visit

```java
T visit(PHXBoolean host)
```
Visit a PHXBoolean.
**Parameters:**
: `host`- The host of the visit.
**Returns:**
: The results of the visitation.

- #### visit

```java
T visit(PHXLong host)
```
Visit a PHXLong.
**Parameters:**
: `host`- The host of the visit.
**Returns:**
: The results of the visitation.

- #### visit

```java
T visit(PHXDouble host)
```
Visit a PHXDouble.
**Parameters:**
: `host`- The host of the visit.
**Returns:**
: The results of the visitation.

- #### visit

```java
T visit(PHXString host)
```
Visit a PHXString.
**Parameters:**
: `host`- The host of the visit.
**Returns:**
: The results of the visitation.

- #### visit

```java
T visit(PHXRawFile host)
```
Visit a PHXRawFile.
**Parameters:**
: `host`- The host of the visit.
**Returns:**
: The results of the visitation.

- #### visit

```java
T visit(PHXGeometry host)
```
Visit a PHXGeometry.
**Parameters:**
: `host`- The host of the visit.
**Returns:**
: The results of the visitation.

- #### visit

```java
T visit(PHXBooleanArray host)
```
Visit a PHXBooleanArray.
**Parameters:**
: `host`- The host of the visit.
**Returns:**
: The results of the visitation.

- #### visit

```java
T visit(PHXLongArray host)
```
Visit a PHXLongArray.
**Parameters:**
: `host`- The host of the visit.
**Returns:**
: The results of the visitation.

- #### visit

```java
T visit(PHXDoubleArray host)
```
Visit a PHXDoubleArray.
**Parameters:**
: `host`- The host of the visit.
**Returns:**
: The results of the visitation.

- #### visit

```java
T visit(PHXStringArray host)
```
Visit a PHXStringArray.
**Parameters:**
: `host`- The host of the visit.
**Returns:**
: The results of the visitation.

- #### visit

```java
T visit(PHXRawFileArray host)
```
Visit a PHXRawFileArray.
**Parameters:**
: `host`- The host of the visit.
**Returns:**
: The results of the visitation.
========= END OF CLASS DATA =========