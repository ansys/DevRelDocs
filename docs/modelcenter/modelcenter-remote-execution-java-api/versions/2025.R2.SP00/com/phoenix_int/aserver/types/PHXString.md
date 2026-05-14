# Class PHXString


**Package:** `com.phoenix_int.aserver.types`
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXSimpleType
    ↳ com.phoenix_int.aserver.types.PHXString
```

**All Implemented Interfaces:**
- [IPHXType](IPHXType.md), [IPHXType2](IPHXType2.md), [IPHXUnits](IPHXUnits.md)

---

```java
public class PHXString
extends PHXSimpleType
```

The type for Strings. This class adds the following features to the [PHXSimpleType](PHXSimpleType.md):

- **value**: String
- **enumValues**: String[]
- **enumAliases**: String[]


**See Also:**
- [PHXSimpleType](PHXSimpleType.md)

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md)

`IPHXType2.IVisitor<T>`

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXString()` |
| `PHXString(PHXStringother)`<br>Clone another PHXString's value and metadata. |
| `PHXString(java.lang.String value)` |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `protected void` | `_copyMetadataFromOther(PHXStringother)`<br>Clone another PHXString's metadata. |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`<br>Accept a Visitor. |
| `static java.lang.String` | `arrayToString(java.lang.String[] sa)`<br>Deprecated. |
| `static java.lang.String` | `arrayToStringEscaped(java.lang.String[] sa)`<br>Quotes each element of the array using c-style escape sequences, then builds a comma separated list of the elements with quotes around each element. |
| `PHXString` | `createCopy()`<br>Create a copy of this instance, including the value and metadata. |
| `boolean` | `equalsNatural(PHXSimpleTypetoCompare)`<br>Compare this PHXSimpleType to another PHXSimpleType. |
| `void` | `fromObject(java.lang.Object toRead)`<br>Load the value of this object from the specified object. |
| `void` | `fromString(java.lang.String value)`<br>converts a String representation to the internal value |
| `void` | `fromString2(PHXStringBuffervalue)`<br>converts a PHXStringBuffer representation to the internal value |
| `java.lang.String[]` | `getEnumAliases()`<br>An interface function for the enumeration array |
| `java.lang.String` | `getEnumAliasesStr()`<br>An interface function for the enumeration array |
| `java.lang.String[]` | `getEnumValues()`<br>lists enum values |
| `java.lang.String` | `getEnumValuesStr()`<br>Interface function to pass out the enumeration array as a comma separated string |
| `java.lang.String` | `getValue()`<br>retrieves the current value of the variable |
| `static void` | `main(java.lang.String[] args)` |
| `void` | `setEnumAliases(java.lang.String values)`<br>takes a comma separated string of values and fills the enumeration aliases list with values. |
| `void` | `setEnumAliases(java.lang.String[] values)`<br>Takes an array of values and fills the enumeration aliases list with values. |
| `void` | `setEnumValues(java.lang.String input)`<br>sets enum values |
| `void` | `setEnumValues(java.lang.String[] values)`<br>sets enum values |
| `void` | `setValue(PHXStringBufferv)`<br>sets the value for the variable |
| `void` | `setValue(java.lang.String v)`<br>sets the value for the variable |
| `static java.lang.String[]` | `stringToArray(java.lang.String s)` |
| `java.lang.String` | `toString()`<br>converts the variable to a string |
| `PHXStringBuffer` | `toString2()`<br>converts the variable to a PHXStringBuffer |

### Methods inherited from class com.phoenix_int.aserver.types.[PHXSimpleType](PHXSimpleType.md)
`_copyMetadataFromOther`, `addPropertyChangeListener`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`,`removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXString

```java
public PHXString()
```

### PHXString

```java
public PHXString(java.lang.String value)
```

### PHXString

```java
public PHXString(PHXString other)
```

Clone another PHXString's value and metadata.

**Parameters:**
- `other` - the other PHXString to clone.

## Method Detail

### getValue

```java
public java.lang.String getValue()
```

Retrieves the current value of the variable

**Returns:**
- the value of the variable

### setValue

