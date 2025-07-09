# Class: PHXAppearance

**Package:** `com.phoenix_int.aserver.types`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXAppearance
```

--- 

**Declaration**

```
public class PHXAppearance
extends java.lang.Object
```

This is a utility class for holding appearance properties. The class is used by the [PHXGeomInfo](PHXGeomInfo.md) class.

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXAppearance(boolean hasColor)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `double` | `getBlue()` |
| `double` | `getGreen()` |
| `boolean` | `getHasColor()` |
| `double` | `getRed()` |
| `void` | `setBlue(double v)` |
| `void` | `setColor(double r, double g, double b)` |
| `void` | `setGreen(double v)` |
| `void` | `setRed(double v)` |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXAppearance

```
public PHXAppearance(boolean hasColor)
```

**Parameters:**
- `hasColor` - whether the appearance has color

## Method Detail

### getRed

```
public double getRed()
```

### getGreen

```
public double getGreen()
```

### getBlue

```
public double getBlue()
```

### getHasColor

```
public boolean getHasColor()
```

### setRed

```
public void setRed(double v)
```

**Parameters:**
- `v` - the red value

### setGreen

```
public void setGreen(double v)
```

**Parameters:**
- `v` - the green value

### setBlue

```
public void setBlue(double v)
```

**Parameters:**
- `v` - the blue value

### setColor

```
public void setColor(double r, 
                     double g, 
                     double b)
```

**Parameters:**
- `r` - the red value
- `g` - the green value
- `b` - the blue value