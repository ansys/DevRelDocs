======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Class PHXBoolean
- java.lang.Object
- - [com.phoenix_int.aserver.types.PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html)
- - com.phoenix_int.aserver.types.PHXBoolean
- **All Implemented Interfaces:**
: [IPHXType](../../../../com/phoenix_int/aserver/types/IPHXType.html),[IPHXType2](../../../../com/phoenix_int/aserver/types/IPHXType2.html),[IPHXUnits](../../../../com/phoenix_int/aserver/types/IPHXUnits.html)

---

```java
public class PHXBoolean
extends PHXSimpleType
```
The Phoenix type for booleans. This class adds the following
 features to the PHXSimpleType:
- **value**: boolean
- **valueStr**: the source string for the value, 
     useful for error checking when the value is NaN
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
| `PHXBoolean()`initializes value to false |
| `PHXBoolean(boolean value)`Initializes the value to the specified value. |
| `PHXBoolean(PHXBooleanother)`Clone another PHXBoolean's value and metadata. |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`Accept a Visitor. |
| `PHXBoolean` | `createCopy()`Create a copy of this instance, including the value and metadata. |
| `boolean` | `equalsNatural(PHXSimpleTypetoCompare)`Compare this PHXSimpleType to another PHXSimpleType. |
| `void` | `fromObject(java.lang.Object toRead)`Load the value of this object from the specified object. |
| `void` | `fromString(java.lang.String value)`converts a String representation to the internal value |
| `void` | `fromString2(PHXStringBuffervalue)`converts a PHXStringBuffer representation to the internal value |
| `boolean` | `getValue()`retrieves the current value of the variable |
| `java.lang.String` | `getValueStr()`retrieves the string value of this variable as passed into the 
 last call to fromString(). |
| `static boolean` | `parse(java.lang.Object value)`a utility function to convert a string to a boolean value |
| `void` | `setIgnoreConversionErrors(boolean ignoreConversionErrors)`indicates whether the object should accept bad values in the
 fromString() method without throwning an exception. |
| `void` | `setValue(boolean v)`sets the value for the variable |
| `java.lang.String` | `toString()`converts the variable to a string |
| `PHXStringBuffer` | `toString2()`converts the variable to a PHXStringBuffer |

- ### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleType
`_copyMetadataFromOther,addPropertyChangeListener,getDescription,getEnumTokens,getHasChanged,getUnits,removePropertyChangeListener,setDescription,setHasChanged,setUnits`

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXBoolean

```java
public PHXBoolean()
```
initializes value to false

- #### PHXBoolean

```java
public PHXBoolean(boolean value)
```
Initializes the value to the specified value.
**Parameters:**
: `value`-

- #### PHXBoolean

```java
public PHXBoolean(PHXBoolean other)
```
Clone another PHXBoolean's value and metadata.
**Parameters:**
: `other`- the other PHXBoolean to clone.
============ METHOD DETAIL ==========
- ### Method Detail

- #### getValue

```java
public boolean getValue()
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
public void setValue(boolean v)
```
sets the value for the variable
**Parameters:**
: `v`- the value

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

- #### parse

```java
public static boolean parse(java.lang.Object value)
```
a utility function to convert a string to a boolean value
**Parameters:**
: `value`- the string
**Returns:**
: a boolean value

- #### setIgnoreConversionErrors

```java
public void setIgnoreConversionErrors(boolean ignoreConversionErrors)
```
indicates whether the object should accept bad values in the
 fromString() method without throwning an exception. The raw
 values is stored in property valueStr regardless.
**Parameters:**
: `ignoreConversionErrors`- true if errors should be ignored

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
public PHXBoolean createCopy()
```
Description copied from class:`PHXSimpleType`Create a copy of this instance, including the value and metadata.
**Specified by:**
: `createCopy`in class`PHXSimpleType`
**Returns:**
: a newly constructed copy of this instance.
========= END OF CLASS DATA =========