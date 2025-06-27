======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Class PHXTypeFactory
- java.lang.Object
- - com.phoenix_int.aserver.types.PHXTypeFactory
- ---

```java
public class PHXTypeFactory
extends java.lang.Object
```
A class for creating variables
**Author:**
: Woyak, 6/00
**See Also:**
: [PHXSimpleType](../../../../com/phoenix_int/aserver/types/PHXSimpleType.html)- =========== FIELD SUMMARY ===========
- ### Field Summary

| Modifier and Type | Field and Description |
| --- | --- |
| Modifier and Type | Field and Description |
| `static java.lang.String` | `BOOLEAN`Type identifier for a boolean type |
| `static java.lang.String` | `BOOLEAN_ARRAY`Type identifier for a boolean array type |
| `static java.lang.String` | `DOUBLE`Type identifier for a double type |
| `static java.lang.String` | `DOUBLE_ARRAY`Type identifier for a double array type |
| `static java.lang.String` | `FILE`Type identifier for a file type |
| `static java.lang.String` | `FILE_ARRAY`Type identifier for a file array type |
| `static java.lang.String` | `GEOMETRY`Type identifier for a geometry type |
| `static java.lang.String` | `LONG`Type identifier for a long type |
| `static java.lang.String` | `LONG_ARRAY`Type identifier for a long array type |
| `static java.lang.String` | `OBJECT`Type identifier for an object type |
| `static java.lang.String` | `REFERENCE`Type identifier for a reference type |
| `static java.lang.String` | `REFERENCE_ARRAY`Type identifier for a reference array type |
| `static java.lang.String` | `STRING`Type identifier for a string type |
| `static java.lang.String` | `STRING_ARRAY`Type identifier for a string array type |
| `static java.lang.String` | `UNKNOWN`Type identifier for an unknown type |
| `static java.lang.String` | `UNKNOWN_ARRAY`Type identifier for an unknown array type |
======== CONSTRUCTOR SUMMARY ========
- ### Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXTypeFactory()` |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `static void` | `_verifyIsArrayType(java.lang.String type)`utility function for verifying that a type string is an
 array type - it is in the form "XXXX[#]" |