```java
public void setValue(java.lang.String v)
              throws java.lang.IllegalArgumentException
```

Sets the value for the variable

**Parameters:**
- `v` - the value

**Throws:**
- `java.lang.IllegalArgumentException`

### setValue

```java
public void setValue(PHXStringBuffer v)
              throws java.lang.IllegalArgumentException
```

Sets the value for the variable

**Parameters:**
- `v` - the value

**Throws:**
- `java.lang.IllegalArgumentException`

### toString2

```java
public PHXStringBuffer toString2()
```

Converts the variable to a PHXStringBuffer

**Returns:**
- a PHXStringBuffer representation of the variable

### toString

```java
public java.lang.String toString()
```

Converts the variable to a string

**Specified by:**
- `toString` in interface [`IPHXType`](IPHXType.md)

**Overrides:**
- `toString` in class `java.lang.Object`

**Returns:**
- a String representation of the variable

### fromString2

```java
public void fromString2(PHXStringBuffer value)
```

Converts a PHXStringBuffer representation to the internal value

**Parameters:**
- `value` - the value to convert

### fromString

```java
public void fromString(java.lang.String value)
```

Converts a String representation to the internal value

**Parameters:**
- `value` - the value to convert

### getEnumValues

```java
public java.lang.String[] getEnumValues()
```

Lists enum values

**Returns:**
- enum values

### getEnumValuesStr

```java
public java.lang.String getEnumValuesStr()
```

Interface function to pass out the enumeration array as a comma separated string

**Returns:**
- comma separated string of the possible values of the list

### setEnumValues

```java
public void setEnumValues(java.lang.String input)
```

Sets enum values

**Parameters:**
- `input:` - list of enum values

### setEnumValues

```java
public void setEnumValues(java.lang.String[] values)
```

Sets enum values

**Parameters:**
- `values:` - list of enum values

### setEnumAliases

```java
public void setEnumAliases(java.lang.String values)
```

Takes a comma separated string of values and fills the enumeration aliases list with values.

**Parameters:**
- `values` - A comma separated string of enumeration aliases

### setEnumAliases

```java
public void setEnumAliases(java.lang.String[] values)
```

Takes an array of values and fills the enumeration aliases list with values. If null, aliases will be set to an empty list.

**Parameters:**
- `values` - string array of enumeration aliases

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

### _copyMetadataFromOther

```java
protected final void _copyMetadataFromOther(PHXString other)
```

Clone another PHXString's metadata.

**Parameters:**
- `other` - the other PHXString

### arrayToString

```java
@Deprecated
public static java.lang.String arrayToString(java.lang.String[] sa)
```

**Deprecated.** Do not use, does not generate correct strings.

**Parameters:**
- `sa` -

**Returns:**

### stringToArray

```java
public static java.lang.String[] stringToArray(java.lang.String s)
```

### arrayToStringEscaped

```java
public static java.lang.String arrayToStringEscaped(java.lang.String[] sa)
```

Quotes each element of the array using c-style escape sequences, then builds a comma separated list of the elements with quotes around each element.

**Parameters:**
- `sa` - The array to read

**Returns:**
- The generated string.

### main

```java
public static void main(java.lang.String[] args)
```

### equalsNatural

```java
public boolean equalsNatural(PHXSimpleType toCompare)
                      throws PHXTypeMismatchException
```

Compare this PHXSimpleType to another PHXSimpleType. This type of comparison is different than `Comparable` in that it does a natural comparison between numbers. It is not designed, nor suited, for use in things such as sets, and may behave oddly if put in those circumstances.

**Specified by:**
- `equalsNatural` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toCompare` -

**Returns:**
- a negative number if this object is less than `toCompare`, a positive number if this object is greater than `toCompare`, and zero if these two objects are equal.

**Throws:**
- `PHXTypeMismatchException` - if the given PHXSimpleType cannot be compared with this object.

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
- `toRead` - to object from which to load this objects value.

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md)- if the specified object is of an invalid type or there is an error in conversion.

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
public PHXString createCopy()
```

Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class [`PHXSimpleType`](PHXSimpleType.md)

**Returns:**
- a newly constructed copy of this instance.
