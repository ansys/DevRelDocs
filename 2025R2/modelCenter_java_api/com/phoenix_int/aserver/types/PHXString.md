======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Class PHXString
- java.lang.Object
- - [com.phoenix_int.aserver.types.PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html)
- - com.phoenix_int.aserver.types.PHXString
- **All Implemented Interfaces:**
: [IPHXType](../../../../com/phoenix_int/aserver/types/IPHXType.html),[IPHXType2](../../../../com/phoenix_int/aserver/types/IPHXType2.html),[IPHXUnits](../../../../com/phoenix_int/aserver/types/IPHXUnits.html)

---

```java
public class PHXString
extends PHXSimpleType
```
The Phoenix type for Strings. This class adds the following
 features to the PHXSimpleType:
- **value**: String
- **enumValues**: String[]
- **enumAliases**: String[]
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
| `PHXString()` |
| `PHXString(PHXStringother)`Clone another PHXString's value and metadata. |
| `PHXString(java.lang.String value)` |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `protected void` | `_copyMetadataFromOther(PHXStringother)`Clone another PHXString's metadata. |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`Accept a Visitor. |
| `static java.lang.String` | `arrayToString(java.lang.String[] sa)`Deprecated. |
| `static java.lang.String` | `arrayToStringEscaped(java.lang.String[] sa)`Quotes each element of the array using c-style escape sequences, then
 builds a comma separated list of the elements with quotes around each element. |
| `PHXString` | `createCopy()`Create a copy of this instance, including the value and metadata. |
| `boolean` | `equalsNatural(PHXSimpleTypetoCompare)`Compare this PHXSimpleType to another PHXSimpleType. |
| `void` | `fromObject(java.lang.Object toRead)`Load the value of this object from the specified object. |
| `void` | `fromString(java.lang.String value)`converts a String representation to the internal value |
| `void` | `fromString2(PHXStringBuffervalue)`converts a PHXStringBuffer representation to the internal value |
| `java.lang.String[]` | `getEnumAliases()`An interface function for the enumeration array |
| `java.lang.String` | `getEnumAliasesStr()`An interface function for the enumeration array |
| `java.lang.String[]` | `getEnumValues()`lists enum values |
| `java.lang.String` | `getEnumValuesStr()`Interface function to pass out the enumeration array as a
 comma separated string |
| `java.lang.String` | `getValue()`retrieves the current value of the variable |
| `static void` | `main(java.lang.String[] args)` |
| `void` | `setEnumAliases(java.lang.String values)`takes a comma seperated string of values and fills the
 enumeration aliases list with values. |
| `void` | `setEnumAliases(java.lang.String[] values)`Takes an array of values and fills the enumeration aliases list with values. |
| `void` | `setEnumValues(java.lang.String input)`sets enum values |
| `void` | `setEnumValues(java.lang.String[] values)`sets enum values |
| `void` | `setValue(PHXStringBufferv)`sets the value for the variable |
| `void` | `setValue(java.lang.String v)`sets the value for the variable |
| `static java.lang.String[]` | `stringToArray(java.lang.String s)` |
| `java.lang.String` | `toString()`converts the variable to a string |
| `PHXStringBuffer` | `toString2()`converts the variable to a PHXStringBuffer |

- ### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleType
`_copyMetadataFromOther,addPropertyChangeListener,getDescription,getEnumTokens,getHasChanged,getUnits,removePropertyChangeListener,setDescription,setHasChanged,setUnits`

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXString

```java
public PHXString()
```

- #### PHXString

```java
public PHXString(java.lang.String value)
```

- #### PHXString

```java
public PHXString(PHXString other)
```
Clone another PHXString's value and metadata.
**Parameters:**
: `other`- the other PHXString to clone.
============ METHOD DETAIL ==========
- ### Method Detail

- #### getValue

```java
public java.lang.String getValue()
```
retrieves the current value of the variable
**Returns:**
: the value of the variable

- #### setValue

```java
public void setValue(java.lang.String v)
              throws java.lang.IllegalArgumentException
```
sets the value for the variable
**Parameters:**
: `v`- the value
**Throws:**
: `java.lang.IllegalArgumentException`

- #### setValue

```java
public void setValue(PHXStringBuffer v)
              throws java.lang.IllegalArgumentException
```
sets the value for the variable
**Parameters:**
: `v`- the value
**Throws:**
: `java.lang.IllegalArgumentException`

- #### toString2

```java
public PHXStringBuffer toString2()
```
converts the variable to a PHXStringBuffer
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
**Parameters:**
: `value`- the value to convert

- #### fromString

```java
public void fromString(java.lang.String value)
```
converts a String representation to the internal value
**Parameters:**
: `value`- the value to convert

- #### getEnumValues

```java
public java.lang.String[] getEnumValues()
```
lists enum values
**Returns:**
: enum values

- #### getEnumValuesStr

```java
public java.lang.String getEnumValuesStr()
```
Interface function to pass out the enumeration array as a
 comma separated string
**Returns:**
: comma separated string of the possible values of the list

- #### setEnumValues

```java
public void setEnumValues(java.lang.String input)
```
sets enum values
**Parameters:**
: `input:`- list of enum values

- #### setEnumValues

```java
public void setEnumValues(java.lang.String[] values)
```
sets enum values
**Parameters:**
: `values:`- list of enum values

- #### setEnumAliases

```java
public void setEnumAliases(java.lang.String values)
```
takes a comma seperated string of values and fills the
 enumeration aliases list with values.
**Parameters:**
: `values`- A comma seperated string of enumeration aliases

- #### setEnumAliases

```java
public void setEnumAliases(java.lang.String[] values)
```
Takes an array of values and fills the enumeration aliases list with values.  If null, aliases will be set to
 an empty list.
**Parameters:**
: `values`- string array of enumeration aliases

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

- #### _copyMetadataFromOther

```java
protected final void _copyMetadataFromOther(PHXString other)
```
Clone another PHXString's metadata.
**Parameters:**
: `other`- the other PHXString

- #### arrayToString

```java
@Deprecated
public static java.lang.String arrayToString(java.lang.String[] sa)
```
Deprecated.Do not use, does not generate correct strings.
**Parameters:**
: `sa`-
**Returns:**

- #### stringToArray

```java
public static java.lang.String[] stringToArray(java.lang.String s)
```

- #### arrayToStringEscaped

```java
public static java.lang.String arrayToStringEscaped(java.lang.String[] sa)
```
Quotes each element of the array using c-style escape sequences, then
 builds a comma separated list of the elements with quotes around each element.
**Parameters:**
: `sa`- The array to read
**Returns:**
: The generated string.

- #### main

```java
public static void main(java.lang.String[] args)
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
: a negative number if this object is less than toCompare, a positive number if this object is greater than
 to compare, and zero if these two objects are equal.
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
**Type Parameters:**
: `T`- Type of the result of the visit.
**Parameters:**
: `visitor`- The visitor to accept.
**Returns:**
: The results of the visit.

- #### createCopy

```java
public PHXString createCopy()
```
Create a copy of this instance, including the value and metadata.
**Specified by:**
: `createCopy`in class`PHXSimpleType`
**Returns:**
: a newly constructed copy of this instance.
========= END OF CLASS DATA =========