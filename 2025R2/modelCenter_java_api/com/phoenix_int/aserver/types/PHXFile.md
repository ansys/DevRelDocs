======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Class PHXFile
- java.lang.Object
- - [com.phoenix_int.aserver.types.PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html)
- - com.phoenix_int.aserver.types.PHXFile
- **All Implemented Interfaces:**
: [IPHXType](../../../../com/phoenix_int/aserver/types/IPHXType.html),[IPHXType2](../../../../com/phoenix_int/aserver/types/IPHXType2.html),[IPHXUnits](../../../../com/phoenix_int/aserver/types/IPHXUnits.html)

---
Deprecated.

```java
@Deprecated
public class PHXFile
extends PHXSimpleType
```
Internal data type used for certain types of files.  End
 users should use PHXRawFile to implement file variables
 in their custom components.
- **name**: String
- **contents**: String
**Author:**
: Woyak, 6/98
**See Also:**
: [PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html),[PHXRawFile](../../../../com/phoenix_int/aserver/types/PHXRawFile.html)- ======== NESTED CLASS SUMMARY ========
- ### Nested Class Summary

- ### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.IPHXType2
`IPHXType2.IVisitor<T>`
======== CONSTRUCTOR SUMMARY ========
- ### Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXFile()`Deprecated. |
| `PHXFile(PHXFileother)`Deprecated.Clone another PHXFile's value and metadata. |
| `PHXFile(java.lang.String fileName)`Deprecated. |
| `PHXFile(java.lang.String baseName,
       java.lang.String name)`Deprecated. |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`Deprecated.Accept a Visitor. |
| `PHXFile` | `createCopy()`Deprecated.Create a copy of this instance, including the value and metadata. |
| `boolean` | `equalsNatural(PHXSimpleTypetoCompare)`Deprecated.Compare this PHXSimpleType to another PHXSimpleType. |
| `void` | `fromObject(java.lang.Object toRead)`Deprecated.Load the value of this object from the specified object. |
| `void` | `fromString(java.lang.String value)`Deprecated.converts a String representation to the internal value |
| `void` | `fromString2(PHXStringBuffervalue)`Deprecated.converts a PHXStringBuffer representation to the internal value |
| `java.lang.String` | `getContents()`Deprecated.retrieves the contents of the file |
| `java.lang.String` | `getName()`Deprecated.retrieves the name of the file |
| `java.lang.String` | `getNameCoded()`Deprecated.retrieves the name of the file in coded form (without $variables
 replaced) |
| `boolean` | `hasChanged()`Deprecated.checks to see if the file has changed since the last time
 getContents() was called |
| `void` | `markAsRead()`Deprecated.call this function after you manually get the contents of the
 file. |
| `void` | `setBaseName(java.lang.String v)`Deprecated.sets the base name of the file |
| `void` | `setName(java.lang.String v)`Deprecated.sets the name of the file |
| `void` | `setStringReplacer(PHXStringReplacerr)`Deprecated.specifies a PHXStringReplacer object for use in forming the
 full file name. |
| `java.lang.String` | `toString()`Deprecated.converts the variable to a string |
| `PHXStringBuffer` | `toString2()`Deprecated.converts the variable to a string |

- ### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleType
`_copyMetadataFromOther,addPropertyChangeListener,getDescription,getEnumTokens,getHasChanged,getUnits,removePropertyChangeListener,setDescription,setHasChanged,setUnits`

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXFile

```java
public PHXFile()
```
Deprecated.

- #### PHXFile

```java
public PHXFile(java.lang.String fileName)
```
Deprecated.

- #### PHXFile

```java
public PHXFile(java.lang.String baseName,
               java.lang.String name)
```
Deprecated.

- #### PHXFile

```java
public PHXFile(PHXFile other)
```
Deprecated.Clone another PHXFile's value and metadata.
**Parameters:**
: `other`- the other PHXFile to clone.
============ METHOD DETAIL ==========
- ### Method Detail

- #### getName

```java
public java.lang.String getName()
```
Deprecated.retrieves the name of the file
**Returns:**
: the name of the file

- #### getNameCoded

```java
public java.lang.String getNameCoded()
```
Deprecated.retrieves the name of the file in coded form (without $variables
 replaced)
**Returns:**
: the name of the file in coded form

- #### setName

```java
public void setName(java.lang.String v)
```
Deprecated.sets the name of the file
**Parameters:**
: `v`- the name

- #### setBaseName

```java
public void setBaseName(java.lang.String v)
```
Deprecated.sets the base name of the file
**Parameters:**
: `v`- the name

- #### setStringReplacer

```java
public void setStringReplacer(PHXStringReplacer r)
```
Deprecated.specifies a PHXStringReplacer object for use in forming the
 full file name.
**Parameters:**
: `r`- the string replacer object

- #### getContents

```java
public java.lang.String getContents()
                             throws java.io.IOException
```
Deprecated.retrieves the contents of the file
**Returns:**
: the contents of the file
**Throws:**
: `java.io.IOException`

- #### markAsRead

```java
public void markAsRead()
```
Deprecated.call this function after you manually get the contents of the
 file. The function records it's name and timestamp for use with
 the hasChanged() function

- #### hasChanged

```java
public boolean hasChanged()
```
Deprecated.checks to see if the file has changed since the last time
 getContents() was called
**Returns:**
: true if the timestamp of the file is new, or if the
          file name has changed

- #### toString2

```java
public PHXStringBuffer toString2()
```
Deprecated.converts the variable to a string
**Returns:**
: a PHXStringBuffer representation of the variable

- #### toString

```java
public java.lang.String toString()
```
Deprecated.converts the variable to a string
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
Deprecated.converts a PHXStringBuffer representation to the internal value
**Parameters:**
: `value`- the value to convert

- #### fromString

```java
public void fromString(java.lang.String value)
```
Deprecated.converts a String representation to the internal value
**Parameters:**
: `value`- the value to convert

- #### equalsNatural

```java
public boolean equalsNatural(PHXSimpleType toCompare)
                      throws PHXTypeMismatchException
```
Deprecated.Compare this PHXSimpleType to another PHXSimpleType. This type of comparison is different than`Comparable`in that it does a natural comparison between numbers. It is not designed, nor suited, for use in things such as sets,
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
Deprecated.Load the value of this object from the specified object. This will read the object and attempt to convert it if it
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
Deprecated.Accept a Visitor.
**Type Parameters:**
: `T`- Type of the result of the visit.
**Parameters:**
: `visitor`- The visitor to accept.
**Returns:**
: The results of the visit.

- #### createCopy

```java
public PHXFile createCopy()
```
Deprecated.Description copied from class:`PHXSimpleType`Create a copy of this instance, including the value and metadata.
**Specified by:**
: `createCopy`in class`PHXSimpleType`
**Returns:**
: a newly constructed copy of this instance.
========= END OF CLASS DATA =========