# Class PHXSimpleArray`<T extendsPHXSimpleType>`


**Package:** `com.phoenix_int.aserver.types`
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXSimpleType
    ↳ com.phoenix_int.aserver.types.PHXSimpleArray<T>
```

**All Implemented Interfaces:**
- [IPHXType](IPHXType.md), [IPHXType2](IPHXType2.md),[IPHXUnits](IPHXUnits.md), java.lang.Iterable`<T>`


**Direct Known Subclasses:**
- [PHXBooleanArray](PHXBooleanArray.md), [PHXDoubleArray](PHXDoubleArray.md), [PHXLongArray](PHXLongArray.md), [PHXObjectArray](PHXObjectArray.md), [PHXRawFileArray](PHXRawFileArray.md), [PHXStringArray](PHXStringArray.md)

---

```java
public abstract class PHXSimpleArray<T extends PHXSimpleType>
extends PHXSimpleType
implements IPHXType2, java.lang.Iterable<T>
```
This class enables components to create resizeable arrays where the number of dimensions is variable as well as the size of each dimension.Typically you don't use this class directly but one of its sub-classes that are created and passed to you automatically.


## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md)
`IPHXType2.IVisitor<T>`

## Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| `protected java.lang.Object` | `_data` |
| `protected boolean` | `_lockDims` |
| `protected boolean` | `_lockResize` |

## Constructor Summary

| Modifier | Constructor and Description |
| --- | --- |
| `protected` | `PHXSimpleArray()`<br>Default Constructor |
| `protected` | `PHXSimpleArray(java.lang.Object data)`<br>Constructs a PHXSimpleArray that wraps a particular ModelCenter Remote Execution style variable. |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `_getMetaData()`<br>Gets the meta data off of the first element of the array and sets it into our meta data info. |
| `protected void` | `_getMetaData(PHXSimpleTypev)`<br>Worker which takes the meta data from an instance of PHXSimpleType and sets it into our meta data. |
| `protected void` | `_setMetaData()`<br>Call this function to set the meta data from this object into every element of the array. |
| `protected void` | `_setMetaData(PHXSimpleTypev)`<br>Sets a simple type's meta data based on the meta data in this object. |
| `protected java.lang.Object` | `allocateElement(java.lang.Class elementClass)`<br>Allocates a single element in a default state. |
| `static boolean` | `checkRectangular(java.lang.Object obj)`<br>Check if the array is rectangular |
| `protected void` | `copy(PHXSimpleArrayother)`<br>Clone another PHXSimpleArray's value and metadata. |
| `protected abstract boolean` | `dataTypeOK(java.lang.Class c)`<br>Must override this function and return true if the specified class is acceptable as an array element component type. |
| `protected abstract java.lang.Object` | `elementFromString(java.lang.String value)`<br>Sub-classes must provide an implementation of this function which converts a string form of a single element to Object form. |
| `boolean` | `equalsNatural(PHXSimpleTypetoCompare)`<br>Compare this PHXSimpleType to another PHXSimpleType. |
| `void` | `fromString(int[] index,PHXStringBuffervalue)`<br>Sets the value of a single element based on string input. |
| `void` | `fromString(int[] index, java.lang.String value)`<br>Sets the value of a single element based on string input. |
| `void` | `fromString(int index, java.lang.String value)`<br>Sets the value of a single element based on string input for 1-d arrays. |
| `void` | `fromString(java.lang.String in)`<br>reads in the entire array in string form. |
| `void` | `fromString2(PHXStringBufferin)`<br>reads in the entire array in string form. |
| `staticPHXSimpleArray` | `generateFor(java.lang.Object o)`<br>Static method to generate a new instance of one of the sub-classes of PHXSimpleArray as appropriate for the type of variable passed in. |
| `staticPHXSimpleArray` | `generateFor(java.lang.Object o, java.lang.Class c)`<br>Static method to generate a new instance of one of the sub-classes of PHXSimpleArray as appropriate for the type of variable passed in. |
| `java.lang.Object` | `getArray()`<br>Gets the entire contents of the array |
| `java.lang.Object` | `getArrayElement(int index)`<br>Gets a particular element from a 1-d array |
| `java.lang.Object` | `getArrayElement(int[] index)`<br>Gets a particular element from the array |
| `java.lang.Class` | `getComponentType()`<br>Returns the component type of the array wrapped with this class |
| `static java.lang.Class` | `getComponentType(java.lang.Object v)`<br>Gets the component type of an array, even for n-d arrays. |
| `int[]` | `getDimensions()` |
| `static int[]` | `getDimensions(java.lang.Object array)`<br>Gets the array of dimensions of the array |
| `java.lang.Object` | `getFirst()`<br>Returns the first element of the array, or throws `ArrayIndexOutOfBounds` if there are no elements. |
| `int` | `getLength()`<br>Gets the length of the first dimension of the array |
| `int` | `getLength(int dim)`<br>Gets the length of a dimension of the array |
| `boolean` | `getLockResize()` |
| `protected int[]` | `getnDIndex(long oneDIndex, int[] actualSize)` |
| `int` | `getNumDimensions()`<br>Gets the number of dimensions of the array |
| `static int` | `getNumDimensions(java.lang.Object o)` |
| `PHXSimpleArray` | `getSelf()` |
| `T` | `getValue(int index)`<br>Gets an element as PHXSimpleType object of the appropriate subtype |
| `abstractT` | `getValue(int[] index)`<br>Gets the value of an element as an object of the appropriate subtype Must be overridden in subclasses |
| `static boolean` | `incrementIndex(int[] index, int[] size)`<br>Utility function for incrementing an nD index on the array |
| `java.util.Iterator<T>` | `iterator()`<br>Returns an iterator that loops over the array in the standard order, rightmost index varies fastest. |
| `void` | `lockDimensions()`<br>Tells this array that the number of dimensions cannot be changed from what they are right now. |
| `int[]` | `newIndex()`<br>Produces a new index based zeroed out, but with the proper dimensions |
| `static int[]` | `parseIndex(java.lang.String index)`<br>Takes a string of the form "anything[n, n2, n3]" or "n, n2, n3" and returns an int[] of the index values. |
| `void` | `resize(int[] newSize)`<br>Resize the nD array to the new size specified. |
| `void` | `setArray(java.lang.Object v)`<br>Sets the entire array. |
| `void` | `setArrayElement(int[] index, java.lang.Object v)`<br>Sets a particular element of the array |
| `void` | `setArrayElement(int index, java.lang.Object v)`<br>Sets a particular element of a 1-d array |
| `void` | `setDimensions(int[] dim)`<br>Sets the dimensions of the array. |
| `void` | `setFirst(java.lang.Object val)`<br>Sets the first element of the array, or throws `ArrayIndexOutOfBounds` if there are no elements. |
| `void` | `setLength(int len)`<br>Sets the length of the first dimension of the array. |
| `void` | `setLength(int len, int dim)`<br>Sets the length of a dimensions of the array. |
| `void` | `setLockResize(boolean lockResize)`<br>Tells this array that it cannot be resized. |
| `abstract void` | `setValue(int[] index,Tval)`<br>Sets an element as an object of the appropriate PHXSimpleType. Must be overridden in subclasses |
| `void` | `setValue(int index,Tval)`<br>Sets an element as an object of the appropriate PHXSimpleType |
| `java.lang.String` | `toString()`<br>Returns the string form of this array. |
| `java.lang.String` | `toString(int index)`<br>Converts a single element of a 1-d array to a string |
| `java.lang.String` | `toString(int[] index)`<br>Converts a single element to a string |
| `java.lang.String` | `toString(java.lang.String index)`<br>Converts a single element to a string |
| `PHXStringBuffer` | `toString2()`<br>Returns the string form of this array. |
| `PHXStringBuffer` | `toString2(int[] index)`<br>Converts a single element to a string |
| `PHXStringBuffer` | `toString2(java.lang.String index)`<br>Converts a single element to a string |
| `boolean` | `validElement(int[] index, int[] size)`<br>Is the given index valid? |

### Methods inherited from class com.phoenix_int.aserver.types.[PHXSimpleType](PHXSimpleType.md)
`_copyMetadataFromOther`, `addPropertyChangeListener`, `createCopy`, `fromObject`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`, `removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

### Methods inherited from interface com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md)
`Accept`

### Methods inherited from interface java.lang.Iterable
`forEach, spliterator`

## Field Detail

### _data

```java
protected java.lang.Object _data
```

### _lockDims

```java
protected boolean _lockDims
```

### _lockResize

```java
protected boolean _lockResize
```

## Constructor Detail

### PHXSimpleArray

```java
protected PHXSimpleArray(java.lang.Object data)
```
Constructs a PHXSimpleArray that wraps a particular ModelCenter Remote Execution style variable.

**Parameters:**
- `data`- The ModelCenter Remote Execution variable to wrap, which must
 be an array.

### PHXSimpleArray

```java
protected PHXSimpleArray()
```
Default Constructor
============ METHOD DETAIL ==========
### Method Detail

### copy

```java
protected void copy(PHXSimpleArray other)
```
Clone another PHXSimpleArray's value and metadata.

**Parameters:**
- `other`- the other PHXSimpleArray to clone.

### lockDimensions

```java
public void lockDimensions()
```
Tells this array that the number of dimensions cannot be changed from what they are right now.

### setLockResize

```java
public void setLockResize(boolean lockResize)
```
Tells this array that it cannot be resized.  Implies `lockDimensions`.

### getLockResize

```java
public boolean getLockResize()
```

### _getMetaData

```java
protected void _getMetaData()
```
Gets the meta data off of the first element of the array and sets it into our meta data info.  Call this from base classes in the constructor and after anything that might change the meta information on the first array element.

### _getMetaData

```java
protected void _getMetaData(PHXSimpleType v)
```
Worker which takes the meta data from an instance of PHXSimpleType and sets it into our meta data.  Override this in order to add more custom meta data in sub-classes.  Be sure to call `super._getMetaData(PHXSimpleType)`, though!

### dataTypeOK

```java
protected abstract boolean dataTypeOK(java.lang.Class c)
```
Must override this function and return true if the specified class is acceptable as an array element component type.

### resize

```java
public void resize(int[] newSize)
            throws java.lang.IllegalAccessException,
                   java.lang.InstantiationException
