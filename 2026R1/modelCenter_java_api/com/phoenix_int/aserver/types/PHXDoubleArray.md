# Class: PHXDoubleArray

**Package:** `com.phoenix_int.aserver.types`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ [PHXSimpleType](PHXSimpleType.md)
    ↳ [PHXSimpleArray](PHXSimpleArray.md)<[PHXDouble](PHXDouble.md)>
      ↳ PHXDoubleArray
```

**Implemented Interfaces**

- [IPHXFormat](IPHXFormat.md), [IPHXType](IPHXType.md), [IPHXType2](IPHXType2.md), [IPHXUnits](IPHXUnits.md), java.lang.Iterable<[PHXDouble](PHXDouble.md)>

--- 

**Declaration**

```java
public class PHXDoubleArray
extends PHXSimpleArray<PHXDouble>
implements IPHXFormat
```

Class wraps an array of [PHXDouble](PHXDouble.md) variables for the ScriptWrapper utility.

## Nested Class Summary

### Nested classes/interfaces inherited from interface [IPHXType2](IPHXType2.md)
`IPHXType2.IVisitor<T>`

## Field Summary

### Fields inherited from class [PHXSimpleArray](PHXSimpleArray.md)
`_data`, `_lockDims`, `_lockResize`

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXDoubleArray()` |
| `PHXDoubleArray(java.lang.Object data)` |
| `PHXDoubleArray(PHXDoubleArray other)`<br>Clone another PHXDoubleArray's value and metadata. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `protected void` | `_getMetaData([PHXSimpleType](PHXSimpleType.md) v2)`<br>Worker which takes the meta data from an instance of [PHXSimpleType](PHXSimpleType.md) and sets it into our meta data. |
| `protected void` | `_setMetaData([PHXSimpleType](PHXSimpleType.md) v2)`<br>Sets a simple type's meta data based on the meta data in this object. |
| `void` | `_sort(PHXDoubleArray array`, `boolean ascend)` |
| `<T> T` | `Accept([IPHXType2](IPHXType2.md).IVisitor<T> visitor)`<br>Accept a Visitor. |
| `protected java.lang.Object` | `allocateElement(java.lang.Class elementClass)`<br>Allocates a single element in a default state. |
| `PHXDoubleArray` | `createCopy()`<br>Create a copy of this instance, including the value and metadata. |
| `protected boolean` | `dataTypeOK(java.lang.Class c)`<br>Must override this function and return true if the specified class is acceptable as an array element component type. |
| `protected java.lang.Object` | `elementFromString(java.lang.String val)`<br>Sub-classes must provide an implementation of this function which converts a string form of a single element to Object form. |
| `void` | `fromObject(java.lang.Object toRead)`<br>Load the value of this object from the specified object. |
| `double` | `getAvg()` |
| `double` | `getDoubleValue(int index)`<br>Gets an element as a double. |
| `double` | `getDoubleValue(int[] index)`<br>Gets an element as a double. |
| `java.lang.String[]` | `getEnumAliases()`<br>An interface function for the enumeration array. |
| `java.lang.String` | `getEnumAliasesStr()`<br>An interface function for the enumeration array. |
| `double[]` | `getEnumValues()`<br>An interface function for the enumeration array. |
| `java.lang.String` | `getEnumValuesStr()`<br>Interface function to pass out the enumeration array as a comma separated string. |
| `java.lang.String` | `getFormat()`<br>Get the format string for the variable. |
| `boolean` | `getHasLowerBound()`<br>Retrieves the `hasLowerBound` flag. |
| `boolean` | `getHasUpperBound()`<br>Retrieves the `hasUpperBound` flag. |
| `double` | `getLowerBound()`<br>Retrieves the current lower bound value. |
| `double` | `getMax()` |
| `double` | `getMin()` |
| `double` | `getUpperBound()`<br>Retrieves the current upper bound value. |
| `PHXDouble` | `getValue(int[] index)`<br>Gets an element as a [PHXDouble](PHXDouble.md) object. |
| `boolean` | `hasFormat()`<br>Whether or not the variable has a format. |
| `void` | `setEnumAliases(java.lang.String values)`<br>Takes a comma separated string of values and fills the enumeration aliases list with values. |
| `void` | `setEnumAliases(java.lang.String[] values)`<br>Sets the enumeration aliases list. |
| `void` | `setEnumValues(double[] values)`<br>Sets the enumeration list of valid values. |
| `void` | `setEnumValues(java.lang.String values)`<br>Takes a comma separated string of values and fills the enumeration List with values. |
| `void` | `setFormat(java.lang.String format)`<br>Set the format string for the variable. |
| `void` | `setHasLowerBound(boolean value)`<br>Sets the `hasLowerBound` flag. |
| `void` | `setHasUpperBound(boolean value)`<br>Sets the `hasUpperBound` flag. |
| `void` | `setLowerBound(double value)`<br>Sets the lower bound. |
| `void` | `setUpperBound(double value)`<br>Sets the upper bound. |
| `void` | `setValue(int[] index`, `double val)`<br>Sets an element as a double. |
| `void` | `setValue(int[] index`, `PHXDouble val)`<br>Sets an element as a [PHXDouble](PHXDouble.md) object. |
| `void` | `setValue(int index`, `double val)`<br>Sets an element as a double. |
| `void` | `sort()` |
| `void` | `sortReverse()` |

