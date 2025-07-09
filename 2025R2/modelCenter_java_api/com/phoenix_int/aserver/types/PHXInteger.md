# Class: PHXInteger

**Package:** `com.phoenix_int.aserver.types`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXSimpleType
    ↳ com.phoenix_int.aserver.types.PHXInteger
```

**Implemented Interfaces**

- [`IPHXFormat`](IPHXFormat.md), [`IPHXType`](IPHXType.md), [`IPHXType2`](IPHXType2.md), [`IPHXUnits`](IPHXUnits.md)

--- 
**Declaration**

```
@Deprecated
public class PHXInteger
extends PHXSimpleType
implements IPHXFormat
```

**THIS CLASS IS DEPRECATED IN FAVOR OF [PHXLong](PHXLong.md)**

The type for integers. This class adds the following features to the [`PHXSimpleType`](PHXSimpleType.md):

- **value**: int
- **valueStr**: the source string for the value, useful for error checking when the value is NaN
- **hasUpperValue**: boolean
- **upperValue**: int
- **hasLowerValue**: boolean
- **lowerValue**: int
- **enumValues**: int[]
- **enumAliases**: String[]

If the variable has an upper or lower bound and an attempt is made to store an invalid value, then an exception will be thrown.

**See Also:**

[`PHXSimpleType`](PHXSimpleType.md)

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md)
[`IPHXType2.IVisitor<T>`](IPHXType2.IVisitor.md)

## Constructor Summary

| Constructor and Description |
|---------------------|
| `PHXInteger()`<br>**Deprecated.**|
| `PHXInteger(PHXInteger other)`<br>**Deprecated.**<br>Clone another PHXInteger's value and metadata. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `protected void` | `_copyMetadataFromOther(PHXInteger other)`<br>**Deprecated.**<br>Clone another PHXInteger's metadata. |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`<br>**Deprecated.**<br>Accept a Visitor. |
| `static java.lang.String` | `arrayToString(int[] sa)`<br>**Deprecated.**<br>|
| `PHXInteger` | `createCopy()`<br>**Deprecated.**<br>Create a copy of this instance, including the value and metadata. |
| `boolean` | `equalsNatural(PHXSimpleType toCompare)`<br>**Deprecated.**<br>Compare this PHXSimpleType to another PHXSimpleType. |
| `void` | `fromObject(java.lang.Object toRead)`<br>**Deprecated.**<br>Load the value of this object from the specified object. |
| `void` | `fromString(java.lang.String value)`<br>**Deprecated.**<br>converts a String representation to the internal value |
| `void` | `fromString2(`[`PHXStringBuffer`](../util/PHXStringBuffer.md)` value)`<br>**Deprecated.**<br>converts a String representation to the internal value |
| `java.lang.String[]` | `getEnumAliases()`<br>**Deprecated.**<br>An interface function for the enumeration array |
| `java.lang.String` | `getEnumAliasesStr()`<br>**Deprecated.**<br>An interface function for the enumeration array |
| `int[]` | `getEnumValues()`<br>**Deprecated.**<br>Interface function to pass out the enumeration array |
| `java.lang.String` | `getEnumValuesStr()`<br>**Deprecated.**<br>Interface function to pass out the enumeration array as a comma separated string |
| `java.lang.String` | `getFormat()`<br>**Deprecated.**<br>Get the format string for the variable |
| `boolean` | `getHasFormat()`<br>**Deprecated.**<br>in favor of `hasFormat()` |
| `boolean` | `getHasLowerBound()`<br>**Deprecated.**<br>retrieves the `hasLowerBound` flag |
| `boolean` | `getHasUpperBound()`<br>**Deprecated.**<br>retrieves the `hasUpperBound` flag |
| `int` | `getLowerBound()`<br>**Deprecated.**<br>retrieves the current lower bound value |
| `int` | `getUpperBound()`<br>**Deprecated.**<br>retrieves the current upper bound value |
| `int` | `getValue()`<br>**Deprecated.**<br>retrieves the current value of the variable |
| `java.lang.String` | `getValueStr()`<br>**Deprecated.**<br>retrieves the string value of this variable as passed into the last call to `fromString()`. |
| `boolean` | `hasFormat()`<br>**Deprecated.**<br>Whether or not the variable has a format |
| `void` | `setEnumAliases(java.lang.String values)`<br>**Deprecated.**<br>takes a comma seperated string of values and fills the enumeration aliases list with values. |
| `void` | `setEnumAliases(java.lang.String[] values)`<br>**Deprecated.**<br>Sets the enumeration aliases list |
| `void` | `setEnumValues(int[] values)`<br>**Deprecated.**<br>Sets the enumeration list of valid values. |
| `void` | `setEnumValues(java.lang.String strEnumList)`<br>**Deprecated.**<br>sets the possible values a variable may be |
| `void` | `setFormat(java.lang.String format)`<br>**Deprecated.**<br>Set the format string for the variable |
| `void` | `setHasLowerBound(boolean value)`<br>**Deprecated.**<br>sets the `hasLowerBound` flag |
| `void` | `setHasUpperBound(boolean value)`<br>**Deprecated.**<br>sets the `hasUpperBound` flag |
| `void` | `setIgnoreConversionErrors(boolean ignoreConversionErrors)`<br>**Deprecated.**<br>indicates whether the object should accept bad values in the `fromString()` method without throwning an exception. |
| `void` | `setLowerBound(int value)`<br>**Deprecated.**<br>sets the lower bound. |
| `void` | `setLowerBound(java.lang.String value)`<br>**Deprecated.**<br>|
| `void` | `setUpperBound(int value)`<br>**Deprecated.**<br>sets the upper bound. |
| `void` | `setUpperBound(java.lang.String value)`<br>**Deprecated.**<br>|
| `void` | `setValue(int v)`<br>**Deprecated.**<br>sets the value for the variable |
| `java.lang.String` | `toString()`<br>**Deprecated.**<br>converts the variable to a string |
| [`PHXStringBuffer`](../util/PHXStringBuffer.md) | `toString2()`<br>**Deprecated.**<br>converts the variable to a PHXStringBuffer |

