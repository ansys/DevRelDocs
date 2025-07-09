# Class PHXOrientation

**Packages:** `com.phoenix_int.aserver.types`

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXOrientation
``` 
---

**Declaration:**

```
public class PHXOrientation
extends java.lang.Object
```

This is a utility class for holding orientation information. The class is used as one of the parts of the [PHXGeomInfo](PHXGeomInfo.md) class

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXOrientation(boolean hasRotation, boolean hasTranslation)` |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `boolean` | `getHasRotation()` |
| `boolean` | `getHasTranslation()` |
| `double` | `getRotX()` |
| `double` | `getRotY()` |
| `double` | `getRotZ()` |
| `double` | `getTransX()` |
| `double` | `getTransY()` |
| `double` | `getTransZ()` |
| `void` | `setRotX(double v)` |
| `void` | `setRotY(double v)` |
| `void` | `setRotZ(double v)` |
| `void` | `setTransX(double v)` |
| `void` | `setTransY(double v)` |
| `void` | `setTransZ(double v)` |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXOrientation

```
public PHXOrientation(boolean hasRotation,
                      boolean hasTranslation)
```

**Parameters:**
- `hasRotation`- true if the object uses the rotation variables
- `hasTranslation`- true if the object uses the translation variables

## Method Detail

### getRotX

```
public double getRotX()
```

### getRotY

```
public double getRotY()
```

### getRotZ

```
public double getRotZ()
```

### getHasRotation

```
public boolean getHasRotation()
```

### getTransX

```
public double getTransX()
```

### getTransY

```
public double getTransY()
```

### getTransZ

```
public double getTransZ()
```

### getHasTranslation

```
public boolean getHasTranslation()
```

### setRotX

```
public void setRotX(double v)
```

### setRotY

```
public void setRotY(double v)
```

### setRotZ

```
public void setRotZ(double v)
```

### setTransX

```
public void setTransX(double v)
```

### setTransY

```
public void setTransY(double v)
```

### setTransZ

```
public void setTransZ(double v)
```
