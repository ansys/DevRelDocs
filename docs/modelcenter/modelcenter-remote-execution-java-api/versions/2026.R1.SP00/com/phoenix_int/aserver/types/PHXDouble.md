# Class: PHXDouble

**Package:** `com.phoenix_int.aserver.types`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXSimpleType
    ↳ com.phoenix_int.aserver.types.PHXDouble
```

**Implemented Interfaces**

- [IPHXFormat](IPHXFormat.md), [IPHXType](IPHXType.md), [IPHXType2](IPHXType2.md), [IPHXUnits](IPHXUnits.md)

--- 

**Declaration**

```java
public class PHXDouble
extends PHXSimpleType
implements IPHXFormat
```

The type for doubles. This class adds the following features to the [PHXSimpleType](PHXSimpleType.md):

- **value**: double
- **valueStr**: the source string for the value, useful for error checking when the value is NaN
- **hasUpperValue**: boolean
- **upperValue**: double
- **hasLowerValue**: boolean
- **lowerValue**: double
- **enumValues**: double[]
- **enumValues**: string[]

If the variable has an upper or lower bound and an attempt is made to store an invalid value, then an exception will be thrown.

## Nested Class Summary

### Nested classes/interfaces inherited from interface [IPHXType2](IPHXType2.md)
`IPHXType2.IVisitor<T>`

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXDouble()`<br>Initializes value to zero without upper or lower bounds |
| `PHXDouble(double value)`<br>Initializes value to specified value without upper or lower bounds. |
| `PHXDouble(PHXDouble other)`<br>Clone another PHXDouble's value and metadata. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `protected void` | `_copyMetadataFromOther(PHXDouble other)`<br>Clone another PHXDouble's metadata. |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`<br>Accept a Visitor. |
| `static java.lang.String` | `arrayToString(double[] sa)` |
| `PHXDouble` | `createCopy()`<br>Create a copy of this instance, including the value and metadata. |
| `boolean` | `equalsNatural(PHXSimpleType toCompare)`<br>Compare this PHXSimpleType to another PHXSimpleType. |
| `void` | `fromObject(java.lang.Object toRead)`<br>Load the value of this object from the specified object. |
| `void` | `fromString(java.lang.String value)`<br>Converts a String representation to the internal value. |
| `void` | `fromString2(PHXStringBuffer value)`<br>Converts a PHXStringBuffer representation to the internal value. |
| `void` | `fromString3(java.lang.String value, java.util.function.ToDoubleFunction<java.lang.String> converter)`<br>Converts a String representation to the internal value using specified converter. |
| `java.lang.String[]` | `getEnumAliases()`<br>An interface function for the enumeration array. |
| `java.lang.String` | `getEnumAliasesStr()`<br>An interface function for the enumeration array. |
| `double[]` | `getEnumValues()`<br>An interface function for the enumeration array. |
| `java.lang.String` | `getEnumValuesStr()`<br>Interface function to pass out the enumeration array as a comma separated string. |
| `java.lang.String` | `getFormat()`<br>Get the format string for the variable. |
| `boolean` | `getHasLowerBound()`<br>Retrieves the `hasLowerBound` flag. |
| `boolean` | `getHasUpperBound()`<br>Retrieves the `hasUpperBound` flag. |
| `double` | `getLowerBound()`<br>Retrieves the current lower bound value. |
| `double` | `getUpperBound()`<br>Retrieves the current upper bound value. |
| `double` | `getValue()`<br>Retrieves the current value of the variable. |
| `java.lang.String` | `getValueStr()`<br>Retrieves the string value of this variable as passed into the last call to `fromString()`. |
| `boolean` | `hasFormat()`<br>Whether or not the variable has a format. |
| `void` | `setEnumAliases(java.lang.String values)`<br>Takes a comma separated string of values and fills the enumeration aliases list with values. |
| `void` | `setEnumAliases(java.lang.String[] values)`<br>Sets the enumeration aliases list. |
| `void` | `setEnumValues(double[] values)`<br>Sets the enumeration list of valid values. |
| `void` | `setEnumValues(java.lang.String values)`<br>Takes a comma separated string of values and fills the enumeration List with values. |
| `void` | `setFormat(java.lang.String format)`<br>Set the format string for the variable. |
| `void` | `setHasLowerBound(boolean value)`<br>Sets the `hasLowerBound` flag. |
| `void` | `setHasUpperBound(boolean value)`<br>Sets the `hasUpperBound` flag. |
| `void` | `setIgnoreConversionErrors(boolean ignoreConversionErrors)`<br>Indicates whether the object should accept bad values in the `fromString()` method without throwing an exception. |
| `void` | `setLowerBound(double value)`<br>Sets the lower bound. |
| `void` | `setLowerBound(java.lang.String value)` |
| `void` | `setUpperBound(double value)`<br>Sets the upper bound. |
| `void` | `setUpperBound(java.lang.String value)` |
| `void` | `setValue(double v)`<br>Sets the value for the variable. |
| `java.lang.String` | `toString()`<br>Converts the variable to a string. |
| `java.lang.String` | `toString(int width)`<br>Converts the value to a string with the best possible formatting, e.g. scientific or absolute values based on the width available. |
| `PHXStringBuffer` | `toString2()`<br>Converts the variable to a PHXStringBuffer. |

### Methods inherited from class [PHXSimpleType](PHXSimpleType.md)
`_copyMetadataFromOther`, `addPropertyChangeListener`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`, `removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXDouble

```java
public PHXDouble()
```

Initializes value to zero without upper or lower bounds.

### PHXDouble

```java
public PHXDouble(double value)
```

**Parameters:**
- `value` -

Initializes value to specified value without upper or lower bounds.

### PHXDouble

```java
public PHXDouble(PHXDouble other)
```

**Parameters:**
- `other` - the other PHXDouble to clone.

Clone another PHXDouble's value and metadata.

## Method Detail

### _copyMetadataFromOther

```java
protected final void _copyMetadataFromOther(PHXDouble other)
```

**Parameters:**
- `other` - the other PHXDouble

Clone another PHXDouble's metadata.

### getValue

```java
public double getValue()
```

Retrieves the current value of the variable.

**Returns:**
- the value of the variable

### getValueStr

```java
public java.lang.String getValueStr()
```

Retrieves the string value of this variable as passed into the last call to `fromString()`. This may not be equivalent to the current value of the variable.

**Returns:**
- the string last used to set the variable

### setValue

```java
public void setValue(double v)
```

**Parameters:**
- `v` - the value

Sets the value for the variable.

### setUpperBound

```java
public void setUpperBound(double value)
```

**Parameters:**
- `value` - the upper bound

Sets the upper bound. The hasUpperBound value is set to true.

### setUpperBound

```java
public void setUpperBound(java.lang.String value)
```

### getUpperBound

```java
public double getUpperBound()
```

Retrieves the current upper bound value.

**Returns:**
- the upper bound

### setLowerBound

```java
public void setLowerBound(double value)
```

**Parameters:**
- `value` - the lower bound

Sets the lower bound. The `hasLowerBound` value is set to true.

### setLowerBound

```java
public void setLowerBound(java.lang.String value)
```

### getLowerBound

```java
public double getLowerBound()
```

Retrieves the current lower bound value.

**Returns:**
- the lower bound

### setHasUpperBound

```java
public void setHasUpperBound(boolean value)
```

**Parameters:**
- `value` - true or false

Sets the `hasUpperBound` flag.

### getHasUpperBound

```java
public boolean getHasUpperBound()
```

Retrieves the `hasUpperBound` flag.

**Returns:**
- true or false

### setHasLowerBound

```java
public void setHasLowerBound(boolean value)
```

**Parameters:**
- `value` - true or false

Sets the `hasLowerBound` flag.

### getHasLowerBound

```java
public boolean getHasLowerBound()
```

Retrieves the `hasLowerBound` flag.

**Returns:**
- true or false

### toString2

```java
public PHXStringBuffer toString2()
```

Converts the variable to a PHXStringBuffer.

**Specified by:**
- `toString2` in interface [IPHXType2](IPHXType2.md)

**Returns:**
- the PHXStringBuffer representation of the variable

### toString

```java
public java.lang.String toString()
```

Converts the variable to a string.

**Specified by:**
- `toString` in interface [IPHXType](IPHXType.md)

**Overrides:**
- `toString` in class `java.lang.Object`

**Returns:**
- a String representation of the variable

### fromString2

```java
public void fromString2(PHXStringBuffer value)
```

Converts a PHXStringBuffer representation to the internal value.

**Specified by:**
- `fromString2` in interface [IPHXType2](IPHXType2.md)

**Parameters:**
- `value` - the value to convert

### fromString3

```java
public void fromString3(java.lang.String value, 
                        java.util.function.ToDoubleFunction<java.lang.String> converter)