| `staticPHXSimpleArray` | `allocateArray(java.lang.String arrayType)`Deprecated.Prefer[allocateVariable2(java.lang.String)](../../../../com/phoenix_int/aserver/types/PHXTypeFactory.html#allocateVariable2-java.lang.String-)which can properly differentiate between arrays 
  and non-array types. |
| `staticIPHXType2` | `allocateVariable(java.lang.String type)`Deprecated.Prefer[allocateVariable2(java.lang.String)](../../../../com/phoenix_int/aserver/types/PHXTypeFactory.html#allocateVariable2-java.lang.String-)which can properly differentiate between arrays 
  and non-array types. |
| `staticIPHXType2` | `allocateVariable2(java.lang.String type)`Allocate a given variable for the given type string |
| `static java.lang.Class` | `getClass(java.lang.String type)`returns the class for the specified type. |
| `static java.lang.Class` | `getVariableClass(java.lang.String type)`Returns the class associated with the type string. |
| `static java.lang.String` | `getVarType(java.lang.String className)`Given the class name, determine the corresponding type. |
| `staticPHXSimpleType` | `toPHXSimpleType(java.lang.Object input,
               java.lang.Class<?> simpleTypeClass)`Converts the given type to the associated PHXSimpleType. |

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`- ============ FIELD DETAIL ===========
- ### Field Detail

- #### UNKNOWN

```java
public static final java.lang.String UNKNOWN
```
Type identifier for an unknown type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.UNKNOWN)

- #### UNKNOWN_ARRAY

```java
public static final java.lang.String UNKNOWN_ARRAY
```
Type identifier for an unknown array type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.UNKNOWN_ARRAY)

- #### BOOLEAN

```java
public static final java.lang.String BOOLEAN
```
Type identifier for a boolean type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.BOOLEAN)

- #### BOOLEAN_ARRAY

```java
public static final java.lang.String BOOLEAN_ARRAY
```
Type identifier for a boolean array type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.BOOLEAN_ARRAY)

- #### DOUBLE

```java
public static final java.lang.String DOUBLE
```
Type identifier for a double type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.DOUBLE)

- #### DOUBLE_ARRAY

```java
public static final java.lang.String DOUBLE_ARRAY
```
Type identifier for a double array type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.DOUBLE_ARRAY)

- #### LONG

```java
public static final java.lang.String LONG
```
Type identifier for a long type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.LONG)

- #### LONG_ARRAY

```java
public static final java.lang.String LONG_ARRAY
```
Type identifier for a long array type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.LONG_ARRAY)

- #### FILE

```java
public static final java.lang.String FILE
```
Type identifier for a file type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.FILE)

- #### FILE_ARRAY

```java
public static final java.lang.String FILE_ARRAY
```
Type identifier for a file array type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.FILE_ARRAY)

- #### STRING

```java
public static final java.lang.String STRING
```
Type identifier for a string type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.STRING)

- #### STRING_ARRAY

```java
public static final java.lang.String STRING_ARRAY
```
Type identifier for a string array type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.STRING_ARRAY)

- #### GEOMETRY

```java
public static final java.lang.String GEOMETRY
```
Type identifier for a geometry type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.GEOMETRY)

- #### OBJECT

```java
public static final java.lang.String OBJECT
```
Type identifier for an object type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.OBJECT)

- #### REFERENCE

```java
public static final java.lang.String REFERENCE
```
Type identifier for a reference type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.REFERENCE)

- #### REFERENCE_ARRAY

```java
public static final java.lang.String REFERENCE_ARRAY
```
Type identifier for a reference array type
**See Also:**
: [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.types.PHXTypeFactory.REFERENCE_ARRAY)
========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXTypeFactory

```java
public PHXTypeFactory()
```
============ METHOD DETAIL ==========
- ### Method Detail

- #### allocateVariable2

```java
public static IPHXType2 allocateVariable2(java.lang.String type)
                                   throws PHXInvalidTypeException
```
Allocate a given variable for the given type string
**Parameters:**
: `type`- the type of the variable to instantiate
**Returns:**
: the instantiated variable
**Throws:**
: `PHXInvalidTypeException`

- #### allocateVariable

```java
@Deprecated
public static IPHXType2 allocateVariable(java.lang.String type)
                                               throws PHXInvalidTypeException
```
Deprecated.Prefer[allocateVariable2(java.lang.String)](../../../../com/phoenix_int/aserver/types/PHXTypeFactory.html#allocateVariable2-java.lang.String-)which can properly differentiate between arrays 
  and non-array types.creates a variable from a type string
**Parameters:**
: `type`- the type string, e.g. "double"
**Returns:**
: the allocated variable
**Throws:**
: `PHXInvalidTypeException`

- #### allocateArray

```java
@Deprecated
public static PHXSimpleArray allocateArray(java.lang.String arrayType)
                                                 throws PHXInvalidTypeException
```
Deprecated.Prefer[allocateVariable2(java.lang.String)](../../../../com/phoenix_int/aserver/types/PHXTypeFactory.html#allocateVariable2-java.lang.String-)which can properly differentiate between arrays 
  and non-array types.creates an array from a type string.
 Creates the PHXSimpleArray type, although it overrides the default
 behaviour of having he PHXSimpleArray store primitives internally
 in favor of having it store the PHX type.
**Parameters:**
: `arrayType`- the type string, e.g. "double[5]", "string[3][3]", etc.
**Returns:**
: the allocated variable
**Throws:**
: `PHXInvalidTypeException`

- #### _verifyIsArrayType

```java
public static void _verifyIsArrayType(java.lang.String type)
                               throws PHXInvalidTypeException
```
utility function for verifying that a type string is an
 array type - it is in the form "XXXX[#]"
**Parameters:**
: `type`- the type string
**Throws:**
: `PHXInvalidTypeException`

- #### getClass

```java
public static java.lang.Class getClass(java.lang.String type)
                                throws PHXInvalidTypeException
```
returns the class for the specified type. If the specified type is an
 array, the class of one of it's members is returned
**Parameters:**
: `type`- the type string in format "double" or "double[5]"
**Returns:**
: the class of the specified type
**Throws:**
: `PHXInvalidTypeException`

- #### getVariableClass

```java
public static java.lang.Class getVariableClass(java.lang.String type)
                                        throws PHXInvalidTypeException
```
Returns the class associated with the type string. This includes array classes if the type ends with "[]" or "Array"
**Parameters:**
: `type`- the string representing the type, such as "string", "double[]", or "IntegerArray"
**Returns:**
: the class of the variable type
**Throws:**
: `PHXInvalidTypeException`- if the type string does not match a known type

- #### getVarType

```java
public static java.lang.String getVarType(java.lang.String className)
```
Given the class name, determine the corresponding type.
**Parameters:**
: `className`- class name of the variable, i.e. "PHXDouble", "PHXDoubleArray", etc.
**Returns:**
: variable name type, i.e. "double", "double[]", etc.

- #### toPHXSimpleType

```java
public static PHXSimpleType toPHXSimpleType(java.lang.Object input,
                                            java.lang.Class<?> simpleTypeClass)
                                     throws PHXTypeMismatchException
```
Converts the given type to the associated PHXSimpleType. This will always create a new object, regardless of 
 whether or not the given type is a PHXSimpleType. If there is an error converting, or the class does not have an
 associated PHXSimpleType, this will throw a PHXInvalidTypeException
**Parameters:**
: `input`- the object to convert to a PHXSimpleType
: `simpleTypeClass`- the class of PHXSimpleType to convert to
**Returns:**
: a new object containing the value of the input; in the case of PHXRawFile and PHXRawFileArray, only a new
 instance is returned, the value is not copied
**Throws:**
: `PHXTypeMismatchException`- if there is an error creating the PHXSimpleType object, or if the given type 
 cannot be converted to a PHXSimpleType
========= END OF CLASS DATA =========