# Class: PHXLong

**Package:** `com.phoenix_int.aserver.types`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXSimpleType
    ↳ com.phoenix_int.aserver.types.PHXLong
```

**Implemented Interfaces**

- [`IPHXFormat`](IPHXFormat.md), [`IPHXType`](IPHXType.md), [`IPHXType2`](IPHXType2.md), [`IPHXUnits`](IPHXUnits.md)

--- 
**Declaration**

```java
public class PHXLong
extends PHXSimpleType
implements IPHXFormat
```

The type for longs. This class adds the following features to the [`PHXSimpleType`](PHXSimpleType.md):

- **value**: long
- **valueStr**: the source string for the value, useful for error checking when the value is NaN
- **hasUpperValue**: boolean
- **upperValue**: long
- **hasLowerValue**: boolean
- **lowerValue**: long
- **enumValues**: long[]
- **enumAliases**: String[]

If the variable has an upper or lower bound and an attempt is made to store an invalid value, then an exception will be thrown.

**See Also:**

- [`PHXSimpleType`](PHXSimpleType.md)

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md)
`IPHXType2.IVisitor<T>`

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXLong()`<br>Initializes value to 0. |
| `PHXLong(long value)`<br>Initializes value to the specified value |
| `PHXLong(PHXLongother)`<br>Clone another PHXLong's value and metadata. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `protected void` | `_copyMetadataFromOther(PHXLongother)`<br>Clone another PHXLong's metadata. |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`<br>Accept a Visitor. |
| `static java.lang.String` | `arrayToString(long[] sa)` |
| `PHXLong` | `createCopy()`<br>Create a copy of this instance, including the value and metadata. |
| `boolean` | `equalsNatural(PHXSimpleTypetoCompare)`<br>Compare this PHXSimpleType to another PHXSimpleType. |
| `void` | `fromObject(java.lang.Object toRead)`<br>Load the value of this object from the specified object. |
| `void` | `fromString(java.lang.String value)`<br>converts a String representation to the internal value |
| `void` | `fromString2(PHXStringBuffervalue)`<br>converts a [`PHXStringBuffer`](../util/PHXStringBuffer.md) representation to the internal value |
| `java.lang.String[]` | `getEnumAliases()`<br>An interface function for the enumeration array |
| `java.lang.String` | `getEnumAliasesStr()`<br>An interface function for the enumeration array |
| `long[]` | `getEnumValues()`<br>Interface function to pass out the enumeration array |
| `java.lang.String` | `getEnumValuesStr()`<br>Interface function to pass out the enumeration array as a comma separated string |
| `java.lang.String` | `getFormat()`<br>Get the format string for the variable |
| `boolean` | `getHasFormat()`<br>Deprecated in favor of `hasFormat()` |
| `boolean` | `getHasLowerBound()`<br>retrieves the `hasLowerBound` flag |
| `boolean` | `getHasUpperBound()`<br>retrieves the `hasUpperBound` flag |
| `long` | `getLowerBound()`<br>retrieves the current lower bound value |
| `long` | `getUpperBound()`<br>retrieves the current upper bound value |
| `long` | `getValue()`<br>retrieves the current value of the variable |
| `java.lang.String` | `getValueStr()`<br>retrieves the string value of this variable as passed into the last call to `fromString()`. |
| `boolean` | `hasFormat()`<br>Whether or not the variable has a format |
| `void` | `setEnumAliases(java.lang.String values)`<br>takes a comma separated string of values and fills the enumeration aliases list with values. |
| `void` | `setEnumAliases(java.lang.String[] values)`<br>Takes an array of strings which represent aliases for the enumValues. |
| `void` | `setEnumValues(long[] values)`<br>sets the possible values a variable may be |
| `void` | `setEnumValues(java.lang.String strEnumList)`<br>sets the possible values a variable may be |
| `void` | `setFormat(java.lang.String format)`<br>Set the format string for the variable |
| `void` | `setHasLowerBound(boolean value)`<br>sets the `hasLowerBound` flag |
| `void` | `setHasUpperBound(boolean value)`<br>sets the `hasUpperBound` flag |
| `void` | `setIgnoreConversionErrors(boolean ignoreConversionErrors)`<br>indicates whether the object should accept bad values in the `fromString()` method without throwning an exception. |
| `void` | `setLowerBound(long value)`<br>sets the lower bound. |
| `void` | `setLowerBound(java.lang.String value)` |
| `void` | `setUpperBound(long value)`<br>sets the upper bound. |
| `void` | `setUpperBound(java.lang.String value)` |
| `void` | `setValue(long v)`<br>sets the value for the variable |
| `java.lang.String` | `toString()`<br>converts the variable to a string |
| `PHXStringBuffer` | `toString2()`<br>converts the variable to a [`PHXStringBuffer`](../util/PHXStringBuffer.md) |

### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleType
`_copyMetadataFromOther`,`addPropertyChangeListener`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`, `removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXLong

```java
public PHXLong()
```

Initializes value to 0.

#### PHXLong

```java
public PHXLong(long value)
```

Initializes value to the specified value

**Parameters:**
: `value` - the value to use

#### PHXLong

```java
public PHXLong(PHXLong other)
```

Clone another PHXLong's value and metadata.

**Parameters:**

- `other` - the other PHXLong to clone.

## Method Detail

### _copyMetadataFromOther

```java
protected final void _copyMetadataFromOther(PHXLong other)
```

Clone another [`PHXLong`](PHXLong.md)'s metadata.

**Parameters:**
- `other` - the other [`PHXLong`](PHXLong.md)

### getValue

```java
public long getValue()
```

Retrieves the current value of the variable

**Returns:**
- the value of the variable

### getValueStr

```java
public java.lang.String getValueStr()
```

Retrieves the string value of this variable as passed into the last call to `fromString()`. This may not be equivalent to the current value of the variable.

**Returns:**
- the string last used to set the variable

### setValue

```java
public void setValue(long v)
```

Sets the value for the variable

**Parameters:**
- `v` - the value

### setUpperBound

```java
public void setUpperBound(long value)
```

Sets the upper bound. The `hasUpperBound` value is set to true

**Parameters:**
- `value` - the upper bound

### setUpperBound

```java
public void setUpperBound(java.lang.String value)
```

### getUpperBound

```java
public long getUpperBound()
```

Retrieves the current upper bound value

**Returns:**
- the upper bound

### setLowerBound

```java
public void setLowerBound(long value)
```

Sets the lower bound. The `hasLowerBound` value is set to true

**Parameters:**
- `value` - the lower bound

### setLowerBound

```java
public void setLowerBound(java.lang.String value)
```

### getLowerBound

```java
public long getLowerBound()
```

Retrieves the current lower bound value

**Returns:**
- the lower bound

### setHasUpperBound

```java
public void setHasUpperBound(boolean value)
```

Sets the `hasUpperBound` flag

**Parameters:**
- `value` - true or false

### getHasUpperBound

```java
public boolean getHasUpperBound()
```

Retrieves the `hasUpperBound` flag

**Returns:**
- true or false

### setHasLowerBound

```java
public void setHasLowerBound(boolean value)
```

Sets the `hasLowerBound` flag

**Parameters:**
- `value` - true or false

### getHasLowerBound

```java
public boolean getHasLowerBound()
```

Retrieves the `hasLowerBound` flag

**Returns:**
- true or false

### toString2

```java
public PHXStringBuffer toString2()
```

Converts the variable to a [`PHXStringBuffer`](../util/PHXStringBuffer.md)

**Specified by:**
- `toString2` in interface [`IPHXType2`](IPHXType2.md)

**Returns:**
- a [`PHXStringBuffer`](../util/PHXStringBuffer.md) representation of the variable

### toString

```java
public java.lang.String toString()
```

Converts the variable to a string

**Specified by:**
- `toString` in interface [`IPHXType`](IPHXType.md)

**Overrides:**
- `toString` in class `java.lang.Object`

**Returns:**
- a String representation of the variable

### fromString2

```java
public void fromString2(PHXStringBuffer value)
```

Converts a [`PHXStringBuffer`](../util/PHXStringBuffer.md) representation to the internal value

**Specified by:**
- `fromString2` in interface [`IPHXType2`](IPHXType2.md)

**Parameters:**
- `value` - the value to convert

### fromString

```java
public void fromString(java.lang.String value)
```

Converts a String representation to the internal value

**Specified by:**
- `fromString` in interface [`IPHXType`](IPHXType.md)

**Parameters:**
- `value` - the value to convert

### setIgnoreConversionErrors

```java
public void setIgnoreConversionErrors(boolean ignoreConversionErrors)
```

Indicates whether the object should accept bad values in the `fromString()` method without throwning an exception. The raw values is stored in property valueStr regardless.

**Parameters:**
- `ignoreConversionErrors` - true if errors should be ignored

### setEnumValues

```java
public void setEnumValues(java.lang.String strEnumList)
```

Sets the possible values a variable may be

**Parameters:**
- `strEnumList` - the comma sepperated list to convert to values

### setEnumValues

```java
public void setEnumValues(long[] values)
```

Sets the possible values a variable may be

**Parameters:**
- `values` - Array of longs which represents valid values

### getEnumValues

```java
public long[] getEnumValues()
```

Interface function to pass out the enumeration array

**Returns:**
- an array of the possible values of the list

### getEnumValuesStr

```java
public java.lang.String getEnumValuesStr()
```

Interface function to pass out the enumeration array as a comma separated string

**Returns:**
- comma separated string of the possible values of the list

### setEnumAliases

```java
public void setEnumAliases(java.lang.String[] values)
```

Takes an array of strings which represent aliases for the enumValues.

**Parameters:**
- `values` - A String array of enumeration aliases

### setEnumAliases

```java
public void setEnumAliases(java.lang.String values)
```

Takes a comma separated string of values and fills the enumeration aliases list with values.

**Parameters:**
- `values` - A comma separated string of enumeration aliases

### getEnumAliases

```java
public java.lang.String[] getEnumAliases()
```

An interface function for the enumeration array

**Returns:**
- an array of the possible values of the list

### getEnumAliasesStr

```java
public java.lang.String getEnumAliasesStr()
```

An interface function for the enumeration array

**Returns:**
- an comma separated string of the possible values of the list

### getHasFormat

```java
@Deprecated
public boolean getHasFormat()
```

Deprecated in favor of `hasFormat()`

### hasFormat

```java
public boolean hasFormat()
```

Whether or not the variable has a format

**Specified by:**
- `hasFormat` in interface [`IPHXFormat`](IPHXFormat.md)

**Returns:**
- `true` if variable has a format

### setFormat

```java
public void setFormat(java.lang.String format)
```

Set the format string for the variable

**Specified by:**
- `setFormat` in interface [`IPHXFormat`](IPHXFormat.md)

**Parameters:**
- `format` - format string

### getFormat

```java
public java.lang.String getFormat()
```

Get the format string for the variable

**Specified by:**
- `getFormat` in interface [`IPHXFormat`](IPHXFormat.md)

**Returns:**
- format string

### arrayToString

```java
public static java.lang.String arrayToString(long[] sa)
```

### equalsNatural

```java
public boolean equalsNatural(PHXSimpleType toCompare)
                      throws PHXTypeMismatchException