```
Resize the nD array to the new size specified.  Preserve elements if the # of dimensions stays the same, else initialize the array with default values.

**Parameters:**
- `newSize`- new dimensions for the array

**Throws:**
- `java.lang.IllegalAccessException`- if an error occurs allocating new array size
- `java.lang.InstantiationException`- if an error occurs allocating new array size

### getFirst

```java
public java.lang.Object getFirst()
```
Returns the first element of the array, or throws `ArrayIndexOutOfBounds` if there are no elements.

### setFirst

```java
public void setFirst(java.lang.Object val)
```
Sets the first element of the array, or throws `ArrayIndexOutOfBounds` if there are no elements.

### getLength

```java
public int getLength()
```
Gets the length of the first dimension of the array

### getLength

```java
public int getLength(int dim)
```
Gets the length of a dimension of the array

**Parameters:**
- `dim`- the dimension of interest

**Returns:**
- the size of the dimension

### setLength

```java
public void setLength(int len)
               throws java.lang.IllegalAccessException,
                      java.lang.InstantiationException
```
Sets the length of the first dimension of the array. Will preserve as many element values as possible.

**Parameters:**
- `len`- the new length of the 1D array

**Throws:**
- `java.lang.IllegalArgumentException`- thrown if arguments are incorrect or don't jive with the current array
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`

