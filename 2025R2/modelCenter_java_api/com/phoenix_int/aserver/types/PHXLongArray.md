======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Class PHXLongArray
- java.lang.Object
- - [com.phoenix_int.aserver.types.PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html)
- - [com.phoenix_int.aserver.types.PHXSimpleArray](../../../../com/phoenix_int/aserver/types/PHXSimpleArray.html)<[PHXLong](../../../../com/phoenix_int/aserver/types/PHXLong.html)>
- - com.phoenix_int.aserver.types.PHXLongArray
- **All Implemented Interfaces:**
: [IPHXFormat](../../../../com/phoenix_int/aserver/types/IPHXFormat.html),[IPHXType](../../../../com/phoenix_int/aserver/types/IPHXType.html),[IPHXType2](../../../../com/phoenix_int/aserver/types/IPHXType2.html),[IPHXUnits](../../../../com/phoenix_int/aserver/types/IPHXUnits.html), java.lang.Iterable<[PHXLong](../../../../com/phoenix_int/aserver/types/PHXLong.html)>

---

```java
public class PHXLongArray
extends PHXSimpleArray<PHXLong>
implements IPHXFormat
```
Class wraps an array of PHXLong variables
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
| `PHXLongArray()` |
| `PHXLongArray(java.lang.Object data)` |
| `PHXLongArray(PHXLongArrayother)`Clone another PHXLongArray's value and metadata. |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `protected void` | `_getMetaData(PHXSimpleTypev2)`Worker which takes the meta data from an instance of PHXSimpleType
 and sets it into our meta data. |
| `protected void` | `_setMetaData(PHXSimpleTypev2)`Sets a simple type's meta data based on the meta data
 in this object. |