### Methods inherited from class com.phoenix_int.aserver.types.[PHXSimpleType](PHXSimpleType.md)

`_copyMetadataFromOther`, `addPropertyChangeListener`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`, `removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXInteger

```
public PHXInteger()
```
**Deprecated.**

### PHXInteger

```
public PHXInteger(PHXInteger other)
```
**Deprecated.** Clone another PHXInteger's value and metadata.

**Parameters:**
- `other` - the other PHXInteger to clone.

## Method Detail

### _copyMetadataFromOther

```
protected final void _copyMetadataFromOther(PHXInteger other)
```
**Deprecated.** Clone another PHXInteger's metadata.

**Parameters:**
- `other` - the other PHXInteger

### getValue

```
public int getValue()
```
**Deprecated.** retrieves the current value of the variable

**Returns:**
- the value of the variable

### getValueStr

```
public java.lang.String getValueStr()
```
**Deprecated.** retrieves the string value of this variable as passed into the last call to `fromString()`. This may not be equivalent to the current value of the variable.

**Returns:**
- the string last used to set the variable

### setValue

```
public void setValue(int v)
```
**Deprecated.** sets the value for the variable

**Parameters:**
- `v` - the value

### setUpperBound

```
public void setUpperBound(int value)
```
**Deprecated.** sets the upper bound. The `hasUpperBound` value is set to `true`

**Parameters:**
- `value` - the upper bound

### setUpperBound

```
public void setUpperBound(java.lang.String value)
```
**Deprecated.**

### getUpperBound

```
public int getUpperBound()
```
**Deprecated.** retrieves the current upper bound value

**Returns:**
- the upper bound

### setLowerBound

```
public void setLowerBound(int value)
```
**Deprecated.** sets the lower bound. The `hasLowerBound` value is set to true

**Parameters:**
- `value` - the lower bound

### setLowerBound

```
public void setLowerBound(java.lang.String value)
```
**Deprecated.**

### getLowerBound

```
public int getLowerBound()
```
**Deprecated.** retrieves the current lower bound value

**Returns:**
- the lower bound

### setHasUpperBound

```
public void setHasUpperBound(boolean value)
```
**Deprecated.** sets the `hasUpperBound` flag

**Parameters:**
- `value` - true or false

### getHasUpperBound

```
public boolean getHasUpperBound()
```
**Deprecated.** retrieves the `hasUpperBound` flag

**Returns:**
- true or false

### setHasLowerBound

```
public void setHasLowerBound(boolean value)
```
**Deprecated.** sets the `hasLowerBound` flag

**Parameters:**
- `value` - true or false

### getHasLowerBound

```
public boolean getHasLowerBound()
```
**Deprecated.** retrieves the `hasLowerBound` flag

**Returns:**
- true or false

### toString2

```
public PHXStringBuffer toString2()
```
**Deprecated.** converts the variable to a [PHXStringBuffer](../util/PHXStringBuffer.md)

**Specified by:**
- `toString2` in interface [`IPHXType2`](IPHXType2.md)

**Returns:**
- a PHXStringBuffer representation of the variable

### toString

```
public java.lang.String toString()
```
**Deprecated.** converts the variable to a string

**Specified by:**
- `toString` in interface [`IPHXType`](IPHXType.md)

**Overrides:**
- `toString` in class `java.lang.Object`

**Returns:**
- a String representation of the variable

### fromString2

```
public void fromString2(PHXStringBuffer value)
```
**Deprecated.** converts a String representation to the internal value

