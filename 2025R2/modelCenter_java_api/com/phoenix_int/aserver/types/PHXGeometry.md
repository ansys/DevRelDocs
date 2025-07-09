# Class: PHXGeometry

**Package:** com.phoenix_int.aserver.types

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXSimpleType
    ↳ com.phoenix_int.aserver.types.PHXGeometry
```

**Implemented Interfaces**

- [`IPHXType`](IPHXType.md), [`IPHXType2`](IPHXType2.md), [`IPHXUnits`](IPHXUnits.md)

--- 
**Declaration**

```
public class PHXGeometry
extends PHXSimpleType
```

The type for geometry. This class has the following properties:

- **data**: String - a String representation of the data
- **format**: String - the type of data
- **description**: String

If the variable has an upper or lower bound and an attempt is made to store an invalid value, then an exception will be thrown.

**See Also:**

[`PHXSimpleType`](PHXSimpleType.md) 

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.IPHXType2
`IPHXType2.IVisitor<T>`

## Constructor Summary

| Constructor and Description |
|---------------------|
| `PHXGeometry()` |
| `PHXGeometry(PHXGeometry other)`<br>Clone another PHXGeometry's value and metadata. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`<br>Accept a Visitor. |
| `PHXGeometry` | `createCopy()`<br>Create a copy of this instance, including the value and metadata. |
| `boolean` | `equalsNatural(PHXSimpleType toCompare)`<br>Compare this PHXSimpleType to another PHXSimpleType. |
| `void` | `fromObject(java.lang.Object toRead)`<br>Load the value of this object from the specified object. |
| `void` | `fromString(java.lang.String value)`<br>converts a String representation to the internal value |
| `void` | `fromString2(PHXStringBuffervalue)`<br>converts a PHXStringBuffer representation to the internal value |
| `java.lang.String` | `getData()`<br>retrieves the current value for the geometry data |
| `java.lang.String` | `getDescription()`<br>retrieves the description of the variable |
| `java.lang.String` | `getFormat()`<br>retrieves the format for the geometry data |
| `void` | `setData(java.lang.String d)`<br>sets the value for the variable |
| `void` | `setDescription(java.lang.String d)`<br>sets the description for the variable. |
| `void` | `setFormat(java.lang.String d)`<br>sets the format for the variable. |
| `java.lang.String` | `toString()`<br>converts the variable to a string |
| `PHXStringBuffer` | `toString2()`<br>converts the variable to a PHXStringBuffer |

### Methods inherited from class com.phoenix_int.aserver.types.[PHXSimpleType](PHXSimpleType.md)
`_copyMetadataFromOther`, `addPropertyChangeListener`, `getEnumTokens`, `getHasChanged`, `getUnits`,`removePropertyChangeListener`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`


## Constructor Detail

### PHXGeometry

```
public PHXGeometry()
```

### PHXGeometry

```
public PHXGeometry(PHXGeometry other)
```
Clone another PHXGeometry's value and metadata.

**Parameters:**
- `other` - the other PHXGeometry to clone.


## Method Detail

### getData

```
public java.lang.String getData()
```
retrieves the current value for the geometry data

**Returns:**
- the geometry data

### setData

```
public void setData(java.lang.String d)
```
sets the value for the variable

**Parameters:**
- `d` - the value

### getFormat

```
public java.lang.String getFormat()
```
retrieves the format for the geometry data

**Returns:**
- the format of the geometry data

### setFormat

```
public void setFormat(java.lang.String d)
               throws PHXInvalidTypeException
```
sets the format for the variable. The format is a String description of the representation of the data - specifying a new format only stores a new value for the format

**Parameters:**
- `d` - the value

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md)

### getDescription

```
public java.lang.String getDescription()
```
retrieves the description of the variable

**Overrides:**
- `getDescription` in class [`PHXSimpleType`](PHXSimpleType.md)

**Returns:**
- a description geometry data

### setDescription

```
public void setDescription(java.lang.String d)
```
sets the description for the variable. This should be a short, one-line description.

**Overrides:**
- `setDescription` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `d` - the description

### toString2

```
public PHXStringBuffer toString2()
```
converts the variable to a PHXStringBuffer

**Returns:**
- a PHXStringBuffer representation of the variable

### toString

```
public java.lang.String toString()
```
converts the variable to a string

**Specified by:**
- 
: `toString` in interface [`IPHXType`](IPHXType.md)

**Overrides:**
- `toString` in class `java.lang.Object`

**Returns:**
- a String representation of the variable

### fromString2

```
public void fromString2(PHXStringBuffer value)
```
converts a PHXStringBuffer representation to the internal value

**Parameters:**
- `value` - the value to convert

### fromString

```
public void fromString(java.lang.String value)
```
converts a String representation to the internal value

**Parameters:**
- `value` - the value to convert

### equalsNatural

```
public boolean equalsNatural(PHXSimpleType toCompare)
                      throws PHXTypeMismatchException
```
Compare this PHXSimpleType to another PHXSimpleType. This type of comparison is different than `Comparable` in that it does a natural comparison between numbers. It is not designed, nor suited, for use in things such as sets, and may behave oddly if put in those circumstances.

**Specified by:**
- `equalsNatural` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toCompare` -

**Returns:**
- a negative number if this object is less than `toCompare`, a positive number if this object is greater than `toCompare`, and zero if these two objects are equal.

**Throws:**
- `PHXTypeMismatchException` - if the given PHXSimpleType cannot be compared with this object.

### fromObject

```
public void fromObject(java.lang.Object toRead)
                throws PHXInvalidTypeException
```
Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md)

NOTE: while it might be logical to think you can create a `PHX(Type)Array` from, say, an array of `java.lang.(Type)`, that is not currently supported. You MUST use the PHX string array formatting style.

**Specified by:**
- `fromObject` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toRead` - to object from which to load this objects value.

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md)- if the specified object is of an invalid type or there is an error in conversion.

### Accept

```
public <T> T Accept(IPHXType2.IVisitor<T> visitor)
```
Accept a Visitor.

**Type Parameters:**
- `T` - Type of the result of the visit.

**Parameters:**
- `visitor` - The visitor to accept.

**Returns:**
- The results of the visit.

### createCopy

```
public PHXGeometry createCopy()
```
Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class [`PHXSimpleType`](PHXSimpleType.md)

**Returns:**
- a newly constructed copy of this instance.