### Methods inherited from class [PHXSimpleArray](PHXSimpleArray.md)
`_getMetaData`, `_setMetaData`, `checkRectangular`, `copy`, `equalsNatural`, `fromString`, `fromString`, `fromString`, `fromString`, `fromString2`, `generateFor`, `generateFor`, `getArray`, `getArrayElement`, `getArrayElement`, `getComponentType`, `getComponentType`, `getDimensions`, `getDimensions`, `getFirst`, `getLength`, `getLength`, `getLockResize`, `getnDIndex`, `getNumDimensions`, `getNumDimensions`, `getSelf`, `getValue`, `incrementIndex`, `iterator`, `lockDimensions`, `newIndex`, `parseIndex`, `resize`, `setArray`, `setArrayElement`, `setArrayElement`, `setDimensions`, `setFirst`, `setLength`, `setLength`, `setLockResize`, `setValue`, `toString`, `toString`, `toString`, `toString`, `toString2`, `toString2`, `toString2`, `validElement`

### Methods inherited from class [PHXSimpleType](PHXSimpleType.md)
`_copyMetadataFromOther`, `addPropertyChangeListener`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`, `removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

### Methods inherited from interface java.lang.Iterable
`forEach`, `spliterator`

## Constructor Detail

### PHXDoubleArray

```java
public PHXDoubleArray()
```

### PHXDoubleArray

```java
public PHXDoubleArray(java.lang.Object data)
```

### PHXDoubleArray

```java
public PHXDoubleArray(PHXDoubleArray other)
```

**Parameters:**
- `other` - the other PHXDoubleArray to clone.

Clone another PHXDoubleArray's value and metadata.

## Method Detail

### dataTypeOK

```java
protected boolean dataTypeOK(java.lang.Class c)
```

Description copied from class: [PHXSimpleArray](PHXSimpleArray.md)

Must override this function and return true if the specified class is acceptable as an array element component type.

**Specified by:**
- `dataTypeOK` in class [PHXSimpleArray](PHXSimpleArray.md)

### allocateElement

```java
protected java.lang.Object allocateElement(java.lang.Class elementClass)
                                    throws java.lang.IllegalAccessException, 
                                           java.lang.InstantiationException
```

Description copied from class: [PHXSimpleArray](PHXSimpleArray.md)

Allocates a single element in a default state. If the class type in question has a default constructor, there is no need to override this.

**Overrides:**
- `allocateElement` in class [PHXSimpleArray](PHXSimpleArray.md)