```

Converts a String representation to the internal value using specified converter.

**Parameters:**
- `value` - the value to convert
- `converter` - functional interface used to convert String value to a double

### fromString

```java
public void fromString(java.lang.String value)
```

Converts a String representation to the internal value.

**Specified by:**
- `fromString` in interface [IPHXType](IPHXType.md)

**Parameters:**
- `value` - the value to convert

### toString

```java
public java.lang.String toString(int width)
                          throws PHXNumberFormatException
```

Converts the value to a string with the best possible formatting, e.g. scientific or absolute values based on the width available.

**Parameters:**
- `width` - the number of characters print to

**Returns:**
- the formatted string value

**Throws:**
- [PHXNumberFormatException](PHXNumberFormatException.md)

### setIgnoreConversionErrors

```java
public void setIgnoreConversionErrors(boolean ignoreConversionErrors)
```

Indicates whether the object should accept bad values in the `fromString()` method without throwing an exception. The raw value is stored in property valueStr regardless.

**Parameters:**
- `ignoreConversionErrors` - true if errors should be ignored

### setEnumValues

```java
public void setEnumValues(java.lang.String values)
```

Takes a comma separated string of values and fills the enumeration List with values.

**Parameters:**
- `values` - A comma separated string of enumeration values

### setEnumValues

```java
public void setEnumValues(double[] values)
```

Sets the enumeration list of valid values.

**Parameters:**
- `values` - An array of double values

### getEnumValues

```java
public double[] getEnumValues()
```

An interface function for the enumeration array.

**Returns:**
- an array of the possible values of the list

### getEnumValuesStr

```java
public java.lang.String getEnumValuesStr()
```

Interface function to pass out the enumeration array as a comma separated string.

**Returns:**
- comma separated string of the possible values of the list

### setEnumAliases

```java
public void setEnumAliases(java.lang.String values)
```

Takes a comma separated string of values and fills the enumeration aliases list with values.

**Parameters:**
- `values` - A comma separated string of enumeration aliases

### setEnumAliases

```java
public void setEnumAliases(java.lang.String[] values)
```

Sets the enumeration aliases list.

**Parameters:**
- `values` - An array of strings

### getEnumAliases

```java
public java.lang.String[] getEnumAliases()
```

An interface function for the enumeration array.

**Returns:**
- an array of the possible values of the list

### getEnumAliasesStr

```java
public java.lang.String getEnumAliasesStr()
```

An interface function for the enumeration array.

**Returns:**
- a comma separated string of the possible values of the list

### setFormat

```java
public void setFormat(java.lang.String format)
```

Set the format string for the variable.

**Specified by:**
- `setFormat` in interface [IPHXFormat](IPHXFormat.md)

**Parameters:**
- `format` - format string

### getFormat

```java
public java.lang.String getFormat()
```

Get the format string for the variable.

**Specified by:**
- `getFormat` in interface [IPHXFormat](IPHXFormat.md)

**Returns:**
- format string

### hasFormat

```java
public boolean hasFormat()
```

Whether or not the variable has a format.

**Specified by:**
- `hasFormat` in interface [IPHXFormat](IPHXFormat.md)

**Returns:**
- true if variable has a format

### arrayToString

```java
public static java.lang.String arrayToString(double[] sa)
```

### equalsNatural

```java
public boolean equalsNatural(PHXSimpleType toCompare)
                      throws PHXTypeMismatchException