| `void` | `_sort(PHXLongArrayarray,
     boolean ascend)` |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`Accept a Visitor. |
| `protected java.lang.Object` | `allocateElement(java.lang.Class elementClass)`Allocates a single element in a default state. |
| `PHXLongArray` | `createCopy()`Create a copy of this instance, including the value and metadata. |
| `protected boolean` | `dataTypeOK(java.lang.Class c)`Must override this function and return true if the specified
 class is acceptable as an array element component type. |
| `protected java.lang.Object` | `elementFromString(java.lang.String val)`Sub-classes must provide an implementation of this function
 which converts a string form of a single element to Object
 form. |
| `void` | `fromObject(java.lang.Object toRead)`Load the value of this object from the specified object. |
| `double` | `getAvg()` |
| `java.lang.String[]` | `getEnumAliases()`An interface function for the enumeration array |
| `java.lang.String` | `getEnumAliasesStr()`An interface function for the enumeration array |
| `long[]` | `getEnumValues()`An interface function for the enumeration array |
| `java.lang.String` | `getEnumValuesStr()`Interface function to pass out the enumeration array as a
 comma separated string |
| `java.lang.String` | `getFormat()`Get the format string for the variable |
| `boolean` | `getHasLowerBound()`retrieves the hasLowerBound flag |
| `boolean` | `getHasUpperBound()`retrieves the hasUpperBound flag |
| `long` | `getLongValue(int index)`Gets the value of an element as a long |
| `long` | `getLongValue(int[] index)`Gets the value of an element as a long |
| `long` | `getLowerBound()`retrieves the current lower bound value |
| `long` | `getMax()` |
| `long` | `getMin()` |
| `long` | `getUpperBound()`retrieves the current upper bound value |
| `PHXLong` | `getValue(int index)`Gets the value of an element as a PHXLong object |
| `PHXLong` | `getValue(int[] index)`Gets the value of an element as a PHXLong object |
| `boolean` | `hasFormat()`Whether or not the variable has a format |
| `void` | `setEnumAliases(java.lang.String values)`takes a comma seperated string of values and fills the
 enumeration aliases list with values. |
| `void` | `setEnumAliases(java.lang.String[] values)`Sets the enumeration aliases list |
| `void` | `setEnumValues(long[] values)`sets the possible values a variable may be |
| `void` | `setEnumValues(java.lang.String values)`takes a comma seperated string of values and fills the
 enumeration List with values. |
| `void` | `setFormat(java.lang.String format)`Set the format string for the variable |
| `void` | `setHasLowerBound(boolean value)`sets the hasLowerBound flag |
| `void` | `setHasUpperBound(boolean value)`sets the hasUpperBound flag |
| `void` | `setLowerBound(long value)`sets the lower bound. |
| `void` | `setUpperBound(long value)`sets the upper bound. |
| `void` | `setValue(int[] index,
        long val)`Sets the value of an element as a PHXLong object |
| `void` | `setValue(int[] index,PHXLongval)`Sets the value of an element as a PHXLong object |
| `void` | `setValue(int index,
        long val)`Sets the value of an element as a PHXLong object |
| `void` | `sort()` |
| `void` | `sortReverse()` |

- ### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleArray
`_getMetaData,_setMetaData,checkRectangular,copy,equalsNatural,fromString,fromString,fromString,fromString,fromString2,generateFor,generateFor,getArray,getArrayElement,getArrayElement,getComponentType,getComponentType,getDimensions,getDimensions,getFirst,getLength,getLength,getLockResize,getnDIndex,getNumDimensions,getNumDimensions,getSelf,incrementIndex,iterator,lockDimensions,newIndex,parseIndex,resize,setArray,setArrayElement,setArrayElement,setDimensions,setFirst,setLength,setLength,setLockResize,setValue,toString,toString,toString,toString,toString2,toString2,toString2,validElement`

- ### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleType
`_copyMetadataFromOther,addPropertyChangeListener,getDescription,getEnumTokens,getHasChanged,getUnits,removePropertyChangeListener,setDescription,setHasChanged,setUnits`

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- ### Methods inherited from interface java.lang.Iterable
`forEach, spliterator`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXLongArray

```java
public PHXLongArray()
```

- #### PHXLongArray

```java
public PHXLongArray(java.lang.Object data)
```

- #### PHXLongArray

```java
public PHXLongArray(PHXLongArray other)
```
Clone another PHXLongArray's value and metadata.
**Parameters:**
: `other`- the other PHXLongArray to clone.
============ METHOD DETAIL ==========
- ### Method Detail

- #### dataTypeOK

```java
protected boolean dataTypeOK(java.lang.Class c)
```
Description copied from class:`PHXSimpleArray`Must override this function and return true if the specified
 class is acceptable as an array element component type.
**Specified by:**
: `dataTypeOK`in class`PHXSimpleArray<PHXLong>`

- #### allocateElement

```java
protected java.lang.Object allocateElement(java.lang.Class elementClass)
                                    throws java.lang.IllegalAccessException,
                                           java.lang.InstantiationException
```
Description copied from class:`PHXSimpleArray`Allocates a single element in a default state.
 If the class type in question has a default constructor,
 there is no need to override this.
**Overrides:**
: `allocateElement`in class`PHXSimpleArray<PHXLong>`
**Throws:**
: `java.lang.IllegalAccessException`
: `java.lang.InstantiationException`

- #### setUpperBound

```java
public void setUpperBound(long value)
```
sets the upper bound. The hasUpperBound value is set to true
**Parameters:**
: `value`- the upper bound

- #### getUpperBound

```java
public long getUpperBound()
```
retrieves the current upper bound value
**Returns:**
: the upper bound
**Throws:**
: `java.lang.IllegalStateException`- Thrown if
   there is no upper bound defined.

- #### setLowerBound

```java
public void setLowerBound(long value)
```
sets the lower bound. The hasLowerBound value is set to true
**Parameters:**
: `value`- the lower bound

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
public void setEnumValues(long[] values)
```
sets the possible values a variable may be
**Parameters:**
: `values`- Array of longs which represents valid values

- #### getEnumValues