**Throws:**
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`

### setUpperBound

```java
public void setUpperBound(double value)
```

**Parameters:**
- `value` - the upper bound

Sets the upper bound. The `hasUpperBound` value is set to true.

### getUpperBound

```java
public double getUpperBound()
```

Retrieves the current upper bound value.

**Returns:**
- the upper bound

**Throws:**
- `java.lang.IllegalStateException` - Thrown if there is no upper bound defined.

### setLowerBound

```java
public void setLowerBound(double value)
```

**Parameters:**
- `value` - the lower bound

Sets the lower bound. The `hasLowerBound` value is set to true.

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

### _setMetaData

```java
protected void _setMetaData(PHXSimpleType v2)
```

Description copied from class: [PHXSimpleArray](PHXSimpleArray.md)

Sets a simple type's meta data based on the meta data in this object. Override this to set additional information in sub-classes. Be sure to call `super._setMetaData(PHXSimpleType)`.

**Overrides:**
- `_setMetaData` in class [PHXSimpleArray](PHXSimpleArray.md)

### _getMetaData

```java
protected void _getMetaData([PHXSimpleType](PHXSimpleType.md) v2)
```

Description copied from class: [PHXSimpleArray](PHXSimpleArray.md)

Worker which takes the meta data from an instance of [PHXSimpleType](PHXSimpleType.md) and sets it into our meta data. Override this in order to add more custom meta data in sub-classes. Be sure to call `super._getMetaData(PHXSimpleType)`, though!

**Overrides:**
- `_getMetaData` in class [PHXSimpleArray](PHXSimpleArray.md)

### getValue

```java
public PHXDouble getValue(int[] index)
```

Gets an element as a [PHXDouble](PHXDouble.md) object.

**Specified by:**
- `getValue` in class [PHXSimpleArray](PHXSimpleArray.md)

**Parameters:**
- `index` - nD array index

**Returns:**
- referenced array value

### getDoubleValue

```java
public double getDoubleValue(int index)
```

Gets an element as a double.

**Parameters:**
- `index` - 1D array index

**Returns:**
- referenced array value

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if called on non-1D array

### getDoubleValue

```java
public double getDoubleValue(int[] index)
```

Gets an element as a double.

**Parameters:**
- `index` - nD array index

**Returns:**
- referenced array value

### setValue

```java
public void setValue(int[] index, 
                     PHXDouble val)
```

Sets an element as a [PHXDouble](PHXDouble.md) object.

**Specified by:**
- `setValue` in class [PHXSimpleArray](PHXSimpleArray.md)

**Parameters:**
- `index` - nD array index
- `val` - value to set

### setValue

```java
public void setValue(int index, 
                     double val)
```

Sets an element as a double.

**Parameters:**
- `index` - 1D array index
- `val` - value to set

### setValue

```java
public void setValue(int[] index, 
                     double val)
```

Sets an element as a double.

**Parameters:**
- `index` - nD array index
- `val` - value to set

### elementFromString

```java
protected java.lang.Object elementFromString(java.lang.String val)
```

Description copied from class: [PHXSimpleArray](PHXSimpleArray.md)

Sub-classes must provide an implementation of this function which converts a string form of a single element to Object form. This is only used when the element type does not implement [IPHXType](IPHXType.md) or [IPHXType2](IPHXType2.md). For primitives, return the wrapper objects.

**Specified by:**
- `elementFromString` in class [PHXSimpleArray](PHXSimpleArray.md)

### getMax

```java
public double getMax()
```

### getMin

```java
public double getMin()
```

### getAvg

```java
public double getAvg()
```

### sortReverse

```java
public void sortReverse()
```

### sort

```java
public void sort()
```

### _sort

```java
public void _sort(PHXDoubleArray array, 
                  boolean ascend)
```

### fromObject

```java
public void fromObject(java.lang.Object toRead)
                throws PHXInvalidTypeException
```

Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [PHXInvalidTypeException](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [PHXInvalidTypeException](PHXInvalidTypeException.md).

NOTE: while it might be logical to think you can create a `PHX(Type)Array` from, say, an array of `java.lang.(Type)`, that is not currently supported. You MUST use the PHX string array formatting style.

**Specified by:**
- `fromObject` in class [PHXSimpleType](PHXSimpleType.md)

**Parameters:**
- `toRead` - to object from which to load this objects value.

**Throws:**
- [PHXInvalidTypeException](PHXInvalidTypeException.md) - if the specified object is of an invalid type or there is an error in conversion.

### Accept

```java
public <T> T Accept([IPHXType2](IPHXType2.md).IVisitor<T> visitor)
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
public PHXDoubleArray createCopy()
```

Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class [PHXSimpleType](PHXSimpleType.md)

**Returns:**
- a newly constructed copy of this instance.