```

Compare this [`PHXSimpleType`](PHXSimpleType.md) to another [`PHXSimpleType`](PHXSimpleType.md). This type of comparison is different than `Comparable` in that it does a natural comparison between numbers. It is not designed, nor suited, for use in things such as sets, and may behave oddly if put in those circumstances.

**Specified by:**
- `equalsNatural` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toCompare` -

**Returns:**

**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md) - if the given [`PHXSimpleType`](PHXSimpleType.md) cannot be compared with this object.

### fromObject

```java
public void fromObject(java.lang.Object toRead)
                throws PHXInvalidTypeException
```

Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md)

NOTE: while it might be logical to think you can create a PHX(Type)Array from, say, an array of java.lang.(Type), that is not currently supported. You MUST use the PHX string array formatting style.

**Specified by:**
- `fromObject` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toRead` - to object from which to load this objects value.

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md) - if the specified object is of an invalid type or there is an error in conversion.

### Accept

```java
public <T> T Accept(IPHXType2.IVisitor<T> visitor)
```

Accept a Visitor.

**Specified by:**
- `Accept` in interface [`IPHXType2`](IPHXType2.md)

**Type Parameters:**
- `T` - Type of the result of the visit.

**Parameters:**
- `visitor` - The visitor to accept.

**Returns:**
- The results of the visit.

### createCopy

```java
public PHXLong createCopy()
```

Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class [`PHXSimpleType`](PHXSimpleType.md)

**Returns:**
- a newly constructed copy of this instance.