**Specified by:**
- `fromString2` in interface [`IPHXType2`](IPHXType2.md)

**Parameters:**
- `value` - the value to convert

### fromString

```
public void fromString(java.lang.String value)
```
**Deprecated.** converts a String representation to the internal value

**Specified by:**
- `fromString` in interface [`IPHXType`](IPHXType.md)

**Parameters:**
- `value` - the value to convert

### setIgnoreConversionErrors

```
public void setIgnoreConversionErrors(boolean ignoreConversionErrors)
```
**Deprecated.** indicates whether the object should accept bad values in the `fromString()` method without throwning an exception. The raw values is stored in property `valueStr` regardless.

**Parameters:**
- `ignoreConversionErrors` - `true` if errors should be ignored

### setEnumValues

```
public void setEnumValues(java.lang.String strEnumList)
```
**Deprecated.** sets the possible values a variable may be

**Parameters:**
- `strEnumList` - the comma sepperated list to convert to values

### setEnumValues

```
public void setEnumValues(int[] values)
```
**Deprecated.** Sets the enumeration list of valid values.

**Parameters:**
- `values` - An array of double values

### getEnumValues

```
public int[] getEnumValues()
```
**Deprecated.** Interface function to pass out the enumeration array

**Returns:**
- an array of the possible values of the list

### getEnumValuesStr

```
public java.lang.String getEnumValuesStr()
```
**Deprecated.** Interface function to pass out the enumeration array as a comma separated string

**Returns:**
- comma separated string of the possible values of the list

### setEnumAliases

```
public void setEnumAliases(java.lang.String values)
```
**Deprecated.** takes a comma seperated string of values and fills the enumeration aliases list with values.

**Parameters:**
- `values` - A comma seperated string of enumeration aliases

### setEnumAliases

```
public void setEnumAliases(java.lang.String[] values)
```
**Deprecated.** Sets the enumeration aliases list

**Parameters:**
- `values` - An array of strings

### getEnumAliases

```
public java.lang.String[] getEnumAliases()
```
**Deprecated.** An interface function for the enumeration array

**Returns:**
- an array of the possible values of the list

### getEnumAliasesStr

```
public java.lang.String getEnumAliasesStr()
```
**Deprecated.** An interface function for the enumeration array

**Returns:**
- an comma separated string of the possible values of the list

### getHasFormat

```
@Deprecated
public boolean getHasFormat()
```
**Deprecated.** in favor of `hasFormat()`

### hasFormat

```
public boolean hasFormat()
```
**Deprecated.** Whether or not the variable has a format

**Specified by:**
- `hasFormat` in interface [`IPHXFormat`](IPHXFormat.md)

**Returns:**
- true if variable has a format

### setFormat

```
public void setFormat(java.lang.String format)
```
**Deprecated.** Set the format string for the variable

**Specified by:**
- `setFormat` in interface [`IPHXFormat`](IPHXFormat.md)

**Parameters:**
- `format` - format string

### getFormat

```
public java.lang.String getFormat()
```
**Deprecated.** Get the format string for the variable

**Specified by:**
- `getFormat` in interface [`IPHXFormat`](IPHXFormat.md)

**Returns:**
- format string

### arrayToString

```
public static java.lang.String arrayToString(int[] sa)
```
**Deprecated.**

### equalsNatural

```
public boolean equalsNatural(PHXSimpleType toCompare)
                      throws PHXTypeMismatchException
```
**Deprecated.** Compare this PHXSimpleType to another PHXSimpleType. This type of comparison is different than `Comparable` in that it does a natural comparison between numbers. It is not designed, nor suited, for use in things such as sets, and may behave oddly if put in those circumstances.

**Specified by:**
- `equalsNatural` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toCompare` -

**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md) - if the given PHXSimpleType cannot be compared with this object.

### fromObject

```
public void fromObject(java.lang.Object toRead)
                throws PHXInvalidTypeException
```
**Deprecated.** Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md).

NOTE: while it might be logical to think you can create a `PHX(Type)Array` from, say, an array of `java.lang.(Type)`, that is not currently supported. You MUST use the PHX string array formatting style.

**Specified by:**
- `fromObject` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toRead` - to object from which to load this objects value.

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md) - if the specified object is of an invalid type or there is an error in conversion.

### Accept

```
public <T> T Accept(IPHXType2.IVisitor<T> visitor)
```
**Deprecated.** Accept a Visitor.

**Specified by:**
- `Accept` in interface [`IPHXType2`](IPHXType2.md)

**Type Parameters:**
- `T` - Type of the result of the visit.

**Parameters:**
- `visitor` - The visitor to accept.

**Returns:**
- The results of the visit.

### createCopy

```
public PHXInteger createCopy()
```
**Deprecated.** Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class [`PHXSimpleType`](PHXSimpleType.md)

**Returns:**
- a newly constructed copy of this instance.