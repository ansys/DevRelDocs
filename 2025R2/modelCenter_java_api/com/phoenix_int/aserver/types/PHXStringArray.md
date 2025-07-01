# Class PHXStringArray


**Package:** `com.phoenix_int.aserver.types`
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXSimpleType
    ↳ com.phoenix_int.aserver.types.PHXSimpleArray<PHXString>
      ↳ com.phoenix_int.aserver.types.PHXStringArray
```

**All Implemented Interfaces:**
- [IPHXType](IPHXType.md), [IPHXType2](IPHXType2.md), [IPHXUnits](IPHXUnits.md), java.lang.Iterable<[PHXString](PHXString.md)>

---

```java
public class PHXStringArray
extends PHXSimpleArray<PHXString>
```
Class wraps an array of PHXString variables for the ScriptWrapper utility.


**See Also:**
- [PHXSimpleArray](PHXSimpleArray.md)

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md)
`IPHXType2.IVisitor<T>`

## Field Summary

### Fields inherited from class com.phoenix_int.aserver.types.[PHXSimpleArray](PHXSimpleArray.md)
`_data,_lockDims,_lockResize`

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXStringArray()` |
| `PHXStringArray(java.lang.Object data)` |
| `PHXStringArray(PHXStringArrayother)` |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `_getMetaData(PHXSimpleTypev2)`<br>Worker which takes the meta data from an instance of PHXSimpleType and sets it into our meta data. |
| `protected void` | `_setMetaData(PHXSimpleTypev2)`<br>Sets a simple type's meta data based on the meta data in this object. |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`<br>Accept a Visitor. |
| `PHXStringArray` | `createCopy()`<br>Create a copy of this instance, including the value and metadata. |
| `protected boolean` | `dataTypeOK(java.lang.Class c)`<br>Must override this function and return `true` if the specified class is acceptable as an array element component type. |
| `protected java.lang.Object` | `elementFromString(java.lang.String val)`<br>Sub-classes must provide an implementation of this function which converts a string form of a single element to Object
 form. |
| `void` | `fromObject(java.lang.Object toRead)`<br>Load the value of this object from the specified object. |
| `java.lang.String[]` | `getEnumAliases()`<br>An interface function for the enumeration array |
| `java.lang.String` | `getEnumAliasesStr()`<br>An interface function for the enumeration array |
| `java.lang.String[]` | `getEnumValues()`<br>An interface function for the enumeration array |
| `java.lang.String` | `getEnumValuesStr()`<br>Interface function to pass out the enumeration array as a comma separated string |
| `java.lang.String` | `getStringValue(int index)`<br>Gets a particular element as a String |
| `java.lang.String` | `getStringValue(int[] index)`<br>Gets a particular element as a String |
| `PHXString` | `getValue(int[] index)<br>`Gets a particular element as a PHXString |
| `void` | `setEnumAliases(java.lang.String values)`<br>takes a comma seperated string of values and fills the enumeration aliases list with values. |
| `void` | `setEnumAliases(java.lang.String[] values)`<br>Sets the enumeration aliases list |
| `void` | `setEnumValues(java.lang.String values)`<br>takes a comma seperated string of values and fills the enumeration List with values. |
| `void` | `setEnumValues(java.lang.String[] values)`<br>sets enum values |
| `void` | `setValue(int[] index,PHXStringval)`<br>Sets a particular element as a PHXString |
| `void` | `setValue(int[] index, java.lang.String val)`<br>Sets a particular element as a String |
| `void` | `setValue(int index, java.lang.String val)`<br>Sets a particular element as a String |

### Methods inherited from class com.phoenix_int.aserver.types.[PHXSimpleArray](PHXSimpleArray.md)
`_getMetaData`, `_setMetaData`, `allocateElement`, `checkRectangular`, `copy`, `equalsNatural`, `fromString`, `fromString`, `fromString`, `fromString`, `fromString2`, `generateFor`, `generateFor`, `getArray`, `getArrayElement`, `getArrayElement`, `getComponentType`, `getComponentType`, `getDimensions`, `getDimensions`, `getFirst`, `getLength`, `getLength`, `getLockResize`, `getnDIndex`, `getNumDimensions`, `getNumDimensions`, `getSelf`, `getValue`, `incrementIndex`, `iterator`, `lockDimensions`, `newIndex`, `parseIndex`, `resize`, `setArray`, `setArrayElement`, `setArrayElement`, `setDimensions`, `setFirst`, `setLength`, `setLength`, `setLockResize`, `setValue`, `toString`, `toString`, `toString`, `toString`, `toString2`, `toString2`, `toString2`, `validElement`

### Methods inherited from class com.phoenix_int.aserver.types.[PHXSimpleType](PHXSimpleType.md)
`_copyMetadataFromOther`, `addPropertyChangeListener`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`, `removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

### Methods inherited from interface java.lang.Iterable
`forEach`, `spliterator`

## Constructor Detail

### PHXStringArray

```java
public PHXStringArray()
```

### PHXStringArray

```java
public PHXStringArray(java.lang.Object data)
```

### PHXStringArray

```java
public PHXStringArray(PHXStringArray other)
```

### Method Detail

### dataTypeOK

```java
protected boolean dataTypeOK(java.lang.Class c)
```
Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md)

