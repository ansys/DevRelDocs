# Class PHXLongArray

**Package:** `com.phoenix_int.aserver.types`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXSimpleType
    ↳ com.phoenix_int.aserver.types.PHXSimpleArray<PHXLong>
      ↳ com.phoenix_int.aserver.types.PHXLongArray
```
**All Implemented Interfaces:**
- [`IPHXFormat`](IPHXFormat.md), [`IPHXType`](IPHXType.md), [`IPHXType2`](IPHXType2.md), [`IPHXUnits`](IPHXUnits.md), java.lang.Iterable<[`PHXLong`](PHXLong.md)>

---

```
public class PHXLongArray
extends PHXSimpleArray<PHXLong>
implements IPHXFormat
```
Class wraps an array of [`PHXLong`](PHXLong.md) variables for the ScriptWrapper utility.

**See Also:**
- [`PHXSimpleArray`](PHXSimpleArray.md) 

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md)
`IPHXType2.IVisitor<T>`

## Field Summary

### Fields inherited from class com.phoenix_int.aserver.types.[PHXSimpleArray](PHXSimpleArray.md)
`_data`, `_lockDims`, `_lockResize`

## Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXLongArray()` |
| `PHXLongArray(java.lang.Object data)` |
| `PHXLongArray(PHXLongArrayother)`<br>Clone another PHXLongArray's value and metadata. |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `_getMetaData(PHXSimpleTypev2)`<br>Worker which takes the meta data from an instance of PHXSimpleType and sets it into our meta data. |
| `protected void` | `_setMetaData(PHXSimpleTypev2)`<br>Sets a simple type's meta data based on the meta data in this object. |
| `void` | `_sort(PHXLongArrayarray, boolean ascend)` |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`<br>Accept a Visitor. |
| `protected java.lang.Object` | `allocateElement(java.lang.Class elementClass)`<br>Allocates a single element in a default state. |
| `PHXLongArray` | `createCopy()`<br>Create a copy of this instance, including the value and metadata. |
| `protected boolean` | `dataTypeOK(java.lang.Class c)<br>`Must override this function and return true if the specified class is acceptable as an array element component type. |
| `protected java.lang.Object` | `elementFromString(java.lang.String val)`<br>Sub-classes must provide an implementation of this function which converts a string form of a single element to Object form. |
| `void` | `fromObject(java.lang.Object toRead)`<br>Load the value of this object from the specified object. |
| `double` | `getAvg()` |
| `java.lang.String[]` | `getEnumAliases()`<br>An interface function for the enumeration array |
| `java.lang.String` | `getEnumAliasesStr()`<br>An interface function for the enumeration array |
| `long[]` | `getEnumValues()`<br>An interface function for the enumeration array |
| `java.lang.String` | `getEnumValuesStr()`<br>Interface function to pass out the enumeration array as a comma separated string |
| `java.lang.String` | `getFormat()`<br>Get the format string for the variable |
| `boolean` | `getHasLowerBound()`<br>retrieves the hasLowerBound flag |
| `boolean` | `getHasUpperBound()`<br>retrieves the hasUpperBound flag |
| `long` | `getLongValue(int index)`<br>Gets the value of an element as a long |
| `long` | `getLongValue(int[] index)`<br>Gets the value of an element as a long |
| `long` | `getLowerBound()`<br>retrieves the current lower bound value |
| `long` | `getMax()` |
| `long` | `getMin()` |
| `long` | `getUpperBound()`<br>retrieves the current upper bound value |
| `PHXLong` | `getValue(int index)`<br>Gets the value of an element as a PHXLong object |
| `PHXLong` | `getValue(int[] index)`<br>Gets the value of an element as a PHXLong object |
| `boolean` | `hasFormat()`<br>Whether or not the variable has a format |
| `void` | `setEnumAliases(java.lang.String values)`<br>takes a comma seperated string of values and fills the enumeration aliases list with values. |
| `void` | `setEnumAliases(java.lang.String[] values)`<br>Sets the enumeration aliases list |
| `void` | `setEnumValues(long[] values)`<br>sets the possible values a variable may be |
| `void` | `setEnumValues(java.lang.String values)`<br>takes a comma seperated string of values and fills the enumeration List with values. |
| `void` | `setFormat(java.lang.String format)`<br>Set the format string for the variable |
| `void` | `setHasLowerBound(boolean value)`<br>sets the hasLowerBound flag |
| `void` | `setHasUpperBound(boolean value)`<br>sets the hasUpperBound flag |
| `void` | `setLowerBound(long value)`<br>sets the lower bound. |
| `void` | `setUpperBound(long value)`<br>sets the upper bound. |
| `void` | `setValue(int[] index, long val)`<br>Sets the value of an element as a PHXLong object |
| `void` | `setValue(int[] index,PHXLongval)`<br>Sets the value of an element as a PHXLong object |
| `void` | `setValue(int index,long val)`<br>Sets the value of an element as a PHXLong object |
| `void` | `sort()` |
| `void` | `sortReverse()` |

### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleArray
`_getMetaData`, `_setMetaData`, `checkRectangular`, `copy`, `equalsNatural`, `fromString`, `fromString`, `fromString`, `fromString`, `fromString2`, `generateFor`, `generateFor`, `getArray`, `getArrayElement`, `getArrayElement`, `getComponentType`, `getComponentType`, `getDimensions`, `getDimensions`, `getFirst`, `getLength`, `getLength`, `getLockResize`, `getnDIndex`, `getNumDimensions`, `getNumDimensions`, `getSelf`, `incrementIndex`, `iterator`, `lockDimensions`, `newIndex`, `parseIndex`, `resize`, `setArray`, `setArrayElement`, `setArrayElement`, `setDimensions`, `setFirst`, `setLength`, `setLength`, `setLockResize`, `setValue`, `toString`, `toString`, `toString`, `toString`, `toString2`, `toString2`, `toString2`, `validElement``

### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleType
`_copyMetadataFromOther`, `addPropertyChangeListener`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`, `removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

### Methods inherited from interface java.lang.Iterable
`forEach`, `spliterator`

## Constructor Detail

### PHXLongArray

```
public PHXLongArray()
```

### PHXLongArray

```
public PHXLongArray(java.lang.Object data)
```

### PHXLongArray

```
public PHXLongArray(PHXLongArray other)
```
Clone another [`PHXLongArray`](PHXLongArray.md)'s value and metadata.

**Parameters:**
- `other` - the other [`PHXLongArray`](PHXLongArray.md) to clone.

## Method Detail

### dataTypeOK

```
protected boolean dataTypeOK(java.lang.Class c)
```
Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md)

Must override this function and return true if the specified class is acceptable as an array element component type.

**Specified by:**
- `dataTypeOK` in class `PHXSimpleArray<PHXLong>`

### allocateElement

```
protected java.lang.Object allocateElement(java.lang.Class elementClass)
                                    throws java.lang.IllegalAccessException,
                                           java.lang.InstantiationException
```
Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md)

Allocates a single element in a default state. If the class type in question has a default constructor, there is no need to override this.

**Overrides:**
- `allocateElement` in class [`PHXSimpleArray`](PHXSimpleArray.md)`<`[`PHXLong`](PHXLong.md)`>`

