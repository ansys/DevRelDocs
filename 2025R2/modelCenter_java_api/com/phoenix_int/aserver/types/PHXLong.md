======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Class PHXLong
- java.lang.Object
- - [com.phoenix_int.aserver.types.PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html)
- - com.phoenix_int.aserver.types.PHXLong
- **All Implemented Interfaces:**
: [IPHXFormat](../../../../com/phoenix_int/aserver/types/IPHXFormat.html),[IPHXType](../../../../com/phoenix_int/aserver/types/IPHXType.html),[IPHXType2](../../../../com/phoenix_int/aserver/types/IPHXType2.html),[IPHXUnits](../../../../com/phoenix_int/aserver/types/IPHXUnits.html)

---

```java
public class PHXLong
extends PHXSimpleType
implements IPHXFormat
```
The Phoenix type for longs. This class adds the following
 features to the PHXSimpleType:
- **value**: long
- **valueStr**: the source string for the value,
     useful for error checking when the value is NaN
- **hasUpperValue**: boolean
- **upperValue**: long
- **hasLowerValue**: boolean
- **lowerValue**: long
- **enumValues**: long[]
- **enumAliases**: String[]
If the variable has an upper or lower bound and an attempt
 is made to store an invalid value, then an exception will
 be thrown.
**Author:**
: Woyak
**See Also:**
: [PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html)- ======== NESTED CLASS SUMMARY ========
- ### Nested Class Summary

- ### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.IPHXType2
`IPHXType2.IVisitor<T>`
======== CONSTRUCTOR SUMMARY ========
- ### Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXLong()`Initializes value to 0. |
| `PHXLong(long value)`Initializes value to the specified value |
| `PHXLong(PHXLongother)`Clone another PHXLong's value and metadata. |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `protected void` | `_copyMetadataFromOther(PHXLongother)`Clone another PHXLong's metadata. |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`Accept a Visitor. |
| `static java.lang.String` | `arrayToString(long[] sa)` |
| `PHXLong` | `createCopy()`Create a copy of this instance, including the value and metadata. |
| `boolean` | `equalsNatural(PHXSimpleTypetoCompare)`Compare this PHXSimpleType to another PHXSimpleType. |
| `void` | `fromObject(java.lang.Object toRead)`Load the value of this object from the specified object. |
| `void` | `fromString(java.lang.String value)`converts a String representation to the internal value |
| `void` | `fromString2(PHXStringBuffervalue)`converts a PHXStringBuffer representation to the internal value |
| `java.lang.String[]` | `getEnumAliases()`An interface function for the enumeration array |
| `java.lang.String` | `getEnumAliasesStr()`An interface function for the enumeration array |
| `long[]` | `getEnumValues()`Interface function to pass out the enumeration array |
| `java.lang.String` | `getEnumValuesStr()`Interface function to pass out the enumeration array as a
 comma separated string |
| `java.lang.String` | `getFormat()`Get the format string for the variable |
| `boolean` | `getHasFormat()`Deprecated.in favor of[hasFormat()](../../../../com/phoenix_int/aserver/types/PHXLong.html#hasFormat--) |
| `boolean` | `getHasLowerBound()`retrieves the hasLowerBound flag |
| `boolean` | `getHasUpperBound()`retrieves the hasUpperBound flag |
| `long` | `getLowerBound()`retrieves the current lower bound value |
| `long` | `getUpperBound()`retrieves the current upper bound value |
| `long` | `getValue()`retrieves the current value of the variable |
| `java.lang.String` | `getValueStr()`retrieves the string value of this variable as passed into the
 last call to fromString(). |
| `boolean` | `hasFormat()`Whether or not the variable has a format |
| `void` | `setEnumAliases(java.lang.String values)`takes a comma seperated string of values and fills the
 enumeration aliases list with values. |
| `void` | `setEnumAliases(java.lang.String[] values)`Takes an array of strings which represent aliases for
 the enumValues. |
| `void` | `setEnumValues(long[] values)`sets the possible values a variable may be |
| `void` | `setEnumValues(java.lang.String strEnumList)`sets the possible values a variable may be |
| `void` | `setFormat(java.lang.String format)`Set the format string for the variable |
| `void` | `setHasLowerBound(boolean value)`sets the hasLowerBound flag |
| `void` | `setHasUpperBound(boolean value)`sets the hasUpperBound flag |
| `void` | `setIgnoreConversionErrors(boolean ignoreConversionErrors)`indicates whether the object should accept bad values in the
 fromString() method without throwning an exception. |
| `void` | `setLowerBound(long value)`sets the lower bound. |
| `void` | `setLowerBound(java.lang.String value)` |
| `void` | `setUpperBound(long value)`sets the upper bound. |
| `void` | `setUpperBound(java.lang.String value)` |
| `void` | `setValue(long v)`sets the value for the variable |
| `java.lang.String` | `toString()`converts the variable to a string |
| `PHXStringBuffer` | `toString2()`converts the variable to a PHXStringBuffer |

- ### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleType
`_copyMetadataFromOther,addPropertyChangeListener,getDescription,getEnumTokens,getHasChanged,getUnits,removePropertyChangeListener,setDescription,setHasChanged,setUnits`

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXLong

```java
public PHXLong()
```
Initializes value to 0.

- #### PHXLong

```java
public PHXLong(long value)
```
Initializes value to the specified value
**Parameters:**
: `value`- the value to use

- #### PHXLong

```java
public PHXLong(PHXLong other)
```
Clone another PHXLong's value and metadata.
**Parameters:**
: `other`- the other PHXLong to clone.
============ METHOD DETAIL ==========
- ### Method Detail

- #### _copyMetadataFromOther

```java
protected final void _copyMetadataFromOther(PHXLong other)
```
Clone another PHXLong's metadata.
**Parameters:**
: `other`- the other PHXLong

- #### getValue

```java
public long getValue()
```
retrieves the current value of the variable
**Returns:**
: the value of the variable

- #### getValueStr

```java
public java.lang.String getValueStr()
```
retrieves the string value of this variable as passed into the
 last call to fromString().  This may not be equivalent to the current
 value of the variable.
**Returns:**
: the string last used to set the variable

- #### setValue

```java
public void setValue(long v)
```
sets the value for the variable
**Parameters:**
: `v`- the value

- #### setUpperBound

```java
public void setUpperBound(long value)
```
sets the upper bound. The hasUpperBound value is set to true
**Parameters:**
: `value`- the upper bound

- #### setUpperBound

```java
public void setUpperBound(java.lang.String value)
```

- #### getUpperBound

```java
public long getUpperBound()
```
retrieves the current upper bound value
**Returns:**
: the upper bound

- #### setLowerBound

```java
public void setLowerBound(long value)
```
sets the lower bound. The hasLowerBound value is set to true
**Parameters:**
: `value`- the lower bound

- #### setLowerBound

```java
public void setLowerBound(java.lang.String value)
```

- #### getLowerBound

```java
public long getLowerBound()
```
retrieves the current lower bound value
**Returns:**
: the lower bound

- #### setHasUpperBound

```java
public void setHasUpperBound(boolean value)
```
sets the hasUpperBound flag
**Parameters:**
: `value`- true or false

- #### getHasUpperBound

```java
public boolean getHasUpperBound()
```
retrieves the hasUpperBound flag
**Returns:**
: true or false

- #### setHasLowerBound

```java
public void setHasLowerBound(boolean value)
```
sets the hasLowerBound flag
**Parameters:**
: `value`- true or false

- #### getHasLowerBound

```java
public boolean getHasLowerBound()
```
retrieves the hasLowerBound flag
**Returns:**
: true or false

- #### toString2

```java
public PHXStringBuffer toString2()
```
converts the variable to a PHXStringBuffer
**Specified by:**
: `toString2`in interface`IPHXType2`
**Returns:**
: a PHXStringBuffer representation of the variable

- #### toString

```java
public java.lang.String toString()
```
converts the variable to a string
**Specified by:**
: `toString`in interface`IPHXType`
**Overrides:**
: `toString`in class`java.lang.Object`
**Returns:**
: a String representation of the variable

- #### fromString2

```java
public void fromString2(PHXStringBuffer value)
```
converts a PHXStringBuffer representation to the internal value
**Specified by:**
: `fromString2`in interface`IPHXType2`
**Parameters:**
: `value`- the value to convert

- #### fromString

```java
public void fromString(java.lang.String value)
```
converts a String representation to the internal value
**Specified by:**
: `fromString`in interface`IPHXType`
**Parameters:**
: `value`- the value to convert

- #### setIgnoreConversionErrors

```java
public void setIgnoreConversionErrors(boolean ignoreConversionErrors)
```
indicates whether the object should accept bad values in the
 fromString() method without throwning an exception. The raw
 values is stored in property valueStr regardless.
**Parameters:**
: `ignoreConversionErrors`- true if errors should be ignored

- #### setEnumValues

```java
public void setEnumValues(java.lang.String strEnumList)
```
sets the possible values a variable may be
**Parameters:**
: `strEnumList`- the comma sepperated list to convert to values

- #### setEnumValues

```java
public void setEnumValues(long[] values)
```
sets the possible values a variable may be
**Parameters:**
: `values`- Array of longs which represents valid values

- #### getEnumValues

```java
public long[] getEnumValues()
```
Interface function to pass out the enumeration array
**Returns:**
: an array of the possible values of the list

- #### getEnumValuesStr

```java
public java.lang.String getEnumValuesStr()
```
Interface function to pass out the enumeration array as a
 comma separated string
**Returns:**
: comma separated string of the possible values of the list

- #### setEnumAliases

```java
public void setEnumAliases(java.lang.String[] values)
```
Takes an array of strings which represent aliases for
 the enumValues.
**Parameters:**
: `values`- A String array of enumeration aliases

- #### setEnumAliases

```java
public void setEnumAliases(java.lang.String values)
```
takes a comma seperated string of values and fills the
 enumeration aliases list with values.
**Parameters:**
: `values`- A comma seperated string of enumeration aliases

- #### getEnumAliases

```java
public java.lang.String[] getEnumAliases()
```
An interface function for the enumeration array
**Returns:**
: an array of the possible values of the list

- #### getEnumAliasesStr

```java
public java.lang.String getEnumAliasesStr()
```
An interface function for the enumeration array
**Returns:**
: an comma separated string of the possible values of the list

- #### getHasFormat

```java
@Deprecated
public boolean getHasFormat()
```
Deprecated.in favor of[hasFormat()](../../../../com/phoenix_int/aserver/types/PHXLong.html#hasFormat--)

- #### hasFormat

```java
public boolean hasFormat()
```
Whether or not the variable has a format
**Specified by:**
: `hasFormat`in interface`IPHXFormat`
**Returns:**
: true if variable has a format

- #### setFormat

```java
public void setFormat(java.lang.String format)
```
Set the format string for the variable
**Specified by:**
: `setFormat`in interface`IPHXFormat`
**Parameters:**
: `format`- format string

- #### getFormat

```java
public java.lang.String getFormat()
```
Get the format string for the variable
**Specified by:**
: `getFormat`in interface`IPHXFormat`
**Returns:**
: format string

- #### arrayToString

```java
public static java.lang.String arrayToString(long[] sa)
```

- #### equalsNatural

```java
public boolean equalsNatural(PHXSimpleType toCompare)
                      throws PHXTypeMismatchException
