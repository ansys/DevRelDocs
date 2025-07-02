# Interface: IPHXType2.IVisitor<T>

**Package:** `com.phoenix_int.aserver.types`

**Type Parameters:**
- `T` - The results type from the visitation.

**Enclosing interface:**
- [IPHXType2](IPHXType2.md)

---

**Declaration**

```java
public static interface IPHXType2.IVisitor<T>
```

The interface of a visitor into an [IPHXType2](IPHXType2.md). A part of the visitor pattern.

**Note:** [PHXFile](PHXFile.md), PHXFloatArray, [PHXInteger](PHXInteger.md), PHXIntegerArray, [PHXObjectArray](PHXObjectArray.md), [PHXReference](PHXReference.md) and [PHXScriptObject](PHXScriptObject.md) are not supported by the visitor pattern of IPXHType2.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `T` | `visit(PHXBoolean host)` <br>Visit a PHXBoolean. |
| `T` | `visit(PHXBooleanArray host)` <br>Visit a PHXBooleanArray. |
| `T` | `visit(PHXDouble host)` <br>Visit a PHXDouble. |
| `T` | `visit(PHXDoubleArray host)` <br>Visit a PHXDoubleArray. |
| `T` | `visit(PHXGeometry host)` <br>Visit a PHXGeometry. |
| `T` | `visit(PHXLong host)` <br>Visit a PHXLong. |
| `T` | `visit(PHXLongArray host)` <br>Visit a PHXLongArray. |
| `T` | `visit(PHXRawFile host)` <br>Visit a PHXRawFile. |
| `T` | `visit(PHXRawFileArray host)` <br>Visit a PHXRawFileArray. |
| `T` | `visit(PHXString host)` <br>Visit a PHXString. |
| `T` | `visit(PHXStringArray host)` <br>Visit a PHXStringArray. |

## Method Detail

### visit (PHXBoolean)

```java
T visit(PHXBoolean host)
```
Visit a PHXBoolean.

**Parameters:**
- `host` - The host of the visit.

**Returns:**
- The results of the visitation.

### visit (PHXLong)

```java
T visit(PHXLong host)
```
Visit a PHXLong.

**Parameters:**
- `host` - The host of the visit.

**Returns:**
- The results of the visitation.

### visit (PHXDouble)

```java
T visit(PHXDouble host)
```
Visit a PHXDouble.

**Parameters:**
- `host` - The host of the visit.

**Returns:**
- The results of the visitation.

### visit (PHXString)

```java
T visit(PHXString host)
```
Visit a PHXString.

**Parameters:**
- `host` - The host of the visit.

**Returns:**
- The results of the visitation.

### visit (PHXRawFile)

```java
T visit(PHXRawFile host)
```
Visit a PHXRawFile.

**Parameters:**
- `host` - The host of the visit.

**Returns:**
- The results of the visitation.

### visit (PHXGeometry)

```java
T visit(PHXGeometry host)
```
Visit a PHXGeometry.

**Parameters:**
- `host` - The host of the visit.

**Returns:**
- The results of the visitation.

### visit (PHXBooleanArray)

```java
T visit(PHXBooleanArray host)
```
Visit a PHXBooleanArray.

**Parameters:**
- `host` - The host of the visit.

**Returns:**
- The results of the visitation.

### visit (PHXLongArray)

```java
T visit(PHXLongArray host)
```
Visit a PHXLongArray.

**Parameters:**
- `host` - The host of the visit.

**Returns:**
- The results of the visitation.

### visit (PHXDoubleArray)

```java
T visit(PHXDoubleArray host)
```
Visit a PHXDoubleArray.

**Parameters:**
- `host` - The host of the visit.

**Returns:**
- The results of the visitation.

### visit (PHXStringArray)

```java
T visit(PHXStringArray host)
```
Visit a PHXStringArray.

**Parameters:**
- `host` - The host of the visit.

**Returns:**
- The results of the visitation.

### visit (PHXRawFileArray)

```java
T visit(PHXRawFileArray host)
```
Visit a PHXRawFileArray.

**Parameters:**
- `host` - The host of the visit.

**Returns:**
- The results of the visitation.