**Throws:**
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`

### setUpperBound

```
public void setUpperBound(long value)
```
sets the upper bound. The `hasUpperBound` value is set to `true`

**Parameters:**
- `value` - the upper bound

### getUpperBound

```
public long getUpperBound()
```
retrieves the current upper bound value

**Returns:**
- the upper bound

**Throws:**
- `java.lang.IllegalStateException` - Thrown if there is no upper bound defined.

### setLowerBound

```
public void setLowerBound(long value)
```
sets the lower bound. The `hasLowerBound` value is set to `true`

**Parameters:**
- `value` - the lower bound

### getLowerBound

```
public long getLowerBound()
```
retrieves the current lower bound value

**Returns:**
- the lower bound

### setHasUpperBound

```
public void setHasUpperBound(boolean value)
```
sets the `hasUpperBound` flag

**Parameters:**
- `value` - true or false

### getHasUpperBound

```
public boolean getHasUpperBound()
```
retrieves the `hasUpperBound` flag

**Returns:**
- true or false

### setHasLowerBound

```
public void setHasLowerBound(boolean value)
```
sets the `hasLowerBound` flag

**Parameters:**
- `value` - true or false

### getHasLowerBound

```
public boolean getHasLowerBound()
```
retrieves the `hasLowerBound` flag

**Returns:**
- true or false

### setEnumValues

```
public void setEnumValues(java.lang.String values)
```
takes a comma seperated string of values and fills the enumeration List with values.

**Parameters:**
- `values` - A comma seperated string of enumeration values

### setEnumValues

```
public void setEnumValues(long[] values)
```
sets the possible values a variable may be

**Parameters:**
- `values` - Array of longs which represents valid values

### getEnumValues

```
public long[] getEnumValues()
```
An interface function for the enumeration array

**Returns:**
- an array of the possible values of the list

### getEnumValuesStr

```
public java.lang.String getEnumValuesStr()
```
Interface function to pass out the enumeration array as a comma separated string

**Returns:**
- comma separated string of the possible values of the list

### setEnumAliases

```
public void setEnumAliases(java.lang.String values)
```
takes a comma seperated string of values and fills the enumeration aliases list with values.

**Parameters:**
- `values` - A comma seperated string of enumeration aliases

### setEnumAliases

```
public void setEnumAliases(java.lang.String[] values)
```
Sets the enumeration aliases list

**Parameters:**
- `values` - An array of strings

### getEnumAliases

```
public java.lang.String[] getEnumAliases()
```
An interface function for the enumeration array

**Returns:**
- an array of the possible values of the list

### getEnumAliasesStr

```
public java.lang.String getEnumAliasesStr()
```
An interface function for the enumeration array

**Returns:**
- an comma separated string of the possible values of the list

### setFormat

```
public void setFormat(java.lang.String format)
```
Set the format string for the variable

**Specified by:**
- `setFormat` in interface [`IPHXFormat`](IPHXFormat.md)

**Parameters:**
- `format` - format string

### getFormat

```
public java.lang.String getFormat()
```
Get the format string for the variable

**Specified by:**
- `getFormat` in interface [`IPHXFormat`](IPHXFormat.md)

**Returns:**
- format string

### hasFormat

```
public boolean hasFormat()
```
Description copied from interface: [`IPHXFormat`](IPHXFormat.md)

Whether or not the variable has a format

**Specified by:**
- `hasFormat` in interface [`IPHXFormat`](IPHXFormat.md)

**Returns:**
- `true` if variable has a format

### _setMetaData

```
protected void _setMetaData(PHXSimpleType v2)
```
Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md)

Sets a simple type's meta data based on the meta data in this object.  Override this to set additional information in sub-classes.  Be sure to call `super._setMetaData(PHXSimpleType)`.

**Overrides:**
- `_setMetaData` in class [`PHXSimpleArray`](PHXSimpleArray.md)`<`[`PHXLong`](PHXLong.md)`>`

### _getMetaData

```
protected void _getMetaData(PHXSimpleType v2)
```
Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md)

Worker which takes the meta data from an instance of PHXSimpleType and sets it into our meta data.  Override this in order to add more custom meta data in sub-classes.  Be sure to call `super._getMetaData(PHXSimpleType)`, though!

**Overrides:**
- `_getMetaData` in class [`PHXSimpleArray`](PHXSimpleArray.md)`<`[`PHXLong`](PHXLong.md)`>`

### getValue

```
public PHXLong getValue(int index)
```
Gets the value of an element as a [`PHXLong`](PHXLong.md) object

**Overrides:**
- `getValue` in class [`PHXSimpleArray`](PHXSimpleArray.md)`<`[`PHXLong`](PHXLong.md)`>`

**Parameters:**
- `index` - 1D array index

**Returns:**
- referenced array value

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if called on non-1D array

### getValue

```
public PHXLong getValue(int[] index)
```
Gets the value of an element as a [`PHXLong`](PHXLong.md) object

**Specified by:**
- `getValue` in class [`PHXSimpleArray`](PHXSimpleArray.md)`<`[`PHXLong`](PHXLong.md)`>`

**Parameters:**
- `index` - nD array index

**Returns:**
- referenced array value

### getLongValue

```
public long getLongValue(int index)
```
Gets the value of an element as a long

**Parameters:**
- `index` - 1D array index

**Returns:**
- referenced array value

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if called on non-1D array

### getLongValue

```
public long getLongValue(int[] index)
```
Gets the value of an element as a long

**Parameters:**
- `index` - 1D array index

**Returns:**
- referenced array value

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if called on non-1D array

### setValue

```
public void setValue(int[] index,
                     PHXLong val)
```
Sets the value of an element as a [`PHXLong`](PHXLong.md) object

**Specified by:**
- `setValue` in class [`PHXSimpleArray`](PHXSimpleArray.md)`<`[`PHXLong`](PHXLong.md)`>`

**Parameters:**
- `index` - 1D array index
- `val` - value to set

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if called on non-1D array

### setValue

```
public void setValue(int index,
                     long val)
```
Sets the value of an element as a PHXLong object

**Parameters:**
- `index` - 1D array index
- `val` - value to set

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if called on non-1D array

### setValue

```
public void setValue(int[] index,
                     long val)
```
Sets the value of an element as a PHXLong object

**Parameters:**
- `index` - 1D array index
- `val` - value to set

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if called on non-1D array

### elementFromString

```
protected java.lang.Object elementFromString(java.lang.String val)
```
Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md)

Sub-classes must provide an implementation of this function which converts a string form of a single element to Object form.  This is only used when the element type does not implement IPHXType or IPHXType2.  For primitives, return the wrapper objects.

**Specified by:**
- `elementFromString` in class [`PHXSimpleArray`](PHXSimpleArray.md)`<`[`PHXLong`](PHXLong.md)`>`

### getMax

```
public long getMax()
```

### getMin

```
public long getMin()
```

### getAvg

```
public double getAvg()
```

### sortReverse

```
public void sortReverse()
```

### sort

```
public void sort()
```

### _sort

```
public void _sort(PHXLongArray array,
                  boolean ascend)
```

### fromObject

```
public void fromObject(java.lang.Object toRead)
                throws PHXInvalidTypeException
```
Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md)

NOTE: while it might be logical to think you can create a `PHX(Type)Array` from, say, an array of `java.lang.(Type)`, that is not currently supported. You MUST use the PHX string array formatting style.

**Specified by:**
- `fromObject` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toRead` - to object from which to load this objects value.

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md)- if the specified object is of an invalid type or there is an error in conversion.

### Accept

```
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

```
public PHXLongArray createCopy()
```
Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class [`PHXSimpleType`](PHXSimpleType.md)

**Returns:**
- a newly constructed copy of this instance.
