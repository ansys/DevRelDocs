# Class PHXTypeFactory


**Package:** `com.phoenix_int.aserver.types`

**Hierarchy:**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXTypeFactory
```
---

**Declaration:**
```java
public class PHXTypeFactory
extends java.lang.Object
```

A class for creating variables

**See Also:**
- [PHXSimpleType](PHXSimpleType.md)

## Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| Modifier and Type | Field and Description |
| `static java.lang.String` | `BOOLEAN`<br>Type identifier for a boolean type |
| `static java.lang.String` | `BOOLEAN_ARRAY`<br>Type identifier for a boolean array type |
| `static java.lang.String` | `DOUBLE`<br>Type identifier for a double type |
| `static java.lang.String` | `DOUBLE_ARRAY`<br>Type identifier for a double array type |
| `static java.lang.String` | `FILE`<br>Type identifier for a file type |
| `static java.lang.String` | `FILE_ARRAY`<br>Type identifier for a file array type |
| `static java.lang.String` | `GEOMETRY`<br>Type identifier for a geometry type |
| `static java.lang.String` | `LONG`<br>Type identifier for a long type |
| `static java.lang.String` | `LONG_ARRAY`<br>Type identifier for a long array type |
| `static java.lang.String` | `OBJECT`<br>Type identifier for an object type |
| `static java.lang.String` | `REFERENCE`<br>Type identifier for a reference type |
| `static java.lang.String` | `REFERENCE_ARRAY`<br>Type identifier for a reference array type |
| `static java.lang.String` | `STRING`<br>Type identifier for a string type |
| `static java.lang.String` | `STRING_ARRAY`<br>Type identifier for a string array type |
| `static java.lang.String` | `UNKNOWN`<br>Type identifier for an unknown type |
| `static java.lang.String` | `UNKNOWN_ARRAY`<br>Type identifier for an unknown array type |


## Constructor Summary

| Constructor and Description |
| --- |
| `PHXTypeFactory()` |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `static void` | `_verifyIsArrayType(java.lang.String type)`<br>utility function for verifying that a type string is an array type - it is in the form `"XXXX[#]"` |
| `staticPHXSimpleArray` | `allocateArray(java.lang.String arrayType)`<br>**Deprecated.** Prefer `allocateVariable2(java.lang.String)` which can properly differentiate between arrays and non-array types. |
| `staticIPHXType2` | `allocateVariable(java.lang.String type)`<br>**Deprecated.** Prefer `allocateVariable2(java.lang.String)` which can properly differentiate between arrays  and non-array types. |
| `staticIPHXType2` | `allocateVariable2(java.lang.String type)`<br>Allocate a given variable for the given type string |
| `static java.lang.Class` | `getClass(java.lang.String type)`<br>returns the class for the specified type. |
| `static java.lang.Class` | `getVariableClass(java.lang.String type)`<br>Returns the class associated with the type string. |
| `static java.lang.String` | `getVarType(java.lang.String className)`<br>Given the class name, determine the corresponding type. |
| `staticPHXSimpleType` | `toPHXSimpleType(java.lang.Object input, java.lang.Class<?> simpleTypeClass)`<br>Converts the given type to the associated PHXSimpleType. |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`


## Field Detail

### UNKNOWN
```java
public static final java.lang.String UNKNOWN
```

Type identifier for an unknown type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### UNKNOWN_ARRAY
```java
public static final java.lang.String UNKNOWN_ARRAY
```

Type identifier for an unknown array type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### BOOLEAN
```java
public static final java.lang.String BOOLEAN
```

Type identifier for a boolean type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### BOOLEAN_ARRAY
```java
public static final java.lang.String BOOLEAN_ARRAY
```

Type identifier for a boolean array type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### DOUBLE
```java
public static final java.lang.String DOUBLE
```

Type identifier for a double type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### DOUBLE_ARRAY
```java
public static final java.lang.String DOUBLE_ARRAY
```

Type identifier for a double array type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### LONG
```java
public static final java.lang.String LONG
```

Type identifier for a long type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### LONG_ARRAY
```java
public static final java.lang.String LONG_ARRAY
```

Type identifier for a long array type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### FILE
```java
public static final java.lang.String FILE
```

Type identifier for a file type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### FILE_ARRAY
```java
public static final java.lang.String FILE_ARRAY
```

Type identifier for a file array type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### STRING
```java
public static final java.lang.String STRING
```

Type identifier for a string type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### STRING_ARRAY
```java
public static final java.lang.String STRING_ARRAY
```

