# Class: PHXFile

**Package:** `com.phoenix_int.aserver.types`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ [PHXSimpleType](PHXSimpleType.md)
    ↳ PHXFile
```

**Implemented Interfaces**

- [IPHXType](IPHXType.md), [IPHXType2](IPHXType2.md), [IPHXUnits](IPHXUnits.md)

---

**Declaration**

```java
@Deprecated
public class PHXFile
extends PHXSimpleType
```

**Deprecated.**

Internal data type used for certain types of files. End users should use [PHXRawFile](PHXRawFile.md) to implement file variables in their custom components.

- **name**: String
- **contents**: String

## Nested Class Summary

### Nested classes/interfaces inherited from interface [IPHXType2](IPHXType2.md)
`IPHXType2.IVisitor<T>`

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXFile()`<br>Deprecated. |
| `PHXFile(PHXFile other)`<br>Deprecated. Clone another PHXFile's value and metadata. |
| `PHXFile(java.lang.String fileName)`<br>Deprecated. |
| `PHXFile(java.lang.String baseName, java.lang.String name)`<br>Deprecated. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `<T> T` | `Accept([IPHXType2](IPHXType2.md).IVisitor<T> visitor)`<br>Deprecated. Accept a Visitor. |
| `PHXFile` | `createCopy()`<br>Deprecated. Create a copy of this instance, including the value and metadata. |
| `boolean` | `equalsNatural([PHXSimpleType](PHXSimpleType.md) toCompare)`<br>Deprecated. Compare this [PHXSimpleType](PHXSimpleType.md) to another [PHXSimpleType](PHXSimpleType.md). |
| `void` | `fromObject(java.lang.Object toRead)`<br>Deprecated. Load the value of this object from the specified object. |
| `void` | `fromString(java.lang.String value)`<br>Deprecated. Converts a String representation to the internal value. |
| `void` | `fromString2(PHXStringBuffer value)`<br>Deprecated. Converts a PHXStringBuffer representation to the internal value. |
| `java.lang.String` | `getContents()`<br>Deprecated. Retrieves the contents of the file. |
| `java.lang.String` | `getName()`<br>Deprecated. Retrieves the name of the file. |
| `java.lang.String` | `getNameCoded()`<br>Deprecated. Retrieves the name of the file in coded form (without $variables replaced). |
| `boolean` | `hasChanged()`<br>Deprecated. Checks to see if the file has changed since the last time getContents() was called. |
| `void` | `markAsRead()`<br>Deprecated. Call this function after you manually get the contents of the file. |
| `void` | `setBaseName(java.lang.String v)`<br>Deprecated. Sets the base name of the file. |
| `void` | `setName(java.lang.String v)`<br>Deprecated. Sets the name of the file. |
| `void` | `setStringReplacer(PHXStringReplacer r)`<br>Deprecated. Specifies a PHXStringReplacer object for use in forming the full file name. |
| `java.lang.String` | `toString()`<br>Deprecated. Converts the variable to a string. |
| `PHXStringBuffer` | `toString2()`<br>Deprecated. Converts the variable to a string. |

### Methods inherited from class [PHXSimpleType](PHXSimpleType.md)
`_copyMetadataFromOther`, `addPropertyChangeListener`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`, `removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXFile

```java
public PHXFile()
```
Deprecated.

### PHXFile

```java
public PHXFile(java.lang.String fileName)
```
Deprecated.

### PHXFile

```java
public PHXFile(java.lang.String baseName,
               java.lang.String name)
```
Deprecated.

### PHXFile

```java
public PHXFile(PHXFile other)
```

**Parameters:**
- `other` - the other PHXFile to clone.

Deprecated. Clone another PHXFile's value and metadata.

## Method Detail

### getName

```java
public java.lang.String getName()
```

Deprecated. Retrieves the name of the file.

**Returns:**
- the name of the file

### getNameCoded

```java
public java.lang.String getNameCoded()
```

Deprecated. Retrieves the name of the file in coded form (without `$variables` replaced).

**Returns:**
- the name of the file in coded form

### setName

