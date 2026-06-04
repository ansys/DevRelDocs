# Class: PHXIcon

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.PHXIcon
```
---
**Declaration**

```java
public class PHXIcon
extends java.lang.Object
```

This class provides utility functions for loading and creating an icon file.

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXIcon()`<br>Creates an icon with values set to "unknown" |
| `PHXIcon(byte[] iconData, java.lang.String iconType)` |
| `PHXIcon(java.lang.String iconFileName)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `byte[]` | `getData()`<br>Retrieves the data for the image |
| `java.lang.String` | `getIconFileName()`<br>Gets the file name of the icon. |
| `java.net.URI` | `getIconURI()`<br>Gets the URI of the icon. |
| `java.lang.String` | `getType()`<br>Retrieves the type for the image |
| `java.awt.Image` | `toImage()`<br>Converts the icon to an Image |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXIcon

```java
public PHXIcon()
```

Creates an icon with values set to "unknown".

### PHXIcon

```java
public PHXIcon(java.lang.String iconFileName)
        throws java.io.IOException
```

**Parameters:**
- `iconFileName` - the file containing the icon

**Throws:**
- `java.io.IOException` - thrown if there is a problem opening or reading the icon file

### PHXIcon

```java
public PHXIcon(byte[] iconData, 
               java.lang.String iconType)
```

**Parameters:**
- `iconData` - the data making up the file
- `iconType` - the data type (gif, jpg, etc)

## Method Detail

### getData

```java
public byte[] getData()
```

Retrieves the data for the image.

**Returns:**
- the data for the image

### getType

```java
public java.lang.String getType()
```

Retrieves the type for the image.

**Returns:**
- the type for the image

### toImage

```java
public java.awt.Image toImage()
```

Converts the icon to an Image.

**Returns:**
- an image based solely on the data.

### getIconFileName

```java
public java.lang.String getIconFileName()
```

Gets the file name of the icon. This will return an empty String if the file name is not available.

**Returns:**
- the file name of the icon, or null if not specified

### getIconURI

```java
public java.net.URI getIconURI()
```

Gets the URI of the icon. If the URI is not available, this will return null.

**Returns:**
- the URI of the icon, or null if not available