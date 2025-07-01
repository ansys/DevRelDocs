# Class PHXSimpleType


**Package:** com.phoenix_int.aserver.types
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXSimpleType
```

**All Implemented Interfaces:**
- [IPHXType](IPHXType.md), [IPHXType2](IPHXType2.md), [IPHXUnits](IPHXUnits.md)


**Direct Known Subclasses:**
- [PHXBoolean](PHXBoolean.md), [PHXDouble](PHXDouble.md), [PHXFile](PHXFile.md), [PHXGeometry](PHXGeometry.md), [PHXInteger](PHXInteger.md), [PHXLong](PHXLong.md), [PHXRawFile](PHXRawFile.md), [PHXScriptObject](PHXScriptObject.md), [PHXSimpleArray](PHXSimpleArray.md), [PHXString](PHXString.md)

---

```java
public abstract class PHXSimpleType
extends java.lang.Object
implements IPHXType2, IPHXUnits
```

A base class for most data types. The class defines the following properties:

- description: String
- units: String
- hasChanged: boolean

This class will fire a property change event when `hasChanged(true)` is called. The property event will always have the property name be "value" and the old and new values of null.  Use `toString` or `getValue` functions to get the actual new value from the variable.

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md)
`IPHXType2.IVisitor<T>`

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXSimpleType()` |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `_copyMetadataFromOther(PHXSimpleTypeother)`<br>Copy common metadata on PHXSimpleType from another object to this one. |
| `void` | `addPropertyChangeListener(java.beans.PropertyChangeListener l)` |
| `abstractPHXSimpleType` | `createCopy()`<br>Create a copy of this instance, including the value and metadata. |
| `abstract boolean` | `equalsNatural(PHXSimpleTypetoCompare)`<br>Compare this PHXSimpleType to another PHXSimpleType. |
| `abstract void` | `fromObject(java.lang.Object toRead)`<br>Load the value of this object from the specified object. |
| `java.lang.String` | `getDescription()` |
| `static java.lang.String[]` | `getEnumTokens(java.lang.String enums)` |
| `boolean` | `getHasChanged()`<br>retrieves the `hasChanged` flag |
| `java.lang.String` | `getUnits()`<br>Get the units string for the variable |
| `void` | `removePropertyChangeListener(java.beans.PropertyChangeListener l)` |
| `void` | `setDescription(java.lang.String d)` |
| `void` | `setHasChanged(boolean v)`<br>sets the `hasChanged` flag |
| `void` | `setUnits(java.lang.String u)`<br>Set the units string for the variable |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

### Methods inherited from interface com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md)
`Accept`, `fromString2`, `toString2`

### Methods inherited from interface com.phoenix_int.aserver.types.[IPHXType](IPHXType.md)
`fromString,toString`

## Constructor Detail

### PHXSimpleType

```java
public PHXSimpleType()
```

## Method Detail

### setUnits

```java
public void setUnits(java.lang.String u)
```
Set the units string for the variable

**Specified by:**
- `setUnits` in interface [`IPHXUnits`](IPHXUnits.md)

**Parameters:**
- `u`- units for the variable

### getUnits

```java
public java.lang.String getUnits()
```
Get the units string for the variable

**Specified by:**
- `getUnits` in interface [`IPHXUnits`](IPHXUnits.md)

**Returns:**
- units string

### setDescription

```java
public void setDescription(java.lang.String d)
```

### getDescription

```java
public java.lang.String getDescription()
```

### setHasChanged

```java
public void setHasChanged(boolean v)
```
sets the hasChanged flag

**Parameters:**
- `v`- the new value for the flag

### getHasChanged

```java
public boolean getHasChanged()
```
retrieves the hasChanged flag

**Returns:**
- `true` if the variable has changed since the last time the `hasChanged` flag was set to `false`

### addPropertyChangeListener

```java
public void addPropertyChangeListener(java.beans.PropertyChangeListener l)
```

### removePropertyChangeListener

```java
public void removePropertyChangeListener(java.beans.PropertyChangeListener l)
```

### getEnumTokens

```java
public static java.lang.String[] getEnumTokens(java.lang.String enums)
```

### equalsNatural

```java
public abstract boolean equalsNatural(PHXSimpleType toCompare)
                               throws PHXTypeMismatchException
```
Compare this PHXSimpleType to another PHXSimpleType. This type of comparison is different than `Comparable` in that it does a natural comparison between numbers. It is not designed, nor suited, for use in things such as sets, and may behave oddly if put in those circumstances.

**Parameters:**
- `toCompare`-

**Returns:**
- a negative number if this object is less than `toCompare`, a positive number if this object is greater than `toCompare`, and zero if these two objects are equal.

**Throws:**
- `PHXTypeMismatchException`- if the given PHXSimpleType cannot be compared with this object.

### fromObject

```java
public abstract void fromObject(java.lang.Object toRead)
                         throws PHXInvalidTypeException
```
Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md)

NOTE: while it might be logical to think you can create a `PHX(Type)Array` from, say, an array of `java.lang.(Type)`, that is not currently supported. You MUST use the PHX string array formatting style.

**Parameters:**
- `toRead`- to object from which to load this objects value.

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md) if the specified object is of an invalid type or there is an error in conversion.

### _copyMetadataFromOther

```java
protected final void _copyMetadataFromOther(PHXSimpleType other)
```
Copy common metadata on PHXSimpleType from another object to this one. Designed to assist in implementing `createCopy()`.

**Parameters:**
- `other`- the other object from which metadata will be copied

### createCopy

```java
public abstract PHXSimpleType createCopy()
```
Create a copy of this instance, including the value and metadata.

**Returns:**
- a newly constructed copy of this instance.
