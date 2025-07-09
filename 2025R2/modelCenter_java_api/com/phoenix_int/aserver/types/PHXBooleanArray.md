# Class: PHXBooleanArray

**Package:** `com.phoenix_int.aserver.types`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXSimpleType
    ↳ com.phoenix_int.aserver.types.PHXSimpleArray<PHXBoolean>
      ↳ com.phoenix_int.aserver.types.PHXBooleanArray
```

**Implemented Interfaces**

- [`IPHXType`](IPHXType.md), [`IPHXType2`](IPHXType2.md), [`IPHXUnits`](IPHXUnits.md), `Iterable<[PHXBoolean](PHXBoolean.md)>`

**Declaration**

```java
public class PHXBooleanArray
extends PHXSimpleArray<PHXBoolean>
```

Class wraps an array of [PHXBoolean](PHXBoolean.md) variables for the ScriptWrapper utility.

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.IPHXType2
`IPHXType2.IVisitor<T>`

## Field Summary

### Fields inherited from class com.phoenix_int.aserver.types.PHXSimpleArray
`_data`, `_lockDims`, `_lockResize`

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXBooleanArray()` |
| `PHXBooleanArray(java.lang.Object data)` |
| `PHXBooleanArray(PHXBooleanArray other)` Clone another PHXBooleanArray's value and metadata. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)` Accept a Visitor. |
| `protected java.lang.Object` | `allocateElement(java.lang.Class elementClass)` Allocates a single element in a default state. |
| `PHXBooleanArray` | `createCopy()` Create a copy of this instance, including the value and metadata. |
| `protected boolean` | `dataTypeOK(java.lang.Class c)` Must override this function and return true if the specified class is acceptable as an array element component type. |
| `protected java.lang.Object` | `elementFromString(java.lang.String val)` Sub-classes must provide an implementation of this function which converts a string form of a single element to Object form. |
| `void` | `fromObject(java.lang.Object toRead)` Load the value of this object from the specified object. |
| `boolean` | `getBooleanValue(int index)` Gets the value of an element as a boolean |
| `boolean` | `getBooleanValue(int[] index)` Gets the value of an element as a boolean |
| `[PHXBoolean](PHXBoolean.md)` | `getValue(int[] index)` Gets the value of an element as a PHXBoolean object |
| `void` | `setValue(int[] index, boolean val)` Sets the value of an element as a boolean |
| `void` | `setValue(int[] index, PHXBoolean val)` Sets the value of an element as a PHXBoolean object |
| `void` | `setValue(int index, boolean val)` Sets the value of an element as a boolean |

### Methods inherited from class [PHXSimpleArray](PHXSimpleArray.md)
`_getMetaData`, `_getMetaData`, `_setMetaData`, `_setMetaData`, `checkRectangular`, `copy`, `equalsNatural`, `fromString`, `fromString`, `fromString`, `fromString`, `fromString2`, `generateFor`, `generateFor`, `getArray`, `getArrayElement`, `getArrayElement`, `getComponentType`, `getComponentType`, `getDimensions`, `getDimensions`, `getFirst`, `getLength`, `getLength`, `getLockResize`, `getnDIndex`, `getNumDimensions`, `getNumDimensions`, `getSelf`, `getValue`, `incrementIndex`, `iterator`, `lockDimensions`, `newIndex`, `parseIndex`, `resize`, `setArray`, `setArrayElement`, `setArrayElement`, `setDimensions`, `setFirst`, `setLength`, `setLength`, `setLockResize`, `setValue`, `toString`, `toString`, `toString`, `toString`, `toString2`, `toString2`, `toString2`, `validElement`

### Methods inherited from class [PHXSimpleType](PHXSimpleType.md)
`_copyMetadataFromOther`, `addPropertyChangeListener`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`, `removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

### Methods inherited from interface java.lang.Iterable
`forEach`, `spliterator`

