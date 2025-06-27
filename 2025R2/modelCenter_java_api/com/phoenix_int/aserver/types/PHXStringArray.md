======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Class PHXStringArray
- java.lang.Object
- - [com.phoenix_int.aserver.types.PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html)
- - [com.phoenix_int.aserver.types.PHXSimpleArray](../../../../com/phoenix_int/aserver/types/PHXSimpleArray.html)<[PHXString](../../../../com/phoenix_int/aserver/types/PHXString.html)>
- - com.phoenix_int.aserver.types.PHXStringArray
- **All Implemented Interfaces:**
: [IPHXType](../../../../com/phoenix_int/aserver/types/IPHXType.html),[IPHXType2](../../../../com/phoenix_int/aserver/types/IPHXType2.html),[IPHXUnits](../../../../com/phoenix_int/aserver/types/IPHXUnits.html), java.lang.Iterable<[PHXString](../../../../com/phoenix_int/aserver/types/PHXString.html)>

---

```java
public class PHXStringArray
extends PHXSimpleArray<PHXString>
```
Class wraps an array of PHXString variables
 for the ScriptWrapper utility.
**Version:**
: May 2002
**Author:**
: Nathan P Sharp
**See Also:**
: [PHXSimpleArray](../../../../com/phoenix_int/aserver/types/PHXSimpleArray.html)- ======== NESTED CLASS SUMMARY ========
- ### Nested Class Summary

- ### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.IPHXType2
`IPHXType2.IVisitor<T>`
=========== FIELD SUMMARY ===========
- ### Field Summary

- ### Fields inherited from class com.phoenix_int.aserver.types.PHXSimpleArray
`_data,_lockDims,_lockResize`
======== CONSTRUCTOR SUMMARY ========
- ### Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXStringArray()` |
| `PHXStringArray(java.lang.Object data)` |
| `PHXStringArray(PHXStringArrayother)` |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `protected void` | `_getMetaData(PHXSimpleTypev2)`Worker which takes the meta data from an instance of PHXSimpleType
 and sets it into our meta data. |