### setLength

```java
public void setLength(int len,
                      int dim)
               throws java.lang.IllegalAccessException,
                      java.lang.InstantiationException
```
Sets the length of a dimensions of the array. You may grow the array by 1 dimension if 'dim' is the next dim that needs defining.  You may shorten the array by passing in 'len' < 0 and 'dim' as the first dimension after the valid dimensions.

**Parameters:**
- `len`- the new length of the dimension.
- `dim`- the dimension to change

**Throws:**
- `java.lang.IllegalArgumentException`- thrown if arguments are incorrect or don't jive with the current array
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`

### getDimensions

```java
public static int[] getDimensions(java.lang.Object array)
```
Gets the array of dimensions of the array

**Returns:**
- the array with the dimensions

### getDimensions

```java
public int[] getDimensions()
```

### setDimensions

```java
public void setDimensions(int[] dim)
                   throws java.lang.IllegalAccessException,
                          java.lang.InstantiationException
```
Sets the dimensions of the array.  Will preserve as many element values as possible.

**Parameters:**
- `dim`- the new dimensions for the array

**Throws:**
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`

### getNumDimensions

```java
public static int getNumDimensions(java.lang.Object o)
```

### getNumDimensions

```java
public int getNumDimensions()
```
Gets the number of dimensions of the array