## Constructor Detail

### PHXBooleanArray

```java
public PHXBooleanArray()
```

### PHXBooleanArray

```java
public PHXBooleanArray(java.lang.Object data)
```

### PHXBooleanArray

```java
public PHXBooleanArray(PHXBooleanArray other)
```

**Parameters:**
- `other` - the other PHXBooleanArray to clone.

## Method Detail

### dataTypeOK

```java
protected boolean dataTypeOK(java.lang.Class c)
```

Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md). Must override this function and return true if the specified class is acceptable as an array element component type.

**Specified by:**
- `dataTypeOK` in class `PHXSimpleArray<PHXBoolean>`

### allocateElement

```java
protected java.lang.Object allocateElement(java.lang.Class elementClass)
                                    throws java.lang.IllegalAccessException, 
                                           java.lang.InstantiationException
```

Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md). Allocates a single element in a default state. If the class type in question has a default constructor, there is no need to override this.

**Overrides:**
- `allocateElement` in class `PHXSimpleArray<PHXBoolean>`

**Throws:**
- `java.lang.IllegalAccessException`
- `java.lang.InstantiationException`

### getValue

```java
public PHXBoolean getValue(int[] index)
```

Gets the value of an element as a PHXBoolean object.

**Specified by:**
- `getValue` in class `PHXSimpleArray<PHXBoolean>`

**Parameters:**
- `index` - nD array index

**Returns:**
- referenced array value

### getBooleanValue

```java
public boolean getBooleanValue(int index)
```

Gets the value of an element as a boolean.

**Parameters:**
- `index` - 1D array index

**Returns:**
- referenced array value

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if called on non-1D array

### getBooleanValue

```java
public boolean getBooleanValue(int[] index)
```

Gets the value of an element as a boolean.

**Parameters:**
- `index` - nD array index

**Returns:**
- referenced array value

### setValue

```java
public void setValue(int[] index, 
                     PHXBoolean val)
```

Sets the value of an element as a PHXBoolean object.

**Specified by:**
- `setValue` in class `PHXSimpleArray<PHXBoolean>`

**Parameters:**
- `index` - nD array index
- `val` - value to set

### setValue

```java
public void setValue(int index, 
                     boolean val)
```

Sets the value of an element as a boolean.

**Parameters:**
- `index` - 1D array index
- `val` - value to set

**Throws:**
- `java.lang.IllegalArgumentException` - thrown if called on non-1D array

### setValue

```java
public void setValue(int[] index, 
                     boolean val)
```

Sets the value of an element as a boolean.

**Parameters:**
- `index` - nD array index
- `val` - value to set

### elementFromString

```java
protected java.lang.Object elementFromString(java.lang.String val)
```

Description copied from class: [`PHXSimpleArray`](PHXSimpleArray.md). Sub-classes must provide an implementation of this function which converts a string form of a single element to Object form. This is only used when the element type does not implement [`IPHXType`](IPHXType.md) or [`IPHXType2`](IPHXType2.md). For primitives, return the wrapper objects.

**Specified by:**
- `elementFromString` in class `PHXSimpleArray<PHXBoolean>`

### fromObject

```java
public void fromObject(java.lang.Object toRead)
  throws PHXInvalidTypeException
```

Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md).

NOTE: while it might be logical to think you can create a `PHX(Type)Array` from, say, an array of `java.lang.(Type)`, that is not currently supported. You MUST use the PHX string array formatting style.

**Specified by:**
- `fromObject` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toRead` - to object from which to load this object's value.

**Throws:**
- `PHXInvalidTypeException` - if the specified object is of an invalid type or there is an error in conversion.

### Accept

```java
public <T> T Accept(IPHXType2.IVisitor<T> visitor)
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
public PHXBooleanArray createCopy()
```

Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class [`PHXSimpleType`](PHXSimpleType.md)

**Returns:**
- a newly constructed copy of this instance.