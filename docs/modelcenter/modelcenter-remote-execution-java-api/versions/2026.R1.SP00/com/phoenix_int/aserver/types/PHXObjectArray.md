# Class PHXObjectArray


**Packages:** `com.phoenix_int.aserver.types`

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXSimpleType
    ↳ com.phoenix_int.aserver.types.PHXSimpleArray
      ↳ com.phoenix_int.aserver.types.PHXObjectArray
```


**All Implemented Interfaces:**
- [IPHXType](IPHXType.md), [IPHXType2](IPHXType2.md), [IPHXUnits](IPHXUnits.md), java.lang.Iterable

---

```java
public class PHXObjectArray
extends PHXSimpleArray
```

Placeholder for an array of any random Java Object. This class is useful to keep the system from choking on random array types, but not designed for customer use.


**See Also:**
- [PHXSimpleArray](PHXSimpleArray.md)

## Nested Class Summary

## Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.IPHXType2
`IPHXType2.IVisitor<T>`

## Field Summary

### Fields inherited from class com.phoenix_int.aserver.types.PHXSimpleArray
`_data`, `_lockDims`, `_lockResize`

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXObjectArray()` |
| `PHXObjectArray(java.lang.Object data)` |
| `PHXObjectArray(PHXObjectArrayother)`<br>Clone another PHXObjectArray's value and metadata. |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`<br>Accept a Visitor. |
| `protected java.lang.Object` | `allocateElement(java.lang.Class elementClass)`<br>Allocates a single element in a default state. |
| `PHXObjectArray` | `createCopy()`<br>Create a copy of this instance, including the value and metadata. |
| `protected boolean` | `dataTypeOK(java.lang.Class c)`<br>Must override this function and return true if the specified class is acceptable as an array element component type. |
| `protected java.lang.Object` | `elementFromString(java.lang.String val)`<br>Sub-classes must provide an implementation of this function which converts a string form of a single element to Object form. |
| `boolean` | `equalsNatural(PHXSimpleTypetoCompare)`<br>Compare this PHXSimpleType to another PHXSimpleType. |
| `void` | `fromObject(java.lang.Object toRead)`<br>Load the value of this object from the specified object. |
| `PHXSimpleType` | `getValue(int[] index)`<br>Gets the value of an element as an object of the appropriate subtype. Must be overridden in subclasses |
| `void` | `setValue(int[] index,PHXSimpleTypeval)`<br>Sets an element as an object of the appropriate PHXSimpleType. Must be overridden in subclasses |

### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleArray
`_getMetaData`, `_getMetaData`, `_setMetaData`, `_setMetaData`, `checkRectangular`, `copy`, `fromString`, `fromString`, `fromString`, `fromString`, `fromString2`, `generateFor`, `generateFor`, `getArray`, `getArrayElement`, `getArrayElement`, `getComponentType`, `getComponentType`, `getDimensions`, `getDimensions`, `getFirst`, `getLength`, `getLength`, `getLockResize`, `getnDIndex`, `getNumDimensions`, `getNumDimensions`, `getSelf`, `getValue`, `incrementIndex`, `iterator`, `lockDimensions`, `newIndex`, `parseIndex`, `resize`, `setArray`, `setArrayElement`, `setArrayElement`, `setDimensions`, `setFirst`, `setLength`, `setLength`, `setLockResize`, `setValue`, `toString`, `toString`, `toString`, `toString`, `toString2`, `toString2`, `toString2`, `validElement`

### Methods inherited from class com.phoenix_int.aserver.types.PHXSimpleType
`_copyMetadataFromOther`, `addPropertyChangeListener`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`, `removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

### Methods inherited from interface java.lang.Iterable
`forEach`, `spliterator`

## Constructor Detail

### PHXObjectArray

```java
public PHXObjectArray()
```

### PHXObjectArray

```java
public PHXObjectArray(java.lang.Object data)
```

### PHXObjectArray

```java
public PHXObjectArray(PHXObjectArray other)
```

Clone another PHXObjectArray's value and metadata.

**Parameters:**
- `other` - the other PHXObjectArray to clone.

## Method Detail

### dataTypeOK

```java
protected boolean dataTypeOK(java.lang.Class c)
```

Description copied from class: `PHXSimpleArray`. Must override this function and return true if the specified class is acceptable as an array element component type.

**Specified by:**
- `dataTypeOK` in class `PHXSimpleArray`

### allocateElement

```java
protected java.lang.Object allocateElement(java.lang.Class elementClass)
                                    throws java.lang.IllegalAccessException,
                                           java.lang.InstantiationException
```

Description copied from class: `PHXSimpleArray`. Allocates a single element in a default state. If the class type in question has a default constructor, there is no need to override this.

**Overrides:**
- `allocateElement` in class `PHXSimpleArray`

**Throws:**
- `java.lang.IllegalAccessException`
: `java.lang.InstantiationException`

### elementFromString

```java
protected java.lang.Object elementFromString(java.lang.String val)
```

Description copied from class: `PHXSimpleArray`. Sub-classes must provide an implementation of this function which converts a string form of a single element to Object form. This is only used when the element type does not implement [IPHXType](IPHXType.md) or [IPHXType2](IPHXType2).  For primitives, return the wrapper objects.

**Specified by:**
- `elementFromString` in class `PHXSimpleArray`

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

**Overrides:**
- `equalsNatural` in class `PHXSimpleArray`

**Parameters:**
- `toCompare` -

**Returns:**
- a negative number if this object is less than toCompare, a positive number if this object is greater than to compare, and zero if these two objects are equal.

**Throws:**
- `PHXTypeMismatchException` - if the given PHXSimpleType cannot be compared with this object.

### fromObject

```java
public void fromObject(java.lang.Object toRead)
                throws PHXInvalidTypeException
```

Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [PHXInvalidTypeException](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [PHXInvalidTypeException](PHXInvalidTypeException.md)

NOTE: while it might be logical to think you can create a `PHX(Type)Array` from, say, an array of `java.lang.(Type)`, that is not currently supported. You MUST use the PHX string array formatting style.

**Specified by:**
- `fromObject` in class `PHXSimpleType`

**Parameters:**
- `toRead` - to object from which to load this objects value.

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md)- if the specified object is of an invalid type or there is an error in conversion.

### getValue

```java
public PHXSimpleType getValue(int[] index)
```

Gets the value of an element as an object of the appropriate subtype. Must be overridden in subclasses

**Specified by:**
- `getValue` in class `PHXSimpleArray`

**Parameters:**
- `index` - nD array index

**Returns:**
- referenced array value

### setValue

```java
public void setValue(int[] index,
                     PHXSimpleType val)
```

Sets an element as an object of the appropriate [PHXSimpleType](PHXSimpleType.md). Must be overridden in subclasses

**Specified by:**
- `setValue` in class `PHXSimpleArray`

**Parameters:**
- `index` - nD array index
: `val` - value to set

### Accept

```java
public <T> T Accept(IPHXType2.IVisitor<T> visitor)
```

Accept a Visitor.

**Type Parameters:**
- `T` - Type of the result of the visit.

**Parameters:**
- `visitor` - The visitor to accept.

**Returns:**
- The results of the visit.

### createCopy

```java
public PHXObjectArray createCopy()
```

Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class `PHXSimpleType`

**Returns:**
- a newly constructed copy of this instance.