### fromString

```java
public void fromString(int index,
                       java.lang.String value)
```
Sets the value of a single element based on string input for 1-d arrays.  Data is converted as appropriate.

**Parameters:**
- `index`- Which element to set.
- `value`- The new value.

### fromString

```java
public void fromString(int[] index,
                       PHXStringBuffer value)
```
Sets the value of a single element based on string input.  Data is converted as appropriate.

**Parameters:**
- `index`- Which element to set.
- `value`- The new value.

### fromString

```java
public void fromString(int[] index,
                       java.lang.String value)
```
Sets the value of a single element based on string input.  Data is converted as appropriate.

**Parameters:**
- `index`- Which element to set.
- `value`- The new value.

### elementFromString

```java
protected abstract java.lang.Object elementFromString(java.lang.String value)
```
Sub-classes must provide an implementation of this function which converts a string form of a single element to Object form.  This is only used when the element type does not implement [IPHXType](IPHXType.md) or [IPHXType2](IPHXType2.md).  For primitives, return the wrapper objects.

### toString

```java
public java.lang.String toString(int index)
```
Converts a single element of a 1-d array to a string

**Parameters:**
- `index`- the index of the desired element

**Returns:**
- the desired element, in string form

### parseIndex

```java
public static int[] parseIndex(java.lang.String index)
```
Takes a string of the form "anything[n, n2, n3]" or "n, n2, n3" and returns an int[] of the index values.

### toString

```java
public java.lang.String toString(java.lang.String index)
```
Converts a single element to a string

**Parameters:**
- `index`- the index of the desired element

**Returns:**
- the desired element, in string form

### toString2

```java
public PHXStringBuffer toString2(java.lang.String index)
                          throws java.io.IOException
```
Converts a single element to a string

**Parameters:**
- `index`- the index of the desired element

**Returns:**
- the desired element, in string form

**Throws:**
- `java.io.IOException`

### toString

```java
public java.lang.String toString(int[] index)
```
Converts a single element to a string

**Parameters:**
- `index`- the index of the desired element

**Returns:**
- the desired element, in string form

### toString2

```java
public PHXStringBuffer toString2(int[] index)
                          throws java.io.IOException
```
Converts a single element to a string

**Parameters:**
- `index`- the index of the desired element

**Returns:**
- the desired element, in string form

**Throws:**
- `java.io.IOException`

### getArrayElement

```java
public java.lang.Object getArrayElement(int index)
```
Gets a particular element from a 1-d array

**Parameters:**
- `index`- the 1D array index into the 1D array

**Returns:**
- the specified element

**Throws:**
- `java.lang.IllegalArgumentException`- thrown if 1D reference is given to a >1D array

### getArrayElement

```java
public java.lang.Object getArrayElement(int[] index)
```
Gets a particular element from the array