| `protected void` | `_setMetaData(PHXSimpleTypev2)`Sets a simple type's meta data based on the meta data
 in this object. |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`Accept a Visitor. |
| `PHXStringArray` | `createCopy()`Create a copy of this instance, including the value and metadata. |
| `protected boolean` | `dataTypeOK(java.lang.Class c)`Must override this function and return true if the specified
 class is acceptable as an array element component type. |
| `protected java.lang.Object` | `elementFromString(java.lang.String val)`Sub-classes must provide an implementation of this function
 which converts a string form of a single element to Object
 form. |
| `void` | `fromObject(java.lang.Object toRead)`Load the value of this object from the specified object. |
| `java.lang.String[]` | `getEnumAliases()`An interface function for the enumeration array |
| `java.lang.String` | `getEnumAliasesStr()`An interface function for the enumeration array |
| `java.lang.String[]` | `getEnumValues()`An interface function for the enumeration array |
| `java.lang.String` | `getEnumValuesStr()`Interface function to pass out the enumeration array as a
 comma separated string |
| `java.lang.String` | `getStringValue(int index)`Gets a particular element as a String |
| `java.lang.String` | `getStringValue(int[] index)`Gets a particular element as a String |
| `PHXString` | `getValue(int[] index)`Gets a particular element as a PHXString |
| `void` | `setEnumAliases(java.lang.String values)`takes a comma seperated string of values and fills the
 enumeration aliases list with values. |
| `void` | `setEnumAliases(java.lang.String[] values)`Sets the enumeration aliases list |
| `void` | `setEnumValues(java.lang.String values)`takes a comma seperated string of values and fills the
 enumeration List with values. |
| `void` | `setEnumValues(java.lang.String[] values)`sets enum values |
| `void` | `setValue(int[] index,PHXStringval)`Sets a particular element as a PHXString |
| `void` | `setValue(int[] index,
        java.lang.String val)`Sets a particular element as a String |
| `void` | `setValue(int index,
        java.lang.String val)`Sets a particular element as a String |

- ### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleArray
`_getMetaData,_setMetaData,allocateElement,checkRectangular,copy,equalsNatural,fromString,fromString,fromString,fromString,fromString2,generateFor,generateFor,getArray,getArrayElement,getArrayElement,getComponentType,getComponentType,getDimensions,getDimensions,getFirst,getLength,getLength,getLockResize,getnDIndex,getNumDimensions,getNumDimensions,getSelf,getValue,incrementIndex,iterator,lockDimensions,newIndex,parseIndex,resize,setArray,setArrayElement,setArrayElement,setDimensions,setFirst,setLength,setLength,setLockResize,setValue,toString,toString,toString,toString,toString2,toString2,toString2,validElement`

- ### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleType
`_copyMetadataFromOther,addPropertyChangeListener,getDescription,getEnumTokens,getHasChanged,getUnits,removePropertyChangeListener,setDescription,setHasChanged,setUnits`

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- ### Methods inherited from interface java.lang.Iterable
`forEach, spliterator`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXStringArray

```java
public PHXStringArray()
```

- #### PHXStringArray

```java
public PHXStringArray(java.lang.Object data)
```

- #### PHXStringArray

```java
public PHXStringArray(PHXStringArray other)
```
============ METHOD DETAIL ==========
- ### Method Detail

- #### dataTypeOK

```java
protected boolean dataTypeOK(java.lang.Class c)
```
Description copied from class:`PHXSimpleArray`Must override this function and return true if the specified
 class is acceptable as an array element component type.
**Specified by:**
: `dataTypeOK`in class`PHXSimpleArray<PHXString>`

- #### setEnumValues

```java
public void setEnumValues(java.lang.String values)
```
takes a comma seperated string of values and fills the
 enumeration List with values.
**Parameters:**
: `values`- A comma seperrated string of enumeration values

- #### setEnumValues

```java
public void setEnumValues(java.lang.String[] values)
```
sets enum values
**Parameters:**
: `values:`- list of enum values

- #### getEnumValues

```java
public java.lang.String[] getEnumValues()
```
An interface function for the enumeration array
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
Sets the enumeration aliases list
**Parameters:**
: `values`- An array of strings

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

- #### _setMetaData

```java
protected void _setMetaData(PHXSimpleType v2)
```
Description copied from class:`PHXSimpleArray`Sets a simple type's meta data based on the meta data
 in this object.  Override this to set additional
 information in sub-classes.  Be sure to call
 super._setMetaData(PHXSimpleType)
**Overrides:**
: `_setMetaData`in class`PHXSimpleArray<PHXString>`

- #### _getMetaData

```java
protected void _getMetaData(PHXSimpleType v2)
```
Description copied from class:`PHXSimpleArray`Worker which takes the meta data from an instance of PHXSimpleType
 and sets it into our meta data.  Override this in order to add
 more custom meta data in sub-classes.  Be sure to cal
 super._getMetaData(PHXSimpleType), though!
**Overrides:**
: `_getMetaData`in class`PHXSimpleArray<PHXString>`

- #### getValue

```java
public PHXString getValue(int[] index)
```
Gets a particular element as a PHXString
**Specified by:**
: `getValue`in class`PHXSimpleArray<PHXString>`
**Parameters:**
: `index`- 1D array index
**Returns:**
: referenced array value

- #### getStringValue

```java
public java.lang.String getStringValue(int index)
```
Gets a particular element as a String
**Parameters:**
: `index`- nD array index
**Returns:**
: referenced array value
**Throws:**
: `java.lang.IllegalArgumentException`- thrown if called on non-1D array

- #### getStringValue

```java
public java.lang.String getStringValue(int[] index)
```
Gets a particular element as a String
**Parameters:**
: `index`- nD array index
**Returns:**
: referenced array value

- #### setValue

```java
public void setValue(int[] index,
                     PHXString val)
```
Sets a particular element as a PHXString
**Specified by:**
: `setValue`in class`PHXSimpleArray<PHXString>`
**Parameters:**
: `index`- 1D array index
: `val`- value to set

- #### setValue

```java
public void setValue(int index,
                     java.lang.String val)
```
Sets a particular element as a String
**Parameters:**
: `index`- 1D array index
: `val`- value to set
**Throws:**
: `java.lang.IllegalArgumentException`- thrown if called on non-1D array

- #### setValue

```java
public void setValue(int[] index,
                     java.lang.String val)
```
Sets a particular element as a String
**Parameters:**
: `index`- 1D array index
: `val`- value to set

- #### elementFromString

```java
protected java.lang.Object elementFromString(java.lang.String val)
```
Description copied from class:`PHXSimpleArray`Sub-classes must provide an implementation of this function
 which converts a string form of a single element to Object
 form.  This is only used when the element type does not
 implement IPHXType or IPHXType2.  For primitives, return
 the wrapper objects.
**Specified by:**
: `elementFromString`in class`PHXSimpleArray<PHXString>`

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
public PHXStringArray createCopy()
```
Description copied from class:`PHXSimpleType`Create a copy of this instance, including the value and metadata.
**Specified by:**
: `createCopy`in class`PHXSimpleType`
**Returns:**
: a newly constructed copy of this instance.
========= END OF CLASS DATA =========