```
Compare this PHXSimpleType to another PHXSimpleType. This type of comparison is different than`Comparable`in that it does a natural comparison between numbers. It is not designed, nor suited, for use in things such as sets,
 and may behave oddly if put in those circumstances.
**Specified by:**
: `equalsNatural`in class`PHXSimpleType`
**Parameters:**
: `toCompare`-
**Returns:**
**Throws:**
: `PHXTypeMismatchException`- if the given PHXSimpleType cannot be compared with this object.

- #### fromObject

```java
public void fromObject(java.lang.Object toRead)
                throws PHXInvalidTypeException
```
Load the value of this object from the specified object. This will read the object and attempt to convert it if it
 is a known type. If the type isn't recognized, it will throw a PHXInvalidTypeException. If there is an error in
 conversion, it will also throw a PHXInvalidTypeException

 NOTE: while it might be logical to think you can create a PHX(Type)Array from, say, an
 array of java.lang.(Type), that is not currently supported. You MUST use the PHX string
 array formatting style.
**Specified by:**
: `fromObject`in class`PHXSimpleType`
**Parameters:**
: `toRead`- to object from which to load this objects value.
**Throws:**
: `PHXInvalidTypeException`- if the specified object is of an invalid type or there is an error in conversion.

- #### Accept

```java
public <T> T Accept(IPHXType2.IVisitor<T> visitor)
```
Accept a Visitor.
**Specified by:**
: `Accept`in interface`IPHXType2`
**Type Parameters:**
: `T`- Type of the result of the visit.
**Parameters:**
: `visitor`- The visitor to accept.
**Returns:**
: The results of the visit.

- #### createCopy

```java
public PHXLong createCopy()
```
Create a copy of this instance, including the value and metadata.
**Specified by:**
: `createCopy`in class`PHXSimpleType`
**Returns:**
: a newly constructed copy of this instance.
========= END OF CLASS DATA =========