**Parameters:**
- `index`- the 1D array index into the 1D array

**Returns:**
- the specified element

**Throws:**
- `java.lang.IllegalArgumentException`- thrown if 1D reference is given to a >1D array

### setArrayElement

```java
public void setArrayElement(int index,
                            java.lang.Object v)
```
Sets a particular element of a 1-d array

**Parameters:**
- `index`- Which index to set
- `v`- The new value.  Note that this takes an instance of a PHXType.

### setArrayElement

```java
public void setArrayElement(int[] index,
                            java.lang.Object v)
```
Sets a particular element of the array

**Parameters:**
- `index`- Which index to set
- `v`- The new value.  Note that this takes an instance of a PHXType.

### getArray

```java
public java.lang.Object getArray()
```
Gets the entire contents of the array

**Returns:**
- the base array object

### setArray

```java
public void setArray(java.lang.Object v)
```
Sets the entire array.  Array is checked for validity and rectangularity.  `_getMetaData()` is called.

**Parameters:**
- `v`- the new array (nD)

**Throws:**
- `java.lang.IllegalArgumentException`- thrown if array passed in is not rectangular

### getSelf

```java
public PHXSimpleArray getSelf()
```

### checkRectangular

```java
public static boolean checkRectangular(java.lang.Object obj)
```
Check if the array is rectangular

**Parameters:**
- `obj`- the array to check

**Returns:**
- is the array rectangular?

**Throws:**
- `java.lang.NullPointerException`- thrown if one of the values in the array is null

### getComponentType

```java
public static java.lang.Class getComponentType(java.lang.Object v)
```
Gets the component type of an array, even for n-d arrays.

**Parameters:**
- `v`- The array to get the component type for

### getComponentType

```java
public java.lang.Class getComponentType()
```
Returns the component type of the array wrapped with this class

### generateFor

```java
public static PHXSimpleArray generateFor(java.lang.Object o)
                                  throws java.lang.IllegalArgumentException
```
Static method to generate a new instance of one of the sub-classes of PHXSimpleArray as appropriate for the type of variable passed in.

**Throws:**
- `java.lang.IllegalArgumentException`

### generateFor

```java
public static PHXSimpleArray generateFor(java.lang.Object o,
                                         java.lang.Class c)
                                  throws java.lang.IllegalArgumentException
```
Static method to generate a new instance of one of the sub-classes of PHXSimpleArray as appropriate for the type of variable passed in.  If 'o' is null, a new 0 length array will be generated based on 'c' as the component type.

**Throws:**
- `java.lang.IllegalArgumentException`

### fromString

```java
public void fromString(java.lang.String in)
```
reads in the entire array in string form.
bounds[3,2] { 1,2,3,4,5,6 }

**Specified by:**
- `fromString` in interface [`IPHXType`](IPHXType.md)

**Parameters:**
- `in`- the value of the variable

### fromString2

```java
public void fromString2(PHXStringBuffer in)
```
reads in the entire array in string form. `bounds[3,2] { 1,2,3,4,5,6 }`

**Specified by:**
- `fromString2` in interface [`IPHXType2`](IPHXType2.md)

**Parameters:**
- `in`- representation of the type to use

### toString