Type identifier for a string array type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### GEOMETRY
```java
public static final java.lang.String GEOMETRY
```

Type identifier for a geometry type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### OBJECT
```java
public static final java.lang.String OBJECT
```

Type identifier for an object type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### REFERENCE
```java
public static final java.lang.String REFERENCE
```

Type identifier for a reference type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)

### REFERENCE_ARRAY
```java
public static final java.lang.String REFERENCE_ARRAY
```

Type identifier for a reference array type

**See Also:**
- [Constant Field Values](../../../../constant-values.md)


## Constructor Detail

### PHXTypeFactory

```java
public PHXTypeFactory()
```

### Method Detail

### allocateVariable2

```java
public static IPHXType2 allocateVariable2(java.lang.String type)
                                   throws PHXInvalidTypeException
```
                                   
Allocate a given variable for the given type string

**Parameters:**
- `Type` - the type of the variable to instantiate

**Returns:**
- the instantiated variable

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md)

### allocateVariable

```java
@Deprecated
public static IPHXType2 allocateVariable(java.lang.String type)
                                  throws PHXInvalidTypeException
```

**Deprecated.** Prefer `allocateVariable2(java.lang.String)` which can properly differentiate between arrays and non-array types. 

Creates a variable from a type string

**Parameters:**
- `Type` - the type string, e.g. "double"

**Returns:**
- the allocated variable

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md)

### allocateArray

```java
@Deprecated
public static PHXSimpleArray allocateArray(java.lang.String arrayType)
                                    throws PHXInvalidTypeException
```

**Deprecated.** Prefer `allocateVariable2(java.lang.String)` which can properly differentiate between arrays and non-array types.

creates an array from a type string.

Creates the PHXSimpleArray type, although it overrides the default behaviour of having the `PHXSimpleArray` store primitives internally in favor of having it store the PHX type.

**Parameters:**
- `arrayType` - the type string, e.g. `"double[5]"`, `"string[3][3]"`, etc.

**Returns:**
- the allocated variable

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md)

### _verifyIsArrayType

```java
public static void _verifyIsArrayType(java.lang.String type)
                               throws PHXInvalidTypeException
```

utility function for verifying that a type string is an array type - it is in the form `"XXXX[#]"`

**Parameters:**
- `Type` - the type string

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md)

### getClass

```java
public static java.lang.Class getClass(java.lang.String type)
                                throws PHXInvalidTypeException
```

returns the class for the specified type. If the specified type is an array, the class of one of its members is returned

**Parameters:**
- `Type` - the type string in format "double" or "double[5]"

**Returns:**
- the class of the specified type

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md)

### getVariableClass

```java
public static java.lang.Class getVariableClass(java.lang.String type)
                                        throws PHXInvalidTypeException
```

Returns the class associated with the type string. This includes array classes if the type ends with "[]" or "Array"

**Parameters:**
- `Type` - the string representing the type, such as "string", "double[]", or "IntegerArray"

**Returns:**
- the class of the variable type

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md) - if the type string does not match a known type

### getVarType

```java
public static java.lang.String getVarType(java.lang.String className)
```

Given the class name, determine the corresponding type.

**Parameters:**
- `className` - class name of the variable, i.e. "PHXDouble", "PHXDoubleArray", etc.

**Returns:**
- variable name type, i.e. "double", "double[]", etc.

### toPHXSimpleType
```java
public static PHXSimpleType toPHXSimpleType(java.lang.Object input,
                                            java.lang.Class<?> simpleTypeClass)
                                     throws PHXTypeMismatchException
```

Converts the given type to the associated PHXSimpleType. This will always create a new object, regardless of whether or not the given type is a PHXSimpleType. If there is an error converting, or the class does not have an associated [PHXSimpleType](PHXSimpleType.md), this will throw a [`PHXInvalidTypeException`](PHXInvalidTypeException.md)

**Parameters:**
- `input` - the object to convert to a [PHXSimpleType](PHXSimpleType.md)
- `simpleTypeClass` - the class of [PHXSimpleType](PHXSimpleType.md) to convert to

**Returns:**
- a new object containing the value of the input; in the case of [`PHXRawFile`](PHXRawFile.md) and [`PHXRawFileArray`](PHXRawFileArray.md), only a new instance is returned, the value is not copied

**Throws:**
- [`PHXTypeMismatchException`](PHXTypeMismatchException.md) - if there is an error creating the [PHXSimpleType](PHXSimpleType.md) object, or if the given type cannot be converted to a [PHXSimpleType](PHXSimpleType.md)
