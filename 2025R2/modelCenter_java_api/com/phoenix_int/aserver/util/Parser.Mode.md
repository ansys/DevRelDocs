# com.phoenix_int.aserver.util
## Enum: Parser.Mode

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Enum<Parser.Mode>
    ↳ com.phoenix_int.aserver.util.Parser.Mode
```

**All Implemented Interfaces:**
- java.io.Serializable, java.lang.Comparable<Parser.Mode>

**Enclosing interface:**
- [Parser](../../../../com/phoenix_int/aserver/util/Parser.html)

--- 
**Declaration**

```java
public static enum Parser.Mode
extends java.lang.Enum<Parser.Mode>
```

File-access mode. Moved to type-safe enum from legacy integer constants.

## Enum Constant Summary

| Enum Constant and Description |
|------------------------------|
| `AUTOMATIC` |
| `BUFFERED` |
| `RANDOM` |

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `static long` | `FILE_SIZE_LIMIT` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `static Parser.Mode` | `fromCode(int code)` |
| `int` | `getCode()`<br>Retrieve the legacy integer code assigned to this access mode |
| `IPHXLineStore` | `newLineStore(java.io.File file)` |
| `IPHXLineStore` | `newLineStore(java.io.File file, com.phoenix_int.util.PHXFileUtils.Encoding encoding)` |
| `abstract IPHXLineStore` | `newLineStore(java.io.File file, com.phoenix_int.util.PHXFileUtils.Encoding encoding, com.phoenix_int.util.IProgressListener progress)`<br>Create a new line store consistent with the file-access mode |
| `static Parser.Mode` | `valueOf(java.lang.String name)`<br>Returns the enum constant of this type with the specified name. |
| `static Parser.Mode[]` | `values()`<br>Returns an array containing the constants of this enum type, in the order they are declared. |

### Methods inherited from class java.lang.Enum

`clone, compareTo, equals, finalize, getDeclaringClass, hashCode, name, ordinal, toString, valueOf`

### Methods inherited from class java.lang.Object

`getClass, notify, notifyAll, wait, wait, wait`

## Enum Constant Detail

### RANDOM

```java
public static final Parser.Mode RANDOM
```

### BUFFERED

```java
public static final Parser.Mode BUFFERED
```

### AUTOMATIC

```java
public static final Parser.Mode AUTOMATIC
```

## Field Detail

### FILE_SIZE_LIMIT

```java
public static final long FILE_SIZE_LIMIT
```

**See Also:**
- [Constant Field Values](../../../../constant-values.html#com.phoenix_int.aserver.util.Parser.Mode.FILE_SIZE_LIMIT)

## Method Detail

### values

```java
public static Parser.Mode[] values()
```
Returns an array containing the constants of this enum type, in the order they are declared.  This method may be used to iterate over the constants as follows:

```java
for (Parser.Mode c : Parser.Mode.values())
     System.out.println(c);
```

**Returns:**
- an array containing the constants of this enum type, in the order they are declared

### valueOf

```java
public static Parser.Mode valueOf(java.lang.String name)
```
Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

**Parameters:**
- `name` - the name of the enum constant to be returned.

**Returns:**
- the enum constant with the specified name

**Throws:**
- `java.lang.IllegalArgumentException` - if this enum type has no constant with the specified name
- `java.lang.NullPointerException` - if the argument is null

### getCode

```java
public int getCode()
```
Retrieve the legacy integer code assigned to this access mode

**Returns:**
- code

### newLineStore

```java
public IPHXLineStore newLineStore(java.io.File file)
                           throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### newLineStore

```java
public IPHXLineStore newLineStore(java.io.File file, 
                                  com.phoenix_int.util.PHXFileUtils.Encoding encoding)
                           throws java.io.IOException
```

**Throws:**
- `java.io.IOException`

### newLineStore

```java
public abstract IPHXLineStore newLineStore(java.io.File file, 
                                           com.phoenix_int.util.PHXFileUtils.Encoding encoding, 
                                           com.phoenix_int.util.IProgressListener progress)
                                    throws java.io.IOException
```
Create a new line store consistent with the file-access mode

**Parameters:**
- `file` -

**Returns:**
- line store

**Throws:**
- `java.io.IOException`

### fromCode

```java
public static Parser.Mode fromCode(int code)
```