Must override this function and return `true` if the specified class is acceptable as an array element component type.

**Specified by:**
- `dataTypeOK` in class `PHXSimpleArray<PHXString>`

### setEnumValues

```java
public void setEnumValues(java.lang.String values)
```
takes a comma seperated string of values and fills the enumeration List with values.

**Parameters:**
- `values`- A comma seperrated string of enumeration values

### setEnumValues

```java
public void setEnumValues(java.lang.String[] values)
```
sets enum values

**Parameters:**
- `values:`- list of enum values

### getEnumValues

```java
public java.lang.String[] getEnumValues()
```
An interface function for the enumeration array

**Returns:**
- an array of the possible values of the list

### getEnumValuesStr

```java
public java.lang.String getEnumValuesStr()
```
Interface function to pass out the enumeration array as a comma separated string

**Returns:**
- comma separated string of the possible values of the list

### setEnumAliases

```java
public void setEnumAliases(java.lang.String values)
```
takes a comma seperated string of values and fills the enumeration aliases list with values.

**Parameters:**
- `values`- A comma seperated string of enumeration aliases

### setEnumAliases

```java
public void setEnumAliases(java.lang.String[] values)
```
Sets the enumeration aliases list

**Parameters:**
- `values`- An array of strings

### getEnumAliases

```java
public java.lang.String[] getEnumAliases()
```
An interface function for the enumeration array

**Returns:**
- an array of the possible values of the list

### getEnumAliasesStr

```java
public java.lang.String getEnumAliasesStr()
```
An interface function for the enumeration array

**Returns:**
- an comma separated string of the possible values of the list

### _setMetaData

```java
protected void _setMetaData(PHXSimpleType v2)
```
Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md)

Sets a simple type's meta data based on the meta data in this object.  Override this to set additional information in sub-classes.  Be sure to call `super._setMetaData(PHXSimpleType)`.

**Overrides:**
- `_setMetaData` in class `PHXSimpleArray<PHXString>`

### _getMetaData

```java
protected void _getMetaData(PHXSimpleType v2)
```
Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md)

Worker which takes the meta data from an instance of PHXSimpleType and sets it into our meta data.  Override this in order to add more custom meta data in sub-classes.  Be sure to call `super._getMetaData(PHXSimpleType)`, though!

**Overrides:**
- `_getMetaData` in class `PHXSimpleArray<PHXString>`

### getValue

```java
public PHXString getValue(int[] index)
```
Gets a particular element as a PHXString

**Specified by:**
- `getValue` in class `PHXSimpleArray<PHXString>`

**Parameters:**
- `index`- 1D array index

**Returns:**
- referenced array value

### getStringValue

```java
public java.lang.String getStringValue(int index)
```
Gets a particular element as a String

**Parameters:**
- `index`- nD array index

**Returns:**
- referenced array value

**Throws:**
- `java.lang.IllegalArgumentException`- thrown if called on non-1D array

### getStringValue

```java
public java.lang.String getStringValue(int[] index)
```
Gets a particular element as a String

**Parameters:**
- `index`- nD array index

**Returns:**
- referenced array value

### setValue

```java
public void setValue(int[] index,
                     PHXString val)
```
Sets a particular element as a PHXString

**Specified by:**
- `setValue` in class `PHXSimpleArray<PHXString>`

**Parameters:**
- `index`- 1D array index
: `val`- value to set

### setValue

```java
public void setValue(int index,
                     java.lang.String val)
```
Sets a particular element as a String

**Parameters:**
- `index`- 1D array index
: `val`- value to set

**Throws:**
- `java.lang.IllegalArgumentException`- thrown if called on non-1D array

### setValue

```java
public void setValue(int[] index,
                     java.lang.String val)
```
Sets a particular element as a String

**Parameters:**
- `index`- 1D array index
: `val`- value to set

### elementFromString

```java
protected java.lang.Object elementFromString(java.lang.String val)
```
Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md)

Sub-classes must provide an implementation of this function which converts a string form of a single element to Object form.  This is only used when the element type does not implement [IPHXType](IPHXType.md) or [IPHXType2](IPHXType2.md).  For primitives, return the wrapper objects.

**Specified by:**
- `elementFromString` in class `PHXSimpleArray<PHXString>`

### fromObject

```java
public void fromObject(java.lang.Object toRead)
                throws PHXInvalidTypeException
```
Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md).

NOTE: while it might be logical to think you can create a `PHX(Type)Array` from, say, an array of `java.lang.(Type)`, that is not currently upported. You MUST use the PHX string array formatting style.

**Specified by:**
- `fromObject` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toRead`- to object from which to load this objects value.

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md) - if the specified object is of an invalid type or there is an error in conversion.

### Accept

```java
public <T> T Accept(IPHXType2.IVisitor<T> visitor)
```
Accept a Visitor.

**Type Parameters:**
- `T`- Type of the result of the visit.

**Parameters:**
- `visitor`- The visitor to accept.

**Returns:**
- The results of the visit.

### createCopy

```java
public PHXStringArray createCopy()
```
Description copied from class: [`PHXSimpleType`](PHXSimpleType.md)

Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class [`PHXSimpleType`](PHXSimpleType.md)

**Returns:**
- a newly constructed copy of this instance.
