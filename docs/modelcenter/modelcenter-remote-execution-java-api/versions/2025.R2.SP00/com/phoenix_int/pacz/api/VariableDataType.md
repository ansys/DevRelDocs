# Enum: VariableDataType

**Package:** `com.phoenix_int.pacz.api`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Enum<VariableDataType>
    ↳ com.phoenix_int.pacz.api.VariableDataType
```

**Implemented Interfaces**
- `java.io.Serializable`, `java.lang.Comparable<VariableDataType>`

---

**Deprecated.**

`IRuntimeVariables` are now using the canonical PHX type identifiers which are literal strings (see [`com.phoenix_int.pacz.api.v2.IRuntimeVariables`](v2/IRuntimeVariable.md))

```java
@Deprecated
public enum VariableDataType
extends java.lang.Enum<VariableDataType>
```

Supported variable data types

## Enum Constant Summary

| Enum Constant and Description |
|------------------------------|
| `BOOLEAN`<br>**Deprecated.**<br>Variable is of boolean type |
| `BOOLEAN_ARRAY`<br>**Deprecated.**<br>Variable is of boolean array type |
| `DOUBLE`<br>**Deprecated.**<br>Variable is of double type |
| `DOUBLE_ARRAY`<br>**Deprecated.**<br>Variable is of double array type |
| `FILE`<br>**Deprecated.**<br>Variable is of file type |
| `FILE_ARRAY`<br>**Deprecated.**<br>Variable is of file array type |
| `INTEGER`<br>**Deprecated.**<br>Variable is of integer type |
| `INTEGER_ARRAY`<br>**Deprecated.**<br>Variable is of integer array type |
| `STRING`<br>**Deprecated.**<br>Variable is of string type |
| `STRING_ARRAY`<br>**Deprecated.**<br>Variable is of string array type |
| `UNSPECIFIED`<br>**Deprecated.**<br>Variable type is unspecified |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `toString()`<br>**Deprecated.**<br>Get value of enumeration |
| `static VariableDataType` | `valueOf(java.lang.String name)`<br>**Deprecated.**<br>Returns the enum constant of this type with the specified name. |
| `static VariableDataType[]` | `values()`<br>**Deprecated.**<br>Returns an array containing the constants of this enum type, in the order they are declared. |

### Methods inherited from class `java.lang.Enum`
`clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

### Methods inherited from class `java.lang.Object`
`getClass`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Enum Constant Detail

### UNSPECIFIED

```java
public static final VariableDataType UNSPECIFIED
```

**Deprecated.**

Variable type is unspecified

### BOOLEAN

```java
public static final VariableDataType BOOLEAN
```

**Deprecated.**

Variable is of boolean type

### STRING

```java
public static final VariableDataType STRING
```

**Deprecated.**

Variable is of string type

### DOUBLE

```java
public static final VariableDataType DOUBLE
```

**Deprecated.**

Variable is of double type

### INTEGER

```java
public static final VariableDataType INTEGER
```

**Deprecated.**

Variable is of integer type

### FILE

```java
public static final VariableDataType FILE
```

**Deprecated.**

Variable is of file type

### BOOLEAN_ARRAY

```java
public static final VariableDataType BOOLEAN_ARRAY
```

**Deprecated.**

Variable is of boolean array type

### STRING_ARRAY

```java
public static final VariableDataType STRING_ARRAY
```

**Deprecated.**

Variable is of string array type

### DOUBLE_ARRAY

```java
public static final VariableDataType DOUBLE_ARRAY
```

**Deprecated.**

Variable is of double array type

### INTEGER_ARRAY

```java
public static final VariableDataType INTEGER_ARRAY
```

**Deprecated.**

Variable is of integer array type

### FILE_ARRAY

```java
public static final VariableDataType FILE_ARRAY
```

**Deprecated.**

Variable is of file array type

## Method Detail

### values

```java
public static VariableDataType[] values()
```

**Deprecated.**

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

```java
for (VariableDataType c : VariableDataType.values())
    System.out.println(c);
```

**Returns:**
- an array containing the constants of this enum type, in the order they are declared

### valueOf

```java
public static VariableDataType valueOf(java.lang.String name)
```

**Deprecated.**

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

**Parameters:**
- `name` - the name of the enum constant to be returned.

**Returns:**
- the enum constant with the specified name

**Throws:**
- `java.lang.IllegalArgumentException` - if this enum type has no constant with the specified name
- `java.lang.NullPointerException` - if the argument is null

### toString

```java
public java.lang.String toString()
```

**Deprecated.**

Get value of enumeration

**Overrides:**
- `toString` in class `java.lang.Enum<VariableDataType>`

**Returns:**
- enumeration value