```java
public java.lang.String toString()
```
Returns the string form of this array. Puts each element in quotes, even if it is a number and backslashes any quote or backslash characters (" and \\).

**Specified by:**
- `toString` in interface [`IPHXType`](IPHXType.md)

**Overrides:**
- `toString`in class`java.lang.Object`

**Returns:**
- the value as a String

### toString2

```java
public PHXStringBuffer toString2()
```
Returns the string form of this array. Puts each element in quotes, even if it is a number and backslashes any quote or backslash characters (" and \\).

**Specified by:**
- `toString2` in interface [`IPHXType2`](IPHXType2.md)

**Returns:**
- PHXStringBuffer representation of the type

### incrementIndex

```java
public static boolean incrementIndex(int[] index,
                                     int[] size)
```
Utility function for incrementing an nD index on the array

**Parameters:**
- `index`- the index to increment
- `size`- the maximum size of the array

**Returns:**
- did the incrment work?

**Throws:**
- `java.lang.IllegalArgumentException`- thrown if index lengths don't match

### newIndex

```java
public int[] newIndex()
```
Produces a new index based zeroed out, but with the proper dimensions

**Returns:**
- the new index

### validElement

```java
public boolean validElement(int[] index,
                            int[] size)
```
Is the given index valid?

**Parameters:**
- `index`- the index to check
- `size`- the maximum size

**Returns:**
- is the given index valid?

### allocateElement

```java
protected java.lang.Object allocateElement(java.lang.Class elementClass)
                                    throws java.lang.IllegalAccessException,
                                           java.lang.InstantiationException
```
Allocates a single element in a default state. If the class type in question has a default constructor, there is no need to override this.

**Throws:**
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`

### _setMetaData

```java
protected void _setMetaData(PHXSimpleType v)
```
Sets a simple type's meta data based on the meta data in this object.  Override this to set additional information in sub-classes.  Be sure to call `super._setMetaData(PHXSimpleType)`.

### _setMetaData

```java
protected void _setMetaData()
```
Call this function to set the meta data from this object into every element of the array.

### getnDIndex

```java
protected int[] getnDIndex(long oneDIndex,
                           int[] actualSize)
                    throws java.lang.IllegalArgumentException
```


**Throws:**
- `java.lang.IllegalArgumentException`

### getValue

```java
public T getValue(int index)
```
Gets an element as PHXSimpleType object of the appropriate subtype

**Parameters:**
- `index`- 1D array index

**Returns:**
- referenced array value

**Throws:**
- `java.lang.IllegalArgumentException`- thrown if called on non-1D array

### setValue

```java
public void setValue(int index,
                     T val)
```
Sets an element as an object of the appropriate PHXSimpleType

**Parameters:**
- `index`- 1D array index
- `val`- value to set

### getValue

```java
public abstract T getValue(int[] index)
```
Gets the value of an element as an object of the appropriate subtype. Must be overridden in subclasses

**Parameters:**
- `index`- nD array index

**Returns:**
- referenced array value

### iterator

```java
public java.util.Iterator<T> iterator()
```
Returns an iterator that loops over the array in the standard PHX order, rightmost index varies fastest. Note that the iterator returned is not thread safe. It also has undefined behavior if the array is modified while iterating over the array. It does not support `Iterator.remove()`. Lastly, the iterator returned may throw exceptions other than `NoSuchElementException`, such as `IndexOutOfBoundsException`.

**Specified by:**
- `iterator` in interface `java.lang.Iterable<TextendsPHXSimpleType>`

**See Also:**
- `Iterable`

### setValue

```java
public abstract void setValue(int[] index,
                              T val)
```
Sets an element as an object of the appropriate PHXSimpleType. Must be overridden in subclasses

**Parameters:**
- `index`- nD array index
- `val`- value to set

### equalsNatural

```java
public boolean equalsNatural(PHXSimpleType toCompare)
                      throws PHXTypeMismatchException
```
Compare this PHXSimpleType to another PHXSimpleType. This type of comparison is different than `Comparable` in that it does a natural comparison between numbers. It is not designed, nor suited, for use in things such as sets, and may behave oddly if put in those circumstances.
 
 Array comparison is handled as follows: 

 1) Compare the number of dimensions between the two arrays
 2) Compare the length of dimensions between the two arrays
 3) Compare the values in each of the two arrays

 If these three conditions are met, the two arrays are considered naturally equal.

**Specified by:**
- `equalsNatural`in class`PHXSimpleType`

**Parameters:**
- `toCompare`-

**Returns:**
- a negative number if this object is less than `toCompare`, a positive number if this object is greater than `toCompare`, and zero if these two objects are equal.

**Throws:**
- `PHXTypeMismatchException`- if the given PHXSimpleType cannot be compared with this object.