```

Compare this [PHXSimpleType](PHXSimpleType.md) to another [PHXSimpleType](PHXSimpleType.md). This type of comparison is different than `Comparable` in that it does a natural comparison between numbers. It is not designed, nor suited, for use in things such as sets, and may behave oddly if put in those circumstances.

NOTE: two PHXDoubles are considered naturally equal if they are the same to within 5 significant figures. The equals natural algorithm uses a relative error or epsilon comparison for equality. This should NOT be confused with a true double equality comparison and should not be used as such! It is only intended to verify that values specified in PACJ configurations are roughly equal to instantiated component values.

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

Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [PHXInvalidTypeException](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [PHXInvalidTypeException](PHXInvalidTypeException.md).

NOTE: while it might be logical to think you can create a PHX(Type)Array from, say, an array of java.lang.(Type), that is not currently supported. You MUST use the PHX string array formatting style.

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

Accept a Visitor.

**Specified by:**
- `Accept` in interface [IPHXType2](IPHXType2.md)

**Type Parameters:**
- `T` - Type of the result of the visit.

**Parameters:**
- `visitor` - The visitor to accept.

**Returns:**
- The results of the visit.

### createCopy

```java
public PHXDouble createCopy()
```

Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class [PHXSimpleType](PHXSimpleType.md)

**Returns:**
- a newly constructed copy of this instance.