```java
public void setName(java.lang.String v)
```

**Parameters:**
- `v` - the name

Deprecated. Sets the name of the file.

### setBaseName

```java
public void setBaseName(java.lang.String v)
```

**Parameters:**
- `v` - the name

Deprecated. Sets the base name of the file.

### setStringReplacer

```java
public void setStringReplacer(PHXStringReplacer r)
```

**Parameters:**
- `r` - the string replacer object

Deprecated. Specifies a `PHXStringReplacer` object for use in forming the full file name.

### getContents

```java
public java.lang.String getContents()
                             throws java.io.IOException
```

Deprecated. Retrieves the contents of the file.

**Returns:**
- the contents of the file

**Throws:**
- `java.io.IOException`

### markAsRead

```java
public void markAsRead()
```

Deprecated. Call this function after you manually get the contents of the file. The function records its name and timestamp for use with the `hasChanged()` function.

### hasChanged

```java
public boolean hasChanged()
```

Deprecated. Checks to see if the file has changed since the last time `getContents()` was called.

**Returns:**
- `true` if the timestamp of the file is new, or if the file name has changed

### toString2

```java
public PHXStringBuffer toString2()
```

Deprecated. Converts the variable to a string.

**Returns:**
- a PHXStringBuffer representation of the variable

### toString

```java
public java.lang.String toString()
```

Deprecated. Converts the variable to a string.

**Specified by:**
- `toString` in interface [IPHXType](IPHXType.md)

**Overrides:**
- `toString` in class java.lang.Object

**Returns:**
- a String representation of the variable

### fromString2

```java
public void fromString2(PHXStringBuffer value)
```

**Parameters:**
- `value` - the value to convert

Deprecated. Converts a PHXStringBuffer representation to the internal value.

### fromString

```java
public void fromString(java.lang.String value)
```

**Parameters:**
- `value` - the value to convert

Deprecated. Converts a String representation to the internal value.

### equalsNatural

```java
public boolean equalsNatural(PHXSimpleType toCompare)
                      throws PHXTypeMismatchException
```

Deprecated. Compare this [PHXSimpleType](PHXSimpleType.md) to another [PHXSimpleType](PHXSimpleType.md). This type of comparison is different than `Comparable` in that it does a natural comparison between numbers. It is not designed, nor suited, for use in things such as sets, and may behave oddly if put in those circumstances.

**Specified by:**
- `equalsNatural` in class [PHXSimpleType](PHXSimpleType.md)

**Parameters:**
- `toCompare` -

**Returns:**
- a negative number if this object is less than toCompare, a positive number if this object is greater than to compare, and zero if these two objects are equal.

**Throws:**
- [PHXTypeMismatchException](PHXTypeMismatchException.md) - if the given [PHXSimpleType](PHXSimpleType.md) cannot be compared with this object.

### fromObject

```java
public void fromObject(java.lang.Object toRead)
                throws PHXInvalidTypeException
```

Deprecated. Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [PHXInvalidTypeException](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [PHXInvalidTypeException](PHXInvalidTypeException.md).

NOTE: while it might be logical to think you can create a `PHX(Type)Array` from, say, an array of `java.lang.(Type)`, that is not currently supported. You MUST use the PHX string array formatting style.

**Specified by:**
- `fromObject` in class [PHXSimpleType](PHXSimpleType.md)

**Parameters:**
- `toRead` - to object from which to load this objects value.

**Throws:**
- [PHXInvalidTypeException](PHXInvalidTypeException.md) - if the specified object is of an invalid type or there is an error in conversion.

### Accept

```java
public <T> T Accept(IPHXType2.IVisitor<T> visitor)
```

Deprecated. Accept a Visitor.

**Type Parameters:**
- `T` - Type of the result of the visit.

**Parameters:**
- `visitor` - The visitor to accept.

**Returns:**
- The results of the visit.

### createCopy

```java
public PHXFile createCopy()
```

Deprecated. Description copied from class: [PHXSimpleType](PHXSimpleType.md). Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class [PHXSimpleType](PHXSimpleType.md)

**Returns:**
- a newly constructed copy of this instance.