```java
public long[] getEnumValues()
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

- #### hasFormat

```java
public boolean hasFormat()
```
Description copied from interface:`IPHXFormat`Whether or not the variable has a format
**Specified by:**
: `hasFormat`in interface`IPHXFormat`
**Returns:**
: true if variable has a format

- #### _setMetaData

```java
protected void _setMetaData(PHXSimpleType v2)
```
Description copied from class:`PHXSimpleArray`Sets a simple type's meta data based on the meta data
 in this object.  Override this to set additional
 information in sub-classes.  Be sure to call
 super._setMetaData(PHXSimpleType)
**Overrides:**
: `_setMetaData`in class`PHXSimpleArray<PHXLong>`

- #### _getMetaData

```java
protected void _getMetaData(PHXSimpleType v2)
```
Description copied from class:`PHXSimpleArray`Worker which takes the meta data from an instance of PHXSimpleType
 and sets it into our meta data.  Override this in order to add
 more custom meta data in sub-classes.  Be sure to cal
 super._getMetaData(PHXSimpleType), though!
**Overrides:**
: `_getMetaData`in class`PHXSimpleArray<PHXLong>`

- #### getValue

```java
public PHXLong getValue(int index)
```
Gets the value of an element as a PHXLong object
**Overrides:**
: `getValue`in class`PHXSimpleArray<PHXLong>`
**Parameters:**
: `index`- 1D array index
**Returns:**
: referenced array value
**Throws:**
: `java.lang.IllegalArgumentException`- thrown if called on non-1D array

- #### getValue

```java
public PHXLong getValue(int[] index)
```
Gets the value of an element as a PHXLong object
**Specified by:**
: `getValue`in class`PHXSimpleArray<PHXLong>`
**Parameters:**
: `index`- nD array index
**Returns:**
: referenced array value

- #### getLongValue

```java
public long getLongValue(int index)
```
Gets the value of an element as a long
**Parameters:**
: `index`- 1D array index
**Returns:**
: referenced array value
**Throws:**
: `java.lang.IllegalArgumentException`- thrown if called on non-1D array

- #### getLongValue

```java
public long getLongValue(int[] index)
```
Gets the value of an element as a long
**Parameters:**
: `index`- 1D array index
**Returns:**
: referenced array value
**Throws:**
: `java.lang.IllegalArgumentException`- thrown if called on non-1D array

- #### setValue

```java
public void setValue(int[] index,
                     PHXLong val)
```
Sets the value of an element as a PHXLong object
**Specified by:**
: `setValue`in class`PHXSimpleArray<PHXLong>`
**Parameters:**
: `index`- 1D array index
: `val`- value to set
**Throws:**
: `java.lang.IllegalArgumentException`- thrown if called on non-1D array

- #### setValue

```java
public void setValue(int index,
                     long val)
```
Sets the value of an element as a PHXLong object
**Parameters:**
: `index`- 1D array index
: `val`- value to set
**Throws:**
: `java.lang.IllegalArgumentException`- thrown if called on non-1D array

- #### setValue

```java
public void setValue(int[] index,
                     long val)
```
Sets the value of an element as a PHXLong object
**Parameters:**
: `index`- 1D array index
: `val`- value to set
**Throws:**
: `java.lang.IllegalArgumentException`- thrown if called on non-1D array

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
: `elementFromString`in class`PHXSimpleArray<PHXLong>`

- #### getMax

```java
public long getMax()
```

- #### getMin

```java
public long getMin()
```

- #### getAvg

```java
public double getAvg()
```

- #### sortReverse

```java
public void sortReverse()
```

- #### sort

```java
public void sort()
```

- #### _sort

```java
public void _sort(PHXLongArray array,
                  boolean ascend)
```

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
public PHXLongArray createCopy()
```
Create a copy of this instance, including the value and metadata.
**Specified by:**
: `createCopy`in class`PHXSimpleType`
**Returns:**
: a newly constructed copy of this instance.
========= END OF CLASS DATA =========